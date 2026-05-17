import React, { ReactNode } from 'react';

export interface MockReportProps {
  title: string;
  score: number;
  children?: ReactNode;
  className?: string;
}

export default function MockReport({
  title,
  score,
  children,
  className = ''
}: MockReportProps) {
  return (
    <div className={`bg-white rounded-[20px] border-[0.5px] border-[rgba(28,24,40,0.08)] shadow-[0_24px_60px_rgba(28,24,40,0.06)] overflow-hidden flex flex-col ${className}`}>
      
      {/* Header */}
      <div className="p-[20px] md:p-[24px] border-b-[0.5px] border-[rgba(28,24,40,0.08)] bg-[rgba(247,246,242,0.6)] flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[4px]">Reporte de Auditoría</span>
          <h4 className="text-[15px] font-extrabold text-[var(--dark)] tracking-[-0.2px]">{title}</h4>
        </div>
        <div className="w-[44px] h-[44px] rounded-full flex flex-col items-center justify-center border-[2px] border-[var(--mg)] text-[var(--mg)] bg-[rgba(232,65,122,0.05)]">
          <span className="text-[14px] font-extrabold leading-none">{score}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-[20px] md:p-[24px] flex flex-col gap-[16px] bg-white">
        {children ? children : (
          <>
            {/* Skeleton lines if no children */}
            <div className="h-[12px] bg-[rgba(28,24,40,0.04)] rounded-full w-[80%]" />
            <div className="h-[12px] bg-[rgba(28,24,40,0.04)] rounded-full w-[60%]" />
            <div className="h-[12px] bg-[rgba(28,24,40,0.04)] rounded-full w-[90%]" />
          </>
        )}
      </div>

    </div>
  );
}
