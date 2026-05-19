# Plan: Recursos en "Próximamente"

> Objetivo: mostrar una página de 1 VH (auditoría y curso) con texto a la izquierda
> y un formulario de lista de espera a la derecha. Los recursos reales no están disponibles
> aún — la página captura nombre + email y envía el JSON a n8n vía webhook.

---

## 1. Diagnóstico de rutas (estado actual)

### Aclaración de routing confirmada por el usuario

`/free-web-audit` ES la versión en inglés de `/auditoria-web-gratuita` — mismo recurso,
mismo registro, distinto idioma. No son dos recursos separados.

```
Recurso     ES                         EN (correcto)     EN (incorrecto actual)
Auditoría   /auditoria-web-gratuita    /free-audit       /free-web-audit  ← MAL
Curso       /curso-web-gratis          /email-course     /free-web-course ← MAL
```

### Archivos existentes en `src/app/[locale]/`

| Carpeta                    | Archivo          | Rol                                          |
|----------------------------|------------------|----------------------------------------------|
| `free-audit/`              | `page.tsx`       | Landing completa bilingüe (a preservar)      |
| `email-course/`            | `page.tsx`       | Landing completa bilingüe (a preservar)      |
| `auditoria-web-gratuita/`  | `_page.tsx`      | Original ES audit desactivada — NO TOCAR     |
| `auditoria-web-gratuita/`  | `page.tsx`       | Waitlist v1 mal ubicada — eliminar           |
| `curso-web-gratis/`        | `_page.tsx`      | Original ES curso desactivada — NO TOCAR     |
| `curso-web-gratis/`        | `page.tsx`       | Waitlist v1 mal ubicada — eliminar           |
| `free-web-audit/`          | `_page.tsx`      | Original EN audit desactivada — NO TOCAR     |
| `free-web-audit/`          | `page.tsx`       | Waitlist v1 mal ubicada — eliminar           |
| `free-web-course/`         | `_page.tsx`      | Original EN curso desactivada — NO TOCAR     |
| `free-web-course/`         | `page.tsx`       | Waitlist v1 mal ubicada — eliminar           |

**Problema de routing**: Si existe `[locale]/auditoria-web-gratuita/page.tsx`, Next.js
lo resuelve directamente y omite la reescritura del middleware de next-intl — lo que
rompe el toggle de idioma. Hay que eliminar esos `page.tsx` mal ubicados.

---

## 2. Corrección de routing en `navigation.ts`

```ts
// ANTES (incorrecto)
'/free-audit':   { en: '/free-web-audit',  es: '/auditoria-web-gratuita' },
'/email-course': { en: '/free-web-course', es: '/curso-web-gratis' },

// DESPUÉS (correcto)
'/free-audit':   { en: '/free-audit',   es: '/auditoria-web-gratuita' },
'/email-course': { en: '/email-course', es: '/curso-web-gratis' },
```

Con esto el toggle de idioma funciona correctamente:
- `/es/auditoria-web-gratuita` → EN → `/en/free-audit` ✓
- `/en/free-audit`             → ES → `/es/auditoria-web-gratuita` ✓
- `/es/curso-web-gratis`       → EN → `/en/email-course` ✓
- `/en/email-course`           → ES → `/es/curso-web-gratis` ✓

---

## 3. Operaciones sobre archivos

### Preservar (renombrar a `_page.tsx`)
| Archivo actual              | Se convierte en               |
|-----------------------------|-------------------------------|
| `free-audit/page.tsx`       | `free-audit/_page.tsx`        |
| `email-course/page.tsx`     | `email-course/_page.tsx`      |

### Eliminar (waitlists v1 mal ubicadas — ya hay `_page.tsx` en esas carpetas)
- `auditoria-web-gratuita/page.tsx`
- `curso-web-gratis/page.tsx`
- `free-web-audit/page.tsx`
- `free-web-course/page.tsx`

