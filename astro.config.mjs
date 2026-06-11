// @ts-check
import { defineConfig } from 'astro/config';

// NOTA: cambia `site` por tu dominio definitivo cuando lo tengas.
// Para dominio propio en GitHub Pages, añade también public/CNAME con el dominio.
export default defineConfig({
  site: 'https://antoniopuerto.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // ES en "/", EN en "/en/"
    },
  },
});
