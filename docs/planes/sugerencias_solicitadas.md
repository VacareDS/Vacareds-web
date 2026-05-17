

## Sugerencias de mejora rápida — Conversión y calidad

### Alta prioridad (impacto directo en conversión)

**1. Agregar prueba social en el hero (debajo de los CTAs)**
El hero tiene trust logos ("LLC en Delaware", "Stripe · Mercury", "+8 proyectos") pero son fríos. Agregar una línea como:
> "Más de 8 empresas ya automatizaron con nosotros — incluyendo Supertramp Hostels (+30% facturación)"

junto a una fila de estrellas ★★★★★ aumentaría la confianza antes del primer scroll.

**2. Video testimonial:Modificar captura o thumbnail del video**
El video tenia una thumbail hecha con ia, es generica, mejor toma una captura del video cuando Theo aparece en pantalla, que se vea bien. O mejor aun puedes crear una con fotorrealismo con ia.

**3. CTA del hero: DEJAR SOLO EL PRIMARIO primario y eliminar el secundario**
Actualmente tenemos dos cta en el hero "Mostranos tu negocio →" y "Ver casos de éxito", pero los cta deben apuntar  a nuestra verdadera intencion de conversion, que es que el usuario agende una llamada con nosotros. Haz un solo botón que apunte a que el usuario agende una llamada con nosotros y quita el otro botón.

**4. Exit-intent o scroll-trigger popup**
Cuando el usuario lleva 60s en la página o hace scroll al 80% sin convertir, mostrar un popup pequeño: "¿Antes de irte — cuánto cuesta no tener sistema?" con un CTA directo. Herramienta: se puede hacer 100% en Next.js con un `useEffect` + `localStorage`. "Conversemos 15 min (Sin compromiso) →" o "¿Hablamos 15 min? (sin compromiso)"

**5. Sección Packs: agregar "¿No sabés cuál elegir?"**
Debajo de los 4 packs, agregar un CTA secundario: "¿No sabés cuál es el tuyo? Contanos tu situación y te recomendamos →" que abra el MeetingPopup. Reduce la parálisis de decisión.

---

### Media prioridad (calidad y SEO)

**6. Traducciones EN incompletas en el nav/footer**
El archivo `en.json` aún tiene varios campos en español (`Layout.Nav.services`: "Servicios", `cases`: "Casos", `Footer.brandDesc`, etc.). Esto hace que la versión EN de la web muestre texto mezclado. Recomendamos completar estas traducciones.

**7. Open Graph images personalizadas**
Actualmente no hay OG image configurada (`/public/og-image.png`). Una imagen de 1200×630px con el logo + "30% de facturación desde la web — Supertramp Hostels" mejora radicalmente el CTR en WhatsApp, LinkedIn y redes. Puede generarse con Cloudinary o `next/og`.

**8. Breadcrumbs visibles en páginas internas**
Los JSON-LD de breadcrumbs están implementados (bien para SEO) pero no son visibles en la UI. Agregar breadcrumbs visuales en páginas de casos de éxito y servicios mejora la navegación y las señales EEAT para Google.

**9. FAQ Schema ya está, pero las preguntas son genéricas**
Las preguntas del FAQ ("¿Cuánto cuesta?", "¿Cuánto tarda?") son correctas pero se puede agregar una pregunta específica sobre automatizaciones: "¿Qué se puede automatizar?" — es una búsqueda de volumen real y posiciona bien.

**10. Página /blog existe en el nav pero no tiene contenido propio**
Los 3 posts del BlogPreview apuntan a rutas como `/blog/seo-errores-comunes` que probablemente no existen. Crear aunque sea la página `/blog` con un `coming soon` elegante evita 404s y pérdida de credibilidad.

---

### Baja prioridad (pulido UX)

**11. Animación de entrada en el contador de métricas (hero derecho)**
Los `AnimatedCounter` en la sección de casos funcionan bien. Aplicar el mismo efecto a los números del lado derecho del hero (`30%`, `5+`, `30d`) aumentaría el engagement visual sin coste de performance. Cambiar ademas el texto de `30%`, `5+`, `30d` a "+8 Negocios con sistema activo", "3x Leads contactados sin intervención manual", "30d Entrega promedio", "24/7 El sistema trabaja por vos". Hacer lo mismo en el banner que se encuentra bajo el video tastimonial de supetramp. 


**12. Botón de WhatsApp: agregar tooltip al hover**
En desktop, al hacer hover sobre el botón flotante de WhatsApp, mostrar un tooltip "Consultá por WhatsApp" mejora la comprensión del CTA para usuarios que no reconocen el ícono de inmediato.

**13. Lazy loading explícito en VideoTestimonial**
El video en R2 se carga por `<video>` sin `preload="none"`. Agregar `preload="none"` y un poster visible reduce el LCP (Largest Contentful Paint) y mejora el Core Web Vitals — especialmente importante en mobile.

**14. "Cómo funciona" (renombrado de Automatizaciones) — ajustar el ID del anchor**
El link del nav apunta a `/#auto`. La sección en page.tsx tiene `id="auto"`. El nombre del anchor no necesita cambiar (funciona igual), pero si en el futuro se restructura la página, considerar renombrar a `id="como-funciona"` para coherencia semántica.

**15. En la seccion "nuestras soluciones" creemos que el texto "Ideal para:" compite visualmente con el texto de los titulos de los planes. Por lo que debes reducir su tamaño, ademas resume la descripcion ya que son demasiado largas, por ejemplo "Ideal para: negocios que recién comienzan en Google o que quieren ganar credibilidad digital y verse serios." resume a algo mas corto y que no compita visualmente con el titulo de los planes**

**16. El componente ExitIntentPopup Tiene texto Hardcodeado, es imperdonable. Debes cambiarlo a mensajes de i18n
**17. Quiero que el popup de agendar meet "Agendá una llamada" me genere un json y use un webhook (crea uno de prueba en .env.local) y que me muestre en consola que datos envia, no funcionara porque el webhook (que sera de n8n) es de prueba pero ya queda armado, asi luego n8n agenda la meet y responde un code 200 asi que el popup debe esperar eso, puedes usar una simulacion de webhook que responda un code 200 y asi ver que todo funcione 
**18. Revisa la navegabilidad porque tenemos otras urls que no son accesibles, tenemos casos de estudios, tenemos la landing de auditoria gratuita, el curso de 5 emails y el blog entre otros, todos los enlaces deben funcionar y la barra de navegacion superior (tanto en desktop como mobile o tablet) deben reformularse de forma profesional, ademas creare una landing para cada servicio como "Starter Presence", "Growth Machine"... asi que arma esa estructura, aun si en cada landing de momento me pones "proximamente" o algo por el estilo a fines de desarrollo temporal

19** Pegale una revision a la estructura web, a los interlinkings a los slug en ingles y en español y al seo profesional y dame al final del documento de reporte, una lista de sugerencias para mejorar el SEO y escalarlo. Queremos dominar nuestro nicho a nivel MUNDIAL.
---

## Notas técnicas

- El número de WhatsApp en `.env` es `NEXT_PUBLIC_WHATSAPP_NUMBER=+5493425258889`. El componente limpia el `+` y caracteres no numéricos para el link `wa.me/{number}`.
- El video de R2 es un archivo `.mp4` servido directamente. Verificar que el bucket de Cloudflare R2 tenga CORS habilitado para el dominio de producción (`vacaredigitalsolutions.com`) si aparecen errores de reproducción.
- El selector de idioma en el footer usa la misma lógica que el Nav (Link con prop `locale`). Funciona con next-intl v4.x.
