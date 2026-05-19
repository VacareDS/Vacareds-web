import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeClient from '@/components/layout/HomeClient';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import CtaFinal from '@/components/sections/CtaFinal';
import GradientText from '@/components/ui/GradientText';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import OpenMeetingBtn from '@/components/ui/OpenMeetingBtn';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Full Funnel 360 — Organic Client Channel, SEO & AI Visibility | Vacaré'
      : 'Full Funnel 360 — Canal Orgánico de Clientes, SEO y Visibilidad en IA | Vacaré',
    description: isEn
      ? 'Predictable organic client channel. SEO, strategic content, ChatGPT optimization and complete funnel. Without paid ads. Results from 90 days.'
      : 'Canal de clientes orgánico y predecible. SEO, contenido estratégico, optimización para ChatGPT y funnel completo. Sin publicidad pagada. Resultados desde los 90 días.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/full-funnel-360'
        : 'https://vacaredigitalsolutions.com/es/servicios/full-funnel-360',
    },
    openGraph: {
      title: 'Full Funnel 360 — Vacaré Digital Solutions',
      description: isEn
        ? "Referrals don't scale. Paid ads don't compound. Full Funnel 360 builds the organic channel that works for years."
        : 'El boca a boca no escala. Los ads no acumulan. Full Funnel 360 construye el canal orgánico que trabaja por años.',
    },
  };
}

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconSearch({ className = 'w-5 h-5', color = 'white' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function IconCpu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}
function IconGift() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
function IconFunnel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
function IconTrendingUp({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function IconUsers({ className = 'w-5 h-5', color = 'white' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--mg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M9 18h6" /><path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    </svg>
  );
}
function IconCheck({ color = '#1D9E75', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconX({ color = 'rgba(247,246,242,0.25)', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const INCLUDES = [
  { Icon: IconLayers, what: 'Web estratégica — cada URL posiciona una keyword', means: 'No es una web. Es una red de captura. Cada página existe para atraer un tipo de búsqueda específica y llevar al visitante al siguiente paso.' },
  { Icon: IconSearch, what: 'SEO técnico como arquitectura — la base de todo', means: 'Velocidad, Core Web Vitals, schema markup, estructura de URLs, enlazado interno. Sin esta base, el contenido no posiciona. Con ella, cada artículo tiene ventaja desde el día uno.' },
  { Icon: IconCpu, what: 'LLM Optimization — aparecer en ChatGPT y Perplexity', means: 'Estructura de contenido y autoridad para que los modelos de IA te citen como fuente confiable cuando alguien pregunta por lo que ofrecés. Nadie más lo está haciendo en LATAM.' },
  { Icon: IconFileText, what: '10 piezas de contenido estratégico — vendedores que no duermen', means: 'Artículos y guías que posicionan las keywords de mayor intención de tu industria. Cada uno es un vendedor digital que trabaja 24/7 durante años, sin que paguéis nada.' },
  { Icon: IconGift, what: 'Lead magnet avanzado — captura a quien de verdad importa', means: 'PDF, calculadora o herramienta que da valor real y captura el email del prospecto calificado. No cualquier email — el de alguien que ya demostró interés en lo que hacés.' },
  { Icon: IconFunnel, what: 'Funnel completo — del visitante desconocido al cliente', means: 'Tráfico → captación → nurturing → calificación → reunión agendada. Nada queda al azar. Cada etapa está diseñada para llevar al siguiente paso.' },
  { Icon: IconMail, what: 'Secuencia de onboarding 7-14 días — construye la confianza sola', means: 'El prospecto nuevo recibe la secuencia que responde sus objeciones, muestra tu autoridad y lo lleva a la decisión. Sin que vos hagas nada más que el primer contacto.' },
  { Icon: IconDatabase, what: 'CRM básico — sabés en qué etapa está cada prospecto', means: 'Notion o Airtable configurado para tu proceso. Nada se pierde. Sabés quién está listo para cerrar, quién necesita un empujón y quién llegó esta semana.' },
  { Icon: IconZap, what: '5+ flujos en n8n — todos los puntos conectados', means: 'Automatizaciones que conectan el funnel completo. Cuando llega un lead: entra al CRM, recibe el primer email, agenda si está listo. El sistema no tiene fisuras.' },
  { Icon: IconBarChart, what: 'Dashboard Looker Studio — el canal entero en un lugar', means: 'Tráfico, leads, fuente, conversión, pipeline. En tiempo real. Sin abrir 5 herramientas. Sin adivinar si el canal está creciendo o estancado.' },
];

const FAQ_ITEMS = [
  {
    q: '¿Cuánto tarda en verse resultados?',
    a: 'Los primeros indicadores (indexación, posiciones en keywords de long-tail) se ven en 4-6 semanas. Los resultados de conversión maduran en 3-6 meses. El canal a plena velocidad, entre los 6 y 12 meses. Full Funnel es una inversión con retorno compuesto — no un sprint.',
  },
  {
    q: '¿Qué pasa con el SEO si después no seguimos publicando?',
    a: 'El contenido existente sigue trabajando. A diferencia de una campaña de publicidad que cae a cero cuando pausás, un artículo posicionado sigue trayendo tráfico sin ninguna inversión adicional. Recomendamos seguir publicando, pero el activo no desaparece si parás.',
  },
  {
    q: '¿Cómo aparezco en ChatGPT con mi negocio?',
    a: 'Los modelos de IA citan fuentes de autoridad. Construimos la arquitectura de contenido y la estructura de schema markup para que tu sitio sea reconocido como fuente confiable cuando alguien pregunta por tu categoría. No es instantáneo — madura en 3-6 meses como el SEO.',
  },
  {
    q: 'Contratamos SEO antes y no funcionó. ¿Por qué sería distinto ahora?',
    a: 'El SEO sin contenido estratégico es como construir paredes sin cimientos. Y el contenido sin SEO técnico es contenido que nadie encuentra. El problema más común es que se hicieron las dos cosas por separado, sin integración. Nosotros las integramos desde el día uno.',
  },
  {
    q: '¿Puedo hacer solo una parte del Full Funnel?',
    a: 'Podemos arrancar con el scope que corresponde a tu situación. En la llamada evaluamos qué tiene más impacto primero — si tu web ya está funcionando bien, el primer foco puede ser el contenido y las automatizaciones. Si necesitás la base técnica, arrancamos por ahí.',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function FullFunnel360Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/full-funnel-360` : `${BASE}/es/servicios/full-funnel-360`;

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Full Funnel 360"
        description={isEn
          ? 'Predictable organic client channel. SEO, strategic content, ChatGPT optimization and complete funnel. Without paid ads. Results from 90 days.'
          : 'Canal de clientes orgánico y predecible. SEO, contenido estratégico, optimización para ChatGPT y funnel completo. Sin publicidad pagada. Resultados desde los 90 días.'}
        price="5000"
      />
      <BreadcrumbJsonLd items={[
        { name: isEn ? 'Home' : 'Inicio', item: `${BASE}/${locale}` },
        { name: isEn ? 'Services' : 'Servicios', item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Full Funnel 360', item: svcPath },
      ]} />
      <HomeClient>
      <Nav
        transparent={false}
        brandName={tLayout('Nav.brand')}
      />

      <main className="pt-[64px]">

        {/* ══════ HERO ══════ */}
        <section className="min-h-[86vh] flex bg-[var(--dark)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(247,246,242,0.04) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,112,48,0.09) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text="FULL FUNNEL" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

          <div className="flex flex-col lg:flex-row w-full">
            {/* Left */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-[52px] py-[72px] relative z-10">
              <MotionWrapper type="fadeUp">
                <nav className="flex items-center gap-[8px] text-[11px] text-[rgba(247,246,242,0.3)] mb-[28px]">
                  <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Home' : 'Inicio'}</a>
                  <span>/</span>
                  <a href={isEn ? '/services' : '/servicios'} className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Services' : 'Servicios'}</a>
                  <span>/</span>
                  <span className="text-[var(--or)] font-semibold">Full Funnel 360</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--or)] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--or)] block" />
                  Paquete 03 · Canal orgánico completo
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Full Funnel 360</span>
                  El boca a boca es hermoso.<br />Pero no escala,<br />
                  <GradientText>y no construye nada si para.</GradientText>
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  Full Funnel 360 construye el canal que atrae clientes nuevos de forma sostenida: SEO, contenido estratégico y funnel completo — sin pagar publicidad. En 90 días el canal trabaja. En 6 meses es predecible.
                </p>

                <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[440px]">
                  {[
                    'Canal orgánico que trae clientes sin publicidad pagada',
                    'Aparecer en Google Y en respuestas de ChatGPT y Perplexity',
                    'Funnel completo: del visitante desconocido a la reunión agendada',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--cream)]">
                      <span className="w-[20px] h-[20px] rounded-full grad-bg flex items-center justify-center shrink-0 mt-[1px]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="leading-[1.45]">{b}</span>
                    </li>
                  ))}
                </ul>
              </MotionWrapper>

              <MotionWrapper type="fadeUp" delay={0.15}>
                <div className="flex flex-wrap gap-[12px] mb-[28px]">
                  <OpenMeetingBtn className="px-[28px] py-[15px] rounded-[10px] grad-bg text-white text-[15px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] hover:shadow-[0_12px_32px_rgba(232,65,122,0.35)] border-none">
                    Quiero mi canal orgánico →
                  </OpenMeetingBtn>
                  <a href="#como-funciona" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    Ver cómo funciona ↓
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  Llamada estratégica gratuita · Sin compromiso · Respondemos en 2 horas
                </p>
              </MotionWrapper>
            </div>

            {/* Right — gradient panel */}
            <div className="w-full lg:w-[45%] relative overflow-hidden flex flex-col" style={{ background: 'linear-gradient(145deg,#F07030 0%,#F5A623 48%,#E8417A 100%)' }}>
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
              
              <div className="absolute top-[22px] left-[18px] w-[72px] h-[72px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
              <div className="absolute top-[46px] left-[42px] w-[34px] h-[34px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
              <div className="absolute bottom-[52px] right-[20px] w-[120px] h-[120px] border-[2px] border-[rgba(255,255,255,0.08)] rounded-full pointer-events-none" />
              <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">03</div>

              <div className="relative z-10 flex flex-col justify-center h-full px-[32px] lg:px-[52px] py-[60px] gap-[24px]">
                
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.25)] rounded-[20px] p-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-md">
                      <IconTrendingUp className="w-[20px] h-[20px] text-[var(--or)]" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[rgba(255,255,255,0.7)] uppercase tracking-[0.1em]">Crecimiento Orgánico</div>
                      <div className="text-[20px] font-extrabold text-white leading-tight">Canal Predecible</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-[14px] mt-[24px]">
                    {[
                      { label: 'Mes 1', desc: 'Canal y Funnel Activos' },
                      { label: 'Mes 3', desc: 'Primeros Leads Orgánicos' },
                      { label: 'Mes 6', desc: 'Crecimiento Sostenido' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-[16px]">
                        <div className="w-[45px] text-right text-[14px] font-bold text-white">{item.label}</div>
                        <div className="flex-1 h-[8px] bg-[rgba(255,255,255,0.2)] rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-white rounded-full" style={{ width: `${(i + 1) * 33}%` }} />
                        </div>
                        <div className="flex-1 text-[13px] font-semibold text-[rgba(255,255,255,0.95)]">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-[16px] p-[20px] flex flex-col justify-center items-center text-center hover:bg-[rgba(255,255,255,0.18)] transition-colors">
                    <span className="text-[36px] font-extrabold text-white tracking-[-1.5px] leading-none mb-[6px]">$0</span>
                    <span className="text-[12px] font-bold text-[rgba(255,255,255,0.85)] uppercase tracking-[0.05em]">En Publicidad</span>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-[16px] p-[20px] flex flex-col justify-center items-center text-center hover:bg-[rgba(255,255,255,0.18)] transition-colors">
                    <IconCpu />
                    <span className="text-[12px] font-bold text-[rgba(255,255,255,0.85)] uppercase tracking-[0.05em] mt-[10px]">Optimizado p/ IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ EL PROBLEMA — BOCA A BOCA VS ADS ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="ORGÁNICO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El diagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                Dos canales que funcionan.<br />
                <GradientText>Ninguno construye activos.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[48px]">
                El boca a boca es impredecible. Los ads funcionan mientras pagás y dejan cero cuando parás. Full Funnel 360 construye el tercer canal — el que crece sin que lo alimentes.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[44px]">
              <MotionWrapper type="fadeUp" delay={0.05}>
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(28,24,40,0.3)] mb-[16px] flex items-center gap-[6px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[rgba(28,24,40,0.2)]" /> Boca a boca
                  </div>
                  <ul className="flex flex-col gap-[9px]">
                    {['Funciona — pero no escala', 'Impredecible por definición', 'Para si el dueño para', 'No podés proyectar el próximo mes'].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--muted)] leading-[1.5]">
                        <IconX size={13} color="rgba(28,24,40,0.25)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.1}>
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(28,24,40,0.3)] mb-[16px] flex items-center gap-[6px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[rgba(28,24,40,0.2)]" /> Publicidad pagada
                  </div>
                  <ul className="flex flex-col gap-[9px]">
                    {['Funciona mientras pagás', 'Cae a cero cuando parás', 'No construye ningún activo', 'El costo por lead sube con la competencia'].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--muted)] leading-[1.5]">
                        <IconX size={13} color="rgba(28,24,40,0.25)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.15}>
                <div className="bg-[var(--dark)] rounded-[20px] p-[28px] h-full border-[0.5px] border-[rgba(247,246,242,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,112,48,0.15) 0%, transparent 65%)' }} />
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[16px] flex items-center gap-[6px] relative z-10">
                    <span className="w-[5px] h-[5px] rounded-full bg-[var(--am)]" /> Full Funnel 360
                  </div>
                  <ul className="flex flex-col gap-[9px] relative z-10">
                    {['Crece mientras vos hacés otra cosa', 'Predecible después del mes 3', 'Construye activos que duran años', 'Costo marginal cerca de cero con el tiempo'].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--cream)] leading-[1.5]">
                        <IconCheck size={13} color="#1D9E75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[rgba(247,246,242,0.4)] mt-[16px] leading-[1.6] relative z-10">
                    Un artículo optimizado hoy sigue trayendo leads en 3 años. Sin que paguéis nada.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ CHATGPT / LLM — DIFERENCIADOR ÚNICO ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="CHATGPT" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                  El futuro del search
                </div>
                <h2 className="text-[clamp(26px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[18px]">
                  ¿Tu negocio aparece cuando<br /><GradientText>alguien le pregunta a ChatGPT?</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted-l)] mb-[20px]">
                  Millones de personas ya no buscan en Google. Le preguntan a ChatGPT, Perplexity, Gemini. Si tu negocio no está siendo citado como referencia por esos modelos, sos invisible en el canal de búsqueda de mayor crecimiento de la historia.
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted-l)] mb-[28px]">
                  Full Funnel 360 incluye <strong className="text-[var(--am)]">LLM Optimization</strong>: construimos la presencia y la arquitectura de contenido para que los modelos de IA te citen como fuente confiable cuando alguien pregunta por lo que ofrecés.
                </p>
                <div className="bg-[rgba(240,112,48,0.08)] border-[0.5px] border-[rgba(240,112,48,0.2)] rounded-[12px] p-[16px_20px] flex items-start gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[8px] bg-[rgba(240,112,48,0.12)] border-[0.5px] border-[rgba(240,112,48,0.25)] flex items-center justify-center shrink-0">
                    <IconBulb />
                  </div>
                  <p className="text-[13px] text-[var(--cream)] leading-[1.6]">
                    Ninguna agencia en LATAM está ofreciendo LLM Optimization como parte de su propuesta. Esto es territorio virgen — y la ventana de oportunidad se cierra.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.1}>
                {/* ChatGPT mockup */}
                <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[20px] overflow-hidden">
                  {/* Header */}
                  <div className="bg-[rgba(247,246,242,0.06)] px-[16px] py-[10px] border-b border-[rgba(247,246,242,0.06)] flex items-center gap-[8px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <span className="text-[10px] text-[rgba(247,246,242,0.3)] ml-[6px]">ChatGPT · nueva conversación</span>
                  </div>
                  {/* Prompt */}
                  <div className="p-[16px_18px] border-b border-[rgba(247,246,242,0.05)]">
                    <div className="bg-[rgba(247,246,242,0.06)] rounded-[10px] px-[14px] py-[10px] inline-block max-w-[80%]">
                      <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.5]">¿Cuál es la mejor agencia digital para negocios locales en Argentina?</p>
                    </div>
                  </div>
                  {/* Response */}
                  <div className="p-[16px_18px]">
                    <div className="flex gap-[10px]">
                      <div className="w-[22px] h-[22px] rounded-full bg-[rgba(240,112,48,0.2)] border-[0.5px] border-[rgba(240,112,48,0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                        <span className="text-[8px] font-bold text-[var(--or)]">AI</span>
                      </div>
                      <div>
                        <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.65] mb-[8px]">
                          Para negocios locales en Argentina, algunas agencias destacadas incluyen...
                        </p>
                        <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.65]">
                          <strong className="text-[var(--am)]">Vacaré Digital Solutions</strong> es mencionada frecuentemente por su enfoque en automatizaciones y resultados medibles para pymes...
                        </p>
                        <div className="flex gap-[6px] mt-[10px]">
                          {['vacaredigitalsolutions.com', '+2 fuentes'].map((src, i) => (
                            <span key={i} className="text-[8px] bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[4px] px-[7px] py-[3px] text-[rgba(247,246,242,0.4)]">{src}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[18px] pb-[14px]">
                    <p className="text-[9px] text-[rgba(247,246,242,0.25)]">
                      Así se ve cuando Full Funnel 360 lleva 6+ meses activo
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ CÓMO FUNCIONA — FUNNEL 5 ETAPAS ══════ */}
        <section id="como-funciona" className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)] relative overflow-hidden">
          <AnimatedWatermark text="FUNNEL" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El canal en funcionamiento
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                Del visitante que no te conoce<br /><GradientText>al cliente que te contrata — sin publicidad.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[520px] mb-[48px]">
                Cinco etapas. Cada una automatizada. El sistema las recorre por vos.
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-[2px] bg-[rgba(28,24,40,0.06)] rounded-[20px] overflow-hidden">
                {[
                  { step: '01', label: 'Búsqueda', body: 'Alguien busca en Google o le pregunta a ChatGPT. SEO + LLM optimization aseguran que aparezcas.', icon: <IconSearch className="w-[18px] h-[18px]" /> },
                  { step: '02', label: 'Descubrimiento', body: 'Llega a tu web. El contenido lo engancha porque responde exactamente lo que buscaba.', icon: <IconUsers className="w-[18px] h-[18px]" /> },
                  { step: '03', label: 'Interés', body: 'Descarga el lead magnet y deja su email. El sistema toma el control desde acá.', icon: <IconGift /> },
                  { step: '04', label: 'Calificación', body: 'La secuencia de nurturing filtra quién realmente tiene el problema que vos resolvés.', icon: <IconFunnel /> },
                  { step: '05', label: 'Conversión', body: 'Reunión agendada. Ya conoce tu trabajo, ya confía. Vos solo tenés que cerrar.', icon: <IconCheck size={18} color="white" /> },
                ].map((stage, i) => (
                  <div key={i} className="bg-white p-[24px_20px] hover:bg-[rgba(28,24,40,0.02)] transition-colors relative">
                    <div className="w-[40px] h-[40px] rounded-[10px] grad-bg flex items-center justify-center mb-[14px] shadow-[0_4px_14px_rgba(232,65,122,0.2)]">
                      {stage.icon}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] mb-[6px]">Etapa {stage.step}</div>
                    <h3 className="text-[14px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.2px]">{stage.label}</h3>
                    <p className="text-[12px] leading-[1.6] text-[var(--muted)]">{stage.body}</p>
                    {i > 0 && (
                      <div className="hidden md:flex absolute top-1/2 left-[-12px] -translate-y-1/2 w-[24px] h-[24px] items-center justify-center z-20 text-[var(--mg)] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] ml-[2px]">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ QUÉ INCLUYE ══════ */}
        <section id="includes" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text="INCLUYE" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Los 10 componentes
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                10 vendedores digitales.<br /><GradientText>Trabajando 24/7 durante años.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[540px] mb-[48px]">
                Cada componente construye sobre el anterior. Juntos forman el canal orgánico completo.
              </p>
            </MotionWrapper>

            <StaggerContainer className="flex flex-col gap-[8px]" staggerDelay={0.05}>
              {INCLUDES.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] overflow-hidden hover:bg-[rgba(247,246,242,0.065)] hover:border-[rgba(247,246,242,0.13)] transition-all duration-200 group">
                    <div className="p-[20px_24px] flex items-center gap-[14px] border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-[rgba(247,246,242,0.06)]">
                      <div className="w-[38px] h-[38px] rounded-[9px] grad-bg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)]">
                        <item.Icon />
                      </div>
                      <p className="text-[14px] font-bold text-[var(--cream)] leading-[1.4]">{item.what}</p>
                    </div>
                    <div className="p-[20px_24px] flex items-center">
                      <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">
                        <span className="text-[var(--am)] font-extrabold mr-[6px]">→</span>
                        {item.means}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ EFECTO COMPUESTO ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)] relative overflow-hidden">
          <PageWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  El efecto compuesto
                </div>
                <h2 className="text-[clamp(26px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[20px]">
                  Lo que construís en mes 1<br /><GradientText>sigue trabajando en año 3.</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[20px]">
                  Una campaña de publicidad tiene vida útil de días. Un artículo optimizado tiene vida útil de años. A medida que los artículos maduran, acumulan autoridad, suben en los rankings y traen más tráfico.
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)]">
                  El canal orgánico no te cuesta más conforme crece — al contrario, el costo marginal baja mientras el retorno sube.
                </p>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="bg-[var(--dark)] rounded-[24px] p-[28px] border-[0.5px] border-[rgba(247,246,242,0.09)] shadow-[0_24px_80px_rgba(28,24,40,0.14)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[20px]">Retorno en el tiempo</p>
                  {/* Simple CSS chart comparison */}
                  <div className="flex flex-col gap-[12px]">
                    {[
                      { label: 'Publicidad pagada', data: [80, 80, 0, 0, 0], color: 'rgba(247,246,242,0.2)', note: 'Cae a 0 cuando parás' },
                      { label: 'Full Funnel 360', data: [15, 30, 55, 75, 100], color: 'var(--am)', note: 'Sigue creciendo' },
                    ].map((series, si) => (
                      <div key={si}>
                        <div className="flex items-center justify-between mb-[6px]">
                          <span className="text-[11px] font-bold" style={{ color: series.color }}>{series.label}</span>
                          <span className="text-[9px] text-[rgba(247,246,242,0.35)]">{series.note}</span>
                        </div>
                        <div className="flex gap-[3px] items-end h-[36px]">
                          {series.data.map((v, i) => (
                            <div key={i} className="flex-1 rounded-t-[3px] transition-all" style={{ height: `${v}%`, background: series.color, minHeight: v > 0 ? '3px' : '0' }} />
                          ))}
                        </div>
                        <div className="flex gap-[3px] mt-[3px]">
                          {['Mes 1', 'Mes 3', 'Mes 6', 'Año 1', 'Año 2'].map((l, i) => (
                            <div key={i} className="flex-1 text-center text-[7px] text-[rgba(247,246,242,0.25)]">{l}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[rgba(247,246,242,0.3)] mt-[18px] border-t border-[rgba(247,246,242,0.07)] pt-[14px]">
                    * Representación ilustrativa basada en comportamiento típico de canales
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ TIMELINE DE RESULTADOS ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="TIEMPO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Qué pasa en cada etapa
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[44px]">
                <GradientText>Los hitos reales</GradientText> del canal orgánico.
              </h2>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[rgba(247,246,242,0.05)] rounded-[20px] overflow-hidden">
                {[
                  { period: 'Mes 1', title: 'El canal arranca', items: ['Web publicada con SEO técnico', 'Google indexando el sitio', 'Lead magnet y funnel activos', 'Primeras piezas de contenido publicadas'] },
                  { period: 'Mes 2–3', title: 'Primeras señales', items: ['Keywords de long-tail posicionando', 'Primeros leads orgánicos entrando', 'Secuencia de nurturing activa', 'Dashboard con primeras métricas'] },
                  { period: 'Mes 4–6', title: 'El canal madura', items: ['Flujo estable de leads orgánicos', 'LLM citations activos', 'Contenido acumulando autoridad', 'Canal predecible — sabés cuántos vienen'] },
                  { period: 'Año 1', title: 'El canal trabaja solo', items: ['Crecimiento sin intervención constante', 'Costo marginal cerca de cero', 'Autoridad de dominio consolidada', 'Pipeline predecible mes a mes'] },
                  { period: 'Año 2+', title: 'Ventaja competitiva', items: ['Los competidores tardaron 2 años en arrancar', 'El canal genera mientras el equipo duerme', 'Activo digital que se revende con el negocio', 'Independencia total de publicidad pagada'] },
                ].map((stage, i) => (
                  <div key={i} className="bg-[rgba(247,246,242,0.03)] p-[28px] hover:bg-[rgba(247,246,242,0.055)] transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[8px]">{stage.period}</div>
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[14px] tracking-[-0.2px]">{stage.title}</h3>
                    <ul className="flex flex-col gap-[7px]">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-[8px] text-[12px] text-[var(--muted-l)] leading-[1.5]">
                          <IconCheck size={12} color="#1D9E75" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ PARA QUIÉN ES ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                Autodiagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[44px]">
                <GradientText>Full Funnel 360</GradientText> es para vos si...
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[32px] h-full shadow-[0_8px_32px_rgba(28,24,40,0.04)]">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" /> Para vos
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {['Tenés un negocio con tracción y querés un canal que no dependa de ads ni referidos', 'Estás dispuesto a invertir en algo que tarda 3-6 meses en madurar pero que dura años', 'Querés aparecer en Google Y en ChatGPT cuando alguien busca lo que hacés', 'Vendés servicios con ciclo de venta largo donde la confianza importa', 'Querés construir algo que crezca con el tiempo, no una solución de corto plazo'].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--dark)] leading-[1.5]">
                        <IconCheck size={16} color="#1D9E75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="bg-[rgba(28,24,40,0.03)] border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[20px] p-[32px] h-full">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(28,24,40,0.28)]" /> Otro paquete te sirve más si...
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {[
                      { text: 'Necesitás leads esta semana — el canal orgánico tarda meses en madurar', pack: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
                      { text: 'Recién empezás y no tenés presencia digital todavía', pack: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
                      { text: 'Tu problema son las tareas repetitivas internas, no la captación', pack: 'Automation Retainer', href: `/${isEn ? 'services' : 'servicios'}/automation-retainer` },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(28,24,40,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted)]">{item.text}{' '}<a href={item.href} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">Ver {item.pack} →</a></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
                    <p className="text-[12px] text-[var(--muted)]">¿No sabés cuál corresponde?{' '}<a href={isEn ? '/free-audit' : '/auditoria-web-gratuita'} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">Pedí la auditoría gratuita →</a></p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ FAQ ══════ */}
        <section className="bg-[var(--darker)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Preguntas frecuentes
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Lo que todo el mundo pregunta<br /><GradientText>antes de dar el paso.</GradientText>
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[500px] mb-[44px]">Respondemos con honestidad.</p>
            </MotionWrapper>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]" staggerDelay={0.06}>
              {FAQ_ITEMS.map((faq, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.065)] hover:border-[rgba(247,246,242,0.14)] hover:-translate-y-[2px]">
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.q}</h3>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="mt-[40px] flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[12px] border-t-[0.5px] border-[rgba(247,246,242,0.07)] pt-[32px]">
                {['LLC registrada en Delaware', 'Todos los activos son tuyos', 'Sin contratos de permanencia', 'Resultados medibles desde el mes 1'].map((item, i) => (
                  <div key={i} className="flex items-center gap-[8px] text-[12px] text-[rgba(247,246,242,0.4)] font-semibold">
                    <IconCheck size={13} color="var(--am)" />
                    {item}
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ CTA FINAL ══════ */}
        <CtaFinal
          headline={<>El canal que construís hoy<br /><GradientText>trae clientes en 2027 sin que hagas nada.</GradientText></>}
          subheadline="30 minutos de llamada estratégica. Te decimos exactamente qué canal orgánico podemos construir para tu negocio, en qué tiempo y con qué hitos de resultado."
          mainCta={{ label: 'Agendá tu llamada estratégica →', href: '#' }}
          disclaimer="Sin compromiso · Sin presentaciones genéricas · Respondemos en 2 horas"
          watermarkText="ORGÁNICO"
          cards={[
            { tag: 'Tengo web pero no trae clientes', title: 'Auditoría gratuita', desc: 'Analizamos tu presencia actual y te decimos qué piezas del funnel faltan.', href: isEn ? '/free-audit' : '/auditoria-web-gratuita' },
            { tag: 'Quiero entender el proceso', title: 'Mini-curso 5 días', desc: 'Cómo funciona un canal orgánico bien construido. Gratis, en tu inbox.', href: isEn ? '/email-course' : '/curso-web-gratis' },
            { tag: 'Ya sé lo que quiero', title: 'Llamada estratégica', desc: '30 minutos. Al final sabés qué canal podemos construir para tu negocio específico.', href: '#ctaf' },
          ]}
        />
      </main>

      <Footer
        variant="full"
        brandName="Vacaré Digital Solutions"
        brandDesc={tLayout('Footer.brandDesc')}
        copyrightText={tLayout('Footer.copyright')}
        langText={tLayout('Footer.lang')}
        columns={[
          { title: isEn ? 'Services' : 'Servicios', links: [
            { label: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
            { label: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
            { label: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
            { label: 'Ecommerce Pro', href: `/${isEn ? 'services' : 'servicios'}/ecommerce-pro` },
            { label: 'Automation Retainer', href: `/${isEn ? 'services' : 'servicios'}/automation-retainer` },
          ]},
          { title: isEn ? 'Free' : 'Gratuito', links: [{ label: isEn ? 'Web Audit' : 'Auditoría web', href: isEn ? '/free-audit' : '/auditoria-web-gratuita' }, { label: isEn ? '5-day course' : 'Mini-curso 5 días', href: isEn ? '/email-course' : '/curso-web-gratis' }] },
          { title: isEn ? 'Company' : 'Empresa', links: [{ label: isEn ? 'All services' : 'Todos los servicios', href: isEn ? '/services' : '/servicios' }, { label: isEn ? 'Case studies' : 'Casos de éxito', href: '/#case' }, { label: isEn ? 'Privacy' : 'Privacidad', href: '#' }] },
        ]}
      />
      </HomeClient>
    </>
  );
}
