'use client';

import React from 'react';
import { ORDER_OPTIONS, LieuName } from './orderConfig';
import { ChevronRight, Leaf, MapPin, Package } from 'lucide-react';

interface OrderSelectionProps {
    qty: number; setQty: (v: number) => void;
    selectedEngrais: any; setSelectedEngrais: (v: any) => void;
    lieu: any; setLieu: (v: any) => void;
    onValidate: () => void;
}

export function OrderSelection({ qty, setQty, selectedEngrais, setSelectedEngrais, lieu, setLieu, onValidate }: OrderSelectionProps) {
    const isFormValid = qty >= 5 && selectedEngrais !== null && lieu !== null;

    return (
        <div className="max-w-md mx-auto space-y-8 animate-in fade-in duration-700">
          
            <div className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                    <Package size={14} className="text-green-500" />
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Volume de commande</label>
                </div>
                <div className="relative group">
                    <input
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        className={`w-full bg-white border-2 rounded-[24px] py-5 px-8 text-3xl font-black focus:outline-none transition-all shadow-sm
                            ${qty < 5 && qty !== 0 
                                ? 'border-red-500 text-red-600 bg-red-50/30' 
                                : 'border-slate-100 focus:border-green-500 focus:shadow-green-100/50'}`}
                    />
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-end">
                        <span className={`font-black text-xl ${qty < 5 && qty !== 0 ? 'text-red-400' : 'text-slate-900'}`}>KG</span>
                        <span className="text-[8px] font-black uppercase opacity-40 tracking-tighter text-slate-500">Poids Net</span>
                    </div>
                </div>
                {qty < 5 && qty !== 0 && (
                    <p className="text-red-500 text-[9px] font-black uppercase tracking-widest ml-4 animate-bounce">
                        ⚠ Minimum : 5 kg requis
                    </p>
                )}
            </div>

 
            <div className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                    <Leaf size={14} className="text-green-500" />
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Variété d'engrais</label>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                    {ORDER_OPTIONS.engrais.map(e => (
                        <button 
                            key={e.name} 
                            type="button" 
                            onClick={() => setSelectedEngrais(e)}
                            className={`group flex justify-between items-center p-5 rounded-[22px] border-2 transition-all duration-300 active:scale-[0.98]
                                ${selectedEngrais?.name === e.name 
                                    ? 'border-green-500 bg-green-50 shadow-md shadow-green-100' 
                                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200'}`}
                        >
                            <div className="flex flex-col items-start">
                                <span className={`text-[11px] font-black uppercase tracking-wider ${selectedEngrais?.name === e.name ? 'text-green-700' : 'text-slate-900'}`}>
                                    {e.name}
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Fertilisant Premium</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-black ${selectedEngrais?.name === e.name ? 'text-green-600' : 'text-slate-500'}`}>
                                    +{e.price.toLocaleString()} Ar/kg
                                </span>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all 
                                    ${selectedEngrais?.name === e.name ? 'border-green-500 bg-green-500 text-white' : 'border-slate-200'}`}>
                                    {selectedEngrais?.name === e.name && <ChevronRight size={12} strokeWidth={4} />}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-center items-center gap-2">
                    <MapPin size={14} className="text-green-500" />
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Origine de production</label>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {ORDER_OPTIONS.lieux.map(l => (
                        <button 
                            key={l.name} 
                            type="button" 
                            onClick={() => setLieu(l.name as LieuName)}
                            className={`relative p-4 rounded-[20px] border-2 flex flex-col items-center gap-1 transition-all duration-300 active:scale-95
                                ${lieu === l.name 
                                    ? 'border-green-500 bg-white shadow-lg shadow-green-50 text-green-700' 
                                    : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:border-slate-200'}`}
                        >
                            <span className="font-black text-[10px] uppercase tracking-tighter">{l.name}</span>
                            <span className={`text-[9px] font-bold ${lieu === l.name ? 'text-green-600' : 'text-slate-400'}`}>
                                {l.price} Ar
                            </span>
                            {lieu === l.name && (
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                disabled={!isFormValid} 
                onClick={onValidate}
                className={`relative overflow-hidden w-full py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs transition-all duration-500
                    ${isFormValid 
                        ? 'bg-slate-950 text-white shadow-xl shadow-slate-200 hover:shadow-green-200 hover:bg-green-600 active:scale-95' 
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
            >
                <div className="relative flex items-center justify-center gap-3">
                    {isFormValid ? (
                        <>
                            <span>Générer ma facture</span>
                            <ChevronRight size={16} strokeWidth={3} className="animate-pulse" />
                        </>
                    ) : (
                        <span>Compléter vos choix</span>
                    )}
                </div>
     
                {isFormValid && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
                )}
            </button>
        </div>
    );
}