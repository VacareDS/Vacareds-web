# Manual de Diseño — Vacaré Digital Solutions
> Referencia canónica para todos los componentes, páginas y secciones del sitio.  
> El home (`/es` y `/en`) es la fuente de la verdad visual. Cualquier discrepancia entre este documento y el home debe resolverse a favor del home.

---

## 1. Identidad de marca

### 1.1 Logo / wordmark
- Nombre: **Vacaré**
- Tipografía: extrabold, tracking -0.5px
- En fondos claros: `var(--dark)` (`#1C1828`)
- En fondos oscuros o footer: clase `.gt` (gradient text, degradado horizontal)
- Nunca usar solo letras en minúscula ni modificar el kerning

### 1.2 Tagline
> "Sistemas digitales que generan ingresos"

Siempre presente en footer y meta descriptions. No inventar variaciones sin aprobación.

---

## 2. Paleta de colores

Todas las variables están en `src/app/globals.css`.

| Token | Valor | Uso |
|---|---|---|
| `--cream` | `#F7F6F2` | Fondo de secciones claras, bg base del sitio |
| `--dark` | `#1C1828` | Fondo de secciones oscuras, texto principal |
| `--darker` | `#0E0E12` | Footer únicamente |
| `--muted` | `rgba(28,24,40,0.5)` | Texto secundario sobre fondo claro |
| `--muted-l` | `rgba(247,246,242,0.5)` | Texto secundario sobre fondo oscuro |
| `--mg` | `#E8417A` | Rosa/magenta — color primario de acento |
| `--or` | `#F07030` | Naranja — acento secundario del degradado |
| `--am` | `#F5A623` | Ámbar — acento terciario, links sobre oscuro |
| `--grad` | `linear-gradient(135deg, #E8417A 0%, #F07030 55%, #F5A623 100%)` | Degradado signature de la marca |

### 2.1 Clases utilitarias de gradiente
```css
.gt / .grad-text  → aplica --grad como text gradient (clip)
.gb / .grad-bg    → aplica --grad como background
```

**Regla:** los botones CTA principales, badges activos, iconos check, bordes de énfasis y el logo en dark mode siempre usan `.gb` o `.gt`. Nunca usar un solo color de acento sin el degradado completo para elementos de CTA.

### 2.2 Opacidades funcionales
- Bordes sobre claro: `rgba(28,24,40,0.08–0.15)`
- Bordes sobre oscuro: `rgba(247,246,242,0.08–0.15)`
- Superposiciones de card oscura: `rgba(247,246,242,0.03–0.08)`
- Superposiciones de card clara: `rgba(28,24,40,0.04–0.08)`

---

## 3. Tipografía

**Fuente principal:** Plus Jakarta Sans (sans-serif), cargada en `layout.tsx`.  
**Fuente mono:** Geist Mono (solo para snippets de código si los hubiera).

### 3.1 Escala tipográfica

| Rol | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Display hero h1 | `clamp(28px, 4.8vw, 66px)` | 800 (extrabold) | `-2.5px` en lg | `1.06` |
| Section heading h2 | `clamp(36px, 4.5–5vw, 58–66px)` | 800 | `-2px` | `1.08` |
| Sub-heading h3 | `clamp(24px, 3vw, 40px)` | 800 | `-1.2px` | `1.14` |
| Card heading h4 | `15–20px` | 800 | `-0.3–0.5px` | `1.2` |
| Body largo | `16px` | 400 | normal | `1.7–1.75` |
| Body corto | `14–15px` | 400 | normal | `1.65` |
| Label/eyebrow | `11px` | 700 | `0.08–0.1em` uppercase | — |
| Caption / meta | `10–12px` | 400–600 | normal | — |
| Número grande (stats) | `clamp(28px,3vw,36px)` | 800 | `-2px` | 1 |
| Watermark decorativo | `clamp(60–80px, 16–17vw, 200px)` | 800 | `-4–8px` | 0.9–1 |

### 3.2 Uso de `<GradientText>`
El componente `src/components/ui/GradientText.tsx` aplica `.grad-text` a cualquier tag.  
Úsarlo para **1–3 palabras clave** en cada heading de sección. Nunca en un párrafo entero ni más de una vez por heading.

