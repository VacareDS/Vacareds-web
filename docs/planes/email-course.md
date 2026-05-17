# Plan de mejora radical — /email-course

> Fecha: 2026-05-02  
> Objetivo: Convertir la landing en una **máquina de captura de leads** que haga exclamar "WOW, ¿esto es gratis?" al primer scroll. El formulario es la estrella. El contenido es la excusa.

---

## El problema real (diagnóstico sin filtro)

La landing actual falla en lo más básico: **no crea urgencia**. El visitante llega, lee algo razonablemente correcto, y se va sin registrarse porque no sintió que estaba perdiendo algo. Una landing de lead magnet de clase mundial no educa — **provoca**. Tiene que generar la sensación de que cada minuto sin el curso es un minuto en el que estoy tomando decisiones equivocadas con mi negocio.

### Fallas específicas

**Above the fold:**
- El headline "Descubrí exactamente qué necesita tu negocio para vender online" es correcto pero tibio. No golpea. No nombra el dolor. No crea urgencia.
- El formulario está presente pero se siente como un formulario más. No se siente como un regalo que estoy a punto de perder.
- No hay prueba social visible: ¿cuántos ya lo recibieron? ¿alguien dice que cambió algo? El visitante llega con escepticismo máximo.

**Copywriting:**
- Suena a agencia explicando por qué es importante tener una web. Eso lo hace cualquiera. Falta el giro que te hace pensar: "espera, ¿cómo saben exactamente mi situación?".
- Los 5 emails describen contenido educativo genérico, no transformaciones concretas que el empresario quiere.
- No hay un antagonista claro. Las mejores landigs de lead magnet tienen un villano: puede ser "las agencias que te cobran de más sin explicarte nada", "el tiempo que perdés haciendo cosas a mano", o "el dinero que perdés cada mes sin saberlo".

**El formulario:**
- No tiene la energía de "esto es gratis, tomalo ahora". Visualmente no destaca del contenido que lo rodea.
- El CTA "Quiero el curso gratuito →" es funcional pero no emocional. No crea urgencia.

---

## 1. Slugs

```
/es/curso-digital-gratis       ← "curso digital gratis", "cómo hacer una web que vende"
/en/free-digital-course        ← "free digital course", "how to get more clients online"
```

Alternativa más específica y con mayor intención de búsqueda:
```
/es/antes-de-pedir-tu-web      ← intención: antes de contratar una agencia
/en/before-you-build-your-site ← intención: high-intent pre-purchase research
```

Redirigir `/email-course` → `/{locale}/curso-digital-gratis` con 301.

---

## 2. Reposicionamiento estratégico

### El personaje al que le habla esta landing

No es "alguien que quiere aprender sobre webs". Es:
**Un dueño de negocio que está a punto de (o acaba de) invertir plata en su presencia digital y tiene miedo de hacerlo mal.**

Tiene uno de estos tres miedos concretos:
1. "Voy a contratar una agencia, pagar una fortuna y que no sirva para nada"
2. "Tengo una web que me costó cara y no me genera nada y no entiendo por qué"
3. "No sé si necesito web, redes sociales, todo junto, o qué primero"

El curso tiene que posicionarse como: **"Lo que necesitás saber ANTES de tomar ninguna decisión digital."**

### El headline que falta

Actual: *"Descubrí exactamente qué necesita tu negocio para vender online."*

Mejor:
> **"Antes de invertir en tu web, leé esto."**
> Subtítulo: *5 emails que te ahorran el error más caro que comete todo negocio con su presencia digital.*

O variante más directa:
> **"La mayoría de las webs de PYMES no venden. No es el diseño. No es el precio. Es esto."**

O variante con prueba social inmediata:
> **"+1.200 empresarios ya saben esto. Vos todavía no."**
> Subtítulo: *En 5 emails cortos (5 minutos cada uno) entendés exactamente qué hace que una web venda — y qué hace que sea solo un gasto.*

---

## 3. Rediseño del above the fold

### Estructura propuesta

