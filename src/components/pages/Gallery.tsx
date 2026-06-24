import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/companyData';
import { GalleryItem } from '../../types';
import { ImageWithFallback } from '../ImageWithFallback';
import { Filter, Eye, X, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | GalleryItem['category']>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Archives (40 Photos)' },
    { id: 'product', label: 'Product Display' },
    { id: 'production', label: 'Production Process' },
    { id: 'staff', label: 'Staff Operations' },
    { id: 'delivery', label: 'Deliveries' },
    { id: 'training', label: 'Training & Certification' },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            PAGE 6 — MULTIMEDIA ARCHIVE
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Gallery & Factory Floor
          </h1>
          <p className="text-slate-600 mt-2 text-base max-w-2xl">
            Explore our bar soap manufacturing operations in Mutundwe, hands-on student certification workshops, and daily delivery dispatches across Kampala.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white px-3.5 py-2 rounded-lg border border-slate-200 self-start md:self-auto">
          <Camera className="w-4 h-4 text-sky-600" />
          <span>public/images/las21.jpeg to las22.jpeg</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4">
        <span className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1 mr-2">
          <Filter className="w-4 h-4" /> Category:
        </span>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Responsive Grid of 40 Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all cursor-pointer group relative aspect-square"
          >
            <ImageWithFallback
              src={item.src}
              alt={item.title}
              fallbackCategory={item.category === 'production' ? 'factory' : item.category === 'training' ? 'training' : 'soap'}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 text-white">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-sky-300 mb-0.5">
                {item.category.toUpperCase()} • #{item.id}
              </span>
              <p className="text-xs font-black line-clamp-2 leading-tight">{item.title}</p>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-sky-400 font-bold">
                <Eye className="w-3 h-3" />
                <span>Expand View</span>
              </div>
            </div>
            <span className="absolute top-2 left-2 bg-slate-900/70 text-white font-mono text-[9px] px-1.5 py-0.5 rounded backdrop-blur-xs">
              las4{item.id}.jpeg
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full border border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            <div className="flex-1 relative min-h-[320px] bg-black">
              <ImageWithFallback
                src={lightboxItem.src}
                alt={lightboxItem.title}
                fallbackCategory="soap"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-slate-900 text-white border-l border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                    ARCHIVE #{lightboxItem.id}
                  </span>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{lightboxItem.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{lightboxItem.caption}</p>
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400 font-mono">
                  <div>File Path: public/images/las{lightboxItem.id}.jpeg</div>
                  <div>Category: {lightboxItem.category.toUpperCase()}</div>
                  <div>Location: Mutundwe Factory, Kampala</div>
                </div>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold mt-6 cursor-pointer"
              >
                Close Lightbox
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
