'use client';

import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, User as UserIcon, Phone, UserPlus } from 'lucide-react';

export default function UserRegister() {
  
    const [isLogin, setIsLogin] = useState(true);
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Tentative de connexion client:', { email: formData.email, password: formData.password });
        } else {
            console.log('Tentative d\'inscription client:', formData);
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100 transition-all duration-500">
 
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-500 ${isLogin ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {isLogin ? <UserIcon size={32} /> : <UserPlus size={32} />}
                </div>
                <h2 className="text-3xl font-black text-slate-900">
                    {isLogin ? 'Espace Client' : 'Créer un profil'}
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                    {isLogin ? 'Heureux de vous revoir !' : 'Rejoignez l\'aventure Iriko.mg'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                {!isLogin && (
                    <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Nom complet</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                <UserIcon size={18} />
                            </div>
                            <input
                                type="text"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                placeholder="Votre nom complet"
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Email</label>
                    <div className="relative group">
                        <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 transition-colors ${isLogin ? 'group-focus-within:text-green-600' : 'group-focus-within:text-blue-600'}`}>
                            <Mail size={18} />
                        </div>
                        <input
                            type="email"
                            required
                            className={`w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 ${isLogin ? 'focus:ring-green-500/20 focus:border-green-500' : 'focus:ring-blue-500/20 focus:border-blue-500'}`}
                            placeholder="nom@exemple.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                {!isLogin && (
                    <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-400">
                        <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Téléphone</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                <Phone size={18} />
                            </div>
                            <input
                                type="tel"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                placeholder="034 XX XXX XX"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-1">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Mot de passe</label>
                        {isLogin && <button type="button" className="text-[10px] font-bold text-green-600 hover:underline">Oublié ?</button>}
                    </div>
                    <div className="relative group">
                        <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 transition-colors ${isLogin ? 'group-focus-within:text-green-600' : 'group-focus-within:text-blue-600'}`}>
                            <Lock size={18} />
                        </div>
                        <input
                            type="password"
                            required
                            className={`w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 transition-all font-medium text-slate-900 ${isLogin ? 'focus:ring-green-500/20 focus:border-green-500' : 'focus:ring-blue-500/20 focus:border-blue-500'}`}
                            placeholder="••••••••"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={`w-full text-white py-4 rounded-2xl font-black shadow-lg transition-all flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 mt-4 ${isLogin ? 'bg-green-600 hover:bg-green-700 shadow-green-600/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'}`}
                >
                    {isLogin ? 'SE CONNECTER' : "S'INSCRIRE MAINTENANT"}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>


            <div className="mt-8 pt-6 border-t border-slate-100 text-center font-medium">
                <p className="text-slate-500 text-sm">
                    {isLogin ? "Pas encore de compte ?" : "Déjà membre ?"}
                    {' '}
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className={`font-black hover:underline transition-colors ${isLogin ? 'text-green-600' : 'text-blue-600'}`}
                    >
                        {isLogin ? 'Créer un profil' : 'Se connecter'}
                    </button>
                </p>
            </div>
        </div>
    );
}