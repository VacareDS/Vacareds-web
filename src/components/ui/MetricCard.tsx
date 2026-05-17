import React from 'react';

export interface MetricCardProps {
  val: string;
  label: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function MetricCard({
  val,
  label,
  variant = 'light',
  className = ''
}: MetricCardProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex flex-col p-[24px] rounded-[16px] border-[0.5px] ${isDark ? 'bg-[rgba(247,246,242,0.03)] border-[rgba(247,246,242,0.08)]' : 'bg-white border-[rgba(28,24,40,0.08)] shadow-[0_8px_24px_rgba(28,24,40,0.04)]'} ${className}`}>
      <span className={`text-[32px] font-extrabold tracking-[-1px] mb-[4px] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
        {val}
      </span>
      <span className={`text-[12px] font-medium leading-[1.4] ${isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>
        {label}
      </span>
    </div>
  );
}
