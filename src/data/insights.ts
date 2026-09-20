import type { Post } from '../types';

export const insightCategories = [
'All',
'Digital Marketing',
'SEO',
'Business Technology',
'Software',
'AI',
'SME Growth',
'E-commerce'];


export const posts: Post[] = [
{
  slug: 'seo-for-smes-what-actually-moves-the-needle',
  title: 'SEO for SMEs: what actually moves the needle in the first 90 days',
  category: 'SEO',
  date: '2026-08-18',
  readingTime: '7 min read',
  excerpt:
  'Most small businesses are told to publish more. In practice, the first wins usually come from fixing three technical issues and one page.',
  image: "/seo-for-smes-sri-lanka.jpg",
  author: 'Amara Silva',
  body: [
  {
    paragraphs: [
    'When a small business asks where to start with search, the honest answer is rarely "content". It is almost always a handful of structural problems that suppress everything else you publish.',
    'Here is the sequence we use on a 90-day engagement, and why the order matters more than the volume of work.']

  },
  {
    heading: '1. Fix what is blocking indexing',
    paragraphs: [
    'Blocked pages, duplicate templates and thin category pages waste the crawl budget you have. Before writing anything new, confirm the pages you already care about can be found, rendered and understood.',
    'This is usually a two-day job with a disproportionate effect on visibility.']

  },
  {
    heading: '2. Rebuild one page properly',
    paragraphs: [
    'Pick the page tied to your highest-margin service and rewrite it around the buyer question rather than your internal service name. Add specifications, pricing context, timelines and proof.',
    'One page done well teaches you more about your market than ten generic posts.']

  },
  {
    heading: '3. Make local presence consistent',
    paragraphs: [
    'For most SMEs, local signals are the cheapest available advantage. Consistent business information, real photos, and responses to reviews will out-perform a blog for months.']

  },
  {
    heading: 'Then, and only then, publish',
    paragraphs: [
    'Once the foundation holds, content compounds. Start with the questions your sales team answers every week — those already have proven demand.']

  }]

},
{
  slug: 'automation-before-ai-the-boring-wins',
  title: 'Automation before AI: the boring wins that pay for everything else',
  category: 'Business Technology',
  date: '2026-07-29',
  readingTime: '6 min read',
  excerpt:
  'Before you buy an AI tool, find the three tasks your team repeats daily. Automating those usually funds the rest of your technology roadmap.',
  image: "/business-automation-before-ai.jpg",
  author: 'Dinesh Perera',
  body: [
  {
    paragraphs: [
    'Every automation project we have delivered for an SME started the same way: someone was copying data from one screen into another, several times a day, for years.',
    'That is the opportunity. It is unglamorous, easy to measure, and it builds the internal confidence needed for larger technology decisions.']

  },
  {
    heading: 'Measure the task, not the tool',
    paragraphs: [
    'Count how many times a task happens per week and how long it takes. Multiply. If the annual cost is not meaningful, do not automate it — document it instead.']

  },
  {
    heading: 'Automate rules, not judgement',
    paragraphs: [
    'Good automation handles the predictable 80% and escalates the rest to a human with full context. Attempting to automate judgement is how teams lose trust in a system.']

  },
  {
    heading: 'Where AI genuinely helps',
    paragraphs: [
    'Once the rule-based work is automated, AI becomes useful at the edges: summarising enquiries, drafting responses, classifying documents and surfacing anomalies in your data.']

  }]

},
{
  slug: 'practical-ai-for-small-teams',
  title: 'Practical AI for small teams: four use cases worth the effort',
  category: 'AI',
  date: '2026-07-11',
  readingTime: '8 min read',
  excerpt:
  'AI is oversold and underused at the same time. These are the four applications we see paying back inside a quarter for SMEs.',
  image: "/practical-ai-for-small-teams.jpg",
  author: 'Amara Silva',
  body: [
  {
    paragraphs: [
    'For a team of fifteen people, AI is not a strategy. It is a set of tools that can remove specific friction, and the ones that work tend to be narrow.']

  },
  {
    heading: 'Enquiry triage',
    paragraphs: [
    'Classify inbound enquiries by service, urgency and fit, then route them with a suggested reply. Sales keeps control; the first response time drops dramatically.']

  },
  {
    heading: 'Document extraction',
    paragraphs: [
    'Invoices, purchase orders and delivery notes can be read into structured data with human review on low-confidence fields. This is the highest-ROI application we deploy.']

  },
  {
    heading: 'Internal knowledge assistants',
    paragraphs: [
    'A retrieval assistant over your own procedures answers the questions new staff ask in their first month, without interrupting a senior colleague.']

  },
  {
    heading: 'Reporting commentary',
    paragraphs: [
    'Draft the narrative around your numbers, then edit. Useful for monthly management reporting — never for deciding what the numbers mean.']

  }]

}];


export const getPost = (slug: string) => posts.find((post) => post.slug === slug);