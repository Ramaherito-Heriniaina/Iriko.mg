import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#06221a] to-[#02140f] text-green-100/90 mt-12 border-t border-white/5 overflow-hidden">
      

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

   
      <div className="container mx-auto px-6 py-12 relative z-10 max-w-7xl">
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col items-center lg:items-start order-1 group">
            <div className="relative transition-all duration-700">
              <Image
                src="/image/iriko_logo-removebg-preview.png"
                alt="Logo Iriko.mg"
                width={180}
                height={90}
                className="object-contain filter brightness-110 contrast-110 drop-shadow-[0_0_10px_rgba(74,222,128,0.15)]"
                priority
              />
            </div>
            <p className="mt-4 text-green-400/50 text-[10px] uppercase tracking-[0.3em] font-bold">
              "Vokatra Tsara no tanjonay"
            </p>
          </div>

          <div className="flex flex-col items-center order-2">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-green-500/30" />
               <div className="w-1.5 h-1.5 rounded-full border border-green-500/30" />
               <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-green-500/30" />
            </div>
            <p className="text-sm md:text-base font-light italic tracking-wide text-center leading-relaxed max-w-sm text-green-50/80">
              Promouvoir le développement durable, l’autonomisation des communautés et l’écotourisme responsable à Madagascar.
            </p>
            <div className="flex items-center gap-3 mt-4">
               <div className="w-6 h-[1px] bg-gradient-to-r from-transparent to-green-500/30" />
               <div className="w-1.5 h-1.5 rounded-full border border-green-500/30" />
               <div className="w-6 h-[1px] bg-gradient-to-l from-transparent to-green-500/30" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4 order-3">
            <div className="space-y-3 w-full max-w-[280px]">

              <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.02] border border-transparent transition-all duration-500">
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                  <MapPin size={16} className="text-green-400" />
                </div>
                <address className="not-italic text-[12px] leading-tight tracking-wide text-green-100/80">
                  Lot A 17 F, Ambohitrarahaba<br />
                  <span className="text-green-400 font-bold uppercase text-[9px] tracking-widest mt-0.5 block">Antananarivo 103</span>
                </address>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.02] border border-transparent transition-all duration-500">
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                  <Phone size={16} className="text-green-400" />
                </div>
                <div className="flex flex-col text-[12px] font-semibold">
                  <a href="tel:+261349137059" className="hover:text-green-400 transition-colors">+261 34 913 7059</a>
                  <a href="tel:+261343858543" className="hover:text-green-400 transition-colors">+261 34 385 8543</a>
                </div>
              </div>

              <a href="mailto:irikomg@iriko.org" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.02] border border-transparent transition-all duration-500">
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                  <Mail size={16} className="text-green-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold border-b border-white/5 group-hover:border-green-400 transition-all">
                    irikomg@iriko.org
                  </span>
                  <ArrowUpRight size={12} className="text-green-400 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </a>

            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.3em] text-green-500/30 font-bold">
            © {new Date().getFullYear()} IRiKO.MG — Excellence & Durabilité
          </p>

          <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-white/10 font-black">
            <span className="hover:text-green-500 cursor-pointer transition-colors">Madagascar</span>
            <span className="hover:text-green-500 cursor-pointer transition-colors">Écotourisme</span>
          </div>
        </div>
      </div>
    </footer>
  );
}