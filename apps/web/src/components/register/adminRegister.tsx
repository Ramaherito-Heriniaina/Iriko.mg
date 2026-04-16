'use client';

import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AdminRegister() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        adminCode: '', 
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Connexion Admin avec:', formData);
    };

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-slate-200">
            
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full mb-4 shadow-lg">
                    <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Administration</h2>
                <p className="text-slate-500 mt-2 font-medium">Gestion de la plateforme Iriko</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Identifiant Admin</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900 transition-colors">
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all font-medium text-slate-900"
                            placeholder="admin@iriko.mg"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Mot de passe</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900 transition-colors">
                            <Lock size={18} />
                        </div>
                        <input
                            type="password"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all font-medium text-slate-900"
                            placeholder="••••••••"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-black shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 mt-4"
                >
                    ACCÉDER AU DASHBOARD
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <Link href="/" className="text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors uppercase tracking-widest">
                    Retour au site principal
                </Link>
            </div>
        </div>
    );
}