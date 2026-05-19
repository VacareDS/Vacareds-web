# Webhooks n8n — Plan de implementación

> **Contexto:** El sitio vive en Cloudflare Pages como **static export**.
> No hay servidor Node.js. Las rutas `/api/` de Next.js no existen en producción.
> Todo lo que necesite backend va directo al navegador → n8n.
> Por eso todas las URLs son `NEXT_PUBLIC_*`.

---

## Estado del código

| Cambio | Archivo | Estado |
|---|---|---|
| Waitlist llama directo a n8n | `free-audit/page.tsx` + `email-course/page.tsx` | ✅ Aplicado |
| Disponibilidad consulta DB real | `lib/availability.ts` | ✅ Aplicado |
| Variables de entorno reorganizadas | `.env` | ✅ Aplicado |
| Rutas `/api/waitlist/` eliminadas | `src/app/api/waitlist/` | ⏳ Pendiente (borrar cuando confirmes que funciona) |

**Lo único que falta es implementar los 3 workflows en n8n y poner las URLs reales en `.env`.**

---

## Prioridades

| # | Webhook | Urgente | Motivo |
|---|---|---|---|
| WH-A | Lista de espera (auditoría + curso) | ✅ Sí | Código listo, falta el workflow en n8n |
| WH-B | Disponibilidad de reuniones (GET) | ✅ Sí | Código listo, falta el workflow en n8n |
| WH-C | Confirmar reunión (POST) | ✅ Sí | Código listo, falta URL real en `.env` |
| WH-D | AuditForm → entregar reporte | 🔜 Después | Servicio aún no activo |
| WH-E | CourseForm → enviar curso | 🔜 Después | Servicio aún no activo |

---

## BLOQUE 1 — LO QUE NECESITA FUNCIONAR YA

### WH-A — Lista de espera

| | |
|---|---|
| Variable | `NEXT_PUBLIC_N8N_WEBHOOK_WAITLIST` |
| Método | `POST` |
| Llamado desde | `WaitlistClient.tsx` (código actualizado ✅) |

**Payload que recibirá n8n:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@empresa.com",
  "source": "waitlist",
  "list": "auditoria",
  "locale": "es",
  "submitted_at": "2026-05-18T14:30:00Z"
}
```
`list` es `"auditoria"` o `"curso"`. Con ese campo n8n ramifica internamente — son la misma URL.

**Workflow de n8n a crear:**

```
Necesito un workflow de n8n que haga lo siguiente:

1. Recibe un POST con: name, email, source, list, locale, submitted_at
2. Verifica si ya existe ese email en la tabla "waitlist" con ese mismo "list"
   — si ya existe, responde 200 OK sin hacer nada más (silencioso, sin error)
3. Si es nuevo: inserta en la tabla "waitlist" los campos name, email, list, locale, submitted_at
4. Ramifica según el campo "list":
   — si list = "auditoria": envía email con asunto "Te avisamos cuando esté lista la Auditoría"
   — si list = "curso": envía email con asunto "Te avisamos cuando arranque el Curso"
   El email es simple: confirma que quedó anotado y dice que le avisaremos
5. Envía notificación interna (email o WhatsApp) a Noelia con name, email y list
6. Responde 200 OK con { "ok": true }

Importante: el webhook debe responder OPTIONS con los headers CORS correctos
para que funcione desde el navegador (Cloudflare Pages → n8n).
```

---

### WH-B — Disponibilidad de reuniones

| | |
|---|---|
| Variable | `NEXT_PUBLIC_N8N_WEBHOOK_AVAILABILITY` |
| Método | `GET` |
| Llamado desde | `lib/availability.ts → getAvailability()` (código actualizado ✅) |

**Respuesta que debe devolver n8n:**
```json
{
  "bookedSlots": [
    { "iso": "2026-05-20", "time": "10:00" },
    { "iso": "2026-05-22", "time": "15:00" }
  ]
}
```
Solo los slots ya ocupados. El cliente arma el calendario completo y marca esos como no disponibles.

**Workflow de n8n a crear:**

```
Necesito un workflow de n8n que haga lo siguiente:

1. Recibe un GET (sin body, puede tener query param "t" para evitar caché — ignorarlo)
2. Consulta la tabla "meetings" en la base de datos:
   SELECT date, time FROM meetings
   WHERE date >= hoy AND date <= hoy + 14 días
   AND status != 'cancelled'
3. Transforma los resultados a este formato:
   { "bookedSlots": [{ "iso": "2026-05-20", "time": "10:00" }, ...] }
   donde "iso" es la fecha en formato YYYY-MM-DD
4. Responde 200 OK con ese JSON

Importante:
- Responder en menos de 800ms (el usuario ve un spinner mientras espera)
- Incluir header "Cache-Control: no-store" para que el browser no cachee
- Responder OPTIONS con headers CORS correctos
```

---

### WH-C — Confirmar reunión

| | |
|---|---|
| Variable | `NEXT_PUBLIC_N8N_WEBHOOK_MEETING` |
| Método | `POST` |
| Llamado desde | `MeetingPopup.tsx → handleSubmit()` |
| Estado | Código ya funcional — solo falta URL real en `.env` |

**Payload que recibirá n8n:**
```json
{
  "name": "Carlos Ruiz",
  "email": "carlos@empresa.com",
  "whatsapp": "+5493425000000",
  "message": "Tengo una tienda de ropa",
  "date": "2026-05-22",
  "time": "10:00",
  "locale": "es"
}
```

**Workflow de n8n a crear:**

```
Necesito un workflow de n8n que haga lo siguiente:

