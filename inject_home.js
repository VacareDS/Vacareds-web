const fs = require('fs');

function updateJson(file, addData) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  if (!data.Home.VideoTestimonial) {
    data.Home.VideoTestimonial = addData.VideoTestimonial;
  }
  if (!data.Home.BlogPreview) {
    data.Home.BlogPreview = addData.BlogPreview;
  }
  if (!data.Home.FaqSection) {
    data.Home.FaqSection = addData.FaqSection;
  }
  if (!data.Home.CtaFinalWatermark) {
    data.Home.CtaFinalWatermark = addData.CtaFinalWatermark;
  }
  if (!data.Layout.Footer.guides) {
    data.Layout.Footer.guides = addData.FooterGuides;
  }
  
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const esData = {
  VideoTestimonial: {
    eyebrow: "Caso real",
    quote: "El 30% de nuestra facturación ahora viene de nuestra propia web. Antes dependíamos 100% de Booking.",
    author: "Theo",
    role: "Manager General, Supertramp Hostels"
  },
  BlogPreview: {
    eyebrow: "Recursos",
    title: "Guías para <grad>crecer online</grad>",
    subtitle: "Artículos prácticos sobre marketing digital, SEO, automatizaciones y estrategia para negocios que quieren dejar de depender de referidos.",
    ctaText: "Ver todas las guías →",
    posts: [
      { category: "SEO", title: "Por qué tu web no aparece en Google (y cómo arreglarlo)", excerpt: "Los 5 errores técnicos que más penaliza Google y que el 70% de los sitios tienen sin saberlo.", link: "/blog/seo-errores-comunes" },
      { category: "Automatizaciones", title: "n8n vs Zapier: cuál conviene para tu negocio", excerpt: "Comparamos costos, flexibilidad y escalabilidad de las dos plataformas de automatización más usadas.", link: "/blog/n8n-vs-zapier" },
      { category: "Estrategia", title: "Cómo dejar de depender de Instagram para vender", excerpt: "El paso a paso para construir un canal propio que genera leads y ventas sin depender de algoritmos.", link: "/blog/dejar-de-depender-de-instagram" }
    ]
  },
  FaqSection: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que todos preguntan <grad>antes de empezar.</grad>",
    items: [
      { q: "¿Cuánto cuesta trabajar con Vacare?", a: "Nuestros paquetes arrancan desde $1,500 USD (Starter Presence) hasta $5,000 USD (Full Funnel 360). También ofrecemos un retainer mensual desde $500 USD/mes. Cada proyecto se adapta a tu etapa y presupuesto." },
      { q: "¿Cuánto tiempo tarda en estar listo?", a: "Un proyecto típico tarda entre 30 y 45 días desde la estrategia hasta publicado. Proyectos más simples pueden estar listos en 2-3 semanas. Siempre arrancamos con una sesión de estrategia antes de escribir una línea de código." },
      { q: "¿Necesito saber de tecnología?", a: "No. Nos encargamos de todo lo técnico: hosting, dominio, SSL, DNS, deploys y mantenimiento. Vos te enfocás en tu negocio y nosotros en que tu sistema digital funcione." },
      { q: "¿Qué incluye el mantenimiento mensual?", a: "El Automation Retainer incluye hasta 6 o 12 horas de desarrollo mensual: flujos nuevos en n8n, mejoras en la web, optimización de conversión, y documentación completa de cada cambio." },
      { q: "¿Trabajan con negocios fuera de Argentina?", a: "Sí. Somos una LLC en Delaware, EEUU. Trabajamos con clientes en toda Latinoamérica, España y Estados Unidos. Facturamos en USD vía Stripe." }
    ]
  },
  CtaFinalWatermark: "EMPEZÁ",
  FooterGuides: {
    title: "Guías",
    items: [
      { label: "SEO para negocios", link: "/blog/seo-errores-comunes" },
      { label: "n8n vs Zapier", link: "/blog/n8n-vs-zapier" },
      { label: "Canal propio de ventas", link: "/blog/dejar-de-depender-de-instagram" }
    ]
  }
};

const enData = {
  VideoTestimonial: {
    eyebrow: "Real Case",
    quote: "30% of our revenue now comes from our own website. Before, we relied 100% on Booking.",
    author: "Theo",
    role: "General Manager, Supertramp Hostels"
  },
  BlogPreview: {
    eyebrow: "Resources",
    title: "Guides to <grad>grow online</grad>",
    subtitle: "Practical articles on digital marketing, SEO, automation, and strategy for businesses that want to stop relying on referrals.",
    ctaText: "View all guides →",
    posts: [
      { category: "SEO", title: "Why your website isn't on Google (and how to fix it)", excerpt: "The 5 technical errors Google penalizes most and that 70% of sites have without knowing it.", link: "/blog/seo-errores-comunes" },
      { category: "Automation", title: "n8n vs Zapier: which is better for your business", excerpt: "We compare costs, flexibility, and scalability of the two most used automation platforms.", link: "/blog/n8n-vs-zapier" },
      { category: "Strategy", title: "How to stop depending on Instagram to sell", excerpt: "The step-by-step guide to building your own channel that generates leads and sales without depending on algorithms.", link: "/blog/dejar-de-depender-de-instagram" }
    ]
  },
  FaqSection: {
    eyebrow: "FAQ",
    title: "What everyone asks <grad>before starting.</grad>",
    items: [
      { q: "How much does it cost to work with Vacare?", a: "Our packages start from $1,500 USD (Starter Presence) to $5,000 USD (Full Funnel 360). We also offer a monthly retainer starting at $500 USD/month. Every project is tailored to your stage and budget." },
      { q: "How long does it take to be ready?", a: "A typical project takes between 30 and 45 days from strategy to launch. Simpler projects can be ready in 2-3 weeks. We always start with a strategy session before writing a single line of code." },
      { q: "Do I need to know about technology?", a: "No. We handle everything technical: hosting, domain, SSL, DNS, deployments, and maintenance. You focus on your business, and we make sure your digital system works." },
      { q: "What does the monthly maintenance include?", a: "The Automation Retainer includes up to 6 or 12 hours of monthly development: new flows in n8n, website improvements, conversion optimization, and complete documentation of every change." },
      { q: "Do you work with businesses outside Argentina?", a: "Yes. We are an LLC in Delaware, USA. We work with clients across Latin America, Spain, and the United States. We invoice in USD via Stripe." }
    ]
  },
  CtaFinalWatermark: "START",
  FooterGuides: {
    title: "Guides",
    items: [
      { label: "SEO for business", link: "/blog/seo-errores-comunes" },
      { label: "n8n vs Zapier", link: "/blog/n8n-vs-zapier" },
      { label: "Your own sales channel", link: "/blog/dejar-de-depender-de-instagram" }
    ]
  }
};

updateJson('messages/es.json', esData);
updateJson('messages/en.json', enData);
