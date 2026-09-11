import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  PlayCircle, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Star,
  Store,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Language } from '../types';
import { I18N_CONTENT } from '../data/content';
import merchantHeroImg from '../assets/images/kirana_merchant_hero_1789138777149.jpg';

interface HeroProps {
  currentLang: Language;
  onOpenVideo: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenVideo,
  onOpenDemoModal,
}) => {
  const t = I18N_CONTENT[currentLang]?.hero || I18N_CONTENT.en.hero;

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/70 border-b border-slate-200/60">
      
      {/* Background soft ambient blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs font-bold tracking-wide uppercase shadow-xs">
              <Store className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Outfit',sans-serif]">
              {t.title1}
              <span className="text-[#059669] underline decoration-emerald-300 decoration-wavy decoration-2 underline-offset-4">
                {t.titleHighlight}
              </span>
              {t.title2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {t.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenDemoModal}
                id="hero-book-demo-cta"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#064e3b] hover:bg-[#033a2b] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <span>{t.bookBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                id="hero-watch-video-btn"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 transition-all active:scale-[0.98]"
              >
                <PlayCircle className="w-5 h-5 text-emerald-700" />
                <span>{t.watchBtn}</span>
              </button>
            </div>

            {/* Metrics Triplet */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              
              {/* Metric 1 */}
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] font-['Outfit',sans-serif]">
                  +48%
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  {t.profitBoost}
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                  3 Sec
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  {t.billingSpeed}
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-['Outfit',sans-serif]">
                  ₹0
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                  {t.zeroSetup}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-slate-900 group">
                
                {/* Store location tag (Top-left pill) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium border border-white/20 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Patel's Fresh Mart, Ahmedabad, Gujarat</span>
                </div>

                {/* Gujarati bilingual sign badge (Top-right) */}
                <div className="hidden sm:flex absolute top-4 right-4 z-20 flex-col items-end px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] text-slate-700 font-semibold border border-slate-200/70 shadow-sm">
                  <div className="text-[10px] text-emerald-800 font-bold">પટેલ ડેરી પ્રોવિઝન</div>
                  <div className="text-[9px] text-slate-500">Est. 2005</div>
                </div>

                {/* Merchant Photo */}
                <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[4/3.8] w-full overflow-hidden bg-slate-800">
                  <img
                    src={merchantHeroImg}
                    alt="Ajay Patel at his Kirana store with KiranaGrow"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                </div>

                {/* Overlaid Testimonial Card at bottom */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl space-y-2">
                  
                  {/* Metrics and stars row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        <span>+48% Profit</span>
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold">
                        <Zap className="w-3 h-3 text-amber-600" />
                        <span>3-Sec Queue Flow</span>
                      </span>
                    </div>

                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                    {t.ajayQuote}
                  </p>

                  <div className="text-[11px] sm:text-xs font-bold text-slate-900">
                    {t.ajayAuthor}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
