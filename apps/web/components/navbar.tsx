"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { Menu, X, ChevronRight, Send } from "lucide-react"; 

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Formation & Animation", href: "/services" },
  { label: "Agrobusiness & Agrotourisme", href: "/agrobusiness" },
  { label: "RSE Iriko", href: "/rse" },
  { label: "LEMA", href: "/lema" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "pt-2" : "pt-6"
    }`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`
            flex items-center justify-between
            transition-all duration-500 ease-in-out
            bg-green-900/90 backdrop-blur-md
            border border-white/10
            rounded-2xl shadow-2xl
            ${isScrolled ? "py-2 px-6 shadow-green-900/20" : "py-4 px-8"}
          `}
        >
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/image/iriko_logo-removebg-preview.png"
                alt="Logo Iriko"
                width={isScrolled ? 55 : 65} 
                height={isScrolled ? 55 : 65}
                className="object-contain filter brightness-110"
                priority
              />
            </div>
          </Link>

          {/* --- MENU DESKTOP --- */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="group/item">
                  <Link
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium tracking-wide
                      transition-all duration-300 relative
                      ${isActive ? "text-white" : "text-green-100/70 hover:text-white"}
                    `}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-400/40 rounded-full transition-all duration-300 group-hover/item:left-4 group-hover/item:right-4 group-hover/item:w-auto" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative hidden md:flex items-center gap-2 overflow-hidden bg-white/5 border border-white/10 hover:border-green-400/50 text-white text-xs lg:text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-500 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] active:scale-95"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <span>Contact</span>
              <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* BOUTON MOBILE */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-green-100 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* --- MENU MOBILE --- */}
        <div className={`
          lg:hidden absolute top-full left-4 right-4 mt-2 
          bg-green-950/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden
          transition-all duration-300 ease-in-out shadow-2xl
          ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}>
          <div className="p-4 flex flex-col gap-2">
            {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-green-50 group"
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