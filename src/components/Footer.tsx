import React from 'react';
import { 
  Store, 
  ShieldCheck, 
  Lock, 
  WifiOff, 
  Phone, 
  MessageSquare, 
  Wrench, 
  Video, 
  CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <Store className="w-5 h-5 text-emerald-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif]">
                  Kirana<span className="text-emerald-400">Grow</span>
                </span>
                <span className="text-[9px] tracking-wider font-bold text-emerald-400 uppercase">
                  Retail Tech Platform
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Next-generation Bharat retail operating stack. Empowering 40,000+ local grocers, kirana stores, and regional supermarkets with unified billing, smart inventory, and digital udhaar recovery.
            </p>

            {/* Badges */}
            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NPCI & UPI Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>256-Bit Bank-Grade Ledger</span>
              </div>
              <div className="flex items-center space-x-2">
                <WifiOff className="w-4 h-4 text-emerald-400" />
                <span>100% Offline POS Mode</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#superpowers" className="hover:text-emerald-400 transition-colors">
                  Smart Barcode Billing
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-emerald-400 transition-colors">
                  Digital Udhaar & Ledger
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-emerald-400 transition-colors">
                  Inventory Reorder Alerts
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Payment Links
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-emerald-400 transition-colors">
                  GST & e-Invoicing POS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Merchant Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
              Merchant Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center space-x-2 text-slate-300 font-medium">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Toll-Free Merchant Desk: 1800–889–GROW</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Helpdesk: +91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Local Field Agent Assist</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wrench className="w-3.5 h-3.5 text-slate-500" />
                <span>Free Hardware Installation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Video className="w-3.5 h-3.5 text-slate-500" />
                <span>Counter Training Videos</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Regional Support (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit',sans-serif]">
              Regional Support
            </h4>
            <p className="text-xs text-slate-400">
              Select your daily operating language:
            </p>

            <div className="space-y-2 pt-1 text-xs">
              {[
                { code: 'en' as Language, label: 'English (Universal)' },
                { code: 'hi' as Language, label: 'हिन्दी (North India)' },
                { code: 'gu' as Language, label: 'ગુજરાતી (Western Hub)' },
                { code: 'mr' as Language, label: 'मराठी (Maharashtra)' },
              ].map((item) => (
                <label
                  key={item.code}
                  onClick={() => onLanguageChange(item.code)}
                  className="flex items-center space-x-2 cursor-pointer text-slate-300 hover:text-white"
                >
                  <input
                    type="radio"
                    name="regional-lang"
                    checked={currentLang === item.code}
                    onChange={() => onLanguageChange(item.code)}
                    className="accent-emerald-500 cursor-pointer"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2025 KiranaGrow Technologies Pvt. Ltd. Empowering Kirana Retailers Across India.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#terms" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Merchant Service</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">RBI Digital Payment Guidelines</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Security & Trust</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
