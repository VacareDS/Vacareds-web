'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  items: FaqItem[];
}

export default function FaqSection({ eyebrow, title, items }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[var(--cream)] py-[80px] md:py-[100px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
      <div className="max-w-[800px] mx-auto px-5 md:px-[52px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[48px]"
        >
          <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[18px] justify-center">
            <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
            {eyebrow}
            <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
          </div>
          <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1]">
            {title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-[8px]">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-[14px] border-[0.5px] border-[rgba(28,24,40,0.08)] overflow-hidden transition-colors hover:border-[rgba(28,24,40,0.15)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-[22px_24px] text-left bg-transparent border-none cursor-pointer group"
                >
                  <span className="text-[15px] font-bold text-[var(--dark)] leading-[1.4] pr-[16px]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[20px] font-light text-[var(--mg)] shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-[24px] pb-[22px] pt-[0]">
                        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
