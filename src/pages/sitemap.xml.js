export async function get() {
  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://ayazqureshi.vercel.app/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>`,
    headers: {
      'Content-Type': 'application/xml',
    },
  };
}
{
  "name": "Ayaz Qureshi Portfolio",
  "short_name": "AyazQ",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFF9E9",
  "theme_color": "#FFF9E9",
  "description": "Ayaz Qureshi – Android & Flutter Developer Portfolio.",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}

