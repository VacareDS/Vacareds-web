const fs = require('fs');

function enforceLocale(filePath, localeVal) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { notFound }')) {
    content = 'import { notFound } from "next/navigation";\n' + content;
  }

  // Inject locale check after setRequestLocale or after await params
  if (!content.includes('notFound();')) {
    content = content.replace(/const \{ locale \} = await params;/, `const { locale } = await params;\n  if (locale !== '${localeVal}') notFound();`);
  } else {
    // replace if it exists
    content = content.replace(/if \(locale !== '[a-z]{2}'\) notFound\(\);/g, `if (locale !== '${localeVal}') notFound();`);
  }
  
  fs.writeFileSync(filePath, content);
}

// 1. Audit
const auditContent = fs.readFileSync('src/app/[locale]/auditoria-web-gratuita/page.tsx', 'utf8');
fs.writeFileSync('src/app/[locale]/free-web-audit/page.tsx', auditContent);
enforceLocale('src/app/[locale]/auditoria-web-gratuita/page.tsx', 'es');
enforceLocale('src/app/[locale]/free-web-audit/page.tsx', 'en');

// 2. Course
const courseContent = fs.readFileSync('src/app/[locale]/curso-web-gratis/page.tsx', 'utf8'); 
fs.writeFileSync('src/app/[locale]/free-web-course/page.tsx', courseContent);
enforceLocale('src/app/[locale]/curso-web-gratis/page.tsx', 'es');
enforceLocale('src/app/[locale]/free-web-course/page.tsx', 'en');

// 3. Case Studies
const casesContent = fs.readFileSync('src/app/[locale]/casos-de-exito/page.tsx', 'utf8');
fs.writeFileSync('src/app/[locale]/case-studies/page.tsx', casesContent);
enforceLocale('src/app/[locale]/casos-de-exito/page.tsx', 'es');
enforceLocale('src/app/[locale]/case-studies/page.tsx', 'en');
