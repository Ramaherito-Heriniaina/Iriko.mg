'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronRight, Menu, Send, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Formation & Animation', href: '/services' },
  { label: 'Agrobusiness & Agrotourisme', href: '/agrobusiness' },
  { label: 'RSE Iriko', href: '/rse' },
  { label: 'LEMA', href: '/lema' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border border-white/10 bg-green-900/90 shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out ${isScrolled ? 'px-6 py-2 shadow-green-900/20' : 'px-8 py-4'} `}
        >
          <Link href="/" className="group relative flex items-center">
            <div className="relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/image/iriko_logo-removebg-preview.png"
                alt="Logo Iriko"
                width={isScrolled ? 55 : 65}
                height={isScrolled ? 55 : 65}
                className="object-contain brightness-110 filter"
                priority
              />
            </div>
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="group/item">
                  <Link
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${isActive ? 'text-white' : 'text-green-100/70 hover:text-white'} `}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 rounded-full bg-green-400/40 transition-all duration-300 group-hover/item:right-4 group-hover/item:left-4 group-hover/item:w-auto" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition-all duration-500 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] active:scale-95 md:flex lg:text-sm"
            >
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span>Contact</span>
              <Send
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-green-100 transition-colors hover:bg-white/10 lg:hidden"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <div
          className={`absolute top-full right-4 left-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-green-950/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'} `}
        >
          <div className="flex flex-col gap-2 p-4">
            {[...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl p-3 text-green-50 hover:bg-white/5"
              >
                <span className="font-medium">{item.label}</span>
                <ChevronRight size={16} className="text-green-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
