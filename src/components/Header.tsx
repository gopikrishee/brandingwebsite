import React, { useState } from 'react';
import { 
  Globe, 
  PlayCircle, 
  Calendar, 
  User, 
  ChevronDown,
  Sparkles,
  Store,
  Menu,
  X
} from 'lucide-react';
import { Language } from '../types';
import { I18N_CONTENT } from '../data/content';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenVideo: () => void;
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenVideo,
  onOpenDemoModal,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N_CONTENT[currentLang] || I18N_CONTENT.en;

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'EN' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner / Ticker */}
      {/* Desktop ticker */}
      <div className="hidden lg:flex items-center relative text-xs px-6 py-2 bg-slate-50 border-b border-slate-200/70 text-slate-600 font-medium min-h-[36px]">
        {/* Left: Live Bharat Retail Pulse (alignment unchanged) */}
        <div className="flex items-center space-x-1.5 bg-emerald-100/70 text-emerald-800 px-2 py-0.5 rounded-full font-semibold text-[11px] shrink-0 z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>LIVE BHARAT RETAIL PULSE</span>
        </div>

        {/* Center: Replaced sentence center aligned */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <span className="text-slate-700 font-medium text-xs pointer-events-auto">
            We support Grocery shop, Supermarkets &amp; Boutiques across Andhra and Tamilnadu
          </span>
        </div>
      </div>

      {/* Mobile top announcement banner */}
      <div className="lg:hidden flex items-center justify-center space-x-2 text-[11px] py-1.5 px-3 bg-amber-50/90 border-b border-amber-200/50 text-amber-900 font-medium text-center">
        <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
        <span className="truncate">We support Grocery shop, Supermarkets &amp; Boutiques across Andhra and Tamilnadu</span>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20">
              <Store className="w-5 h-5 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 font-['Outfit',sans-serif]">
                  Kirana<span className="text-emerald-600">Grow</span>
                </span>
              </div>
              <span className="text-[9px] tracking-wider font-bold text-emerald-800 uppercase">
                Retail Tech Platform
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-sm font-semibold text-slate-700">
            <button 
              onClick={() => scrollTo('evolution')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
            >
              {t.nav.story}
            </button>
            <button 
              onClick={() => scrollTo('superpowers')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
            >
              {t.nav.services}
            </button>
            <button 
              onClick={() => scrollTo('testimonials')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
            >
              {t.nav.impact}
            </button>
            <button 
              onClick={() => scrollTo('calculator')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
            >
              {t.nav.calculator}
            </button>
            <button 
              onClick={() => scrollTo('reliability')}
              className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
            >
              {t.nav.support}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                id="lang-selector-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">EN | తెలుగు | தமிழ்</span>
                <span className="sm:hidden font-bold uppercase">{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                        currentLang === lang.code ? 'font-bold text-emerald-800 bg-emerald-50/60' : 'text-slate-700'
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[11px] text-slate-400 font-medium">{lang.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Watch 2-Min Demo (Desktop) */}
            <button
              onClick={onOpenVideo}
              id="header-watch-demo-btn"
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors"
            >
              <PlayCircle className="w-4 h-4 text-slate-600" />
              <span>{t.nav.watchDemo}</span>
            </button>

            {/* Book Free Counter Demo CTA Button */}
            <button
              onClick={onOpenDemoModal}
              id="header-book-demo-btn"
              className="flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#064e3b] hover:bg-[#043e2f] active:scale-[0.98] transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span className="hidden sm:inline">{t.nav.bookDemo}</span>
              <span className="sm:hidden font-semibold">Demo</span>
            </button>

            {/* Merchant Login Profile Button */}
            <button
              onClick={() => scrollTo('lead-section')}
              title="Merchant Portal"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-800 hover:bg-teal-900 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            >
              <User className="w-4 h-4 text-emerald-200" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 py-3 px-2 space-y-1 bg-white/98">
            <button 
              onClick={() => scrollTo('evolution')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.nav.story}
            </button>
            <button 
              onClick={() => scrollTo('superpowers')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.nav.services}
            </button>
            <button 
              onClick={() => scrollTo('calculator')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.nav.calculator}
            </button>
            <button 
              onClick={() => scrollTo('testimonials')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.nav.impact}
            </button>
            <button 
              onClick={() => scrollTo('reliability')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {t.nav.support}
            </button>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3">
              <button
                onClick={() => {
                  onOpenVideo();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-xs font-semibold text-emerald-700"
              >
                <PlayCircle className="w-4 h-4" />
                <span>{t.nav.watchDemo}</span>
              </button>
              <div className="text-[11px] text-slate-400">1800-889-GROW</div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
