import React from 'react';
import { StarIcon } from 'lucide-react';
import type { Testimonial } from '../../types';

export function TestimonialCard({ testimonial }: {testimonial: Testimonial;}) {
  return (
    <figure className="flex flex-col gap-8">
      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`Illustrative satisfaction indicator: ${testimonial.score} of 5`}>
        
        {Array.from({ length: 5 }).map((_, index) =>
        <StarIcon
          key={index}
          aria-hidden="true"
          className={
          index < testimonial.score ?
          'h-3.5 w-3.5 fill-gold text-gold' :
          'h-3.5 w-3.5 text-mist-faint/40'
          } />

        )}
      </div>
      <blockquote className="max-w-3xl text-balance font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.28] text-white">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="flex flex-col gap-1">
        <span className="text-[14.5px] font-medium text-white">{testimonial.name}</span>
        <span className="text-[13px] text-mist-faint">
          {testimonial.position}, {testimonial.company} · {testimonial.industry}
        </span>
      </figcaption>
    </figure>);

}