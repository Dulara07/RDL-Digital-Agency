import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
}

/** Single scroll-reveal primitive used across the site for consistent motion. */
export function Reveal({ children, delay = 0, y = 18, className, id, as = 'div' }: RevealProps) {
  const prefersReduced = useReducedMotion();
  const Component = motion[as];

  if (prefersReduced) {
    const Static = as;
    return (
      <Static className={className} id={id}>
        {children}
      </Static>);

  }

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // Start revealing slightly before the element scrolls into view, so fast
      // scrolling does not expose empty space.
      viewport={{ once: true, margin: '0px 0px 120px 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.23, 1, 0.32, 1] }}>
      
      {children}
    </Component>);

}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }
};

export const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }
};