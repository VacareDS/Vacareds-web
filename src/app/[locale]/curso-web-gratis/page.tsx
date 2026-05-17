import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildPageMeta, pageUrl } from '@/lib/seo';

import CourseForm from '@/components/forms/CourseForm';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import HomeClient from '@/components/layout/HomeClient';
import StatsStrip from '@/components/sections/StatsStrip';
import GradientText from '@/components/ui/GradientText';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper, { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import CourseJsonLd from '@/components/seo/CourseJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'es') notFound();
  const loc = locale as 'es' | 'en';
  const t = await getTranslations({ locale, namespace: 'Metadata.EmailCourse' });
  return {
    title: t('title'),
    description: t('description'),
    ...buildPageMeta(loc, '/email-course'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl(loc, '/email-course'),
      type: 'website',
    },
  };
}

export default async function EmailCoursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'EmailCourse' });
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const emails        = t.raw('Hero.emails')   as Array<{ day: string; num: string; title: string }>;
  const results       = t.raw('Hero.results')  as Array<{ tag: string; text: string }>;
  const statsItems    = t.raw('Stats.items')   as Array<{ num: string; label: string }>;
  const daysItems     = t.raw('Days.items')    as Array<{ num: string; tag: string; title: string; p: string; takeaway: string }>;
  const whoCards      = t.raw('Who.cards')     as Array<{ title: string; checks: string[] }>;
  const diffBadItems  = t.raw('Diff.badItems') as string[];
  const diffGoodItems = t.raw('Diff.goodItems') as string[];
  const aboutCreds    = t.raw('About.creds')  as string[];
  const faqItems      = t.raw('Faq.items')     as Array<{ q: string; a: string }>;
  const trustItems    = t.raw('CtaBottom.trust') as string[];

  const formTranslations = {
    title:            t('Hero.form.title'),
    sub:              t('Hero.form.sub'),
    nameLabel:        t('Hero.form.nameLabel'),
    emailLabel:       t('Hero.form.emailLabel'),
    stageLabel:       t('Hero.form.stageLabel'),
    stagePlaceholder: t('Hero.form.stagePlaceholder'),
    stages:           t.raw('Hero.form.stages') as Array<{ value: string; label: string }>,
    nicheLabel:       t('Hero.form.nicheLabel'),
    nicheHint:        t('Hero.form.nicheHint'),
    submit:           t('Hero.form.submit'),
    trust:            t('Hero.form.trust'),
  };

  const heroTitle = t.rich('Hero.title', {
    br:   () => <br />,
    grad: (chunks) => <GradientText>{chunks}</GradientText>,
  });

  const ctaText = locale === 'es' ? 'Empezar el curso →' : 'Start the course →';

  const BASE = 'https://vacaredigitalsolutions.com';
  const courseUrl = `${BASE}/${locale}/curso-web-gratis`;

  return (
    <>
      <CourseJsonLd
        url={courseUrl}
        name="Mini-curso: Presencia Digital en 5 Días"
        description="5 emails en 5 días con lo que necesitás saber antes de invertir en tu presencia digital. Gratis, sin compromiso."
      />
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', item: `${BASE}/${locale}` },
        { name: 'Curso Web Gratis', item: courseUrl },
      ]} />
      <FaqJsonLd items={faqItems.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }))} />
      <HomeClient>
        <Nav
          transparent={false}
          brandName={tLayout('Nav.brand')}
          langToggleText={tLayout('Nav.lang')}
          ctaText={ctaText}
          ctaHref="#cta-b"
          ctaScrollOnly={true}
          links={[]}
        />

        <main>

          {/* ═══════════════════════════════════════════════════════════════
              HERO — dark, full-bleed, form as the absolute star
          ═══════════════════════════════════════════════════════════════ */}
          <section id="hero" className="bg-[var(--dark)] relative overflow-hidden pt-[64px]">

            {/* Background texture */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(247,246,242,0.028) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            {/* Gradient blobs */}
            <div className="absolute top-[-180px] right-[-120px] w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.11) 0%, transparent 62%)' }} />
            <div className="absolute bottom-[-80px] left-[-80px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.055) 0%, transparent 65%)' }} />

            {/* Watermark */}
            <AnimatedWatermark
              text={t('Hero.watermark')}
              direction="left"
              className="-bottom-[30px] -left-[10px] text-[clamp(70px,18vw,260px)] text-[rgba(247,246,242,0.018)] tracking-[-6px] italic"
            />

            <PageWrapper className="relative z-10 py-[60px] lg:py-[90px]">

              {/*
                Grid:
                  mobile  → single column, DOM order: headline → form → results
                  desktop → 2 cols: [left: rows 1+2] | [right: row-span-2 form]
              */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] lg:grid-rows-[auto_auto] gap-[36px] lg:gap-x-[72px] lg:gap-y-[28px]">

                {/* ── ROW 1 COL 1 — Counter + Headline + Subtitle ── */}
                <div className="lg:col-start-1 lg:row-start-1">

                  {/* Counter badge */}
                  <MotionWrapper type="fadeUp" delay={0} amount={0} duration={0.45}>
                    <div className="inline-flex items-center gap-[9px] bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.11)] rounded-full px-[14px] py-[7px] mb-[26px]">
                      <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
                      <span className="text-[12px] font-bold text-[rgba(247,246,242,0.65)] tracking-[0.02em]">{t('Hero.counter')}</span>
                    </div>
                  </MotionWrapper>

                  {/* Eyebrow */}
                  <MotionWrapper type="fadeUp" delay={0.05} amount={0} duration={0.45}>
                    <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[14px]">
                      <i className="w-[20px] h-[1.5px] bg-[var(--mg)] block" />
                      {t('Hero.eyebrow')}
                    </div>
                  </MotionWrapper>

                  {/* H1 */}
                  <MotionWrapper type="fadeUp" delay={0.12} amount={0} duration={0.6}>
                    <h1 className="text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.07] tracking-[-1.5px] md:tracking-[-2.5px] text-[var(--cream)] mb-[16px]">
                      {heroTitle}
                    </h1>
                  </MotionWrapper>

                  {/* Subtitle */}
                  <MotionWrapper type="fadeUp" delay={0.22} amount={0} duration={0.55}>
                    <p className="text-[15px] md:text-[16px] leading-[1.7] text-[rgba(247,246,242,0.55)] max-w-[500px]">
                      {t('Hero.subtitle')}
                    </p>
                  </MotionWrapper>
                </div>

                {/* ── COL 2 ROW 1+2 — FORM (the star) ── */}
                <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 self-start">

                  {/* Glow effect behind the form */}
                  <MotionWrapper type="scaleUp" delay={0.1} amount={0} duration={0.65}>
                    <div className="relative">
                      <div
                        className="absolute inset-[-36px] rounded-[56px] pointer-events-none blur-[56px] opacity-[0.22]"
                        style={{ background: 'linear-gradient(135deg, #E8417A 0%, #F07030 55%, #F5A623 100%)' }}
                      />
                      <CourseForm translations={formTranslations} />
                    </div>
                  </MotionWrapper>

                  {/* Email preview — below the form card */}
                  <div className="mt-[14px] bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[16px_20px]">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.3)] mb-[12px]">
                      {t('Hero.emailsLabel')}
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      {emails.map((email, idx) => (
                        <div key={idx} className="flex items-center gap-[10px]">
                          <div className="w-[26px] h-[26px] rounded-[7px] grad-bg flex items-center justify-center text-[9px] font-extrabold text-white shrink-0 shadow-[0_3px_8px_rgba(232,65,122,0.25)]">
                            {email.day}
                          </div>
                          <span className="text-[12px] text-[rgba(247,246,242,0.5)] leading-[1.35] font-medium">
                            {email.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── ROW 2 COL 1 — Results + Supertramp proof ── */}
                <div className="lg:col-start-1 lg:row-start-2">
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] mb-[24px]" staggerDelay={0.1}>
                    {results.map((r, idx) => (
                      <StaggerItem key={idx} type="fadeUp">
                        <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[14px] p-[16px_18px]">
                          <div className="text-[10px] font-bold tracking-[0.06em] uppercase text-[var(--mg)] mb-[7px]">{r.tag}</div>
                          <p className="text-[13px] leading-[1.5] text-[rgba(247,246,242,0.55)]">{r.text}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {/* Supertramp social proof strip */}
                  <MotionWrapper type="fadeUp" delay={0.35} amount={0} duration={0.5}>
                    <div className="flex items-center gap-[16px] pt-[20px] border-t-[0.5px] border-[rgba(247,246,242,0.07)]">
                      <div className="text-[32px] font-extrabold grad-text tracking-[-1.5px] leading-none shrink-0">
                        {t('Hero.proofNum')}
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-[var(--cream)] leading-[1.2] mb-[2px]">{t('Hero.proofTitle')}</div>
                        <div className="text-[11px] text-[rgba(247,246,242,0.38)]">{t('Hero.proofSub')}</div>
                      </div>
                    </div>
                  </MotionWrapper>
                </div>

              </div>
            </PageWrapper>
          </section>

          {/* ═══ STATS STRIP ═══ */}
          <StatsStrip variant="gradient" stats={statsItems} watermarkText="GRATIS" />

          {/* ═══ DAYS TIMELINE ═══ */}
          <section id="days" className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Days.watermark')}
              direction="right"
              className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic"
            />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Days.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[14px]">
                  {t.rich('Days.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[56px]">
                  {t('Days.intro')}
                </p>
              </MotionWrapper>

              <div className="relative">
                <div className="hidden md:block absolute left-[28px] top-[40px] bottom-[40px] w-[2px] bg-gradient-to-b from-[var(--mg)] via-[var(--or)] to-[var(--am)] opacity-25 z-0" />
                <StaggerContainer className="flex flex-col" staggerDelay={0.12}>
                  {daysItems.map((item, idx) => (
                    <StaggerItem key={idx} className="grid grid-cols-[48px_1fr] md:grid-cols-[60px_1fr] relative z-10">
                      <div className="flex flex-col items-center pt-[4px]">
                        <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-[14px] grad-bg flex items-center justify-center text-[13px] font-extrabold text-white shrink-0 z-10 shadow-[0_8px_24px_rgba(232,65,122,0.2)]">
                          D{idx + 1}
                        </div>
                        {idx < daysItems.length - 1 && (
                          <div className="flex-1 w-[2px] bg-gradient-to-b from-[rgba(232,65,122,0.15)] to-[rgba(245,166,35,0.05)] mt-[8px] md:hidden" />
                        )}
                      </div>
                      <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] p-[28px_32px] ml-[14px] md:ml-[20px] mb-[14px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(28,24,40,0.07)] relative overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] grad-bg" />
                        <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[80px] font-extrabold italic text-[rgba(28,24,40,0.03)] pointer-events-none tracking-[-4px] select-none">
                          {item.num}
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[10px]">{item.tag}</div>
                        <h3 className="text-[18px] font-extrabold text-[var(--dark)] mb-[10px] tracking-[-0.4px]">{item.title}</h3>
                        <p className="text-[14px] leading-[1.7] text-[var(--muted)] mb-[16px] relative z-[1]">{item.p}</p>
                        <div className="bg-gradient-to-br from-[rgba(232,65,122,0.06)] to-[rgba(245,166,35,0.04)] rounded-[10px] p-[12px_16px] text-[13px] font-semibold text-[var(--dark)] flex items-start gap-[8px] relative z-[1]">
                          <span className="text-[var(--mg)] font-extrabold shrink-0">→</span>
                          {item.takeaway}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </PageWrapper>
          </section>

          {/* ═══ FOR WHO ═══ */}
          <section id="who" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Who.watermark')}
              direction="left"
              className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic"
            />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--am)] block" />
                  {t('Who.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                  {t('Who.title')}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
                  {t('Who.intro')}
                </p>
              </MotionWrapper>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[14px]" staggerDelay={0.1}>
                {whoCards.map((card, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[20px] p-[28px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:border-[rgba(232,65,122,0.3)] relative overflow-hidden group h-full flex flex-col">
                      <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <h3 className="text-[16px] font-extrabold text-[var(--cream)] mb-[14px] tracking-[-0.3px]">{card.title}</h3>
                      <div className="flex flex-col gap-[10px] flex-1">
                        {card.checks.map((check, j) => (
                          <div key={j} className="text-[13px] text-[var(--muted-l)] flex items-start gap-[9px] leading-[1.55]">
                            <div className="w-[14px] h-[14px] rounded-full grad-bg shrink-0 mt-[2px]" />
                            {check}
                          </div>
                        ))}
                      </div>
                      <a
                        href="#cta-b"
                        className="inline-flex items-center gap-[6px] text-[12px] font-bold text-[var(--mg)] mt-[18px] transition-opacity hover:opacity-70 no-underline"
                      >
                        {ctaText}
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageWrapper>
          </section>

          {/* ═══ DIFERENCIAS ═══ */}
          <section id="diff" className="bg-[var(--cream)] py-[80px] lg:py-[110px]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Diff.eyebrow')}
                </div>
                <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[52px]">
                  {t.rich('Diff.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
              </MotionWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
                <MotionWrapper type="fadeLeft" delay={0.1}>
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] p-[28px] h-full">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase mb-[16px] flex items-center gap-[6px] text-[rgba(28,24,40,0.35)]">
                      <i className="w-[14px] h-[14px] rounded-full flex items-center justify-center text-[9px] not-italic bg-[rgba(232,65,122,0.15)] text-[var(--mg)]">×</i>
                      {t('Diff.badTitle')}
                    </div>
                    <ul className="flex flex-col gap-[10px]">
                      {diffBadItems.map((item, idx) => (
                        <li key={idx} className="text-[14px] leading-[1.6] flex items-start gap-[10px] text-[var(--muted)]">
                          <span className="text-[rgba(232,65,122,0.6)] font-extrabold text-[16px] leading-none shrink-0">×</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
                <MotionWrapper type="fadeRight" delay={0.2}>
                  <div className="bg-[var(--dark)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[18px] p-[28px] h-full">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase mb-[16px] flex items-center gap-[6px] text-[rgba(247,246,242,0.35)]">
                      <i className="w-[14px] h-[14px] rounded-full flex items-center justify-center text-[9px] not-italic bg-[rgba(29,158,117,0.2)] text-[#1D9E75]">✓</i>
                      {t('Diff.goodTitle')}
                    </div>
                    <ul className="flex flex-col gap-[10px]">
                      {diffGoodItems.map((item, idx) => (
                        <li key={idx} className="text-[14px] leading-[1.6] flex items-start gap-[10px] text-[var(--muted-l)]">
                          <span className="grad-text font-extrabold text-[15px] leading-[1.1] shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              </div>
            </PageWrapper>
          </section>

          {/* ═══ ABOUT ═══ */}
          <section id="about" className="bg-[var(--cream)] border-t-[0.5px] border-[rgba(28,24,40,0.07)] py-[80px] lg:py-[110px]">
            <PageWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
                <MotionWrapper type="fadeLeft">
                  <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                    <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                    {t('About.eyebrow')}
                  </div>
                  <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--dark)] mb-[14px]">
                    {t.rich('About.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                  </h2>
                  <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[18px]">{t('About.p1')}</p>
                  <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[18px]">{t('About.p2')}</p>
                  <div className="flex gap-[8px] flex-wrap mt-[24px]">
                    {aboutCreds.map((cred, idx) => (
                      <span key={idx} className="bg-[rgba(28,24,40,0.06)] rounded-[20px] px-[13px] py-[5px] text-[11px] font-semibold text-[var(--muted)]">
                        {cred}
                      </span>
                    ))}
                  </div>
                </MotionWrapper>
                <MotionWrapper type="fadeRight" delay={0.15}>
                  <div className="bg-[var(--dark)] rounded-[20px] p-[32px] relative overflow-hidden">
                    <div className="absolute inset-0 grad-bg opacity-5" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(232,65,122,0.14) 0%, transparent 60%)' }} />
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.35)] mb-[14px] relative z-[1]">
                      {t('About.case.tag')}
                    </div>
                    <div className="text-[clamp(48px,7vw,80px)] font-extrabold tracking-[-3px] leading-none grad-text mb-[8px] relative z-[1]">
                      {t('About.case.num')}
                    </div>
                    <div className="text-[15px] font-bold text-[var(--cream)] mb-[6px] relative z-[1]">
                      {t('About.case.label')}
                    </div>
                    <div className="text-[13px] text-[rgba(247,246,242,0.4)] leading-[1.6] relative z-[1]">
                      {t('About.case.sub')}
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </PageWrapper>
          </section>

          {/* ═══ FAQ ═══ */}
          <section id="faq" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Faq.watermark')}
              direction="right"
              className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic"
            />
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
              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[12px]" staggerDelay={0.06}>
                {faqItems.map((faq, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(247,246,242,0.15)] hover:-translate-y-[2px]">
                      <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.q}</h3>
                      <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageWrapper>
          </section>

          {/* ═══ CTA BOTTOM ═══ */}
          <section id="cta-b" className="bg-[var(--dark)] border-t-[0.5px] border-[rgba(247,246,242,0.06)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[120px] opacity-[0.18]"
              style={{ background: 'radial-gradient(ellipse, rgba(232,65,122,0.8) 0%, transparent 65%)' }}
            />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="max-w-[580px] mx-auto">
                  <div className="text-center mb-[40px]">
                    <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--mg)] mb-[20px]">
                      <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                      {t('CtaBottom.eyebrow')}
                      <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                    </div>
                    <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[16px]">
                      {t.rich('CtaBottom.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                    </h2>
                    <p className="text-[15px] text-[rgba(247,246,242,0.45)] leading-[1.75] max-w-[420px] mx-auto">
                      {t('CtaBottom.p')}
                    </p>
                  </div>
                  <div className="relative">
                    <div
                      className="absolute inset-[-40px] rounded-[56px] pointer-events-none blur-[50px] opacity-[0.18]"
                      style={{ background: 'linear-gradient(135deg, #E8417A 0%, #F07030 55%, #F5A623 100%)' }}
                    />
                    <CourseForm
                      compact
                      translations={{
                        ...formTranslations,
                        trust: trustItems.join(' · '),
                      }}
                    />
                  </div>
                </div>
              </MotionWrapper>
            </PageWrapper>
          </section>

        </main>

        <Footer
          variant="minimal"
          brandName="Vacaré Digital Solutions"
          copyrightText={tLayout('Footer.copyright')}
          langText={tLayout('Footer.lang')}
        />
      </HomeClient>
    </>
  );
}
