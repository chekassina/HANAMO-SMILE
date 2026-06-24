import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';
import { ImageWithFallback } from '../ImageWithFallback';
import { ArrowRight, ShieldCheck, Award, Sparkles, Truck, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: () => void;
  onOpenPortalModal: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenPortalModal,
}) => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section matching exact Geometric Balance layout */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[680px] border-b border-slate-200 bg-white">
        {/* Left Hero Section */}
        <div className="w-full lg:w-[60%] p-8 sm:p-12 md:p-16 flex flex-col justify-center relative">
          <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-24 h-1 bg-sky-500 mb-8"></div>
          
          <p className="text-sky-600 font-bold uppercase tracking-[0.2em] mb-4 text-xs italic mt-4">
            ESTABLISHED 2014 • MUTUNDWE, KAMPALA UGANDA
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            We Are Here For <br />
            <span className="text-sky-600">You To Smile</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
            Uganda&rsquo;s trusted manufacturer of premium bar soaps, detergents, and home care products under the <strong>Hana Star</strong> brand. We empower entrepreneurs through practical soap-making training and brand development.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="px-6 sm:px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-md font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-slate-200"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenOrderModal}
              className="px-6 sm:px-8 py-4 border-2 border-slate-200 hover:border-sky-600 bg-white hover:bg-sky-50 text-slate-900 hover:text-sky-600 rounded-md font-bold transition-all cursor-pointer"
            >
              Enroll for Training
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 mt-12 sm:mt-16 border-t border-slate-200 pt-8">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">10+</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase">Market Brands</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">1,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase">Students Trained</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">Since &rsquo;14</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase">Expert Experience</p>
            </div>
          </div>
        </div>

        {/* Right Visual Section (Bento Grid) */}
        <div className="w-full lg:w-[40%] bg-slate-100 grid grid-cols-2 grid-rows-2 gap-4 p-4 sm:p-6 min-h-[480px]">
          {/* Card 1: Flagship Hana Star */}
          <div 
            onClick={() => onNavigate('products')}
            className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
          >
            <ImageWithFallback
              src="/images/las1.jpg"
              alt="Hana Star Production"
              fallbackCategory="soap"
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="relative z-10">
              <p className="text-sky-600 text-xs font-bold mb-1">BEST SELLER</p>
              <h3 className="text-xl font-black text-slate-900">Hana Star</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Premium Multipurpose Soap</p>
            </div>
            <div className="relative z-10 text-xs text-sky-600 font-bold flex items-center gap-1 mt-4">
              <span>View Specs</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Bulk Supply */}
          <div 
            onClick={onOpenPortalModal}
            className="bg-sky-600 rounded-xl shadow-lg p-6 text-white flex flex-col justify-end cursor-pointer group hover:bg-sky-700 transition-colors"
          >
            <Truck className="w-8 h-8 text-sky-200 mb-2 group-hover:translate-x-1 transition-transform" />
            <h3 className="text-xl font-bold">Bulk Supply</h3>
            <p className="text-xs text-sky-100 mt-2 leading-relaxed">
              Factory direct distribution & live telemetry portal across Kampala.
            </p>
          </div>

          {/* Card 3: Training Open */}
          <div 
            onClick={() => onNavigate('training')}
            className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col justify-between cursor-pointer hover:border-sky-300 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Training Now Open</p>
              </div>
              <h3 className="text-xl font-black text-slate-900">Practical Skills</h3>
              <p className="text-xs text-slate-500 mt-1">Learn branding, packaging & sourcing.</p>
            </div>
            <span className="text-xs text-slate-900 font-bold underline mt-2">Book Seat &rarr;</span>
          </div>

          {/* Card 4: Photo Archive */}
          <div 
            onClick={() => onNavigate('gallery')}
            className="bg-white rounded-xl shadow-xs border border-slate-200 p-2 overflow-hidden cursor-pointer group relative"
          >
            <ImageWithFallback
              src="/images/las5.jpg"
              alt="Soap Making Training"
              fallbackCategory="training"
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-2 rounded-lg bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
              View Gallery (40)
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            THE HANAMO ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Clean Better. Learn Better. Grow Better.
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Whether you are buying bulk bar soap for your supermarket or launching your own manufactured brand, we provide end-to-end quality and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Quality Products',
              desc: 'We manufacture premium bar soaps and cleaning products with long-lasting fragrance and powerful stain removal.',
              icon: Award,
              bg: 'bg-sky-50 text-sky-600 border-sky-100',
            },
            {
              title: 'Practical Training',
              desc: 'We offer hands-on training in soap production with certification and lifetime mentorship support by Moshe Haruna.',
              icon: Sparkles,
              bg: 'bg-amber-50 text-amber-600 border-amber-100',
            },
            {
              title: 'Reliable Delivery',
              desc: 'Fast and efficient bulk dispatch services across Kampala, Mutundwe, and surrounding regional centers.',
              icon: Truck,
              bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
            },
            {
              title: 'Customer Satisfaction',
              desc: 'We prioritize consistent chemical formulation, professionalism, and responsive customer portal support.',
              icon: ShieldCheck,
              bg: 'bg-purple-50 text-purple-600 border-purple-100',
            },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${item.bg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Main Services Section */}
      <section className="bg-slate-900 text-white py-20 px-6 sm:px-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-400 mb-2">
                WHAT WE DO IN KAMPALA
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Our Main Services & Capabilities
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              From our factory floor in Mutundwe to retail shelves nationwide, we engineer excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Bar Soap Manufacturing', desc: 'Producing high density laundry and bathing soaps like Hana Star, White Maliza, and Family Star.' },
              { title: 'Detergent Production', desc: 'High performance liquid detergents, active scouring powders, and surface disinfectants.' },
              { title: 'Soap Making Training', desc: '5-week practical curriculum empowering students, startups, and community groups.' },
              { title: 'Brand Creation & Packaging', desc: 'Helping clients build private label soap brands with custom wrappers and bar cutters.' },
              { title: 'Right Material Sourcing', desc: 'Advising manufacturers on where to procure unadulterated caustic soda and palm kernel oils.' },
              { title: 'Bulk B2B Product Delivery', desc: 'Fast dispatch from Mutundwe factory directly to supermarkets and distributors.' },
            ].map((srv, i) => (
              <div
                key={srv.title}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-colors flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-600/20 text-sky-400 font-mono font-bold flex items-center justify-center shrink-0 border border-sky-500/30">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{srv.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Sneak Peek */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
              FLAGSHIP CATALOG
            </p>
            <h2 className="text-3xl font-black text-slate-900">Featured Manufactured Soaps</h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="self-start sm:self-auto text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 underline cursor-pointer"
          >
            <span>View All 9 Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <div
              key={prod.id}
              onClick={() => onNavigate('products')}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col"
            >
              <div className="h-56 relative bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={prod.image}
                  alt={prod.name}
                  fallbackCategory="product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {prod.isBestSeller && (
                  <span className="absolute top-3 left-3 bg-sky-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-xs uppercase">
                    Flagship
                  </span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-1">{prod.brand}</p>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{prod.name}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">{prod.description}</p>
                  <ul className="space-y-1 mb-4 text-xs text-slate-500">
                    {prod.features.slice(0, 2).map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-black text-slate-900">{prod.price}</span>
                  <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Order Bulk &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="bg-sky-600 text-white py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to work with Hanamo Smile?
          </h2>
          <p className="text-sky-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact us today for bulk wholesale orders across Kampala, register for our soap-making certification classes, or discuss private label brand manufacturing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold shadow-xl transition-all cursor-pointer"
            >
              Order Products Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white hover:bg-sky-50 text-sky-600 rounded-lg font-bold shadow-xl transition-all cursor-pointer"
            >
              Visit Mutundwe Factory
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
