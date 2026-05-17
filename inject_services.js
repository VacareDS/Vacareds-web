const fs = require('fs');

const esPath = 'c:/Users/Germen/Desktop/Germen Devs/vacare_ds_new_funnel_2026/messages/es.json';
const enPath = 'c:/Users/Germen/Desktop/Germen Devs/vacare_ds_new_funnel_2026/messages/en.json';

const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// The Services JSON structure
const servicesJSON = {
  "Hero": {
    "watermark": "SERVICIOS",
    "eyebrow": "Sistemas digitales para tu negocio",
    "title": "Una web que no genera<br />clientes no es una inversión.<br /><grad>Es un gasto.</grad>",
    "subtitle": "Construimos sistemas digitales que traen leads de forma autónoma — no webs bonitas que no convierten.",
    "cta": "Agendá una llamada →",
    "ctaSecondary": "Ver los paquetes ↓",
    "trust": {
      "delaware": "LLC registrada en Delaware",
      "projects": "+15 proyectos entregados",
      "supertramp": "30% más facturación · Supertramp"
    },
    "stats": [
      { "num": "30%", "label": "Facturación directa desde la web — Supertramp Hostels" },
      { "num": "$0", "label": "Costo de hosting en la mayoría de proyectos" },
      { "num": "30d", "label": "De primera llamada a sistema funcionando" },
      { "num": "5+", "label": "Automatizaciones n8n incluidas por proyecto" }
    ],
    "quote": "\"Pasamos de depender 100% de OTAs a generar el 30% de la facturación directo desde la web. En 6 meses.\"",
    "quoteAuthor": "— Theo · Supertramp Hostels, Cusco & Machu Picchu"
  },
  "WhyFailed": {
    "watermark": "ANTES",
    "eyebrow": "El problema con la mayoría de las agencias",
    "title": "Lo que te entregaron antes no funcionó.<br /><grad>No fue mala suerte.</grad>",
    "intro": "Hay tres razones por las que casi todos los proyectos digitales fallan. Si te pasó alguna, no es casualidad.",
    "cards": [
      {
        "num": "01",
        "title": "Diseñaron para verse bien, no para convertir",
        "body": "Una web que no está construida sobre la intención de búsqueda de tu cliente es un folleto digital. Bonito, inútil."
      },
      {
        "num": "02",
        "title": "Entregaron el proyecto y desaparecieron",
        "body": "Nadie configuró medición. Nadie miró si llegaban leads. El trabajo terminaba cuando vos pagabas. Tuyo el problema desde entonces."
      },
      {
        "num": "03",
        "title": "Todo dependía de vos para funcionar",
        "body": "Sin automatizaciones, cada lead requiere respuesta manual. Escalás contratando personas, no construyendo sistemas."
      }
    ],
    "footer": "Nosotros hacemos las tres cosas distintas.",
    "footerLink": "Ver cómo →"
  },
  "Case": {
    "eyebrow": "Un resultado real, antes de ver los paquetes"
  },
  "Packs": {
    "watermark": "PACKS",
    "eyebrow": "Los paquetes",
    "title": "Cinco soluciones.<br /><grad>Una para cada etapa.</grad>",
    "intro": "Cada paquete responde a un dolor específico. Si no sabés cuál corresponde, <a href='/es/auditoria-web-gratuita' class='text-[var(--mg)] font-bold no-underline hover:opacity-80'>empezá por la auditoría gratuita</a> — te lo decimos en 2 horas.",
    "includesTitle": "Qué incluye",
    "ctaDetail": "Ver detalles del paquete →",
    "items": [
      {
        "id": "starter",
        "slug": "starter-presence",
        "num": "01",
        "badge": "Primer paso",
        "name": "Starter Presence",
        "persona": "Para dueños de negocio que hoy son invisibles en Google y saben que cada semana pierden clientes que van a parar a la competencia.",
        "desc": "Si un cliente busca lo que ofrecés en Google y no te encuentra, ese cliente ya es de otro. El Starter Presence te pone en el mapa — con una web que aparece, que se ve profesional y que convierte visitantes en contactos reales desde el primer mes.",
        "cta": "Quiero aparecer en Google →",
        "includes": [
          "Web publicada en 30 días, sin costo mensual de hosting",
          "Aparecés en búsquedas locales en 30-60 días (SEO técnico + Google Business)",
          "Nunca perdés un lead: formulario con notificación automática a tu WhatsApp o email",
          "Sabés cuánta gente visita tu web y desde dónde (GA4 + Search Console + Clarity)",
          "1 automatización incluida que te ahorra tiempo desde el día uno"
        ],
        "result": "Tu negocio aparece en Google. Los leads llegan de forma organizada. Dejás de depender de que alguien te recomiende para que te encuentren."
      },
      {
        "id": "growth",
        "slug": "growth-machine",
        "num": "02",
        "badge": "⭐ El más elegido",
        "name": "Growth Machine",
        "persona": "Para negocios que tienen web y redes, pero los leads no llegan solos y el crecimiento depende de referidos que no escalan.",
        "desc": "Tenés presencia, pero no tenés sistema. La diferencia entre un negocio que escala y uno que estanca es si sus leads llegan solos o si alguien tiene que salir a buscarlos. Growth Machine construye el sistema que trabaja mientras vos te dedicás a lo tuyo.",
        "cta": "Quiero mi sistema de captación →",
        "includes": [
          "Todo lo del Starter, más:",
          "Sistema que captura leads y los nutre automáticamente (3 a 5 flujos n8n)",
          "Los prospectos agendan reuniones solos — sin coordinar por WhatsApp",
          "Email marketing automatizado: los leads que no convierten hoy, convierten en 7 días",
          "Integración de pagos (Stripe) — cobrás online sin fricción",
          "Dashboard semanal: leads, fuente, conversión en tiempo real"
        ],
        "result": "Tu sistema captura y nutre leads de forma autónoma desde la semana 1. Vos recibís el prospecto calificado, listo para cerrar."
      },
      {
        "id": "funnel",
        "slug": "full-funnel-360",
        "num": "03",
        "badge": "Canal orgánico",
        "name": "Full Funnel 360",
        "persona": "Para líderes que quieren dejar de depender del boca a boca y construir un canal de clientes nuevos cada mes — predecible, sin pagar publicidad.",
        "desc": "El boca a boca es un canal hermoso pero impredecible. Full Funnel 360 construye el canal orgánico que atrae clientes de forma sostenida: SEO que posiciona, contenido que convierte, y un funnel completo que lleva al visitante desde la búsqueda hasta la reunión agendada.",
        "cta": "Quiero mi canal orgánico →",
        "includes": [
          "Todo lo del Growth Machine, más:",
          "Tu web posiciona en Google para las búsquedas de tus clientes (SEO como arquitectura)",
          "Aparecer en las respuestas de ChatGPT, Perplexity y otros modelos IA (optimización LLM)",
          "10 piezas de contenido estratégico que trabajan para vos durante años",
          "Funnel completo: tráfico → lead → nurturing → calificación → llamada agendada",
          "CRM básico (Notion o Airtable) — sabés en qué etapa está cada prospecto",
          "Secuencia de onboarding 7-14 días que convierte leads tibios en clientes"
        ],
        "result": "En 90 días, tenés un canal de clientes orgánicos funcionando. En 6 meses, ese canal es predecible. No pagás publicidad. No dependés de referidos."
      },
      {
        "id": "ecommerce",
        "slug": "ecommerce-pro",
        "num": "04",
        "badge": "Tienda que vende",
        "name": "Ecommerce Pro",
        "persona": "Para marcas con producto que están dejando dinero sobre la mesa porque su tienda online no convierte — o directamente todavía no existe.",
        "desc": "Una tienda mal construida no es un canal de ventas — es un costo mensual que da trabajo sin generar retorno. Ecommerce Pro construye la tienda con las tres cosas que hacen que una venta online ocurra: velocidad, confianza y automatizaciones que hacen el trabajo de post-venta solas.",
        "cta": "Quiero mi tienda que vende →",
        "includes": [
          "Next.js + Stripe + Postgres — velocidad máxima, sin dependencia de plataforma",
          "WooCommerce optimizado si ya tenés WordPress",
          "Confirmación de pago inmediata al comprador (Stripe webhook → n8n)",
          "Seguimiento post-compra automático + solicitud de reseña",
          "Aviso interno por cada pedido — tu equipo siempre sabe",
          "Alerta de stock bajo — nunca te quedás sin saber"
        ],
        "result": "Una tienda que vende mientras dormís. Cada venta desencadena el proceso completo de forma automática. Tu equipo no pierde tiempo en tareas repetitivas."
      },
      {
        "id": "retainer",
        "slug": "automation-retainer",
        "num": "05",
        "badge": "Mensual",
        "name": "Automation Retainer",
        "persona": "Para negocios que ya tienen web y clientes, y saben que hay trabajo repetitivo que su equipo hace a mano — trabajo que una máquina podría hacer mejor, más rápido y sin errores.",
        "desc": "El tiempo de tu equipo es el recurso más caro que tenés. Cada tarea repetitiva que hacen a mano — responder consultas, enviar confirmaciones, actualizar planillas, hacer seguimientos — es tiempo que no se usa para crecer. El Retainer construye esas automatizaciones mes a mes.",
        "cta": "Quiero automatizar mi negocio →",
        "includes": [
          "Plan Base: hasta 6 horas de desarrollo de automatizaciones por mes",
          "Plan Pro: hasta 12 horas + integraciones con APIs externas",
          "1 a 2 flujos nuevos por mes según el plan elegido",
          "Mantenimiento y actualización de flujos existentes",
          "Revisión estratégica mensual (Plan Pro)",
          "Documentación de cada entrega — sabés exactamente qué tiene tu sistema"
        ],
        "result": "La calibración se hace en el onboarding. Cada mes tu sistema hace más — sin que vos tengas que pedírselo."
      }
    ]
  },
  "Questions": {
    "eyebrow": "Una pregunta rápida",
    "title": "¿Cuál de estas situaciones<br /><grad>describe tu negocio?</grad>",
    "intro": "Hacé click en la que más se parece a tu situación — te lleva directo al paquete que corresponde.",
    "cards": [
      { "pain": "No tengo web o la que tengo no aparece en Google", "pack": "Starter Presence" },
      { "pain": "Tengo web pero los leads no llegan solos", "pack": "Growth Machine" },
      { "pain": "Quiero clientes nuevos sin pagar publicidad", "pack": "Full Funnel 360" },
      { "pain": "Quiero vender mis productos online", "pack": "Ecommerce Pro" },
      { "pain": "Hay trabajo repetitivo que mi equipo hace a mano", "pack": "Automation Retainer" },
      { "pain": "No estoy seguro de cuál necesito", "pack": "Auditoría gratuita →" }
    ]
  },
  "Compare": {
    "watermark": "COMPARE",
    "eyebrow": "Tabla comparativa",
    "title": "Los cinco paquetes<br /><grad>de un vistazo.</grad>",
    "swipeHint": "← Deslizá para ver todos los paquetes →",
    "colResult": "Resultado",
    "features": [
      "Web rápida, sin hosting mensual",
      "Aparecer en Google",
      "SEO local (Google Business)",
      "Medición completa (GA4 + Clarity)",
      "Automatizaciones que ahorran tiempo",
      "Leads que se nutren solos por email",
      "Reuniones agendadas solas",
      "Cobrar online sin fricciones",
      "Contenido que posiciona durante años",
      "Aparecer en ChatGPT y otras IAs",
      "Canal de ventas online completo"
    ],
    "automationVals": ["1", "3-5", "5+", "5", "✓ mensual"],
    "forMe": "¿Es para mí?",
    "view": "Ver →"
  },
  "Process": {
    "watermark": "PROCESO",
    "eyebrow": "Cómo trabajamos",
    "title": "Cuatro pasos.<br /><grad>Sin sorpresas.</grad>",
    "intro": "La mayoría de los proyectos fallan antes de empezar: nadie se tomó el tiempo de entender el negocio. Nosotros arrancamos así:",
    "steps": [
      {
        "num": "1",
        "title": "Llamada de diagnóstico",
        "body": "30 minutos. Sin presentaciones de PowerPoint. Escuchamos tu negocio, tus objetivos y el momento en el que estás. Al final te decimos exactamente qué paquete corresponde — o si no somos la opción para vos."
      },
      {
        "num": "2",
        "title": "Propuesta en 48 horas",
        "body": "No en \"una semana\". En 48 horas tenés qué vamos a construir, en qué orden, cuándo y cuánto. Sin funcionalidades ocultas. Sin precios que cambian en el medio."
      },
      {
        "num": "3",
        "title": "Desarrollo y lanzamiento",
        "body": "Arrancamos. No desaparecemos. Ves el avance en tiempo real. 30 días para Starter y Growth; 45-60 para Full Funnel y Ecommerce. Si algo cambia, te avisamos antes de avanzar."
      },
      {
        "num": "4",
        "title": "Entrega, accesos y seguimiento",
        "body": "Publicamos, te entregamos todos los accesos (son tuyos), documentamos todo y hacemos check-in a los 30 días para medir resultados y ajustar. El proyecto no termina en el lanzamiento."
      }
    ]
  },
  "Guarantee": {
    "eyebrow": "Nuestra garantía",
    "title": "No cobramos trabajo<br />que no aprobaste.<br /><grad>No desaparecemos.</grad>",
    "p1": "Antes de empezar, sabés exactamente qué incluye el proyecto, cuánto cuesta y cuándo estará listo.",
    "p2": "Si en el proceso aparece algo fuera del scope original, te lo comunicamos antes de avanzar. Nunca facturamos trabajo extra sin aprobación.",
    "list": [
      "Propuesta detallada antes de arrancar — sabés qué recibís",
      "Precio fijo acordado — nada cambia sin tu OK",
      "Cronograma real con fechas de entrega concretas",
      "Todos los accesos entregados — son tuyos, no nuestros",
      "Documentación completa — si en un año necesitás algo, sabés cómo",
      "Check-in de 30 días post-lanzamiento incluido",
      "Facturación en USD — LLC registrada en Delaware"
    ],
    "case": {
      "tag": "Caso real — Supertramp Hostels",
      "beforeTitle": "Antes",
      "before": "100% reservas via OTAs<br />15-20% comisión/reserva<br />0 leads desde la web",
      "afterTitle": "Después (6 meses)",
      "after": "30% reservas directas<br />$0 comisión OTAs<br />Canal propio activo",
      "num": "30%",
      "label": "Facturación desde la web propia",
      "sub": "Partiendo de una web que no generaba ninguna reserva directa."
    }
  },
  "Faq": {
    "watermark": "FAQ",
    "eyebrow": "Preguntas frecuentes",
    "title": "Lo que todo el mundo pregunta<br /><grad>antes de agendar.</grad>",
    "items": [
      {
        "q": "¿Por qué no muestran precios?",
        "a": "Porque el precio correcto depende del alcance específico de tu proyecto. Lo que mostramos como \"paquete\" es un punto de partida. Preferimos darte un precio exacto en la propuesta, después de entender tu caso, que ponerte un número que después no se cumple."
      },
      {
        "q": "¿Trabajan con negocios de cualquier tamaño?",
        "a": "Sí, pero el punto de partida importa. Si sos un negocio muy chico que recién empieza, el Starter Presence probablemente sea suficiente. Si ya tenés operación y querés escalar, Growth Machine o Full Funnel son más adecuados. En la llamada te lo decimos con honestidad."
      },
      {
        "q": "¿Qué pasa si quiero cambios después de que entreguen?",
        "a": "Durante el desarrollo, los cambios están incluidos en el scope acordado. Después del lanzamiento, el check-in de 30 días incluye ajustes menores sin costo. Cambios mayores se presupuestan aparte — siempre antes de avanzar."
      },
      {
        "q": "¿Voy a depender de ustedes para mantener la web?",
        "a": "No. Todos los accesos y documentación te quedan a vos. Si el día de mañana querés cambiar de proveedor o hacer cambios con otro desarrollador, podés hacerlo sin problema. Construimos para que el cliente sea independiente."
      },
      {
        "q": "¿Cuánto tarda realmente?",
        "a": "Starter y Growth: promedio 30 días. Full Funnel y Ecommerce: 45-60 días. Estos tiempos arrancan desde que se aprueba la propuesta y se realiza el pago inicial. Si necesitás urgencia, mencionalo en la llamada."
      },
      {
        "q": "¿Trabajan con España y LATAM?",
        "a": "Con ambos — y con Estados Unidos. Estamos basados en Argentina (Córdoba), trabajamos con clientes en toda LATAM, España y EEUU. Facturamos en USD desde nuestra LLC en Delaware."
      }
    ]
  },
  "CtaFinal": {
    "headline": "Si funcionó para ellos,<br /><grad>puede funcionar para vos.</grad>",
    "subheadline": "Sin compromiso. Sin presentaciones de agencia. Solo 30 minutos para entender tu situación y decirte honestamente si podemos ayudarte.",
    "mainCta": "Agendá una llamada con Noelia →",
    "disclaimer": "Sin compromiso · Sin ventas agresivas · Respondemos en menos de 2 horas",
    "watermark": "EMPEZÁ",
    "cards": [
      {
        "tag": "Tengo web activa",
        "title": "Auditoría gratuita",
        "desc": "Analizamos tu web y en menos de 2 horas recibís un diagnóstico real con las 3 acciones concretas a ejecutar."
      },
      {
        "tag": "Todavía no tengo web",
        "title": "Mini-curso gratuito · 5 emails",
        "desc": "Lo que necesitás saber antes de invertir en tu presencia digital. Gratis, en 5 días."
      },
      {
        "tag": "Ya sé lo que necesito",
        "title": "Llamada de 30 minutos",
        "desc": "Hablamos. Escuchamos. Al final sabés exactamente qué paquete corresponde. Sin rodeos."
      }
    ]
  }
};

