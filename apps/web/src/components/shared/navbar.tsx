'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { useDictionary } from '@/hooks/use-dictionary';

import { i18n, Locale } from '@/i18n';
import { Dictionary } from '@/i18n/dictionaries/fr';

const getLinkClassName = (isScrolled: boolean, isActive: boolean): string => {
  const base = 'relative text-sm font-medium tracking-wide transition-colors duration-200';

  if (isScrolled) return `${base} ${isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'}`;

  return `${base} ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`;
};

const getLocaleLinkClassName = (isScrolled: boolean, isActive: boolean): string => {
  const base = 'text-xs font-semibold tracking-widest uppercase transition-colors';

  if (isActive) return `${base} ${isScrolled ? 'text-green-700' : 'text-white'}`;

  return `${base} ${isScrolled ? 'text-gray-400 hover:text-green-700' : 'text-white/50 hover:text-white'}`;
};

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dictionary, locale } = useDictionary<Dictionary>();

  const pathnameWithoutLocale = '/' + pathname.split('/').slice(2).join('/');

  const NAV_ITEMS = dictionary
    ? [
        { label: dictionary.nav.home, href: '/' },
        { label: dictionary.nav.services, href: '/services' },
        { label: dictionary.nav.agrobusiness, href: '/agrobusiness' },
        { label: dictionary.nav.rse, href: '/rse' },
        { label: dictionary.nav.lema, href: '/lema' },
        { label: dictionary.nav.contact, href: '/contact' },
      ]
    : [];

  const switchLocale = (next: Locale) => {
    const segments = pathname.split('/');
    segments[1] = next;
    return segments.join('/');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/image/iriko_logo-removebg-preview.png"
            alt="Logo Iriko"
            width={48}
            height={48}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-110'}`}
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathnameWithoutLocale === item.href;
            return (
              <li key={item.href}>
                <Link href={`/${locale}${item.href}`} className={getLinkClassName(isScrolled, isActive)}>
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute right-0 -bottom-1 left-0 h-0.5 rounded-full ${
                        isScrolled ? 'bg-green-700' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 md:flex">
            <Globe size={14} className={`transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/70'}`} />
            {i18n.locales.map((l, idx) => (
              <span key={l} className="flex items-center">
                {idx > 0 && <span className={`mx-1 text-xs ${isScrolled ? 'text-gray-300' : 'text-white/30'}`}>|</span>}
                <Link href={switchLocale(l)} className={getLocaleLinkClassName(isScrolled, locale === l)}>
                  {l}
                </Link>
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-1 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={26} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-200/30 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = pathnameWithoutLocale === item.href;
                return (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