```tsx
// Correcto
<h2>Creá tu <GradientText>sistema digital</GradientText> hoy</h2>

// Incorrecto — demasiado
<h2><GradientText>Creá tu sistema digital y empezá a vender</GradientText></h2>
```

---

## 4. Sistema de espaciado

Todo el espaciado usa valores **múltiplos de 4** en Tailwind arbitrary values.  
Guía de referencia para gaps y margins más usados:

| Token | Valor | Contexto |
|---|---|---|
| Micro gap | `8–10px` | Entre elementos inline (iconos, chips) |
| Elemento gap | `12–16px` | Entre items de lista, cards |
| Contenido interno | `18–28px` | Padding interno de cards |
| Sección interna | `40–52px` | Entre sub-bloques dentro de una sección |
| Sección heading → body | `18–22px` | mb después de h2 |
| Body → CTA | `28–44px` | mb antes de botones |
| Sección full padding | `80–120px` | py de secciones (móvil 60–80px) |
| Página max-width | `1280px` (con `PageWrapper`) | — |
| Página padding horizontal | `20px / md:52px` | Siempre usar `PageWrapper` |

**Regla:** nunca usar `px-4` genérico de Tailwind para contenido de sección. Siempre usar `<PageWrapper>` o el patrón `px-5 md:px-[52px]`.

---

## 5. Sistema de Layout

### 5.1 PageWrapper
`src/components/layout/PageWrapper.tsx` — contenedor estándar de sección.
```tsx
<PageWrapper>          // max-w-[1280px] mx-auto px-5 md:px-[52px]
<PageWrapper className="relative z-10">  // con overrides
```
Usar en **todas las secciones de contenido**. No usar `max-w-*` ad-hoc.

### 5.2 Breakpoints usados
| Breakpoint | Valor Tailwind | Descripción |
|---|---|---|
| mobile | default | < 768px |
| tablet | `md:` | ≥ 768px |
| desktop | `lg:` | ≥ 1024px |

No se usan `sm:`, `xl:`, `2xl:` salvo excepciones justificadas.

### 5.3 Hero above-the-fold
El hero usa `lg:h-screen lg:max-h-[900px] overflow-hidden`.  
**Regla crítica:** cualquier contenido que vaya dentro del hero (right o left side) debe ser verificado a 768px de altura de viewport. El contenido centrado no debe superar `~550px` de altura total en el panel derecho y `~450px` en el izquierdo.

### 5.4 Grid de columnas
- Hero split: 52% / 48% (ajustable con prop `splitPosition`)
- Team section: 2 cols iguales
- Packs: 4 cols en lg, 2 en md, 1 en mobile
- Portfolio / Blog: 3 cols en lg, 2 en md, 1 en mobile
- Why bento: 12 col grid con col-span variables (7/5 para primeras 2, 4/4/4 para las siguientes)

---

## 6. Secciones — Patrones

El home alterna entre dos paletas de fondo. Esta alternancia es intencional y debe mantenerse.

### 6.1 Patrón de alternancia de fondos
```
Hero        → cream (izq) + degradado (der)
Why         → dark
Case Study  → cream
Video       → darker
Stats       → degradado (grad-bg)
Packs       → cream
Auto        → dark
Whom        → cream
Portfolio   → cream
Blog        → cream
FAQ         → cream
Team        → dark
CTA Final   → dark
Footer      → darker
```

**Regla:** nunca dos secciones oscuras seguidas ni dos claras seguidas (con la excepción de secciones cream que pertenecen al mismo bloque temático, como Portfolio y Blog).

### 6.2 Eyebrow de sección
Patrón estándar para el encabezado de cada sección:
```tsx
<div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[18px]">
  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
  {eyebrow}
</div>
```
En secciones claras: `text-[var(--muted)]` y `bg-[var(--muted)]` en la línea.  
En secciones oscuras: `text-[var(--mg)]` y `bg-[var(--mg)]` (o `text-[var(--muted-l)]`).  
En secciones centradas: agregar la línea a ambos lados con `justify-center`.

