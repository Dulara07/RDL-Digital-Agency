# RDL Digital Agency website

Marketing site for [RDL Digital Agency](https://rdldigitalagency.com) — React 18, Vite, Tailwind CSS and framer-motion, deployed on Vercel.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build + prerender (static HTML per route, sitemap.xml)
npm run preview  # serve the production build
```

## Where things live

- `src/data/` — all site content: company details (`site.ts`), services, case studies, insights, FAQs, packages.
- `src/pages/` — one component per route (routes are declared in `src/App.tsx`).
- `src/components/` — layout, page sections, cards and UI primitives.
- `scripts/prerender.mjs` — post-build crawl that writes static HTML and the sitemap. If headless Chrome is unavailable it skips and keeps the SPA build.
- `public/` — images, brand assets, `og-default.jpg` (default social share image) and `robots.txt`.
