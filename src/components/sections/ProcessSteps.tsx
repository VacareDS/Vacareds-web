import React from 'react';

export interface ProcessStep {
  num: string | number;
  title: string;
  body: string;
  time?: string;
  tag?: string;
  takeaway?: string;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: 'horizontal' | 'timeline';
  background?: 'dark' | 'light';
}

export default function ProcessSteps({
  steps,
  variant = 'horizontal',
  background = 'dark'
}: ProcessStepsProps) {
  const isDark = background === 'dark';

  if (variant === 'timeline') {
    return (
      <div className="relative flex flex-col gap-0">
        <div className="absolute left-[28px] top-[40px] bottom-[40px] w-[2px] opacity-25" style={{ background: 'linear-gradient(to bottom, var(--mg), var(--or), var(--am))' }} />
        
        {steps.map((step, idx) => (
          <div key={idx} className="grid grid-cols-[48px_1fr] sm:grid-cols-[60px_1fr] gap-0 relative">
            <div className="flex flex-col items-center pt-[4px]">
              <div className="w-[56px] h-[56px] rounded-[14px] grad-bg flex items-center justify-center text-[13px] font-extrabold text-white shrink-0 z-[1] shadow-[0_8px_24px_rgba(232,65,122,0.2)]">
                {step.num}
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 w-[2px] mt-[8px]" style={{ background: 'linear-gradient(to bottom, rgba(232,65,122,0.15), rgba(245,166,35,0.05))' }} />
              )}
            </div>
            
            <div className={`ml-[20px] mb-[14px] rounded-[18px] p-[28px_32px] relative overflow-hidden transition-transform duration-200 hover:-translate-y-[2px]
              ${isDark ? 'bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)]' : 'bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] hover:shadow-[0_14px_36px_rgba(28,24,40,0.07)]'}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] grad-bg" />
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[80px] font-extrabold italic text-[rgba(28,24,40,0.03)] pointer-events-none tracking-[-4px]">
                {typeof step.num === 'number' && step.num < 10 ? `0${step.num}` : step.num}
              </div>
              
              {step.tag && <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[10px] relative z-[1]">{step.tag}</div>}
              <h3 className={`text-[18px] font-extrabold mb-[10px] tracking-[-0.4px] relative z-[1] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>{step.title}</h3>
              <p className={`text-[14px] leading-[1.7] mb-[16px] relative z-[1] ${isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{step.body}</p>
              
              {step.takeaway && (
                <div className={`rounded-[10px] p-[12px_16px] text-[13px] font-semibold flex items-start gap-[8px] relative z-[1]
                  ${isDark ? 'bg-[rgba(247,246,242,0.05)] text-[var(--cream)]' : 'bg-[rgba(232,65,122,0.06)] text-[var(--dark)]'}`}
                >
                  <span className="text-[var(--mg)] font-extrabold shrink-0">→</span>
                  {step.takeaway}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // HORIZONTAL variant
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] lg:gap-0 relative">
      <div className="hidden lg:block absolute top-[28px] left-[48px] right-[calc(25%-48px)] h-[1px] pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(232,65,122,0.3), rgba(245,166,35,0.3))' }} />
      
      {steps.map((step, idx) => (
        <div key={idx} className="px-[20px] relative z-[1]">
          <div className="w-[56px] h-[56px] rounded-[14px] grad-bg flex items-center justify-center text-[18px] font-extrabold text-white mb-[20px] shadow-[0_8px_24px_rgba(232,65,122,0.2)]">
            {step.num}
          </div>
          <h3 className={`text-[15px] font-extrabold mb-[8px] tracking-[-0.3px] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
            {step.title}
          </h3>
          <p className={`text-[13px] leading-[1.65] ${isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>
            {step.body}
          </p>
          {step.time && (
            <span className="inline-block mt-[12px] text-[11px] font-bold text-[var(--am)] tracking-[0.06em] uppercase">
              {step.time}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
