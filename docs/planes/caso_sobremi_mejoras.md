# Plan de mejoras: página caso sobremi.online
**Rutas afectadas:** `/es/casos-de-exito/sobremi` · `/en/case-studies/sobremi`  
**Archivos:** `messages/es.json` → `CaseSobreMi` · `messages/en.json` → `CaseSobreMi`  
**Fecha:** 2026-05-17

---

## Diagnóstico: por qué falla hoy

La página está escrita como un **portafolio técnico para devs**, no como una página de ventas para dueños de negocios. El visitante típico que llega ahí (lead de Vacare) no sabe qué es n8n, Postgres ni un webhook — y no necesita saberlo. Lo que necesita ver es:

> *"Tengo un negocio con problemas X. Vacare lo resolvió con resultado Y. Yo podría tener lo mismo."*

Hoy la página le habla a alguien que ya sabe programar, no a alguien que quiere crecer su negocio.

---

## Perfil del lead que llega a esta página

- Dueño de PYME o emprendedor, no técnico.
- Llegó desde el home, un ad, o la sección de casos.
- Pregunta interna: *"¿Vacare sabe lo que hace? ¿Pueden construir algo real?"*
- **No sabe** qué es: n8n, Postgres, webhook, App Router, SSR, RSC, VPS, Supabase.
- **Sí entiende**: "se vende solo", "llega plata sin que yo haga nada", "me avisan cuando hay pedidos", "cuesta menos que contratar alguien".

---

## Secciones con problemas y acciones concretas

### 1. Hero — **ajuste de copy**

**Problema:** Las métricas muestran "$0 intervención manual por pedido" y "2hs de form a entrega" — correctas pero frías. El subtitle empieza hablando de Vacare, no del cliente. El stack de tecnologías (badges) aparece antes de cualquier beneficio.

**Acción:**
- Eliminar el stack de tecnologías  del hero. Si queda, usar nombres más descriptivos: en vez de "Webhooks" → "Cobros en tiempo real", en vez de "n8n" → "Automatizaciones".
- Cambiar el orden del subtitle: primero la promesa de negocio, después la credencial.
- Reescribir las métricas para que hablen de negocio:

| Hoy | Propuesto |
|-----|-----------|
| `100%` / Automatizado | `100%` / Ventas sin intervención humana |
| `$0` / Intervención manual por pedido | `0` / Empleados procesando pedidos |
| `2hs` / De form a entrega confirmada | `<2min` / De pago a confirmación automática |

- El panel derecho ya está bien orientado ("Ventas 100% automatizadas", "Gestión en tiempo real") — **mantener ese tono en todo el resto**.

---

### 2. Context — **cambiar framing del desafío**

**Problema:** La sección "Los desafíos técnicos" lista 5 items totalmente técnicos (webhooks de Stripe, Postgres, endpoints). El lead no entiende estos desafíos y no le importan.

**Acción:** Renombrar a "El problema de negocio" y reescribir los desafíos en lenguaje de negocio:

| Hoy (técnico) | Propuesto (negocio) |
|---------------|---------------------|
| "Manejar dos métodos de pago (Stripe y transferencia) con flujos distintos en n8n" | "Aceptar tarjeta y transferencia sin agregar trabajo manual para el equipo" |
| "Generar el link de pago de Stripe dinámicamente desde el backend con webhook de retorno" | "Cobrar en línea sin redirigir al cliente a otra plataforma ni perder la venta en el camino" |
| "Registrar cada pedido en Postgres con estado actualizado en tiempo real según el webhook de Stripe" | "Saber en todo momento qué pedidos están pagados, cuáles pendientes y cuáles entregados — sin planillas ni WhatsApp" |
| "Construir la página pública de regalo /regalos/:id con datos dinámicos desde la base de datos" | "Dar al comprador una URL personalizada que puede compartir con el destinatario del regalo" |
| "Enviar emails transaccionales con diseño personalizado, sin depender de plataformas de terceros" | "Confirmar cada compra al instante con un email profesional — automático, sin costo por envío, sin depender de Mailchimp" |

El `siteCard` puede conservarse tal como está — funciona bien como social proof.

---

### 3. Arquitectura (Arch) — **transformar o eliminar para el lead**

**Problema:** Esta sección muestra capas técnicas (Frontend / Backend / Automation / Deploy) con etiquetas como "App Router · SSR · RSC", "tablas: pedidos · id · estado · método · timestamp". Es la sección más alienante para un no-técnico.


**Transformar en "Cómo funciona":**
Convertir el diagrama de capas técnicas en un flujo narrativo tipo "paso a paso" con lenguaje de negocio:
1. El cliente entra → elige el regalo → llena el formulario
2. Se genera el cobro automáticamente (tarjeta o transferencia)
3. El pago se confirma → el sistema registra el pedido
4. Se envía automáticamente un email de confirmación al comprador y aviso al equipo
5. El comprador recibe su link personalizado del regalo


---

### 4. Flujos (Flows) — **ajuste de copy, sección OK en estructura**

**Problema:** Los títulos son buenos pero los textos (párrafos p) entran en detalles técnicos que el lead no necesita. Ejemplo: "el backend de Next.js genera un Payment Intent en Stripe y devuelve el link de pago".

**Acción:** Mejorar la estética de esta sección y reescribir los párrafos en modo "qué experimenta el cliente":

