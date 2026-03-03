'use client';

import { ReactNode } from 'react';

import Image from 'next/image';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

function Divider() {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className="h-px w-6"
        style={{ background: 'linear-gradient(to right, transparent, var(--footer-divider))' }}
      />
      <div className="h-1.5 w-1.5 rounded-full border" style={{ borderColor: 'var(--footer-divider)' }} />
      <div
        className="h-px w-6"
        style={{ background: 'linear-gradient(to left, transparent, var(--footer-divider))' }}
      />
    </div>
  );
}

function IconBadge({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
      style={{ background: 'var(--footer-icon-bg)', borderColor: 'var(--footer-icon-border)' }}
    >
      {children}
    </div>
  );
}

function ContactRow({ icon, children }: Readonly<{ icon: ReactNode; children: ReactNode }>) {
  return (
    <div
      className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500"
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--footer-hover-bg)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <IconBadge>{icon}</IconBadge>
      {children}
    </div>
  );
}

export function Footer() {
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
        style={{ background: 'linear-gradient(to right, transparent, var(--footer-line-glow), transparent)' }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">
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
            <p
              className="mt-4 text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: 'var(--footer-tagline)' }}
            >
              &quot;Vokatra Tsara no tanjonay&quot;
            </p>
          </div>
          <div className="order-2 flex flex-col items-center">
            <Divider />
            <p
              className="max-w-sm text-center text-sm leading-relaxed font-light tracking-wide italic md:text-base"
              style={{ color: 'var(--footer-body)' }}
            >
              Promouvoir le développement durable, l&apos;autonomisation des communautés et l&apos;écotourisme
              responsable à Madagascar.
            </p>
            <Divider />
          </div>
          <div className="order-3 flex flex-col items-center gap-4 lg:items-end">
            <div className="w-full max-w-70 space-y-3">
              <ContactRow icon={<MapPin size={16} style={{ color: 'var(--footer-icon-color)' }} />}>
                <address
                  className="text-[12px] leading-tight tracking-wide not-italic"
                  style={{ color: 'var(--footer-contact-text)' }}
                >
                  Lot A 17 F, Ambohitrarahaba
                  <br />
                  <span
                    className="mt-0.5 block text-[9px] font-bold tracking-widest uppercase"
                    style={{ color: 'var(--footer-icon-color)' }}
                  >
                    Antananarivo 103
                  </span>
                </address>
              </ContactRow>
              <ContactRow icon={<Phone size={16} style={{ color: 'var(--footer-icon-color)' }} />}>
                <div
                  className="flex flex-col text-[12px] font-semibold"
                  style={{ color: 'var(--footer-contact-text)' }}
                >
                  <a href="tel:+261349137059" className="transition-colors hover:text-(--footer-icon-color)">
                    +261 34 913 7059
                  </a>
                  <a href="tel:+261343858543" className="transition-colors hover:text-(--footer-icon-color)">
                    +261 34 385 8543
                  </a>
                </div>
              </ContactRow>
              <a
                href="mailto:irikomg@iriko.org"
                className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500"
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--footer-hover-bg)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <IconBadge>
                  <Mail size={16} style={{ color: 'var(--footer-icon-color)' }} />
                </IconBadge>
                <div className="flex items-center gap-2">
                  <span
                    className="border-b text-[12px] font-semibold transition-all"
                    style={{ borderColor: 'var(--footer-border)', color: 'var(--footer-contact-text)' }}
                  >
                    irikomg@iriko.org
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:opacity-100"
                    style={{ color: 'var(--footer-icon-color)' }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row"
          style={{ borderColor: 'var(--footer-border)' }}
        >
          <p className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--footer-muted)' }}>
            © {new Date().getFullYear()} IRiKO.MG — Excellence & Durabilité
          </p>
          <div
            className="flex gap-6 text-[9px] font-black tracking-[0.2em] uppercase"
            style={{ color: 'var(--footer-border)' }}
          >
            <span className="cursor-pointer transition-colors hover:text-(--footer-icon-color)">Madagascar</span>
            <span className="cursor-pointer transition-colors hover:text-(--footer-icon-color)">Écotourisme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
