import React from 'react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = 'typescript',
  fileName,
  className = ''
}: CodeBlockProps) {
  return (
    <div className={`rounded-[12px] overflow-hidden bg-[var(--darker)] border-[0.5px] border-[rgba(247,246,242,0.1)] shadow-[0_12px_32px_rgba(28,24,40,0.4)] ${className}`}>
      
      {/* Header */}
      <div className="flex items-center px-[16px] py-[10px] border-b-[0.5px] border-[rgba(247,246,242,0.08)] bg-[rgba(247,246,242,0.02)]">
        <div className="flex gap-[6px] mr-[16px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#27c93f]" />
        </div>
        {fileName && (
          <span className="text-[11px] text-[rgba(247,246,242,0.4)] font-mono">{fileName}</span>
        )}
        <span className="text-[10px] text-[var(--mg)] font-bold uppercase tracking-[0.05em] ml-auto">
          {language}
        </span>
      </div>

      {/* Code Body */}
      <div className="p-[20px] overflow-x-auto text-[13px] leading-[1.6] font-mono text-[var(--cream)]">
        <pre className="m-0">
          <code>{code}</code>
        </pre>
      </div>

    </div>
  );
}
