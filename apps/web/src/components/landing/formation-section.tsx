'use client';

import Image from 'next/image';

import { Calendar, GraduationCap, Heart, LucideIcon, Users } from 'lucide-react';

import { ScrollReveal } from '@/components/shared';

import { useDictionary } from '@/hooks/use-dictionary';

import { Dictionary } from '@/i18n/dictionaries/fr';

const SERVICE_ICONS: LucideIcon[] = [Users, Calendar, GraduationCap, Heart];

export function FormationSection() {
  const { dictionary } = useDictionary<Dictionary>();

  if (!dictionary) return null;

  const { formation } = dictionary;

  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div className="shadow-card relative overflow-hidden rounded-2xl">
              <Image
                src="/image/formation.jpg"
                width={500}
                height={500}
                alt="Formation et animation"
                className="h-100 w-full object-cover"
              />
              <div className="from-foreground/20 absolute inset-0 bg-linear-to-t to-transparent" />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <p className="text-secondary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">{formation.label}</p>
              <h2 className="text-foreground mb-6 text-3xl leading-tight font-bold md:text-4xl">{formation.title}</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">{formation.description}</p>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {formation.services.map((service, i) => {
                const Icon = SERVICE_ICONS[i];
                return (
                  <ScrollReveal key={service.title} delay={i * 0.1}>
                    <div className="group bg-card hover:shadow-card cursor-default rounded-xl p-5 transition-all duration-300">
                      {Icon && (
                        <Icon size={28} className="text-primary group-hover:text-secondary mb-3 transition-colors" />
                      )}
                      <h3 className="text-foreground mb-1 font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
