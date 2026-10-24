import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

/** Plain-English meanings for the terms owners hear from agencies (including us). */
const terms = [
{ term: 'SEO', meaning: 'Making your website appear higher on Google when people search, without paying for each click.' },
{ term: 'Google Business Profile', meaning: 'Your free listing on Google Maps and Search — with your address, opening hours, photos and reviews.' },
{ term: 'Digital marketing', meaning: 'Any marketing done online: Google, Facebook, Instagram, TikTok, email and your website.' },
{ term: 'Paid ads (PPC)', meaning: 'Ads on Google or Facebook where you set a budget and pay when people see or click them.' },
{ term: 'Domain', meaning: 'Your website’s address, like yourbusiness.lk. You pay a small fee for it every year.' },
{ term: 'Hosting', meaning: 'The computer, rented online, that keeps your website switched on 24 hours a day.' },
{ term: 'E-commerce', meaning: 'Selling online — customers choose products, pay and arrange delivery on your website.' },
{ term: 'CRM', meaning: 'One place to keep every customer’s details, enquiries and purchases, instead of notebooks or Excel.' },
{ term: 'ERP / POS', meaning: 'Software for running the shop floor and back office: billing, stock, purchases and accounts.' },
{ term: 'Automation', meaning: 'Letting software do repetitive jobs — sending reminders, creating invoices, copying data — on its own.' },
{ term: 'Analytics', meaning: 'Counting what happens on your website and ads: how many visitors, where they came from, who got in touch.' },
{ term: 'Conversion', meaning: 'When a visitor does what you hoped — calls, sends a message, books or buys.' }];


export function Glossary() {
  return (
    <section id="glossary" aria-labelledby="glossary-heading" className="relative border-y border-line bg-ink-950/60">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="No jargon"
            title={<span id="glossary-heading">What the words actually mean</span>}
            subtitle="Terms you will hear from any digital agency — including us — explained in one sentence each." />
        </div>

        <dl className="grid gap-x-10 sm:grid-cols-2">
          {terms.map((item) =>
          <Reveal key={item.term} className="flex flex-col gap-1.5 border-t border-line py-5">
              <dt className="text-[16px] font-medium text-white">{item.term}</dt>
              <dd className="text-[15px] leading-relaxed text-mist-dim">{item.meaning}</dd>
            </Reveal>
          )}
        </dl>
      </div>
    </section>);

}
