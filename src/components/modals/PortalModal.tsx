import React, { useState } from 'react';
import { SAMPLE_LIVE_ORDERS } from '../../data/companyData';
import { OrderTracking } from '../../types';
import { X, Search, ShieldCheck, Check, Truck, Clock, RefreshCw } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('HS-8842');
  const [activeOrder, setActiveOrder] = useState<OrderTracking>(SAMPLE_LIVE_ORDERS[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const steps = [
    'Order Received',
    'Raw Material Sourced',
    'In Manufacturing & Curing',
    'Quality Check Passed',
    'Dispatched & Out for Delivery',
    'Delivered',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const found = SAMPLE_LIVE_ORDERS.find((o) =>
        o.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.customerName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (found) {
        setActiveOrder(found);
      } else {
        // Create dynamic demo order for any custom tracking number
        setActiveOrder({
          orderId: searchQuery.toUpperCase() || 'HS-9999',
          customerName: 'Verified Kampala Client',
          productName: 'Hana Star Custom Production Batch',
          quantity: '500 Bars (25 Cartons)',
          status: 'In Manufacturing & Curing',
          estimatedDelivery: 'Tomorrow, 4:00 PM',
          currentStep: 3,
          lastUpdated: 'Just now',
          location: 'Mutundwe Curing Bay 1',
        });
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-slate-50 rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between relative border-b border-sky-500">
          <div className="absolute top-0 left-6 w-16 h-1 bg-sky-500"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight text-white">
                SECURE B2B CLIENT TRACKING PORTAL
              </h3>
              <p className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">
                Real-Time Factory Dispatch Telemetry • Mutundwe HQ
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

        {/* Search Bar & Demo Picker */}
        <div className="p-6 bg-white border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Order ID (e.g. HS-8842 or HS-8845)..."
                className="w-full pl-10 pr-4 py-2.5 text-sm font-mono rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-slate-50 uppercase font-bold text-slate-800"
              />
            </div>
            <button
              type="submit"
              disabled={isRefreshing}
              className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-bold text-sm flex items-center gap-2 shadow-md shadow-sky-100 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Track Live</span>
            </button>
          </form>

          {/* Quick Demo Orders */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500 uppercase tracking-wider">Demo Live Batches:</span>
            {SAMPLE_LIVE_ORDERS.map((sample) => (
              <button
                key={sample.orderId}
                onClick={() => {
                  setSearchQuery(sample.orderId);
                  setActiveOrder(sample);
                }}
                className={`px-3 py-1.5 rounded-md font-mono font-bold transition-all cursor-pointer border ${
                  activeOrder.orderId === sample.orderId
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                {sample.orderId} ({sample.status.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Display */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Active Order Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    BATCH #{activeOrder.orderId}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">• Updated {activeOrder.lastUpdated}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 mt-1">{activeOrder.customerName}</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  <span className="font-bold">Product:</span> {activeOrder.productName} ({activeOrder.quantity})
                </p>
              </div>
              <div className="bg-sky-600 text-white px-4 py-3 rounded-xl flex items-center gap-3 self-start sm:self-auto shadow-md shadow-sky-200">
                <Truck className="w-6 h-6 animate-pulse" />
                <div className="text-right">
                  <p className="text-[10px] text-sky-100 font-bold uppercase tracking-widest">Est. Delivery</p>
                  <p className="text-sm font-black">{activeOrder.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Current Status Box */}
            <div className="mt-4 p-3.5 bg-slate-900 text-white rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                <span className="font-mono text-sky-300">CURRENT POSITION:</span>
                <span className="font-bold">{activeOrder.location}</span>
              </div>
              <span className="font-mono text-slate-400 hidden sm:inline">UNBS INSPECTED</span>
            </div>

            {/* Progress Stepper */}
            <div className="mt-8 pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Manufacturing & Logistics Pipeline
              </p>
              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {steps.map((stepName, idx) => {
                    const stepNum = idx + 1;
                    const isCompleted = stepNum < activeOrder.currentStep;
                    const isCurrent = stepNum === activeOrder.currentStep;

                    return (
                      <div key={stepName} className="flex flex-col relative">
                        <div className="flex items-center mb-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                              isCompleted
                                ? 'bg-green-600 text-white shadow-xs'
                                : isCurrent
                                ? 'bg-sky-600 text-white ring-4 ring-sky-100 shadow-md scale-110'
                                : 'bg-slate-200 text-slate-500'
                            }`}
                          >
                            {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : stepNum}
                          </div>
                          {idx < steps.length - 1 && (
                            <div
                              className={`h-1 flex-1 hidden md:block ${
                                stepNum < activeOrder.currentStep ? 'bg-green-600' : 'bg-slate-200'
                              }`}
                            ></div>
                          )}
                        </div>
                        <p
                          className={`text-[11px] leading-tight font-bold ${
                            isCurrent
                              ? 'text-sky-600'
                              : isCompleted
                              ? 'text-slate-800'
                              : 'text-slate-400'
                          }`}
                        >
                          {stepName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sourcing Guarantee Note */}
          <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 flex items-start gap-3 text-xs text-slate-700">
            <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Right Material Sourcing & Quality Protocol</p>
              <p className="mt-0.5 leading-relaxed">
                Every batch manufactured at Mutundwe undergoes rigorous pH and density validation by CEO Moshe Harunas team. If you require emergency bulk replenishment for your supermarket or institution, contact our dispatch hotline.
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-mono">
            PORTAL ACCESS VERIFIED • HANAMO B2B GATEWAY
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenOrderModal();
              }}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
            >
              Place New Bulk Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
