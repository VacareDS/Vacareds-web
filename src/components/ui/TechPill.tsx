import React, { ReactNode } from 'react';

export interface TechPillProps {
  icon?: ReactNode;
  label: string;
  className?: string;
}

export default function TechPill({
  icon,
  label,
  className = ''
}: TechPillProps) {
  return (
    <div className={`inline-flex items-center gap-[8px] px-[12px] py-[6px] bg-[rgba(28,24,40,0.04)] border border-[rgba(28,24,40,0.06)] rounded-full text-[12px] font-semibold text-[var(--dark)] transition-all hover:bg-[rgba(28,24,40,0.06)] ${className}`}>
      {icon && <span className="flex items-center justify-center w-[16px] h-[16px] opacity-80">{icon}</span>}
      {label}
    </div>
  );
}
