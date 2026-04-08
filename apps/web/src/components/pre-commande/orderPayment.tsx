'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { CheckCircle2, Copy, QrCode, ArrowLeft, Loader2, Smartphone, ShieldCheck, PartyPopper, Mail, Download } from 'lucide-react';

interface OrderPaymentProps {
    total: number;
    dict: any;
    onBack: () => void;
}

export function OrderPayment({ total, dict, onBack }: OrderPaymentProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [method, setMethod] = useState<'mvola' | 'orange' | 'airtel' | 'paypal' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const t = dict?.preCommande?.footer?.whyChooseUs?.features?.payment;

    const [formData, setFormData] = useState({
        nom: '', prenom: '', email: '', numero: '', transactionRef: ''
    });

    const deposit = total * 0.5;

    useEffect(() => {
       if (isSuccess) {
            const AUDIO_URL = 'https://assets.mixkit.co/active_storage/sfx/2012/2012-preview.mp3'; 
            const audio = new Audio(AUDIO_URL);
            audio.volume = 0.5;
            audio.play().catch(err => console.log("Lecture audio bloquée ou lien invalide :", err));
        }
    }, [isSuccess]);

    const generateClientRef = () => {
        const lastID = typeof window !== 'undefined' ? (localStorage.getItem('lema_order_id') || '0') : '0';
        const nextID = parseInt(lastID) + 1;

        if (typeof window !== 'undefined') {
            localStorage.setItem('lema_order_id', nextID.toString());
        }

        const now = new Date();
        const year = now.getFullYear(); 
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const formattedID = String(nextID).padStart(4, '0');

        return `IRK-${formattedID}-${year}-${month}`;
    };

    const clientRef = useMemo(() => generateClientRef(), []);

    const operators = [
        { id: 'mvola', src: '/image/mvola_logo.jpeg', alt: 'Mvola', account: '034 00 000 00', code: '*111*1*2*...' },
        { id: 'orange', src: '/image/orange-money_logo.jpg', alt: 'Orange Money', account: '032 00 000 00', code: '#144*...#' },
        { id: 'airtel', src: '/image/airtelMoney_logo.png', alt: 'Airtel Money', account: '033 00 000 00', code: '*433#' },
        { id: 'paypal', src: '/image/PayPal-Logo.png', alt: 'PayPal', account: 'paiement@iriko.mg', code: 'Lien direct' },
    ] as const;

    const currentOp = operators.find(op => op.id === method);

    const handleFinalValidation = async () => {
        if (!formData.nom || !formData.email || !formData.transactionRef) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="max-w-md mx-auto p-8 bg-white rounded-[40px] shadow-2xl border border-slate-100 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PartyPopper className="text-green-600 w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">{t?.title}</h2>
                <p className="text-slate-500 text-xs mb-8">
                    {t?.confirmation_sent} <span className="font-bold text-slate-900">{formData.email}</span>
                </p>

                <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-dashed border-slate-200">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">{t?.client_ref}</p>
                    <p className="text-2xl font-mono font-black text-green-600 mb-4">{clientRef}</p>
                    <div className="space-y-3 pt-4 border-t border-slate-200">
                        <div className="flex justify-between text-[10px] font-black uppercase">
                            <span className="text-green-600">{t?.deposit_paid}</span>
                            <span className="text-slate-900">{deposit.toLocaleString()} Ar</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase">
                            <span className="text-red-500">{t?.balance_due}</span>
                            <span className="text-slate-900">{deposit.toLocaleString()} Ar</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
                        <Download size={16} /> {t?.download_receipt}
                    </button>
                    <button onClick={onBack} className="w-full text-slate-400 py-2 font-bold text-[9px] uppercase tracking-widest hover:text-slate-900 transition-colors">
                        {t?.back_home}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="bg-slate-950 text-white p-7 rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 mb-1">{t?.deposit_label}</p>
                            <h2 className="text-4xl font-black tracking-tighter">{deposit.toLocaleString()} <span className="text-lg">Ar</span></h2>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-right">
                            <p className="text-[8px] font-bold uppercase tracking-tighter opacity-60">{t?.total_purchase}</p>
                            <p className="text-xs font-black text-white">{total.toLocaleString()} Ar</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 py-1 px-2.5 bg-green-500/20 rounded-lg border border-green-500/30 w-fit">
                        <ShieldCheck size={12} className="text-green-400" />
                        <span className="text-[8px] font-black uppercase tracking-wider text-green-400">{t?.secure_payment}</span>
                    </div>
                </div>
            </div>

            {step === 1 ? (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-center leading-none">
                                {t?.choose_method}
                            </p>
                            <div className="w-8 h-[2px] bg-green-500/30 rounded-full" />
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 px-4">
                            {operators.map((op) => (
                                <button
                                    key={op.id}
                                    onClick={() => setMethod(op.id)}
                                    className={`group relative w-16 h-12 rounded-xl border-2 transition-all duration-300 flex items-center justify-center
                                        ${method === op.id ? 'border-green-500 bg-white shadow-lg scale-110' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                                >
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src={op.src}
                                            alt={op.alt}
                                            fill
                                            className={`object-contain transition-all ${method === op.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-30'}`}
                                        />
                                    </div>
                                    {method === op.id && (
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-in zoom-in" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {method && currentOp && (
                        <div className="space-y-4 animate-in slide-in-from-top-4 duration-500">
                            <div className="bg-white border border-slate-100 rounded-[28px] p-5 space-y-4 shadow-sm">
                                <div className="space-y-1.5">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">{t?.account_label} {currentOp.alt}</span>
                                    <div onClick={() => navigator.clipboard.writeText(currentOp.account)} className="flex justify-between items-center p-3.5 bg-slate-50/50 rounded-xl border border-slate-100 cursor-pointer active:scale-95 transition-all group">
                                        <span className="font-mono font-black text-base text-slate-900 tracking-tight">{currentOp.account}</span>
                                        <Copy size={14} className="text-slate-400 group-hover:text-green-600 transition-colors" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col items-center justify-center p-3 bg-slate-900 rounded-xl text-white">
                                        <Smartphone size={16} className="text-green-400 mb-1" />
                                        <span className="text-[7px] uppercase font-bold text-slate-500">{t?.ussd_code}</span>
                                        <span className="font-mono font-bold text-[11px] text-green-400">{currentOp.code}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
                                        <QrCode size={30} className="text-slate-900 mb-1" />
                                        <span className="text-[7px] font-bold uppercase text-slate-400 text-center leading-none">{t?.scan_qr}</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setStep(2)} className="w-full bg-green-600 text-white py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-[10px] hover:bg-green-700 transition-all shadow-xl shadow-green-50 flex items-center justify-center gap-2">
                                {t?.btn_transfer_done} <CheckCircle2 size={14} />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-5 animate-in slide-in-from-right-4 duration-500">
                    <div className="flex items-center gap-3 px-1">
                        <button onClick={() => setStep(1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"><ArrowLeft size={18} /></button>
                        <h3 className="font-black text-slate-900 uppercase text-[9px] tracking-[0.2em]">{t?.validation_title}</h3>
                    </div>

                    <div className="grid gap-3">
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder={t?.placeholder_name || "Nom"}
                                value={formData.nom}
                                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-xs font-bold focus:border-green-500 focus:bg-white outline-none transition-all"
                            />
                            <input
                                type="text"
                                placeholder={t?.placeholder_firstname || "Prénom"}
                                value={formData.prenom}
                                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-xs font-bold focus:border-green-500 focus:bg-white outline-none transition-all"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder={t?.placeholder_email || "Email (pour le reçu PDF)"}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-xs font-bold focus:border-green-500 focus:bg-white outline-none transition-all"
                        />

                        <input
                            type="text"
                            placeholder={t?.placeholder_numero || "Numéro de téléphone"}
                            value={formData.numero}
                            onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 text-xs font-bold focus:border-green-500 focus:bg-white outline-none transition-all"
                        />

                        <div className="mt-2 p-5 bg-green-50/30 border-2 border-dashed border-green-200 rounded-[28px]">
                            <label className="block text-[8px] font-black uppercase text-green-700 mb-2 tracking-[0.3em] text-center">
                                {t?.transaction_id_label || "ID Transaction (Reçu par SMS)"}
                            </label>
                            <input
                                type="text"
                                value={formData.transactionRef}
                                onChange={(e) => setFormData({ ...formData, transactionRef: e.target.value })}
                                className="w-full bg-white border-2 border-green-200 rounded-xl py-4 px-4 text-2xl font-mono font-black text-green-700 outline-none text-center uppercase tracking-widest shadow-inner focus:border-green-500"
                            />
                        </div>
                    </div>

                    <button onClick={handleFinalValidation} disabled={isSubmitting} className="w-full bg-slate-950 text-white py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-green-600 disabled:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl">
                        {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <>{t?.btn_confirm} <Mail size={16} /></>}
                    </button>
                </div>
            )}
        </div>
    );
}