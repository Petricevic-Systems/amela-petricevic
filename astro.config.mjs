// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './src/data/site.json' with { type: 'json' };

export default defineConfig({
  // Adresa se mijenja u src/data/site.json ("url"); putanja iza domene postaje base.
  site: new URL(site.url).origin,
  base: new URL(site.url).pathname,
  trailingSlash: 'ignore',
  // Spremno za engleski: dodajte 'en' u locales i stranice u src/pages/en/.
  i18n: {
    defaultLocale: 'bs',
    locales: ['bs'],
    routing: { prefixDefaultLocale: false },
  },
  // Oswald (ime) se preuzima s Google Fonts pri buildu i služi s vlastite domene.
  // Lato 2.0 je u src/assets/fonts (Googleova verzija nema č i đ) — vidi src/styles/fonts.css.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-oswald',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kontakt/hvala'),
    }),
  ],
});
