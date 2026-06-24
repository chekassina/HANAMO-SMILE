import React from 'react';
import { TRAINING_MODULES } from '../../data/companyData';
import { Award, CheckCircle2, BookOpen, Users, ArrowRight, ShieldAlert, Sparkles, Factory, Beaker, Tag, TrendingUp } from 'lucide-react';

interface TrainingProps {
  onOpenOrderModal: (defaultPurpose?: string) => void;
}

export const Training: React.FC<TrainingProps> = ({ onOpenOrderModal }) => {
  const benefits = [
    '100% Practical Factory Sessions in Mutundwe',
    'Official Industrial Soap Manufacturer Certificates Awarded',
    'Comprehensive Chemical Mixing Training Manuals',
    'Lifetime Formulation Support & Hotline Access',
    'Direct Business & Marketing Mentorship by Moshe Haruna',
    'Right Material Sourcing to avoid fake market ingredients',
  ];

  const targetGroups = [
    { title: 'Students & Graduates', desc: 'Acquire high-demand vocational manufacturing skills to launch your career.' },
    { title: 'Entrepreneurs & Startups', desc: 'Build your own commercial soap brand with full packaging & UNBS guidance.' },
    { title: 'Existing Business Owners', desc: 'Expand your supermarket or laundromat into backward chemical integration.' },
    { title: 'Retirees & Community Groups', desc: 'Establish profitable cottage industries with steady daily cash flow.' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Beaker': return Beaker;
      case 'Factory': return Factory;
      case 'Sparkles': return Sparkles;
      case 'Tag': return Tag;
      case 'TrendingUp': return TrendingUp;
      default: return BookOpen;
    }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-20">

      {/* Hero Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>INTAKE NOW REGISTRATION OPEN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Practical Industrial Soap Making Training
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We offer professional, hands-on training in commercial soap and detergent manufacturing. Designed specifically for individuals, startups, and businesses looking to dominate Uganda&rsquo;s cleaning sector.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenOrderModal('5-Week Practical Soap Making Training Course')}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-sm shadow-xl shadow-sky-200 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Register for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 px-4 py-3 rounded-xl border border-slate-200">
              <Award className="w-4 h-4 text-sky-600" />
              <span>No Prior Chemistry Experience Required</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
          <video
            src="/images/las31.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
            <p className="text-white text-xs font-bold">
              Students mastering caustic soda saponification ratios at Mutundwe Factory Lab.
            </p>
          </div>
        </div>
      </div>

      {/* Curriculum Breakdown */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
            WHAT YOU WILL LEARN
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Comprehensive 5-Week Syllabus</h2>
          <p className="text-slate-600 text-sm mt-2">
            Each module is taught 100% practically on real industrial manufacturing equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_MODULES.map((mod) => {
            const IconComp = getIcon(mod.iconName);
            return (
              <div
                key={mod.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:border-sky-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                      {mod.duration}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-4">{mod.title}</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {mod.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="text-sky-600 font-black">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Training Benefits & Who Can Join Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-400 mb-2">
              WHY OUR GRADUATES SUCCEED
            </p>
            <h3 className="text-2xl sm:text-3xl font-black">Training Benefits</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {benefits.map((b) => (
              <div key={b} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium">{b}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 italic">
            &ldquo;We dont just give you a manual and leave you. We connect you to verified chemical importers in Kampala so your soap never fails.&rdquo; — Moshe Haruna
          </div>
        </div>

        <div className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs space-y-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-sky-600" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600">OPEN DOOR POLICY</p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Who Can Join?</h3>
            <p className="text-xs text-slate-500 mt-1">No prior university education or chemistry degree is required.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {targetGroups.map((grp) => (
                <div key={grp.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-black text-slate-900 text-sm mb-1">{grp.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{grp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-bold">Course Investment</p>
              <p className="text-lg font-black text-slate-900">UGX 450,000 / Student (Full Package)</p>
            </div>
            <button
              onClick={() => onOpenOrderModal('5-Week Practical Training Registration')}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 flex items-center gap-4 max-w-4xl mx-auto">
        <ShieldAlert className="w-8 h-8 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <strong>Important Advisory on Material Sourcing:</strong> Many beginner soap makers fail because they buy adulterated caustic soda sold cheaply in downtown Kampala markets. Our training equips you with hydrometer validation skills to test every chemical before mixing.
        </p>
      </div>

    </div>
  );
};