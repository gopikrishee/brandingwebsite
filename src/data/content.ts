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
    title: '8 Indian Languages',
    description: 'Hindi, Gujarati, Tamil, Telugu, Punjabi, Bengali, Marathi, and English.',
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
  hi: {
    nav: {
      story: 'हमारा सफर',
      services: 'समाधान एवं सेवाएं',
      impact: 'दुकानदार सफलता',
      calculator: 'मुनाफा कैलकुलेटर',
      support: 'मदद एवं सहायता',
      watchDemo: '2-मिनट डेमो देखें',
      bookDemo: 'फ्री काउंटर डेमो बुक करें',
    },
    hero: {
      badge: 'स्मार्ट रिटेल क्रांति',
      title1: 'अपनी दुकान को बनाएं ',
      titleHighlight: 'अधिक कमाई वाला',
      title2: ' सुपर स्टोर।',
      subtitle: 'स्मार्ट बिलिंग, ऑटोमैटिक इन्वेंट्री और बिना गारंटी लोन से 90 दिनों में अपना दैनिक मुनाफा दोगुना करें। खास भारतीय रिटेल हीरोज के लिए।',
      bookBtn: '15-मिनट फ्री डेमो बुक करें →',
      watchBtn: '2-मिनट वीडियो देखें',
      profitBoost: 'औसत मुनाफा वृद्धि',
      billingSpeed: 'बिलिंग स्पीड',
      zeroSetup: 'शून्य सेटअप खर्च',
      ajayQuote: '“किरानाग्रो ने मुझे नया आत्मविश्वास दिया। शाम की भीड़ में 250+ ग्राहकों को मैं बिना पर्ची लिखे अकेले संभाल लेता हूँ।”',
      ajayAuthor: '— अजय पटेल, स्टोर ओनर',
    },
  },
  gu: {
    nav: {
      story: 'અમારી સફર',
      services: 'સેવાઓ અને ફીચર્સ',
      impact: 'વેપારીઓનો વિશ્વાસ',
      calculator: 'નફો કેલ્ક્યુલેટર',
      support: 'સહાયતા ડેસ્ક',
      watchDemo: '૨-મિનિટ ડેમો જુઓ',
      bookDemo: 'ફ્રી કાઉન્ટર ડેમો બુક કરો',
    },
    hero: {
      badge: 'સ્માર્ટ રિટેલ ક્રાંતિ',
      title1: 'તમારી દુકાનને બનાવો ',
      titleHighlight: 'વધુ કમાણી કરતો',
      title2: ' સુપર સ્ટોર.',
      subtitle: 'સ્માર્ટ બિલિંગ, ઓટોમેટિક ઇન્વેન્ટરી અને વર્કિંગ કેપિટલથી ૯૦ દિવસમાં તમારો દૈનિક નફો બમણો કરો — તમારા કાઉન્ટર કે સ્માર્ટફોનથી.',
      bookBtn: '૧૫-મિનિટ ફ્રી ડેમો બુક કરો →',
      watchBtn: '૨-મિનિટ વિડીયો જુઓ',
      profitBoost: 'સરેરાશ નફો વધારો',
      billingSpeed: 'બિલિંગ ઝડપ',
      zeroSetup: 'ઝીરો સેટઅપ ખર્ચ',
      ajayQuote: '“કિરાનાગ્રોએ મને આત્મવિશ્વાસ આપ્યો. સાંજે પીક અવર્સમાં ૨૫૦+ ગ્રાહકોને હું કાગળનું બિલ લખ્યા વગર એકલો હેન્ડલ કરી લઉં છું.”',
      ajayAuthor: '— અજય પટેલ, સ્ટોર ઓનર',
    },
  },
  mr: {
    nav: {
      story: 'प्लॅटफॉर्म स्टोरी',
      services: 'सोल्यूशन्स आणि सेवा',
      impact: 'व्यापारी यशकथा',
      calculator: 'नफा कॅल्क्युलेटर',
      support: 'मदत केंद्र',
      watchDemo: '२-मिनिट डेमो पहा',
      bookDemo: 'मोफत काउंटर डेमो बुक करा',
    },
    hero: {
      badge: 'स्मार्ट किरकोळ सक्षमीकरण',
      title1: 'तुमच्या दुकानाला बनवा ',
      titleHighlight: 'जास्त नफा देणारे',
      title2: ' सुपर स्टोअर.',
      subtitle: 'स्मार्ट बिलिंग, ऑटोमेटेड इन्व्हेंटरी आणि भांडवलासह ९० दिवसांत तुमचा दैनंदिन नफा दुप्पट करा.',
      bookBtn: '१५-मिनिट मोफत डेमो बुक करा →',
      watchBtn: '२-मिनिट व्हिडिओ पहा',
      profitBoost: 'सरासरी नफा वाढ',
      billingSpeed: 'बिलिंग गती',
      zeroSetup: 'शून्य सेटअप खर्च',
      ajayQuote: '“किराणाग्रोने मला विश्वास दिला. गर्दीच्या वेळी २५०+ ग्राहकांना मी एकटाच सांभाळतो, तेही कागदी पावतीशिवाय.”',
      ajayAuthor: '— अजय पटेल, दुकान मालक',
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
