'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface TeamMember {
  name: string;
  role: string;
  imageSrc?: string;
}

export interface TeamSectionProps {
  members: TeamMember[];
  labels: string[];
  content: ReactNode;
}

export default function TeamSection({ members, labels, content }: TeamSectionProps) {
  return (
    <section id="team" className="bg-[var(--dark)] py-[80px] lg:py-[100px] relative overflow-hidden">
      <div className="absolute text-[clamp(80px,16vw,200px)] font-extrabold text-[rgba(247,246,242,0.04)] leading-none pointer-events-none -bottom-[20px] -right-[10px] tracking-[-4px] select-none z-0">
        EQUIPO
      </div>

      <div className="max-w-[1280px] mx-auto px-[28px] lg:px-[52px] relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] items-center">

          {/* PHOTOS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-[14px]"
          >
            {members.map((member, idx) => (
              <div
                key={idx}
                className={`group rounded-[20px] overflow-hidden aspect-[3/4] relative ${idx === 1 ? 'mt-[40px]' : ''}`}
              >
                {member.imageSrc ? (
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[20px]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,18,0.85)] via-[rgba(14,14,18,0.2)] to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[3px] gb opacity-60" />

                <div className="absolute bottom-0 left-0 right-0 p-[16px] z-10">
                  <h4 className="text-[18px] font-extrabold text-[var(--cream)] tracking-[-0.3px]">{member.name}</h4>
                  <p className="text-[11px] font-bold mt-[4px] text-[rgba(247,246,242,0.6)] uppercase tracking-[0.05em]">{member.role}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            {content}

            {labels && labels.length > 0 && (
              <div className="flex gap-[8px] flex-wrap mt-[32px]">
                {labels.map((label, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 + idx * 0.06 }}
                    className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.11)] rounded-[20px] px-[13px] py-[5px] text-[11px] font-semibold text-[rgba(247,246,242,0.5)] transition-colors hover:bg-[rgba(247,246,242,0.1)] hover:text-[rgba(247,246,242,0.7)]"
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
