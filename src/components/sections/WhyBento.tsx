'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface WhyBentoCard {
  num: string;
  p: string;
}

export interface WhyBentoProps {
  cards: WhyBentoCard[];
}

export default function WhyBento({ cards }: WhyBentoProps) {
  const getColSpanClass = (index: number) => {
    switch (index) {
      case 0: return 'col-span-1 md:col-span-1 lg:col-span-7';
      case 1: return 'col-span-1 md:col-span-1 lg:col-span-5';
      case 2:
      case 3:
      case 4:
        return 'col-span-1 md:col-span-1 lg:col-span-4';
      default:
        return 'col-span-1 md:col-span-1 lg:col-span-4';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[12px]">
      {cards.map((card, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className={`bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[28px] relative overflow-hidden transition-all duration-250 hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.35)] ${getColSpanClass(idx)}`}
        >
          <span className="text-[10px] font-bold tracking-[0.12em] text-[var(--mg)] mb-[14px] block">
            {card.num}
          </span>
          <p className="text-[15px] leading-[1.65] text-[rgba(247,246,242,0.72)]">
            {card.p}
          </p>
          
          {idx === 0 && (
            <div className="absolute bottom-[16px] right-[16px] w-[40px] h-[40px] rounded-[8px] bg-[rgba(232,65,122,0.1)] border-[0.5px] border-[rgba(232,65,122,0.2)]" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
