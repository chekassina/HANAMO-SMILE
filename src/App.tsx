/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/modals/OrderModal';
import { PortalModal } from './components/modals/PortalModal';

// Pages
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Products } from './components/pages/Products';
import { Training } from './components/pages/Training';
import { Delivery } from './components/pages/Delivery';
import { Gallery } from './components/pages/Gallery';
import { Partners } from './components/pages/Partners';
import { Contact } from './components/pages/Contact';

import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [orderModalDefaultProduct, setOrderModalDefaultProduct] = useState<string | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (productName?: string) => {
    setOrderModalDefaultProduct(productName);
    setIsOrderModalOpen(true);
  };

  // Auto dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-sky-600 selection:text-white">
      {/* Toast Popup */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border-l-4 border-sky-500 flex items-center gap-3 max-w-md animate-in slide-in-from-top-6 fade-in duration-300">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
          <p className="text-xs sm:text-sm leading-relaxed flex-1 font-medium">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Geometric Balance Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content View with fade transition */}
      <main className="flex-1 transition-opacity duration-300">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenOrderModal={() => handleOpenOrderModal()}
            onOpenPortalModal={() => setIsPortalModalOpen(true)}
          />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'products' && (
          <Products
            onOpenOrderModal={handleOpenOrderModal}
            onOpenPortalModal={() => setIsPortalModalOpen(true)}
          />
        )}
        {currentPage === 'training' && (
          <Training onOpenOrderModal={handleOpenOrderModal} />
        )}
        {currentPage === 'delivery' && (
          <Delivery
            onOpenPortalModal={() => setIsPortalModalOpen(true)}
            onOpenOrderModal={() => handleOpenOrderModal()}
          />
        )}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'partners' && (
          <Partners
            onSuccessToast={(msg) => setToastMessage(msg)}
            onOpenOrderModal={() => handleOpenOrderModal()}
          />
        )}
        {currentPage === 'contact' && (
          <Contact onSuccessToast={(msg) => setToastMessage(msg)} />
        )}
      </main>

      {/* Trusted Brands Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <FloatingWhatsApp />

      {/* Order / Inquiry Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProductName={orderModalDefaultProduct}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Secure B2B Client Tracking Portal Modal */}
      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />
    </div>
  );
}
