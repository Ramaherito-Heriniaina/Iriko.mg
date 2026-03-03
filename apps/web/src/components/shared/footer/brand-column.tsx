import Image from 'next/image';

import { Dictionary } from '@/i18n/dictionaries/fr';

interface BrandColumnProps {
  footer: Dictionary['footer'];
}

export function BrandColumn({ footer }: Readonly<BrandColumnProps>) {
  return (
    <div className="group order-1 flex flex-col items-center lg:items-start">
      <div className="relative transition-all duration-700">
        <Image
          src="/image/iriko_logo-removebg-preview.png"
          alt="Logo Iriko.mg"
          width={180}
          height={90}
          className="object-contain brightness-110 contrast-110"
          style={{ filter: 'var(--footer-logo-glow)' }}
          priority
        />
      </div>
      <p className="mt-4 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--footer-tagline)' }}>
        {footer.tagline}
      </p>
    </div>
  );
}
