"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StrategyTimelineItemProps {
  step: {
    num: string | number;
    phase: string;
    title: string;
    p: string;
    result: string;
  };
  isLast: boolean;
}

export default function StrategyTimelineItem({ step, isLast }: StrategyTimelineItemProps) {
  const ref = useRef(null);
  // Highlight when it is in the center 40% of the screen
  const isInView = useInView(ref, { margin: "-30% 0px -40% 0px", amount: 0.5 });

  return (
    <div ref={ref} className="grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr] gap-0 relative">
      <div className="flex flex-col items-center pt-[4px]">
        <motion.div 
          animate={{ 
            scale: isInView ? 1.1 : 1,
            opacity: isInView ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className={`w-[48px] h-[48px] rounded-[12px] flex items-center justify-center text-[12px] font-extrabold text-white shrink-0 z-10 shadow-[0_6px_20px_rgba(232,65,122,0.2)] transition-colors ${isInView ? 'grad-bg' : 'bg-[rgba(247,246,242,0.1)]'}`}
        >
          {step.num}
        </motion.div>
        {!isLast && (
          <motion.div 
            animate={{ opacity: isInView ? 1 : 0.2 }}
            className="flex-1 w-[2px] bg-gradient-to-b from-[rgba(232,65,122,0.2)] to-[rgba(245,166,35,0.05)] mt-[8px]" 
          />
        )}
      </div>
      <motion.div 
        animate={{ 
          borderColor: isInView ? 'rgba(232,65,122,0.4)' : 'rgba(247,246,242,0.07)',
          backgroundColor: isInView ? 'rgba(247,246,242,0.08)' : 'rgba(247,246,242,0.04)',
          y: isInView ? 0 : 5,
          opacity: isInView ? 1 : 0.6
        }}
        transition={{ duration: 0.4 }}
        className="border-[0.5px] rounded-[16px] p-[24px_28px] ml-[16px] mb-[12px] transition-colors relative overflow-hidden"
      >
        <motion.div 
          animate={{ opacity: isInView ? 1 : 0 }}
          className="absolute left-0 top-0 bottom-0 w-[3px] grad-bg" 
        />
        <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[8px]">{step.phase}</div>
        <h3 className="text-[16px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">{step.title}</h3>
        <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">{step.p}</p>
        <div className="inline-flex items-center gap-[6px] mt-[10px] text-[12px] font-bold text-[var(--am)] bg-[rgba(245,166,35,0.08)] p-[4px_10px] rounded-[20px]">
          {step.result}
        </div>
      </motion.div>
    </div>
  );
}
