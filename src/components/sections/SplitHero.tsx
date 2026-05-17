'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';

export interface SplitHeroProps {
  eyebrow: string;
  headline: ReactNode;
  subheadline: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  leftFloats?: ReactNode;
  rightFloats?: ReactNode;
  watermarkText: string;
  splitPosition?: '52/48' | '54/46' | '55/45';
  rightWatermarkText?: string;
  rightVerticalText?: string;
}

export default function SplitHero({
  eyebrow,
  headline,
  subheadline,
  leftContent,
  rightContent,
  leftFloats,
  rightFloats,
  watermarkText,
  splitPosition = '52/48',
  rightWatermarkText,
  rightVerticalText
}: SplitHeroProps) {
  const leftWidths  = { '52/48': 'w-full lg:w-[52%]', '54/46': 'w-full lg:w-[54%]', '55/45': 'w-full lg:w-[55%]' };
  const rightWidths = { '52/48': 'w-full lg:w-[48%]', '54/46': 'w-full lg:w-[46%]', '55/45': 'w-full lg:w-[45%]' };
  const splitPos    = { '52/48': 'left-[52%]', '54/46': 'left-[54%]', '55/45': 'left-[55%]' };

  return (
    <section
      className="flex flex-col lg:flex-row relative overflow-hidden pt-[64px] lg:pt-0 lg:h-screen lg:max-h-[900px]"
      id="hero"
    >
      {/* ── LEFT ── */}
      <div className={`${leftWidths[splitPosition]} flex flex-col justify-center px-5 md:px-[52px] lg:pl-[52px] lg:pr-[60px] py-[32px] md:py-[48px] lg:pt-[80px] lg:pb-[40px] relative z-[2] bg-[var(--cream)] overflow-hidden`}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(28,24,40,0.07) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
        <AnimatedWatermark
          text={watermarkText}
          direction="left"
          className="-bottom-[30px] -left-[10px] text-[clamp(60px,17vw,200px)] text-[rgba(28,24,40,0.04)]"
        />

        <div className="relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[14px] md:mb-[18px]"
          >
            <i className="w-[20px] h-[1.5px] bg-[var(--mg)] block" />
            {eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(28px,4.8vw,66px)] font-extrabold leading-[1.06] tracking-[-1.5px] md:tracking-[-2.5px] text-[var(--dark)] mb-[12px] md:mb-[16px]"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[14px] md:text-[15px] leading-[1.65] text-[var(--muted)] max-w-[420px] mb-[20px] md:mb-[24px]"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {leftContent}
          </motion.div>
        </div>

        {leftFloats}
      </div>

      {/* SPLIT LINE */}
      <div
        className={`hidden lg:block absolute ${splitPos[splitPosition]} top-0 bottom-0 w-[1.5px] z-[50]`}
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.6) 70%, transparent 100%)' }}
      />

      {/* ── RIGHT ── */}
      <div className={`${rightWidths[splitPosition]} relative overflow-hidden min-h-[360px] lg:min-h-0 flex flex-col`}>
        <div className="absolute inset-0 opacity-[0.92]" style={{ background: 'linear-gradient(145deg, #E8417A 0%, #F07030 45%, #F5A623 100%)' }} />
        <div
          className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }}
        />

        {rightWatermarkText && (
          <AnimatedWatermark
            text={rightWatermarkText}
            direction="right"
            className="-bottom-[20px] -right-[20px] text-[clamp(80px,20vw,260px)] text-[rgba(255,255,255,0.1)] leading-[0.9] tracking-[-8px] italic"
          />
        )}

        {rightVerticalText && (
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] z-[2] hidden lg:block">
            {rightVerticalText}
          </div>
        )}

        {/* Right content — constrained padding so it never overflows above the fold */}
        <div className="absolute inset-0 z-[2] flex flex-col justify-center p-[48px_40px] lg:p-[60px_52px]">
          {rightContent}
        </div>

        {rightFloats}
      </div>
    </section>
  );
}
