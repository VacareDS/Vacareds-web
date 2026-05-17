import React, { ReactNode } from 'react';

export interface FlowNodeItem {
  id: string;
  title: string;
  body: string;
  label?: string;
  icon?: ReactNode;
  isHighlight?: boolean;
}

export interface FlowDiagramProps {
  nodes: FlowNodeItem[];
  variant?: 'vertical' | 'horizontal';
  watermarkText?: string;
}

export default function FlowDiagram({
  nodes,
  variant = 'vertical',
  watermarkText
}: FlowDiagramProps) {
  return (
    <div className="relative py-[40px]">
      {watermarkText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,15vw,220px)] font-extrabold italic text-[rgba(28,24,40,0.02)] pointer-events-none select-none z-0 tracking-[-4px] whitespace-nowrap">
          {watermarkText}
        </div>
      )}
      
      <div className={`relative z-[1] flex ${variant === 'horizontal' ? 'flex-row overflow-x-auto pb-[20px] gap-[24px]' : 'flex-col gap-[32px] max-w-[600px] mx-auto'}`}>
        
        {nodes.map((node, idx) => (
          <div key={node.id} className="relative flex flex-col items-center">
            
            {/* The Node Card */}
            <div className={`w-full max-w-[400px] rounded-[18px] p-[24px] border-[0.5px] relative overflow-hidden transition-all duration-300
              ${node.isHighlight 
                ? 'bg-white border-[var(--mg)] shadow-[0_16px_40px_rgba(232,65,122,0.1)]' 
                : 'bg-[rgba(247,246,242,0.6)] border-[rgba(28,24,40,0.08)]'}`}
            >
              {node.isHighlight && (
                <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg" />
              )}
              
              <div className="flex items-start gap-[16px]">
                {node.icon ? (
                  <div className="w-[40px] h-[40px] rounded-[10px] shrink-0 flex items-center justify-center bg-[rgba(232,65,122,0.08)] text-[var(--mg)]">
                    {node.icon}
                  </div>
                ) : (
                  <div className="w-[40px] h-[40px] rounded-[10px] shrink-0 flex items-center justify-center bg-[rgba(28,24,40,0.04)] text-[14px] font-extrabold text-[var(--dark)]">
                    {idx + 1}
                  </div>
                )}
                
                <div className="flex flex-col">
                  {node.label && (
                    <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[4px]">
                      {node.label}
                    </span>
                  )}
                  <h4 className="text-[15px] font-extrabold text-[var(--dark)] tracking-[-0.2px] mb-[6px]">
                    {node.title}
                  </h4>
                  <p className="text-[13px] leading-[1.6] text-[var(--muted)]">
                    {node.body}
                  </p>
                </div>
              </div>
            </div>

            {/* Connection Arrow (if not last) */}
            {idx < nodes.length - 1 && variant === 'vertical' && (
              <div className="h-[32px] w-[2px] mt-[12px] -mb-[20px] relative" style={{ background: 'linear-gradient(to bottom, rgba(232,65,122,0.3), rgba(245,166,35,0.3))' }}>
                <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] border-b-[2px] border-r-[2px] border-[rgba(245,166,35,0.5)] rotate-45" />
              </div>
            )}
            
            {idx < nodes.length - 1 && variant === 'horizontal' && (
              <div className="absolute top-1/2 -right-[24px] w-[24px] h-[2px] -translate-y-1/2" style={{ background: 'linear-gradient(to right, rgba(232,65,122,0.3), rgba(245,166,35,0.3))' }}>
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] border-t-[2px] border-r-[2px] border-[rgba(245,166,35,0.5)] rotate-45" />
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}
