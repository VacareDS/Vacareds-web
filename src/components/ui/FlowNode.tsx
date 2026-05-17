import React from 'react';

export interface FlowNodeProps {
  title: string;
  desc?: string;
  stepNum?: number | string;
  className?: string;
}

export default function FlowNode({
  title,
  desc,
  stepNum,
  className = ''
}: FlowNodeProps) {
  return (
    <div className={`bg-white rounded-[16px] border-[0.5px] border-[rgba(28,24,40,0.1)] p-[20px] shadow-[0_12px_32px_rgba(28,24,40,0.05)] relative flex flex-col items-center text-center ${className}`}>
      
      {stepNum && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-[28px] h-[28px] rounded-full grad-bg text-white text-[12px] font-bold flex items-center justify-center border-[3px] border-[var(--cream)] shadow-[0_4px_10px_rgba(232,65,122,0.2)]">
          {stepNum}
        </div>
      )}
      
      <h5 className={`text-[14px] font-extrabold tracking-[-0.2px] text-[var(--dark)] ${stepNum ? 'mt-[12px]' : ''} mb-[6px]`}>
        {title}
      </h5>
      
      {desc && (
        <p className="text-[12px] leading-[1.5] text-[var(--muted)]">
          {desc}
        </p>
      )}
    </div>
  );
}