| Flujo | Hoy | Propuesto |
|-------|-----|-----------|
| 01 - Stripe | "el backend genera un Payment Intent... webhook... actualiza Postgres..." | "El comprador paga con tarjeta en segundos. El sistema registra el pedido y activa la confirmación sin que nadie toque nada." |
| 02 - Transferencia | "n8n envía inmediatamente un email... cuando el equipo confirma manualmente..." | "El cliente recibe un email de seguimiento al instante. Cuando el equipo confirma el pago, el sistema envía la confirmación final automáticamente." |
| 03 - Aviso interno | "n8n envía un email a sobremionline@gmail.com con un resumen..." | "El equipo recibe un resumen del pedido en su bandeja. Sin revisar paneles. Sin perderse de nada." |
| 04 - Email al comprador | "n8n genera y envía un email con diseño personalizado que incluye... /regalos/:id" | "Cuando el pedido está listo, el comprador recibe un email automático con todos los detalles del regalo y su link personalizado para compartir — en menos de 2 minutos." |


---

### 5. Tech Deep Dive — **eliminar o mover fuera del flujo principal**

**Problema crítico:** Esta sección muestra código SQL (`CREATE TABLE pedidos...`) y código TypeScript con webhook handlers. Para un lead de negocio esto es exactamente lo opuesto a lo que convierte — los hace sentir que esto "es muy complicado" o "no es para mí".

**Acción recomendada:** Eliminar la sección del flujo principal de la página.

Si hay preocupación por el SEO técnico o por atraer leads más técnicos que también pueden ser decisores, moverla a una sección colapsada al final con label "Para el CTO / equipo técnico — detalles de implementación".

---

### 6. Result — **buena base, pequeños ajustes**

**Problema menor:** Las métricas incluyen "4 Flujos n8n en producción activa" — referencia técnica innecesaria.

**Acción:** Cambiar esa métrica por algo de negocio:

| Hoy | Propuesto |
|-----|-----------|
| `4` / Flujos n8n en producción activa | `0` / Horas de trabajo manual por pedido |

El visual del dashboard de estado es bueno y creíble — **mantener**.

---

### 7. Learn — **reemplazar por sección orientada al lead**

**Problema:** "Lo que aprendimos" suena a recap de dev blog. Los tres aprendizajes son técnicos ("n8n como orquestador es imbatible", "Los webhooks de Stripe son la pieza más crítica", "Next.js + Cloudflare Pages es la combinación ganadora"). El lead no tiene por qué validar estas elecciones técnicas.

**Acción:** Cambiar el frame completo a "Lo que esto significa para tu negocio":

| Hoy | Propuesto |
|-----|-----------|
| "n8n como orquestador es imbatible para automatizaciones de negocio" | "Podés tener un equipo de ventas que no duerme — y no necesitás contratar a nadie" |
| "Los webhooks de Stripe son la pieza más crítica — y la más subestimada" | "Cada venta online que no tiene confirmación automática es una venta que puede perderse — o un cliente que se enoja" |
| "Next.js + Cloudflare Pages es la combinación ganadora" | "Tu web puede ser rápida, profesional y sin costo de hosting — eso no es un lujo, es la base" |

---

### 8. CTA final — **ajuste mínimo**

**Problema:** El cuerpo del CTA empieza listando el stack: "Stripe, n8n, Postgres, Next.js — todo lo que ves en sobremi.online lo construimos para nuestros clientes." El lead que no sabe esas palabras ve esto como jerga.

**Acción:** Reescribir para empezar con el beneficio, terminar con la credencial:

> "Todo lo que ves en sobremi.online — pedidos automáticos, cobros integrados, emails sin intervención — lo construimos para los negocios de nuestros clientes. En 30 minutos te decimos qué necesita el tuyo."

---

## Sección nueva recomendada: "¿Para qué tipo de negocio funciona esto?"

**Ubicación:** Entre Result y Learn (o entre Learn y Next Cases).  
**Objetivo:** Que el lead se vea reflejado, no solo que admire el caso.

Propuesta de copy:

> Este sistema no es solo para plataformas de regalos. Lo mismo que ves aquí — cobros online, confirmaciones automáticas, avisos al equipo — funciona para:
> - Servicios profesionales que cobran por sesión o paquete
> - Tiendas que quieren dejar de gestionar pedidos por WhatsApp
> - Negocios de turismo o reservas que confirman manualmente
> - Cualquier emprendedor que pierde tiempo en tareas que debería hacer el sistema

---

## Resumen de cambios por prioridad

| Prioridad | Sección | Cambio |
|-----------|---------|--------|
| 🔴 Alta | Tech Deep Dive | Eliminar del flujo principal (mover o remover) |
| 🔴 Alta | Context — Desafíos | Reescribir de técnico a lenguaje de negocio |
| 🔴 Alta | Learn | Reframe completo: "qué significa para tu negocio" |
| 🟡 Media | Arch | Transformar en flujo narrativo tipo "cómo funciona" |
| 🟡 Media | Flows — párrafos | Reescribir en experiencia del cliente, sacar jerga |
| 🟡 Media | Hero — stack badges | Usar nombres descriptivos o mover abajo del fold |
| 🟡 Media | CTA body | Empezar con beneficio, no con nombres de herramientas |
| 🟢 Baja | Hero — métricas | Ajustar labels a lenguaje de negocio |
| 🟢 Baja | Result — métrica n8n | Reemplazar por métrica de negocio |
| 🟢 Nueva | Entre Result y CTA | Agregar sección "¿Para qué negocio funciona?" |

---

## Nota sobre la versión en inglés

Los mismos cambios aplican al `en.json`. La versión inglesa es casi una traducción directa — el problema de fondo es idéntico. Aplicar los mismos cambios en paralelo.
