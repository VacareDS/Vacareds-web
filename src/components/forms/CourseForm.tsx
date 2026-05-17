'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormField from '../ui/FormField';

const courseSchema = z.object({
  nombre: z.string().min(2, 'Ingresá tu nombre'),
  email: z.string().email('Debe ser un email válido'),
  etapa: z.string().min(1, 'Seleccioná una opción'),
  rubro: z.string().optional()
});

type CourseFormData = z.infer<typeof courseSchema>;

interface CourseFormProps {
  translations: {
    title: string;
    sub: string;
    nameLabel: string;
    emailLabel: string;
    stageLabel: string;
    stagePlaceholder: string;
    stages: Array<{ value: string; label: string }>;
    nicheLabel: string;
    nicheHint: string;
    submit: string;
    trust: string;
  };
  compact?: boolean;
}

export default function CourseForm({ translations, compact = false }: CourseFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema)
  });

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Course form submitted:', data);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-[20px] p-[32px] border-[0.5px] border-[rgba(28,24,40,0.09)] shadow-[0_20px_56px_rgba(28,24,40,0.08)] ${compact ? 'max-w-[440px] mx-auto' : 'max-w-[460px]'}`}>
        <div className="w-[56px] h-[56px] rounded-full grad-bg flex items-center justify-center text-white text-[24px] mb-[20px] shadow-[0_8px_24px_rgba(232,65,122,0.25)]">✓</div>
        <h3 className="text-[20px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.5px]">¡Ya estás adentro!</h3>
        <p className="text-[14px] text-[var(--muted)] leading-[1.6]">
          Revisá tu bandeja de entrada (y la de spam por las dudas). El Día 1 del curso ya está en camino a tu email.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-[20px] p-[32px] border-[0.5px] border-[rgba(28,24,40,0.09)] shadow-[0_20px_56px_rgba(28,24,40,0.08)] relative z-[1] group transition-all duration-300 focus-within:-translate-y-[2px] focus-within:shadow-[0_24px_64px_rgba(28,24,40,0.12)] ${compact ? 'max-w-[440px] mx-auto' : 'max-w-[460px]'}`}>
      
      {/* Decorative gradient border on focus-within */}
      <div className="absolute inset-[-1.5px] rounded-[21px] grad-bg z-[-1] opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
      
      {!compact && (
        <>
          <div className="text-[17px] font-extrabold text-[var(--dark)] mb-[5px] tracking-[-0.3px]">{translations.title}</div>
          <div className="text-[13px] text-[var(--muted)] mb-[22px] leading-[1.55]">{translations.sub}</div>
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[14px]">
        
        <FormField
          label={translations.nameLabel}
          placeholder="María García"
          {...register('nombre')}
          error={errors.nombre?.message}
          className={compact ? "bg-white" : ""}
        />

        <FormField
          label={translations.emailLabel}
          placeholder="maria@tuempresa.com"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          className={compact ? "bg-white" : ""}
        />

        <FormField
          as="select"
          label={translations.stageLabel}
          {...register('etapa')}
          error={errors.etapa?.message}
          options={[
            { value: '', label: translations.stagePlaceholder },
            ...translations.stages
          ]}
          className={compact ? "bg-white" : ""}
        />

        {!compact && (
          <FormField
            label={translations.nicheLabel}
            placeholder={translations.nicheHint}
            {...register('rubro')}
          />
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full p-[14px] grad-bg text-white border-none rounded-[11px] font-extrabold text-[15px] leading-none cursor-pointer transition-all hover:opacity-90 hover:-translate-y-[1px] mt-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Procesando...' : translations.submit}
        </button>
      </form>

      {!compact && (
        <div className="flex items-center gap-[7px] mt-[13px] text-[11px] text-[var(--muted)] justify-center sm:justify-start">
          <div className="w-[5px] h-[5px] rounded-full grad-bg shrink-0" />
          {translations.trust}
        </div>
      )}

      {compact && (
        <div className="flex justify-center gap-[22px] mt-[18px] flex-wrap">
          {translations.trust.split(' · ').map((item, idx) => (
            <div key={idx} className="flex items-center gap-[6px] text-[12px] text-[var(--muted)]">
              <div className="w-[5px] h-[5px] rounded-full grad-bg shrink-0" />
              {item}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
