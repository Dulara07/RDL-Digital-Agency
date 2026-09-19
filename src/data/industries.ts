import {
  BriefcaseIcon,
  BuildingIcon,
  FactoryIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  HotelIcon,
  RocketIcon,
  ShipIcon,
  ShoppingCartIcon,
  SproutIcon,
  TruckIcon,
  UtensilsIcon } from
'lucide-react';
import type { Industry } from '../types';

export const industries: Industry[] = [
{
  id: 'retail',
  name: 'Retail',
  description: 'Multi-channel selling with stock and customer data that finally agree.',
  icon: ShoppingCartIcon,
  solutions: ['E-commerce', 'POS Systems', 'Inventory', 'Performance Marketing', 'Loyalty', 'Analytics']
},
{
  id: 'manufacturing',
  name: 'Manufacturing',
  description: 'Production visibility, B2B demand and less paperwork on the floor.',
  icon: FactoryIcon,
  solutions: ['Website', 'B2B Marketing', 'ERP', 'Inventory Systems', 'Automation', 'Analytics']
},
{
  id: 'food-beverage',
  name: 'Food & Beverage',
  description: 'Orders, delivery partners and local demand handled in one flow.',
  icon: UtensilsIcon,
  solutions: ['Ordering Platform', 'POS Integration', 'Local SEO', 'Social Media', 'Loyalty', 'Menu Management']
},
{
  id: 'export-trading',
  name: 'Export & Trading',
  description: 'Credibility with overseas buyers and documentation that moves faster.',
  icon: ShipIcon,
  solutions: ['Multilingual Website', 'B2B Lead Generation', 'Quotation Systems', 'Document Automation', 'CRM', 'LinkedIn Marketing']
},
{
  id: 'hospitality',
  name: 'Hospitality',
  description: 'Direct bookings that reduce dependence on marketplace commissions.',
  icon: HotelIcon,
  solutions: ['Booking Engine', 'Website', 'Paid Advertising', 'Reputation Management', 'Email Marketing', 'Analytics']
},
{
  id: 'healthcare',
  name: 'Healthcare',
  description: 'Appointment flows and records handled with care and compliance.',
  icon: HeartPulseIcon,
  solutions: ['Appointment Systems', 'Patient Portal', 'Local SEO', 'Practice Website', 'Secure Hosting', 'Automation']
},
{
  id: 'education',
  name: 'Education',
  description: 'Enrolment pipelines and learning delivery without the admin load.',
  icon: GraduationCapIcon,
  solutions: ['LMS', 'Enrolment Funnels', 'Student Portal', 'Content Marketing', 'CRM', 'Payment Integration']
},
{
  id: 'professional-services',
  name: 'Professional Services',
  description: 'Positioning, proposals and utilisation tracking in one system.',
  icon: BriefcaseIcon,
  solutions: ['Brand & Website', 'Thought Leadership', 'CRM', 'Proposal Automation', 'Time Tracking', 'Reporting']
},
{
  id: 'logistics',
  name: 'Logistics',
  description: 'Live shipment visibility for your team and your customers.',
  icon: TruckIcon,
  solutions: ['Tracking Portal', 'Fleet Dashboard', 'API Integration', 'Mobile App', 'Automation', 'Analytics']
},
{
  id: 'construction',
  name: 'Construction',
  description: 'Project, cost and site reporting connected from field to office.',
  icon: BuildingIcon,
  solutions: ['Project Management', 'Site Reporting App', 'Quotation Tools', 'Portfolio Website', 'Document Control', 'Dashboards']
},
{
  id: 'agriculture',
  name: 'Agriculture',
  description: 'Supply-chain traceability and direct routes to market.',
  icon: SproutIcon,
  solutions: ['Traceability Systems', 'Marketplace Presence', 'Procurement Tools', 'Mobile Data Capture', 'Website', 'Analytics']
},
{
  id: 'startups',
  name: 'Startups',
  description: 'From proposition to launched product without burning the runway.',
  icon: RocketIcon,
  solutions: ['MVP Development', 'Brand Identity', 'Landing Pages', 'Growth Experiments', 'Product Analytics', 'Cloud Setup']
}];