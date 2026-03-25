'use client';

import React, { useState } from 'react';
import { X, Globe } from 'lucide-react';
import Image from 'next/image';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import { usePathname, useRouter } from 'next/navigation';

export function HeaderLema() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { dictionary: dict, locale } = useDictionary<Dictionary>();
    

    const pathname = usePathname();
    const router = useRouter();

    if (!dict) return null;

    const hero = dict.preCommande.hero;
    const modal = dict.preCommande.modal;
    const features = dict.preCommande.features;

    const toggleLanguage = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale; 
        router.push(segments.join('/'));
    };

    return (
        <div className="relative w-full overflow-hidden bg-slate-100 mb-16">
            
            <div className="absolute top-6 right-6 z-50 flex items-center gap-2">
                <div className="bg-white/80 backdrop-blur-md p-1 rounded-full shadow-sm border border-slate-200 flex items-center">
                    <button 
                        onClick={() => toggleLanguage('fr')}
                        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${locale === 'fr' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-green-600'}`}
                    >
                        FR
                    </button>
                    <button 
                        onClick={() => toggleLanguage('mg')}
                        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${locale === 'mg' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-green-600'}`}
                    >
                        MG
                    </button>
                </div>
            </div>

            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/white-brick-wall.png')`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-widest uppercase">
                            {hero.badge}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                            {hero.title} <br />
                            <span className="text-green-600">{hero.subtitle}</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl italic">
                            "{hero.quote}"
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105"
                            >
                                {hero.btnDiscover}
                            </button>
                            <button className="bg-white border-2 border-slate-200 hover:border-green-500 px-8 py-4 rounded-full font-bold text-slate-700 transition-all">
                                {hero.btnView}
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative animate-in fade-in zoom-in duration-1000">
                        <div className="relative z-10 transform hover:rotate-2 transition-transform duration-500">
                            <Image
                                src="/image/pack_légumes.png"
                                alt="Panier de légumes LEMA"
                                width={600}
                                height={400}
                                priority
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 md:right-0 bg-white p-4 rounded-full shadow-xl border-4 border-green-500 z-20 animate-bounce">
                            <div className="text-center px-2">
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Qualité</p>
                                <p className="text-lg font-black text-green-600">{hero.qualityBadge}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh]">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">{modal.title}</h2>
                        <div className="space-y-4 text-slate-600">
                            <p className="font-bold text-green-600 italic">"{modal.slogan}"</p>
                            <p>{modal.description}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>{modal.points.transparency}</li>
                                <li>{modal.points.ethics}</li>
                                <li>{modal.points.local}</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl font-bold">
                            {modal.btnClose}
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white border-y border-slate-100 py-6">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                                <p className="font-bold text-sm">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}