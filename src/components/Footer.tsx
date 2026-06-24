import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, BRANDS } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: () => void;
  onOpenPortalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenPortalModal,
}) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Top Branding Bar matching Geometric Balance Theme */}
      <div className="py-8 bg-slate-950 px-6 sm:px-10 border-b border-slate-800">
        <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mb-4 text-center sm:text-left">
          Our Trusted Market Brands Manufactured in Kampala
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10 opacity-80">
          {BRANDS.map((b) => (
            <span
              key={b.name}
              className={`text-sm sm:text-base font-black tracking-tighter ${
                b.highlight ? 'text-sky-400' : 'text-slate-200'
              }`}
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Company Profile */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-sky-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <h3 className="text-lg font-bold tracking-tight">HANAMO SMILE</h3>
          </div>
          <p className="text-xs text-sky-400 italic mb-4 font-semibold">
            &ldquo;{COMPANY_INFO.slogan}&rdquo;
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Uganda&rsquo;s premier bar soap manufacturer, detergent refinery, and entrepreneurship training institution founded by Business Coach Mr. Moshe Haruna in 2014.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
            <Award className="w-4 h-4 text-sky-400 shrink-0" />
            <span>UNBS Compliant & Certified Practical Training</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-5">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition-colors cursor-pointer">
                About Hanamo & Mr. Moshe Haruna
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Products Catalog & Brands
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('training')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Soap Making Practical Training
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('delivery')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Delivery Services & Tracking Portal
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('gallery')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Photo Gallery (40 Archives)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('partners')} className="hover:text-sky-400 transition-colors cursor-pointer">
                Distributors & Partners
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Services & Sourcing */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-5">
            Core Solutions
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>• Bulk Bar Soap Manufacturing</li>
            <li>• Custom Private Labeling</li>
            <li>• Laundry Detergent Production</li>
            <li>• Right Material Sourcing Advisory</li>
            <li>• Brand Packaging & Marketing Coaching</li>
            <li>• UNBS Standards Assistance</li>
          </ul>
          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              onClick={onOpenPortalModal}
              className="text-xs text-sky-400 hover:text-sky-300 font-bold underline cursor-pointer"
            >
              Access Bulk Customer Portal &rarr;
            </button>
          </div>
        </div>

        {/* Col 4: Contact & Location */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-5">
            Mutundwe Factory & HQ
          </h4>
          <div className="space-y-3.5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.detailedAddress}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <div className="flex flex-col">
                <span>{COMPANY_INFO.phones[0]}</span>
                <span className="text-xs text-slate-400">{COMPANY_INFO.phones[1]}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="break-all text-xs">{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-start gap-3 pt-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-400">{COMPANY_INFO.hours}</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={onOpenOrderModal}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              Request Bulk Order / Price List
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6 px-6 sm:px-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>
          Copyright &copy; {new Date().getFullYear()} Hanamo Smile Enterprise Ltd. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <span>CEO Mr. Moshe Haruna</span>
          <span>•</span>
          <span>Mutundwe, Kampala Uganda</span>
        </div>
      </div>
    </footer>
  );
};
