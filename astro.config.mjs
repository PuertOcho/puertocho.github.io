// @ts-check
import { defineConfig } from 'astro/config';

// NOTA: si compras un dominio propio (p. ej. antoniopuerto.dev), cambia `site`
// y añade public/CNAME con el dominio. Mientras tanto: GitHub Pages de usuario.
export default defineConfig({
  site: 'https://puertocho.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // ES en "/", EN en "/en/"
    },
  },
});
