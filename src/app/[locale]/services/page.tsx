import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { buildPageMeta, pageUrl } from '@/lib/seo';

import HomeClient from '@/components/layout/HomeClient';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import CaseStudyBlock from '@/components/sections/CaseStudyBlock';
import ProcessSteps from '@/components/sections/ProcessSteps';
import CtaFinal from '@/components/sections/CtaFinal';
import GradientText from '@/components/ui/GradientText';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import OpenMeetingBtn from '@/components/ui/OpenMeetingBtn';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as 'es' | 'en';
  const t = await getTranslations({ locale, namespace: 'Metadata.Services' });
  return {
    title: t('title'),
    description: t('description'),
    ...buildPageMeta(loc, '/services'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl(loc, '/services'),
      type: 'website',
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });
  const t = await getTranslations({ locale, namespace: 'Services' });

  // Load arrays directly from messages if possible, or construct them
  // For static structures, we map from translation keys
  // It's safer to use getMessages or raw data if the structure is complex, 
  // but next-intl raw() works for arrays of objects.
  const packsRaw = t.raw('Packs.items');
  const questionsRaw = t.raw('Questions.cards');
  const compareFeatures = t.raw('Compare.features');
  const compareAutomationVals = t.raw('Compare.automationVals');
  const processStepsRaw = t.raw('Process.steps');
  const guaranteeList = t.raw('Guarantee.list');
  const faqItemsRaw = t.raw('Faq.items');
  const ctaCards = t.raw('CtaFinal.cards');
  const heroStats = t.raw('Hero.stats');
  const whyCards = t.raw('WhyFailed.cards');

  return (
    <HomeClient>
      <Nav
        transparent={false}
        brandName={tLayout('Nav.brand')}
      />

      <main className="pt-[64px]">

        {/* ══════ HERO ══════ */}
        <section className="min-h-[85vh] flex bg-[var(--dark)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(247,246,242,0.04) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.07) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text={t('Hero.watermark')} direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(80px,13vw,170px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-[54%] flex flex-col justify-center px-6 lg:px-[52px] py-[80px] relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[22px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                  {t('Hero.eyebrow')}
                </div>
                <h1 className="text-[clamp(36px,4.8vw,62px)] font-extrabold leading-[1.06] tracking-[-2px] text-[var(--cream)] mb-[18px]" dangerouslySetInnerHTML={{ __html: t.raw('Hero.title') }} />
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[440px] mb-[36px]">
                  {t('Hero.subtitle')}
                </p>
              </MotionWrapper>

              <MotionWrapper type="fadeUp" delay={0.15}>
                <div className="flex flex-wrap gap-[12px] mb-[36px]">
                  <OpenMeetingBtn
                    className="px-[26px] py-[14px] rounded-[10px] grad-bg text-white text-[15px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] hover:opacity-90 border-none"
                  >
                    {t('Hero.cta')}
                  </OpenMeetingBtn>
                  <a
                    href="#packs"
                    className="px-[26px] py-[14px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.18)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.4)] hover:-translate-y-[1px]"
                  >
                    {t('Hero.ctaSecondary')}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[8px] text-[12px] font-semibold text-[rgba(247,246,242,0.35)]">
                  <span className="flex items-center gap-[6px]"><span className="w-[5px] h-[5px] rounded-full bg-[var(--am)] inline-block" />{t('Hero.trust.delaware')}</span>
                  <span className="flex items-center gap-[6px]"><span className="w-[5px] h-[5px] rounded-full bg-[var(--mg)] inline-block" />{t('Hero.trust.projects')}</span>
                  <span className="flex items-center gap-[6px]"><span className="w-[5px] h-[5px] rounded-full bg-[#1D9E75] inline-block" />{t('Hero.trust.supertramp')}</span>
                </div>
              </MotionWrapper>
            </div>

            <div className="w-full lg:w-[46%] relative overflow-hidden" style={{ background: 'linear-gradient(145deg,#E8417A 0%,#F07030 48%,#F5A623 100%)' }}>
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
              <div className="absolute top-[28px] left-[22px] w-[76px] h-[76px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
              <div className="absolute top-[52px] left-[46px] w-[38px] h-[38px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
              <div className="absolute bottom-[56px] left-[24px] w-[86px] h-[86px] border-[1.5px] border-[rgba(255,255,255,0.13)] rotate-[18deg] pointer-events-none" />
              <div className="absolute bottom-[84px] left-[46px] w-[42px] h-[42px] border-[1px] border-[rgba(255,255,255,0.08)] rotate-[18deg] pointer-events-none" />
              <div className="absolute top-[16px] right-[20px] w-[50px] h-[50px] border-[1.5px] border-[rgba(255,255,255,0.15)] rotate-45 pointer-events-none" />
              <div className="absolute top-[32px] right-[36px] w-[24px] h-[24px] border-[1px] border-[rgba(255,255,255,0.09)] rotate-45 pointer-events-none" />
              <div className="absolute top-[22%] right-[26px] w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.38)] pointer-events-none" />
              <div className="absolute top-[34%] right-[50px] w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.22)] pointer-events-none" />
              <div className="absolute bottom-[26%] right-[34px] w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.28)] pointer-events-none" />
              <div className="absolute text-[clamp(90px,16vw,200px)] font-extrabold italic text-[rgba(255,255,255,0.08)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">5</div>
              <div className="absolute right-[18px] top-1/2 -translate-y-1/2 writing-mode-vertical text-[10px] font-bold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.28)] z-[2]" style={{ writingMode: 'vertical-rl' }}>vacaredigitalsolutions.com/{locale === 'en' ? 'services' : 'servicios'}</div>

              <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[32px] lg:px-[48px] py-[40px]">
                <div className="grid grid-cols-2 gap-[10px] mb-[24px]">
                  {heroStats.map((s: any, i: number) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[14px] p-[18px]">
                      <span className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white tracking-[-1.5px] leading-none block mb-[4px]">{s.num}</span>
                      <span className="text-[11px] font-bold text-[rgba(255,255,255,0.6)] leading-[1.4]">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-[0.5px] border-[rgba(255,255,255,0.18)] rounded-[14px] p-[18px_20px]">
                  <p className="text-[13px] text-[rgba(255,255,255,0.9)] leading-[1.65] italic mb-[10px]">{t('Hero.quote')}</p>
                  <span className="text-[11px] font-bold text-[rgba(255,255,255,0.55)]">{t('Hero.quoteAuthor')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ POR QUÉ FALLARON ══════ */}
        <section className="bg-[var(--darker)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text={t('WhyFailed.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.02)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--mg)] block" />
                {t('WhyFailed.eyebrow')}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]" dangerouslySetInnerHTML={{ __html: t.raw('WhyFailed.title') }} />
              <p className="text-[16px] leading-[1.7] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
                {t('WhyFailed.intro')}
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[14px]" staggerDelay={0.1}>
              {whyCards.map((card: any, i: number) => (
                <StaggerItem key={i}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[20px] p-[28px] h-full hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(247,246,242,0.15)] transition-all duration-300 hover:-translate-y-[3px]">
                    <div className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[var(--mg)] mb-[14px]">{card.num}</div>
                    <h3 className="text-[16px] font-extrabold text-[var(--cream)] mb-[10px] leading-[1.3] tracking-[-0.3px]">{card.title}</h3>
                    <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">{card.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="mt-[48px] flex flex-wrap gap-[12px] items-center">
                <span className="text-[14px] text-[var(--muted-l)]">{t('WhyFailed.footer')}</span>
                <a href="#starter" className="text-[14px] font-bold text-[var(--mg)] no-underline hover:opacity-80 transition-opacity">{t('WhyFailed.footerLink')}</a>
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ CASO SUPERTRAMP ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {t('Case.eyebrow')}
              </div>
            </MotionWrapper>
            <CaseStudyBlock
              tag="Supertramp Hostels · Cusco &amp; Machu Picchu"
              title={<>De depender 100% de Booking.com<br />a generar el <GradientText>30% de la facturación</GradientText> directo desde la web.</>}
              description="Cuando nos contactaron, tenían web activa, Instagram activo, Google Maps activo. El 100% de las reservas venía de OTAs que se llevaban entre 15 y 20% de comisión en cada una. Identificamos tres cosas que nadie les había señalado: velocidad crítica en mobile, sin CTAs para reserva directa, y cero posicionamiento en las keywords que sus huéspedes reales buscaban. Seis meses después, el 30% de su facturación llega directo desde la web."
              metrics={[
                { num: '30%', label: 'Facturación directa desde la web' },
                { num: '6m', label: 'Tiempo hasta el resultado' },
                { num: '$0', label: 'Comisión a OTAs por esas reservas' },
              ]}
              linkHref="/case-studies/supertramp"
              linkText="Ver el caso completo →"
              imgSrc="/images/home_01_supertramp.png"
              imgTag="supertramp hostels"
              imgNum="30%"
              imgSub="Cusco &amp; Machu Picchu"
            />
          </PageWrapper>
        </section>

        {/* ══════ PACKS ══════ */}
        <section id="packs" className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(28,24,40,0.06)]">
          <AnimatedWatermark text={t('Packs.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {t('Packs.eyebrow')}
              </div>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.08] mb-[12px]" dangerouslySetInnerHTML={{ __html: t.raw('Packs.title') }} />
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[560px] mb-[56px]" dangerouslySetInnerHTML={{ __html: t.raw('Packs.intro') }} />
            </MotionWrapper>

            <div className="flex flex-col gap-[20px]">
              {packsRaw.map((pack: any, index: number) => {
                const isDark = pack.id === 'funnel' || pack.id === 'retainer';
                const isFeatured = pack.id === 'growth';
                const isReverse = pack.id === 'growth' || pack.id === 'ecommerce';

                const wrapperClass = isFeatured
                  ? 'rounded-[24px] overflow-hidden bg-white border-[2px] border-transparent bg-clip-padding relative shadow-[0_0_50px_rgba(232,65,122,0.28),0_0_100px_rgba(240,112,48,0.12),0_24px_60px_rgba(232,65,122,0.15)]'
                  : isDark
                    ? 'rounded-[24px] overflow-hidden bg-[var(--dark)] border-[0.5px] border-[rgba(247,246,242,0.07)] transition-all hover:shadow-[0_20px_60px_rgba(28,24,40,0.2),0_0_0_1px_rgba(245,166,35,0.28)] hover:border-[rgba(245,166,35,0.28)]'
                    : 'rounded-[24px] overflow-hidden bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] transition-all hover:shadow-[0_20px_60px_rgba(232,65,122,0.1),0_0_0_1px_rgba(232,65,122,0.2)] hover:border-[rgba(232,65,122,0.2)]';

                const infoClass = 'p-[32px] lg:p-[48px_52px] flex flex-col justify-center relative overflow-hidden';

                const titleColor = isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]';
                const personaColor = isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]';
                const descColor = isDark ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]';
                const wmColor = isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]';

                const badgeClassMap: any = {
                  'starter': 'bg-[rgba(28,24,40,0.06)] text-[var(--muted)]',
                  'growth': 'bg-[var(--grad)] text-white',
                  'funnel': 'bg-[rgba(247,246,242,0.08)] text-[rgba(247,246,242,0.5)]',
                  'ecommerce': 'bg-[rgba(28,24,40,0.06)] text-[var(--muted)]',
                  'retainer': 'bg-[rgba(245,166,35,0.12)] text-[#7a5000]'
                };

                const includesPanel = (
                  <div className={`p-[32px] lg:p-[48px_52px] flex flex-col justify-center ${isDark ? 'border-t-[0.5px] lg:border-t-0 lg:border-l-[0.5px] border-[rgba(247,246,242,0.06)] bg-[rgba(247,246,242,0.03)]' : 'border-t-[0.5px] lg:border-t-0 lg:border-l-[0.5px] border-[rgba(28,24,40,0.07)] bg-[rgba(28,24,40,0.02)]'}`}>
                    <div className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-[20px] flex items-center gap-[8px] ${isDark ? 'text-[rgba(247,246,242,0.3)]' : 'text-[var(--muted)]'}`}>
                      <i className="w-[14px] h-[1px] bg-current block" />
                      {t('Packs.includesTitle')}
                    </div>
                    <ul className="flex flex-col gap-[12px] mb-[24px]">
                      {pack.includes.map((item: string, i: number) => (
                        <li key={i} className={`text-[14px] flex items-start gap-[10px] leading-[1.5] ${isDark ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
                          <div className="w-[16px] h-[16px] rounded-full grad-bg shrink-0 mt-[1px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className={`rounded-[10px] p-[14px_16px] text-[13px] flex gap-[8px] items-start border-[0.5px] ${isDark ? 'bg-[rgba(247,246,242,0.04)] border-[rgba(247,246,242,0.08)] text-[var(--cream)]' : 'bg-gradient-to-br from-[rgba(232,65,122,0.06)] to-[rgba(245,166,35,0.04)] border-[rgba(232,65,122,0.1)] text-[var(--dark)]'}`}>
                      <span className="text-[var(--mg)] font-extrabold shrink-0">→</span>
                      {pack.result}
                    </div>
                  </div>
                );

                const infoPanel = (
                  <div className={infoClass}>
                    <div className={`absolute -bottom-[20px] -right-[10px] text-[120px] font-extrabold italic opacity-[0.04] tracking-[-5px] pointer-events-none ${wmColor}`}>{pack.num}</div>
                    <span className={`inline-flex items-center gap-[6px] text-[10px] font-bold tracking-[0.1em] uppercase px-[12px] py-[4px] rounded-[20px] mb-[18px] self-start ${badgeClassMap[pack.id]}`}>{pack.badge}</span>
                    <h2 className={`text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-1px] leading-[1.1] mb-[14px] ${titleColor}`}>{pack.name}</h2>
                    <p className={`text-[13px] font-bold leading-[1.5] mb-[16px] max-w-[400px] ${personaColor}`}>{pack.persona}</p>
                    <p className={`text-[15px] leading-[1.72] mb-[28px] max-w-[400px] ${descColor}`}>{pack.desc}</p>
                    <OpenMeetingBtn
                      className={`self-start px-[26px] py-[13px] rounded-[9px] font-bold text-[14px] leading-none cursor-pointer transition-all hover:-translate-y-[1px] border-none ${isFeatured ? 'grad-bg text-white hover:opacity-90' : isDark ? 'bg-transparent border-[1.5px] border-[rgba(247,246,242,0.2)] text-[var(--cream)] hover:border-[rgba(247,246,242,0.5)]' : 'bg-transparent border-[1.5px] border-[rgba(28,24,40,0.14)] text-[var(--dark)] hover:border-[var(--mg)] hover:text-[var(--mg)]'}`}
                    >
                      {pack.cta}
                    </OpenMeetingBtn>
                    <a
                      href={`/${locale === 'en' ? 'services' : 'servicios'}/${pack.slug}`}
                      className={`self-start mt-[10px] text-[12px] font-semibold no-underline transition-all hover:opacity-100 ${isDark ? 'text-[rgba(247,246,242,0.38)] hover:text-[rgba(247,246,242,0.7)]' : 'text-[rgba(28,24,40,0.35)] hover:text-[var(--mg)]'}`}
                    >
                      {t('Packs.ctaDetail')}
                    </a>
                  </div>
                );

                return (
                  <MotionWrapper key={pack.id} type="fadeUp">
                    <div id={pack.id} className={wrapperClass}>
                      {isFeatured && <div className="absolute inset-[-2px] rounded-[26px] grad-bg z-[-1]" />}
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
                        {isReverse ? (
                          <>
                            <div className="lg:order-first order-last">{includesPanel}</div>
                            <div className="lg:order-last order-first">{infoPanel}</div>
                          </>
                        ) : (
                          <>
                            {infoPanel}
                            {includesPanel}
                          </>
                        )}
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </PageWrapper>
        </section>

        {/* ══════ ¿CUÁL DESCRIBE TU NEGOCIO? ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {t('Questions.eyebrow')}
              </div>
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]" dangerouslySetInnerHTML={{ __html: t.raw('Questions.title') }} />
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[520px] mb-[48px]">
                {t('Questions.intro')}
              </p>
            </MotionWrapper>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.07}>
              {questionsRaw.map((card: any, i: number) => {
                const hrefs = ['#starter', '#growth', '#funnel', '#ecommerce', '#retainer', locale === 'en' ? '/free-web-audit' : '/auditoria-web-gratuita'];
                return (
                  <StaggerItem key={i}>
                    <a
                      href={hrefs[i]}
                      className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] p-[24px] block no-underline transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(28,24,40,0.08)] hover:border-[var(--mg)] group relative overflow-hidden h-full"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg opacity-0 transition-opacity group-hover:opacity-100" />
                      <p className="text-[15px] font-bold text-[var(--dark)] leading-[1.4] mb-[14px]">{card.pain}</p>
                      <div className="flex items-center gap-[6px] text-[12px] font-bold text-[var(--mg)]">
                        <span>{card.pack}</span>
                        <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                      </div>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ TABLA COMPARATIVA ══════ */}
        <section id="compare" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text={t('Compare.watermark')} direction="left" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {t('Compare.eyebrow')}
              </div>
              <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[48px]" dangerouslySetInnerHTML={{ __html: t.raw('Compare.title') }} />
            </MotionWrapper>
            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="overflow-x-auto pb-[16px]">
                <p className="text-[11px] text-[var(--muted-l)] mb-[14px] lg:hidden">{t('Compare.swipeHint')}</p>
                <table className="w-full min-w-[750px] border-collapse">
                  <thead>
                    <tr>
                      <th className="p-[14px_20px] text-left text-[11px] font-bold tracking-[0.08em] uppercase text-[rgba(247,246,242,0.35)] border-b-[0.5px] border-[rgba(247,246,242,0.07)] w-[220px]">{t('Compare.colResult')}</th>
                      {['Starter', 'Growth ⭐', 'Full Funnel', 'Ecommerce', 'Retainer'].map((h, i) => (
                        <th key={i} className={`p-[14px_20px] text-left text-[11px] font-bold tracking-[0.08em] uppercase border-b-[0.5px] border-[rgba(247,246,242,0.07)] ${i === 1 ? 'text-[var(--mg)]' : 'text-[rgba(247,246,242,0.35)]'}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareFeatures.map((feat: string, i: number) => {
                      const pattern = [
                        [true,  true,  true,  true,  false],
                        [true,  true,  true,  true,  false],
                        [true,  true,  true,  false, false],
                        [true,  true,  true,  true,  false],
                        ['auto', 'auto', 'auto', 'auto', 'auto'],
                        [false, true,  true,  false, false],
                        [false, true,  true,  false, false],
                        [false, true,  true,  true,  false],
                        [false, false, true,  false, false],
                        [false, false, true,  false, false],
                        [false, false, false, true,  false]
                      ][i];

                      return (
                        <tr key={i} className="hover:bg-[rgba(247,246,242,0.03)]">
                          <td className="p-[14px_20px] text-[13px] font-semibold text-[var(--cream)] border-b-[0.5px] border-[rgba(247,246,242,0.05)] align-middle">{feat}</td>
                          {pattern.map((val, j) => (
                            <td key={j} className={`p-[14px_20px] text-[13px] border-b-[0.5px] border-[rgba(247,246,242,0.05)] align-middle ${j === 1 ? 'bg-[rgba(232,65,122,0.05)]' : ''}`}>
                              {val === 'auto'
                                ? <span className="text-[var(--am)] text-[12px] font-bold">{compareAutomationVals[j]}</span>
                                : val === true
                                  ? <span className="text-[#1D9E75] font-extrabold text-[16px]">✓</span>
                                  : <span className="text-[rgba(247,246,242,0.2)] text-[16px]">—</span>
                              }
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="p-[14px_20px] text-[13px] font-semibold text-[var(--cream)] align-middle">{t('Compare.forMe')}</td>
                      {['#starter','#growth','#funnel','#ecommerce','#retainer'].map((href, j) => (
                        <td key={j} className={`p-[14px_20px] align-middle ${j === 1 ? 'bg-[rgba(232,65,122,0.05)]' : ''}`}>
                          <a href={href} className="text-[11px] font-bold grad-text no-underline hover:opacity-80">{t('Compare.view')}</a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ PROCESO ══════ */}
        <section id="process" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text={t('Process.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-[1]">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {t('Process.eyebrow')}
              </div>
              <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]" dangerouslySetInnerHTML={{ __html: t.raw('Process.title') }} />
              <p className="text-[16px] leading-[1.7] text-[var(--muted-l)] max-w-[520px] mb-[52px]">
                {t('Process.intro')}
              </p>
            </MotionWrapper>
            <MotionWrapper type="fadeUp" delay={0.15}>
              <ProcessSteps steps={processStepsRaw} variant="horizontal" background="dark" />
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ GARANTÍA ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Guarantee.eyebrow')}
                </div>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[16px]" dangerouslySetInnerHTML={{ __html: t.raw('Guarantee.title') }} />
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[12px]">{t('Guarantee.p1')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[28px]">{t('Guarantee.p2')}</p>
                <ul className="flex flex-col gap-[10px]">
                  {guaranteeList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--dark)] leading-[1.5]">
                      <span className="gt font-extrabold text-[16px] shrink-0 leading-[1.3]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.15}>
                <div className="bg-[var(--dark)] rounded-[24px] p-[40px] relative overflow-hidden">
                  <div className="absolute inset-0 grad-bg opacity-[0.06] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.3)] mb-[16px]">{t('Guarantee.case.tag')}</div>
                    <div className="flex gap-[24px] mb-[20px]">
                      <div>
                        <span className="block text-[11px] font-bold text-[rgba(247,246,242,0.3)] uppercase tracking-[0.06em] mb-[4px]">{t('Guarantee.case.beforeTitle')}</span>
                        <span className="block text-[14px] text-[rgba(247,246,242,0.55)] leading-[1.5]" dangerouslySetInnerHTML={{ __html: t.raw('Guarantee.case.before') }} />
                      </div>
                      <div className="text-[28px] text-[var(--mg)] font-extrabold self-center">→</div>
                      <div>
                        <span className="block text-[11px] font-bold text-[rgba(247,246,242,0.3)] uppercase tracking-[0.06em] mb-[4px]">{t('Guarantee.case.afterTitle')}</span>
                        <span className="block text-[14px] text-[var(--cream)] leading-[1.5]" dangerouslySetInnerHTML={{ __html: t.raw('Guarantee.case.after') }} />
                      </div>
                    </div>
                    <div className="text-[clamp(56px,8vw,88px)] font-extrabold tracking-[-4px] leading-[1] gt mb-[8px]">{t('Guarantee.case.num')}</div>
                    <div className="text-[16px] font-bold text-[var(--cream)] mb-[6px]">{t('Guarantee.case.label')}</div>
                    <div className="text-[13px] text-[rgba(247,246,242,0.4)] leading-[1.65]">{t('Guarantee.case.sub')}</div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ FAQ ══════ */}
        <section id="faq" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text={t('Faq.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {t('Faq.eyebrow')}
              </div>
              <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[48px]" dangerouslySetInnerHTML={{ __html: t.raw('Faq.title') }} />
            </MotionWrapper>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[12px]" staggerDelay={0.06}>
              {faqItemsRaw.map((faq: any, idx: number) => (
                <StaggerItem key={idx}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(247,246,242,0.15)] hover:-translate-y-[2px]">
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.q}</h3>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ CTA FINAL ══════ */}
        <CtaFinal
          headline={<span dangerouslySetInnerHTML={{ __html: t.raw('CtaFinal.headline') }} />}
          subheadline={t('CtaFinal.subheadline')}
          mainCta={{ label: t('CtaFinal.mainCta'), href: '#' }}
          disclaimer={t('CtaFinal.disclaimer')}
          watermarkText={t('CtaFinal.watermark')}
          cards={[
            {
              tag: ctaCards[0].tag,
              title: ctaCards[0].title,
              desc: ctaCards[0].desc,
              href: locale === 'en' ? '/free-web-audit' : '/auditoria-web-gratuita',
            },
            {
              tag: ctaCards[1].tag,
              title: ctaCards[1].title,
              desc: ctaCards[1].desc,
              href: locale === 'en' ? '/free-web-course' : '/curso-web-gratis',
            },
            {
              tag: ctaCards[2].tag,
              title: ctaCards[2].title,
              desc: ctaCards[2].desc,
              href: '#',
            },
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
          {
            title: tLayout('Footer.cols.packs'),
            links: [
              { label: 'Starter Presence', href: '#starter' },
              { label: 'Growth Machine', href: '#growth' },
              { label: 'Full Funnel 360', href: '#funnel' },
              { label: 'Ecommerce Pro', href: '#ecommerce' },
              { label: 'Automation Retainer', href: '#retainer' },
            ],
          },
          {
            title: tLayout('Footer.cols.free'),
            links: [
              { label: tLayout('Footer.links.audit'), href: locale === 'en' ? '/free-web-audit' : '/auditoria-web-gratuita' },
              { label: tLayout('Footer.links.course'), href: locale === 'en' ? '/free-web-course' : '/curso-web-gratis' },
            ],
          },
          {
            title: tLayout('Footer.cols.company'),
            links: [
              { label: tLayout('Footer.links.cases'), href: '/#case' },
              { label: tLayout('Footer.links.team'), href: '/#team' },
              { label: tLayout('Footer.links.privacy'), href: '#' },
              { label: tLayout('Footer.links.terms'), href: '#' },
            ],
          },
        ]}
      />
    </HomeClient>
  );
}
