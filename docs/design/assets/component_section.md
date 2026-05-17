src/components/sections/
│
├── SplitHero.tsx          ← el más importante
│   Props:
│     eyebrow: string
│     headline: ReactNode  (para poder pasar el GradientText adentro)
│     subheadline: string
│     leftContent: ReactNode   (form, anchors, badges+metrics)
│     rightContent: ReactNode  (flow, email cards, stats, report)
│     watermarkText: string
│     splitPosition?: '52/48' | '54/46' | '55/45'
│   Incluye: dot-grid, split line, geo decorations, vertical text
│
├── CtaFinal.tsx
│   Props:
│     headline: ReactNode
│     subheadline: string
│     cards: Array<{tag, title, desc, href}>
│     mainCta: {label, href}
│     disclaimer: string
│     watermarkText?: string
│   Variantes: sobre fondo dark con glow de gradiente
│
├── StatsStrip.tsx
│   Props:
│     variant: 'gradient' | 'dark' | 'light'
│     stats: Array<{num: string, label: string}>
│     headline?: string
│     subheadline?: string
│   Usado en: home (gradient), services (en hero right)
│
├── BentoGrid.tsx
│   Props:
│     items: Array<{
│       span: 4|5|7|8|12,  (columnas sobre grid de 12)
│       icon?: ReactNode,
│       tag?: string,
│       title: string,
│       body: string,
│       accent?: string,
│     }>
│     cols?: 12 | 6        (12 cols desktop, colapsa a 2 mobile)
│   Usado en: why (pain cards), what-you-get (audit), tech (sobremi)
│
├── ProcessSteps.tsx
│   Props:
│     steps: Array<{num, title, body, time?: string}>
│     variant: 'horizontal' | 'timeline'
│   Horizontal: con línea conectora en gradiente (services, how-it-works)
│   Timeline: con línea vertical + dot lateral (email-course days)
│
├── PainCards.tsx
│   Props:
│     items: Array<{num: string, text: string}>
│     background: 'dark' | 'light'
│   Grid bento asimétrico (7+5 / 4+4+4)
│   Usado en: home why section, free-audit who-needs
│
├── CaseStudyBlock.tsx
│   Props:
│     tag: string
│     headline: ReactNode
│     body: string
│     metrics: Array<{num, label}>
│     imageSlot: ReactNode   (placeholder o imagen real)
│     ctaLabel: string, ctaHref: string
│     bigNumber?: string     (watermark decorativo)
│     reversed?: boolean
│   Usado en: home, supertramp case
│
├── PackBlock.tsx            ← el más complejo
│   Props:
│     id: string
│     tier: string
│     badge: {label, variant: 'default'|'hot'|'monthly'|'dark'}
│     name: string
│     price: {from: number, currency: string, period?: string}
│     description: string
│     forWhom: string
│     includes: Array<{text: string, sub?: boolean}>
│     ctaLabel: string, ctaHref: string
│     variant: 'light' | 'dark' | 'featured'
│     reversed?: boolean
│     footerTag?: string    (el recuadro con → al final)
│   Usado en: /services (5 veces)
│
├── WhoCards.tsx
│   Props:
│     items: Array<{
│       icon: ReactNode,
│       title: string,
│       pain: string,
│       solution: string
│     }>
│     cols?: 4 | 3    (4 cols en home, 3 en cases)
│   Usado en: home, email-course, services
│
├── PortfolioGrid.tsx
│   Props:
│     items: Array<{
│       slug: string,
│       thumbColor: 'purple'|'blue'|'green',
│       tag: string,
│       title: string,
│       result: string,
│       href: string
│     }>
│     cols?: 3 | 2
│   Usado en: home, sobremi (next cases)
│
├── FlowDiagram.tsx
│   Props:
│     trigger: {title, sub}
│     engine: {title, sub}
│     outputs: Array<{color, text}>
│     variant: 'dark' | 'light'
│   Usado en: home (automation), sobremi hero right, free-audit
│
├── TeamSection.tsx
│   Props:
│     headline: ReactNode
│     body: string
│     members: Array<{name, role, skills: string[]}>
│     creds: string[]
│   Usado en: home
│
└── ComparisonTable.tsx
    Props:
      headers: string[]
      featuredCol: number
      rows: Array<{
        label: string,
        values: Array<'check'|'cross'|'partial'|string>
      }>
      prices: string[]
    Usado en: /services