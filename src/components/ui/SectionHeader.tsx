import React from 'react';

export interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const center = align === 'center';

  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <div className={`inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase mb-[18px] ${center ? 'justify-center' : ''} ${isDark ? 'text-[var(--mg)]' : 'text-[var(--muted)]'}`}>
        <i className={`w-[18px] h-[1.5px] block ${isDark ? 'bg-[var(--mg)]' : 'bg-[var(--muted)]'}`} />
        {eyebrow}
        {center && <i className={`w-[18px] h-[1.5px] block ${isDark ? 'bg-[var(--mg)]' : 'bg-[var(--muted)]'}`} />}
      </div>
      <h2 className={`text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[12px] ${isDark ? 'text-[var(--cream)]' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] leading-[1.7] max-w-[460px] ${center ? 'mx-auto' : ''} ${isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
