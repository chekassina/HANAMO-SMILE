import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      title="Chat with Hanamo Smile on WhatsApp"
      aria-label="WhatsApp Live Chat"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-sm font-bold whitespace-nowrap pl-0 group-hover:pl-1">
        Live Chat (+256 782...)
      </span>
    </a>
  );
};
