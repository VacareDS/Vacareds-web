# Plan de mejora — /free-audit

> Fecha: 2026-05-01  
> Objetivo: convertir la página en una máquina de captura de leads (email + URL de empresa) para auditorías gratuitas, usando el caso Supertramp como anchor de credibilidad.

---

## 1. Diagnóstico actual

### Lo que funciona
- Copy de hero directo y orientado al dolor ("Tu web tiene problemas. Ya sabemos cuáles.")
- Formulario visible above the fold en desktop
- Preview animada del reporte (mock cards con scores) — buen uso de la expectativa
- Proceso en 3 pasos claro y sin fricciones
- FAQ posiciona bien las objeciones más comunes
- Tono consistente con el home (rioplatense, concreto, sin jerga técnica)

### Lo que falta — brechas de conversión detectadas
1. **Cero prueba social propia** — el caso Supertramp existe en el home pero no aparece en ningún punto de esta página. Un visitante que llega directo a `/free-audit` (desde SEO o un ad) nunca ve evidencia de que esto funciona.
2. **El video testimonial está desaprovechado** — hay un componente `VideoTestimonial` en el codebase y mencionás que tienen el video de Supertramp. No está en esta página.
3. **El formulario no tiene ancla de credibilidad cerca** — aparece solo, sin un "X empresas ya recibieron su reporte esta semana" ni ningún elemento de prueba social inmediatamente visible.
4. **La sección de CTA inferior repite el formulario sin añadir capa persuasiva** — es una copia del hero. Un visitante que llegó al fondo y no convirtió arriba necesita un argumento nuevo, no el mismo.
5. **Sin micro-urgencia** — nada impide postergar el llenado. No hay slots limitados, ventana de tiempo, ni ninguna señal de que hay un equipo real detrás procesando en orden.
6. **La transformación no está narrada** — el copy describe QUÉ hace la auditoría, pero no muestra el ANTES/DESPUÉS. El home lo hace con Supertramp; aquí no hay equivalente.
7. **El FAQ está lejos del formulario** — las objeciones se resuelven al fondo, pero el formulario exige decisión en el hero. Las objeciones deberían estar más cerca del punto de decisión.

---

## 2. Estrategia de slug — Respuesta a tu pregunta

### Recomendación: slugs diferenciados por locale

```
/es/auditoria-gratuita    ← mercado hispano (keywords en español)
/en/free-audit            ← mercado anglohablante (o /free-website-audit)
```

**Por qué vale la pena:**
- "Auditoría web gratuita" tiene búsquedas reales en LATAM y España. El slug en inglés no rankea para esas búsquedas — Google prefiere que la URL refleje el idioma del contenido.
- "Free website audit" o "free SEO audit" tiene volumen propio en inglés que `/free-audit` solo captura parcialmente.
- Son dos mercados distintos con intención de búsqueda distinta. Slugs diferenciados permiten title tags, meta descriptions y contenido más ajustados a cada keyword.

**Cómo se implementa en next-intl:**
`next-intl` soporta `pathnames` localizados en su config. Se define el mapa de rutas en `i18n.ts` y se actualiza `next.config.ts`. El componente de la página no cambia — solo la URL pública cambia por locale. Esto requiere pasar de la configuración básica de `requestLocale` a usar el objeto `pathnames` de `next-intl`.

**Costo de implementación:** Bajo-medio. No es un cambio de código de la página, es configuración de routing. Sí requiere actualizar todos los `href="/free-audit"` internos por el helper `usePathname`/`Link` localizado, y corregir el canonical en el `generateMetadata`.

**Keyword sugerida para ES:** `/auditoria-gratuita` (más corto, más buscado) o `/auditoria-web-gratuita` (más específico, menos competencia).

---

## 3. Propuesta de estructura mejorada

La propuesta no requiere rediseño visual — aprovecha los componentes existentes en posiciones más efectivas.

### Orden propuesto de secciones

```
[HERO] — forma actual, con 2 adiciones (ver §4)
  └─ añadir: proof strip bajo el form (contador + logo Supertramp)
  └─ mantener: mock report cards

[TRANSFORMACIÓN — NUEVO] — caso Supertramp comprimido
  └─ componente: CaseStudyBlock ya existe en home, reutilizar aquí
  └─ métrica central: "30% de la facturación desde la web — en 6 meses"
  └─ video: VideoTestimonial (componente disponible, sin usar aquí)

[LO QUE INCLUYE] — sección actual "Get" / bento grid
  └─ mantener tal cual, está bien

[CÓMO FUNCIONA] — sección actual "How" / ProcessSteps
  └─ mantener, es clara

[FAQ ACORTADO — NUEVA POSICIÓN] — mover 3 objeciones clave cerca del form
  └─ "¿Realmente es gratuito?" / "¿Cuánto tarda?" / "¿Van a venderme algo?"
  └─ el FAQ completo se mantiene al fondo también

[QUÉ ANALIZAMOS] — sección actual, mantener

[¿PARA QUIÉN?] — sección actual, mantener

[FAQ COMPLETO] — mantener al fondo como está

[CTA INFERIOR — REFORMULADO] — mismo form, nuevo ángulo persuasivo (ver §5)
```

---

## 4. Cambios en el hero

### Adición A — Proof strip bajo el formulario

Añadir inmediatamente bajo el botón "Quiero mi análisis gratuito →", antes del texto de trust actual:

```
─────────────────────────────────────────────
  🏨 Supertramp Hostels · Buenos Aires
  "Pasamos de depender de OTAs a generar el 30% de
   nuestra facturación directa desde la web."
  — Theo, fundador
─────────────────────────────────────────────
  [avatar pequeño] + "47 auditorías enviadas este mes"
```

