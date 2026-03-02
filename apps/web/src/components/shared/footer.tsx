import React from 'react';

import Image from 'next/image';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/5 bg-linear-to-b from-[#06221a] to-[#02140f] text-green-100/90">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />
      </div>
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="group order-1 flex flex-col items-center lg:items-start">
            <div className="relative transition-all duration-700">
              <Image
                src="/image/iriko_logo-removebg-preview.png"
                alt="Logo Iriko.mg"
                width={180}
                height={90}
                className="object-contain brightness-110 contrast-110 drop-shadow-[0_0_10px_rgba(74,222,128,0.15)] filter"
                priority
              />
            </div>
            <p className="mt-4 text-[10px] font-bold tracking-[0.3em] text-green-400/50 uppercase">
              &quot;Vokatra Tsara no tanjonay&quot;
            </p>
          </div>
          <div className="order-2 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-6 bg-linear-to-r from-transparent to-green-500/30" />
              <div className="h-1.5 w-1.5 rounded-full border border-green-500/30" />
              <div className="h-px w-6 bg-linear-to-l from-transparent to-green-500/30" />
            </div>
            <p className="max-w-sm text-center text-sm leading-relaxed font-light tracking-wide text-green-50/80 italic md:text-base">
              Promouvoir le développement durable, l’autonomisation des communautés et l’écotourisme responsable à
              Madagascar.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-6 bg-linear-to-r from-transparent to-green-500/30" />
              <div className="h-1.5 w-1.5 rounded-full border border-green-500/30" />
              <div className="h-px w-6 bg-linear-to-l from-transparent to-green-500/30" />
            </div>
          </div>
          <div className="order-3 flex flex-col items-center gap-4 lg:items-end">
            <div className="w-full max-w-70 space-y-3">
              <div className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500 hover:bg-white/2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                  <MapPin size={16} className="text-green-400" />
                </div>
                <address className="text-[12px] leading-tight tracking-wide text-green-100/80 not-italic">
                  Lot A 17 F, Ambohitrarahaba
                  <br />
                  <span className="mt-0.5 block text-[9px] font-bold tracking-widest text-green-400 uppercase">
                    Antananarivo 103
                  </span>
                </address>
              </div>
              <div className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500 hover:bg-white/2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                  <Phone size={16} className="text-green-400" />
                </div>
                <div className="flex flex-col text-[12px] font-semibold">
                  <a href="tel:+261349137059" className="transition-colors hover:text-green-400">
                    +261 34 913 7059
                  </a>
                  <a href="tel:+261343858543" className="transition-colors hover:text-green-400">
                    +261 34 385 8543
                  </a>
                </div>
              </div>
              <a
                href="mailto:irikomg@iriko.org"
                className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500 hover:bg-white/2"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                  <Mail size={16} className="text-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="border-b border-white/5 text-[12px] font-semibold transition-all group-hover:border-green-400">
                    irikomg@iriko.org
                  </span>
                  <ArrowUpRight size={12} className="text-green-400 opacity-0 transition-all group-hover:opacity-100" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-[9px] font-bold tracking-[0.3em] text-green-500/30 uppercase">
            © {new Date().getFullYear()} IRiKO.MG — Excellence & Durabilité
          </p>

          <div className="flex gap-6 text-[9px] font-black tracking-[0.2em] text-white/10 uppercase">
            <span className="cursor-pointer transition-colors hover:text-green-500">Madagascar</span>
            <span className="cursor-pointer transition-colors hover:text-green-500">Écotourisme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
