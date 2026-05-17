'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ReportRow {
  label: string;
  width: string;
  barColor: string;
  value: string;
  valueClass: 'bad' | 'ok' | 'good';
}

interface ReportSection {
  title: string;
  rows: ReportRow[];
}

const sections: ReportSection[] = [
  {
    title: 'Rendimiento técnico',
    rows: [
      { label: 'Velocidad mobile', width: '34%', barColor: 'linear-gradient(90deg, #E8417A, #F07030)', value: '34', valueClass: 'bad' },
      { label: 'Velocidad desktop', width: '62%', barColor: 'linear-gradient(90deg, #F07030, #F5A623)', value: '62', valueClass: 'ok' },
      { label: 'HTTPS / SSL', width: '100%', barColor: 'linear-gradient(90deg, #1D9E75, #28c840)', value: '✓', valueClass: 'good' },
    ],
  },
  {
    title: 'SEO técnico',
    rows: [
      { label: 'Title tag', width: '100%', barColor: 'linear-gradient(90deg, #1D9E75, #28c840)', value: '✓', valueClass: 'good' },
      { label: 'Meta description', width: '0%', barColor: '#E8417A', value: '✗', valueClass: 'bad' },
      { label: 'H1 único', width: '0%', barColor: '#E8417A', value: '✗', valueClass: 'bad' },
      { label: 'Alt text en imágenes', width: '40%', barColor: 'linear-gradient(90deg, #F07030, #F5A623)', value: '40%', valueClass: 'ok' },
    ],
  },
  {
    title: 'Conversión',
    rows: [
      { label: 'CTA visible above fold', width: '0%', barColor: '#E8417A', value: '✗', valueClass: 'bad' },
      { label: 'Formulario de contacto', width: '100%', barColor: 'linear-gradient(90deg, #1D9E75, #28c840)', value: '✓', valueClass: 'good' },
    ],
  },
];

const valueColors = {
  bad: 'text-[#ffb3ca]',
  ok: 'text-[#ffdc96]',
  good: 'text-[#b8f5d4]',
};

export default function MockReportAnimated() {
  let globalIdx = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-[var(--dark)] rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(28,24,40,0.18)]"
    >
      {/* macOS-style header */}
      <div className="bg-[rgba(247,246,242,0.05)] p-[16px_20px] flex items-center gap-[8px] border-b-[0.5px] border-[rgba(247,246,242,0.07)]">
        <div className="flex gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[12px] font-semibold text-[rgba(247,246,242,0.35)] ml-[8px]">
          reporte_vacare_tuempresa.pdf
        </span>
      </div>

      {/* Body */}
      <div className="p-[20px]">
        {sections.map((section, sIdx) => (
          <div key={sIdx}>
            <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.25)] mb-[10px] mt-[16px] pl-[14px]">
              {section.title}
            </div>
            {section.rows.map((row) => {
              const idx = globalIdx++;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-[12px_14px] rounded-[10px] mb-[8px] bg-[rgba(247,246,242,0.04)]"
                >
                  <span className="text-[12px] font-semibold text-[rgba(247,246,242,0.65)] shrink-0">
                    {row.label}
                  </span>
                  <div className="flex-1 mx-[14px] h-[5px] bg-[rgba(247,246,242,0.08)] rounded-[3px] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: row.width }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: 0.4 + idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                      className="h-full rounded-[3px]"
                      style={{ background: row.barColor }}
                    />
                  </div>
                  <span className={`text-[12px] font-extrabold min-w-[36px] text-right ${valueColors[row.valueClass]}`}>
                    {row.value}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
