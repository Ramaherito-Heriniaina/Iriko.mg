import { NavItem } from '@/hooks/use-nav';

import { Dictionary } from '@/i18n/dictionaries/fr';

const buildNavItems = (dictionary: Dictionary): NavItem[] => [
  { label: dictionary.nav.home, href: '/' },
  { label: dictionary.nav.services, href: '#services' },
  { label: dictionary.nav.agrobusiness, href: '#agrobusiness' },
  { label: dictionary.nav.rse, href: '#rse' },
  { label: dictionary.nav.lema, href: '#lema' },
  { label: dictionary.nav.contact, href: '#contact' },
];

const getNavLinkClass = (isScrolled: boolean, isActive: boolean): string => {
  const base = 'relative text-sm font-medium tracking-wide transition-colors duration-200';
  const activeColor = isScrolled ? 'text-green-700' : 'text-white';
  const inactiveColor = isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white/80 hover:text-white';
  return `${base} ${isActive ? activeColor : inactiveColor}`;
};

const getLocaleLinkClass = (isScrolled: boolean, isActive: boolean): string => {
  const base = 'text-xs font-semibold tracking-widest uppercase transition-colors';
  if (isActive) return `${base} ${isScrolled ? 'text-green-700' : 'text-white'}`;
  return `${base} ${isScrolled ? 'text-gray-400 hover:text-green-700' : 'text-white/50 hover:text-white'}`;
};

export { buildNavItems, getNavLinkClass, getLocaleLinkClass };
