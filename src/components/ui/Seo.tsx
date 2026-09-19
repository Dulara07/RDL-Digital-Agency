import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../../data/site';

interface SeoProps {
  title: string;
  description: string;
  /** Optional JSON-LD structured data placeholder. */
  structuredData?: Record<string, unknown>;
  image?: string;
  type?: 'website' | 'article';
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
export function Seo({ title, description, structuredData, image, type = 'website' }: SeoProps) {
  const { pathname } = useLocation();
  const canonical = `${site.url}${pathname}`;
  const ogImage = image ?? `${site.url}/og-default.jpg`;

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
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

    const scriptId = 'route-structured-data';
    document.getElementById(scriptId)?.remove();
    const payload =
    structuredData ?? {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      description: site.positioning
    };
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(payload);
    document.head.appendChild(script);
  }, [title, description, canonical, ogImage, type, structuredData]);

  return null;
}