import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { site } from '../data/site';

interface Block {
  id?: string;
  heading: string;
  paragraphs: string[];
}

const LAST_UPDATED = '24 October 2026';

const privacyBlocks: Block[] = [
{
  heading: 'Who we are',
  paragraphs: [
  `This policy explains how ${site.legalName} ("we", "us") collects and uses personal information through ${site.url.replace('https://', '')}. We process personal data in line with Sri Lanka’s Personal Data Protection Act, No. 9 of 2022.`]

},
{
  heading: 'Information we collect',
  paragraphs: [
  'Enquiry form: your name, email address and project description, plus anything optional you choose to add — company, phone number, the service you are interested in, a budget range, and your digital assessment results if you completed it.',
  'Direct contact: whatever you send us by email, phone call or WhatsApp.',
  'Usage data: pages viewed, approximate location, device and browser type, and how you arrived at the site, collected through analytics tools (see Cookies below).']

},
{
  heading: 'How we use it',
  paragraphs: [
  'To reply to your enquiry, prepare proposals, deliver services you engage us for, and keep records of that work.',
  'To understand which pages are useful and improve the website.',
  'We do not sell personal information, and we do not add enquiry details to marketing lists without your consent.']

},
{
  heading: 'Service providers',
  paragraphs: [
  'Enquiry form submissions are delivered to our inbox by Web3Forms. Website analytics are managed through Google Tag Manager and the Google tools it loads. Messages sent on WhatsApp are handled by WhatsApp (Meta). Our website is hosted on Vercel.',
  'These providers process data on our behalf and may store it outside Sri Lanka. We only use providers that apply appropriate safeguards to the data they handle.']

},
{
  id: 'cookies',
  heading: 'Cookies',
  paragraphs: [
  'The website itself does not need cookies to work. Google Tag Manager may load analytics tools that set cookies to measure visits in aggregate — for example how many people view a page and where they came from.',
  'You can block or delete these cookies in your browser settings at any time; the site will keep working normally.']

},
{
  heading: 'How long we keep it',
  paragraphs: [
  'Enquiries that do not lead to a project are deleted within 24 months. Records relating to client work are kept for as long as the relationship continues and afterwards for as long as the law requires.']

},
{
  heading: 'Your rights',
  paragraphs: [
  `You can ask to see the personal data we hold about you, have it corrected or deleted, or withdraw consent to its use. Email ${site.email} and we will respond within 21 working days.`,
  'If you are not satisfied with our response, you may complain to the Data Protection Authority of Sri Lanka.']

}];


const termsBlocks: Block[] = [
{
  heading: 'Using this website',
  paragraphs: [
  `These terms apply to your use of the ${site.legalName} website. By using the site you agree to them.`,
  'Content on this site is general information about our services. It is not professional advice and is not a binding offer.']

},
{
  heading: 'Engagements and proposals',
  paragraphs: [
  'We only deliver services under a written proposal or contract that you have accepted. That document — not this website — sets out the scope, price, timeline and responsibilities for a project.',
  'Results described in our case studies are what those specific clients achieved. Every business is different, and past results are not a guarantee of future results.']

},
{
  heading: 'Intellectual property',
  paragraphs: [
  `The text, design and branding of this website belong to ${site.legalName}. Client names, logos and project screenshots belong to their respective owners and are shown with permission.`,
  'Ownership of work we create for clients is set out in each engagement contract.']

},
{
  heading: 'Liability',
  paragraphs: [
  'We work to keep this website accurate and available, but we cannot guarantee it will always be error-free or uninterrupted. To the extent permitted by law, we are not liable for losses arising from use of the website.',
  'Links to other websites are provided for convenience; we are not responsible for their content.']

},
{
  heading: 'Governing law and contact',
  paragraphs: [
  'These terms are governed by the laws of Sri Lanka.',
  `Questions about these terms can be sent to ${site.email}.`]

}];


function LegalPage({ title, kicker, intro, blocks }: {title: string;kicker: string;intro: string;blocks: Block[];}) {
  return (
    <>
      <Seo
        title={`${title} | ${site.name}`}
        description={`${title} for ${site.legalName}.`}
        noindex />

      <PageHero kicker={kicker} title={title} intro={intro} />

      <div className="shell max-w-[760px] py-16 md:py-20">
        {blocks.map((block) =>
        <section key={block.heading} id={block.id} className="mb-10">
            <h2 className="text-[20px] font-medium tracking-tight text-white md:text-[23px]">
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph) =>
          <p key={paragraph.slice(0, 32)} className="mt-4 text-[15px] leading-[1.75] text-mist-dim">
                {paragraph}
              </p>
          )}
          </section>
        )}
        <p className="border-t border-line pt-8 text-[13px] text-mist-faint">
          Last updated: {LAST_UPDATED}
        </p>
      </div>
    </>);

}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      kicker="Legal"
      intro="What we collect when you use this website or contact us, why, and the choices you have."
      blocks={privacyBlocks} />);


}

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      kicker="Legal"
      intro="The terms that apply when you use this website."
      blocks={termsBlocks} />);


}
