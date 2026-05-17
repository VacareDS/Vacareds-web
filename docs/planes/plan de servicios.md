# Plan de Acción: Adaptación SEO de Slugs (i18n) y Erradicación de Texto Hardcodeado

> Fecha: 2026-05-04  
> Objetivo: Revisar y adaptar cada URL del proyecto para que los slugs correspondan a su idioma por motivos de SEO (ej. `/es/servicios` vs `/en/services`), y asegurar que no haya ningún texto hardcodeado en los archivos `page.tsx`, moviendo todo a `es.json` y `en.json` con copywriting profesional. **No se modificará el diseño ni el contenido de los embudos existentes.**

## User Review Required

> [!IMPORTANT]  
> Como el proyecto utiliza `output: 'export'`, no podemos usar el Middleware de Next.js para reescribir URLs de forma transparente. 
> **La estrategia para Slugs Localizados en SSG será:**
> 1. Configurar `next-intl` con la API de navegación (`createNavigation` y `pathnames`).
> 2. Tener carpetas separadas (o usar `[...slug]`) para renderizar las URLs exactas que exige el SEO. Por ejemplo, en `/es` renderizará el contenido de servicios bajo `/es/servicios`, y en `/en` bajo `/en/services`. 
> 3. Refactorizaremos todos los links del proyecto (`Nav`, `Footer`, y páginas) para usar la nueva etiqueta `<Link>` localizada, de manera que apunten al slug correcto según el idioma.

## 1. Mapeo de Slugs SEO

Configuraremos el siguiente diccionario de rutas en un nuevo archivo `src/navigation.ts`:

- Inicio: `/` -> `/`
- Servicios: `/es/servicios` <-> `/en/services`
- Auditoría Gratuita: `/es/auditoria-web-gratuita` <-> `/en/free-web-audit`
- Mini-curso: `/es/curso-web-gratis` <-> `/en/free-web-course`
- Casos de Éxito: `/es/casos-de-exito` <-> `/en/case-studies`

*(Nota: Como solicitaste, los nombres de los productos dentro de las páginas, como "Automation Retainer", no serán traducidos).*

## 2. Erradicación de Texto Hardcodeado

Se auditarán uno por uno los siguientes archivos y componentes para asegurar que todo el texto provenga de `getTranslations` o `useTranslations`:

- `src/app/[locale]/page.tsx` (Home)
- `src/app/[locale]/servicios/page.tsx` y `/services/page.tsx`
- `src/app/[locale]/auditoria-web-gratuita/page.tsx` y `/free-audit/page.tsx`
- `src/app/[locale]/email-course/page.tsx`
- Todos los componentes Layout (`Nav`, `Footer`) y Modales (`MeetingPopup`).
- Configuración Metadata SEO de cada página (Title, Description, OpenGraph).

Todo el contenido extraído en español se traducirá al inglés en `en.json` manteniendo un nivel de **copywriting persuasivo, profesional y adaptado al buyer persona**, tal como indicaste.

## 3. Fases de Ejecución

1. **Fase 1: Configuración Core i18n:**
   Crear `src/navigation.ts`, configurar `pathnames` y reemplazar todas las importaciones de `next/link` por nuestra nueva utilidad en toda la web.

2. **Fase 2: Reestructuración de Carpetas (Slugs):**
   Alinear las carpetas en `src/app/[locale]` para que coincidan con los slugs mapeados. Implementar bloqueos simples (`notFound()`) para evitar que la página `/es/services` cargue si debería ser `/es/servicios`.

3. **Fase 3: Auditoría y Traducción (Cero Hardcode):**
   Revisar cada `page.tsx` y componente. Extraer cualquier texto fijo hacia `es.json` y generar el equivalente profesional en `en.json`.

¿Me das el OK para comenzar con la Fase 1?