### 6.3 Marcas de agua decorativas
Usar `<AnimatedWatermark>` de `src/components/ui/AnimatedWatermark.tsx` para el texto decorativo de fondo en cada sección.
- Dirección `"right"` → aparece desde la derecha → posición típica: `-bottom / -right`
- Dirección `"left"` → aparece desde la izquierda → posición típica: `-top / -left`
- Dirección `"bottom"` → sube desde abajo → posición típica: `bottom centrado`
- Opacidad en oscuro: `text-[rgba(247,246,242,0.04–0.06)]`
- Opacidad en claro: `text-[rgba(28,24,40,0.04–0.06)]`
- Font size: `text-[clamp(80px,16vw,200px)]`
- Letter spacing: `tracking-[-4px]` (más apretado = más impacto visual)

---

## 7. Componentes UI reutilizables

### 7.1 Button
`src/components/ui/Button.tsx`

| Variante | Uso |
|---|---|
| `primary` | CTA principal — grad-bg, texto blanco, hover con sombra magenta |
| `secondary` | Acción secundaria sobre fondo claro — dark bg |
| `outline` | Acción alternativa — borde sutil, texto dark |
| `ghost` | Acción terciaria — sin fondo ni borde |

```tsx
<Button href="#ctaf" variant="primary">Agendar llamada</Button>
<Button href="#case" variant="outline">Ver casos</Button>
```

Base: `py-[14px] px-[28px] rounded-[10px] font-extrabold text-[15px]`.

### 7.2 GradientText
`src/components/ui/GradientText.tsx`
```tsx
<GradientText>palabra clave</GradientText>  // → <span class="grad-text">
<GradientText as="h2">Heading</GradientText>  // → <h2 class="grad-text">
```

### 7.3 AnimatedWatermark
`src/components/ui/AnimatedWatermark.tsx`  
Framer-motion whileInView. Props: `text`, `direction`, `className`.  
Siempre `absolute` posicionado, `pointer-events-none`, `select-none`, `z-0`.

### 7.4 MotionWrapper
`src/components/ui/MotionWrapper.tsx`  
Wrapper reutilizable para animar bloques de contenido en server components.

```tsx
<MotionWrapper type="fadeUp" delay={0.1}>
  <h2>...</h2>
  <p>...</p>
</MotionWrapper>
```

Variantes disponibles: `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleUp`, `none`.  
También exporta `<StaggerContainer>` + `<StaggerItem>` para listas con stagger.

### 7.5 PageWrapper
`src/components/layout/PageWrapper.tsx`  
Contenedor estándar. Siempre usarlo en vez de crear `max-w-*` custom.

### 7.6 MeetingPopup
`src/components/ui/MeetingPopup.tsx`  
Modal de 3 pasos: calendario → formulario → confirmación.  
Se instancia desde:
- `CtaFinal` (CTA principal del home)
- `Footer` (botón "Agendar →" en la columna CTA)  

El webhook de n8n va en `handleSubmit` dentro del componente. Datos enviados: `name`, `email`, `whatsapp`, `message`, `selectedDay`, `selectedTime`.

---

## 8. Secciones — Componentes de sección

Todos en `src/components/sections/`. Todos son `'use client'` con framer-motion.

| Componente | Descripción | Props clave |
|---|---|---|
| `SplitHero` | Hero split 52/48. Above-the-fold forzado con `h-screen` | `eyebrow`, `headline`, `subheadline`, `leftContent`, `rightContent`, `leftFloats`, `rightFloats`, `watermarkText`, `rightWatermarkText`, `rightVerticalText` |
| `WhyBento` | Grid bento 12 cols de ventajas | `cards: [{num, p}]` |
| `CaseStudyBlock` | Case study con imagen + métricas + AnimatedCounter | `tag`, `title`, `description`, `metrics`, `linkHref`, `imgSrc`, `imgNum` |
| `StatsStrip` | Banda de estadísticas con watermark animado | `variant` (gradient/dark/light), `stats`, `watermarkText` |
| `PackBlock` | Grid de 4 pricing cards con stagger | `items: PackItem[]` |
| `AutoFlow` | Diagrama de nodos n8n con float animation | `trigger`, `engine`, `outputs` |
| `WhoCards` | 4 cards de personas con icon + pain/sol | `cards`, `background` |
| `PortfolioGrid` | 3 cards de proyectos con imagen | `projects` |
| `VideoTestimonial` | Video + quote testimonial lado a lado | `eyebrow`, `quote`, `author`, `role`, `videoSrc`, `posterSrc` |
| `TeamSection` | Fotos de equipo + contenido | `members`, `labels`, `content` |
| `BlogPreview` | 3 posts con stagger reveal | `eyebrow`, `title`, `subtitle`, `posts`, `ctaText`, `ctaHref` |
| `FaqSection` | Accordion FAQ con AnimatePresence | `eyebrow`, `title`, `items` |
| `CtaFinal` | CTA oscura final con MeetingPopup integrado | `headline`, `subheadline`, `mainCta`, `disclaimer`, `watermarkText` |

