import React from 'react';
import { WifiOff, Languages, Timer, ShieldCheck } from 'lucide-react';

export const ReliabilitySection: React.FC = () => {
  const features = [
    {
      id: 'offline',
      title: '100% Offline Mode',
      description: 'Keep scanning & printing bills during power cuts or internet outages. Bills sync automatically once internet returns.',
      icon: <WifiOff className="w-5 h-5 text-emerald-700" />,
      bg: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: 'languages',
      title: '8 Indian Languages',
      description: 'Hindi, Gujarati, Tamil, Telugu, Punjabi, Bengali, Marathi, and English.',
      icon: <Languages className="w-5 h-5 text-blue-700" />,
      bg: 'bg-blue-50 border-blue-200',
    },
    {
      id: 'setup',
      title: '10-Minute Setup',
      description: 'Scan your very first product within 10 minutes of app download.',
      icon: <Timer className="w-5 h-5 text-amber-700" />,
      bg: 'bg-amber-50 border-amber-200',
    },
    {
      id: 'agent',
      title: 'Local Field Agent',
      description: 'Dedicated on-ground counter support in your district whenever you call.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-700" />,
      bg: 'bg-teal-50 border-teal-200',
    },
  ];

  return (
    <section id="reliability" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
            Uncompromising Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Built for Real Indian Retail Realities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Zero complex tech, works even when power or internet is down.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${f.bg} mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
