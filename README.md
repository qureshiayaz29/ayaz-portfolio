# Ayaz Qureshi Portfolio

Personal portfolio for Ayaz Qureshi, live at [ayazqureshi.com](https://ayazqureshi.com).
Built with Astro and Tailwind CSS, deployed on Vercel as a static site.

## Pages
- `/` — hero, skills, professional experience (filterable), featured projects
- `/projects` — every project, filterable by category, with expandable details
- `/mood-reactions` — product page for the Mood Reactions Chrome extension, plus its privacy, terms and refund pages
- `/404` and a generated `/sitemap.xml`

## Editing content
Most content lives in data files, so you rarely need to touch layout:
- `src/data/projects.ts` — projects (name, category, status, links)
- `src/data/experience.ts` — experience entries
- `src/data/moodReactions.ts` — Mood Reactions copy, prices, store and checkout links
- Featured projects on the home page are picked by name in `src/pages/index.astro`

## Tech stack
- Astro 5, Tailwind CSS 3
- [Motion](https://motion.dev) for scroll and fade-in animations (respects reduced motion)
- Vercel Web Analytics
- Dark theme, teal accent `#1D9E75`; fonts Instrument Serif, Geist, DM Mono

## Local development
Requires Node >= 18.20.8 (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the build
```

## Deployment
Pushes to `main` deploy on Vercel. Security headers and the build config are in `vercel.json`.
Canonical and Open Graph URLs come from `SITE_URL` in `src/site.config.mjs`.

## License
All original content © Ayaz Qureshi.
