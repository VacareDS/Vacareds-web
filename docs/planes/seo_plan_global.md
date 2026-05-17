
## Plan SEO para dominio global — vacaredigitalsolutions.com

**Objetivo:** Posicionamiento en LATAM (AR, MX, CO, PE, CL), España y USA en el nicho de agencias de automatización + marketing digital para PYMEs.

---

### Estado actual (verificado en sesión)

| Ítem | Estado |
|------|--------|
| `hreflang` ES/EN con `x-default` | ✅ Implementado vía `buildPageMeta()` |
| Canonical por página | ✅ Implementado en páginas principales |
| Sitemap bilingüe | ✅ Actualizado con blog, servicios, casos |
| JSON-LD Organization | ✅ En homepage vía `JsonLd` |
| JSON-LD BreadcrumbList | ✅ En casos de éxito |
| JSON-LD FAQ | ✅ En homepage |
| Open Graph image | ✅ Dinámica vía `opengraph-image.tsx` |
| `preload="none"` en video | ✅ Ya implementado |
| Blog indexable | ✅ Creado con 3 artículos placeholder |
| Service landing pages | ✅ ES + EN para los 4 servicios |

---

### Sugerencias priorizadas (15+)

#### 🔴 Alta prioridad — impacto directo en rankings

**1. Añadir `buildPageMeta()` a todas las páginas de servicio**
Las páginas `/servicios/growth-machine`, `/servicios/full-funnel-360`, etc. no tienen hreflang todavía. Adaptar `buildPageMeta()` para aceptar paths arbitrarios (no solo los de `navigation.ts`) o agregar el bloque `alternates` manualmente en cada `generateMetadata`. Impacto: crawl correcto por Google en todos los idiomas.

**2. Keyword research por servicio + intención de búsqueda**
Cada landing de servicio debe tener su keyword principal en: `<title>`, `<h1>`, primer párrafo, URL, meta description y alt de imagen principal.
- Starter Presence → "diseño web para pequeñas empresas"
- Growth Machine → "agencia de automatización para negocios"
- Full Funnel 360 → "embudo de ventas digital automatizado"
- Automation Retainer → "mantenimiento de automatizaciones n8n"

**3. Blog: publicar artículos reales (no placeholder)**
Los 3 slugs del blog (`/seo-errores-comunes`, `/n8n-vs-zapier`, `/dejar-de-depender-de-instagram`) deben tener páginas reales con contenido de mínimo 1.500 palabras. Son búsquedas de volumen real en ES. Agregar `Article` schema en cada post.

**4. Cluster de contenido para n8n**
Crear 4-6 artículos centrados en n8n (la herramienta diferencial). Ejemplos:
- "Cómo conectar WhatsApp con tu CRM usando n8n"
- "n8n self-hosted vs cloud: cuál elegir en 2026"
- "Automatizar emails de bienvenida con n8n + Gmail"
Estos posicionan en búsquedas de cola larga con alta conversión.

**5. Schema `Service` en cada landing de servicio**
Agregar JSON-LD de tipo `Service` con `name`, `description`, `provider`, `areaServed` (LATAM, ES, US) y `offers`. Esto mejora las señales EEAT y puede generar rich snippets.

**6. Página de "Casos de éxito" index con schema `ItemList`**
La página `/casos-de-exito` existe pero debe tener un `ItemList` JSON-LD con los casos. Además, agregar visualmente: resumen de resultado ("+30% facturación"), logo del cliente y categoría.

---

#### 🟡 Media prioridad — escalabilidad y autoridad

**7. Interlinking sistemático homepage → servicios**
El texto de las tarjetas de packs ya tiene el nombre del servicio, pero no linkea a las landings individuales (`/servicios/growth-machine`). Agregar link interno desde PackBlock o desde la sección de descripción. Objetivo: distribuir PageRank hacia las landings de servicio.

**8. Interlinking blog → servicios**
Cada artículo del blog debe enlazar a al menos 2 servicios relevantes en el cuerpo del texto. Ejemplo: artículo de SEO → link a "Starter Presence". Artículo de automatización → link a "Growth Machine".

