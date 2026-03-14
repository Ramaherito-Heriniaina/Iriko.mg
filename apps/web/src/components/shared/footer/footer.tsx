'use client';

import { useDictionary } from '@/hooks/use-dictionary';

import { Dictionary } from '@/i18n/dictionaries/fr';

import { BrandColumn } from './brand-column';
import { ContactColumn } from './contact-column';
import { FooterBottom } from './footer-bottom';
import { MissionColumn } from './mission-column';

export function Footer() {
  const { dictionary } = useDictionary<Dictionary>();

  if (!dictionary) return null;

  const { footer } = dictionary;

  return (
    <footer
      className="relative mt-12 overflow-hidden border-t"
      style={{
        background: 'linear-gradient(to bottom, var(--footer-bg-from), var(--footer-bg-to))',
        borderColor: 'var(--footer-border)',
        color: 'var(--footer-text)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-1/4 h-72 w-72 -translate-y-1/2 rounded-full blur-[100px]"
          style={{ background: 'var(--footer-glow-primary)' }}
        />
        <div
          className="absolute right-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: 'var(--footer-glow-secondary)' }}
        />
      </div>
      
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--footer-line-glow), transparent)',
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-12">
       
        <div className="w-full max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-x-24 items-start">

            <div className="flex justify-center lg:justify-start">
              <BrandColumn footer={footer} />
            </div>

            <div className="flex justify-center">
              <MissionColumn footer={footer} />
            </div>

            <div className="flex justify-center lg:justify-end">
              <ContactColumn footer={footer} />
            </div>
          
          </div>

        </div>

        <FooterBottom footer={footer} />
        
      </div>
    </footer>
  );
}
