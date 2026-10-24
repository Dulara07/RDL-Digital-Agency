import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../../data/site';

interface SeoProps {
  title: string;
  description: string;
  /** One or more JSON-LD structured data objects (e.g. Service + BreadcrumbList). */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  type?: 'website' | 'article';
  /** Keep this page out of search results (e.g. 404, thin/utility pages). */
  noindex?: boolean;
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * Route-level metadata. Reusable per page so titles, descriptions,
 * Open Graph, Twitter tags, canonical and structured data stay in sync.
 */
export function Seo({
  title,
  description,
  structuredData,
  image,
  type = 'website',
  noindex = false
}: SeoProps) {
  const { pathname } = useLocation();
  const canonical = `${site.url}${pathname}`;
  // Social crawlers need absolute image URLs.
  const ogImage = image ?
  /^https?:\/\//.test(image) ? image : `${site.url}${image}` :
  `${site.url}/og-default.jpg`;

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
    );
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', site.name);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    upsertLink('canonical', canonical);

    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    const defaultOrgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: `${site.url}/brand/favicon-192.png`,
      email: site.email,
      telephone: site.phone,
      description: site.positioning,
      areaServed: 'LK',
      knowsAbout: [
      'Digital Marketing',
      'Search Engine Optimization',
      'Web Development',
      'E-commerce Development',
      'Custom Software Development',
      'IT Solutions'],

      ...(site.social.length > 0 ?
      { sameAs: site.social.map((item) => item.href) } :
      {})
    };
    const pageSchemas = structuredData ?
    Array.isArray(structuredData) ? structuredData : [structuredData] :
    [];
    const payloads = [defaultOrgSchema, ...pageSchemas];

    payloads.forEach((payload, index) => {
      const script = document.createElement('script');
      script.dataset.seoJsonld = String(index);
      script.type = 'application/ld+json';
      script.text = JSON.stringify(payload);
      document.head.appendChild(script);
    });
  }, [title, description, canonical, ogImage, type, structuredData, noindex]);

  return null;
}