const enServicesJSON = {
  "Hero": {
    "watermark": "SERVICES",
    "eyebrow": "Digital systems for your business",
    "title": "A website that doesn't generate<br />clients is not an investment.<br /><grad>It's an expense.</grad>",
    "subtitle": "We build digital systems that bring leads autonomously — not pretty websites that don't convert.",
    "cta": "Schedule a call →",
    "ctaSecondary": "View packages ↓",
    "trust": {
      "delaware": "Delaware registered LLC",
      "projects": "+15 delivered projects",
      "supertramp": "30% revenue increase · Supertramp"
    },
    "stats": [
      { "num": "30%", "label": "Direct website revenue — Supertramp Hostels" },
      { "num": "$0", "label": "Hosting costs for most projects" },
      { "num": "30d", "label": "From first call to running system" },
      { "num": "5+", "label": "n8n automations included per project" }
    ],
    "quote": "\"We went from depending 100% on OTAs to generating 30% of our revenue directly from our website. In 6 months.\"",
    "quoteAuthor": "— Theo · Supertramp Hostels, Cusco & Machu Picchu"
  },
  "WhyFailed": {
    "watermark": "BEFORE",
    "eyebrow": "The problem with most agencies",
    "title": "What they delivered before didn't work.<br /><grad>It wasn't bad luck.</grad>",
    "intro": "There are three reasons why almost all digital projects fail. If any of these happened to you, it's no coincidence.",
    "cards": [
      {
        "num": "01",
        "title": "Designed to look good, not to convert",
        "body": "A website that isn't built on your client's search intent is a digital brochure. Pretty, but useless."
      },
      {
        "num": "02",
        "title": "They delivered the project and vanished",
        "body": "Nobody set up analytics. Nobody checked if leads were coming in. The work ended when you paid. From then on, it was your problem."
      },
      {
        "num": "03",
        "title": "Everything depended on you to work",
        "body": "Without automations, every lead requires a manual response. You scale by hiring people, not by building systems."
      }
    ],
    "footer": "We do all three things differently.",
    "footerLink": "See how →"
  },
  "Case": {
    "eyebrow": "A real result, before looking at the packages"
  },
  "Packs": {
    "watermark": "PACKS",
    "eyebrow": "The packages",
    "title": "Five solutions.<br /><grad>One for each stage.</grad>",
    "intro": "Each package solves a specific pain point. If you don't know which one you need, <a href='/en/free-web-audit' class='text-[var(--mg)] font-bold no-underline hover:opacity-80'>start with the free audit</a> — we'll tell you in 2 hours.",
    "includesTitle": "What's included",
    "ctaDetail": "View package details →",
    "items": [
      {
        "id": "starter",
        "slug": "starter-presence",
        "num": "01",
        "badge": "First step",
        "name": "Starter Presence",
        "persona": "For business owners who are invisible on Google today and know they lose clients to competitors every week.",
        "desc": "If a client searches for what you offer on Google and doesn't find you, that client belongs to someone else. Starter Presence puts you on the map — with a professional website that shows up and converts visitors into real contacts from month one.",
        "cta": "I want to show up on Google →",
        "includes": [
          "Website published in 30 days, zero monthly hosting costs",
          "Appear in local searches in 30-60 days (Technical SEO + Google Business)",
          "Never lose a lead: form with automatic notification to your WhatsApp or email",
          "Know how many people visit your site and from where (GA4 + Search Console + Clarity)",
          "1 automation included to save you time from day one"
        ],
        "result": "Your business appears on Google. Leads arrive organized. You stop depending on referrals to be found."
      },
      {
        "id": "growth",
        "slug": "growth-machine",
        "num": "02",
        "badge": "⭐ Most chosen",
        "name": "Growth Machine",
        "persona": "For businesses with a website and social media, but leads don't come automatically and growth depends on referrals.",
        "desc": "You have presence, but you don't have a system. The difference between a business that scales and one that stalls is whether leads arrive on their own or if someone has to go out and find them. Growth Machine builds the system that works while you focus on your business.",
        "cta": "I want my lead generation system →",
        "includes": [
          "Everything in Starter, plus:",
          "System that automatically captures and nurtures leads (3 to 5 n8n flows)",
          "Prospects schedule meetings on their own — no coordinating via WhatsApp",
          "Automated email marketing: leads that don't convert today, convert in 7 days",
          "Payment integration (Stripe) — collect payments online without friction",
          "Weekly dashboard: leads, sources, conversion in real-time"
        ],
        "result": "Your system captures and nurtures leads autonomously from week 1. You receive qualified prospects, ready to close."
      },
      {
        "id": "funnel",
        "slug": "full-funnel-360",
        "num": "03",
        "badge": "Organic channel",
        "name": "Full Funnel 360",
        "persona": "For leaders who want to stop depending on word of mouth and build a predictable channel of new clients every month — without paying for ads.",
        "desc": "Word of mouth is a beautiful but unpredictable channel. Full Funnel 360 builds the organic channel that attracts clients sustainably: SEO that ranks, content that converts, and a complete funnel that takes the visitor from search to scheduled meeting.",
        "cta": "I want my organic channel →",
        "includes": [
          "Everything in Growth Machine, plus:",
          "Your website ranks on Google for what your clients search (SEO as architecture)",
          "Appear in answers from ChatGPT, Perplexity, and other AI models (LLM optimization)",
          "10 strategic content pieces that work for you for years",
          "Complete funnel: traffic → lead → nurturing → qualification → scheduled call",
          "Basic CRM (Notion or Airtable) — you know what stage every prospect is in",
          "7-14 day onboarding sequence that converts warm leads into clients"
        ],
        "result": "In 90 days, you have a working organic client channel. In 6 months, that channel is predictable. You don't pay for ads. You don't depend on referrals."
      },
      {
        "id": "ecommerce",
        "slug": "ecommerce-pro",
        "num": "04",
        "badge": "Store that sells",
        "name": "Ecommerce Pro",
        "persona": "For product brands leaving money on the table because their online store doesn't convert — or simply doesn't exist yet.",
        "desc": "A poorly built store is not a sales channel — it's a monthly cost that creates work without generating return. Ecommerce Pro builds the store with the three things that make an online sale happen: speed, trust, and automations that handle post-sale work on their own.",
        "cta": "I want a store that sells →",
        "includes": [
          "Next.js + Stripe + Postgres — maximum speed, no platform dependency",
          "Optimized WooCommerce if you already have WordPress",
          "Immediate payment confirmation to the buyer (Stripe webhook → n8n)",
          "Automatic post-purchase follow-up + review request",
          "Internal alert for every order — your team always knows",
          "Low stock alert — you never run out without knowing"
        ],
        "result": "A store that sells while you sleep. Every sale triggers the complete process automatically. Your team doesn't waste time on repetitive tasks."
      },
      {
        "id": "retainer",
        "slug": "automation-retainer",
        "num": "05",
        "badge": "Monthly",
        "name": "Automation Retainer",
        "persona": "For businesses that already have a website and clients, and know there's repetitive work their team does by hand — work a machine could do better, faster, and without errors.",
        "desc": "Your team's time is your most expensive resource. Every repetitive task they do manually — answering queries, sending confirmations, updating spreadsheets, doing follow-ups — is time not spent growing. The Retainer builds those automations month by month.",
        "cta": "I want to automate my business →",
        "includes": [
          "Base Plan: up to 6 hours of automation development per month",
          "Pro Plan: up to 12 hours + integrations with external APIs",
          "1 to 2 new flows per month depending on the chosen plan",
          "Maintenance and updating of existing flows",
          "Monthly strategic review (Pro Plan)",
          "Documentation of every delivery — you know exactly what your system does"
        ],
        "result": "Calibration is done during onboarding. Every month your system does more — without you having to ask."
      }
    ]
  },
  "Questions": {
    "eyebrow": "A quick question",
    "title": "Which of these situations<br /><grad>describes your business?</grad>",
    "intro": "Click on the one that sounds most like your situation — it takes you straight to the corresponding package.",
    "cards": [
      { "pain": "I don't have a website or it doesn't show up on Google", "pack": "Starter Presence" },
      { "pain": "I have a website but leads don't come on their own", "pack": "Growth Machine" },
      { "pain": "I want new clients without paying for ads", "pack": "Full Funnel 360" },
      { "pain": "I want to sell my products online", "pack": "Ecommerce Pro" },
      { "pain": "There is repetitive work my team does by hand", "pack": "Automation Retainer" },
      { "pain": "I'm not sure which one I need", "pack": "Free audit →" }
    ]
  },
  "Compare": {
    "watermark": "COMPARE",
    "eyebrow": "Comparison table",
    "title": "All five packages<br /><grad>at a glance.</grad>",
    "swipeHint": "← Swipe to see all packages →",
    "colResult": "Result",
    "features": [
      "Fast website, no monthly hosting",
      "Appear on Google",
      "Local SEO (Google Business)",
      "Complete analytics (GA4 + Clarity)",
      "Time-saving automations",
      "Leads nurtured automatically via email",
      "Self-scheduled meetings",
      "Frictionless online payments",
      "Content that ranks for years",
      "Appear in ChatGPT and other AIs",
      "Complete online sales channel"
    ],
    "automationVals": ["1", "3-5", "5+", "5", "✓ monthly"],
    "forMe": "Is it for me?",
    "view": "View →"
  },
  "Process": {
    "watermark": "PROCESS",
    "eyebrow": "How we work",
    "title": "Four steps.<br /><grad>No surprises.</grad>",
    "intro": "Most projects fail before they start: nobody took the time to understand the business. We start like this:",
    "steps": [
      {
        "num": "1",
        "title": "Diagnostic call",
        "body": "30 minutes. No PowerPoint presentations. We listen to your business, your goals, and where you are right now. At the end we tell you exactly which package fits — or if we aren't the right option for you."
      },
      {
        "num": "2",
        "title": "Proposal in 48 hours",
        "body": "Not in \"a week\". In 48 hours you have what we will build, in what order, when, and how much. No hidden features. No prices that change halfway through."
      },
      {
        "num": "3",
        "title": "Development and launch",
        "body": "We start. We don't disappear. You see the progress in real time. 30 days for Starter and Growth; 45-60 for Full Funnel and Ecommerce. If anything changes, we tell you before proceeding."
      },
      {
        "num": "4",
        "title": "Delivery, access, and follow-up",
        "body": "We publish, hand over all access (they are yours), document everything, and do a 30-day check-in to measure results and adjust. The project doesn't end at launch."
      }
    ]
  },
  "Guarantee": {
    "eyebrow": "Our guarantee",
    "title": "We don't charge for work<br />you didn't approve.<br /><grad>We don't disappear.</grad>",
    "p1": "Before starting, you know exactly what the project includes, how much it costs, and when it will be ready.",
    "p2": "If something outside the original scope comes up during the process, we communicate it before proceeding. We never bill for extra work without approval.",
    "list": [
      "Detailed proposal before starting — you know what you get",
      "Agreed fixed price — nothing changes without your OK",
      "Real schedule with concrete delivery dates",
      "All access handed over — they are yours, not ours",
      "Complete documentation — if you need something in a year, you know how",
      "30-day post-launch check-in included",
      "USD billing — Delaware registered LLC"
    ],
    "case": {
      "tag": "Real case — Supertramp Hostels",
      "beforeTitle": "Before",
      "before": "100% reservations via OTAs<br />15-20% commission/reservation<br />0 leads from website",
      "afterTitle": "After (6 months)",
      "after": "30% direct reservations<br />$0 OTA commissions<br />Active owned channel",
      "num": "30%",
      "label": "Direct website revenue",
      "sub": "Starting from a website that generated zero direct reservations."
    }
  },
  "Faq": {
    "watermark": "FAQ",
    "eyebrow": "Frequently asked questions",
    "title": "What everyone asks<br /><grad>before scheduling.</grad>",
    "items": [
      {
        "q": "Why don't you show prices?",
        "a": "Because the right price depends on the specific scope of your project. What we show as a \"package\" is a starting point. We prefer to give you an exact price in the proposal, after understanding your case, rather than putting up a number that won't be honored later."
      },
      {
        "q": "Do you work with businesses of any size?",
        "a": "Yes, but the starting point matters. If you're a very small business just starting out, Starter Presence will probably be enough. If you already have operations and want to scale, Growth Machine or Full Funnel are more suitable. We'll tell you honestly during the call."
      },
      {
        "q": "What happens if I want changes after delivery?",
        "a": "During development, changes are included in the agreed scope. After launch, the 30-day check-in includes minor adjustments at no cost. Major changes are budgeted separately — always before proceeding."
      },
      {
        "q": "Will I depend on you to maintain the website?",
        "a": "No. All access and documentation belongs to you. If tomorrow you want to switch providers or make changes with another developer, you can do so without a problem. We build so the client is independent."
      },
      {
        "q": "How long does it really take?",
        "a": "Starter and Growth: average 30 days. Full Funnel and Ecommerce: 45-60 days. These timelines start from when the proposal is approved and the initial payment is made. If you have urgency, mention it on the call."
      },
      {
        "q": "Do you work with Europe and LATAM?",
        "a": "With both — and with the United States. We are based in Argentina, we work with clients throughout LATAM, Spain, and the US. We bill in USD from our Delaware LLC."
      }
    ]
  },
  "CtaFinal": {
    "headline": "If it worked for them,<br /><grad>it can work for you.</grad>",
    "subheadline": "No commitment. No agency presentations. Just 30 minutes to understand your situation and honestly tell you if we can help.",
    "mainCta": "Schedule a call with Noelia →",
    "disclaimer": "No commitment · No aggressive sales · We respond in less than 2 hours",
    "watermark": "START",
    "cards": [
      {
        "tag": "I have an active website",
        "title": "Free audit",
        "desc": "We analyze your website and in under 2 hours you receive a real diagnosis with 3 concrete actions to execute."
      },
      {
        "tag": "I don't have a website yet",
        "title": "Free mini-course · 5 emails",
        "desc": "What you need to know before investing in your digital presence. Free, in 5 days."
      },
      {
        "tag": "I know what I need",
        "title": "30-minute call",
        "desc": "We talk. We listen. At the end you know exactly which package fits. No beating around the bush."
      }
    ]
  }
};

esData.Services = servicesJSON;
enData.Services = enServicesJSON;

fs.writeFileSync(esPath, JSON.stringify(esData, null, 2));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
