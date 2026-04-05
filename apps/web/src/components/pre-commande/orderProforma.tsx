'use client';

import React from 'react';
import { Product } from './produitConst';
import { FileText, Receipt, ArrowLeft, CheckCircle2, Info } from 'lucide-react';

interface OrderProformaProps {
    product: Product;
    qty: number;
    selectedEngrais: any;
    lieu: string | null;
    unitPrice: number;
    total: number;
    onBack: () => void;
    onNext: () => void;
}

export function OrderProforma({ product, qty, selectedEngrais, lieu, unitPrice, total, onBack, onNext }: OrderProformaProps) {
    return (
        <div className="max-w-md mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
          
            <div className="relative group">
        
                <div className="absolute inset-0 bg-slate-900 translate-x-2 translate-y-2 rounded-[32px] -z-10 opacity-10"></div>
                
                <div className="bg-white border-[3px] border-slate-950 p-8 rounded-[32px] space-y-8 relative overflow-hidden">
      
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Receipt size={14} className="text-green-600" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Proforma Invoice</span>
                            </div>
                            <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-slate-900">
                                {product.name}
                            </h3>
                        </div>
                        <div className="bg-slate-950 text-white p-2 rounded-lg rotate-3 shadow-lg">
                            <FileText size={20} />
                        </div>
                    </div>

                 
                    <div className="space-y-4 pt-4">
                        <div className="flex justify-between items-end gap-2 group/item">
                            <span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest whitespace-nowrap">Volume de commande</span>
                            <div className="flex-1 border-b-2 border-dotted border-slate-100 mb-1"></div>
                            <span className="font-black text-slate-900">{qty} kg</span>
                        </div>

                        <div className="flex justify-between items-end gap-2">
                            <span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest whitespace-nowrap">Type d'engrais</span>
                            <div className="flex-1 border-b-2 border-dotted border-slate-100 mb-1"></div>
                            <span className="font-bold text-slate-900">{selectedEngrais?.name}</span>
                        </div>

                        <div className="flex justify-between items-end gap-2">
                            <span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest whitespace-nowrap">Site de production</span>
                            <div className="flex-1 border-b-2 border-dotted border-slate-100 mb-1"></div>
                            <span className="font-bold text-slate-900">{lieu}</span>
                        </div>

                        <div className="flex justify-between items-end gap-2">
                            <span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest whitespace-nowrap">Prix unitaire</span>
                            <div className="flex-1 border-b-2 border-dotted border-slate-100 mb-1"></div>
                            <span className="font-bold text-slate-900 text-xs">{unitPrice.toLocaleString()} Ar/kg</span>
                        </div>
                    </div>

                   
                    <div className="pt-8 mt-6 border-t-[3px] border-slate-950 relative">
                       
                        <div className="absolute -left-11 -top-3 w-6 h-6 bg-slate-50 rounded-full border-[3px] border-slate-950 border-l-transparent"></div>
                        <div className="absolute -right-11 -top-3 w-6 h-6 bg-slate-50 rounded-full border-[3px] border-slate-950 border-r-transparent"></div>

                        <div className="flex flex-col items-center gap-1">
                            <span className="font-black uppercase text-[10px] tracking-[0.3em] text-slate-400">Total net à régler</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-slate-950 tracking-tighter">{total.toLocaleString()}</span>
                                <span className="text-lg font-black text-slate-900 uppercase">Ar</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3 border border-slate-100">
                        <Info size={16} className="text-blue-500 shrink-0" />
                        <p className="text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-tighter">
                            Cette facture proforma est valable 48h. Un acompte de 50% est requis pour valider la production.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
                <button 
                    onClick={onBack} 
                    className="col-span-2 bg-white border-2 border-slate-200 text-slate-400 py-5 rounded-[24px] font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
                >
                    <ArrowLeft size={14} />
                    Retour
                </button>
                <button 
                    onClick={onNext} 
                    className="col-span-3 bg-green-600 text-white py-5 rounded-[24px] font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-green-100 hover:bg-green-700 hover:shadow-green-200 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <span>Confirmer</span>
                    <CheckCircle2 size={16} />
                </button>
            </div>
        </div>
    );
}