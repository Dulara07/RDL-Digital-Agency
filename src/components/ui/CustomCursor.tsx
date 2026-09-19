import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Subtle desktop-only cursor companion. Grows over interactive elements.
 * Automatically disabled on touch devices and when reduced motion is requested.
 */
export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (prefersReduced) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setActive(
        Boolean(target?.closest('a, button, [data-cursor="grow"], input, select, textarea'))
      );
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [prefersReduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden mix-blend-difference lg:block"
      style={{ x: springX, y: springY }}>
      
      <motion.span
        className="block rounded-full border border-white/70"
        animate={{
          width: active ? 34 : 14,
          height: active ? 34 : 14,
          x: active ? -17 : -7,
          y: active ? -17 : -7,
          backgroundColor: active ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.85)'
        }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }} />
      
    </motion.div>);

}