---

## 9. Sistema de animaciones

### 9.1 Framer Motion — reglas generales
- **whileInView** + `viewport={{ once: true }}` para todas las secciones (no repiten al hacer scroll up)
- **Duración base:** 0.5–0.7s con easing `[0.25, 0.1, 0.25, 1]` (equivale a `ease-out` suavizado)
- **Stagger entre items:** 0.08–0.12s por item
- **Delay máximo en stagger:** no superar 0.5s total acumulado
- **`animate`** (no `whileInView`) solo en el hero — se anima al cargar la página

### 9.2 Patrones de animación por tipo de elemento

| Tipo | Pattern | Duración |
|---|---|---|
| Section heading / texto | `fadeUp` — `y: 20–30, opacity: 0 → 1` | 0.55s |
| Cards en grid | `fadeUp` con stagger 0.08–0.12s | 0.55s |
| Elementos lado izquierdo | `fadeLeft` — `x: -40` | 0.7s |
| Elementos lado derecho | `fadeRight` — `x: 40` | 0.7s |
| CTA / botón destacado | `scaleUp` — `scale: 0.9, opacity: 0` | 0.6s |
| Section entry completa | `fadeUp` — `y: 20` | 0.55s |

### 9.3 CSS Keyframes (globals.css)
Para elementos que flotan de forma continua:

| Keyframe | Uso |
|---|---|
| `floatCenter` | Nodo central de AutoFlow (N8N engine) |
| `floatA / B / C / D` | Nodos secundarios de AutoFlow (absolute positioned) |
| `shapeFloat1 / 2 / 3 / 4` | Shapes decorativas del hero (inline, no absolute) |
| `enginePulse` | Glow ring del nodo N8N |
| `shimmer` | Efecto de brillo en botón CTA Final |
| `pulse-glow` | Box-shadow pulsante en botón CTA Final |

**Nota:** `floatA–D` asumen `transform: translate(-50%, -50%)` como base (para elementos absolute).  
`shapeFloat1–4` son para elementos inline/static (no asumen base transform).

### 9.4 Respeto por preferencias del usuario
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```
Implementado en `globals.css`. No hay que hacer nada extra en los componentes.

---

## 10. Cards — Patrones de diseño

### 10.1 Card clara (sobre cream/white)
```
bg-white
border-[0.5px] border-[rgba(28,24,40,0.08)]
rounded-[16–20px]
p-[24–32px]
hover:shadow-[0_20px_50px_rgba(28,24,40,0.08)]
hover:-translate-y-[4px]
transition-all duration-300
```

### 10.2 Card oscura (sobre --dark)
```
bg-[rgba(247,246,242,0.03–0.05)]
border-[0.5px] border-[rgba(247,246,242,0.08)]
rounded-[16px]
hover:border-[rgba(232,65,122,0.4)]
hover:bg-[rgba(247,246,242,0.07)]
```

### 10.3 Card glassmorphism (sobre degradado o imagen)
```
bg-[rgba(255,255,255,0.12)]
backdrop-blur-[12px]
border-[0.5px] border-[rgba(255,255,255,0.2)]
rounded-[10–12px]
```

### 10.4 Card featured / pricing "hot"
```
rounded-[18px]
Gradient border: p-[2px] con div gb -z-10 y bg-white rounded-[16px] interno
-mt-[20px] -mb-[20px] para efecto de escala visual
```

### 10.5 Regla de border-radius
| Elemento | Radius |
|---|---|
| Cards principales | `20px` |
| Cards secundarias / metrics | `12–16px` |
| Inputs, chips, badges | `8–10px` |
| Botones | `10px` |
| Botones small | `7–9px` |
| Círculos / avatares | `9999px` (`rounded-full`) |
| Shapes decorativas | `4–12px` según tamaño |

---

## 11. Badges y etiquetas

### Eyebrow tag (sobre fondo claro)
```tsx
<div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[18px]">
  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
  Texto del eyebrow
