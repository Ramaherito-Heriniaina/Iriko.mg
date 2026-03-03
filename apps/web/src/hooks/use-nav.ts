import { useEffect, useState } from 'react';

import { buildNavItems } from '@/components/shared/nav/helpers';

import { Dictionary } from '@/i18n/dictionaries/fr';

export interface NavItem {
  label: string;
  href: string;
}

const SCROLL_THRESHOLD = 50;

const useScrolled = (threshold = SCROLL_THRESHOLD): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

const useNavItems = (dictionary: Dictionary | null): NavItem[] => {
  if (!dictionary) return [];
  return buildNavItems(dictionary);
};

export { useScrolled, useNavItems };
