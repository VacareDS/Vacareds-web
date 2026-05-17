'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export interface PortfolioGridProps {
  projects: Array<{
    imgSrc: string;
    title: string;
    category: string;
    link: string;
  }>;
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="group rounded-[20px] overflow-hidden bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_24px_60px_rgba(28,24,40,0.1)]"
        >
          <div className="aspect-[16/10] w-full overflow-hidden relative bg-[var(--dark)]">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,24,40,0.7)] via-transparent to-transparent" />

            <div className="absolute top-[16px] left-[16px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[12px] border-[0.5px] border-[rgba(255,255,255,0.2)] rounded-[8px] px-[10px] py-[4px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-[20px]">
              <h4 className="text-[18px] font-extrabold text-white tracking-[-0.3px] mb-[4px]">
                {project.title}
              </h4>
              <p className="text-[12px] text-[rgba(255,255,255,0.7)] leading-[1.5]">
                {project.link}
              </p>
            </div>
          </div>

          <div className="p-[16px_20px] flex items-center justify-between bg-white">
            <div className="flex items-center gap-[8px]">
              <div className="w-[8px] h-[8px] rounded-full gb" />
              <span className="text-[12px] font-semibold text-[var(--muted)]">Proyecto activo</span>
            </div>
            <span className="text-[14px] font-extrabold gt transform transition-transform group-hover:translate-x-[4px]">
              →
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
