export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerExplore: NavChild[] = [
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: NavChild[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/relaflow/' },
  { label: 'Facebook', href: 'https://www.facebook.com/relaflow' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Relaflowsystems' },
];