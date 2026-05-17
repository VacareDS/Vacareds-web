src/
├── app/
│   └── [locale]/          # next-intl maneja /es/ y /en/
│       ├── page.tsx       # home
│       ├── services/
│       ├── free-audit/
│       ├── email-course/
│       ├── case-studies/
│       │   ├── supertramp/
│       │   └── sobremi/
│       ├── contact/
│       ├── privacy/
│       └── terms/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SplitHero.tsx  # el componente más reutilizado
│   │   ├── EyeBrow.tsx
│   │   ├── GradientText.tsx
│   │   └── Watermark.tsx
│   └── sections/          # secciones reutilizables
│       ├── CtaFinal.tsx
│       ├── MetricCard.tsx
│       └── FlowDiagram.tsx
├── messages/
│   ├── es.json            # todo el copy en español
│   └── en.json            # todo el copy en inglés
└── styles/
    └── globals.css        # variables CSS del sistema de diseño