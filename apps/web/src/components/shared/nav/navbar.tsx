'use client';

import { useCallback, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

import { useDictionary } from '@/hooks/use-dictionary';
import { useNavItems, useScrolled } from '@/hooks/use-nav';

import { Dictionary } from '@/i18n/dictionaries/fr';
import { Locale } from '@/i18n/index';

import { LocaleSwitcher } from './locale-switcher';
import { MobileMenu } from './mobile-menu';
import { NavLink } from './navlink';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dictionary, locale } = useDictionary<Dictionary>();
  const isScrolled = useScrolled();

  const navItems = useNavItems(dictionary);
  const pathnameWithoutLocale = '/' + pathname.split('/').slice(2).join('/');

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const switchLocale = useCallback(
    (next: Locale): string => {
      const segments = pathname.split('/');
      segments[1] = next;
      return segments.join('/');
    },
    [pathname]
  );

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
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                item={item}
                locale={locale}
                isActive={pathnameWithoutLocale === item.href}
                isScrolled={isScrolled}
              />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} isScrolled={isScrolled} switchLocale={switchLocale} />
          <button
            onClick={toggleMobileMenu}
            className="rounded-md p-1 transition-colors md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={26} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={26} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navItems}
        locale={locale}
        pathnameWithoutLocale={pathnameWithoutLocale}
        onClose={closeMobileMenu}
      />
    </motion.nav>
  );
}
