import React, { forwardRef } from 'react';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string;
  as?: 'input' | 'select' | 'textarea';
  options?: Array<{ value: string; label: string }>;
  error?: string;
  className?: string;
  containerClassName?: string;
}

const FormField = forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, as = 'input', options, error, className = '', containerClassName = '', ...props }, ref) => {
    
    const baseInputClasses = "w-full bg-[rgba(28,24,40,0.03)] border border-[rgba(28,24,40,0.08)] rounded-[10px] px-[16px] py-[14px] text-[15px] text-[var(--dark)] placeholder:text-[rgba(28,24,40,0.4)] focus:outline-none focus:border-[var(--mg)] focus:bg-white transition-all";
    const errorClasses = error ? "border-red-500 focus:border-red-500 bg-red-50/50" : "";
    const combinedClasses = `${baseInputClasses} ${errorClasses} ${className}`;

    return (
      <div className={`flex flex-col gap-[8px] ${containerClassName}`}>
        <label className="text-[13px] font-bold text-[var(--dark)]">
          {label}
        </label>
        
        {as === 'input' && (
          <input ref={ref as any} className={combinedClasses} {...(props as any)} />
        )}
        
        {as === 'textarea' && (
          <textarea ref={ref as any} className={`${combinedClasses} min-h-[120px] resize-y`} {...(props as any)} />
        )}
        
        {as === 'select' && (
          <select ref={ref as any} className={`${combinedClasses} appearance-none bg-[url('data:image/svg+xml;utf8,<svg fill="%231C1828" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')] bg-no-repeat bg-[position:right_12px_center] pr-[40px]`} {...(props as any)}>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        )}
        
        {error && (
          <span className="text-red-500 text-[11px] font-semibold mt-[2px]">{error}</span>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;
