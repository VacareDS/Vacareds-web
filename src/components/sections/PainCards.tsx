import React from 'react';

export interface PainCardItem {
  num: string;
  text: string;
}

export interface PainCardsProps {
  items: PainCardItem[];
  background?: 'dark' | 'light';
}

export default function PainCards({
  items,
  background = 'dark'
}: PainCardsProps) {
  const isDark = background === 'dark';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[12px] auto-rows-auto">
      {items.map((item, idx) => {
        // Asymmetric grid calculation based on item index to match 7+5 / 4+4+4 pattern
        let spanClass = 'lg:col-span-12';
        
        if (items.length === 5) {
          if (idx === 0) spanClass = 'lg:col-span-7';
          else if (idx === 1) spanClass = 'lg:col-span-5';
          else spanClass = 'lg:col-span-4';
        } else if (items.length === 4) {
          spanClass = 'lg:col-span-6';
        } else if (items.length === 3) {
          spanClass = 'lg:col-span-4';
        }

        return (
          <div 
            key={idx} 
            className={`${spanClass} rounded-[16px] p-[28px] relative overflow-hidden transition-all duration-250 
              ${isDark 
                ? 'bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.35)]' 
                : 'bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] hover:border-[var(--mg)] hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(28,24,40,0.06)]'}`}
          >
            <span className="text-[10px] font-bold tracking-[0.12em] text-[var(--mg)] mb-[14px] block">
              {item.num}
            </span>
            <p className={`text-[15px] leading-[1.65] ${isDark ? 'text-[rgba(247,246,242,0.72)]' : 'text-[var(--dark)]'}`}>
              {item.text}
            </p>
            {isDark && (
              <div className="absolute bottom-[16px] right-[16px] w-[40px] h-[40px] rounded-[8px] bg-[rgba(232,65,122,0.1)] border-[0.5px] border-[rgba(232,65,122,0.2)]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
