import { SITE_URL } from '../site.config.mjs';

const PAGES = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/mood-reactions', changefreq: 'monthly', priority: '0.8' },
  { path: '/mood-reactions/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/mood-reactions/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/mood-reactions/refund', changefreq: 'yearly', priority: '0.3' },
];

export async function GET() {
  const urls = PAGES.map(
    (p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
