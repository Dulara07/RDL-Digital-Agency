import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

/** Renders as a dt/dd pair so it can sit inside a <dl>. */
export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="flex flex-col-reverse gap-1.5">
      <dt className="text-[13px] uppercase tracking-[0.14em] text-mist-faint">{label}</dt>
      <dd className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-white">
        <span ref={ref}>{current}</span>
        <span className="text-accent-soft">{suffix}</span>
      </dd>
    </div>);

}