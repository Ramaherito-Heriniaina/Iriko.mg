'use client';

import React from 'react';
import { UserPlus, ShieldCheck } from 'lucide-react';
import { Dictionary } from '@/i18n/dictionaries/fr';

interface RegistrationSectionProps {
    dict: Dictionary; 
}

export function RegistrationSection({ dict }: RegistrationSectionProps) {

    const textClient = dict.auth.registerClient;
    const textAdmin = dict.auth.registerAdmin;

    return (
        <div className="flex flex-wrap items-center gap-3">
  
            <button
                onClick={() => console.log('Register Client')}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
                <UserPlus className="w-4 h-4" />
                {textClient}
            </button>

            <button
                onClick={() => console.log('Register Admin')}
                className="flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-green-500 text-slate-700 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-sm"
            >
                <ShieldCheck className="w-4 h-4 text-green-600" />
                {textAdmin}
            </button>
        </div>
    );
}