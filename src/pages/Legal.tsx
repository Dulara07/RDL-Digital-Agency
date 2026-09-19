import React from 'react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/layout/PageHero';
import { site } from '../data/site';

interface Block {
  id?: string;
  heading: string;
  paragraphs: string[];
}

const privacyBlocks: Block[] = [
{
  heading: 'Overview',
  paragraphs: [
  `This placeholder policy explains how ${site.legalName} would handle information collected through this website. Replace this content with your reviewed legal copy before going live.`]

},
{
  heading: 'Information we collect',
  paragraphs: [
  'Details you submit through enquiry forms — name, company, email, phone, service interest, budget range and project description.',
  'Technical information such as browser type, device, referring pages and aggregated analytics events.']

},
{
  heading: 'How information is used',
  paragraphs: [
  'To respond to enquiries, prepare proposals, deliver contracted services and improve the website experience.',
  'We do not sell personal information, and we do not use enquiry data for unrelated marketing without consent.']

},
{
  id: 'cookies',
  heading: 'Cookie policy',
  paragraphs: [
  'This site would use essential cookies for core functionality and analytics cookies to understand aggregate usage.',
  'Analytics cookies can be declined without affecting site functionality. Configure your preferred consent tool here.']

},
{
  heading: 'Data retention & your rights',
  paragraphs: [
  'Enquiry records are retained only as long as needed for the commercial relationship or as required by law.',
  `To request access, correction or deletion of your information, contact ${site.email}.`]

}];


const termsBlocks: Block[] = [
{
  heading: 'Using this website',
  paragraphs: [
  `These placeholder terms govern use of the ${site.legalName} website. Replace with your reviewed legal copy before launch.`,
  'Content is provided for general information and does not constitute a binding offer of services.']

},
{
  heading: 'Engagements & proposals',
  paragraphs: [
  'Services are delivered only under a signed scope of work. Indicative timelines or investment figures shown here are illustrative.',
  'Case study figures on this site are representative examples and should not be interpreted as a guarantee of results.']

},
{
  heading: 'Intellectual property',
  paragraphs: [
  'Site content, brand marks and designs remain the property of their respective owners.',
  'Deliverable ownership for client projects is defined in each engagement contract.']

},
{
  heading: 'Liability',
  paragraphs: [
  'The website is provided on an as-is basis without warranties of accuracy or uninterrupted availability.',
  `Questions about these terms can be sent to ${site.email}.`]

}];


function LegalPage({ title, kicker, blocks }: {title: string;kicker: string;blocks: Block[];}) {
  return (
    <>
      <Seo
        title={`${title} | ${site.name}`}
        description={`${title} for ${site.legalName}. Placeholder content pending legal review.`} />
      
      <PageHero
        kicker={kicker}
        title={title}
        intro="Placeholder content — replace with your reviewed legal text before publishing." />
      
      <div className="shell max-w-[760px] py-16 md:py-20">
        {blocks.map((block) =>
        <section key={block.heading} id={block.id} className="mb-10 scroll-mt-28">
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
          Last updated: 1 January 2026
        </p>
      </div>
    </>);

}

export function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" kicker="Legal" blocks={privacyBlocks} />;
}

export function Terms() {
  return <LegalPage title="Terms of Service" kicker="Legal" blocks={termsBlocks} />;
}