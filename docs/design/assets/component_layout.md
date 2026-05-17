src/components/layout/
├── Nav.tsx
│   Props: transparent?: boolean, currentPath?: string
│   Variantes: transparente (hero) → con blur al scroll
│   Incluye: logo, links, lang toggle ES/EN, btn CTA
│
├── Footer.tsx
│   Props: variant?: 'full' | 'minimal'
│   Full: 4 columnas (brand, servicios, legal, CTA box)
│   Minimal: solo logo + copyright (para páginas legales)
│
└── PageWrapper.tsx
    Props: children, className?
    Aplica: max-width 1280px, padding lateral responsivo
    Usado en todas las páginas como contenedor base