1. Recibe un POST con: name, email, whatsapp, message, date, time, locale
2. Verifica que ese slot (date + time) sigue disponible en la tabla "meetings"
   — si ya está ocupado: responder 409 Conflict con { "error": "slot_taken" }
3. Si está libre: inserta en la tabla "meetings":
   name, email, whatsapp, message, date, time, locale, status = "confirmed", created_at
4. Envía email de confirmación al cliente (campo "email") con:
   — Fecha y hora de la reunión (en zona horaria Argentina)
   — Un link de Google Meet o Zoom (puede ser un link fijo por ahora)
   — Nombre de quien atiende (Noelia de Vacare)
5. Envía notificación a Noelia con todos los datos del cliente
6. (Opcional) Crea un evento en Google Calendar con los datos de la reunión
7. (Opcional) Agenda un segundo workflow que se dispare 24hs antes para enviar recordatorio
8. Responde 200 OK con { "ok": true }

Importante:
- El paso 2 (verificar disponibilidad) debe hacerse con un SELECT antes del INSERT
  para evitar que dos personas reserven el mismo horario al mismo tiempo
- Responder OPTIONS con headers CORS correctos
```

---

## BLOQUE 2 — PARA DESPUÉS

### WH-D — AuditForm → entregar reporte

| | |
|---|---|
| Variable | `NEXT_PUBLIC_N8N_WEBHOOK_AUDIT` |
| Llamado desde | `AuditForm.tsx` (actualmente `setTimeout` falso — no toca n8n) |

Payload: `{ url, email, optin, locale, submitted_at }`

**Workflow de n8n a crear (cuando el servicio esté activo):**

```
Necesito un workflow de n8n que haga lo siguiente:

1. Recibe un POST con: url, email, optin, locale, submitted_at
2. Guarda el lead en una tabla "leads_audit": url, email, locale, submitted_at
3. Envía email de confirmación al cliente:
   "Recibimos tu solicitud. En menos de 2 horas tenés el reporte en tu bandeja."
4. Notifica a Noelia con la URL a analizar
5. (Opcional) Dispara un sub-workflow que realiza el análisis del sitio
   y genera el reporte para enviar por email
6. Responde 200 OK con { "ok": true }
```

---

### WH-E — CourseForm → enviar curso

| | |
|---|---|
| Variable | `NEXT_PUBLIC_N8N_WEBHOOK_COURSE` |
| Llamado desde | `CourseForm.tsx` (actualmente `setTimeout` falso — no toca n8n) |

Payload: `{ nombre, email, etapa, rubro, locale, submitted_at }`

**Workflow de n8n a crear (cuando el servicio esté activo):**

```
Necesito un workflow de n8n que haga lo siguiente:

1. Recibe un POST con: nombre, email, etapa, rubro, locale, submitted_at
2. Verifica si ese email ya existe en "subscribers_course"
   — si ya existe, responde 200 OK sin reenviar nada
3. Si es nuevo: guarda en "subscribers_course": nombre, email, etapa, rubro, locale, submitted_at
4. Envía inmediatamente el email del Día 1 del curso
5. Agenda los emails del Día 2 al Día 5, uno por día (usando el nodo Schedule o Wait de n8n)
6. Puede usar el campo "etapa" para personalizar el contenido de los emails
7. Responde 200 OK con { "ok": true }
```

---

## Variables de entorno — resumen

```bash
# ── URGENTES: poner URLs reales antes del deploy ──
NEXT_PUBLIC_N8N_WEBHOOK_WAITLIST=https://tu-n8n.com/webhook/waitlist
NEXT_PUBLIC_N8N_WEBHOOK_AVAILABILITY=https://tu-n8n.com/webhook/availability
NEXT_PUBLIC_N8N_WEBHOOK_MEETING=https://tu-n8n.com/webhook/meeting

# ── PARA DESPUÉS ──
NEXT_PUBLIC_N8N_WEBHOOK_AUDIT=https://tu-n8n.com/webhook/audit
NEXT_PUBLIC_N8N_WEBHOOK_COURSE=https://tu-n8n.com/webhook/course
NEXT_PUBLIC_N8N_WEBHOOK_CONTACT=https://tu-n8n.com/webhook/contact
```

En Cloudflare Pages estas mismas variables van en:
**Settings → Environment Variables → Production**

---

## CORS — configurar en cada webhook de n8n

El browser hace un preflight `OPTIONS` antes de cada POST. Si n8n no lo responde,
el formulario falla en silencio aunque n8n esté funcionando.

En cada Webhook node → pestaña "Settings" → "Response Headers":
```
Access-Control-Allow-Origin: https://vacare.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```
Para desarrollo usar `*` en lugar del dominio.
