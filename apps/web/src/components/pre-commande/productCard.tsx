'use client';

import React from 'react';
import { Product } from './produitConst';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  dict: any;
}

export function ProductCard({ product, onSelect, dict }: ProductCardProps) {

  const t = dict?.preCommande?.card;

  const productName = dict.products?.name?.[product.nameKey] || product.name;
  const categoryName = dict.products?.category?.[product.categoryKey] || product.category;

  return (
    <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-slate-100 group flex flex-col items-center">
      <div className="relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center bg-[#f9f9f9] rounded-xl">
        <img
          src={product.image}
          alt={productName}
          className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />

        <div className="absolute top-3 left-3">
          <span className="bg-white/80 backdrop-blur-sm text-[10px] font-bold text-slate-500 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-tighter">
            {categoryName}
          </span>
        </div>
      </div>

      <div className="text-center w-full">
        <h3 className="text-xl font-semibold text-slate-900 leading-tight">
          {dict.preCommande.footer.whyChooseUs.products.name[product.nameKey]}
        </h3>

        <div className="mt-3 flex flex-col items-center gap-1">
          <span className="text-xl font-black text-green-700">
            {product.pricePerKg.toLocaleString()} Ar
            <span className="text-[10px] text-slate-400 font-normal ml-1">
              {t?.unit_per_kg || '/ kg'}
            </span>
          </span>
        </div>

        <button
          onClick={() => onSelect(product)}
          className="mt-5 w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-green-600 transition-all duration-300 transform active:scale-95 shadow-lg shadow-slate-200 hover:shadow-green-100"
        >
          {t?.btn_order || 'PRÉ-COMMANDER'}
        </button>
      </div>
    </div>
  );
}