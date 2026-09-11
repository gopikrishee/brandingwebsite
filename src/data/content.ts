import { Language, StoreType, Testimonial, Superpower } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ramesh',
    name: 'Ramesh Sharma',
    store: 'Sharma Kirana & General Store',
    location: 'Indore',
    initials: 'RS',
    badge: '+₹42,000 Extra Monthly Earnings',
    quote: 'My stock wastage dropped to zero and customer queues cleared 3x faster with barcode scanning on my mobile. Families don’t wait anymore.',
    rating: 5,
    verifiedLabel: 'Verified Dukaan',
    accentColor: 'bg-emerald-700 text-white',
  },
  {
    id: 'priya',
    name: 'Priya Sundaram',
    store: 'Vogue Saree Boutique',
    location: 'Coimbatore',
    initials: 'PS',
    badge: '+65% Repeat Walk-In Footfall',
    quote: 'Digital marketing templates helped me announce new festival collections directly to 800+ local customers on WhatsApp in just 2 taps.',
    rating: 5,
    verifiedLabel: 'Verified Boutique',
    accentColor: 'bg-amber-700 text-white',
  },
  {
    id: 'gurpreet',
    name: 'Gurpreet Singh',
    store: 'Singh Supermarket',
    location: 'Ludhiana',
    initials: 'GS',
    badge: '12% Direct Wholesale Discount',
    quote: 'Instant working capital credit helped me bulk-buy oils and spices before Diwali season. That alone saved me ₹86,000 upfront!',
    rating: 5,
    verifiedLabel: 'Verified Supermarket',
    accentColor: 'bg-teal-800 text-white',
  },
];

export const SUPERPOWERS: Superpower[] = [
  {
    id: 'pos',
    title: 'Smart POS Billing',
    badge: 'Speed Master',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    description: 'Camera barcode scanning, fast Bluetooth thermal printing, and digital e-bills dispatched straight to customer WhatsApp.',
    iconName: 'ScanLine',
  },
  {
    id: 'inventory',
    title: 'Smart Inventory',
    badge: 'Zero Wastage',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Auto-updating SKU stocks with low-inventory warnings, vendor mandi price comparison, and batch tracking.',
    iconName: 'Boxes',
  },
  {
    id: 'khata',
    title: 'Khata & Udhaar',
    badge: 'Cash Flow',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Daily gross profit analytics, customer ledger balance tracking, and polite multilingual automated payment pings.',
    iconName: 'BookCheck',
  },
  {
    id: 'marketing',
    title: 'Hyperlocal Marketing',
    badge: 'More Walk-ins',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: '1-click broadcast of festive sale deals, seasonal discounts, and weekend combo offers right to neighbourhood buyers.',
    iconName: 'Megaphone',
  },
  {
    id: 'capital',
    title: 'Growth Capital',
    badge: 'Easy Capital',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    description: 'RBI-registered digital loan access without collateral plus expert visual layout advice for your shelf space.',
    iconName: 'BadgePercent',
  },
];

export const RELIABILITY_FEATURES = [
  {
    id: 'offline',
    title: '100% Offline Mode',
    description: 'Keep scanning & printing bills during power cuts or internet outages. Bills sync automatically once internet returns.',
    iconName: 'WifiOff',
  },
  {
    id: 'languages',
    title: 'English, Telugu & Tamil',
    description: 'Native regional interface & audio alerts in English, Telugu (తెలుగు), and Tamil (தமிழ்).',
    iconName: 'Languages',
  },
  {
    id: 'setup',
    title: '10-Minute Setup',
    description: 'Scan your very first product within 10 minutes of app download.',
    iconName: 'Timer',
  },
  {
    id: 'agent',
    title: 'Local Field Agent',
    description: 'Dedicated on-ground counter support in your district whenever you call.',
    iconName: 'ShieldCheck',
  },
];

