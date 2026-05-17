'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';

export interface StatsStripProps {
  variant?: 'gradient' | 'dark' | 'light';
  stats: Array<{ num: string; label: string }>;
  headline?: string;
  subheadline?: string;
  watermarkText?: string;
}

export default function StatsStrip({
  variant = 'gradient',
  stats,
  headline,
  subheadline,
  watermarkText = '2026'
}: StatsStripProps) {
  const isGradient = variant === 'gradient';
  const isDark = variant === 'dark';
  
  const bgClass = isGradient 
    ? 'grad-bg' 
    : isDark ? 'bg-[var(--dark)]' : 'bg-[var(--cream)]';
    
  const textClass = isGradient || isDark ? 'text-white' : 'text-[var(--dark)]';
  const labelClass = isGradient 
    ? 'text-[rgba(255,255,255,0.65)]' 
    : isDark ? 'text-[rgba(247,246,242,0.65)]' : 'text-[var(--muted)]';
  
  const borderClass = isGradient || isDark 
    ? 'border-[rgba(255,255,255,0.12)]' 
    : 'border-[rgba(28,24,40,0.12)]';

  return (
    <section className={`relative overflow-hidden ${bgClass}`}>
      {isGradient && watermarkText && (
        <AnimatedWatermark
          text={watermarkText}
          direction="right"
          className="-bottom-[40px] -right-[20px] text-[clamp(120px,22vw,280px)] text-[rgba(255,255,255,0.06)] tracking-[-8px] italic"
        />
      )}

      {(headline || subheadline) && (
        <div className="max-w-[1280px] mx-auto px-6 md:px-[52px] pt-[60px] pb-[20px] relative z-[1]">
          {headline && <h2 className={`text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px] ${textClass}`}>{headline}</h2>}
          {subheadline && <p className={`text-[16px] leading-[1.75] max-w-[580px] ${labelClass}`}>{subheadline}</p>}
        </div>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-[1] ${headline ? 'pt-0' : ''}`}>
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-[36px] md:p-[52px_40px] text-center border-b sm:border-b-0 sm:border-r border-solid ${borderClass} ${idx === stats.length - 1 ? 'sm:border-r-0' : ''}`}
          >
            <span className={`text-[clamp(48px,5.5vw,72px)] font-extrabold tracking-[-3px] leading-none block ${textClass}`}>
              {stat.num}
            </span>
            <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase mt-[10px] block leading-[1.5] ${labelClass}`}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
