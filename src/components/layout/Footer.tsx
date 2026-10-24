import React from 'react';
import { Logo } from '../ui/Logo';
import { Link } from 'react-router-dom';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { footerColumns, site } from '../../data/site';

const legalLinks = [
{ label: 'Privacy Policy', href: '/privacy-policy' },
{ label: 'Terms of Service', href: '/terms' },
{ label: 'Cookie Policy', href: '/privacy-policy#cookies' }];


export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-950">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="shell py-16 md:py-20">
        <div
          className={[
          'grid gap-12',
          site.social.length > 0 ?
          'lg:grid-cols-[1.4fr_repeat(3,1fr)_1fr]' :
          'lg:grid-cols-[1.4fr_repeat(3,1fr)]'].
          join(' ')}>
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="max-w-xs text-[14px] leading-relaxed text-mist-faint">{site.positioning}</p>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-mist-dim">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-premium hover:text-white">
                  
                  <MailIcon className="h-4 w-4 text-accent-soft" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-premium hover:text-white">
                  
                  <PhoneIcon className="h-4 w-4 text-accent-soft" aria-hidden="true" />
                  {site.phone} <span className="text-mist-faint">(calls only)</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-premium hover:text-white">

                  <MessageCircleIcon className="h-4 w-4 text-accent-soft" aria-hidden="true" />
                  {site.whatsapp} <span className="text-mist-faint">(WhatsApp)</span>
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((column) =>
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) =>
              <li key={`${column.title}-${link.label}`}>
                    <Link
                  to={link.href}
                  className="text-[13.5px] text-mist-faint transition-colors duration-200 ease-premium hover:text-white">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}

          {/* Only shown once real social profiles are added in site.ts. */}
          {site.social.length > 0 &&
          <nav aria-label="Connect" className="flex flex-col gap-4">
            <h2 className="text-[12px] font-medium uppercase tracking-[0.18em] text-white">Connect</h2>
            <ul className="flex flex-col gap-2.5">
              {site.social.map((item) =>
              <li key={item.label}>
                  <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] text-mist-faint transition-colors duration-200 ease-premium hover:text-white">
                  
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
          }
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[12.5px] text-mist-faint">
            © 2026 {site.legalName}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) =>
            <li key={link.label}>
                <Link
                to={link.href}
                className="text-[12.5px] text-mist-faint transition-colors duration-200 ease-premium hover:text-white">
                
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}