export const I18N_CONTENT: Record<Language, {
  nav: {
    story: string;
    services: string;
    impact: string;
    calculator: string;
    support: string;
    watchDemo: string;
    bookDemo: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    bookBtn: string;
    watchBtn: string;
    profitBoost: string;
    billingSpeed: string;
    zeroSetup: string;
    ajayQuote: string;
    ajayAuthor: string;
  };
}> = {
  en: {
    nav: {
      story: 'Platform Story',
      services: 'Solutions & Services',
      impact: 'Merchant Impact',
      calculator: 'Profit Calculator',
      support: 'Partner Support',
      watchDemo: 'Watch 2-Min Demo',
      bookDemo: 'Book Free Counter Demo',
    },
    hero: {
      badge: 'SMART RETAIL EMPOWERMENT',
      title1: 'Transform Your Dukaan Into a ',
      titleHighlight: 'High–Earning',
      title2: ' Super Store.',
      subtitle: 'Smart billing, automated inventory, and growth capital to double your daily profits within 90 days — right from your counter or smartphone. Built exclusively for Indian retail heroes.',
      bookBtn: 'Book 15-Min Free Shop Demo →',
      watchBtn: 'Watch 2-Min Video Story',
      profitBoost: 'Avg. Profit Boost',
      billingSpeed: 'Billing Speed',
      zeroSetup: 'Zero Setup Cost',
      ajayQuote: '“KiranaGrow gave me confidence. I can manage 250+ walk-ins alone during rush evening hours without writing a single paper bill.”',
      ajayAuthor: '— Ajay Patel, Store Owner',
    },
  },
  te: {
    nav: {
      story: 'ప్లాట్‌ఫారమ్ కథ',
      services: 'పరిష్కారాలు & సేవలు',
      impact: 'వ్యాపారుల విజయం',
      calculator: 'లాభాల కాలిక్యులేటర్',
      support: 'సహాయ కేంద్రం',
      watchDemo: '2-నిమిషాల డెమో చూడండి',
      bookDemo: 'ఉచిత కౌంటర్ డెమో బుక్ చేయండి',
    },
    hero: {
      badge: 'స్మార్ట్ రిటైల్ విప్లవం',
      title1: 'మీ దుకాణాన్ని మార్చండి ',
      titleHighlight: 'అధిక ఆదాయం వచ్చే',
      title2: ' సూపర్ స్టోర్‌గా.',
      subtitle: 'స్మార్ట్ బిల్లింగ్, ఆటోమేటిక్ ఇన్వెంటరీ మరియు వర్కింగ్ క్యాపిటల్ లోన్‌లతో 90 రోజుల్లో మీ రోజువారీ లాభాలను రెట్టింపు చేసుకోండి — మీ కౌంటర్ లేదా స్మార్ట్‌ఫోన్ నుండే.',
      bookBtn: '15-నిమి ఉచిత షాప్ డెమో బుక్ చేయండి →',
      watchBtn: '2-నిమిషాల వీడియో కథ చూడండి',
      profitBoost: 'సగటు లాభాల పెరుగుదల',
      billingSpeed: 'బిల్లింగ్ వేగం',
      zeroSetup: 'సున్నా సెటప్ ఖర్చు',
      ajayQuote: '“కిరానాగ్రో నాకు గొప్ప నమ్మకాన్ని ఇచ్చింది. సాయంత్రం రద్దీ వేళల్లో 250+ కస్టమర్లను ఒక్క కాగితపు బిల్లు కూడా రాయకుండా ఒంటరిగా హ్యాండిల్ చేస్తున్నాను.”',
      ajayAuthor: '— అజయ్ పటేల్, స్టోర్ ఓనర్',
    },
  },
  ta: {
    nav: {
      story: 'எங்கள் பயணம்',
      services: 'தீர்வுகள் & சேவைகள்',
      impact: 'வணிகர்கள் வெற்றி',
      calculator: 'லாபக் கால்குலேட்டர்',
      support: 'உதவி மையம்',
      watchDemo: '2-நிமிட டெமோ பார்க்க',
      bookDemo: 'இலவச கவுண்டர் டெமோ பதிவு செய்',
    },
    hero: {
      badge: 'ஸ்மார்ட் சில்லறை புரட்சி',
      title1: 'உங்கள் கடையை மாற்றுங்கள் ',
      titleHighlight: 'அதிக லாபம் தரும்',
      title2: ' சூப்பர் ஸ்டோராக.',
      subtitle: 'ஸ்மார்ட் பில்லிங், தானியங்கி சரக்கு மேலாண்மை மற்றும் பிணையில்லா கடன் மூலம் 90 நாட்களில் உங்கள் தினசரி லாபத்தை இரட்டிப்பாக்குங்கள் — உங்கள் கவுண்டர் அல்லது போனிலிருந்தே.',
      bookBtn: '15-நிமிட இலவச டெமோ பதிவு செய் →',
      watchBtn: '2-நிமிட வீடியோ கதை பார்க்க',
      profitBoost: 'சராசரி லாப உயர்வு',
      billingSpeed: 'பில்லிங் வேகம்',
      zeroSetup: 'பூஜ்ஜிய அமைப்புக் கட்டணம்',
      ajayQuote: '“கிரானாகிரோ எனக்கு பெரும் தன்னம்பிக்கையை தந்தது. மாலை நேர நெரிசலில் 250+ வாடிக்கையாளர்களை காகித ரசீது எதுவும் எழுதாமல் தனியாகவே சமாளிக்கிறேன்.”',
      ajayAuthor: '— அஜய் படேல், கடை உரிமையாளர்',
    },
  },
};

export function formatINR(val: number): string {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(val);
}

export function calculateProfit(sales: number, storeType: StoreType): {
  extraMonthlyProfit: number;
  extraAnnualProfit: number;
  queueSpeedProfit: number;
  udhaarRecoveredProfit: number;
  zeroExpiryProfit: number;
} {
  // Calibrated to match screenshot exactly:
  // At ₹3,50,000 Kirana:
  // Total extra monthly = ₹28,350
  // Queue Speed: ₹11,340 (40%)
  // Udhaar Recovered: ₹10,206 (36%)
  // Zero Expiry: ₹6,804 (24%)
  let multiplier = 0.081; // 8.1% of sales
  if (storeType === 'supermarket') {
    multiplier = 0.076;
  } else if (storeType === 'boutique') {
    multiplier = 0.098;
  }

  const extraMonthlyProfit = Math.round(sales * multiplier);
  const extraAnnualProfit = extraMonthlyProfit * 12;
  const queueSpeedProfit = Math.round(extraMonthlyProfit * 0.4);
  const udhaarRecoveredProfit = Math.round(extraMonthlyProfit * 0.36);
  const zeroExpiryProfit = extraMonthlyProfit - queueSpeedProfit - udhaarRecoveredProfit;

  return {
    extraMonthlyProfit,
    extraAnnualProfit,
    queueSpeedProfit,
    udhaarRecoveredProfit,
    zeroExpiryProfit,
  };
}
