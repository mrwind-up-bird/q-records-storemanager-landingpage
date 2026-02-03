export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  store: string;
  city: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AirtableLead {
  fields: {
    'First Name': string;
    'Last Name': string;
    'Email': string;
    'Phone'?: string;
    'Store Name': string;
    'Store City': string;
    'Catalog Size': string;
    'Current System'?: string;
    'Message'?: string;
    'Status': 'Inbound' | 'Contacted' | 'Qualified' | 'Closed';
    'Source': string;
    'Created At': string;
  };
}

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}
