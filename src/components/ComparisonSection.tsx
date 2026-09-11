import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  BookX, 
  Clock, 
  Hourglass, 
  UserX, 
  Zap, 
  CalendarClock, 
  MessageSquare, 
  BadgePercent,
  Calculator,
  ShieldCheck
} from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="evolution" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
            The Dukaan Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            The Old Struggle vs. The KiranaGrow Leap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            See how modern technology replaces handwritten stress with automated cash flow.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Card: The Old Way */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-rose-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-rose-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    The Old Way — Manual Hassle
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-[11px] font-bold uppercase tracking-wider border border-rose-200">
                  Stressful & Leaky
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                
                {/* Item 1 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <BookX className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Red Khata Notebooks
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Torn pages, disputed credit calculations, and lost money that never gets recovered.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Hourglass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Expired Goods on Shelves
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Packaged milk, spices, and biscuits expire unnoticed in corners, draining monthly profit margins.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <UserX className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Lost Walk-ins to Instant Delivery Apps
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Slow manual price checks create long queues. Impatient shoppers abandon carts.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      11:00 PM Tired Reconciliations
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Spending late nights tapping manual calculators trying to figure out true daily earnings.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 pt-4 border-t border-rose-100 text-center">
              <span className="text-xs font-semibold text-rose-700 bg-rose-50/80 px-3 py-1.5 rounded-full inline-block">
                Average monthly loss to bookkeeping errors: <strong className="font-bold">₹18,000 – ₹26,000</strong>
              </span>
            </div>
          </div>

          {/* Right Card: The KiranaGrow Leap */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#064e3b] text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden border border-emerald-800">
            
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white text-base sm:text-lg">
                    The KiranaGrow Leap
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-400/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-emerald-400/30">
                  Automated & Scalable
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                
                {/* Item 1 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/70 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Lightning 3–Second Billing
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5 leading-relaxed">
                      Scan items with your mobile camera or Bluetooth barcode gun. Instant GST print & WhatsApp bills.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/70 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CalendarClock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Automated 14-Day Expiry Warnings
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5 leading-relaxed">
                      Proactive alerts allow quick promotional bundling of near-expiry stock so you never lose capital.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/70 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Courteous WhatsApp Udhaar Links
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5 leading-relaxed">
                      One-touch friendly payment reminders with instant UPI pay buttons. Recover credit 3x faster.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/70 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <BadgePercent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Up to ₹5,00,000 Collateral-Free Loans
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5 leading-relaxed">
                      Pre-approved working capital based on your daily counter billing ledger within 48 hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 pt-4 border-t border-emerald-800/80 text-center relative z-10">
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-full inline-block">
                Average shop owner profit expansion: <strong className="font-bold text-white">+₹38,000 / month</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
