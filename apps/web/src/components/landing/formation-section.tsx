'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, GraduationCap, Heart, Users, BookOpen, Sparkles, Eye } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import { ScrollReveal } from '@/components/shared';

const SERVICE_ICONS = [Users, Calendar, GraduationCap, Heart];


export function FormationSection() {
  const { dictionary } = useDictionary<Dictionary>();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  if (!dictionary) return null;

  const { formation } = dictionary;

  const getImageTransform = () => {
    if (hoveredService === 0) return 'rotate(-1deg) scale(1.02)';
    if (hoveredService === 1) return 'translateY(-8px) scale(1.01)';
    if (hoveredService === 2) return 'rotate(1deg) scale(1.02)';
    if (hoveredService === 3) return 'translateY(8px)';
    return 'rotate(0deg) scale(1)';
  };

  return (
    <section id="formation" className="py-24 dark:bg-slate-950 overflow-hidden relative">

      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-indigo-600" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2 relative group">
            <ScrollReveal>
              <div
                className="relative rounded-3xl p-4 bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500 ease-out"
                style={{ transform: getImageTransform() }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-inner bg-slate-200">
                  <Image
                    src="/image/formation.jpg"
                    alt="Formation et animation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-indigo-600 text-white p-5 rounded-2xl shadow-2xl hidden md:flex flex-col items-center gap-2 group-hover:-rotate-3 transition-transform">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                <div className="text-center">
                  <p className="font-bold text-lg leading-tight">Expertise<br />Terrain</p>
                </div>
              </div>
            </ScrollReveal>
          </div>


          <div className="w-full lg:w-1/2 space-y-10">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-semibold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span className="uppercase tracking-wider">{formation.label}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight">
                  {formation.title}
                </h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {formation.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {formation.services.map((service, index) => {
                const Icon = SERVICE_ICONS[index];
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 transition-all shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 group cursor-default"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {Icon && <Icon size={24} />}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-slate-950 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
