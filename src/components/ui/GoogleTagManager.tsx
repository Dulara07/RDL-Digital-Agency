import { useEffect } from 'react';

const CONTAINER_ID = 'GTM-5V73DM8L';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export function GoogleTagManager({ pathname }: { pathname: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    if (!document.getElementById('google-tag-manager')) {
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      const script = document.createElement('script');
      script.id = 'google-tag-manager';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${CONTAINER_ID}`;
      document.head.appendChild(script);
    }

    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [pathname]);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}