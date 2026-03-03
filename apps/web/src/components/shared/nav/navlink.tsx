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
    <Link href={`${item.href}`} onClick={onClick} className={getNavLinkClass(isScrolled, isActive)}>
      {item.label}
      {isActive && (
        <span
          className={`absolute right-0 -bottom-1 left-0 h-0.5 rounded-full ${isScrolled ? 'bg-green-700' : 'bg-white'}`}
        />
      )}
    </Link>
  );
}
