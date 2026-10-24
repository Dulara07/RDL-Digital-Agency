import React from 'react';
import { formatRupees, type Price } from '../../data/pricing';

interface PriceTagProps {
  price?: Price;
  size?: 'sm' | 'lg';
  showNote?: boolean;
  className?: string;
}

/** "From Rs. 85,000 / month" in one consistent, easy-to-scan format. */
export function PriceTag({ price, size = 'sm', showNote = true, className = '' }: PriceTagProps) {
  if (!price) return null;
  const large = size === 'lg';

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <p className="flex flex-wrap items-baseline gap-x-1.5">
        <span className={`${large ? 'text-[13px]' : 'text-[12px]'} font-medium uppercase tracking-[0.12em] text-mist-faint`}>
          From
        </span>
        <span
          className={`${large ? 'text-[30px]' : 'text-[20px]'} font-semibold tabular-nums tracking-tight text-white`}>
          {formatRupees(price.from)}
        </span>
        {price.monthly &&
        <span className={`${large ? 'text-[15px]' : 'text-[13px]'} text-mist-dim`}>/ month</span>
        }
      </p>
      {showNote && price.note &&
      <p className={`${large ? 'text-[14px]' : 'text-[12.5px]'} text-mist-faint`}>{price.note}</p>
      }
    </div>);

}
