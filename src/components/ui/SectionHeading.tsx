import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h2' | 'h3';
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  level = 'h2',
  className = '',
  action
}: SectionHeadingProps) {
  const Title = level;
  const isCenter = align === 'center';

  return (
    <Reveal
      className={[
      'flex flex-col gap-5',
      isCenter ? 'items-center text-center mx-auto max-w-2xl' : '',
      action ? 'md:flex-row md:items-end md:justify-between md:gap-12' : '',
      className].

      filter(Boolean).
      join(' ')}>
      
      <div className={['flex flex-col gap-4', isCenter ? 'items-center' : 'max-w-2xl'].join(' ')}>
        {eyebrow &&
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
            {eyebrow}
          </span>
        }
        <Title className="text-balance text-[clamp(1.75rem,3.6vw,2.85rem)] font-semibold leading-[1.08] tracking-tightest text-white">
          {title}
        </Title>
        {subtitle &&
        <p className="max-w-xl text-[15px] leading-relaxed text-mist-dim md:text-base">{subtitle}</p>
        }
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>);

}