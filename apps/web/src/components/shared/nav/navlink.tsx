'use client';

import Link from 'next/link';
import { NavItem } from '@/hooks/use-nav';
import { getNavLinkClass } from './helpers';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  isScrolled: boolean;
  onClick?: () => void;
}

export function NavLink({ item, isActive, isScrolled, onClick }: Readonly<NavLinkProps>) {
  return (
    <Link 
      href={`${item.href}`} 
      onClick={onClick} 
      className={`relative py-1 group transition-colors duration-300 ${getNavLinkClass(isScrolled, isActive)}`}
    >
      <span className="relative z-10">{item.label}</span>

      <span
        className={`
          absolute -bottom-1 left-0 h-0.5 rounded-full 
          transition-all duration-300 ease-in-out
          ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}
          ${isScrolled ? 'bg-green-700' : 'bg-white'}
        `}
      />

      {!isActive && (
        <span
          className={`
            absolute -bottom-1 left-0 w-0 h-0.5 rounded-full opacity-0
            transition-all duration-300 group-hover:w-full group-hover:opacity-50
            ${isScrolled ? 'bg-green-700' : 'bg-white'}
          `}
        />
      )}
    </Link>
  );
}