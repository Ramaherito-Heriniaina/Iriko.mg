import Image from 'next/image';
import { Dictionary } from '@/i18n/dictionaries/fr';

interface BrandColumnProps { footer: Dictionary['footer']; }

export function BrandColumn({ footer }: Readonly<BrandColumnProps>) {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-4 animate-fade-in">
      <div className="relative p-2 backdrop-blur-sm ">
        <Image
          src="/image/iriko_logo-removebg-preview.png"
          alt="Logo Iriko.mg"
          width={160}
          height={160}
          className="object-contain "
        />
      </div>
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
        {footer.tagline}
      </p>
    </div>
  );
}