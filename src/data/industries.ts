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
  solutions: ['Online Store', 'Checkout Systems', 'Stock Tracking', 'Ad Campaigns', 'Loyalty Programs', 'Reporting']
},
{
  id: 'manufacturing',
  name: 'Manufacturing',
  description: 'Production visibility, B2B demand and less paperwork on the floor.',
  icon: FactoryIcon,
  solutions: ['Website', 'B2B Marketing', 'Business Software', 'Stock Tracking', 'Automation', 'Reporting']
},
{
  id: 'food-beverage',
  name: 'Food & Beverage',
  description: 'Orders, delivery partners and local demand handled in one flow.',
  icon: UtensilsIcon,
  solutions: ['Online Ordering', 'Checkout Integration', 'Local Search', 'Social Media', 'Loyalty Programs', 'Menu Management']
},
{
  id: 'export-trading',
  name: 'Export & Trading',
  description: 'Credibility with overseas buyers and documentation that moves faster.',
  icon: ShipIcon,
  solutions: ['Multilingual Website', 'B2B Lead Generation', 'Quotation Tools', 'Paperwork Automation', 'Customer Database', 'LinkedIn Marketing']
},
{
  id: 'hospitality',
  name: 'Hospitality',
  description: 'Direct bookings that reduce dependence on marketplace commissions.',
  icon: HotelIcon,
  solutions: ['Booking System', 'Website', 'Paid Ads', 'Review Management', 'Email Marketing', 'Reporting']
},
{
  id: 'healthcare',
  name: 'Healthcare',
  description: 'Appointment flows and records handled with care and compliance.',
  icon: HeartPulseIcon,
  solutions: ['Appointment Booking', 'Patient Portal', 'Local Search', 'Clinic Website', 'Secure Hosting', 'Automation']
},
{
  id: 'education',
  name: 'Education',
  description: 'Enrolment pipelines and learning delivery without the admin load.',
  icon: GraduationCapIcon,
  solutions: ['Online Courses', 'Enrolment Pages', 'Student Portal', 'Content Marketing', 'Customer Database', 'Payment Setup']
},
{
  id: 'professional-services',
  name: 'Professional Services',
  description: 'Positioning, proposals and utilisation tracking in one system.',
  icon: BriefcaseIcon,
  solutions: ['Brand & Website', 'Expert Content', 'Customer Database', 'Proposal Automation', 'Time Tracking', 'Reporting']
},
{
  id: 'logistics',
  name: 'Logistics',
  description: 'Live shipment visibility for your team and your customers.',
  icon: TruckIcon,
  solutions: ['Shipment Tracking', 'Fleet Dashboard', 'System Integration', 'Mobile App', 'Automation', 'Reporting']
},
{
  id: 'construction',
  name: 'Construction',
  description: 'Project, cost and site reporting connected from field to office.',
  icon: BuildingIcon,
  solutions: ['Project Management', 'Site Reporting App', 'Quotation Tools', 'Portfolio Website', 'Document Tracking', 'Reporting Dashboards']
},
{
  id: 'agriculture',
  name: 'Agriculture',
  description: 'Supply-chain traceability and direct routes to market.',
  icon: SproutIcon,
  solutions: ['Product Tracking', 'Marketplace Presence', 'Buying Tools', 'Mobile Data Entry', 'Website', 'Reporting']
},
{
  id: 'startups',
  name: 'Startups',
  description: 'From proposition to launched product without burning the runway.',
  icon: RocketIcon,
  solutions: ['First Version Build', 'Brand Identity', 'Landing Pages', 'Growth Experiments', 'Usage Tracking', 'Cloud Setup']
}];