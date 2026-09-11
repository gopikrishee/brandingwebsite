import React from 'react';
import { 
  Scan, 
  Boxes, 
  Wallet, 
  Megaphone, 
  Coins,
  ArrowRight
} from 'lucide-react';

interface SuperpowerCard {
  id: string;
  tag: string;
  tagClass: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const SuperpowersSection: React.FC = () => {
  const superpowers: SuperpowerCard[] = [
    {
      id: 'pos',
      tag: 'SPEED MASTER',
      tagClass: 'bg-teal-50 text-teal-700 border-teal-200',
      title: 'Smart POS Billing',
      description: 'Camera barcode scanning, fast Bluetooth thermal printing, and digital e-bills dispatched straight to customer WhatsApp.',
      icon: <Scan className="w-5 h-5 text-teal-700" />,
      iconBg: 'bg-teal-100/70 border-teal-200',
    },
    {
      id: 'inventory',
      tag: 'ZERO WASTAGE',
      tagClass: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Smart Inventory',
      description: 'Auto-updating SKU stocks with low-inventory warnings, vendor mandi price comparison, and batch tracking.',
      icon: <Boxes className="w-5 h-5 text-amber-700" />,
      iconBg: 'bg-amber-100/70 border-amber-200',
    },
    {
      id: 'khata',
      tag: 'CASH FLOW',
      tagClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Khata & Udhaar',
      description: 'Daily gross profit analytics, customer ledger balance tracking, and polite multilingual automated payment pings.',
      icon: <Wallet className="w-5 h-5 text-emerald-700" />,
      iconBg: 'bg-emerald-100/70 border-emerald-200',
    },
    {
      id: 'marketing',
      tag: 'MORE WALK-INS',
      tagClass: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Hyperlocal Marketing',
      description: '1-click broadcast of festive sale deals, seasonal discounts, and weekend combo offers right to neighbourhood buyers.',
      icon: <Megaphone className="w-5 h-5 text-blue-700" />,
      iconBg: 'bg-blue-100/70 border-blue-200',
    },
    {
      id: 'capital',
      tag: 'EASY CAPITAL',
      tagClass: 'bg-orange-50 text-orange-700 border-orange-200',
      title: 'Growth Capital',
      description: 'RBI-registered digital loan access without collateral plus expert visual layout advice for your shelf space.',
      icon: <Coins className="w-5 h-5 text-orange-700" />,
      iconBg: 'bg-orange-100/70 border-orange-200',
    },
  ];

  return (
    <section id="superpowers" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-2">
              Five Counter Superpowers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
              Everything Needed to Run a Smart Retail Hub
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-600 max-w-md">
            Operates smoothly on any low-cost Android phone, counter tablet, or existing desktop PC.
          </p>
        </div>

        {/* 5 Superpower Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {superpowers.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${item.tagClass}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore feature</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
