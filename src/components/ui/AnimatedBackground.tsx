import React from 'react';

interface AnimatedBackgroundProps {
  /** 'grid' for section fields, 'aurora' for hero and CTA surfaces. */
  variant?: 'grid' | 'aurora';
  className?: string;
}

/**
 * Non-decorative-noise background layer: a hairline measurement grid with a
 * single soft light source. Used to give dark surfaces depth without blobs.
 */
export function AnimatedBackground({ variant = 'grid', className = '' }: AnimatedBackgroundProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-field opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
      {variant === 'aurora' &&
      <>
          <div
          className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.22] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #6E56FF 0%, transparent 70%)' }} />
        
          <div
          className="absolute -bottom-52 right-[-10%] h-[420px] w-[520px] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #3ED8D0 0%, transparent 70%)' }} />
        
        </>
      }
      <div
        className="absolute inset-0"
        style={{
          background:
          'radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(8,9,12,0.85) 100%)'
        }} />
      
    </div>);

}