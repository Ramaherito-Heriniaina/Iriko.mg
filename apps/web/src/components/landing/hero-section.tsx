'use client';

import Image from 'next/image';
import { ChevronRight, Globe } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';

export function HeroSection() {
  const { dictionary } = useDictionary<Dictionary>();

  if (!dictionary) return null;

  const { hero } = dictionary;

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">

      <div className="absolute inset-0">
        <Image
          src="/image/hero-bg.jpg"
          alt="Terrasses agricoles"
          fill
          className="object-cover opacity-60 scale-105 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-widest uppercase mb-8 animate-fade-in-up">
          <Globe className="w-4 h-4 text-green-400" />
          {hero.tagline}
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-in-up [animation-delay:200ms]">
            {hero.title_line1}
            <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-amber-200 to-yellow-500 pb-2">
              {hero.title_line2}
              <div className="absolute bottom-0 left-0 h-1.5 bg-green-500/50 rounded-full animate-grow-width"></div>
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light mb-12 animate-fade-in-up [animation-delay:400ms]">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up [animation-delay:600ms]">
          <a
            href="#lema"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-green-600 text-white font-bold rounded-full transition-all hover:bg-green-700 hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            <span className="flex items-center gap-2 text-lg">
              {hero.cta_primary}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all cursor-pointer group"
        aria-label="Scroll down"
      >

        <div className="relative w-8 h-8 flex items-center justify-center">
          <span className="block w-4 h-4 border-b-2 border-r-2 border-white rotate-45 transform animate-bounce group-hover:border-white/100 transition-colors"></span>
        </div>

      </button>


      <style jsx>{`
       @keyframes fade-in-up {
         from { opacity: 0; transform: translateY(20px); }
         to { opacity: 1; transform: translateY(0); }
       }
       @keyframes grow-width {
         from { width: 0; }
         to { width: 100%; }
       }
       @keyframes float {
         0%, 100% { transform: translateY(0) rotate(0deg); }
         50% { transform: translateY(-20px) rotate(5deg); }
       }
       @keyframes scroll-dot {
         0% { transform: translateY(0); opacity: 1; }
         100% { transform: translateY(15px); opacity: 0; }
       }
       @keyframes subtle-zoom {
         from { transform: scale(1.05); }
         to { transform: scale(1.1); }
       }


       .animate-fade-in-up {
         animation: fade-in-up 0.8s ease-out forwards;
         opacity: 0;
       }
       .animate-grow-width {
         animation: grow-width 1s ease-out 1s forwards;
         width: 0;
       }
       .animate-float {
         animation: float 6s infinite ease-in-out;
       }
       .animate-scroll-dot {
         animation: scroll-dot 1.5s infinite;
       }
       .animate-subtle-zoom {
         animation: subtle-zoom 10s infinite alternate ease-in-out;
       }
     `}</style>
    </section>
  );
}