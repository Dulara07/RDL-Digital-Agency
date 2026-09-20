// Post-build step: crawls the built SPA with a headless browser, captures the
// fully-rendered HTML (title/meta/OG/JSON-LD included, since Seo.tsx writes
// those client-side) for every internal route it discovers, and writes each
// one to dist/<route>/index.html. Vercel serves static files ahead of the
// SPA-fallback rewrite in vercel.json, so crawlers/social bots get real HTML
// per URL while the app still boots normally as a client-rendered SPA.
//
// Also emits dist/sitemap.xml from the same crawl, so it can never drift
// from the routes that actually exist.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://rdldigitalagency.com';
const PORT = 4173;

function normalizeRoute(raw) {
  const withoutHashOrQuery = raw.split('#')[0].split('?')[0];
  if (withoutHashOrQuery.length > 1 && withoutHashOrQuery.endsWith('/')) {
    return withoutHashOrQuery.slice(0, -1);
  }
  return withoutHashOrQuery || '/';
}

async function crawl(origin, browser) {
  const visited = new Set();
  const queue = ['/'];
  const pages = [];

  while (queue.length > 0) {
    const route = queue.shift();
    if (visited.has(route)) continue;
    visited.add(route);

    const page = await browser.newPage();
    try {
      await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
      // Let framer-motion / mount-time effects (Seo.tsx's useEffect) settle.
      await new Promise((resolve) => setTimeout(resolve, 350));

      const finalPath = await page.evaluate(() => window.location.pathname);
      if (normalizeRoute(finalPath) !== route) {
        // Route redirected client-side (e.g. an invalid slug) — skip it,
        // its target will already be in the crawl queue via nav links.
        continue;
      }

      const html = await page.content();
      pages.push({ route, html });

      const links = await page.$$eval('a[href^="/"]', (as) =>
      as.map((a) => a.getAttribute('href') || ''));

      for (const link of links) {
        const clean = normalizeRoute(link);
        if (clean && !visited.has(clean) && !queue.includes(clean)) {
          queue.push(clean);
        }
      }
    } catch (error) {
      console.warn(`[prerender] failed to render ${route}:`, error.message);
    } finally {
      await page.close();
    }
  }

  return pages;
}

async function writePage(route, html) {
  const outDir = route === '/' ? DIST : join(DIST, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, 'index.html'), html, 'utf8');
}

function buildSitemap(routes) {
  const urls = routes.
  filter((route) => route !== '/home').
  sort().
  map((route) => `  <url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc></url>`).
  join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function main() {
  const server = await preview({
    root: ROOT,
    preview: { port: PORT, strictPort: true, open: false }
  });
  const origin = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const pages = await crawl(origin, browser);
    if (pages.length === 0) {
      throw new Error('Crawl discovered zero routes — aborting so dist/ is left untouched.');
    }

    for (const { route, html } of pages) {
      await writePage(route, html);
    }

    const sitemap = buildSitemap(pages.map((p) => p.route));
    await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

    console.log(`[prerender] wrote ${pages.length} static pages + sitemap.xml`);
    pages.forEach((p) => console.log(`  - ${p.route}`));
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

main().catch((error) => {
  console.error('[prerender] failed:', error);
  process.exit(1);
});
