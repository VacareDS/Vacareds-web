import React from 'react';

export interface EyebrowProps {
  text: string;
  className?: string;
}

export default function Eyebrow({ text, className = '' }: EyebrowProps) {
  return (
    <div className={`inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] ${className}`}>
      <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
      {text}
    </div>
  );
}
