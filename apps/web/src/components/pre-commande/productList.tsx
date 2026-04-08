'use client';

import { useState } from 'react';
import { ProductCard } from './productCard';
import { OrderModal } from './orderModal';
import { LEMA_PRODUCTS, Product } from './produitConst';
import { useDictionary } from '@/hooks/use-dictionary'; 
import { Dictionary } from '@/i18n/dictionaries/fr';

export function ProductList() {
    const { dictionary } = useDictionary<Dictionary>();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    if (!dictionary) return null;

    const categoryDict = dictionary.preCommande.footer.whyChooseUs.products.category;

    const categories = ['all', ...Object.keys(categoryDict)];

    const filteredProducts = selectedCategory === 'all'
        ? LEMA_PRODUCTS
        : LEMA_PRODUCTS.filter(product => product.categoryKey.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <main className="relative min-h-screen bg-slate-50/50">
            <OrderModal
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
                dict={dictionary} 
            />

            <div 
                className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/white-brick-wall.png')`,
                    backgroundAttachment: 'fixed' 
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-widest">
                        {dictionary.preCommande.footer.whyChooseUs.title}
                    </h1>
                    <div className="w-12 h-1 bg-green-500 mx-auto mt-2 rounded-full" />

                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {categories.map((catKey) => (
                            <button
                                key={catKey}
                                onClick={() => setSelectedCategory(catKey)}
                                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                                    selectedCategory === catKey
                                        ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-200'
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-green-400 hover:text-green-600'
                                }`}
                            >
                                {catKey === 'all' 
                                    ? (dictionary.nav.home === 'Accueil' ? 'Tous' : 'Rehetra') 
                                    : categoryDict[catKey as keyof typeof categoryDict]
                                }
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((item) => (
                        <ProductCard 
                            key={item.id} 
                            product={item} 
                            onSelect={(p: any) => setSelectedProduct(p)} 
                            dict={dictionary}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}