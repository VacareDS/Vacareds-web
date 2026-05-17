import React from 'react';

export interface ComparisonFeature {
  name: string;
  we: boolean | string;
  others: boolean | string;
}

export interface ComparisonTableProps {
  title: string;
  features: ComparisonFeature[];
  weLabel?: string;
  othersLabel?: string;
}

export default function ComparisonTable({
  title,
  features,
  weLabel = 'Vacare',
  othersLabel = 'Agencias Tradicionales'
}: ComparisonTableProps) {
  return (
    <div className="w-full max-w-[900px] mx-auto my-[40px]">
      <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold text-center tracking-[-1px] text-[var(--dark)] mb-[40px]">
        {title}
      </h3>

      <div className="bg-white rounded-[24px] border-[0.5px] border-[rgba(28,24,40,0.1)] shadow-[0_16px_40px_rgba(28,24,40,0.04)] overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-3 border-b-[0.5px] border-[rgba(28,24,40,0.08)] bg-[rgba(247,246,242,0.5)]">
          <div className="p-[20px] md:p-[28px] flex items-center">
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)]">Característica</span>
          </div>
          <div className="p-[20px] md:p-[28px] text-center border-l-[0.5px] border-r-[0.5px] border-[rgba(28,24,40,0.08)] bg-[rgba(232,65,122,0.02)]">
            <span className="text-[13px] font-extrabold tracking-[0.05em] uppercase text-[var(--mg)]">{weLabel}</span>
          </div>
          <div className="p-[20px] md:p-[28px] text-center">
            <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-[var(--muted)]">{othersLabel}</span>
          </div>
        </div>

        {/* ROWS */}
        <div className="flex flex-col">
          {features.map((feat, idx) => (
            <div key={idx} className={`grid grid-cols-3 ${idx < features.length - 1 ? 'border-b-[0.5px] border-[rgba(28,24,40,0.05)]' : ''}`}>
              
              {/* Feature Name */}
              <div className="p-[20px] md:p-[24px_28px] flex items-center">
                <span className="text-[14px] font-bold text-[var(--dark)] leading-[1.4]">{feat.name}</span>
              </div>
              
              {/* Us */}
              <div className="p-[20px] md:p-[24px_28px] text-center flex items-center justify-center border-l-[0.5px] border-r-[0.5px] border-[rgba(28,24,40,0.05)] bg-[rgba(232,65,122,0.015)]">
                {typeof feat.we === 'boolean' ? (
                  feat.we ? (
                    <div className="w-[28px] h-[28px] rounded-full grad-bg flex items-center justify-center text-white text-[14px] shadow-[0_4px_12px_rgba(232,65,122,0.2)]">✓</div>
                  ) : (
                    <span className="text-[14px] text-[rgba(28,24,40,0.2)] font-bold">―</span>
                  )
                ) : (
                  <span className="text-[14px] font-bold text-[var(--mg)]">{feat.we}</span>
                )}
              </div>

              {/* Them */}
              <div className="p-[20px] md:p-[24px_28px] text-center flex items-center justify-center">
                {typeof feat.others === 'boolean' ? (
                  feat.others ? (
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(28,24,40,0.05)] flex items-center justify-center text-[var(--muted)] text-[14px]">✓</div>
                  ) : (
                    <span className="text-[14px] text-[rgba(28,24,40,0.2)] font-bold">✕</span>
                  )
                ) : (
                  <span className="text-[14px] font-medium text-[var(--muted)]">{feat.others}</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
