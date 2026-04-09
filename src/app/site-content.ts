export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  summary: string;
  description: string;
  benefits: string[];
}

export interface SimpleItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  tel?: string;
  address: string[];
  website: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

export const CONTACT_DETAILS: ContactDetails = {
  email: 'info@actiniumconsultations.com',
  phone: '+962 79 150 9001',
  tel: '+962 6 401 6887',
  address: [
    'Al Swaifyeh, Al-Wakalaat Street',
    'Ghadaf Commercial Complex, 2nd Floor'
  ],
  website: 'www.actiniumconsultations.com'
};

export const HOME_HIGHLIGHTS: SimpleItem[] = [
  {
    title: 'Faster Certification',
    description: 'We shorten the path from gap analysis to audit readiness with a practical rollout plan.'
  },
  {
    title: 'Clear Governance',
    description: 'Policies, roles, controls, and reporting are translated into a structure your team can use.'
  },
  {
    title: 'Risk Reduction',
    description: 'Our frameworks help you reduce compliance gaps, audit surprises, and operational uncertainty.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'ISO 9001 Quality Management',
    slug: 'iso-9001',
    summary: 'Build a quality management system that improves consistency, customer trust, and process maturity.',
    description:
      'We help organizations design, document, implement, and maintain ISO 9001 systems that support measurable quality improvements.',
    benefits: [
      'Process mapping and quality manual design',
      'KPI alignment and internal control setup',
      'Pre-certification audit readiness support'
    ]
  },
  {
    title: 'ISO 27001 Information Security',
    slug: 'iso-27001',
    summary: 'Protect information assets with risk-based controls, governance, and structured security operations.',
    description:
      'From risk assessments to statement of applicability design, we help teams implement ISO 27001 in a way that fits their business model.',
    benefits: [
      'Security risk assessment and treatment planning',
      'ISMS policy development and control mapping',
      'Audit preparation and awareness training'
    ]
  },
  {
    title: 'ISO 14001 Environmental Management',
    slug: 'iso-14001',
    summary: 'Reduce environmental impact and improve compliance through a practical environmental management system.',
    description:
      'We guide your environmental management journey with documentation, implementation support, and continual improvement planning.',
    benefits: [
      'Environmental aspect and impact analysis',
      'Regulatory compliance structuring',
      'Operational controls and objective tracking'
    ]
  },
  {
    title: 'Internal Audit and Assurance',
    slug: 'internal-audit',
    summary: 'Strengthen assurance with independent reviews, internal audit programs, and management review support.',
    description:
      'Our audit support services help leadership verify conformance, identify gaps early, and maintain certification readiness year-round.',
    benefits: [
      'Internal audit plans and checklists',
      'Corrective action follow-up support',
      'Management review facilitation'
    ]
  }
];

export const ADVISORY_CAPABILITIES: SimpleItem[] = [
  {
    title: 'GRC Advisory',
    description: 'Governance, risk, and compliance operating models tailored to regulated and growth-stage organizations.'
  },
  {
    title: 'IT Governance',
    description: 'Technology governance, policy alignment, and control design that support resilience and accountability.'
  },
  {
    title: 'Cybersecurity Readiness',
    description: 'Foundational security controls, readiness assessments, and improvement plans for modern digital risks.'
  }
];

export const APPROACH_STEPS: SimpleItem[] = [
  {
    title: 'Assess',
    description: 'We review your current practices, documentation, and controls to identify gaps and priorities.'
  },
  {
    title: 'Design',
    description: 'We build a practical management system tailored to your structure, sector, and certification goals.'
  },
  {
    title: 'Implement',
    description: 'We train teams, deploy procedures, and establish the operational rhythm needed for conformance.'
  },
  {
    title: 'Assure',
    description: 'Internal audits, management reviews, and corrective actions are coordinated before certification.'
  },
  {
    title: 'Sustain',
    description: 'We support continual improvement so the system keeps working after the initial certification milestone.'
  }
];

export const VALUES: SimpleItem[] = [
  {
    title: 'Integrity',
    description: 'We work transparently and hold ourselves to high professional and ethical standards.'
  },
  {
    title: 'Excellence',
    description: 'Our engagements are designed around measurable results, audit quality, and long-term improvement.'
  },
  {
    title: 'Client-Centricity',
    description: 'Each project is adapted to the client’s context, maturity, and operating constraints.'
  },
  {
    title: 'Collaboration',
    description: 'We partner closely with leadership and delivery teams so improvements are adopted, not shelved.'
  }
];

export const FAQS: SimpleItem[] = [
  {
    title: 'How long does ISO certification usually take?',
    description:
      'Most engagements range from 3 to 6 months depending on scope, documentation maturity, team availability, and the targeted standard.'
  },
  {
    title: 'Do you help us choose a certification body?',
    description:
      'Yes. We can help shortlist accredited certification bodies, compare options, and prepare your team for Stage 1 and Stage 2 audits.'
  },
  {
    title: 'Can you train our team before the audit?',
    description:
      'Yes. We provide awareness sessions, role-based guidance, mock interviews, and evidence-readiness coaching before the audit.'
  }
];

export const INDUSTRIES: string[] = [
  'Manufacturing',
  'Technology',
  'Healthcare',
  'Finance',
  'Logistics',
  'Professional Services'
];

export const TEAM: TeamMember[] = [
  { name: 'Abdulrahman Irshaid', role: 'CEO' },
  { name: 'Tamador Khader', role: 'Technical Director' },
  { name: 'Hatem Irshaid', role: 'COO' },
  { name: 'Sattam Alenazi', role: 'Business Development' },
  { name: 'Raed Irshaid', role: 'CTO' },
  { name: 'Eng. Omar Alqasem', role: 'Assistant Consultant' }
];
