# Ajuste de lanzamiento: CTAs de agenda redirigen a WhatsApp

**Fecha:** 2026-05-18  
**Estado:** ACTIVO — pendiente reversión cuando el webhook de n8n esté listo  
**Autor:** Claude Code / Vacare Digital Solutions

---

## Qué se cambió y por qué

El popup de "Agendá una llamada" (`MeetingPopup`) depende del webhook `NEXT_PUBLIC_N8N_WEBHOOK_MEETING` que aún no está configurado en n8n. Para no bloquear el lanzamiento, **todos los CTAs que antes abrían ese popup ahora abren WhatsApp directamente**.

El componente `MeetingPopup` **NO fue eliminado** — solo se deshabilitó su apertura.

---

## Archivo modificado

### `src/components/layout/HomeClient.tsx`

**Cambio único:** se reemplazó el cuerpo de `openMeeting` de `() => setOpen(true)` a una redirección WhatsApp. Como toda la app consume esta función a través del contexto `MeetingContext`, el cambio propaga automáticamente a todos los puntos de entrada.

```diff
- openMeeting: () => setOpen(true)
+ openMeeting: () => window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`, '_blank', ...)
```

El `<MeetingPopup>` en el JSX fue comentado (no borrado).

---

## Número y mensaje de WhatsApp

- **Variable de entorno:** `NEXT_PUBLIC_WHATSAPP_NUMBER` (definida en `.env`)
- **Número:** `+5493425258889`
- **Mensaje pre-llenado:** `Hola, quiero agendar una llamada de 30 min.`
- **URL generada:** `https://wa.me/5493425258889?text=Hola%2C%20quiero%20agendar%20una%20llamada%20de%2030%20min.`

---

## CTAs afectados (todos propagados por contexto)

Todos los componentes que llaman `useMeeting().openMeeting()` o usan `<OpenMeetingBtn>`:

| Componente | Archivo |
|---|---|
| Botón en Navbar | `src/components/layout/Nav.tsx` |
| Hero principal | `src/components/ui/HeroCta.tsx` |
| Exit intent popup | `src/components/ui/ExitIntentPopup.tsx` |
| CTA final de página | `src/components/sections/CtaFinal.tsx` |
| Botones de packs/pricing | `src/components/sections/PackBlock.tsx`, `src/components/ui/PackCta.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Páginas de servicios | `src/app/[locale]/servicios/*/page.tsx` (múltiples) |
| Páginas de casos de éxito | `src/app/[locale]/casos-de-exito/sobremi/page.tsx`, `case-studies/sobremi/page.tsx` |

---

## Cómo revertir (cuando el webhook de n8n esté listo)

En `src/components/layout/HomeClient.tsx`:

**1.** Borrar las líneas del ajuste temporal:
```ts
// AJUSTE_LANZAMIENTO: popup deshabilitado temporalmente ...
const WA_NUMBER = ...
const WA_MSG = ...
```

**2.** Reemplazar la función `openMeeting`:
```ts
// BORRAR esto:
const openMeeting = () => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer');
};

// RESTAURAR esto:
// (dentro de HomeClient, usar setOpen del useState)
openMeeting: () => setOpen(true)
```

**3.** Descomentar el `<MeetingPopup>`:
```tsx
// DESCOMENTAR:
<MeetingPopup isOpen={open} onClose={() => setOpen(false)} />
```

**4.** Configurar en `.env`:
```
NEXT_PUBLIC_N8N_WEBHOOK_MEETING=https://TU-N8N-REAL.com/webhook/meeting
```

---

## Componentes preservados sin cambios

- `src/components/ui/MeetingPopup.tsx` — intacto, listo para reactivar
- `src/components/ui/OpenMeetingBtn.tsx` — sin cambios
- Todas las páginas de servicios y demás — sin cambios
