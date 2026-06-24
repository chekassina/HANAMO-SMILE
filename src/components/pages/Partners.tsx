import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Users, Handshake, Store, Award, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

interface PartnersProps {
  onSuccessToast: (msg: string) => void;
  onOpenOrderModal: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onSuccessToast, onOpenOrderModal }) => {
  const [partnerName, setPartnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [tier, setTier] = useState('Business Distributor');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const partnerTypes = [
    { title: 'Business Distributors', desc: 'Commercial wholesalers supplying entire districts or major markets in Uganda.', icon: Store, color: 'text-sky-600 bg-sky-50 border-sky-100' },
    { title: 'Retail Suppliers', desc: 'Supermarkets, hardware stores, and community shops stocking Hana Star brands.', icon: Handshake, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { title: 'Aspiring Entrepreneurs', desc: 'Individuals looking to launch custom private label soap brands with our sourcing.', icon: Users, color: 'text-purple-600 bg-purple-50 border-purple-100' },
    { title: 'Training Graduates', desc: 'Our certified soap makers operating micro-factories upcountry with lifetime support.', icon: Award, color: 'text-amber-600 bg-amber-50 border-amber-100' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast(`Welcome to Hanamo Smile Network! Your partner application for "${tier}" in ${location} has been received. CEO Moshe Haruna or our distribution head will reach out to ${phone}.`);
      setPartnerName('');
      setPhone('');
      setLocation('');
      setMessage('');
    }, 700);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
          PAGE 7 — B2B COLLABORATION NETWORK
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Our Partners & Distributors
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-3xl">
          We value strong, mutually beneficial partnerships that contribute to sustainable commercial growth and measurable community economic impact across East Africa.
        </p>
      </div>

      {/* Partner Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partnerTypes.map((pt) => {
          const IconP = pt.icon;
          return (
            <div key={pt.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${pt.color}`}>
                  <IconP className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-sky-600 flex items-center gap-1">
                <span>Network Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Partnership Application Section */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between relative">
          <div className="absolute top-8 left-8 w-16 h-1 bg-sky-500"></div>
          <div className="mt-8 space-y-4">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
              JOIN HANAMO SMILE ENTERPRISE
            </span>
            <h3 className="text-3xl font-black tracking-tight leading-tight">
              We welcome partnerships that promote growth and innovation.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Distributors enjoy preferential wholesale factory carton pricing, complimentary marketing branding collateral, and priority dispatch from Mutundwe.
            </p>
          </div>
          <div className="pt-8 border-t border-slate-800 space-y-3 text-xs text-slate-400">
            <p>📍 Factory: Mutundwe near Kisigula Mosque</p>
            <p>📞 Direct Inquiries: {COMPANY_INFO.phones[0]}</p>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-50">
          <h4 className="text-xl font-black text-slate-900 mb-6">Become a Partner Form</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Name or Full Name *</label>
                <input
                  type="text"
                  required
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="e.g. Kisekka Wholesale Ltd."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+256 782..."
                  className="w-full px-3.5 py-2.5 text-sm font-mono rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Partnership Category</label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Business Distributor">Business Distributor (Bulk Wholesaler)</option>
                  <option value="Retail Supplier">Retail Supermarket / Stockist</option>
                  <option value="Private Label Creator">Private Label Brand Creator</option>
                  <option value="Training Graduate Network">Training Graduate Network</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Operating Town / Region *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Downtown Kampala, Jinja, Mbarara"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Current Monthly Soap Demand / Note</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly tell us about your distribution network or supermarket size..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-200 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? <span>Submitting...</span> : <> <Send className="w-4 h-4" /> <span>Submit Partner Application</span> </>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