### Crear
- `free-audit/page.tsx`   — nueva página "Próximamente" (server wrapper, bilingüe)
- `email-course/page.tsx` — nueva página "Próximamente" (server wrapper, bilingüe)

---

## 4. Diseño de la página "Próximamente"

### Layout — 1 solo Viewport Height

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR  (siempre sólido: bg cream + blur, sin transparent)  │ 64px
├────────────────────────────┬────────────────────────────────┤
│                            │                                │
│   TEXTO  (izq. ~55%)       │   FORM CARD  (der. ~45%)       │
│                            │                                │
│   Badge "Próximamente"     │   Card blanca, sombra sutil    │
│   Título grande            │   ──────────────────────────   │
│   Descripción 2 líneas     │   "Dejanos tu email y te       │
│   ─────────────────────    │    avisamos cuando esté listo" │
│   ✓  Bullet 1              │                                │
│   ✓  Bullet 2              │   [Nombre              ]       │
│   ✓  Bullet 3              │   [Email               ]       │
│                            │   [  Avisame cuando... →]      │
│                            │                                │
│                            │   → Éxito inline (tick + msg)  │
│                            │                                │
└────────────────────────────┴────────────────────────────────┘
```

- **Fondo**: `--cream` (#F7F6F2)
- **Navbar**: sin prop `transparent` → siempre sólido
- **Mobile**: columna única, texto arriba, form abajo; `overflow-y-auto` si no entra en 1VH
- **Copywriting**: persuasivo, profesional, orientado a conversión

### Textos

**Auditoría — ES**
- Badge: `Próximamente`
- Título: `Auditoría Web Gratuita`
- Desc: `Analizamos tu sitio y te entregamos un reporte personalizado con las mejoras más importantes. Gratis, sin vueltas.`
- Bullets: `Análisis de velocidad y rendimiento` / `SEO técnico y on-page` / `Experiencia de usuario y conversión`
- Form title: `Avisame cuando esté lista`
- CTA: `Anotarme →`
- Éxito: `¡Te anotamos! Te escribimos en cuanto la auditoría esté disponible.`

**Auditoría — EN**
- Badge: `Coming Soon`
- Título: `Free Web Audit`
- Desc: `We analyze your site and deliver a personalized report with the most important improvements. Free, no strings attached.`
- Bullets: `Speed & performance analysis` / `Technical & on-page SEO` / `UX & conversion review`
- Form title: `Notify me when it's ready`
- CTA: `Sign me up →`
- Éxito: `You're in! We'll reach out as soon as the audit is available.`

**Curso — ES**
- Badge: `Próximamente`
- Título: `Curso Web Gratis`
- Desc: `Un curso por email para aprender a construir presencia digital que convierte — desde cero y sin tecnicismos.`
- Bullets: `7 días, 1 email por día` / `Casos reales de clientes` / `Sin teoría, solo lo que funciona`
- Form title: `Avisame cuando esté listo`
- CTA: `Anotarme →`
- Éxito: `¡Te anotamos! Te avisamos en cuanto el curso arranque.`

**Curso — EN**
- Badge: `Coming Soon`
- Título: `Free Web Course`
- Desc: `An email course to build a digital presence that converts — from scratch, no technical jargon.`
- Bullets: `7 days, 1 email per day` / `Real client case studies` / `No theory, only what works`
- Form title: `Notify me when it's ready`
- CTA: `Sign me up →`
- Éxito: `You're in! We'll let you know as soon as the course launches.`

---

## 5. Formulario y payload JSON

**Campos** (corto):
- `Nombre` / `Name` — text, requerido
- `Email` — email, requerido

**Payload al webhook** (una sola tabla/base de datos):
```json
{
  "name": "...",
  "email": "...",
  "source": "waitlist",
  "list": "auditoria",
  "locale": "es",
  "submitted_at": "2026-05-17T..."
}
```

