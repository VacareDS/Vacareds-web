import React from 'react';

export interface DayProgressBarProps {
  daysTotal: number;
  daysCurrent: number;
  className?: string;
}

export default function DayProgressBar({
  daysTotal,
  daysCurrent,
  className = ''
}: DayProgressBarProps) {
  
  const progressPercentage = Math.min(100, Math.max(0, (daysCurrent / daysTotal) * 100));

  return (
    <div className={`w-full flex flex-col gap-[12px] ${className}`}>
      <div className="flex justify-between items-end">
        <span className="text-[13px] font-extrabold text-[var(--dark)]">
          Día {daysCurrent} de {daysTotal}
        </span>
        <span className="text-[11px] font-bold tracking-[0.1em] text-[var(--mg)] uppercase">
          {Math.round(progressPercentage)}% Completado
        </span>
      </div>
      
      <div className="h-[8px] w-full bg-[rgba(28,24,40,0.06)] rounded-full overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 bottom-0 grad-bg rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
