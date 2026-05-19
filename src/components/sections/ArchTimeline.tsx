'use client';

import { useEffect, useRef, useState } from 'react';

interface Step { num: string; title: string; p: string; }

export default function ArchTimeline({ steps }: { steps: Step[] }) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(prev => new Set([...prev, idx]));
        },
        { threshold: 0.35, rootMargin: '0px 0px -60px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="flex flex-col">
      {steps.map((step, idx) => {
        const active = visible.has(idx);
        const last = idx === steps.length - 1;
        return (
          <div
            key={idx}
            ref={el => { itemRefs.current[idx] = el; }}
            className={`flex gap-[28px] lg:gap-[52px] items-start relative ${!last ? 'pb-[52px]' : ''}`}
          >
            {!last && (
              <div className={`absolute left-[31px] lg:left-[35px] top-[64px] lg:top-[72px] bottom-0 w-[1.5px] transition-colors duration-700 ${active ? 'bg-gradient-to-b from-[rgba(232,65,122,0.55)] to-[rgba(247,246,242,0.03)]' : 'bg-[rgba(247,246,242,0.07)]'}`} />
            )}
            <div className={`w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] rounded-[16px] flex items-center justify-center font-extrabold text-[18px] lg:text-[20px] shrink-0 relative z-[1] transition-all duration-500 ${active ? 'grad-bg text-white shadow-[0_8px_28px_rgba(232,65,122,0.3)]' : 'bg-[rgba(247,246,242,0.06)] text-[rgba(247,246,242,0.2)]'}`}>
              {step.num}
            </div>
            <div className={`flex-1 pt-[14px] lg:pt-[20px] transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-25 translate-y-[12px]'}`}>
              <h3 className="text-[18px] lg:text-[22px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.5px] leading-[1.25]">{step.title}</h3>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[600px]">{step.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
