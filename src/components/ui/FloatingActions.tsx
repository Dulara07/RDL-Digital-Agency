import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpIcon, MessageCircleIcon } from 'lucide-react';
import { site } from '../../data/site';

/** Persistent WhatsApp shortcut plus a back-to-top control on long pages. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[85] flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {showTop &&
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-ink-800/90 text-mist shadow-panel backdrop-blur-md transition-colors duration-200 ease-premium hover:text-white">

            <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
          </motion.button>
        }
      </AnimatePresence>
      <a
        href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-[14px] font-medium text-[#05240f] shadow-panel transition-transform duration-200 ease-premium hover:-translate-y-0.5">

        <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp us</span>
      </a>
    </div>);

}
