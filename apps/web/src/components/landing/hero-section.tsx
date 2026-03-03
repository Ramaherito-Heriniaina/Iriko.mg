'use client';

import Image from 'next/image';

import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

import { useDictionary } from '@/hooks/use-dictionary';

import { Dictionary } from '@/i18n/dictionaries/fr';

export function HeroSection() {
  const { dictionary } = useDictionary<Dictionary>();

  if (!dictionary) return null;

  const { hero } = dictionary;

  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/image/hero-bg.jpg" alt="Terrasses agricoles à Madagascar" fill className="object-cover" />
        <div className="bg-gradient-hero absolute inset-0" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 text-sm font-medium tracking-[0.3em] uppercase md:text-base"
          style={{ color: 'var(--lema-foreground)', opacity: 0.7 }}
        >
          {hero.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-primary-foreground mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
        >
          {hero.title_line1}
          <br />
          <span className="text-gradient-golden inline-block">{hero.title_line2}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light md:text-xl"
        >
          {hero.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#lema"
            className="bg-gradient-lema text-primary-foreground shadow-lema inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            {hero.cta_primary}
          </a>
          <a
            href="#formation"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center justify-center rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-colors"
          >
            {hero.cta_secondary}
          </a>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-primary-foreground/50 absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
