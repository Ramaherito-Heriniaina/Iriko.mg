'use client'

import { Construction } from 'lucide-react';

export default function PreCommandePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center">
                    <Construction className="w-16 h-16 text-green-600 animate-bounce" />
                </div>
                <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white">
                    Pré-commande en préparation
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    Cette fonctionnalité est actuellement en cours de développement. 
                    Merci de votre patience, nous travaillons dur pour vous offrir une expérience unique !
                </p>
                <button 
                    onClick={() => window.history.back()} 
                    className="text-green-600 font-semibold hover:underline"
                >
                    Retour à l'accueil
                </button>
            </div>
        </main>
    );
}