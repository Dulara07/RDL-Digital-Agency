// Post-build step: writes dist/sitemap.xml from the route table and the data
// files behind the dynamic routes. Needs no browser, so it runs on every
// deploy (Vercel's build image has no Chrome, which makes prerender.mjs skip).
// When prerender.mjs does run, it overwrites this file with its crawled sitemap.

import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://rdldigitalagency.com';

// Static routes from src/App.tsx. Legal pages are noindex and /home redirects,
// so they stay out.
const STATIC_ROUTES = [
'/',
'/services',
'/solutions',
'/industries',
'/work',
'/about',
'/insights',
'/contact',
'/careers'];


async function loadSlugs() {
  const vite = await createServer({
    root: ROOT,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false }
  });
  try {
    const { serviceDetails } = await vite.ssrLoadModule('/src/data/serviceDetails.ts');
    const { caseStudies } = await vite.ssrLoadModule('/src/data/work.ts');
    const { posts } = await vite.ssrLoadModule('/src/data/insights.ts');
    return [
    ...serviceDetails.map((item) => `/services/${item.slug}`),
    ...caseStudies.map((item) => `/work/${item.slug}`),
    ...posts.map((item) => `/insights/${item.slug}`)];

  } finally {
    await vite.close();
  }
}

async function main() {
  const routes = [...STATIC_ROUTES, ...(await loadSlugs())];
  const urls = routes.
  map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`).
  join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[sitemap] wrote ${routes.length} URLs to sitemap.xml`);
}

main().catch((error) => {
  console.error('[sitemap] failed:', error);
  process.exit(1);
});
