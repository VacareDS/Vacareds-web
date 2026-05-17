import React from 'react';

export interface ReportPreviewCardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  status?: 'Generando...' | 'Listo';
  className?: string;
}

export default function ReportPreviewCard({
  title,
  subtitle,
  imageSrc,
  status = 'Listo',
  className = ''
}: ReportPreviewCardProps) {
  const isReady = status === 'Listo';

  return (
    <div className={`bg-white rounded-[16px] overflow-hidden border-[0.5px] border-[rgba(28,24,40,0.1)] shadow-[0_16px_40px_rgba(28,24,40,0.06)] group ${className}`}>
      <div className="aspect-[16/10] bg-[var(--cream)] relative overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--dark)"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>
          </div>
        )}
        
        {/* Status overlay badge */}
        <div className={`absolute top-[16px] right-[16px] px-[12px] py-[6px] rounded-full text-[10px] font-bold tracking-[0.05em] uppercase flex items-center gap-[6px]
          ${isReady ? 'bg-white text-[var(--mg)] shadow-[0_4px_12px_rgba(232,65,122,0.15)]' : 'bg-[rgba(28,24,40,0.8)] text-white backdrop-blur-[4px]'}`}
        >
          {!isReady && <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />}
          {status}
        </div>
      </div>
      
      <div className="p-[20px]">
        <h4 className="text-[15px] font-extrabold text-[var(--dark)] tracking-[-0.2px] mb-[4px]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[12px] text-[var(--muted)]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
