# Ayaz Qureshi Portfolio

Single-screen, instant-loading personal portfolio built with Astro + Tailwind CSS.

## Features
- Non-scrollable single viewport layout (desktop & mobile) using responsive scaling (vh-based typography)
- Inline animated SVG avatar (float, wave, blink)
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD Person schema
- Preloaded Google Fonts (Poppins, Nunito, Inter) for fast rendering
- Accessible social icons and focus styles
- Skills, projects, and contact CTA
- Manifest, Robots.txt, Sitemap

## Tech Stack
- Astro
- Tailwind CSS (v3)

## Requirements
Node >= 18.20.8 (recommend 20.x). See `.nvmrc`.

## Local Development
```bash
nvm use || echo "Ensure Node >=18.20.8"
npm install
npm run dev
```
Visit: http://localhost:4321

## Production Build
```bash
npm run build
npm run preview
```

## Deploy on Vercel
1. Push repo to GitHub.
2. Import into Vercel (framework auto-detected as Astro).
3. Build Command: `astro build` Output: `dist`
4. Deploy.

## Lighthouse Targets
- Performance > 95 mobile & desktop
- No layout shifts (CLS ~0)

## Accessibility
- aria-labels on interactive SVG links
- High color contrast

## Future Improvements
- Add email obfuscation
- Add dark mode toggle
- Add configurable project list via JSON

## License
All original content © Ayaz Qureshi.
20.3.0

# ayaz-portfolio
