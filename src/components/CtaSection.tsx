import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, PhoneCall, Sparkles, Package, MapPin, Check } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [cityPincode, setCityPincode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="lead-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#064e3b] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-emerald-800 shadow-2xl">
          
          {/* Subtle background ambient circles */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Heading & Trust points */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span>Zero Financial Risk Trial</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] leading-tight">
                Join the Digital Retail Revolution Today.
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 max-w-xl leading-relaxed">
                Let’s grow your dukaan together. Get a free customized counter kit and 14-day zero-risk trial delivered right to your shop.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-emerald-100">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>No credit card needed</span>
                </div>

                <div className="flex items-center space-x-2 text-xs sm:text-sm text-emerald-100">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Free field onboarding</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl border border-white/50">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                      Get Counter Demo Kit
                    </h3>

                    {/* WhatsApp Phone Number */}
                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        WhatsApp Phone Number
                      </label>
                      <div className="relative flex rounded-xl border border-slate-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 transition-all overflow-hidden bg-slate-50">
                        <span className="inline-flex items-center px-3.5 text-xs font-bold text-slate-500 border-r border-slate-200 bg-slate-100">
                          +91
                        </span>
                        <input
                          id="lead-phone"
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          className="w-full px-3.5 py-3 text-sm font-medium bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* City / Pincode */}
                    <div>
                      <label htmlFor="lead-city" className="block text-xs font-semibold text-slate-600 mb-1.5">
                        City / Pincode
                      </label>
                      <div className="relative flex rounded-xl border border-slate-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 transition-all overflow-hidden bg-slate-50">
                        <span className="inline-flex items-center px-3 text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <input
                          id="lead-city"
                          type="text"
                          required
                          placeholder="e.g. Surat, 395001"
                          value={cityPincode}
                          onChange={(e) => setCityPincode(e.target.value)}
                          className="w-full pr-3.5 py-3 text-sm font-medium bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="lead-submit-btn"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-75"
                    >
                      <span>{isSubmitting ? 'Preparing Counter Kit...' : 'Start Free 14–Day Trial'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Direct phone call support */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-slate-500">
                        Prefer direct phone call? Toll-Free Desk:
                      </p>
                      <a
                        href="tel:18008894769"
                        className="inline-flex items-center space-x-1 text-xs font-extrabold text-emerald-800 hover:underline mt-0.5"
                      >
                        <PhoneCall className="w-3 h-3 text-emerald-600" />
                        <span>1800 – KIRANA – GROW</span>
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                      <Package className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                        Counter Kit Dispatched!
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                        Your 14-Day Free Trial Kit (Order #KG-KIT-84920) has been scheduled. Our local field officer for <strong>{cityPincode || 'your city'}</strong> will visit your shop with pre-loaded hardware.
                      </p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl text-[11px] text-emerald-800 font-medium">
                      Confirmation SMS sent to <strong>+91 {phone}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      ← Register another dukaan
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
