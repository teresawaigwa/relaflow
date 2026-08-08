export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Relaflow', href: '/about/why-relaflow' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Partner & Sponsor Development', href: '/what-we-do/partner-sponsor-development' },
      { label: 'Community Growth', href: '/what-we-do/community-growth' },
      { label: 'Relationship Operations', href: '/what-we-do/relationship-operations' },
      { label: 'Market & Stakeholder Intelligence', href: '/what-we-do/market-stakeholder-intelligence' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Templates', href: '/resources/templates' },
      { label: 'Frameworks', href: '/resources/frameworks' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'Articles', href: '/insights/articles' },
      { label: 'Events & Conversations', href: '/insights/events' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerExplore: NavChild[] = [
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Resources', href: '/resources' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: NavChild[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];
