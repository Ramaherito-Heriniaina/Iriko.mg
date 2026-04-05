'use client';

import React, { useState, useEffect } from 'react';
import { Product } from './produitConst';
import { ORDER_OPTIONS, LieuName } from './orderConfig';
import { OrderSelection } from './orderSelection';
import { OrderProforma } from './orderProforma';
import { OrderPayment } from './orderPayment'; 
import { X, ChevronRight, ShoppingBag } from 'lucide-react';

interface OrderModalProps {
    product: Product | null;
    onClose: () => void;
}

export function OrderModal({ product, onClose }: OrderModalProps) {
    const [step, setStep] = useState<'selection' | 'proforma' | 'payment'>('selection');

    const [qty, setQty] = useState<number>(5);
    const [selectedEngrais, setSelectedEngrais] = useState<{ name: string, price: number } | null>(null);
    const [lieu, setLieu] = useState<LieuName | null>(null);
    const [tarifLieu, setTarifLieu] = useState<number>(0);

    useEffect(() => {
        if (!product) {
            setStep('selection');
            setQty(5);
            setSelectedEngrais(null);
            setLieu(null);
            setTarifLieu(0);
        }
    }, [product]);

    useEffect(() => {
        if (lieu) {
            const found = ORDER_OPTIONS.lieux.find(l => l.name === lieu);
            if (found) setTarifLieu(found.price);
        }
    }, [lieu]);

    if (!product) return null;

    const engraisPrice = selectedEngrais?.price ?? 0;
    const unitPrice = tarifLieu + engraisPrice;
    const total = unitPrice * qty;

    const progress = step === 'selection' ? '33.33%' : step === 'proforma' ? '66.66%' : '100%';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-300">
            
            <div className="bg-white w-full max-w-xl rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20 relative">
             
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
                    <div 
                        className="h-full bg-green-500 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(34,197,94,0.5)]" 
                        style={{ width: progress }}
                    />
                </div>

                <div className="px-8 pt-8 pb-4 flex justify-between items-center bg-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <ShoppingBag size={20} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-sm font-black uppercase tracking-widest text-slate-900 leading-none">
                                {step === 'selection' ? 'Configuration' : 
                                 step === 'proforma' ? 'Ma Facture' : 'Paiement'}
                            </h2>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                                {product.name} • IRIKO MG
                            </span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={onClose} 
                        className="group w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-300"
                    >
                        <X size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                <div className="px-8 pb-6 flex items-center gap-2">
                    <span className={`text-[8px] font-black uppercase tracking-widest ${step === 'selection' ? 'text-green-600' : 'text-slate-300'}`}>Choix</span>
                    <ChevronRight size={10} className="text-slate-200" />
                    <span className={`text-[8px] font-black uppercase tracking-widest ${step === 'proforma' ? 'text-green-600' : 'text-slate-300'}`}>Résumé</span>
                    <ChevronRight size={10} className="text-slate-200" />
                    <span className={`text-[8px] font-black uppercase tracking-widest ${step === 'payment' ? 'text-green-600' : 'text-slate-300'}`}>Acompte</span>
                </div>

                <div className="px-8 pb-10 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                    <div className="py-2">
                        {step === 'selection' ? (
                            <OrderSelection
                                qty={qty} setQty={setQty}
                                selectedEngrais={selectedEngrais} setSelectedEngrais={setSelectedEngrais}
                                lieu={lieu} setLieu={setLieu}
                                onValidate={() => setStep('proforma')}
                            />
                        ) : step === 'proforma' ? (
                            <OrderProforma
                                product={product}
                                qty={qty}
                                selectedEngrais={selectedEngrais}
                                lieu={lieu}
                                unitPrice={unitPrice}
                                total={total}
                                onBack={() => setStep('selection')}
                                onNext={() => setStep('payment')} 
                            />
                        ) : (
                            <OrderPayment 
                                total={total}
                                onBack={() => setStep('proforma')}
                            />
                        )}
                    </div>
                </div>

                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-center">
                    <div className="flex items-center gap-2 opacity-30 grayscale">
                        <div className="h-[1px] w-8 bg-slate-400" />
                        <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-500 whitespace-nowrap italic">Iriko Agriculture Durable</span>
                        <div className="h-[1px] w-8 bg-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}