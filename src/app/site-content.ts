export type Locale = 'en' | 'ar';

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  tel: string;
  address: string[];
  website: string;
}

export interface PartnerLogo {
  src: string;
}

export interface SeoContent {
  titles: Record<string, string>;
  description: string;
}

export interface HeaderContent {
  nav: NavItem[];
  switchLanguage: string;
  toggleNavigationLabel: string;
}

export interface FooterContent {
  contactTitle: string;
  companyTitle: string;
  followTitle: string;
  socialHandle: string;
  companyLinks: NavItem[];
}

export interface CommonContent {
  exploreServices: string;
  learnMore: string;
  bookConsultation: string;
  keyServices: string;
  servicesAndActivities: string;
  getInTouch: string;
  sendMessage: string;
  scrollToTop: string;
  telLabel: string;
  mobileLabel: string;
}

export interface HeroWithLines {
  badge: string;
  titleLines: string[];
  description: string;
  ctaLabel: string;
  imageAlt: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  fragment: string;
}

export interface ApproachStep {
  icon: string;
  title: string;
  description: string;
}

export interface RegionsContent {
  title: string;
  description: string;
  industriesLabel: string;
  industries: string[];
  mapAlt: string;
}

export interface ClientsContent {
  title: string;
  description: string;
  logoAltPrefix: string;
}

export interface FaqItem {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: HeroWithLines;
  highlights: HighlightItem[];
  servicesTitle: string;
  serviceCards: ServiceCard[];
  approachTitle: string;
  approachSteps: ApproachStep[];
  regions: RegionsContent;
  clients: ClientsContent;
  faqsTitle: string;
  faqs: FaqItem[];
}

export interface AboutHeroContent {
  title: string;
  paragraphs: string[];
  sectorsTitle: string;
  sectors: string[];
  imageAlt: string;
}

export interface IconTextItem {
  icon: string;
  title: string;
  description: string;
}

export interface FocusArea {
  icon: string;
  title: string;
}

export interface AboutContent {
  hero: AboutHeroContent;
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  valuesTitle: string;
  values: IconTextItem[];
  differentiatorsTitle: string;
  differentiators: string[];
  focusTitle: string;
  focusDescription: string;
  focusAreas: FocusArea[];
  approachTitle: string;
}