- `list`: `"auditoria"` o `"curso"` — identifica el recurso
- `locale`: `"es"` o `"en"` — identifica el idioma del registro
- `source`: siempre `"waitlist"` — identifica el origen en n8n

**Flujo:**
1. Submit → POST a `/api/waitlist/free-audit` (o `/api/waitlist/email-course`)
2. API route: `console.log` del JSON completo + forward al webhook con el secret
3. Webhook 200 → éxito inline
4. Webhook fallo → error inline bajo el botón

---

## 6. Variables de entorno — simplificadas

Una base de datos unificada → **un webhook por recurso** (no por locale).
Las variables actuales en `.env` (4 pares) se reemplazan por **2 pares**:

```bash
# Auditoría (ES + EN van al mismo webhook)
WAITLIST_WEBHOOK_AUDIT_URL=https://example-n8n.com/webhook/waitlist-audit
WAITLIST_WEBHOOK_AUDIT_SECRET=change-me-audit

# Curso (ES + EN van al mismo webhook)
WAITLIST_WEBHOOK_COURSE_URL=https://example-n8n.com/webhook/waitlist-course
WAITLIST_WEBHOOK_COURSE_SECRET=change-me-course
```

Las 4 variables anteriores (`AUDITORIA_ES`, `FREE_AUDIT_EN`, `CURSO_ES`, `FREE_COURSE_EN`)
se eliminan del `.env`.

---

## 7. API Routes

Reemplazar las 4 routes actuales por 2:

**`/api/waitlist/free-audit/route.ts`**
- Lee `WAITLIST_WEBHOOK_AUDIT_URL` + `WAITLIST_WEBHOOK_AUDIT_SECRET`
- El `locale` y `list: "auditoria"` vienen en el body del form

**`/api/waitlist/email-course/route.ts`**
- Lee `WAITLIST_WEBHOOK_COURSE_URL` + `WAITLIST_WEBHOOK_COURSE_SECRET`
- El `locale` y `list: "curso"` vienen en el body del form

---

## 8. Tabla de archivos final

| Archivo                                           | Acción    |
|---------------------------------------------------|-----------|
| `src/navigation.ts`                               | Modificar |
| `src/components/waitlist/WaitlistClient.tsx`      | Reemplazar|
| `src/app/[locale]/free-audit/_page.tsx`           | Crear (renombrando el actual `page.tsx`) |
| `src/app/[locale]/free-audit/page.tsx`            | Crear nuevo (waitlist) |
| `src/app/[locale]/email-course/_page.tsx`         | Crear (renombrando el actual `page.tsx`) |
| `src/app/[locale]/email-course/page.tsx`          | Crear nuevo (waitlist) |
| `src/app/[locale]/auditoria-web-gratuita/page.tsx`| Eliminar  |
| `src/app/[locale]/curso-web-gratis/page.tsx`      | Eliminar  |
| `src/app/[locale]/free-web-audit/page.tsx`        | Eliminar  |
| `src/app/[locale]/free-web-course/page.tsx`       | Eliminar  |
| `src/app/api/waitlist/free-audit/route.ts`        | Crear     |
| `src/app/api/waitlist/email-course/route.ts`      | Crear     |
| `src/app/api/waitlist/auditoria-es/route.ts`      | Eliminar  |
| `src/app/api/waitlist/free-audit-en/route.ts`     | Eliminar  |
| `src/app/api/waitlist/curso-es/route.ts`          | Eliminar  |
| `src/app/api/waitlist/free-course-en/route.ts`    | Eliminar  |
| `.env`                                            | Simplificar a 2 pares |

---

## 9. Pendiente de confirmar

1. ¿Los textos de la sección 4 están bien o querés ajustar algo?
2. ¿Fondo `--cream` (claro) o `--dark` (oscuro) para la página?
3. ¿`list: "auditoria"` / `list: "curso"` o preferís otros valores para ese campo?
