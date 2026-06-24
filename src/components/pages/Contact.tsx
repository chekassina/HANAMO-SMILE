import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../../data/companyData';
import { MapPin, Phone, Mail, Clock, Send, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ContactProps {
  onSuccessToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Bulk Order & Manufacturing Inquiry');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      onSuccessToast(`Thank you ${name}! Your message regarding "${subject}" has been delivered to Hanamo Smile HQ in Mutundwe. We will reach out to ${phone} or ${email}.`);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 700);
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12 px-4 sm:px-10 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
          PAGE 8 — GET IN TOUCH
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact Us & Directions
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-3xl">
          We would love to hear from you. Visit our factory in Mutundwe, call our sales desk, or send us an inquiry form below.
        </p>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/10 rounded-full blur-xl"></div>
            
            <h3 className="text-xl font-black text-white border-b border-slate-800 pb-4">
              Hanamo Smile Enterprise Ltd. HQ
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Office & Factory Address</p>
                  <p className="font-bold text-white mt-1">{COMPANY_INFO.detailedAddress}</p>
                  <p className="text-xs text-sky-400 mt-0.5">After Kampala University Mutundwe</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Direct Telephones</p>
                  <p className="font-mono font-bold text-white mt-1">{COMPANY_INFO.phones[0]}</p>
                  <p className="font-mono text-slate-300 text-xs">{COMPANY_INFO.phones[1]}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Official Email</p>
                  <p className="font-bold text-white mt-1 break-all">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Business Hours</p>
                  <p className="font-bold text-white mt-1">{COMPANY_INFO.hours}</p>
                  <p className="text-xs text-slate-400">Sunday: Closed (Emergency dispatch on call)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Directions Guide */}
          <div className="bg-sky-50 p-6 rounded-2xl border border-sky-200 text-xs text-slate-700 space-y-2">
            <p className="font-black text-slate-900 text-sm">🗺️ Directions to Factory:</p>
            <p leading-relaxed>
              From downtown Kampala, take Bunamwaya Road heading towards Rubaga / Mutundwe. Pass Kampala University Mutundwe Campus and proceed straight to Kisigula. Look for the Hanamo Smile factory sign right near the Kisigula Mosque.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-900">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-500 mt-1">Fill out the official form below. All fields marked * are required.</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Moshe Client"
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:outline-hidden font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+256 708..."
                  className="w-full px-4 py-3 text-sm font-mono rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50 font-bold text-slate-800"
              >
                <option value="Bulk Bar Soap Order Inquiry">Bulk Bar Soap Order Inquiry</option>
                <option value="5-Week Soap Making Training">5-Week Soap Making Training</option>
                <option value="Right Material Sourcing Consultancy">Right Material Sourcing Consultancy</option>
                <option value="Private Label Brand Partnership">Private Label Brand Partnership</option>
                <option value="General Question">General Question</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Message *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your inquiry, order size, or question here..."
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-200 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {isSending ? <span>Transmitting...</span> : <> <Send className="w-4 h-4" /> <span>Submit Message</span> </>}
            </button>
          </form>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="pt-10 border-t border-slate-200 max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span className="text-base">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
