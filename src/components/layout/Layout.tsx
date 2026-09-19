import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';

export function Layout({ enableCustomCursor = true }: {enableCustomCursor?: boolean;}) {
  const { pathname } = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-ink text-mist">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        
        Skip to content
      </a>
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
    </div>);

}