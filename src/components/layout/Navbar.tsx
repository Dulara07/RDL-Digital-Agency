import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { primaryNav, site } from '../../data/site';
import { services } from '../../data/services';
import { Button } from '../ui/Button';

const detailServices = services.filter((service) => service.hasDetailPage);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={[
      'fixed inset-x-0 top-0 z-[80] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-premium',
      scrolled ?
      'border-b border-line bg-ink-950/80 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl' :
      'border-b border-transparent bg-transparent'].
      join(' ')}>
      
      <div className="shell">
        <div
          className={[
          'flex items-center justify-between transition-[height] duration-300 ease-premium',
          scrolled ? 'h-[62px]' : 'h-[78px]'].
          join(' ')}>
          
          <Link
            to="/"
            className="flex items-center"
            aria-label={`${site.name} — home`}>

            <img src="/brand/logo-wordmark.png" alt={site.name} className="h-9 w-auto" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) =>
            item.label === 'Services' ?
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              
                  <NavLink
                to={item.href}
                className={({ isActive }) =>
                [
                'flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-200 ease-premium',
                isActive ? 'text-white' : 'text-mist-dim hover:text-white'].
                join(' ')
                }
                onFocus={() => setServicesOpen(true)}>
                
                    {item.label}
                    <ChevronDownIcon
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ease-premium ${
                  servicesOpen ? 'rotate-180' : ''}`
                  } />
                
                  </NavLink>
                  <AnimatePresence>
                    {servicesOpen &&
                <motion.div
                  initial={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReduced ? 0 : -4 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-0 top-full w-[320px] pt-3">
                  
                        <div className="overflow-hidden rounded-xl border border-line bg-ink-800/95 p-2 shadow-panel backdrop-blur-xl">
                          {detailServices.map((service) =>
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 ease-premium hover:bg-white/[0.05]">
                      
                              <service.icon
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                      
                              <span className="flex flex-col">
                                <span className="text-[13.5px] font-medium text-white">
                                  {service.name}
                                </span>
                                <span className="text-[12px] leading-snug text-mist-faint">
                                  {service.summary.slice(0, 62)}…
                                </span>
                              </span>
                            </Link>
                    )}
                          <Link
                      to="/services"
                      className="mt-1 block rounded-lg px-3 py-2.5 text-[13px] text-accent-soft transition-colors duration-200 ease-premium hover:bg-white/[0.05]">
                      
                            View all services
                          </Link>
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
                </div> :

            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
              [
              'rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-200 ease-premium',
              isActive ? 'text-white' : 'text-mist-dim hover:text-white'].
              join(' ')
              }>
              
                  {item.label}
                </NavLink>

            )}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" size="sm" withArrow>
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}>
            
            {mobileOpen ?
            <XIcon className="h-5 w-5" aria-hidden="true" /> :

            <MenuIcon className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: prefersReduced ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReduced ? 0 : -8 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-line bg-ink-950/98 backdrop-blur-xl lg:hidden">
          
            <nav aria-label="Mobile" className="shell flex max-h-[80vh] flex-col gap-1 overflow-y-auto py-5">
              {primaryNav.map((item) =>
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
              [
              'rounded-lg px-3 py-3.5 text-[16px] transition-colors duration-200 ease-premium',
              isActive ? 'bg-white/[0.05] text-white' : 'text-mist-dim'].
              join(' ')
              }>
              
                  {item.label}
                </NavLink>
            )}
              <div className="my-2 hairline" />
              <p className="px-3 pb-1 text-[11px] uppercase tracking-[0.16em] text-mist-faint">
                Service pages
              </p>
              {detailServices.map((service) =>
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="rounded-lg px-3 py-3 text-[14.5px] text-mist-dim">
              
                  {service.name}
                </Link>
            )}
              <div className="mt-4">
                <Button to="/contact" size="lg" fullWidth>
                  Let&apos;s Talk
                </Button>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}