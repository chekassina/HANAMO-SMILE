import React, { useState } from 'react';
import { PRODUCTS, BRANDS } from '../../data/companyData';
import { Product } from '../../types';
import { ImageWithFallback } from '../ImageWithFallback';
import { Check, ShoppingBag, Filter, Sparkles, Truck } from 'lucide-react';

interface ProductsProps {
  onOpenOrderModal: (productName?: string) => void;
  onOpenPortalModal: () => void;
}

export const Products: React.FC<ProductsProps> = ({
  onOpenOrderModal,
  onOpenPortalModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | Product['category']>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Products (9)' },
    { id: 'bar_soap', label: 'Bar Soaps' },
    { id: 'detergent', label: 'Laundry Detergents' },
    { id: 'home_care', label: 'Home Care' },
    { id: 'raw_material', label: 'Raw Material Kit' },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            PAGE 3 — MANUFACTURING CATALOG
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Products & Brands
          </h1>
          <p className="text-slate-600 mt-3 text-base max-w-2xl">
            We manufacture high-performance cleaning products designed for households, commercial laundry businesses, institutions, and wholesale distributors in Uganda.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onOpenPortalModal}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
          >
            <Truck className="w-4 h-4 text-sky-400" />
            <span>Track Bulk Dispatch</span>
          </button>
        </div>
      </div>

      {/* Brands Directory Showcase */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
          MANUFACTURED & CREATED BRANDS ON THE UGANDAN MARKET
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                b.highlight
                  ? 'bg-sky-50 border-sky-300 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-base font-black ${b.highlight ? 'text-sky-700' : 'text-slate-800'}`}>
                  {b.name}
                </span>
                {b.highlight && <Sparkles className="w-4 h-4 text-sky-600" />}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">{b.tagline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 mr-2">
          <Filter className="w-4 h-4" /> Filter Catalog:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid matching Geometric Balance cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Image Box */}
              <div className="h-64 relative bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={prod.image}
                  alt={prod.name}
                  fallbackCategory="product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                    {prod.brand}
                  </span>
                  {prod.isBestSeller && (
                    <span className="bg-sky-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                      Flagship Choice
                    </span>
                  )}
                </div>
              </div>

              {/* Specs Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">{prod.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">{prod.description}</p>

                {/* Key Features */}
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Formulation Specs</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {prod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5 font-bold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For Tags */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Perfect For</p>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.bestFor.map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Order Action */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Wholesale Box Rate</p>
                <p className="text-base font-black text-slate-900">{prod.bulkPrice || prod.price}</p>
              </div>
              <button
                onClick={() => onOpenOrderModal(prod.name)}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-200 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Bulk</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bulk Sourcing Banner */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full">
            CUSTOM BRANDING & PACKAGING
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">Need a private label bar soap for your business?</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            We help entrepreneurs and supermarkets design custom wrappers, source unadulterated raw materials, and manufacture certified bar soap under your own company name.
          </p>
        </div>
        <button
          onClick={() => onOpenOrderModal('Custom Private Label Brand Creation')}
          className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-sm shadow-xl shrink-0 transition-all cursor-pointer"
        >
          Consult Mr. Moshe Haruna
        </button>
      </div>
    </div>
  );
};