```
┌─────────────────────────────────────┬────────────────────────────────────┐
│  IZQUIERDA — El problema + gancho   │  DERECHA — El formulario (la        │
│                                     │  estrella absoluta)                 │
│  [eyebrow pequeño con contador]     │                                     │
│  "+1.200 empresarios ya lo tienen"  │  ╔═══════════════════════════════╗  │
│                                     │  ║  🎁 ES GRATIS. TOMALO AHORA.  ║  │
│  H1: GRANDE, AUDAZ, DOLOR           │  ║                               ║  │
│  "Antes de invertir en tu web,      │  ║  [Nombre]                     ║  │
│   leé esto."                        │  ║  [Email]                      ║  │
│                                     │  ║  [¿Qué situación es la tuya?] ║  │
│  Subtítulo (1 oración, máximo 2):   │  ║                               ║  │
│  "5 emails. 5 minutos. El mapa      │  ║  [ QUIERO LOS 5 EMAILS → ]   ║  │
│   que nadie te dio antes de gastar  │  ║  (botón grande, gradient)     ║  │
│   en tu presencia digital."         │  ║                               ║  │
│                                     │  ║  🔒 Sin spam. Baja cuando     ║  │
│  [Un quote de testimonial real]     │  ║     quieras. 0 costo.         ║  │
│  ─────────────────────────────      │  ╚═══════════════════════════════╝  │
│  "Terminé entendiendo más en 5      │                                     │
│   emails que en 3 años con web."    │  ── Preview de lo que llega ──      │
│   — Sebastián, tienda online        │  [5 email cards mini, con días      │
│                                     │   y títulos reales]                 │
└─────────────────────────────────────┴────────────────────────────────────┘
```

### El formulario como estrella

El formulario en el panel derecho debe:

1. **Tener su propio "producto" visual** — diseñarlo como si fuera un producto premium envuelto para regalo. Borde gradient animado, sombra pronunciada, fondo ligeramente diferente del resto de la página.

2. **Tener un header de valor brutal**
   ```
   🎁  Recibí el curso ahora — es gratis
   ────────────────────────────────────
   El primer email llega en ~15 minutos.
   ```

3. **El botón tiene que ser el elemento más grande y llamativo del formulario**
   - Texto: `"QUIERO LOS 5 EMAILS →"` (no "enviar", no "suscribirme")
   - Gradient, grande, con un mini-counter si es posible: `"→ 1.247 ya lo recibieron"`
   - Estado de carga: `"Preparando tu Día 1..."`
   - Estado de éxito: sección de celebración completa (ver más abajo)

4. **Trust items debajo del botón, en una línea visual:**
   `🔒 Sin spam` · `📧 Baja con un clic` · `✅ 100% gratis` · `🏢 LLC Delaware`

5. **El `select` de etapa debe ser el único campo "diferenciador"** — nombre y email son aburridos pero necesarios; el select de etapa debe tener opciones que hagan al lead pensar "eso me describe exactamente a mí":
   - `→ No tengo web todavía y quiero hacerla bien desde el principio`
   - `→ Tengo web pero no me genera nada y no sé por qué`
   - `→ Quiero rehacer mi presencia digital completa`
   - `→ Estoy a punto de contratar una agencia y quiero entender qué pedir`

6. **Estado de éxito del formulario — hacerlo memorable:**
   El estado de success actual es tibio. Debe ser:
   ```
   ✓ ¡Ya estás adentro!
   
   Mirá tu bandeja de entrada en los próximos 15 minutos.
   (Y la carpeta de spam, por las dudas — a veces el 
    primer email de alguien nuevo cae ahí)
   
   Mientras tanto: ¿conocés nuestra auditoría gratuita?
   [→ Ver auditoría gratis] (CTA secundario suave)
   ```

---

## 4. Stats strip — reemplazar números genéricos

### Actual (aburrido):
`5 emails · 5' · $0 · 1 plan`

