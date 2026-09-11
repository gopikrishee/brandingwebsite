import React from 'react';
import { Star, TrendingUp, Users, Percent, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
            Merchant Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Real Shop Owners. Real Earnings.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Hear from everyday retailers who transformed their family stores.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Badge Metric */}
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.badge}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 italic font-normal leading-relaxed">
                  “{t.quote}”
                </p>

              </div>

              {/* Author Row */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center space-x-3.5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-xs ${t.accentColor}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                    <span>{t.name}</span>
                  </div>
                  <div className="text-xs text-slate-500 truncate max-w-[200px]">
                    {t.store}, {t.location}
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] text-emerald-700 font-medium mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t.verifiedLabel}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
