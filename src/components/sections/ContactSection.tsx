import React from 'react';
import { ClockIcon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from './ContactForm';
import { site } from '../../data/site';

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Contact"
          title={<span id="contact-heading">Tell us about the project</span>}
          subtitle="The more context you give, the more useful our first reply will be." />
        

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5 rounded-xl border border-line bg-ink-800/40 p-6">
              <ContactRow icon={MailIcon} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow
                icon={PhoneIcon}
                label="Phone (calls only)"
                value={site.phone}
                href={`tel:${site.phone.replace(/\s/g, '')}`} />

              <ContactRow
                icon={MessageCircleIcon}
                label="WhatsApp (inquiries)"
                value={site.whatsapp}
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} />
              
              <li className="flex gap-3.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" aria-hidden="true" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-mist-faint">
                    Business hours
                  </span>
                  {site.hours.map((entry) =>
                  <span key={entry.days} className="text-[13.5px] text-mist-dim">
                      {entry.days} · {entry.time}
                    </span>
                  )}
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}

interface ContactRowProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  return (
    <li className="flex gap-3.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-[0.14em] text-mist-faint">{label}</span>
        {href ?
        <a
          href={href}
          className="text-[13.5px] text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
          
            {value}
          </a> :

        <span className="text-[13.5px] leading-relaxed text-mist-dim">{value}</span>
        }
      </div>
    </li>);

}