### Propuesto (provoca curiosidad y prueba social):
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   +1.200     │    5 min     │    $0         │    30%       │
│  empresarios │  por día     │  para siempre │  más ventas  │
│  ya lo       │  es todo lo  │               │  (Supertramp │
│  tienen      │  que te pide │               │   en 6 meses)│
└──────────────┴──────────────┴──────────────┴──────────────┘
```

El `+1.200 empresarios` y el `30% más ventas (Supertramp)` son los que generan FOMO y credibilidad. Los otros dos son los que eliminan objeciones (tiempo y costo).

---

## 5. Reescritura de los 5 días — transformaciones reales, no educación

El problema del contenido actual: describe lo que el email *enseña*. Nadie se suscribe para aprender; se suscriben para **transformarse o resolver un problema**.

Cada día debe comunicar: `"Después de este email, voy a poder [HACER ALGO CONCRETO / EVITAR ALGO ESPECÍFICO]"`

### Día 1 — "El error de miles de pesos que comete el 90% de los negocios"
**Antes:** "Tu web no es un flyer. Es tu vendedor que nunca duerme."  
**Mejor:** **"Por qué la web que te hicieron no funciona (y no es culpa del diseñador)"**

El gancho: el empresario que tiene una web que no funciona está buscando a quién culpar. Este email le da una respuesta que lo libera del ciclo de culpa Y lo prepara para tomar mejores decisiones.

**Lo que resuelve:** "¿Por qué gasté todo ese dinero y no pasa nada?"  
**Semilla:** La web no es el problema; el problema es que nadie le explicó qué hace que una web funcione.

---

### Día 2 — "Cómo saber exactamente qué buscan tus clientes antes de comprar (sin encuestas, sin presupuesto)"
**Antes:** "Lo que buscan tus clientes es una investigación de mercado. Gratis."  
**Mejor:** **"Tu competencia sabe algo que vos no: exactamente qué busca tu cliente dos horas antes de contratar"**

El gancho: es información que TU COMPETENCIA ya usa para ganarte. No aprendiste algo nuevo — perdiste una ventaja que no sabías que existía.

**Lo que resuelve:** "No sé cómo llegar a mis clientes / hago marketing pero no llega a nadie"  
**Semilla:** Esto es lo que hacemos ANTES de escribir una línea de código para cada cliente.

---

### Día 3 — "¿Cuánto dinero perdiste el mes pasado por no saber esto?"
**Antes:** "Todo se puede medir. Y si no lo medís, estás adivinando."  
**Mejor:** **"El número que deberías saber sobre tu web y que el 95% de los dueños de negocio no conocen"**

El gancho: es un número concreto, real, que el empresario debería saber pero no sabe. La vergüenza productiva de "debería saber esto".

**Lo que resuelve:** "No sé si mi web sirve / invertí en publicidad pero no sé si funcionó"  
**Semilla:** Cada web que entregamos viene con un dashboard automático de KPIs semanal. No necesitás entrar a Analytics; te llega el resumen cada lunes.

---

### Día 4 — "Lo que hace tu competencia mientras vos respondés WhatsApp"
**Antes:** "Las automatizaciones que tu competencia ya tiene (y vos hacés a mano)."  
**Mejor:** **"Mientras vos respondés el quinto WhatsApp del día, tu competencia ya cerró ese cliente"**

El gancho: no es "mirá qué linda la tecnología" — es FOMO competitivo puro y duro. Tu competencia ya tiene esto. ¿Vos cuándo?

**Lo que resuelve:** "No tengo tiempo para nada / no escalo porque todo depende de mí"  
**Semilla:** n8n en vez de Zapier = cero suscripciones mensuales. Las automatizaciones se construyen una vez y trabajan para siempre.

---

### Día 5 — "Tu presupuesto de presencia digital: qué comprar primero (y qué NO todavía)"
**Antes:** "Tu plan de acción: exactamente qué hacer ahora (y qué NO gastar todavía)"  
**Mejor:** **"El mapa exacto según tu situación: qué hacer primero para no tirar plata"**

El gancho: es personalizado según la etapa que seleccionó en el formulario. No todos reciben el mismo email. El empresario siente que el consejo es específicamente para él.

**Lo que resuelve:** "No sé por dónde empezar / no quiero gastar en lo que no necesito"  
**Semilla:** Si después de estos 5 días querés que analicemos tu situación puntual, agendamos 30 minutos y te decimos exactamente qué necesitás (y qué no).

---

## 6. Prueba social — diseño de sección

La sección de prueba social debe parecer capturada, no diseñada. Opciones:

### Opción A — Testimonial wall (3 quotes con foto/avatar)
Tres empresarios reales (o arquetipos creíbles) con:
- Nombre y tipo de negocio (no nombre completo — da más realismo)
- Una frase corta que describa exactamente cómo cambió algo concreto
- No "me gustó mucho el curso" — "Terminé el curso el viernes, el lunes siguiente ya había cambiado el CTA de mi web. Primera semana: 3 consultas."

### Opción B — Caso Supertramp expandido como prueba de resultado
En vez de solo el número 30%, convertirlo en una mini-narrativa visual:
```
╔═══════════════════════════════════════════════════════╗
║  ANTES                    →    DESPUÉS                ║
║                                                       ║
║  Web que no generaba          30% de la facturación   ║
║  ninguna reserva directa      total desde la web      ║
║                                                       ║
║  100% dependencia de          Reservas directas       ║
║  Booking.com                  sin comisiones          ║
║                                                       ║
║  "Supertramp Hostels, Cusco y Machu Picchu — 6 meses" ║
╚═══════════════════════════════════════════════════════╝
```

### Opción C — Counter en tiempo real (o simulado)
Un pequeño badge pegado al formulario:
```
👥 +1.247 empresarios recibiendo el curso hoy
```
(número hardcodeado que se puede actualizar periódicamente)

---

## 7. Sección "¿Por qué es gratis?" — la pregunta que todo lead tiene

Ninguna landing de lead magnet la responde explícitamente y es un error enorme. El escepticismo del empresario al ver "gratis" es: "¿qué me van a vender después?". Responderlo de frente genera confianza exponencial.

### Copy propuesto:

**Eyebrow:** "La pregunta que todos tienen"

**Título:** `¿Por qué gratis?`

**Body:**
> Porque funciona mejor así.
> 
> Si en 5 emails entendés exactamente qué necesita tu negocio, vas a poder tomar mejores decisiones — ya sea que nos contrates a nosotros o no.
> 
> Cuando un cliente llega habiendo leído el curso, la conversación es diferente. No explicamos desde cero por qué no sirve pedir "una web linda". Ya lo sabe. Solo necesita que alguien lo ayude a ejecutar.
> 
> No hay trampa. El Día 5 tiene un link para agendar una llamada si tu perfil encaja con lo que hacemos. Si no, no pasa nada — lo que aprendiste es tuyo.

Esta transparencia radical es un diferencial brutal en un mercado lleno de "cursos gratuitos" que son embudos agresivos.

---

## 8. Rediseño sección por sección

### Hero → ver §3

### Stats Strip
- Cambiar los 4 stats a: `+1.200 empresarios` / `5 min/día` / `$0 siempre` / `30% (Supertramp)`
- Agregar una línea debajo del strip: `"El primer email llega hoy. Los demás, uno por día."`

### Días (Timeline)
- Mantener la estructura visual (timeline lateral) — funciona bien
- Reescribir los títulos de cada día (ver §5)
- Agregar un badge visual diferente para cada día: D1 tiene el ícono 💡, D2 🔍, D3 📊, D4 ⚡, D5 🗺️
- El `takeaway` de cada card debe ser más corto y más impactante: máximo 1 oración, que golpee.
- **Agregar al final de los días una transición hacia la sección de testimonios:**
  > *"Estos son los 5 emails que +1.200 empresarios ya leyeron. Algunos nos escribieron después. Esto dijeron:"*

### Sección "¿Para quién?" → Convertirla en un "Test de diagnóstico rápido"
En vez de 3 cards con checks genéricos, convertirla en:

**Título:** `¿Cuál de estas situaciones te describe?`

3 cards, pero cada una es clickeable y lleva directo al formulario con la opción pre-seleccionada:
```
[card 1] → "Mi web no genera nada y no entiendo por qué"
           (pre-selecciona: "Tengo web pero no genera clientes")

