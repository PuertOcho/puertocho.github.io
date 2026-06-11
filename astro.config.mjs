// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://antoniopuerto.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // ES en "/", EN en "/en/"
    },
  },
});