**9. Open Graph personalizado por página**
Actualmente la OG image es dinámica pero genérica. Crear variantes específicas por servicio (ej. "Growth Machine — +300% leads automatizados") y para el caso Supertramp (foto real + métrica). Mejora el CTR en LinkedIn, WhatsApp y Twitter/X.

**10. Crear páginas de destino por país/región**
Para dominar búsquedas locales como "agencia digital Buenos Aires" o "automatización marketing México":
- `/es/ar/` → "Vacare en Argentina — Buenos Aires"
- `/es/mx/` → "Vacare en México"
- `/es/co/` → "Vacare en Colombia"
Estas páginas son delgadas pero con schema `LocalBusiness` y reseñas locales pueden posicionar rápido.

**11. Google Business Profile (GBP)**
Crear o reclamar el GBP para "Vacare Digital Solutions" con sede en Argentina/Delaware. Publicar updates semanales vinculando al blog. Impacta el SEO local en búsquedas de "agencia digital [ciudad]".

**12. Velocidad de carga — reducir LCP**
Verificar que todas las imágenes `<img>` usen `next/image` con `priority` en el hero y `loading="lazy"` en el resto. El logo en el Nav (`/images/logo.webp`) y las fotos del equipo deberían ser `next/image` para tener srcset automático.

---

#### 🟢 Baja prioridad — pulido y escalado

**13. Breadcrumbs visuales en todas las páginas internas**
Ya hay BreadcrumbJsonLd pero los breadcrumbs visuales solo están en supertramp. Extenderlos a: `/servicios/*`, `/blog/*`, `/casos-de-exito/*`. Mejora UX + señales EEAT.

**14. Implementar `robots.txt` explícito**
Crear `public/robots.txt` con:
```
User-agent: *
Allow: /
Sitemap: https://vacaredigitalsolutions.com/sitemap.xml
```
Disallow: `/api/`, `/_next/`. Actualmente Next.js genera uno por defecto pero es mejor tener control explícito.

**15. Agregar `Review` schema en la homepage**
El testimonio de Theo ya tiene ReviewJsonLd en la página del caso. Agregar también en la homepage una `AggregateRating` con el promedio de reseñas (al menos 3 reseñas reales de clientes). Esto puede generar estrellas en los snippets.

**16. Estrategia de link building para LATAM**
- Publicar artículos en comunidades: Indie Hackers ES, ProductoLatam, Reddit r/emprendimiento
- Pitch a newsletters de emprendimiento (LaNew, Lenny's Newsletter ES)
- Co-crear contenido con n8n (partners del ecosistema)
- Aparecer en directorios: Clutch, GoodFirms, AgenciasSEO.net

**17. FAQ Schema en páginas de servicio**
Cada landing de servicio debería tener 3-4 preguntas frecuentes con FAQ schema. Ejemplo en Growth Machine: "¿Cuánto tarda la implementación?", "¿Funciona para e-commerce?", "¿Qué automatizaciones incluye?". Estos pueden aparecer como rich snippets y reducen el bounce rate.

**18. `<link rel="preconnect">` para recursos externos**
Agregar en el layout preconnect a: Cloudflare R2 (`pub-cde5ab30151d4376815d88eb38481483.r2.dev`), Google Fonts (si se usan) y cal.com (si se embede). Reduce el TTFB para recursos de terceros.

**19. Monitoreo con Search Console + alertas**
Conectar Google Search Console con la propiedad `vacaredigitalsolutions.com` y configurar alertas para:
- Caída de CTR >20% en keywords principales
- Errores 404 (especialmente en rutas de servicio)
- Problemas de cobertura del sitemap

---

### KPIs objetivo (6 meses)

| Métrica | Hoy | Objetivo |
|---------|-----|----------|
| Palabras clave en top 10 (ES) | ~0 | 15+ |
| Tráfico orgánico mensual | ~0 | 500+ visitas |
| Domain Rating (Ahrefs) | ~0-10 | 20+ |
| Backlinks únicos | <10 | 50+ |
| Conversiones desde orgánico | ~0 | 3-5 leads/mes |

---

*Documento generado en sesión 2026-05-17. Actualizar trimestralmente.*