[card 2] → "Estoy pensando en hacer una web y no quiero equivocarme"  
           (pre-selecciona: "No tengo web todavía")

[card 3] → "Quiero dejar de depender de intermediarios (Booking, redes, referidos)"
           (pre-selecciona: "Quiero rehacer mi presencia digital")
```

Hover en cada card → se ilumina + aparece "Empezar →" — click → scroll suave al formulario con etapa pre-cargada.

Esto aumenta radicalmente la conversión porque el usuario siente que el curso es para su situación específica.

### Sección Diff → Agregar un "antagonista" explícito
El título actual "No es otro curso genérico de marketing digital" ya tiene el antagonista implícito. Mejorarlo:

**Título:** `Todos ofrecen cursos de marketing. Este no es un curso de marketing.`

**Subtítulo:** `Es el briefing que toda agencia debería darte antes de pedirte plata. No lo hacen. Nosotros sí.`

La columna "Lo que ofrecen otros" debe renombrarse: **"Lo que te venden las agencias antes de explicarte nada"** — esto clava el antagonista concreto que el empresario ya tiene en mente.

### Sección About → Humanizar más, credenciales menos
El copy actual suena a LinkedIn. Propuesta de apertura más humana:

> *"Somos Germán y Noelia. Llevamos 8 años construyendo sistemas digitales para negocios reales. No vendemos 'presencia digital' — construimos sistemas que generan ingresos.*
> 
> *Escribimos este curso porque siempre tuvimos la misma conversación antes de empezar con cada cliente. Decidimos que era mejor que la leyeran antes de llegar, no después de firmado el contrato."*

### FAQ → Agregar 2 preguntas nuevas
- `"¿Me van a llamar después para venderme algo?"` — Respuesta directa: "No. Si al final del Día 5 querés hablar, hay un link. Si no querés, no pasa nada. Nunca te vamos a llamar en frío."
- `"¿Tengo que saber de tecnología para aprovechar el curso?"` — Respuesta: "Si sabés usar WhatsApp, podés aprovechar el 100% del curso. No hay código, no hay tecnicismos. Si algo no se entiende, nos escribís directamente."

### CTA Bottom → Cambiar la energía de "otro CTA" a "última oportunidad sin presión"

**Título actual:** "5 días para entender qué necesita tu negocio."  
**Mejor:** "Todavía estás a tiempo. El primer email llega hoy."

Agregar debajo del formulario, un elemento visual que crea micro-urgencia sin ser agresivo:
```
📩  Siguiente lote de envíos: hoy a las 18:00 hs (ARG)
```
(horario fijo o dinámico — da sensación de que hay "momentos" para recibirlo)

---

## 9. Micro-animaciones y momentos "WOW" de diseño

1. **Hero form:** cuando el usuario empieza a escribir en el email, el botón de CTA se activa visualmente (pasa de estado "inactivo" a brillante y animado con un pulse suave).

2. **Días timeline:** cuando cada card entra al viewport, la línea lateral se "dibuja" hacia abajo progresivamente (clip-path animation). Los números de los días hacen un count-up rápido.

3. **Stats strip:** los números hacen count-up animation cuando entran al viewport (+1.200 va de 0 a 1.200 en 1.2 segundos).

4. **Select de etapa:** cuando el usuario selecciona una opción, aparece debajo un micro-mensaje personalizado:
   - "No tengo web" → `"Perfecto. El Día 1 es exactamente para vos."`
   - "Tengo web sin clientes" → `"El Día 3 va a ser tu favorito."`
   - "Quiero rehacer todo" → `"El Día 5 te da el mapa exacto."`

5. **Éxito del formulario:** confetti + animación de sobre enviándose + countdown hasta el primer email ("Tu Día 1 llega en ~14 minutos").

---

## 10. Jerarquía visual — lo que tiene que verse primero

En un buen lead magnet, el ojo del visitante debe recorrer este camino en los primeros 3 segundos:

```
1. Headline (dolor o promesa) — ¿esto es para mí?
2. Formulario — ¿qué me piden?
3. Botón de CTA — ¿qué gano?
4. Trust items — ¿es seguro?
```

Todo lo demás (testimonios, días, FAQ) es para quien no se convenció en los primeros 3 segundos. Es bueno tenerlo pero no puede competir visualmente con el camino de conversión principal.

### Implicaciones de diseño:
- El formulario debe tener más `z-index` visual que cualquier otra cosa — sombra más pronunciada, borde más definido, background más contrastado.
- En mobile, el formulario debe estar ANTES del contenido del curso (no después). El usuario mobile no hace scroll para encontrar el formulario.
- El botón de CTA debe ser, en términos de tamaño, el elemento más grande del formulario. Más grande que los labels, más grande que los inputs.

---

## 11. Mobile first — el above the fold en mobile

En mobile, la pantalla no puede mostrar un split de dos columnas. El orden debe ser:

```
1. Badge social proof: "1.200 empresarios ya lo tienen"
2. Headline grande (3 líneas máximo)
3. Subtítulo (2 líneas máximo)
4. FORMULARIO (completo, no colapsado, visible sin scroll)
5. Botón CTA (full width, grande)
6. Trust items
7. [resto del contenido debajo del fold]
```

El email preview de los 5 días se mueve abajo del formulario en mobile — no es la prioridad.

---

## 12. Checklist de implementación

### Fase 1 — Copy y contenido (sin tocar código)
- [ ] Reescribir headline y subtítulo del Hero
- [ ] Reescribir el header del formulario (`🎁 Es gratis. Tomalo ahora.`)
- [ ] Reescribir el texto del botón CTA
- [ ] Reescribir las opciones del select (más específicas y personales)
- [ ] Reescribir los títulos de los 5 días (ver §5)
- [ ] Agregar social proof counter al Hero (`+1.200 empresarios...`)
- [ ] Reescribir los 4 stats del strip
- [ ] Agregar sección "¿Por qué es gratis?" (ver §7)
- [ ] Reescribir cards de "¿Para quién?" como test de diagnóstico (ver §8)
- [ ] Reescribir intro de sección Diff
- [ ] Reescribir About (más humano, menos LinkedIn)
- [ ] Agregar 2 FAQ nuevas (ver §8)
- [ ] Reescribir CTA bottom
- [ ] Cambiar slug a `/curso-digital-gratis` + redirect

### Fase 2 — Diseño del formulario
- [ ] Agregar gradient border más pronunciado al formulario
- [ ] Aumentar tamaño del botón CTA
- [ ] Agregar micro-copy personalizado bajo el select (ver §9 punto 4)
- [ ] Rediseñar estado de éxito (ver §3 punto 6)
- [ ] Agregar badge de counter junto al formulario

### Fase 3 — Animaciones y micro-momentos
- [ ] Count-up en stats (whileInView)
- [ ] Timeline line draw animation para días
- [ ] Form button pulse cuando email field tiene contenido
- [ ] Éxito con confetti / sobre animado

### Fase 4 — Prueba social
- [ ] Agregar sección de testimonios (real o arquetipo creíble)
- [ ] Expandir el caso Supertramp (antes/después visual)
- [ ] Agregar JSON-LD structured data (Course + Organization)

---

## 13. Lo que NO hacer

- **No agregar más secciones** antes de mejorar las existentes. Más contenido no = más conversiones. Menos, pero mejor, convierte más.
- **No usar el mismo tono explicativo** que una newsletter o un blog. Este es un funnel. Cada oración tiene un trabajo: hacer que la siguiente se lea.
- **No esconder el formulario** detrás de demasiado contexto previo. En esta audiencia (empresarios ocupados), si no ven el formulario en 3 segundos, no convierten.
- **No mentir sobre el social proof**. Si `+1.200 empresarios` es inventado y alguien lo pregunta, destruye la credibilidad. Usar el número real, o una forma de decirlo que sea verdadera: `"Cada semana nuevos empresarios empiezan el curso"`.
