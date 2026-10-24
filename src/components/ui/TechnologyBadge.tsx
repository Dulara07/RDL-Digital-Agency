import React from 'react';

export function TechnologyBadge({ children }: {children: React.ReactNode;}) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white/[0.03] px-2.5 py-1.5 font-mono text-[12px] tracking-tight text-mist-dim transition-colors duration-200 ease-premium hover:border-line-strong hover:text-white">
      {children}
    </span>);

}