</div>
```

### Badge de categoría
```tsx
// Variante por tipo (PackBlock)
def: bg-[rgba(28,24,40,0.06)] text-[var(--muted)]
hot: gb text-white                    // activo / popular
mo:  bg-[rgba(245,166,35,0.12)] text-[#7a5000]  // mensual / retainer
```

### Label flotante (sobre gradiente/imagen)
```
bg-[rgba(255,255,255,0.15)] backdrop-blur-[12px]
border-[0.5px] border-[rgba(255,255,255,0.2)]
rounded-[8px] px-[10px] py-[4px]
text-[10px] font-bold uppercase tracking-[0.1em] text-white
```

### Status dot + texto
```tsx
<div className="w-[8px] h-[8px] rounded-full bg-[#10b981]" />  // verde = activo
```

---

## 12. Navegación

### Nav (`src/components/layout/Nav.tsx`)
- Fixed, `z-[200]`, 64px de altura
- Transparente cuando `transparent=true` y no scrolled
- Fondo cream con blur al hacer scroll: `bg-[rgba(247,246,242,0.96)] backdrop-blur-[18px]`
- CTA: botón `.gb` con texto blanco
- Lang toggle: texto `11px bold uppercase`
- Mobile: hamburger → overlay full-screen

**Regla:** la sección hero debe tener `pt-[64px]` en mobile. En desktop (`lg:pt-0`) porque el hero es full-height y el nav flota sobre él.

---

## 13. Footer

`src/components/layout/Footer.tsx`
- `bg-[var(--darker)]`
- Gradient top border: horizontal, de transparente → mg → or → am → transparente
- Grid: brand (4 cols) + 3 columnas de links (2 cols c/u) + CTA card (2 cols) = 12 total
- Trust chips: LLC Delaware, LATAM·US·ES, n8n powered
- `MeetingPopup` integrado en el botón "Agendar →" del footer
- Bottom bar: copyright (izq) + links legales + lang toggle (der)

---

## 14. SEO / Schemas JSON-LD

`src/components/seo/JsonLd.tsx` — incluido en el `<head>` de todas las páginas.

Schemas implementados en el home:
- `Organization` — datos de la empresa, founders, redes
- `ProfessionalService` — catálogo de servicios con precios
- `WebSite` — con SearchAction
- `WebPage` — descripción de la página + BreadcrumbList
- `FAQPage` — las 6 preguntas frecuentes
- `VideoObject` — testimonial de Theo

**Para páginas internas** (blog, case studies) crear un `JsonLd` específico por página con:
- `Article` o `BlogPosting` para posts
- `BreadcrumbList` con la jerarquía correcta
- `Review` para páginas de caso de estudio

---

## 15. Internacionalización (i18n)

- Framework: `next-intl` v4
- Locales: `es` (default), `en`
- Estructura de rutas: `/[locale]/page.tsx`
- Archivos de traducción: `messages/es.json`, `messages/en.json`
- En server components: `getTranslations({ locale, namespace })`
- En client components: `useTranslations(namespace)`

**Regla:** nunca hardcodear strings visibles al usuario en componentes de sección. Pasar siempre como props desde `page.tsx`. Los componentes UI (`Button`, `GradientText`, etc.) reciben `children` y no tienen strings internos.

---

## 16. Video testimonial

`src/components/sections/VideoTestimonial.tsx`  
- Archivo de video: `public/videos/theo-supertramp.mp4`
- Poster: `public/images/home_01_supertramp.png`
- Si el video no existe: muestra placeholder con ícono play (automático)
- También soporta YouTube/Vimeo con `videoType="youtube"` y `videoSrc` de embed URL

---

## 17. Imágenes

### Naming convention
```
public/images/
  home_01_supertramp.png      ← [pagina]_[orden]_[descripcion]
  home_02_sobremi.png
  home_03_cocheras.png
  home_04_german.png
  home_05_noelia.png
  home_06_case_hostel.jpg
```

### Uso de `<img>` vs `<Image>`
El proyecto usa `output: 'export'` (static site). Usar `<img>` con `loading="lazy"` para imágenes below-the-fold. Para above-the-fold (logo, hero poster) usar sin lazy load.

**Nota:** si se configura `images: { unoptimized: true }` en `next.config.ts`, se puede usar `<Image>` de `next/image` para aprovechar el lazy loading nativo del componente.

---

## 18. Principios de diseño

### 18.1 Jerarquía visual
Cada sección tiene exactamente un elemento principal (h2 o h1). El eyebrow establece contexto, el heading comunica el valor, el body da el detalle, el CTA cierra la acción.

### 18.2 Consistencia sobre creatividad
Antes de crear un nuevo patrón, verificar si existe uno similar en este manual. Reutilizar siempre que sea posible. La consistencia genera confianza en el usuario.

### 18.3 Dark / light balance
El contraste entre secciones claras y oscuras es parte del ritmo de la página. Mantener la alternancia definida en la sección 6.1.

### 18.4 El degradado es la firma
El degradado `#E8417A → #F07030 → #F5A623` es el elemento diferenciador de la marca. Usarlo con disciplina: CTA principal, acentos de eyebrow, ícono check, líneas decorativas, top border del footer. No saturar la página con gradiente.

### 18.5 Tipografía extrabold como estructura
Los headings en weight 800 (extrabold) con tracking negativo (-2 a -2.5px) son la columna vertebral visual de la página. Mantener siempre ese peso para h1/h2. El cuerpo nunca supera weight 600.

### 18.6 Espaciado generoso = premium
Secciones con `py-[80–120px]`, cards con padding interno de 24–32px. El espacio en blanco no es desperdicio, es señal de calidad.

### 18.7 Micro-interacciones
Cards con `hover:-translate-y-[4–6px]`. Botones con `hover:-translate-y-[2–3px]`. Números con `group-hover:scale-105`. Estos detalles hacen la diferencia entre una web genérica y una web memorable. Siempre agregar `transition-all duration-200–300` en elementos interactivos.

---

## 19. Checklist para nuevas páginas

Antes de publicar cualquier página nueva, verificar:

- [ ] ¿Usa `PageWrapper` para el contenido?
- [ ] ¿La sección hero tiene `overflow-hidden` y respeta el above-the-fold?
- [ ] ¿Los headings usan la escala tipográfica correcta?
- [ ] ¿Los fondos alternan según el patrón dark/cream?
- [ ] ¿Los eyebrows siguen el patrón con línea decorativa?
- [ ] ¿Las marcas de agua usan `<AnimatedWatermark>`?
- [ ] ¿Los textos visibles vienen de `messages/` (i18n)?
- [ ] ¿Los CTAs y botones usan `<Button>` o el patrón correcto?
- [ ] ¿Las animaciones usan framer-motion con `once: true`?
- [ ] ¿El JSON-LD de la página está implementado?
- [ ] ¿Las imágenes siguen la naming convention?
- [ ] ¿El componente funciona en mobile (375px) y desktop (1440px)?

---

## 20. Componentes a reutilizar — mapa rápido

| Necesito... | Usar |
|---|---|
| Sección con título centrado + cards | `WhyBento`, `WhoCards`, `PackBlock` como referencia |
| Hero de página interna | `SplitHero` con `splitPosition="54/46"` o crear nuevo con el mismo patrón |
| Testimonial / quote | `VideoTestimonial` |
| Stats / números | `StatsStrip` |
| FAQ | `FaqSection` |
| Diagrama de proceso / flujo | `AutoFlow` como referencia |
| Card de proyecto | `PortfolioGrid` |
| Formulario de contacto / agendar | `MeetingPopup` (ya integrado en `CtaFinal` y `Footer`) |
| Animación de entrada de bloque | `MotionWrapper` |
| Animación stagger de lista | `StaggerContainer` + `StaggerItem` |
| Texto con degradado | `GradientText` |
| Marca de agua animada | `AnimatedWatermark` |
| CTA de cierre de página | `CtaFinal` |
