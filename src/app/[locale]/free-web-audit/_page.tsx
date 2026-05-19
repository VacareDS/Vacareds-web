import { notFound } from "next/navigation";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { buildPageMeta, pageUrl } from '@/lib/seo';

import AuditForm from '@/components/forms/AuditForm';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import HomeClient from '@/components/layout/HomeClient';
import BentoGrid from '@/components/sections/BentoGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import VideoTestimonial from '@/components/sections/VideoTestimonial';
import MockReportAnimated from '@/components/sections/MockReportAnimated';
import AuditoriaHeroMotion from '@/components/sections/AuditoriaHeroMotion';
import GradientText from '@/components/ui/GradientText';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  const loc = locale as 'es' | 'en';
  const t = await getTranslations({ locale, namespace: 'Metadata.FreeAudit' });
  return {
    title: t('title'),
    description: t('description'),
    ...buildPageMeta(loc, '/free-audit'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl(loc, '/free-audit'),
      type: 'website',
    },
  };
}

const IconBolt  = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#auditGi)" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconSearch= () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#auditGi)" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>;
const IconPulse = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#auditGi)" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const IconShield= () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#auditGi)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconDoc   = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#auditGi)" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="13" y2="15"/></svg>;
const bentoIcons = [<IconBolt key="b"/>, <IconSearch key="s"/>, <IconPulse key="p"/>, <IconShield key="sh"/>, <IconDoc key="d"/>];

export default async function AuditoriaWebGratuitaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'FreeAudit' });
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const bentoCards = (t.raw('Get.cards') as Array<{ title: string; p: string }>).map((c, i) => ({
    title: c.title,
    body: c.p,
    span: (i === 0 ? 7 : i === 1 ? 5 : 4) as 4 | 5 | 7,
    icon: bentoIcons[i] || undefined,
  }));
  const processSteps = (t.raw('How.steps') as Array<{ num: string; title: string; desc: string; time: string }>).map(s => ({
    num: s.num, title: s.title, body: s.desc, time: s.time,
  }));
  const analyzeList = t.raw('Analyze.list') as Array<{ num: string; title: string; p: string }>;
  const whoCards   = t.raw('Who.cards') as Array<{ title: string; checks: string[] }>;
  const faqItems   = (t.raw('Faq.items') as Array<{ q: string; a: string }>).map(f => ({ question: f.q, answer: f.a }));
  const trustItems = t.raw('CtaBottom.trust') as string[];

  /* Form translations — passed as serializable props to the client hero component */
  const formTranslations = {
    title:         t('Hero.form.title'),
    sub:           t('Hero.form.sub'),
    urlLabel:      t('Hero.form.urlLabel'),
    urlHint:       t('Hero.form.urlHint'),
    emailLabel:    t('Hero.form.emailLabel'),
    submit:        t('Hero.form.submit'),
    trust:         t('Hero.form.trust'),
    optinLabel:    t('Hero.form.optinLabel'),
    optinLinkText: t('Hero.form.optinLinkText'),
    optinLinkHref: t('Hero.form.optinLinkHref'),
  };

  /* Rich title — ReactNode, passed from server to client component */
  const heroTitle = t.rich('Hero.title', {
    br:   () => <br />,
    grad: (chunks) => <GradientText>{chunks}</GradientText>,
  });

  const BASE = 'https://vacaredigitalsolutions.com';
  const auditUrl = `${BASE}/${locale}/free-web-audit`;

  return (
    <>
      <ServiceJsonLd
        url={auditUrl}
        name="Free Web Audit"
        description="Complete web analysis: speed, technical SEO, conversion and usability. Free, no commitment."
        price="0"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: `${BASE}/${locale}` },
        { name: 'Free Web Audit', item: auditUrl },
      ]} />
      <FaqJsonLd items={faqItems} />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="auditGi" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8417A"/>
            <stop offset="100%" stopColor="#F5A623"/>
          </linearGradient>
        </defs>
      </svg>

      <HomeClient>
        {/* Minimal nav — zero exit points */}
        <Nav
          transparent={false}
          brandName={tLayout('Nav.brand')}
          langToggleText={tLayout('Nav.lang')}
          ctaText={locale === 'es' ? 'Activar mi análisis →' : 'Activate my analysis →'}
          ctaHref="#form"
          ctaScrollOnly={true}
          links={[]}
        />

        <main>

          {/* ═══ HERO ═══ */}
          <section
            id="form"
            className="bg-[var(--dark)] min-h-screen flex items-center pt-[64px] relative overflow-hidden"
          >
            {/* Dot grid background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(247,246,242,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />
            {/* Gradient blobs */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.07) 0%, transparent 65%)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
            {/* Watermark */}
            <div className="absolute bottom-[-20px] left-[-10px] text-[clamp(90px,15vw,220px)] font-extrabold text-[rgba(247,246,242,0.018)] tracking-[-6px] leading-none pointer-events-none select-none">AUDIT</div>

            <PageWrapper className="relative z-10 py-[28px] lg:py-[36px] w-full">
              <AuditoriaHeroMotion
                eyebrow={t('Hero.eyebrow')}
                title={heroTitle}
                subtitle={t('Hero.subtitle')}
                proofStat={t('Hero.proofStat')}
                proofStatLabel={t('Hero.proofStatLabel')}
                proofStatSub={t('Hero.proofStatSub')}
                proofCount={t('Hero.proofCount')}
                proofCountLabel={t('Hero.proofCountLabel')}
                proofCountSub={t('Hero.proofCountSub')}
                proofQuote={t('Hero.proofQuote')}
                proofAuthor={t('Hero.proofAuthor')}
                formTranslations={formTranslations}
                activateCta={locale === 'es' ? '37 empresas analizadas este mes' : '37 companies analyzed this month'}
              />
            </PageWrapper>
          </section>

          {/* ═══ VIDEO TESTIMONIAL — Supertramp ═══ */}
          <VideoTestimonial
            eyebrow={t('VideoSection.eyebrow')}
            quote={t('VideoSection.quote')}
            author={t('VideoSection.author')}
            role={t('VideoSection.role')}
            videoSrc="https://pub-cde5ab30151d4376815d88eb38481483.r2.dev/Supertramp%20Hostel%20-%20Theo.mp4"
            posterSrc="/images/home_01_supertramp.png"
          />

          {/* ═══ LO QUE INCLUYE — BENTO ═══ */}
          <section id="get" className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark text={t('Get.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Get.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[14px]">
                  {t.rich('Get.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[52px]">
                  {t('Get.intro')}
                </p>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.15}>
                <BentoGrid items={bentoCards} />
              </MotionWrapper>
            </PageWrapper>
          </section>

          {/* ═══ CÓMO FUNCIONA ═══ */}
          <section id="how" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark text={t('How.watermark')} direction="left" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-[1]">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--am)] block" />
                  {t('How.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                  {t.rich('How.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
                  {t('How.intro')}
                </p>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.15}>
                <ProcessSteps steps={processSteps} variant="horizontal" background="dark" />
              </MotionWrapper>
            </PageWrapper>
          </section>

          {/* ═══ QUÉ ANALIZAMOS ═══ */}
          <section id="analyze" className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Analyze.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[14px]">
                  {t.rich('Analyze.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[560px] mb-[52px]">
                  {t('Analyze.intro')}
                </p>
              </MotionWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">
                <StaggerContainer className="flex flex-col gap-[20px]" staggerDelay={0.08}>
                  {analyzeList.map((item, idx) => (
                    <StaggerItem key={idx} className="flex gap-[16px] items-start group">
                      <div className="w-[36px] h-[36px] rounded-[9px] grad-bg flex items-center justify-center text-[13px] font-extrabold text-white shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)] transition-transform group-hover:scale-110">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[5px] tracking-[-0.2px]">{item.title}</h3>
                        <p className="text-[13px] leading-[1.65] text-[var(--muted)]">{item.p}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <MockReportAnimated />
              </div>
            </PageWrapper>
          </section>

          {/* ═══ ¿PARA QUIÉN? ═══ */}
          <section id="who" className="bg-[var(--cream)] border-t-[0.5px] border-[rgba(28,24,40,0.07)] py-[80px] lg:py-[110px]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Who.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[48px]">
                  {t('Who.title')}
                </h2>
              </MotionWrapper>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[14px]" staggerDelay={0.1}>
                {whoCards.map((card, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[20px] p-[28px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(28,24,40,0.06)] hover:border-[var(--mg)] relative overflow-hidden group h-full flex flex-col">
                      <div className="absolute top-0 left-0 right-0 h-[3px] gb opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[16px] tracking-[-0.3px] leading-[1.3]">{card.title}</h3>
                      <div className="flex flex-col gap-[10px] flex-1">
                        {card.checks.map((check, j) => (
                          <div key={j} className="text-[13px] text-[var(--dark)] flex items-start gap-[10px] leading-[1.5]">
                            <div className="w-[16px] h-[16px] rounded-full grad-bg shrink-0 mt-[1px]" />
                            {check}
                          </div>
                        ))}
                      </div>
                      <a
                        href="#form"
                        className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[var(--mg)] mt-[18px] transition-opacity hover:opacity-70 no-underline"
                      >
                        {locale === 'es' ? 'Activar mi análisis →' : 'Activate my analysis →'}
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageWrapper>
          </section>

          {/* ═══ FAQ ═══ */}
          <section id="faq" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark text={t('Faq.watermark')} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--am)] block" />
                  {t('Faq.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[48px]">
                  {t.rich('Faq.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
              </MotionWrapper>
              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]" staggerDelay={0.06}>
                {faqItems.map((faq, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(247,246,242,0.15)] hover:-translate-y-[2px]">
                      <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.question}</h3>
                      <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageWrapper>
          </section>

          {/* ═══ CTA BOTTOM — La ventaja real ═══ */}
          <section id="cta-b" className="bg-[var(--dark)] border-t-[0.5px] border-[rgba(247,246,242,0.06)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(232,65,122,0.07) 0%, transparent 65%)' }} />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="max-w-[620px] mx-auto">
                  <div className="text-center mb-[40px]">
                    <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--mg)] mb-[20px]">
                      <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                      {t('CtaBottom.eyebrow')}
                      <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                    </div>
                    <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[16px]">
                      {t.rich('CtaBottom.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                    </h2>
                    <p className="text-[15px] text-[rgba(247,246,242,0.45)] leading-[1.75] max-w-[480px] mx-auto">
                      {t('CtaBottom.p')}
                    </p>
                  </div>

                  {/* Reuse the same form — bottom CTA gets an AuditForm directly */}
                  <div className="relative">
                    <div className="absolute inset-[-60px] rounded-[60px] pointer-events-none blur-[80px] opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(232,65,122,0.6) 0%, transparent 65%)' }} />
                    <AuditForm translations={formTranslations} />
                  </div>

                  <div className="flex justify-center flex-wrap gap-[20px] mt-[28px]">
                    {trustItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-[6px] text-[12px] text-[rgba(247,246,242,0.28)]">
                        <div className="w-[5px] h-[5px] rounded-full grad-bg shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            </PageWrapper>
          </section>

        </main>

        <Footer
          variant="minimal"
          brandName="Vacare Digital Solutions"
          copyrightText={tLayout('Footer.copyright')}
          langText={tLayout('Footer.lang')}
        />
      </HomeClient>
    </>
  );
}

