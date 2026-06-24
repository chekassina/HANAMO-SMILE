import React, { useState } from 'react';
import { PRODUCTS } from '../../data/companyData';
import { X, CheckCircle, Package, Send } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
  onSuccessToast: (msg: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialProductName = 'Hana Star Bar Soap (Flagship)',
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(initialProductName);
  const [orderType, setOrderType] = useState<'bulk_soap' | 'training_enrollment' | 'custom_branding'>('bulk_soap');
  const [quantity, setQuantity] = useState('10 Cartons / Boxes');
  const [location, setLocation] = useState('Kampala Central');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast(`Thank you ${name}! Your order inquiry for "${product}" has been received by Hanamo Smile team. We will call ${phone} shortly.`);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header matching Geometric Balance sky-600 */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between relative border-b border-sky-500">
          <div className="absolute top-0 left-6 w-16 h-1 bg-sky-500"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center font-bold text-xl">
              H
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">ORDER & INQUIRY FORM</h3>
              <p className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">
                Factory Direct from Mutundwe, Kampala
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
          {/* Order Purpose Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
              Inquiry Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'bulk_soap', label: 'Bulk Bar Soap' },
                { id: 'training_enrollment', label: 'Book Training' },
                { id: 'custom_branding', label: 'Private Labeling' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setOrderType(tab.id as any)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                    orderType === tab.id
                      ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name or Business Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Nalubega"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+256 782..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@gmail.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Delivery Location / District
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Ntinda, Kampala or Jinja"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50"
              />
            </div>
          </div>

          {orderType === 'bulk_soap' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sky-50/50 p-4 rounded-xl border border-sky-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Product Brand
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.price})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Approximate Quantity
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                >
                  <option value="5 Cartons / Boxes (Min Wholesale)">5 Cartons (100 Bars)</option>
                  <option value="10 Cartons / Boxes">10 Cartons (200 Bars)</option>
                  <option value="25 Cartons / Boxes">25 Cartons (500 Bars)</option>
                  <option value="50+ Cartons (Commercial Distributor)">50+ Cartons (1000+ Bars)</option>
                </select>
              </div>
            </div>
          )}

          {orderType === 'training_enrollment' && (
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold">🎓 Soap Making Practical Training Enrollment</p>
              <p>Duration: 5 Weeks Practical | Location: Mutundwe Factory | Certification & Lifetime Support included.</p>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Additional Instructions / Branding Need
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us if you need custom wrappers, material sourcing advice, or specific soap hardness..."
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50"
            ></textarea>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              <span>Fast confirmation via phone / WhatsApp</span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-bold hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-sky-200 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
