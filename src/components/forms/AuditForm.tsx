'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import FormField from '../ui/FormField';

const auditSchema = z.object({
  url: z.string().url('Debe ser una URL válida (ej: https://tuempresa.com)'),
  email: z.string().email('Debe ser un email válido'),
  optin: z.boolean().refine(v => v === true, { message: 'Necesitamos tu aceptación para enviarte el reporte' }),
});

type AuditFormData = z.infer<typeof auditSchema>;

interface AuditFormProps {
  translations: {
    title: string;
    sub: string;
    urlLabel: string;
    urlHint: string;
    emailLabel: string;
    submit: string;
    trust: string;
    optinLabel: string;
    optinLinkText: string;
    optinLinkHref: string;
  };
  className?: string;
}

export default function AuditForm({ translations, className = '' }: AuditFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
    defaultValues: { optin: false },
  });

  const optinChecked = watch('optin', false);

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Audit form submitted:', data);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className={`relative z-[1] ${className}`}>
        <div className="absolute inset-[-2px] rounded-[22px] grad-bg z-[-1]" />
        <div className="bg-white rounded-[20px] p-[36px] shadow-[0_24px_80px_rgba(232,65,122,0.15)]">
          <div className="w-[56px] h-[56px] rounded-full grad-bg flex items-center justify-center text-white text-[24px] mb-[20px] shadow-[0_8px_24px_rgba(232,65,122,0.25)]">✓</div>
          <h3 className="text-[20px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.5px]">¡Todo listo!</h3>
          <p className="text-[14px] text-[var(--muted)] leading-[1.6]">
            Recibimos tu solicitud. En menos de 2 horas vas a recibir tu reporte en el email que ingresaste.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative z-[1] ${className}`}>
      {/* Permanent gradient border */}
      <div className="absolute inset-[-2px] rounded-[22px] grad-bg z-[-1]" />

      <div className="bg-white rounded-[20px] p-[32px] md:p-[36px] shadow-[0_24px_80px_rgba(232,65,122,0.15)]">
        <div className="text-[19px] font-extrabold text-[var(--dark)] mb-[6px] tracking-[-0.5px]">{translations.title}</div>
        <div className="text-[13px] text-[var(--muted)] mb-[24px] leading-[1.55]">{translations.sub}</div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[5px]">
            <FormField
              label={translations.urlLabel}
              placeholder="https://tuempresa.com"
              {...register('url')}
              error={errors.url?.message}
            />
            <div className="text-[11px] text-[var(--muted)]">{translations.urlHint}</div>
          </div>

          <FormField
            label={translations.emailLabel}
            placeholder="maria@tuempresa.com"
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />

          {/* Opt-in */}
          <div className="flex flex-col gap-[5px]">
            <label className="flex items-start gap-[10px] cursor-pointer select-none">
              <div className="relative shrink-0 mt-[2px]">
                <input type="checkbox" className="sr-only" {...register('optin')} />
                <div className={`w-[18px] h-[18px] rounded-[5px] border-[1.5px] transition-all duration-150 flex items-center justify-center ${
                  optinChecked
                    ? 'grad-bg border-transparent shadow-[0_2px_8px_rgba(232,65,122,0.3)]'
                    : 'border-[rgba(28,24,40,0.22)] bg-[rgba(28,24,40,0.02)] hover:border-[var(--mg)]'
                }`}>
                  {optinChecked && (
                    <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[12px] text-[var(--muted)] leading-[1.65]">
                {translations.optinLabel}{' '}
                <Link href={translations.optinLinkHref} className="text-[var(--mg)] font-bold hover:underline underline-offset-2" target="_blank">
                  {translations.optinLinkText}
                </Link>
              </span>
            </label>
            {errors.optin && (
              <span className="text-red-500 text-[11px] font-semibold">{errors.optin.message as string}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-[17px] px-[20px] grad-bg text-white border-none rounded-[12px] font-extrabold text-[16px] leading-none cursor-pointer transition-all hover:opacity-90 hover:-translate-y-[1px] hover:shadow-[0_10px_32px_rgba(232,65,122,0.45)] mt-[2px] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_18px_rgba(232,65,122,0.3)]"
          >
            {isSubmitting ? 'Procesando...' : translations.submit}
          </button>
        </form>

        <div className="flex items-center justify-center gap-[8px] mt-[16px] text-[11px] text-[var(--muted)]">
          <div className="w-[5px] h-[5px] rounded-full grad-bg shrink-0" />
          {translations.trust}
        </div>
      </div>
    </div>
  );
}