export interface StandardsCard {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceSection {
  type: 'standard' | 'standards';
  id: string;
  icon: string;
  title: string;
  description: string;
  itemsHeading: string;
  items: string[];
  standardsHeading?: string;
  standards?: StandardsCard[];
}

export interface ServicesContent {
  hero: {
    title: string;
    paragraphs: string[];
    points: string[];
  };
  sections: ServiceSection[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export interface ContactPageContent {
  hero: {
    title: string;
    description: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitLabel: string;
    successMessage: string;
    validation: {
      nameRequired: string;
      nameMinlength: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      subjectMinlength: string;
      messageRequired: string;
      messageMinlength: string;
    };
  };
  details: {
    emailTitle: string;
    phoneTitle: string;
    locationTitle: string;
    onlineTitle: string;
  };
  mapEmbedUrl: string;
}

export interface SiteContent {
  seo: SeoContent;
  header: HeaderContent;
  footer: FooterContent;
  common: CommonContent;
  contactDetails: ContactDetails;
  home: HomeContent;
  about: AboutContent;
  services: ServicesContent;
  contactPage: ContactPageContent;
}

const sharedContact = {
  email: 'info@actiniumconsultations.com',
  phone: '+962 79 150 9001',
  tel: '+962 6 401 6887',
  website: 'www.actiniumconsultations.com'
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: '/assets/partner1.png' },
  { src: '/assets/partner2.png' },
  { src: '/assets/partner3.png' },
  { src: '/assets/partner4.png' },
  { src: '/assets/partner5.png' },
  { src: '/assets/partner6.png' },
  { src: '/assets/partner7.png' },
  { src: '/assets/partner8.png' },
  { src: '/assets/partner9.png.png' },
  { src: '/assets/partner10.png' }
];

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    seo: {
      titles: {
        '/': 'Actinium Consulting | Home',
        '/about': 'Actinium Consulting | About',
        '/services': 'Actinium Consulting | Services',
        '/contact': 'Actinium Consulting | Contact'
      },
      description:
        'Actinium Consulting helps organizations in Jordan and Saudi Arabia strengthen governance, improve compliance, and build practical management systems.'
    },
    header: {
      nav: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
      ] as NavItem[],
      switchLanguage: 'العربية',
      toggleNavigationLabel: 'Toggle navigation'
    },
    footer: {
      contactTitle: 'Contact Us',
      companyTitle: 'Company',
      followTitle: 'Follow Us',
      socialHandle: '@ActiniumConsultationsJo',
      companyLinks: [
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
      ] as NavItem[]
    },
    common: {
      exploreServices: 'Explore Services',
      learnMore: 'Learn more',
      bookConsultation: 'Book a Consultation',
      keyServices: 'Key Services',
      servicesAndActivities: 'Services and Activities',
      getInTouch: 'Get in Touch',
      sendMessage: 'Send Message',
      scrollToTop: 'Scroll to top',
      telLabel: 'Tel',
      mobileLabel: 'Mob'
    },
    contactDetails: {
      ...sharedContact,
      address: ['Al Swaifyeh, Al-Wakalaat Street', 'Ghadaf Commercial Complex, 2nd Floor']
    } as ContactDetails,
    home: {
      hero: {
        badge: 'Driving Excellence. Ensuring Compliance',
        titleLines: ['Empowering', 'Organizations to Achieve', 'ISO Excellence'],
        description:
          'Actinium for Management Consultations is a specialized consulting firm delivering advisory and capacity-building services that strengthen governance, improve performance, and support sustainable growth.',
        ctaLabel: 'Explore Services',
        imageAlt: 'Office conference room'
      },
      highlights: [
        {
          icon: 'fa-solid fa-rocket',
          title: 'Faster Certification',
          description: 'We shorten the path from gap analysis to audit readiness with a practical rollout plan.'
        },
        {
          icon: 'fa-regular fa-clipboard',
          title: 'Clear Governance',
          description: 'Policies, roles, controls, and reporting are turned into a structure your team can use.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Risk Reduction',
          description: 'Our frameworks reduce compliance gaps, audit surprises, and operational uncertainty.'
        }
      ],
      servicesTitle: 'Our Services',
      serviceCards: [
        {
          icon: 'fa-solid fa-chess-knight',
          title: 'Strategy, Growth & Organizational Development',
          fragment: 'strategy-growth'
        },
        {
          icon: 'fa-solid fa-scale-balanced',
          title: 'Corporate Governance, Risk, Compliance',
          fragment: 'corporate-governance'
        },
        {
          icon: 'fa-solid fa-file-signature',
          title: 'Policies, Procedures & Process Management',
          fragment: 'policies-procedures'
        },
        {
          icon: 'fa-solid fa-certificate',
          title: 'ISO Management Systems, ESG',
          fragment: 'iso-management'
        },
        {
          icon: 'fa-solid fa-graduation-cap',
          title: 'Training & Capacity Building',
          fragment: 'training-capacity'
        },
        {
          icon: 'fa-solid fa-microchip',
          title: 'Digital Transformation, Artificial Intelligence & Technology Advisory',
          fragment: 'digital-transformation'
        }
      ],
      approachTitle: 'Our Approach',
      approachSteps: [
        {
          icon: 'fa-solid fa-magnifying-glass',
          title: 'Assess',
          description: 'We review your operations, documentation, and controls to identify priorities and gaps.'
        },
        {
          icon: 'fa-solid fa-file-pen',
          title: 'Design',
          description: 'We shape a practical model that fits your structure, sector, and growth objectives.'
        },
        {
          icon: 'fa-solid fa-briefcase',
          title: 'Implement',
          description: 'We translate plans into procedures, team practices, and measurable execution.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Assure',
          description: 'We validate readiness through reviews, corrective actions, and management oversight.'
        },
        {
          icon: 'fa-solid fa-arrows-rotate',
          title: 'Sustain',
          description: 'We support continual improvement so progress remains embedded after the initial milestone.'
        }
      ],
      regions: {
        title: 'Industries & Regions',
        description:
          'We support organizations across Jordan, Saudi Arabia, and the wider region with consulting engagements tailored to regulated, operational, and growth-focused environments.',
        industriesLabel: 'We regularly work with organizations in:',
        industries: [
          'Manufacturing',
          'Technology',
          'Finance',
          'Healthcare',
          'Telecommunications',
          'Investment',
          'Education',
          'Government'
        ],
        mapAlt: 'Map of Jordan and Saudi Arabia'
      },
      clients: {
        title: 'Our Clients',
        description: 'Proud to consult and partner with leading organizations.',
        logoAltPrefix: 'Partner logo'
      },
      faqsTitle: 'Frequently Asked Questions',
      faqs: [
        {
          title: 'How long does certification usually take?',
          description:
            'Most engagements range from 3 to 6 months depending on scope, documentation maturity, team availability, and the targeted framework.'
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
      ]
    },
      about: {
        hero: {
          title: 'About Actinium Consulting',
        paragraphs: [
          'Actinium Consulting provides professional advisory services to organizations across the Middle East. We help clients improve operations, strengthen management systems, enhance compliance, and support long-term business success.',
          'Our experience spans a broad range of industries, allowing us to deliver tailored solutions that reflect the strategic, operational, and regulatory needs of each sector.'
        ],
        sectorsTitle: 'Our sector experience includes:',
        sectors: [
          'Manufacturing',
          'Technology',
          'Finance',
          'Healthcare',
          'Telecommunications',
          'Investment',
          'Education',
          'Government',
          'Energy',
          'Construction',
          'Logistics and Supply Chain',
          'Retail'
        ],
        imageAlt: 'A professional diverse business team standing together in an office setting'
      },
      vision: {
        title: 'Our Vision',
        description:
          'To be a trusted regional partner in management consulting, recognized for practical expertise, integrity, and measurable institutional impact.'
      },
      mission: {
        title: 'Our Mission',
        description:
          'To equip organizations with the insight, systems, and capabilities they need to achieve excellence, strengthen governance, and sustain improvement.'
      },
      valuesTitle: 'Core Values',
      values: [
        {
          icon: 'fa-solid fa-scale-balanced',
          title: 'Integrity',
          description: 'We uphold transparency, professionalism, and ethical conduct in every engagement.'
        },
        {
          icon: 'fa-solid fa-gem',
          title: 'Excellence',
          description: 'We focus on quality, measurable outcomes, and disciplined execution.'
        },
        {
          icon: 'fa-solid fa-users',
          title: 'Client-Centricity',
          description: 'We adapt each engagement to the client context, constraints, and priorities.'
        },
        {
          icon: 'fa-solid fa-handshake',
          title: 'Collaboration',
          description: 'We work closely with leadership and teams so improvements are adopted in practice.'
        }
      ],
      differentiatorsTitle: 'What Sets Actinium Apart',
      differentiators: [
        'Customized solutions, not generic models.',
        'Integrated expertise across strategy, governance, operations, technology, and Artificial Intelligence.',
        'Experienced professionals with practical insight, sector knowledge, and implementation-focused advisory.',
        'Stronger policies, processes, and management systems that create long-term institutional value.',
        'Practical implementation supported by training, knowledge transfer, and capability development.',
        'A partnership approach focused on outcomes, continuity, and sustainable growth.'
      ],
      focusTitle: 'Our Advisory Focus',
      focusDescription:
        'Actinium supports organizations across a wide range of institutional and operational priorities, helping clients strengthen management systems, governance practices, internal capabilities, and transformation readiness.',
      focusAreas: [
        {
          icon: 'fa-solid fa-chess-knight',
          title: 'Strategy & Organizational Development'
        },
        {
          icon: 'fa-solid fa-gavel',
          title: 'Governance & Compliance'
        },
        {
          icon: 'fa-solid fa-chart-line',
          title: 'Operational Excellence & Management Systems'
        },
        {
          icon: 'fa-solid fa-microchip',
          title: 'Transformation, Technology & Artificial Intelligence'
        }
      ],
      approachTitle: 'Our Approach'
    },
    services: {
      hero: {
        title: 'Our Services',
        paragraphs: [
          'We work with organizations throughout their growth journey by delivering specialized consulting services that promote excellence, improve compliance, and support continuous progress.',
          'Each solution is designed around the client specific needs to strengthen governance, optimize operations, and create long-term value.'
        ],
        points: [
          'Strategy, Growth & Organizational Development',
          'Corporate Governance, Risk, Compliance',
          'Policies, Procedures & Process Management',
          'ISO Management Systems, ESG',
          'Training & Capacity Building',
          'Digital Transformation, Artificial Intelligence & Technology Advisory'
        ]
      },
      sections: [
        {
          type: 'standard',
          id: 'strategy-growth',
          icon: 'fa-solid fa-chess-knight',
          title: 'Strategy, Growth & Organizational Development',
          description:
            'Actinium supports organizations in setting clear direction, improving internal effectiveness, and building the capabilities needed for sustainable growth.',
          itemsHeading: 'Key Services',
          items: [
            'Developing strategic plans and business priorities',
            'Supporting organizational restructuring and development',
            'Clarifying roles, responsibilities, and reporting lines',
            'Improving performance and overall organizational effectiveness',
            'Strengthening institutional capabilities for long-term success'
          ]
        },
        {
          type: 'standard',
          id: 'corporate-governance',
          icon: 'fa-solid fa-scale-balanced',
          title: 'Corporate Governance, Risk, Compliance (GRC)',
          description:
            'We help organizations build effective governance, risk, and compliance frameworks that improve accountability and support confident decision-making.',
          itemsHeading: 'Key Services',
          items: [
            'Governance framework design and enhancement',
            'Board and committee structure development',
            'Charters, authority matrices, and accountability frameworks',
            'Compliance framework development',
            'Risk management integration and alignment',
            'Transparency and reporting enhancement',
            'Governance policy development'
          ]
        },
        {
          type: 'standard',
          id: 'policies-procedures',
          icon: 'fa-solid fa-file-signature',
          title: 'Policies, Procedures & Process Management',
          description:
            'Actinium helps organizations create clear and well-structured policy and process frameworks that improve consistency, strengthen accountability, and support efficient operations.',
          itemsHeading: 'Key Services',
          items: [
            'Developing policies and procedures manuals',
            'Mapping processes and designing workflows',
            'Improving and redesigning business processes',
            'Preparing standard operating procedures',
            'Designing forms, templates, and records',
            'Clarifying roles, responsibilities, and process ownership',
            'Structuring and organizing operational documentation'
          ]
        },
        {
          type: 'standards',
          id: 'iso-management',
          icon: 'fa-solid fa-certificate',
          title: 'ISO Management Systems, ESG',
          description:
            'Actinium provides consulting, implementation, and training services for internationally recognized management systems and related frameworks that support quality, resilience, sustainability, and organizational excellence.',
          itemsHeading: 'Key Services',
          items: [
            'Gap assessment and readiness review',
            'Management system design and implementation',
            'Documentation and process alignment',
            'Awareness sessions and staff training',
            'Internal preparation for certification or assessment',
            'Continuous improvement support',
            'Management review and performance monitoring',
            'Sustainability and excellence framework alignment'
          ],
          standardsHeading: 'Standards & Frameworks We Support',
          standards: [
            {
              title: 'Quality, Customer Experience & Organizational Excellence',
              description:
                'This area helps organizations improve quality, increase customer satisfaction, strengthen consistency, and enhance performance through standards such as ISO 9001, ISO 10001, GMP, and related excellence frameworks.',
              tags: ['ISO 9001', 'ISO 10001', 'GMP']
            },
            {
              title: 'Health, Safety & Business Resilience',
              description:
                'This area helps organizations create safer workplaces, improve preparedness, and maintain continuity during disruptions through standards such as ISO 45001 and ISO 22301.',
              tags: ['ISO 45001', 'ISO 22301']
            },
            {
              title: 'Environmental, Energy, ESG & Sustainability',
              description:
                'This area supports organizations in improving environmental performance, using resources more efficiently, and advancing sustainability and ESG goals through standards such as ISO 14001, ISO 50001, ISO 26000, and related frameworks.',
              tags: ['ISO 14001', 'ISO 50001', 'ISO 26000']
            },
            {
              title: 'Risk, Governance & Asset Management',
              description:
                'This area helps organizations improve decision-making, manage risks more effectively, strengthen governance practices, and oversee assets through frameworks such as ISO 31000 and the ISO 55000 series.',
              tags: ['ISO 31000', 'ISO 55000 Series']
            },
            {
              title: 'Information Security, Privacy & Artificial Intelligence',
              description:
                'This area supports organizations in protecting information, managing privacy requirements, and establishing effective oversight for digital and Artificial Intelligence systems through standards such as ISO/IEC 27001, ISO/IEC 27701, ISO/IEC 42001, ISO/IEC 20000-1, and ISO/IEC 38500.',
              tags: ['ISO/IEC 27001', 'ISO/IEC 27701', 'ISO/IEC 42001', 'ISO/IEC 20000-1', 'ISO/IEC 38500']
            },
            {
              title: 'Sector-Specific Management Systems',
              description:
                'This area addresses the needs of specialized sectors by improving compliance, technical competence, service quality, and operational control through standards such as ISO 22000, HACCP, and ISO 21001.',
              tags: ['ISO 22000', 'HACCP', 'ISO 21001']
            }
          ]
        },
        {
          type: 'standard',
          id: 'training-capacity',
          icon: 'fa-solid fa-graduation-cap',
          title: 'Training & Capacity Building',
          description:
            'Actinium delivers practical training and capability-building solutions that help organizations strengthen knowledge, improve performance, and embed improvement across teams and functions.',
          itemsHeading: 'Services and Activities',
          items: [
            'Training needs assessment',
            'Development of customized training programs',
            'Standards awareness and implementation training',
            'Professional development workshops',
            'Capacity-building initiatives',
            'Knowledge transfer support',
            'Learning evaluation and effectiveness follow-up',
            'Skills strengthening linked to organizational priorities'
          ]
        },
        {
          type: 'standard',
          id: 'digital-transformation',
          icon: 'fa-solid fa-microchip',
          title: 'Digital Transformation, Artificial Intelligence & Technology Advisory',
          description:
            'We support organizations in aligning digital initiatives, emerging technologies, and Artificial Intelligence with strategic priorities to improve efficiency, enable innovation, and strengthen future readiness.',
          itemsHeading: 'Services and Activities',
          items: [
            'Digital transformation advisory',
            'Technology enablement planning',
            'Process automation support',
            'Digital service improvement',
            'Data-informed decision support',
            'Artificial Intelligence governance and alignment',
            'AI management system readiness support',
            'Technology advisory linked to business needs',
            'Transformation planning and implementation support'
          ]
        }
      ],
      cta: {
        title: 'Ready to Elevate Your Organization?',
        description:
          'Contact us to discover how our tailored consulting services can bring lasting value to your business.',
        buttonLabel: 'Get in Touch'
      }
    },
    contactPage: {
      hero: {
        title: 'Contact Actinium Consulting',
        description: 'Ready to start your journey? Reach out for a free consultation.'
      },
      form: {
        nameLabel: 'Name',
        emailLabel: 'Email Address',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
        submitLabel: 'Send Message',
        successMessage: 'Form submitted locally only.',
        validation: {
          nameRequired: 'Please enter your name.',
          nameMinlength: 'Name must be at least 2 characters.',
          emailRequired: 'Please enter your email address.',
          emailInvalid: 'Enter a valid email address.',
          subjectRequired: 'Please enter a subject.',
          subjectMinlength: 'Subject must be at least 3 characters.',
          messageRequired: 'Please enter a message.',
          messageMinlength: 'Message must be at least 10 characters.'
        }
      },
      details: {
        emailTitle: 'Email',
        phoneTitle: 'Phone',
        locationTitle: 'Location',
        onlineTitle: 'Online'
      },
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3385.11528924027!2d35.86245038483863!3d31.95776888122701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU3JzI4LjAiTiAzNcKwNTEnMzYuOSJF!5e0!3m2!1sen!2sjo!4v1775738250668!5m2!1sen!2sjo'
    }
  },
  ar: {
    seo: {
      titles: {
        '/': 'أكتينيوم للاستشارات | الرئيسية',
        '/about': 'أكتينيوم للاستشارات | من نحن',
        '/services': 'أكتينيوم للاستشارات | الخدمات',
        '/contact': 'أكتينيوم للاستشارات | اتصل بنا'
      },
      description:
        'تساعد أكتينيوم للاستشارات المؤسسات في الأردن والسعودية على تعزيز الحوكمة وتحسين الامتثال وبناء أنظمة إدارية عملية قابلة للتنفيذ.'
    },
    header: {
      nav: [
        { label: 'الرئيسية', path: '/' },
        { label: 'من نحن', path: '/about' },
        { label: 'الخدمات', path: '/services' },
        { label: 'اتصل بنا', path: '/contact' }
      ] as NavItem[],
      switchLanguage: 'English',
      toggleNavigationLabel: 'تبديل القائمة'
    },
    footer: {
      contactTitle: 'تواصل معنا',
      companyTitle: 'الشركة',
      followTitle: 'تابعنا',
      socialHandle: '@ActiniumConsultationsJo',
      companyLinks: [
        { label: 'من نحن', path: '/about' },
        { label: 'الخدمات', path: '/services' },
        { label: 'اتصل بنا', path: '/contact' }
      ] as NavItem[]
    },
    common: {
      exploreServices: 'استكشف الخدمات',
      learnMore: 'اعرف المزيد',
      bookConsultation: 'احجز استشارة',
      keyServices: 'الخدمات الرئيسية',
      servicesAndActivities: 'الخدمات والأنشطة',
      getInTouch: 'تواصل معنا',
      sendMessage: 'إرسال الرسالة',
      scrollToTop: 'العودة إلى الأعلى',
      telLabel: 'هاتف',
      mobileLabel: 'جوال'
    },
    contactDetails: {
      ...sharedContact,
      address: ['الصويفية، شارع الوكالات', 'مجمع غداف التجاري، الطابق الثاني']
    } as ContactDetails,
    home: {
      hero: {
        badge: 'نقود التميز ونضمن الامتثال',
        titleLines: ['نُمكّن المؤسسات', 'من تحقيق التميز', 'في معايير الأيزو'],
        description:
          'أكتينيوم للاستشارات الإدارية شركة متخصصة تقدم خدمات استشارية وبناء قدرات تساعد المؤسسات على تعزيز الحوكمة وتحسين الأداء ودعم النمو المستدام.',
        ctaLabel: 'استكشف الخدمات',
        imageAlt: 'قاعة اجتماعات مكتبية'
      },
      highlights: [
        {
          icon: 'fa-solid fa-rocket',
          title: 'اعتماد أسرع',
          description: 'نختصر الطريق من تحليل الفجوات إلى الجاهزية للتدقيق من خلال خطة تنفيذ عملية.'
        },
        {
          icon: 'fa-regular fa-clipboard',
          title: 'حوكمة أوضح',
          description: 'نحوّل السياسات والأدوار والضوابط والتقارير إلى هيكل عملي يسهل على فريقك تطبيقه.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'خفض للمخاطر',
          description: 'تساعد أطرنا على تقليل فجوات الامتثال ومفاجآت التدقيق وعدم اليقين التشغيلي.'
        }
      ],
      servicesTitle: 'خدماتنا',
      serviceCards: [
        {
          icon: 'fa-solid fa-chess-knight',
          title: 'الاستراتيجية والنمو والتطوير المؤسسي',
          fragment: 'strategy-growth'
        },
        {
          icon: 'fa-solid fa-scale-balanced',
          title: 'الحوكمة المؤسسية والمخاطر والامتثال',
          fragment: 'corporate-governance'
        },
        {
          icon: 'fa-solid fa-file-signature',
          title: 'السياسات والإجراءات وإدارة العمليات',
          fragment: 'policies-procedures'
        },
        {
          icon: 'fa-solid fa-certificate',
          title: 'أنظمة الإدارة ISO ومعايير ESG',
          fragment: 'iso-management'
        },
        {
          icon: 'fa-solid fa-graduation-cap',
          title: 'التدريب وبناء القدرات',
          fragment: 'training-capacity'
        },
        {
          icon: 'fa-solid fa-microchip',
          title: 'التحول الرقمي والذكاء الاصطناعي والاستشارات التقنية',
          fragment: 'digital-transformation'
        }
      ],
      approachTitle: 'منهجية العمل',
      approachSteps: [
        {
          icon: 'fa-solid fa-magnifying-glass',
          title: 'التقييم',
          description: 'نراجع العمليات والوثائق والضوابط لتحديد الأولويات والفجوات بوضوح.'
        },
        {
          icon: 'fa-solid fa-file-pen',
          title: 'التصميم',
          description: 'نصمم نموذجًا عمليًا يتناسب مع هيكل المؤسسة وقطاعها وأهدافها.'
        },
        {
          icon: 'fa-solid fa-briefcase',
          title: 'التنفيذ',
          description: 'نحوّل الخطة إلى إجراءات وممارسات تشغيلية ونتائج قابلة للقياس.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'التحقق',
          description: 'نقيس الجاهزية من خلال المراجعات والإجراءات التصحيحية والإشراف الإداري.'
        },
        {
          icon: 'fa-solid fa-arrows-rotate',
          title: 'الاستدامة',
          description: 'ندعم التحسين المستمر بحيث يستمر الأثر بعد الوصول إلى المرحلة الأولى.'
        }
      ],
      regions: {
        title: 'القطاعات والمناطق',
        description:
          'ندعم المؤسسات في الأردن والسعودية والمنطقة الأوسع من خلال مشاريع استشارية مصممة لبيئات تنظيمية وتشغيلية وبيئات نمو مختلفة.',
        industriesLabel: 'نعمل باستمرار مع مؤسسات في القطاعات التالية:',
        industries: [
          'التصنيع',
          'التقنية',
          'القطاع المالي',
          'الرعاية الصحية',
          'الاتصالات',
          'الاستثمار',
          'التعليم',
          'القطاع الحكومي'
        ],
        mapAlt: 'خريطة الأردن والسعودية'
      },
      clients: {
        title: 'عملاؤنا',
        description: 'نفخر بشراكاتنا الاستشارية مع مؤسسات رائدة.',
        logoAltPrefix: 'شعار عميل'
      },
      faqsTitle: 'الأسئلة الشائعة',
      faqs: [
        {
          title: 'كم تستغرق مشاريع الاعتماد عادة؟',
          description:
            'تتراوح معظم المشاريع بين 3 و6 أشهر بحسب النطاق ومستوى نضج الوثائق وتوفر الفريق والإطار المستهدف.'
        },
        {
          title: 'هل تساعدوننا في اختيار جهة الاعتماد؟',
          description:
            'نعم. يمكننا مساعدتكم في حصر جهات الاعتماد المعتمدة والمقارنة بينها وتجهيز الفريق لتدقيق المرحلتين الأولى والثانية.'
        },
        {
          title: 'هل يمكنكم تدريب فريقنا قبل التدقيق؟',
          description:
            'نعم. نقدم جلسات توعوية وإرشادًا بحسب الأدوار ومقابلات تجريبية وتجهيزًا للأدلة قبل التدقيق.'
        }
      ]
    },
      about: {
        hero: {
          title: 'من نحن',
        paragraphs: [
          'تقدم أكتينيوم للاستشارات خدمات استشارية مهنية للمؤسسات في الشرق الأوسط. نساعد عملاءنا على تحسين العمليات وتعزيز الأنظمة الإدارية ورفع مستوى الامتثال ودعم النجاح طويل المدى.',
          'تمتد خبرتنا عبر مجموعة واسعة من القطاعات، مما يتيح لنا تقديم حلول مخصصة تعكس الاحتياجات الاستراتيجية والتشغيلية والتنظيمية لكل قطاع.'
        ],
        sectorsTitle: 'تشمل خبرتنا القطاعية:',
        sectors: [
          'التصنيع',
          'التقنية',
          'القطاع المالي',
          'الرعاية الصحية',
          'الاتصالات',
          'الاستثمار',
          'التعليم',
          'القطاع الحكومي',
          'الطاقة',
          'الإنشاءات',
          'الخدمات اللوجستية وسلاسل الإمداد',
          'التجزئة'
        ],
        imageAlt: 'فريق عمل متنوع في بيئة مكتبية'
      },
      vision: {
        title: 'رؤيتنا',
        description:
          'أن نكون شريكًا إقليميًا موثوقًا في الاستشارات الإدارية، معروفًا بالخبرة العملية والنزاهة والأثر المؤسسي القابل للقياس.'
      },
      mission: {
        title: 'رسالتنا',
        description:
          'تمكين المؤسسات من خلال المعرفة والأنظمة والقدرات اللازمة لتحقيق التميز وتعزيز الحوكمة واستدامة التحسين.'
      },
      valuesTitle: 'قيمنا الأساسية',
      values: [
        {
          icon: 'fa-solid fa-scale-balanced',
          title: 'النزاهة',
          description: 'نلتزم بالشفافية والمهنية والسلوك الأخلاقي في جميع أعمالنا.'
        },
        {
          icon: 'fa-solid fa-gem',
          title: 'التميّز',
          description: 'نركز على الجودة والنتائج القابلة للقياس والتنفيذ المنضبط.'
        },
        {
          icon: 'fa-solid fa-users',
          title: 'التركيز على العميل',
          description: 'نصمم كل مشروع بما يتناسب مع واقع العميل وقيوده وأولوياته.'
        },
        {
          icon: 'fa-solid fa-handshake',
          title: 'التعاون',
          description: 'نعمل عن قرب مع القيادات والفرق لضمان تطبيق التحسينات عمليًا.'
        }
      ],
      differentiatorsTitle: 'ما الذي يميز أكتينيوم',
      differentiators: [
        'حلول مخصصة وليست نماذج عامة.',
        'خبرة متكاملة تمتد عبر الاستراتيجية والحوكمة والعمليات والتقنية والذكاء الاصطناعي.',
        'فريق من المختصين ذوي الخبرة العملية والمعرفة القطاعية والتركيز على التنفيذ.',
        'سياسات وعمليات وأنظمة إدارية أقوى تخلق قيمة مؤسسية طويلة الأمد.',
        'تنفيذ عملي مدعوم بالتدريب ونقل المعرفة وتطوير القدرات.',
        'نهج شراكة يركز على النتائج والاستمرارية والنمو المستدام.'
      ],
      focusTitle: 'محاورنا الاستشارية',
      focusDescription:
        'تدعم أكتينيوم المؤسسات في مجموعة واسعة من الأولويات المؤسسية والتشغيلية، من خلال تعزيز الأنظمة الإدارية وممارسات الحوكمة والقدرات الداخلية والاستعداد للتحول.',
      focusAreas: [
        {
          icon: 'fa-solid fa-chess-knight',
          title: 'الاستراتيجية والتطوير المؤسسي'
        },
        {
          icon: 'fa-solid fa-gavel',
          title: 'الحوكمة والامتثال'
        },
        {
          icon: 'fa-solid fa-chart-line',
          title: 'التميّز التشغيلي والأنظمة الإدارية'
        },
        {
          icon: 'fa-solid fa-microchip',
          title: 'التحول والتقنية والذكاء الاصطناعي'
        }
      ],
      approachTitle: 'منهجية العمل'
    },
    services: {
      hero: {
        title: 'خدماتنا',
        paragraphs: [
          'نعمل مع المؤسسات في مختلف مراحل نموها من خلال خدمات استشارية متخصصة تعزز التميز وتحسن الامتثال وتدعم التقدم المستمر.',
          'يتم تصميم كل حل وفق احتياجات العميل الخاصة بما يعزز الحوكمة ويحسن العمليات ويصنع قيمة طويلة المدى.'
        ],
        points: [
          'الاستراتيجية والنمو والتطوير المؤسسي',
          'الحوكمة المؤسسية والمخاطر والامتثال',
          'السياسات والإجراءات وإدارة العمليات',
          'أنظمة الإدارة ISO ومعايير ESG',
          'التدريب وبناء القدرات',
          'التحول الرقمي والذكاء الاصطناعي والاستشارات التقنية'
        ]
      },
      sections: [
        {
          type: 'standard',
          id: 'strategy-growth',
          icon: 'fa-solid fa-chess-knight',
          title: 'الاستراتيجية والنمو والتطوير المؤسسي',
          description:
            'تساعد أكتينيوم المؤسسات على تحديد الاتجاه بوضوح وتحسين الفاعلية الداخلية وبناء القدرات اللازمة للنمو المستدام.',
          itemsHeading: 'الخدمات الرئيسية',
          items: [
            'إعداد الخطط الاستراتيجية والأولويات المؤسسية',
            'دعم إعادة الهيكلة والتطوير المؤسسي',
            'توضيح الأدوار والمسؤوليات وخطوط التقارير',
            'تحسين الأداء والفاعلية المؤسسية العامة',
            'تعزيز القدرات المؤسسية للنجاح على المدى الطويل'
          ]
        },
        {
          type: 'standard',
          id: 'corporate-governance',
          icon: 'fa-solid fa-scale-balanced',
          title: 'الحوكمة المؤسسية والمخاطر والامتثال',
          description:
            'نساعد المؤسسات على بناء أطر فعالة للحوكمة والمخاطر والامتثال بما يعزز المساءلة ويدعم اتخاذ القرار بثقة.',
          itemsHeading: 'الخدمات الرئيسية',
          items: [
            'تصميم وتحسين أطر الحوكمة',
            'تطوير هياكل المجالس واللجان',
            'إعداد المواثيق ومصفوفات الصلاحيات وأطر المساءلة',
            'تطوير أطر الامتثال',
            'دمج إدارة المخاطر ومواءمتها',
            'تعزيز الشفافية والتقارير',
            'تطوير سياسات الحوكمة'
          ]
        },
        {
          type: 'standard',
          id: 'policies-procedures',
          icon: 'fa-solid fa-file-signature',
          title: 'السياسات والإجراءات وإدارة العمليات',
          description:
            'تساعد أكتينيوم المؤسسات على بناء أطر واضحة ومنظمة للسياسات والعمليات بما يحسن الاتساق ويعزز المساءلة ويدعم الكفاءة التشغيلية.',
          itemsHeading: 'الخدمات الرئيسية',
          items: [
            'إعداد أدلة السياسات والإجراءات',
            'رسم العمليات وتصميم سير العمل',
            'تحسين العمليات وإعادة تصميمها',
            'إعداد إجراءات التشغيل القياسية',
            'تصميم النماذج والقوالب والسجلات',
            'توضيح الأدوار والمسؤوليات وملكية العمليات',
            'هيكلة الوثائق التشغيلية وتنظيمها'
          ]
        },
        {
          type: 'standards',
          id: 'iso-management',
          icon: 'fa-solid fa-certificate',
          title: 'أنظمة الإدارة ISO ومعايير ESG',
          description:
            'تقدم أكتينيوم خدمات الاستشارة والتنفيذ والتدريب للأنظمة الإدارية المعترف بها دوليًا والأطر ذات الصلة التي تدعم الجودة والمرونة والاستدامة والتميّز المؤسسي.',
          itemsHeading: 'الخدمات الرئيسية',
          items: [
            'تقييم الفجوات ومراجعة الجاهزية',
            'تصميم الأنظمة الإدارية وتنفيذها',
            'مواءمة الوثائق والعمليات',
            'جلسات التوعية وتدريب الموظفين',
            'التحضير الداخلي للاعتماد أو التقييم',
            'دعم التحسين المستمر',
            'مراجعة الإدارة ومتابعة الأداء',
            'مواءمة الاستدامة وأطر التميز'
          ],
          standardsHeading: 'المعايير والأطر التي ندعمها',
          standards: [
            {
              title: 'الجودة وتجربة العملاء والتميّز المؤسسي',
              description:
                'يساعد هذا المجال المؤسسات على تحسين الجودة ورفع رضا العملاء وتعزيز الاتساق وتحسين الأداء من خلال معايير مثل ISO 9001 وISO 10001 وGMP والأطر المرتبطة بالتميّز.',
              tags: ['ISO 9001', 'ISO 10001', 'GMP']
            },
            {
              title: 'الصحة والسلامة ومرونة الأعمال',
              description:
                'يساعد هذا المجال المؤسسات على بناء بيئات عمل أكثر أمانًا وتحسين الجاهزية والحفاظ على استمرارية الأعمال أثناء الاضطرابات من خلال معايير مثل ISO 45001 وISO 22301.',
              tags: ['ISO 45001', 'ISO 22301']
            },
            {
              title: 'البيئة والطاقة والاستدامة ومعايير ESG',
              description:
                'يدعم هذا المجال المؤسسات في تحسين الأداء البيئي ورفع كفاءة استخدام الموارد والتقدم في أهداف الاستدامة وESG من خلال معايير مثل ISO 14001 وISO 50001 وISO 26000 والأطر ذات الصلة.',
              tags: ['ISO 14001', 'ISO 50001', 'ISO 26000']
            },
            {
              title: 'المخاطر والحوكمة وإدارة الأصول',
              description:
                'يساعد هذا المجال المؤسسات على تحسين اتخاذ القرار وإدارة المخاطر وتعزيز ممارسات الحوكمة والإشراف على الأصول عبر أطر مثل ISO 31000 وسلسلة ISO 55000.',
              tags: ['ISO 31000', 'ISO 55000 Series']
            },
            {
              title: 'أمن المعلومات والخصوصية والذكاء الاصطناعي',
              description:
                'يدعم هذا المجال المؤسسات في حماية المعلومات وإدارة متطلبات الخصوصية ووضع رقابة فعالة على الأنظمة الرقمية وأنظمة الذكاء الاصطناعي من خلال معايير مثل ISO/IEC 27001 وISO/IEC 27701 وISO/IEC 42001 وISO/IEC 20000-1 وISO/IEC 38500.',
              tags: ['ISO/IEC 27001', 'ISO/IEC 27701', 'ISO/IEC 42001', 'ISO/IEC 20000-1', 'ISO/IEC 38500']
            },
            {
              title: 'أنظمة الإدارة المتخصصة حسب القطاع',
              description:
                'يعالج هذا المجال احتياجات القطاعات المتخصصة من خلال تحسين الامتثال والكفاءة الفنية وجودة الخدمة والضبط التشغيلي عبر معايير مثل ISO 22000 وHACCP وISO 21001.',
              tags: ['ISO 22000', 'HACCP', 'ISO 21001']
            }
          ]
        },
        {
          type: 'standard',
          id: 'training-capacity',
          icon: 'fa-solid fa-graduation-cap',
          title: 'التدريب وبناء القدرات',
          description:
            'تقدم أكتينيوم حلول تدريب عملية ومبادرات لبناء القدرات تساعد المؤسسات على تعزيز المعرفة وتحسين الأداء وترسيخ التحسين عبر الفرق والوظائف المختلفة.',
          itemsHeading: 'الخدمات والأنشطة',
          items: [
            'تقييم الاحتياجات التدريبية',
            'تطوير برامج تدريب مخصصة',
            'التوعية بالمعايير والتدريب على التطبيق',
            'ورش التطوير المهني',
            'مبادرات بناء القدرات',
            'دعم نقل المعرفة',
            'تقييم التعلم ومتابعة الفاعلية',
            'تعزيز المهارات المرتبطة بالأولويات المؤسسية'
          ]
        },
        {
          type: 'standard',
          id: 'digital-transformation',
          icon: 'fa-solid fa-microchip',
          title: 'التحول الرقمي والذكاء الاصطناعي والاستشارات التقنية',
          description:
            'ندعم المؤسسات في مواءمة المبادرات الرقمية والتقنيات الناشئة والذكاء الاصطناعي مع الأولويات الاستراتيجية بما يحسن الكفاءة ويفتح مجال الابتكار ويعزز الجاهزية المستقبلية.',
          itemsHeading: 'الخدمات والأنشطة',
          items: [
            'الاستشارات في التحول الرقمي',
            'تخطيط تمكين التقنية',
            'دعم أتمتة العمليات',
            'تحسين الخدمات الرقمية',
            'دعم اتخاذ القرار المبني على البيانات',
            'حوكمة الذكاء الاصطناعي ومواءمته',
            'دعم الجاهزية لأنظمة إدارة الذكاء الاصطناعي',
            'استشارات تقنية مرتبطة باحتياجات الأعمال',
            'دعم تخطيط التحول والتنفيذ'
          ]
        }
      ],
      cta: {
        title: 'جاهز للارتقاء بمؤسستك؟',
        description: 'تواصل معنا لاكتشاف كيف يمكن لخدماتنا الاستشارية المصممة أن تضيف قيمة مستدامة لأعمالك.',
        buttonLabel: 'تواصل معنا'
      }
    },
    contactPage: {
      hero: {
        title: 'تواصل مع أكتينيوم للاستشارات',
        description: 'جاهز لبدء رحلتك؟ تواصل معنا للحصول على استشارة أولية مجانية.'
      },
      form: {
        nameLabel: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        subjectLabel: 'الموضوع',
        messageLabel: 'الرسالة',
        submitLabel: 'إرسال الرسالة',
        successMessage: 'تم إرسال النموذج محليًا فقط.',
        validation: {
          nameRequired: 'يرجى إدخال الاسم.',
          nameMinlength: 'يجب أن لا يقل الاسم عن حرفين.',
          emailRequired: 'يرجى إدخال البريد الإلكتروني.',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
          subjectRequired: 'يرجى إدخال الموضوع.',
          subjectMinlength: 'يجب أن لا يقل الموضوع عن 3 أحرف.',
          messageRequired: 'يرجى إدخال الرسالة.',
          messageMinlength: 'يجب أن لا تقل الرسالة عن 10 أحرف.'
        }
      },
      details: {
        emailTitle: 'البريد الإلكتروني',
        phoneTitle: 'الهاتف',
        locationTitle: 'الموقع',
        onlineTitle: 'الموقع الألكتروني '
      },
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3385.11528924027!2d35.86245038483863!3d31.95776888122701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU3JzI4LjAiTiAzNcKwNTEnMzYuOSJF!5e0!3m2!1sar!2sjo!4v1775738250668!5m2!1sar!2sjo'
    }
  }
};
