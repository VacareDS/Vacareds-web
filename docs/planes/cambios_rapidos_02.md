
### Nuevos (sesión actual)

**15. Sección "Nuestras soluciones" — reducir tamaño y acortar texto "Ideal para:"**
El texto `<b>Ideal para:</b> ...` compite visualmente con los títulos de los planes porque usa el mismo peso visual. Dos acciones:
1. En `PackBlock.tsx` reducir el estilo del campo `price` (actualmente `[&>b]:text-[22px]`) a algo como `[&>b]:text-[13px]` para que el "Ideal para:" no sea tan prominente.
2. Acortar las descripciones en los JSON. Ejemplo actual: `"Ideal para: negocios que recién comienzan en Google o que quieren ganar credibilidad digital y verse serios."` → debe quedar en ≤8 palabras clave, sin subordinadas largas.

**16. ExitIntentPopup: reemplazar texto hardcodeado por i18n**
El componente `src/components/ui/ExitIntentPopup.tsx` tiene strings hardcodeados en español (título, cuerpo, CTAs, "No gracias", "Antes de irte"). Deben moverse a `messages/es.json` y `messages/en.json` bajo la clave `ExitIntent`. El componente debe recibirlos como props desde el parent (page.tsx) donde sí hay acceso a las traducciones de servidor, o bien usar `useTranslations` del cliente.

**17. Popup "Agendá una llamada" — integración webhook n8n**
El MeetingPopup actualmente captura nombre, email y WhatsApp pero no envía los datos a ningún lado. Implementar:
1. Agregar `NEXT_PUBLIC_N8N_WEBHOOK_MEETING=https://webhook-prueba.example.com/meeting` a `.env.local`.
2. En el submit del popup enviar `POST` con `{ name, email, whatsapp, date, time, locale }` al webhook.
3. Loggear en consola lo que se enviaría.
4. El popup debe esperar la respuesta (mostrar estado loading → success → error).
5. Para desarrollo, crear un mock endpoint que responda `{ ok: true }` con status 200 (puede ser en `src/app/api/mock-webhook/route.ts`).
El webhook de n8n real responderá 200 cuando esté configurado, el comportamiento del popup ya estará armado.

**18. Navegabilidad y estructura de rutas — refactoring completo**
Hay URLs inaccesibles o sin estructura clara. Tareas:
1. **Reformular el nav** (desktop + mobile) de forma profesional. Propuesta de estructura:
   - `Servicios` (dropdown: Starter Presence / Growth Machine / Full Funnel 360 / Automation Retainer)
   - `Casos` → `/casos-de-exito`
   - `Cómo funciona` → `/#auto`
   - `Blog` → `/blog`
   - `Auditoría gratis` → `/auditoria-web-gratuita` (CTA destacado)
2. **Landing pages por servicio** (crear estructura, contenido "próximamente" por ahora):
   - `/servicios`
   - `/servicios/starter-presence`
   - `/servicios/growth-machine`
   - `/servicios/full-funnel-360`
   - `/servicios/automation-retainer`
   - EN equivalents: `/services/starter-presence`, etc.
3. **Verificar que todas las rutas existentes respondan correctamente**: `/casos-de-exito`, `/casos-de-exito/supertramp`, `/auditoria-web-gratuita`, `/curso-web-gratis`, `/blog`, `/blog/*`.
4. **Links del footer** deben apuntar a URLs reales, no a `#`.

**19. Auditoría SEO — interlinking, slugs y escalabilidad global**
Revisar la estructura completa de URLs, slugs en ES/EN, interlinking interno y metadatos. Al final de este documento, agregar una lista de sugerencias de SEO técnico y de contenido para posicionamiento global.

Tareas técnicas previas:
1. Verificar que `hreflang` entre `/es/...` y `/en/...` está correctamente configurado en el `<head>`.
2. Revisar que `canonical` apunte al idioma correcto en todas las páginas.
3. Confirmar que el sitemap (`sitemap.ts`) incluye todas las rutas en ambos idiomas.
4. Revisar slugs: actualmente `/casos-de-exito` (ES) y `/case-studies` (EN) — verificar que next-intl los resuelve correctamente.
5. Agregar `<link rel="alternate" hreflang="x-default" href="https://vacaredigitalsolutions.com/es" />`.

Al finalizar la implementación de esta tarea, agregar al documento de reporte una sección "Plan SEO para dominio global" con al menos 15 sugerencias priorizadas.
