import React from 'react';

/** Matches figures like "+41%", "−12/wk", "2.4x", "Rs. 8.6M", "600+". */
const isFigure = (value: string) => /^(?:Rs\. ?)?[+\-−$]?\d/.test(value);

interface ResultValueProps {
  value: string;
  /** Size classes for numeric figures (serif display face). */
  figureClassName: string;
  /** Size classes for word results like "Staff-only login" (sans face). */
  textClassName?: string;
}

/**
 * Case-study result value. Numbers use the display serif; word results use the
 * sans face so they read as labels rather than oversized italic figures.
 */
export function ResultValue({ value, figureClassName, textClassName = 'text-[17px]' }: ResultValueProps) {
  return isFigure(value) ?
  <span className={`font-display leading-none text-white ${figureClassName}`}>{value}</span> :

  <span className={`font-medium leading-tight tracking-tight text-white ${textClassName}`}>{value}</span>;

}
