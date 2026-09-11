import React, { useState } from 'react';
import { 
  Store, 
  ShoppingCart, 
  Shirt, 
  Info, 
  Zap, 
  Wallet, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { StoreType } from '../types';
import { calculateProfit, formatINR } from '../data/content';

interface CalculatorSectionProps {
  onUnlockProfit: (sales: number, storeType: StoreType) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onUnlockProfit }) => {
  const [storeType, setStoreType] = useState<StoreType>('kirana');
  const [sales, setSales] = useState<number>(350000);

  const results = calculateProfit(sales, storeType);

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
            Interactive Forecast
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Calculate Your Profit Potential
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Adjust your shop metrics to see how much extra revenue you can add each month.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Inputs */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Step 1: Format */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  1. Select Your Store Format
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setStoreType('kirana')}
                    className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      storeType === 'kirana'
                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Kirana Store</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStoreType('supermarket')}
                    className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      storeType === 'supermarket'
                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Supermarket</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStoreType('boutique')}
                    className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      storeType === 'boutique'
                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <Shirt className="w-3.5 h-3.5" />
                    <span>Boutique</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="sales-slider" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Monthly Counter Sales
                  </label>
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                    ₹{formatINR(sales)}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  id="sales-slider"
                  type="range"
                  min={100000}
                  max={2500000}
                  step={25000}
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />

                {/* Range markers */}
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2">
                  <span>₹1 Lakh</span>
                  <span>₹10 Lakh</span>
                  <span>₹25 Lakh</span>
                </div>
              </div>

              {/* Helper disclaimer */}
              <div className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-500 text-xs leading-relaxed">
                <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Calculated from aggregate data of 14,800+ merchants including recovered udhaar, reduced wastage, and billing speed enhancements.
                </span>
              </div>

            </div>

            {/* Right Column: Output Result Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-slate-50 border border-emerald-200/90 p-6 sm:p-7 shadow-xs space-y-6">
                
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                    Estimated Extra Monthly Net Profit
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#059669] mt-1 font-['Outfit',sans-serif] tracking-tight">
                    +₹{formatINR(results.extraMonthlyProfit)} <span className="text-lg sm:text-xl font-medium text-slate-600">/ month</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Equivalent to an extra <strong className="text-slate-800 font-bold">₹{formatINR(results.extraAnnualProfit)}</strong> earned every year
                  </p>
                </div>

                {/* Breakdown Mini Cards */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                  
                  {/* Speed */}
                  <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-emerald-100/90 text-center shadow-2xs">
                    <div className="text-[10px] font-bold text-slate-500 truncate">Queue Speed</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1">
                      +₹{formatINR(results.queueSpeedProfit)}
                    </div>
                  </div>

                  {/* Udhaar */}
                  <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-emerald-100/90 text-center shadow-2xs">
                    <div className="text-[10px] font-bold text-slate-500 truncate">Udhaar Recovered</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1">
                      +₹{formatINR(results.udhaarRecoveredProfit)}
                    </div>
                  </div>

                  {/* Zero Expiry */}
                  <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-emerald-100/90 text-center shadow-2xs">
                    <div className="text-[10px] font-bold text-slate-500 truncate">Zero Expiry</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1">
                      +₹{formatINR(results.zeroExpiryProfit)}
                    </div>
                  </div>

                </div>

                {/* Primary Unlock Button */}
                <button
                  type="button"
                  onClick={() => onUnlockProfit(sales, storeType)}
                  id="calc-unlock-profit-btn"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Unlock This Profit On Your Counter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
