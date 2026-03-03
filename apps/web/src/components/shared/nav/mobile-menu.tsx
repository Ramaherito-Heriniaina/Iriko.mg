import Link from 'next/link';

import { AnimatePresence, motion } from 'motion/react';

import { NavItem } from '@/hooks/use-nav';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  pathnameWithoutLocale: string;
  onClose: () => void;
}

export function MobileMenu({ isOpen, items, pathnameWithoutLocale, onClose }: Readonly<MobileMenuProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden border-t border-gray-200/30 bg-white/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}`}
                onClick={onClose}
                className={`py-2 text-sm font-medium transition-colors ${
                  pathnameWithoutLocale === item.href ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
