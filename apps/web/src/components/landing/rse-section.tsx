'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import { Copy, X, CheckCircle2, QrCode, Loader2 } from 'lucide-react';
// import emailjs from '@emailjs/browser';

export function RseSection() {
    const { dictionary } = useDictionary<Dictionary>();
    const [isDonating, setIsDonating] = useState(false);
    const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
    const [showReceipt, setShowReceipt] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ref, setRef] = useState('');
    const [emailSentNotice, setEmailSentNotice] = useState(false);
    // const [isSending, setIsSending] = useState(false);

    const handleValidationAndSubmit = () => {
        if (!name || !email || !selectedOperator || !ref) {
            alert(dictionary?.rse.donation_form.error_fill)
            return;
        }

        setEmailSentNotice(true);

        setTimeout(() => setEmailSentNotice(false), 3000);
    };

    const operators = [
        { id: 'mvola', src: '/image/mvola_logo.jpeg', alt: 'Mvola', account: '034 00 000 00', code: '*111*1*2*...' },
        { id: 'orange', src: '/image/orange-money_logo.jpg', alt: 'Orange Money', account: '032 00 000 00', code: '#144*...#' },
        { id: 'airtel', src: '/image/airtelMoney_logo.png', alt: 'Airtel Money', account: '033 00 000 00', code: '*433#' },
        { id: 'paypal', src: '/image/PayPal-Logo.png', alt: 'PayPal', account: 'donation@iriko.mg', code: 'Lien direct' },
    ];

    const handleReset = () => {
        setIsDonating(false);
        setShowReceipt(false);
        setName('');
        setEmail('');
        setRef('');
        setTimeout(() => setSelectedOperator(null), 500);
    };

    // Confirmed send mail after charity
    /* const handleSendEmailAndShowReceipt = async () => {
    if (!name || !email || !selectedOperator) {
        alert(dictionary?.rse.donation_form.error_fill);
        return;
    }

    setIsSending(true);

    const templateParams = {
        to_name: name,
        to_email: email,
        from_name: dictionary?.rse.receipt.title,
        message: `Nous avons bien reçu votre intention de don via ${selectedOperator.toUpperCase()}. Merci pour votre soutien !`,
        ref_donation: ref || dictionary?.rse.donation_form.ref_placeholder
    };

    try {
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            templateParams,
            'YOUR_PUBLIC_KEY'
        );
            setShowReceipt(true);
        } catch (error) {
            setShowReceipt(true);
        } finally {
            setIsSending(false);
        }
    }; */

    const currentOp = operators.find(op => op.id === selectedOperator);

    return (
        <section id="rse" className="py-40 px-4 flex flex-col items-center">

            <div className="text-center mb-14">
                <h2 className="text-5xl md:text-4xl font-extrabold text-black tracking-tight mb-6">
                    {dictionary?.rse.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                    {dictionary?.rse.description}
                </p>
                <div className="w-24 h-1.5 bg-black mx-auto mt-8 rounded-full"></div>
            </div>


            <div className="w-full max-w-7xl aspect-[2/1] bg-white rounded-[60px] md:rounded-[500px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden flex flex-col md:flex-row">

                <div
                    className={`absolute inset-y-1 right-1 z-30 transition-transform duration-700 ease-in-out aspect-square hidden md:block ${isDonating ? '-translate-x-[100%]' : 'translate-x-0'}`}
                >
                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white/80 relative">
                        <Image
                            src="/image/formation.jpg"
                            alt="Iriko Engagement"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                <div className={`w-full md:w-1/2 h-full p-12 lg:p-20 flex flex-col items-center justify-center transition-all duration-500 ${isDonating ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}>
                    <div className="max-w-xl w-full flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-4 mb-8">
                            <Image
                                src="/image/iriko_logo-removebg-preview.png"
                                alt="Logo Iriko"
                                width={100}
                                height={100}
                                className="relative rounded-xl"
                            />
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-green-700">
                                {dictionary?.rse.badge}
                            </h2>
                        </div>
                        <h3 className="text-4xl lg:text-3xl font-black text-gray-950 mb-8 leading-tight">
                            {dictionary?.rse.tagline}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-10">
                            {dictionary?.rse.details}
                        </p>
                        <button
                            onClick={() => setIsDonating(true)}
                            className="group bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-green-100 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 text-lg"
                        >
                            <span>{dictionary?.rse.cta_button}</span>
                            <CheckCircle2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>


                <div
                    className={`w-full md:w-1/2 h-full p-8 lg:p-20 flex flex-col items-center justify-center transition-all duration-500 relative ${isDonating ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
                >

                    <div
                        className={`max-w-md w-full flex flex-col items-center justify-center transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${showReceipt ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
                            }`}
                    >

                        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h4 className="font-extrabold text-2xl text-gray-900 tracking-tight">
                                {dictionary?.rse.donation_form.title}
                            </h4>
                            <p className="text-[10px] font-bold text-green-600 mt-2 uppercase tracking-[0.3em] opacity-80">
                                {dictionary?.rse.donation_form.protocol}
                            </p>
                        </div>

                        <div className="space-y-4 w-full flex flex-col items-center justify-center">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={dictionary?.rse.donation_form.name_placeholder}
                                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-green-500 focus:ring-8 focus:ring-green-500/5 outline-none transition-all duration-300 placeholder:text-gray-400 text-sm font-medium shadow-sm hover:border-gray-200"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={dictionary?.rse.donation_form.email_placeholder}
                                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-green-500 focus:ring-8 focus:ring-green-500/5 outline-none transition-all duration-300 placeholder:text-gray-400 text-sm font-medium shadow-sm hover:border-gray-200"
                            />
                            <input
                                type="text"
                                value={ref}
                                onChange={(e) => setRef(e.target.value)}
                                placeholder={dictionary?.rse.donation_form.ref_placeholder}
                                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-green-500 focus:ring-8 focus:ring-green-500/5 outline-none transition-all duration-300 placeholder:text-gray-400 text-sm font-medium shadow-sm hover:border-gray-200"
                            />
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center items-center py-4">
                            {operators.map((op) => (
                                <button
                                    key={op.id}
                                    onClick={() => {
                                        setSelectedOperator(op.id);
                                        setTimeout(() => setShowReceipt(true), 300);
                                    }}
                                    className={`group relative p-2 rounded-2xl border-2 transition-all duration-500 ease-out active:scale-90 ${selectedOperator === op.id
                                        ? 'border-green-500 bg-green-50/50 shadow-inner'
                                        : 'border-transparent bg-white shadow-md shadow-gray-100 hover:shadow-lg hover:-translate-y-1'
                                        }`}
                                >
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src={op.src}
                                            alt={op.alt}
                                            fill
                                            className={`object-contain transition-all duration-500 rounded-2xl ${selectedOperator === op.id ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'
                                                }`}
                                        />
                                    </div>
                                    {selectedOperator === op.id && (
                                        <span className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-lg animate-in zoom-in duration-300">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 w-full max-w-xs items-center justify-center">
                            <button
                                onClick={handleValidationAndSubmit}
                                className="group w-full py-3 bg-gray-900 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-green-600 hover:shadow-2xl hover:shadow-green-200 active:scale-95"
                            >
                                <span className="relative z-10">{dictionary?.rse.donation_form.submit}</span>
                            </button>

                            <button
                                onClick={handleReset}
                                className="w-full py-3 text-gray-400 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:text-gray-600 hover:bg-gray-100 transition-all active:scale-95"
                            >
                                <span className="relative z-10">{dictionary?.rse.donation_form.cancel}</span>
                            </button>

                            {emailSentNotice && (
                                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3 bg-white border border-green-200 shadow-lg rounded-xl px-4 py-3 animate-in fade-in duration-500">
                                    <div className="bg-green-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">
                                        {dictionary?.rse.donation_form.success_notice} <span className="text-green-600">{email}</span>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ${showReceipt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
                        <div className="w-full max-w-[340px] bg-white border border-gray-100 rounded-[35px] shadow-2xl overflow-hidden relative">

                            <button onClick={() => setShowReceipt(false)} className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-950 transition-colors z-10">
                                <X size={20} />
                            </button>

                            <div className="p-5 text-center border-b border-dashed border-gray-200 relative">
                                <div className="w-10 h-10 mx-auto mb-2 relative">
                                    <Image src="/image/iriko_logo-removebg-preview.png" alt="Logo" fill className="object-contain" />
                                </div>
                                <h5 className="font-black text-gray-900 text-sm uppercase tracking-widest">{dictionary?.rse.receipt.title}</h5>
                                <p className="text-[9px] text-green-600 font-bold mt-1 uppercase">{dictionary?.rse.receipt.subtitle} {currentOp?.alt}</p>
                                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#FAFAFA] rounded-full border border-gray-100"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#FAFAFA] rounded-full border border-gray-100"></div>
                            </div>

                            <div className="p-5 space-y-3 bg-gray-50/30">
                                <div className="flex justify-between items-center text-[11px] font-bold">
                                    <span className="text-gray-400 uppercase"> {dictionary?.rse.receipt.recipient_label}</span>
                                    <span className="text-gray-900">{dictionary?.rse.receipt.recipient_name}</span>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{dictionary?.rse.receipt.account_label}{currentOp?.alt}</span>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm group/copy cursor-pointer active:scale-95 transition-transform" onClick={() => navigator.clipboard.writeText(currentOp?.account || '')}>
                                        <span className="font-mono font-bold text-gray-900 text-lg">{currentOp?.account}</span>
                                        <Copy size={16} className="text-green-600 group-hover/copy:scale-110 transition-transform" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{dictionary?.rse.receipt.quick_code}</span>
                                    <div className="p-3 bg-gray-900 text-green-400 rounded-xl font-mono text-center text-sm font-bold">
                                        {currentOp?.code}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center pt-2 border-t border-gray-100">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 mb-3">
                                        <QrCode size={48} className="text-gray-900" />
                                    </div>
                                    <p className="text-[9px] text-gray-400 text-center font-medium leading-tight">{dictionary?.rse.receipt.scan_help}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}