Esto resuelve la brecha #1 y #3 sin cambiar la estructura.

### Adición B — Micro-urgencia sutil

Cambiar el texto de trust actual:
> "Sin spam · Sin compromiso · Respuesta en menos de 2 horas"

Por:
> "Sin spam · Sin compromiso · Analizamos en orden de recepción · Respuesta en < 2hs"

Pequeño ajuste que implica cola de trabajo (equipo real, procesamiento en orden) sin ser falso ni agresivo.

---

## 5. Nueva sección — Bloque de transformación (post-hero)

Insertar después del hero, antes de "Lo que incluye". Usar el componente `CaseStudyBlock` existente (ya tiene la estructura perfecta).

### Copy propuesto

**Eyebrow:** El problema que más vemos
**Título:** Una web activa que no genera nada.
**Subtítulo:**
> Supertramp Hostels tenía presencia online. Tenía Instagram, tenía Google Maps, tenía página web.
> Pero el 100% de sus reservas venía de OTAs que se quedaban con el 15-20% de comisión.
>
> Después de la auditoría, identificamos 3 problemas que nadie le había señalado:
> velocidad crítica en mobile, sin CTAs claros para reserva directa, y cero posicionamiento en las keywords que sus huéspedes reales buscaban.
>
> Seis meses después, el 30% de su facturación total llega directo desde la web.

**Video:** Insertar `VideoTestimonial` aquí con la cita de Theo.

**Métrica strip:** 30% reservas directas · 6 meses · 2 propiedades · $0 comisión a OTAs

**CTA secundario:** "Descubrí si tu web tiene los mismos problemas →" (scroll al form o link al hero)

---

## 6. CTA inferior — Nuevo ángulo

El CTA inferior actual repite el hero literal. Propuesta: cambiarlo a un argumento diferente que cierre las objeciones restantes.

### Copy propuesto para CTA inferior

**Eyebrow:** Una última cosa antes de irte
**Título:** Ya sé lo que estás pensando.
**Cuerpo:**
> "Esto es gratuito, o sea que el reporte va a ser genérico."
>
> El análisis técnico es automático — igual al que usa Google para rankear tu sitio.
> Pero las 3 recomendaciones finales las revisa nuestro equipo en función de tu rubro específico.
> No es un PDF de 40 puntos que no vas a leer. Es lo que hay que hacer primero.
>
> Si después de leer el reporte querés hablar, hay un link. Si no, el reporte es tuyo. Sin más.

**Formulario compacto** (igual que ahora)

**Trust final:**
> Hasta ahora, 0 de nuestros clientes nos contactaron porque les mandamos spam. Todos leyeron el reporte primero.

---

## 7. Copy refinements en secciones existentes

### Hero — subtitle actual
> "Ingresá la URL de tu sitio y en menos de 2 horas recibís un reporte con los errores reales que te están costando clientes — velocidad, SEO técnico y puntos de conversión."

**Sugerencia de mejora:**
> "Ingresá la URL de tu sitio. En menos de 2 horas recibís un diagnóstico real — no un puntaje, una lista de lo que está bloqueando tus conversiones y cómo resolverlo."

El cambio introduce "diagnóstico real" y "bloqueando tus conversiones" que tienen más tensión emocional.

### Sección "¿Para quién?" — cards
Las 3 cards actuales son correctas pero neutrales. Hacerlas más concretas:

| Actual | Propuesta |
|---|---|
| "Tenés web pero no genera clientes" | "Tu web existe. Tus competidores te están ganando." |
| "Estás por lanzar o rediseñar" | "Estás por invertir en una web nueva. No repitas los mismos errores." |
| "Querés mejorar tu posición en Google" | "Escribís, publicás, esperás. Google te ignora igual." |

---

## 8. Priorización de implementación

### Impacto alto / Esfuerzo bajo — Hacer primero
1. Añadir proof strip con cita Supertramp bajo el form del hero (HTML + JSON)
2. Insertar el video testimonial en el bloque de transformación
3. Reformular el copy del CTA inferior (solo JSON)
4. Micro-urgencia en texto de trust (solo JSON)

### Impacto alto / Esfuerzo medio — Segunda ronda
5. Crear sección de transformación (nuevo bloque, reutiliza `CaseStudyBlock`)
6. Mover 3 FAQs clave cerca del formulario
7. Refinar copy de las 3 cards "¿Para quién?"

### Impacto medio / Esfuerzo medio — Tercera ronda
8. Implementar slugs localizados (`/auditoria-gratuita` para ES)
9. Actualizar canonical tags y `href` internos

---

## 9. Métricas para validar las mejoras

- **Tasa de conversión del form** (envíos / visitas únicas) — baseline actual desconocido, fijar antes de cambiar
- **Scroll depth** — ¿qué % llega al CTA inferior?
- **Tiempo en página** — el bloque de transformación debería aumentarlo
- **Fuente del lead** (campo oculto UTM) — para saber si el tráfico orgánico mejora con el slug español

---

## Notas de diseño

- Todos los cambios son coherentes con el sistema de diseño existente (componentes disponibles, variables CSS ya definidas)
- No se propone cambiar colores ni tipografía
- El video puede ir embebido (iframe Vimeo/YouTube) o como elemento `<video>` si está en `public/videos/`
- La proof strip del hero puede implementarse como un componente `<div>` inline simple dentro del `leftContent` del `SplitHero`, bajo el `AuditForm`
