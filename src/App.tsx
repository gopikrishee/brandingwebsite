import React, { useState } from 'react';
import { Language, StoreType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { SuperpowersSection } from './components/SuperpowersSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReliabilitySection } from './components/ReliabilitySection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [prefillSales, setPrefillSales] = useState<number | undefined>(undefined);
  const [prefillType, setPrefillType] = useState<StoreType>('kirana');

  const handleUnlockProfit = (sales: number, storeType: StoreType) => {
    setPrefillSales(sales);
    setPrefillType(storeType);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header with Navigation & Live Ticker */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenVideo={() => setVideoModalOpen(true)}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenDemoModal={() => setDemoModalOpen(true)}
        />

        {/* The Old Struggle vs. The KiranaGrow Leap */}
        <ComparisonSection />

        {/* Five Counter Superpowers */}
        <SuperpowersSection />

        {/* Interactive Profit Potential Calculator */}
        <CalculatorSection onUnlockProfit={handleUnlockProfit} />

        {/* Real Shop Owners. Real Earnings. */}
        <TestimonialsSection />

        {/* Built for Real Indian Retail Realities */}
        <ReliabilitySection />

        {/* Join the Digital Retail Revolution Today (Lead Gen Banner) */}
        <CtaSection />
      </main>

      {/* Full-featured Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Mobile Sticky Bottom Navigation (Visible on mobile screens) */}
      <MobileBottomNav onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Video Story Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onBookDemo={() => setDemoModalOpen(true)}
      />

      {/* 15-Minute Free Shop Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        prefillSales={prefillSales}
        prefillType={prefillType}
      />
    </div>
  );
}
