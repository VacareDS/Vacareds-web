import React, { ReactNode } from 'react';

export interface ArchNodeProps {
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  isActive?: boolean;
  className?: string;
}

export default function ArchNode({
  label,
  sublabel,
  icon,
  isActive = false,
  className = ''
}: ArchNodeProps) {
  return (
    <div className={`flex items-center gap-[12px] p-[16px] rounded-[12px] border-[0.5px] transition-all 
      ${isActive 
        ? 'bg-white border-[var(--mg)] shadow-[0_8px_24px_rgba(232,65,122,0.12)]' 
        : 'bg-[rgba(28,24,40,0.02)] border-[rgba(28,24,40,0.08)]'} ${className}`}
    >
      {icon && (
        <div className={`w-[36px] h-[36px] rounded-[8px] flex items-center justify-center shrink-0 
          ${isActive ? 'grad-bg text-white' : 'bg-[rgba(28,24,40,0.06)] text-[var(--dark)]'}`}
        >
          {icon}
        </div>
      )}
      
      <div className="flex flex-col">
        <span className={`text-[13px] font-extrabold ${isActive ? 'text-[var(--dark)]' : 'text-[var(--dark)]'}`}>
          {label}
        </span>
        {sublabel && (
          <span className="text-[11px] text-[var(--muted)]">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
