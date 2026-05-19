'use client';

import { useState, type FormEvent } from 'react';
import Nav from '@/components/layout/Nav';

type WaitlistType = 'audit' | 'course';

const COPY = {
  audit: {
    es: {
      badge: 'Próximamente',
      title: 'Auditoría Web Gratuita',
      desc: 'Analizamos tu sitio y te entregamos un reporte personalizado con las mejoras más importantes. Gratis, sin vueltas.',
      bullets: [
        'Análisis de velocidad y rendimiento',
        'SEO técnico y on-page',
        'Experiencia de usuario y conversión',
      ],
      formTitle: 'Avisame cuando esté lista',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      cta: 'Anotarme →',
      successTitle: '¡Ya estás anotado/a!',
      successDesc: 'Te escribimos en cuanto la auditoría esté disponible.',
      errorMsg: 'Algo salió mal, intentá de nuevo.',
    },
    en: {
      badge: 'Coming Soon',
      title: 'Free Web Audit',
      desc: 'We analyze your site and deliver a personalized report with the most important improvements. Free, no strings attached.',
      bullets: [
        'Speed & performance analysis',
        'Technical & on-page SEO',
        'UX & conversion review',
      ],
      formTitle: "Notify me when it's ready",
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      cta: 'Sign me up →',
      successTitle: "You're on the list!",
      successDesc: "We'll reach out as soon as the audit is available.",
      errorMsg: 'Something went wrong, please try again.',
    },
  },
  course: {
    es: {
      badge: 'Próximamente',
      title: 'Curso Web Gratis',
      desc: 'Un curso por email para aprender a construir presencia digital que convierte — desde cero y sin tecnicismos.',
      bullets: [
        '5 días, 1 email por día',
        'Casos reales de clientes',
        'Sin teoría, solo lo que funciona',
      ],
      formTitle: 'Avisame cuando esté listo',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      cta: 'Anotarme →',
      successTitle: '¡Ya estás anotado/a!',
      successDesc: 'Te avisamos en cuanto el curso arranque.',
      errorMsg: 'Algo salió mal, intentá de nuevo.',
    },
    en: {
      badge: 'Coming Soon',
      title: 'Free Web Course',
      desc: 'An email course to build a digital presence that converts — from scratch, no technical jargon.',
      bullets: [
        '5 days, 1 email per day',
        'Real client case studies',
        'No theory, only what works',
      ],
      formTitle: "Notify me when it's ready",
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      cta: 'Sign me up →',
      successTitle: "You're on the list!",
      successDesc: "We'll let you know as soon as the course launches.",
      errorMsg: 'Something went wrong, please try again.',
    },
  },
} as const;

interface WaitlistClientProps {
  type: WaitlistType;
  locale: 'es' | 'en';
  apiEndpoint: string;
  list: 'auditoria' | 'curso';
}

export default function WaitlistClient({ type, locale, apiEndpoint, list }: WaitlistClientProps) {
  const c = COPY[type][locale];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      name,
      email,
      source: 'waitlist',
      list,
      locale,
      submitted_at: new Date().toISOString(),
    };

    console.log('[waitlist] Submitting:', JSON.stringify(payload, null, 2));

    try {
      if (apiEndpoint) {
        await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    } catch (err) {
      console.warn('[waitlist] Submission error, proceeding with success screen:', err);
    } finally {
      setSuccess(true);
      setLoading(false);
    }
  }

  const inputClass =
    'w-full h-[46px] px-[14px] rounded-[9px] border-[1.5px] border-[rgba(28,24,40,0.12)] bg-[rgba(28,24,40,0.02)] text-[14px] text-[var(--dark)] placeholder:text-[rgba(28,24,40,0.28)] focus:outline-none focus:border-[var(--mg)] transition-colors';

  return (
    <div className="min-h-screen lg:h-screen flex flex-col bg-[var(--cream)]">
      <Nav />

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-5 md:px-[52px] py-[40px] grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[48px] lg:gap-[72px] items-center">

          {/* LEFT — texto */}
          <div>
            <span className="inline-block gb text-white text-[11px] font-bold tracking-[0.12em] uppercase px-[12px] py-[5px] rounded-full mb-[22px]">
              {c.badge}
            </span>

            <h1 className="text-[clamp(32px,4.5vw,54px)] font-extrabold text-[var(--dark)] tracking-[-1.5px] leading-[1.08] mb-[16px]">
              {c.title}
            </h1>

            <p className="text-[16px] leading-[1.7] text-[var(--muted)] mb-[32px] max-w-[460px]">
              {c.desc}
            </p>

            <div className="flex flex-col gap-[13px]">
              {c.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-[12px]">
                  <div className="w-[20px] h-[20px] rounded-full gb shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 10 8" width="10" height="8" fill="none">
                      <path
                        d="M1 4l2.5 2.5L9 1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] font-medium text-[var(--dark)]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — card con form */}
          <div className="bg-white rounded-[20px] border-[0.5px] border-[rgba(28,24,40,0.09)] shadow-[0_20px_60px_rgba(28,24,40,0.09)] p-[32px]">
            {success ? (
              <div className="flex flex-col items-center text-center gap-[16px] py-[12px]">
                <div className="w-[56px] h-[56px] rounded-full gb flex items-center justify-center">
                  <svg viewBox="0 0 20 16" width="22" height="18" fill="none">
                    <path
                      d="M1 8l5.5 5.5L19 1"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[20px] font-extrabold text-[var(--dark)] tracking-[-0.5px]">
                  {c.successTitle}
                </h3>
                <p className="text-[14px] text-[var(--muted)] leading-[1.6]">{c.successDesc}</p>
              </div>
            ) : (
              <>
                <h2 className="text-[17px] font-extrabold text-[var(--dark)] tracking-[-0.4px] leading-[1.3] mb-[20px]">
                  {c.formTitle}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={c.namePlaceholder}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={c.emailPlaceholder}
                    className={inputClass}
                  />

                  {error && (
                    <p className="text-[12px] text-[var(--mg)] font-medium -mb-[2px]">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="gb text-white w-full h-[48px] rounded-[9px] font-bold text-[14px] cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-55 mt-[4px]"
                  >
                    {loading ? '...' : c.cta}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
