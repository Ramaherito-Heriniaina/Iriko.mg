import Link from 'next/link';

import { Globe } from 'lucide-react';

import { i18n, Locale } from '@/i18n';

import { getLocaleLinkClass } from './helpers';

interface LocaleSwitcherProps {
  currentLocale: string;
  isScrolled: boolean;
  switchLocale: (locale: Locale) => string;
}

export function LocaleSwitcher({ currentLocale, isScrolled, switchLocale }: Readonly<LocaleSwitcherProps>) {
  return (
    <div className="hidden items-center gap-1 md:flex">
      <Globe size={14} className={`transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/70'}`} />
      {i18n.locales.map((locale, idx) => (
        <span key={locale} className="flex items-center">
          {idx > 0 && <span className={`mx-1 text-xs ${isScrolled ? 'text-gray-300' : 'text-white/30'}`}>|</span>}
          <Link href={switchLocale(locale)} className={getLocaleLinkClass(isScrolled, currentLocale === locale)}>
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
