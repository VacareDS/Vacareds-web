import React from 'react';
import { Link } from '@/navigation';

export interface BlogCardProps {
  category: string;
  categoryColor?: 'tofu' | 'bofu' | 'default';
  title: string;
  excerpt: string;
  href: string;
  readLabel?: string;
}

const colorMap: Record<string, string> = {
  tofu: 'text-[var(--mg)] bg-[rgba(232,65,122,0.08)]',
  bofu: 'text-[var(--am)] bg-[rgba(245,166,35,0.1)]',
  default: 'text-[var(--muted)] bg-[rgba(28,24,40,0.05)]'
};

export default function BlogCard({
  category,
  categoryColor = 'default',
  title,
  excerpt,
  href,
  readLabel = 'Leer artículo'
}: BlogCardProps) {
  const colorClass = colorMap[categoryColor] || colorMap.default;

  return (
    <Link
      href={href as any}
      className="group block bg-white rounded-[18px] border-[0.5px] border-[rgba(28,24,40,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(28,24,40,0.08)] no-underline"
    >
      {/* Gradient top accent */}
      <div className="h-[3px] gb opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-[28px]">
        <span className={`text-[10px] font-bold tracking-[0.1em] uppercase px-[10px] py-[3px] rounded-[20px] inline-block mb-[16px] ${colorClass}`}>
          {category}
        </span>
        <h3 className="text-[17px] font-extrabold tracking-[-0.3px] text-[var(--dark)] mb-[10px] leading-[1.3] group-hover:text-[var(--mg)] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.65] text-[var(--muted)] mb-[18px]">
          {excerpt}
        </p>
        <span className="text-[13px] font-bold gt inline-flex items-center gap-[6px] group-hover:gap-[10px] transition-all">
          {readLabel} <span className="text-[15px]">→</span>
        </span>
      </div>
    </Link>
  );
}
