'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AuditForm from '@/components/forms/AuditForm';

interface FormTranslations {
  title: string;
  sub: string;
  urlLabel: string;
  urlHint: string;
  emailLabel: string;
  submit: string;
  trust: string;
  optinLabel: string;
  optinLinkText: string;
  optinLinkHref: string;
}

interface AuditoriaHeroMotionProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  proofStat: string;
  proofStatLabel: string;
  proofStatSub: string;
  proofCount: string;
  proofCountLabel: string;
  proofCountSub: string;
  proofQuote: string;
  proofAuthor: string;
  formTranslations: FormTranslations;
  activateCta: string;
}

const floats = [
  { w: 54, h: 54, l: '7%',  t: '17%', delay: 0,    dur: 7.2 },
  { w: 28, h: 28, l: '88%', t: '14%', delay: 1.0,  dur: 8.4 },
  { w: 76, h: 76, l: '81%', t: '64%', delay: 0.5,  dur: 9.0 },
  { w: 18, h: 18, l: '17%', t: '80%', delay: 1.4,  dur: 6.1 },
  { w: 40, h: 40, l: '51%', t: '87%', delay: 0.25, dur: 7.8 },
  { w: 14, h: 14, l: '63%', t: '26%', delay: 1.8,  dur: 5.6 },
  { w: 32, h: 32, l: '34%', t: '6%',  delay: 0.7,  dur: 8.2 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AuditoriaHeroMotion({
  eyebrow, title, subtitle,
  proofStat, proofStatLabel, proofStatSub,
  proofCount, proofCountLabel, proofCountSub,
  proofQuote, proofAuthor,
  formTranslations, activateCta,
}: AuditoriaHeroMotionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[44fr_56fr] gap-[36px] lg:gap-[60px] items-center relative z-10">

      {/* Floating geometric shapes */}
      {floats.map((f, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none hidden lg:block"
          style={{
            width: f.w,
            height: f.h,
            left: f.l,
            top: f.t,
            borderRadius: '28%',
            border: '0.5px solid rgba(247,246,242,0.07)',
            background: 'rgba(247,246,242,0.015)',
          }}
          animate={{ y: ['-8px', '9px', '-8px'], rotate: [0, 4, -4, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── LEFT: Copy + proof ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--mg)] mb-[18px]"
        >
          <span className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.1, ease }}
          className="text-[clamp(30px,4vw,56px)] font-extrabold tracking-[-2px] leading-[1.07] text-[var(--cream)] mb-[16px]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
          className="text-[14px] lg:text-[15px] leading-[1.75] text-[rgba(247,246,242,0.5)] max-w-[420px] mb-[28px]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="grid grid-cols-2 gap-[10px] mb-[20px]"
        >
          <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[14px] p-[14px_16px]">
            <div className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-2px] leading-none gt pb-[3px]">
              {proofStat}
            </div>
            <div className="text-[11px] font-bold text-[var(--cream)] leading-[1.4] mt-[5px]">{proofStatLabel}</div>
            <div className="text-[10px] text-[rgba(247,246,242,0.3)] mt-[2px]">{proofStatSub}</div>
          </div>
          <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[14px] p-[14px_16px]">
            <div className="text-[clamp(26px,2.8vw,38px)] font-extrabold tracking-[-2px] leading-none gt pb-[3px]">
              {proofCount}
            </div>
            <div className="text-[11px] font-bold text-[var(--cream)] leading-[1.4] mt-[5px]">{proofCountLabel}</div>
            <div className="text-[10px] text-[rgba(247,246,242,0.3)] mt-[2px]">{proofCountSub}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease }}
          className="border-l-[2px] border-[var(--mg)] pl-[14px]"
        >
          <p className="text-[13px] text-[rgba(247,246,242,0.52)] leading-[1.65] italic mb-[6px]">
            "{proofQuote}"
          </p>
          <div className="text-[10px] font-bold text-[rgba(247,246,242,0.28)] uppercase tracking-[0.08em]">
            — {proofAuthor}
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: Form (the star) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 85, damping: 18, delay: 0.15 }}
        className="relative"
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-[-40px] rounded-[40px] pointer-events-none blur-[60px] opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(232,65,122,0.5) 0%, transparent 65%)' }}
        />

        <AuditForm translations={formTranslations} />

        {/* Pulse hint below form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-[7px] mt-[14px] text-[11px] text-[rgba(247,246,242,0.22)]"
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[6px] h-[6px] rounded-full bg-[var(--mg)] block shrink-0"
          />
          {activateCta}
        </motion.div>
      </motion.div>

    </div>
  );
}
