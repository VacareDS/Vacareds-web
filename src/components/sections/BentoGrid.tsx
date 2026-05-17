import React, { ReactNode } from 'react';

export interface BentoGridProps {
  items: Array<{
    span: 4 | 5 | 7 | 8 | 12;
    icon?: ReactNode;
    tag?: string;
    title: string;
    body: string;
    accent?: ReactNode; // For the decorative bottom-right element or emoji
  }>;
  cols?: 12 | 6;
  background?: 'dark' | 'light';
}

export default function BentoGrid({
  items,
  cols = 12,
  background = 'light'
}: BentoGridProps) {
  const isDark = background === 'dark';
  
  const colClass = cols === 12 ? 'lg:grid-cols-12' : 'lg:grid-cols-6';
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${colClass} gap-[12px] md:gap-[14px]`}>
      {items.map((item, idx) => {
        const spanClass = {
          4: 'lg:col-span-4',
          5: 'lg:col-span-5',
          7: 'lg:col-span-7',
          8: 'lg:col-span-8',
          12: 'lg:col-span-12',
        }[item.span] || 'lg:col-span-12';

        return (
          <div 
            key={idx} 
            className={`${spanClass} rounded-[16px] md:rounded-[18px] p-[26px] md:p-[28px] relative overflow-hidden transition-all duration-200 hover:-translate-y-[3px] 
            ${isDark 
              ? 'bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)]' 
              : 'bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] hover:shadow-[0_16px_40px_rgba(28,24,40,0.08)]'}`}
          >
            {item.icon && (
              <div className="w-[44px] h-[44px] rounded-[11px] flex items-center justify-center mb-[18px]" style={{ background: 'linear-gradient(135deg, rgba(232,65,122,0.1), rgba(245,166,35,0.08))' }}>
                {item.icon}
              </div>
            )}
            
            {item.tag && (
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">
                {item.tag}
              </span>
            )}
            
            <h3 className={`text-[15px] md:text-[16px] font-extrabold mb-[8px] tracking-[-0.3px] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
              {item.title}
            </h3>
            
            <p className={`text-[13px] leading-[1.65] ${isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>
              {item.body}
            </p>
            
            {item.accent && (
              <div className="absolute bottom-[18px] right-[18px] text-[28px] font-extrabold opacity-[0.06] tracking-[-1px] pointer-events-none">
                {item.accent}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
