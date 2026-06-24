import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { ImageWithFallback } from '../ImageWithFallback';
import { Target, Eye, ShieldCheck, UserCheck, Briefcase, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    { title: 'Professionalism', desc: 'Adhering strictly to industrial chemical formulation standards and ethical trade practices.' },
    { title: 'Teamwork', desc: 'Collaborating closely with our distributors, trainees, and factory floor technicians.' },
    { title: 'Customer Satisfaction', desc: 'Delivering long-lasting soap hardness, rich lather, and fast customer support.' },
    { title: 'Diligence', desc: 'Meticulous attention to curing times, raw material purity, and UNBS packaging laws.' },
    { title: 'Timeliness', desc: 'Fast bulk order dispatch across Kampala and punctual training schedule execution.' },
    { title: 'Innovation', desc: 'Continuously refining stain-lifting detergent chemistry and private label branding models.' },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
          PAGE 2 — COMPANY PROFILE
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About Hanamo Smile Enterprise Ltd.
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-3xl">
          Founded in 2014 by Business Coach <strong>Mr. Moshe Haruna</strong>, we combine industrial manufacturing excellence with grassroots economic empowerment in Kampala, Uganda.
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-600" />
              <span>Our Journey Since 2014</span>
            </h3>
            <p>
              Hanamo Smile Enterprise Ltd. was founded in 2014 with a clear dual vision: to deliver premium quality cleaning products while empowering Ugandans with practical, income-generating business skills.
            </p>
            <p>
              Initially starting as a dedicated laundry service operation, the company gained deep insight into fabric care and chemical stain removal. Identifying growing market demand for reliable, non-melting bar soaps, we expanded into full-scale manufacturing.
            </p>
            <p>
              Today, from our factory located in Mutundwe after Kampala University, we proudly manufacture flagship brands like <strong>Hana Star</strong> and <strong>White Maliza</strong>, contract-manufacture over 8 market brands, and mentor aspiring industrial entrepreneurs nationwide.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="h-64 rounded-xl overflow-hidden shadow-md">
            <ImageWithFallback
              src="/images/las21.jpeg"
              alt="Factory Floor"
              fallbackCategory="factory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-64 rounded-xl overflow-hidden shadow-md mt-6">
            <ImageWithFallback
              src="/images/las16.jpeg"
              alt="Soap Curing"
              fallbackCategory="soap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-sky-600 text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-white/10 group-hover:scale-125 transition-transform"></div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 text-white font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black mb-3">Our Vision</h3>
            <p className="text-sky-100 text-base leading-relaxed">
              To continue producing quality cleaning products while eliminating unemployment through practical industrial skills empowerment across Uganda and East Africa.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-sky-500/50 text-xs font-mono tracking-widest uppercase text-sky-200">
            STRATEGIC DIRECTION • MUTUNDWE HQ
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-sky-500/10 group-hover:scale-125 transition-transform"></div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center mb-6 text-white font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black mb-3">Our Mission</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              To provide consistent quality cleaning products and hands-on manufacturing skills that directly improve household lives and create sustainable community business opportunities.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-mono tracking-widest uppercase text-slate-400">
            OPERATIONAL MANDATE
          </div>
        </div>
      </div>

      {/* Core Values Bento Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            OUR GUIDING ETHOS
          </p>
          <h2 className="text-3xl font-black text-slate-900">Core Company Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-sky-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded">
                    VALUE #0{idx + 1}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Message Spotlight */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/20 rounded-bl-full"></div>
          <div>
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full">
              CEO SPOTLIGHT
            </span>
            <div className="mt-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sky-500 shadow-lg mb-4">
                <ImageWithFallback
                  src="/images/las22.jpeg"
                  alt="CEO Mr. Moshe Haruna"
                  fallbackCategory="person"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{COMPANY_INFO.ceo}</h3>
              <p className="text-sky-400 text-sm font-semibold mt-1">{COMPANY_INFO.ceoTitle}</p>
            </div>
          </div>
          <div className="mt-12 space-y-2 text-xs text-slate-400">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Based in Kampala, Uganda</span>
            </p>
            <p className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Bar Soap Manufacturing Expert since 2014</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6 bg-slate-50">
          <h4 className="text-xl font-bold uppercase tracking-wider text-slate-400">
            From Our CEO
          </h4>
          <blockquote className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed">
            &ldquo;At Hanamo Smile Enterprise Ltd., we believe business should create tangible impact beyond profit. Our mission is to produce quality cleaning products that households trust every day, and equip people with practical skills that transform communities and eliminate unemployment across Uganda.&rdquo;
          </blockquote>
          <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-600 shadow-md">
              <ImageWithFallback
                src="/images/las21.jpeg"
                alt="CEO"
                fallbackCategory="person"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-slate-900">{COMPANY_INFO.ceo}</p>
              <p className="text-xs text-sky-600 font-semibold">Managing Director & Master Soap Coach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};