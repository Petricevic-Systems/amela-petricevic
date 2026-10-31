import type { APIRoute } from 'astro';
import site from '../data/site.json';
import { link } from '../utils/url';

// Dok je sampleContent uključen (demo), pretraživači ne indeksiraju stranicu.
export const GET: APIRoute = ({ site: siteUrl }) =>
  new Response(
    site.sampleContent
      ? `User-agent: *
Disallow: /
`
      : `User-agent: *
Allow: /
Disallow: ${link('/admin/')}
Disallow: ${link('/kontakt/hvala')}

Sitemap: ${new URL(link('/sitemap-index.xml'), siteUrl).href}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
