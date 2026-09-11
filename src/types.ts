export type Language = 'en' | 'te' | 'ta';

export type StoreType = 'kirana' | 'supermarket' | 'boutique';

export interface Testimonial {
  id: string;
  name: string;
  store: string;
  location: string;
  initials: string;
  badge: string;
  quote: string;
  rating: number;
  verifiedLabel: string;
  accentColor: string;
}

export interface Superpower {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  iconName: string;
}

export interface CalculationResult {
  extraMonthlyProfit: number;
  extraAnnualProfit: number;
  queueSpeedProfit: number;
  udhaarRecoveredProfit: number;
  zeroExpiryProfit: number;
}

export interface DemoBooking {
  shopName: string;
  ownerName: string;
  phone: string;
  city: string;
  storeType: StoreType;
  preferredDate?: string;
  preferredTime?: string;
}
