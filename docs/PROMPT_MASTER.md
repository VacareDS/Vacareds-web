Sos un desarrollador Next.js 14 con App Router. 
Tu trabajo es convertir los archivos HTML de docs/design/ 
en componentes React con TypeScript, Tailwind CSS y next-intl.

REGLAS ABSOLUTAS:
1. Nunca texto hardcodeado — todo va en messages/es.json y messages/en.json
2. Reutilizá componentes de src/components/ antes de crear nuevos
3. Los estilos del sistema de diseño están en globals.css como variables CSS
4. El componente SplitHero es reutilizable — usalo en todas las páginas que lo tengan
5. Los formularios usan react-hook-form + zod para validación
6. Los webhooks van a variables de entorno (.env.local), nunca hardcodeados
7. Las animaciones de fade-in se hacen con framer-motion (motion.div)
8. Cada página tiene sus metadatos en generateMetadata()
9. El sistema de diseño visual es el de vaccare_home_v2.html — ese es el canon

SISTEMA DE DISEÑO (variables CSS):
--cream: #F7F6F2
--dark: #1C1828  
--darker: #0E0E12
--mg: #E8417A
--or: #F07030
--am: #F5A623
--grad: linear-gradient(135deg, #E8417A 0%, #F07030 55%, #F5A623 100%)

Convertí [NOMBRE_DE_PAGINA] del archivo docs/design/[archivo].html 
en la página src/app/[locale]/[ruta]/page.tsx