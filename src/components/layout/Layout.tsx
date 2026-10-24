import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';
import { GoogleTagManager } from '../ui/GoogleTagManager';
import { FloatingActions } from '../ui/FloatingActions';

export function Layout({ enableCustomCursor = false }: {enableCustomCursor?: boolean;}) {
  const { pathname, hash } = useLocation();
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    // The target may not exist until the new route has rendered, so retry briefly.
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: number;
    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      if (attempts++ < 20) timer = window.setTimeout(tryScroll, 50);
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash, prefersReduced]);

  return (
    <div className="flex min-h-screen w-full flex-col text-mist">
      <GoogleTagManager pathname={pathname} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white">

        Skip to content
      </a>
      {/* Reading progress along the top edge. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: prefersReduced ? scrollYProgress : progress }}
        className="fixed inset-x-0 top-0 z-[120] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-soft to-aqua" />

      {enableCustomCursor && <CustomCursor />}
      <Navbar />
      <main id="main" className="flex-1">
        <motion.div
          key={pathname}
          initial={prefersReduced ? undefined : { opacity: 0, y: 8 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>

          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <FloatingActions />
    </div>);

}
