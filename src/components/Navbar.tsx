import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: () => void;
  onOpenPortalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal,
  onOpenPortalModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Training', id: 'training' },
    { label: 'Delivery & Portal', id: 'delivery' },
    { label: 'About Us', id: 'about' },
    { label: 'Gallery (40)', id: 'gallery' },
    { label: 'Partners', id: 'partners' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-10 sticky top-0 z-50 shadow-xs">
      {/* Brand Logo & Name */}
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
          H
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight leading-none text-slate-900 group-hover:text-sky-600 transition-colors">
            {COMPANY_INFO.shortName.toUpperCase()}
          </h1>
          <p className="text-[10px] text-sky-600 font-semibold tracking-widest uppercase mt-0.5">
            Enterprise Ltd.
          </p>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden xl:flex gap-6 text-sm font-medium text-slate-600">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`py-2 transition-all cursor-pointer ${
                isActive
                  ? 'text-sky-600 border-b-2 border-sky-600 font-bold'
                  : 'hover:text-sky-600'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={onOpenPortalModal}
          className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center gap-1.5 transition-colors border border-slate-300 cursor-pointer"
          title="Track your bulk order in real time"
        >
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          <span>Client Portal</span>
        </button>
        <button
          onClick={onOpenOrderModal}
          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-200 transition-all active:scale-95 cursor-pointer"
        >
          Order Soap
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex xl:hidden items-center gap-2">
        <button
          onClick={onOpenOrderModal}
          className="md:hidden bg-sky-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
        >
          Order
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 xl:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'bg-sky-50 text-sky-600 border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onOpenPortalModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Bulk Order Live Tracking Portal</span>
            </button>
            <button
              onClick={() => {
                onOpenOrderModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-sky-600 text-white rounded-lg font-bold text-sm shadow-md shadow-sky-200"
            >
              Order Bulk Soap / Book Training
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
