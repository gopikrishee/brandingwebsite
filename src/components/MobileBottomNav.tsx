import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  LayoutGrid, 
  TrendingUp, 
  Calendar, 
  Headphones 
} from 'lucide-react';

interface MobileBottomNavProps {
  onOpenDemo: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<string>('story');

  const scrollTo = (id: string, tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-1.5 flex items-center justify-around">
      
      {/* Story */}
      <button
        type="button"
        onClick={() => scrollTo('evolution', 'story')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
          activeTab === 'story' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <BookOpen className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Story</span>
      </button>

      {/* Services */}
      <button
        type="button"
        onClick={() => scrollTo('superpowers', 'services')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
          activeTab === 'services' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <LayoutGrid className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Services</span>
      </button>

      {/* Earnings */}
      <button
        type="button"
        onClick={() => scrollTo('calculator', 'earnings')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
          activeTab === 'earnings' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <TrendingUp className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Earnings</span>
      </button>

      {/* Demo */}
      <button
        type="button"
        onClick={() => {
          setActiveTab('demo');
          onOpenDemo();
        }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
          activeTab === 'demo' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Calendar className="w-5 h-5 mb-0.5 text-emerald-700" />
        <span className="text-[10px] text-emerald-800 font-semibold">Demo</span>
      </button>

      {/* Support */}
      <button
        type="button"
        onClick={() => scrollTo('reliability', 'support')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
          activeTab === 'support' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Headphones className="w-5 h-5 mb-0.5" />
        <span className="text-[10px]">Support</span>
      </button>

    </div>
  );
};
