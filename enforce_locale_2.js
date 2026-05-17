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
enforceLocale('src/app/[locale]/auditoria-web-gratuita/page.tsx', 'es');
enforceLocale('src/app/[locale]/free-web-audit/page.tsx', 'en');

// 2. Course
enforceLocale('src/app/[locale]/curso-web-gratis/page.tsx', 'es');
enforceLocale('src/app/[locale]/free-web-course/page.tsx', 'en');
