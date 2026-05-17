src/components/ui/
│
├── GradientText.tsx
│   Props: children, as?: 'span'|'h1'|'h2'|'p'
│   Aplica: background-clip text con el gradiente de marca
│
├── Eyebrow.tsx
│   Props: text, color?: 'magenta'|'amber'|'muted'|'muted-light'
│   Incluye: línea decorativa izquierda + texto uppercase tracking
│
├── Watermark.tsx
│   Props: text, position?: 'bottom-left'|'bottom-right'|'center'
│          opacity?: number, italic?: boolean
│   Absolute posicionado, pointer-events none
│
├── Button.tsx
│   Props: variant: 'primary'|'outline'|'ghost'|'amber-link'
│          size?: 'sm'|'md'|'lg'
│          href?: string   (si tiene href renderiza como <a>)
│          onClick?: fn
│          children
│   primary: gradiente sólido, texto blanco
│   outline: borde 1.5px color dark, hover magenta
│   outline-light: borde blanco, para secciones dark
│   ghost: sin fondo ni borde, texto con gradiente + border-bottom
│   amber-link: texto ámbar + border-bottom (para secciones dark)
│
├── Badge.tsx
│   Props: variant: 'default'|'gradient'|'monthly'|'dark'|'light'
│          size?: 'sm'|'md'
│          children
│   default: fondo gris claro, texto muted
│   gradient: fondo gradiente, texto blanco (⭐ Recomendado)
│   monthly: fondo ámbar translúcido, texto dorado
│   dark: fondo blanco/8%, texto cream/50% (para pack dark)
│   light: fondo cream/6%, texto cream/50%
│
├── TechPill.tsx
│   Props: label: string, active?: boolean
│   active: fondo gradiente, texto blanco
│   inactive: fondo rgba dark, texto dark
│   Usado en: sobremi hero (Next.js, n8n, Postgres...)
│
├── MetricCard.tsx
│   Props: num: string, label: string
│          variant: 'light'|'dark'|'gradient-text'
│          size?: 'sm'|'md'|'lg'
│   Usado en: hero floating cards, stats strip, case studies
│
├── FormField.tsx
│   Props: label, id, type: 'text'|'email'|'url'|'select'
│          placeholder, hint?: string
│          options?: string[]  (para select)
│          register   (react-hook-form)
│          error?: string
│   Incluye: label, input/select con estilos del sistema, hint, error
│
├── FormCard.tsx
│   Props: title, subtitle, children (los FormFields), onSubmit
│          submitLabel: string
│          trustText?: string
│   Wrapper blanco con border gradiente al focus-within
│   Incluye: botón submit + trust text con dot
│
├── GeoDecorations.tsx
│   Props: count?: number, variant?: 'light'|'dark'
│   Genera los cubos geométricos sueltos tipo MS Build
│   Usado en el panel derecho de todos los SplitHero
│
├── SplitLine.tsx
│   Props: (ninguna — solo el estilo)
│   La línea vertical blanca semitransparente entre paneles
│
├── DotGrid.tsx
│   Props: opacity?: number
│   absolute inset, background radial-gradient dots
│   Solo en secciones con fondo claro
│
├── CodeBlock.tsx
│   Props: code: string, language?: string
│          lines: Array<{type: 'keyword'|'fn'|'str'|'comment'|'plain', text: string}>
│   Fondo dark, monospace, syntax highlighting con clases CSS
│   Usado en: sobremi tech section
│
├── ArchNode.tsx
│   Props: title, sub?, variant: 'active'|'accent'|'success'|'default'
│   active: fondo gradiente
│   accent: fondo magenta translúcido
│   success: fondo verde translúcido
│   default: fondo cream/6%
│   Usado en: sobremi architecture diagram
│
├── FlowNode.tsx
│   Props: title, sub?, variant: 'trigger'|'engine'|'output'|'default'
│   trigger: magenta translúcido
│   engine: gradiente sólido
│   default: cream/6%
│   Usado en: flow diagrams (home, sobremi, free-audit)
│
├── DayProgressBar.tsx
│   Props: totalDays: number, currentDay: number
│   Los 5 círculos D1-D5 con estado done/current/pending
│   Usado en: email-course hero floating card
│
├── MockReport.tsx
│   Props: rows: Array<{label, barWidth: number, value: string, status: 'good'|'ok'|'bad'}>
│          sections: Array<{title, startIndex}>
│   Simula el reporte de auditoría con barras y checkmarks
│   Usado en: free-audit analyze section
│
├── EmailPreviewCard.tsx
│   Props: day: number, num: string, title: string
│   Card glassmorphism sobre gradiente
│   Usado en: email-course hero right
│
├── ReportPreviewCard.tsx
│   Props: icon: ReactNode, title, sub, score: number|string
│          status: 'bad'|'ok'|'good'
│   Card glassmorphism con score colorizado
│   Usado en: free-audit hero right
│
└── StatusRow.tsx
    Props: label: string, status: 'live'|'ok'|'auto'
    Fila del panel de estado del sistema
    Usado en: sobremi result section