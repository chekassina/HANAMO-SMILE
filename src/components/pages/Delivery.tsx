import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';
import { Truck, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowUpRight, Box, Navigation } from 'lucide-react';

interface DeliveryProps {
  onOpenPortalModal: () => void;
  onOpenOrderModal: () => void;
}

export const Delivery: React.FC<DeliveryProps> = ({
  onOpenPortalModal,
  onOpenOrderModal,
}) => {
  const coverageAreas = [
    { zone: 'Kampala Central & Downtown', time: 'Within 2 – 4 Hours', desc: 'Direct dispatch to Kisekka Market, Nakasero, Owino, and supermarket chains.' },
    { zone: 'Mutundwe & Surrounding (Rubaga, Bunamwaya)', time: 'Under 2 Hours (Local Zone)', desc: 'Fast neighborhood factory delivery along Bunamwaya & Kisigula roads.' },
    { zone: 'Greater Kampala (Ntinda, Kira, Wakiso, Mukono)', time: 'Same Day Dispatch', desc: 'Dedicated commercial trucks for retail bulk replenishments.' },
    { zone: 'Upcountry Regional Bus Terminals', time: 'Daily Scheduled Drop-offs', desc: 'Secure loading onto buses heading to Jinja, Mbarara, Soroti, Gulu & Mbale.' },
  ];

  const features = [
    { title: 'Fast Dispatch', desc: 'Orders confirmed before 2 PM are dispatched immediately from Mutundwe curing bays.', icon: Clock },
    { title: 'Secure Heavy-Duty Packaging', desc: 'Reinforced corrugated cartons ensuring your bar soaps never crack or absorb transit moisture.', icon: Box },
    { title: 'Bulk Order Logistics', desc: 'Fleet capacity capable of handling from 5 wholesale boxes up to 500+ commercial cartons.', icon: Truck },
    { title: 'Real-Time Client Telemetry', desc: 'Live B2B portal access to track manufacturing step status and driver GPS coordinates.', icon: ShieldCheck },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            PAGE 5 — BULK B2B LOGISTICS
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Delivery Services & Coverage
          </h1>
          <p className="text-slate-600 mt-3 text-base max-w-2xl">
            We provide fast, punctual, and reliable delivery for bulk product orders across Kampala and regional trade centers, backed by our live customer tracking gateway.
          </p>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex items-center gap-6 shrink-0 border border-slate-800">
          <div>
            <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Live Dispatch Portal</p>
            <p className="text-sm font-black mt-0.5">Track your batch progress</p>
          </div>
          <button
            onClick={onOpenPortalModal}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <span>Launch Portal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Coverage Map & Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Navigation className="w-6 h-6 text-sky-600" />
            <span>Our Delivery Coverage Zones</span>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            All bulk deliveries originate directly from our manufacturing refinery in <strong>Mutundwe Kisigula along Bunamwaya Road</strong>. We ensure your products reach your store shelves on time and in pristine condition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {coverageAreas.map((area) => (
              <div key={area.zone} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-500 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded">
                    {area.time}
                  </span>
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-base font-black text-slate-900 mb-1">{area.zone}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-xl border border-slate-800 min-h-[400px]">
          <div className="absolute inset-0 opacity-20">
            <ImageWithFallback src="/images/las9.jpeg" alt="Delivery Truck" fallbackCategory="delivery" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              FACTORY DIRECT LOGISTICS
            </span>
            <h3 className="text-3xl font-black tracking-tight leading-tight">
              We Ensure Your Products Reach You On Time.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Wholesale distributor minimum order quantity is <strong>5 Cartons (100 Bars)</strong> for complimentary metropolitan delivery.
            </p>
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-sky-400 font-mono">DISPATCH HOTLINE: +256 782...</div>
            <button
              onClick={() => onOpenOrderModal('Wholesale Bulk Delivery Request')}
              className="px-5 py-2.5 bg-white text-slate-900 hover:bg-sky-50 rounded-xl font-bold text-xs cursor-pointer shadow-lg"
            >
              Order Bulk Now
            </button>
          </div>
        </div>
      </div>

      {/* Delivery Features Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900">Logistics Standards</h2>
          <p className="text-slate-600 text-sm mt-1">Industrial reliability from order placement to final offloading.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const IconC = feat.icon;
            return (
              <div key={feat.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 mb-6">
                    <IconC className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">{feat.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Portal Embed Simulation Banner */}
      <div className="bg-linear-to-r from-sky-600 to-sky-700 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-xs font-mono tracking-widest uppercase font-bold text-sky-200">REAL-TIME TELEMETRY CONNECTED</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">Want to inspect how our order tracking works?</h3>
          <p className="text-sky-100 text-sm leading-relaxed">
            Click below to test the live customer tracking portal. Enter sample batch ID <strong>HS-8842</strong> to view live position telemetry.
          </p>
        </div>
        <button
          onClick={onOpenPortalModal}
          className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-2xl shrink-0 transition-transform active:scale-95 cursor-pointer"
        >
          Open Client Portal Demo
        </button>
      </div>
    </div>
  );
};
