import React from 'react';
import { site } from '../../data/site';

/**
 * Wordmark plus a live-text descriptor. The "DIGITAL AGENCY" line baked into
 * the PNG is ~2px tall at header size, so the readable label is set in HTML.
 */
export function Logo({ className = '' }: {className?: string;}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img src="/brand/logo-wordmark.png" alt="" className="h-9 w-auto" />
      <span className="border-l border-line-strong pl-3 text-[12px] font-medium uppercase leading-tight tracking-[0.16em] text-mist">
        Digital
        <br />
        Agency
      </span>
      <span className="sr-only">{site.name}</span>
    </span>);

}
