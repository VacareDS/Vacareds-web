# Plan: Rutas `/servicios/` + i18n de páginas de servicio

**Fecha:** 2026-05-18  
**Prioridad:** Alta — bloquea URLs en español que llegan desde navegación y SEO

---

## Problema 1 — 404 en `/es/servicios/[nombre]`

### Qué pasó
Se borraron los archivos en `src/app/[locale]/servicios/[slug]/page.tsx` (visibles como `D` en git status). La expectativa era que `next-intl` con `pathnames` en `navigation.ts` reescriba automáticamente `/es/servicios/automation-retainer` → archivo en `services/automation-retainer/`. Eso **debería funcionar** según la config actual, pero da 404.

### Por qué puede fallar igual
El middleware de next-intl con pathnames hace la reescritura, pero en la versión actual de next-intl con App Router existe un comportamiento documentado: el servidor de desarrollo puede servir 404 hasta que se hace un **hard restart** (no basta hot reload). En producción con build limpio suele funcionar.

**También verificar:** si el middleware matcher captura bien rutas con subrutas españolas. El matcher actual `/(es|en)/:path*` debería alcanzar `/es/servicios/automation-retainer`, pero hay casos donde el path interno que next-intl busca en el filesystem no matchea el canonical porque el routing no re-escribe antes de que el App Router resuelva.

### Pasos de diagnóstico (en orden)

1. **Reiniciar el servidor de dev** (`Ctrl+C` → `npm run dev`) y probar de nuevo — puede ser cache de rutas.
2. Si sigue el 404: añadir un `console.log` en el middleware para ver si la request entra.
3. Revisar versión de next-intl: `npm list next-intl`. Si es <3.x la API de pathnames con App Router puede estar incompleta.
4. Abrir `node_modules/next-intl/dist/docs/` y buscar la sección de `pathnames` para ver si hay alguna restricción con subrutas.

### Solución probable A — el problema es solo cache de dev
- Reiniciar dev server resuelve el 404.  
- Confirmar que `/es/servicios/automation-retainer` carga el mismo componente que `/en/services/automation-retainer`.

### Solución probable B — next-intl no reescribe subrutas anidadas en esta versión
- Recrear los archivos en español como **re-exports** del componente ya existente, en lugar de duplicar código:

```
src/app/[locale]/servicios/automation-retainer/page.tsx  ← SOLO re-export
```

```tsx
// src/app/[locale]/servicios/automation-retainer/page.tsx
export { default, generateMetadata } from '../services/automation-retainer/page';
```

Esto resuelve el 404 sin duplicar una línea de lógica. Aplicar para los 5 servicios:
- `starter-presence`
- `growth-machine`
- `full-funnel-360`
- `ecommerce-pro`
- `automation-retainer`

> **Sugerencia:** Aplicar solución B directamente si el equipo no quiere depender del comportamiento de routing de next-intl para rutas anidadas — es más explícita y no rompe si cambia la versión.

---

## Problema 2 — Texto hardcodeado con `isEn ? '...' : '...'`

### Estado actual
Las 5 páginas de servicio (~700-800 líneas cada una) usan el patrón:
```tsx
{isEn ? 'English text' : 'Texto en español'}
```
Incluyendo `generateMetadata`, hero, cards de features, precios, FAQ, comparativas, CTAs. **Nada** de eso pasa por `t('key')`.

### Por qué esto es un problema
- Doble el tamaño de cada componente.
- Si se necesita cambiar una palabra en español hay que buscar en el JSX.
- No escala si se añade un tercer idioma.
- Los archivos `messages/es.json` y `messages/en.json` no tienen ninguna clave de servicios aún.

### Plan de refactor (servicio por servicio)

**Estructura de claves sugerida en los JSONs:**

```json
// messages/es.json
{
  "services": {
    "automationRetainer": {
      "meta": {
        "title": "Automation Retainer — ...",
        "description": "Flujos n8n que eliminan..."
      },
      "hero": {
        "badge": "Operaciones",
        "title": "El trabajo repetitivo de tu equipo cuesta $460/mes.",
        "subtitle": "...",
        "cta": "Empezar ahora"
      },
      "features": { ... },
      "pricing": { ... },
      "faq": { ... }
    },
    "starterPresence": { ... },
    "growthMachine": { ... },
    "fullFunnel360": { ... },
    "ecommercePro": { ... }
  }
}
```

**Orden de trabajo sugerido:**
1. `automation-retainer` primero (el más trabajado, sirve como plantilla).
2. Extraer todas las strings `isEn ? A : B` a las claves del JSON.
3. Reemplazar en el componente con `t('services.automationRetainer.hero.title')` etc.
4. Repetir para los otros 4 servicios.

**Tip de implementación:** Usar el namespace al llamar `getTranslations`:
```tsx
const t = await getTranslations({ locale, namespace: 'services.automationRetainer' });
// luego: t('hero.title')
```

---

## Problema 3 — Nombre del servicio ausente en el Hero

### Qué falta
El hero de cada página de servicio no muestra el nombre del servicio de forma destacada (por ej. "Automation Retainer" o "Starter Presence" como eyebrow/badge o como parte del título principal).

### Sugerencia
Añadir en el Hero, encima del título principal, un badge/eyebrow con el nombre del servicio. Ejemplo en `automation-retainer`:

```tsx
<span className="text-xs font-semibold uppercase tracking-widest text-[var(--mg)] mb-3 block">
  {t('name')}  {/* "Automation Retainer" */}
</span>
```

Donde `t('name')` viene de `messages/es.json → services.automationRetainer.name`.

---

## Checklist de ejecución

- [ ] Diagnosticar 404: reiniciar dev server, probar `/es/servicios/automation-retainer`
- [ ] Si persiste 404: crear re-exports en `servicios/[slug]/page.tsx` para los 5 servicios
- [ ] Verificar que `/es/servicios/` (lista) también funciona — misma lógica, re-export desde `services/page.tsx`
- [ ] Añadir claves de servicios en `messages/es.json` y `messages/en.json`
- [ ] Refactorizar `automation-retainer/page.tsx` como plantilla (eliminar todos los `isEn ? A : B`)
- [ ] Añadir nombre del servicio en el hero de cada página
- [ ] Repetir refactor para los otros 4 servicios
- [ ] Verificar `generateMetadata` también usa `t()` (o `getTranslations` directo al namespace)

---

## Notas adicionales

- Los breadcrumbs también tienen strings hardcodeadas (`isEn ? 'Home' : 'Inicio'`, `isEn ? 'Services' : 'Servicios'`). Estos pueden ir en un namespace `Layout.breadcrumbs` que ya podría existir o ampliarse.
- Los links internos entre servicios (ej. "si querés Starter Presence ve acá") usan `/${isEn ? 'services' : 'servicios'}/...` — estos deberían usar el componente `Link` de `@/navigation` que ya maneja la traducción de paths automáticamente.
- Textos mixtos: algunos tienen mezcla de ES/EN sin condicional (ej. línea 649 tiene texto fijo en español dentro de una sección que debería ser bilingüe).
