import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { XIcon } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, label, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.2, ease: [0.23, 1, 0.32, 1] }}
        onClick={onClose}>
        
          <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          tabIndex={-1}
          className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-ink-800 shadow-panel outline-none"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16, scale: prefersReduced ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: prefersReduced ? 0 : 10, scale: prefersReduced ? 1 : 0.98 }}
          transition={{ duration: prefersReduced ? 0 : 0.26, ease: [0.23, 1, 0.32, 1] }}
          onClick={(event) => event.stopPropagation()}>
          
            <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 z-10 rounded-full border border-line bg-ink-900/80 p-2 text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
            
              <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}