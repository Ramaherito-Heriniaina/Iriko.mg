'use client';

import React from 'react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function FooterLema() {
    const { dictionary: dict } = useDictionary<Dictionary>();

    if (!dict) return null;

    const f = dict.preCommande.footer;

    const brickBackground = {
        backgroundImage: `url('https://www.transparenttextures.com/patterns/white-brick-wall.png')`,
    };

    return (
        <footer className="w-full mt-32">
            
            <div className="relative bg-slate-1+00 overflow-hidden">
                <div 
                    className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                    style={brickBackground} 
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            {f.whyChooseUs.title}
                        </h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            {f.whyChooseUs.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        <div className="space-y-16">
                            <div className="group text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
                                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">{f.whyChooseUs.features.fresh.title}</h3>
                                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{f.whyChooseUs.features.fresh.desc}</p>
                            </div>
                            <div className="group text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">❤️</div>
                                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">{f.whyChooseUs.features.healthy.title}</h3>
                                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{f.whyChooseUs.features.healthy.desc}</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <img
                                src="/image/pack_légumes.png"
                                alt="Premium Fresh Pack"
                                className="relative z-10 w-full max-w-[400px] mx-auto h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] group-hover:translate-y-[-10px] transition-transform duration-500"
                            />
                        </div>

                        <div className="space-y-16">
                            <div className="group text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
                                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">{f.whyChooseUs.features.natural.title}</h3>
                                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{f.whyChooseUs.features.natural.desc}</p>
                            </div>
                            <div className="group text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                                <h3 className="font-black text-slate-900 uppercase text-sm tracking-widest">{f.whyChooseUs.features.quality.title}</h3>
                                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{f.whyChooseUs.features.quality.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  
            <div className="relative bg-[#0a210f] text-white pt-24 pb-12 overflow-hidden">

                <div 
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none invert" 
                    style={brickBackground} 
                />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/image/iriko_logo-removebg-preview.png"
                                    alt="Logo"
                                    width={100}
                                    height={80}
                                    priority
                                    className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]"
                                />
                                <h3 className="text-3xl font-black italic tracking-tighter">{f.brand.name}</h3>
                            </div>
                            <p className="text-sm text-green-100/60 leading-relaxed">
                                {f.brand.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-green-500">{f.newsletter.title}</h4>
                            <p className="text-xs text-green-100/60">{f.newsletter.desc}</p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder={f.newsletter.placeholder}
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl text-sm w-full outline-none focus:border-green-500 transition-all placeholder:text-white/20"
                                />
                                <button className="absolute right-2 top-2 bg-green-600 hover:bg-green-500 p-2 rounded-lg transition-all">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-green-500">{f.hours.title}</h4>
                            <div className="text-sm space-y-4">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-green-100/60">{f.hours.weekdays.label}</span>
                                    <span className="font-mono font-bold">{f.hours.weekdays.time}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-green-100/60">{f.hours.saturday.label}</span>
                                    <span className="font-mono font-bold">{f.hours.saturday.time}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-yellow-500/80 font-bold">{f.hours.sunday.label}</span>
                                    <span className="text-yellow-500/80 font-bold uppercase text-[10px]">{f.hours.sunday.time}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-green-500">{f.contact.title}</h4>
                            <div className="text-sm space-y-5">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-green-500 shrink-0" size={20} />
                                    <span className="text-green-100/60">{f.contact.location}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-green-500 shrink-0" size={20} />
                                    <span className="text-green-100/60">{f.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-green-500 shrink-0" size={20} />
                                    <span className="text-green-100/60">{f.contact.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[10px] text-green-100/30 uppercase tracking-[0.3em] font-medium">
                            {f.copyright}
                        </p>
                        <div className="flex items-center gap-6 opacity-30 hover:opacity-100 transition-opacity duration-500">
                            <img src="https://img.icons8.com/color/48/visa.png" className="h-5 w-auto" alt="Visa" />
                            <img src="https://img.icons8.com/color/48/mastercard.png" className="h-5 w-auto" alt="Mastercard" />
                            <img src="https://img.icons8.com/color/48/paypal.png" className="h-5 w-auto" alt="Paypal" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}