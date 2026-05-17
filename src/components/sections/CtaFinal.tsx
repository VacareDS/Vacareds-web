'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import { useMeeting } from '@/components/layout/HomeClient';

export interface CtaFinalProps {
  headline: ReactNode;
  subheadline: string;
  cards?: Array<{ tag: string; title: string; desc: string; href: string }>;
  mainCta: { label: string; href: string };
  disclaimer: string;
  watermarkText?: string;
}

export default function CtaFinal({
  headline,
  subheadline,
  cards = [],
  mainCta,
  disclaimer,
  watermarkText,
}: CtaFinalProps) {
  const meeting = useMeeting();

  return (
    <section id="ctaf" className="bg-[var(--dark)] relative overflow-hidden px-6 lg:px-[52px] py-[80px] lg:py-[120px]">
      {/* Gradient tint overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none gb" />

      {/* Decorative circles */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full border-[0.5px] border-[rgba(232,65,122,0.08)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[200px] h-[200px] rounded-full border-[0.5px] border-[rgba(245,166,35,0.06)] pointer-events-none" />

      {watermarkText && (
        <AnimatedWatermark
          text={watermarkText}
          direction="bottom"
          className="bottom-[-30px] left-1/2 -translate-x-1/2 text-[clamp(70px,16vw,200px)] italic text-[rgba(247,246,242,0.05)] tracking-[-4px]"
        />
      )}

      <div className="max-w-[1180px] mx-auto text-center relative z-[1]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted-l)] mb-[20px] justify-center"
        >
          <i className="w-[18px] h-[1.5px] gb block" />
          Siguiente paso
          <i className="w-[18px] h-[1.5px] gb block" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[clamp(36px,5.5vw,68px)] font-extrabold tracking-[-2.5px] leading-[1.04] text-[var(--cream)] mb-[14px]"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-[17px] text-[var(--muted-l)] max-w-[460px] mx-auto mb-[44px] leading-[1.7]"
        >
          {subheadline}
        </motion.p>

        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] max-w-[840px] mx-auto mb-[40px]">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <Link href={card.href} className="bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[16px] p-[24px] text-left transition-all hover:bg-[rgba(247,246,242,0.08)] hover:border-[rgba(247,246,242,0.2)] hover:-translate-y-[2px] block no-underline group">
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.4)] mb-[8px]">{card.tag}</div>
                  <h4 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.2px]">{card.title}</h4>
                  <p className="text-[13px] text-[var(--muted-l)] leading-[1.6] mb-[14px]">{card.desc}</p>
                  <div className="text-[16px] font-extrabold gt inline-block transform transition-transform group-hover:translate-x-1">→</div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={() => meeting?.openMeeting()}
            className="inline-block gb text-white border-none py-[20px] px-[48px] rounded-[14px] font-extrabold text-[19px] leading-none transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(232,65,122,0.35)] tracking-[-0.3px] relative overflow-hidden animate-[pulse-glow_3s_ease-in-out_infinite] cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
            <span className="relative z-10">{mainCta.label}</span>
          </button>
        </motion.div>

        <p className="text-[13px] text-[rgba(247,246,242,0.35)] mt-[18px]">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
