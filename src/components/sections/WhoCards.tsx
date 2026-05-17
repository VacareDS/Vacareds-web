'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface WhoCardsProps {
  cards: Array<{
    icon?: string;
    title: string;
    pain?: string;
    sol?: string;
    desc?: string;
  }>;
  background?: 'dark' | 'light';
}

const icons: Record<string, ReactNode> = {
  hostel: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="14" width="28" height="18" rx="3" stroke="url(#gIcon)" strokeWidth="2"/><path d="M4 20h28" stroke="url(#gIcon)" strokeWidth="1.5"/><path d="M18 4v10" stroke="url(#gIcon)" strokeWidth="2" strokeLinecap="round"/><path d="M14 8l4-4 4 4" stroke="url(#gIcon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="gIcon" x1="4" y1="4" x2="32" y2="32"><stop stopColor="#E8417A"/><stop offset="1" stopColor="#F5A623"/></linearGradient></defs></svg>
  ),
  coach: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="12" r="6" stroke="url(#gIcon2)" strokeWidth="2"/><path d="M8 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="url(#gIcon2)" strokeWidth="2" strokeLinecap="round"/><path d="M26 14l3 3 5-5" stroke="url(#gIcon2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="gIcon2" x1="4" y1="4" x2="32" y2="32"><stop stopColor="#E8417A"/><stop offset="1" stopColor="#F5A623"/></linearGradient></defs></svg>
  ),
  ecom: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="6" width="28" height="24" rx="3" stroke="url(#gIcon3)" strokeWidth="2"/><path d="M4 14h28" stroke="url(#gIcon3)" strokeWidth="1.5"/><circle cx="14" cy="24" r="2" fill="url(#gIcon3)"/><circle cx="22" cy="24" r="2" fill="url(#gIcon3)"/><path d="M10 20h16" stroke="url(#gIcon3)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="gIcon3" x1="4" y1="6" x2="32" y2="30"><stop stopColor="#E8417A"/><stop offset="1" stopColor="#F5A623"/></linearGradient></defs></svg>
  ),
  b2b: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="4" width="24" height="28" rx="3" stroke="url(#gIcon4)" strokeWidth="2"/><path d="M12 12h12M12 18h8M12 24h10" stroke="url(#gIcon4)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="26" cy="26" r="6" fill="url(#gIcon4)" fillOpacity="0.15" stroke="url(#gIcon4)" strokeWidth="1.5"/><path d="M24 26h4M26 24v4" stroke="url(#gIcon4)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="gIcon4" x1="6" y1="4" x2="30" y2="32"><stop stopColor="#E8417A"/><stop offset="1" stopColor="#F5A623"/></linearGradient></defs></svg>
  )
};

const fallbackIcon = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="12" stroke="url(#gIconF)" strokeWidth="2"/><path d="M14 18l3 3 5-5" stroke="url(#gIconF)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="gIconF" x1="6" y1="6" x2="30" y2="30"><stop stopColor="#E8417A"/><stop offset="1" stopColor="#F5A623"/></linearGradient></defs></svg>
);

export default function WhoCards({ cards, background = 'light' }: WhoCardsProps) {
  const isDark = background === 'dark';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className={`group rounded-[20px] p-[32px] border-[0.5px] relative overflow-hidden transition-all duration-300 hover:-translate-y-[4px]
            ${isDark
              ? 'bg-[rgba(247,246,242,0.03)] border-[rgba(247,246,242,0.08)] hover:border-[rgba(232,65,122,0.4)] hover:bg-[rgba(247,246,242,0.06)]'
              : 'bg-white border-[rgba(28,24,40,0.08)] hover:shadow-[0_20px_40px_rgba(28,24,40,0.06)] hover:border-[var(--mg)]'}`}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] gb opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className={`w-[56px] h-[56px] rounded-[14px] flex items-center justify-center mb-[20px] transition-transform duration-300 group-hover:scale-110 ${isDark ? 'bg-[rgba(247,246,242,0.06)]' : 'bg-[rgba(232,65,122,0.06)]'}`}>
            {card.icon && icons[card.icon] ? icons[card.icon] : fallbackIcon}
          </div>

          <h3 className={`text-[18px] font-extrabold mb-[12px] tracking-[-0.4px] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
            {card.title}
          </h3>

          {card.pain ? (
            <>
              <p className={`text-[14px] leading-[1.65] mb-[16px] ${isDark ? 'text-[rgba(247,246,242,0.65)]' : 'text-[var(--muted)]'}`}>
                {card.pain}
              </p>
              {card.sol && (
                <div className={`text-[13px] font-bold flex items-center gap-[8px] ${isDark ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>
                  <span className="w-[6px] h-[6px] rounded-full gb shrink-0" />
                  {card.sol}
                </div>
              )}
            </>
          ) : (
            <p className={`text-[14px] leading-[1.65] ${isDark ? 'text-[rgba(247,246,242,0.65)]' : 'text-[var(--muted)]'}`}>
              {card.desc}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
