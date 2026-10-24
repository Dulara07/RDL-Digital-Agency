import type { LucideIcon } from 'lucide-react';

export type ServiceGroupId = 'digital-growth' | 'technology';

export interface Service {
  slug: string;
  name: string;
  /** Everyday wording for owners who don't know the technical name. */
  plainName: string;
  group: ServiceGroupId;
  summary: string;
  icon: LucideIcon;
  hasDetailPage: boolean;
}

export interface ServiceGroup {
  id: ServiceGroupId;
  label: string;
  kicker: string;
  description: string;
}

export interface ExplorerTrack {
  id: string;
  label: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  outcome: string;
  capabilities: {name: string;detail: string;}[];
}

export interface ServiceDetailContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSub: string;
  problem: {headline: string;points: string[];};
  solution: {headline: string;body: string;pillars: {title: string;body: string;}[];};
  capabilities: {name: string;detail: string;icon: LucideIcon;}[];
  process: {step: string;title: string;body: string;}[];
  technologies: string[];
  benefits: {title: string;body: string;icon: LucideIcon;}[];
  caseStudySlugs: string[];
  faqs: Faq[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  solutions: string[];
}

export type WorkCategory = 'websites' | 'marketing' | 'software' | 'branding';

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  projectType: string;
  category: WorkCategory;
  year: string;
  image: string;
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  services: string[];
  technologies: string[];
  results: {label: string;value: string;}[];
  gallery: {src: string;caption: string;}[];
  /** Omit when there is no public URL — the "View Live Project" button is hidden. */
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  industry: string;
  score: number;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  author: string;
  body: {heading?: string;paragraphs: string[];}[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SolutionPackage {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  services: string[];
  features: string[];
  featured: boolean;
}

export interface TechnologyGroup {
  id: string;
  label: string;
  businessValue: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
  deliverables: string[];
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  helper: string;
  options: {label: string;areas: AssessmentAreaId[];}[];
}

export type AssessmentAreaId =
'website' |
'marketing' |
'seo' |
'automation' |
'software' |
'analytics';

export interface AssessmentArea {
  id: AssessmentAreaId;
  label: string;
  description: string;
  icon: LucideIcon;
}