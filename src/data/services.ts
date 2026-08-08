export type Service = {
  slug: string;
  navLabel: string;
  homePrompt: string;
  title: string;
  tagline: string;
  intro: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'partner-sponsor-development',
    navLabel: 'Partner & Sponsor Development',
    homePrompt: 'I want to find and develop better partnerships',
    title: 'Partner & Sponsor Development',
    tagline: 'Find relevant opportunities. Build stronger partnerships.',
    intro:
      "We help you research potential partners and sponsors, build structured pipelines and create better systems for managing relationships from first contact through ongoing engagement.",
    bullets: [
      'Partner research',
      'Sponsor research',
      'Prospect identification',
      'Opportunity mapping',
      'Partnership pipelines',
      'Outreach and follow-up systems',
      'Partner tracking',
      'Relationship retention',
    ],
  },
  {
    slug: 'community-growth',
    navLabel: 'Community Growth',
    homePrompt: 'I want to grow and retain my community',
    title: 'Community Growth',
    tagline: 'Grow your community with better systems behind it.',
    intro:
      'We help you understand your community, organize member and stakeholder information, strengthen engagement and create systems that support long-term retention.',
    bullets: [
      'Community research',
      'Stakeholder mapping',
      'Member data organization',
      'Engagement tracking',
      'Communication workflows',
      'Community reporting',
      'Retention systems',
    ],
  },
  {
    slug: 'relationship-operations',
    navLabel: 'Relationship Operations',
    homePrompt: 'I need better systems for managing relationships',
    title: 'Relationship Operations',
    tagline: 'Bring your relationship management into one clearer system.',
    intro:
      'We help you organize CRM data, improve workflows and introduce practical automation that makes relationship management easier to manage and maintain.',
    bullets: [
      'CRM setup and organization',
      'CRM data management',
      'Data cleanup',
      'Relationship tracking',
      'Workflow design',
      'Automation',
      'Process documentation',
      'Reporting',
    ],
  },
  {
    slug: 'market-stakeholder-intelligence',
    navLabel: 'Market & Stakeholder Intelligence',
    homePrompt: 'I need better information to make decisions',
    title: 'Market & Stakeholder Intelligence',
    tagline: 'Know where the opportunities are.',
    intro:
      'We research markets, stakeholders and potential opportunities to help you understand your environment and make better-informed decisions.',
    bullets: [
      'Market research',
      'Stakeholder research',
      'Partner research',
      'Opportunity mapping',
      'Data analysis',
      'Reporting',
      'Stakeholder intelligence',
    ],
  },
];
