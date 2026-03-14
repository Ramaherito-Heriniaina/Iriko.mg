'use client'

import { useState } from 'react';
import { Sprout, MapPin, UtensilsCrossed, ChevronRight, Leaf, Eye } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import Image from 'next/image';

const STEP_ICONS = [Sprout, MapPin, UtensilsCrossed];

export function LemaSection() {
    const { dictionary } = useDictionary<Dictionary>();
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    if (!dictionary) return null;

    // Extraction de toutes les variables du dictionnaire
    const { label, title, description, cta, steps, badge } = dictionary.lema;

    const getImageTransform = () => {
        if (hoveredStep === 0) return 'rotate(-2deg) scale(1.03)';
        if (hoveredStep === 1) return 'translateY(-10px) scale(1.02)';
        if (hoveredStep === 2) return 'rotate(2deg) scale(1.03)';
        return 'rotate(0deg) scale(1)';
    };

    return (
        <section id="lema" className="py-24  dark:bg-slate-950 overflow-hidden relative">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="leaf-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M40 0C40 22.0914 22.0914 40 0 40M40 80C40 57.9086 57.9086 40 80 40" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#leaf-pattern)" className="text-green-700"/>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Colonne Gauche : Visuel */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div 
                            className="relative rounded-3xl p-4 bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500 ease-out"
                            style={{ transform: getImageTransform() }}
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-[5/3] shadow-inner bg-slate-200">
                                <Image 
                                    src="/image/lema.png" 
                                    alt="LEMA Platform Preview" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-green-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/90 p-4 rounded-full shadow-lg text-green-700">
                                        <Eye className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badge flottant (Maintenant via dictionnaire) */}
                        <div className="absolute -bottom-8 -left-8 bg-green-600 text-white p-6 rounded-2xl shadow-2xl hidden md:flex flex-col items-center gap-2 group-hover:-translate-y-2 transition-transform">
                            <Leaf className="w-10 h-10 animate-pulse" />
                            <div className="text-center">
                                <p className="font-extrabold text-2xl">{badge.percentage}</p>
                                <p className="text-sm font-medium opacity-90 uppercase tracking-wider">{badge.text}</p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite : Contenu Texte */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-semibold text-sm">
                                <Leaf className="w-4 h-4" />
                                <span>{label}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight tracking-tight">
                                {title}
                            </h2>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                                {description}
                            </p>
                        </div>

                        {/* Liste des étapes */}
                        <div className="space-y-6">
                            {steps.map((step, index) => {
                                const Icon = STEP_ICONS[index];
                                return (
                                    <div 
                                        key={index} 
                                        className="flex gap-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 transition-all shadow-sm border border-slate-100 dark:border-slate-800 hover:border-green-200 dark:hover:border-green-900 group cursor-pointer"
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-inner text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                            {Icon && <Icon className="w-8 h-8" strokeWidth={1.5} />}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-xl text-slate-950 dark:text-white italic">
                                                {step.title}
                                            </h3>
                                            <p className="text-base text-slate-600 dark:text-slate-400 opacity-90 group-hover:opacity-100 transition-opacity">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="pt-6 text-center sm:text-left">
                            <button className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg group">
                                {cta}
                                <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}