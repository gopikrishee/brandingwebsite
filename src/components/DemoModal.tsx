import React, { useState } from 'react';
import { X, Calendar, Clock, Store, MapPin, CheckCircle2, Phone, User, ArrowRight } from 'lucide-react';
import { StoreType } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillSales?: number;
  prefillType?: StoreType;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  prefillSales,
  prefillType = 'kirana',
}) => {
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [storeType, setStoreType] = useState<StoreType>(prefillType);
  const [dateSlot, setDateSlot] = useState('Tomorrow, 11:30 AM');
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 500);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isBooked ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Modal Title */}
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 mb-2">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>15-Min Free Shop Demo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                Book Counter Demo & Kit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our certified retail expert visits your counter with our wireless billing machine.
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-3.5">
              
              {/* Store & Owner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shop / Dukaan Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laxmi Super Store"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Phone
                  </label>
                  <div className="flex rounded-xl border border-slate-200 bg-slate-50 overflow-hidden focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20">
                    <span className="px-2.5 py-2.5 text-xs font-bold text-slate-500 bg-slate-100 border-r border-slate-200">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Pincode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad, 380001"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Store Format Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Retail Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'kirana' as StoreType, label: 'Kirana' },
                    { id: 'supermarket' as StoreType, label: 'Supermarket' },
                    { id: 'boutique' as StoreType, label: 'Boutique' },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setStoreType(fmt.id)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all ${
                        storeType === fmt.id
                          ? 'bg-[#064e3b] text-white border-[#064e3b]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={dateSlot}
                  onChange={(e) => setDateSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="Today, 03:30 PM (Evening Rush)">Today, 03:30 PM (Evening Rush Demo)</option>
                  <option value="Tomorrow, 11:30 AM">Tomorrow, 11:30 AM (Morning Slot)</option>
                  <option value="Tomorrow, 04:30 PM">Tomorrow, 04:30 PM (Afternoon Slot)</option>
                  <option value="Sunday, 11:00 AM">Sunday, 11:00 AM (Weekend Calm)</option>
                </select>
              </div>

            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#064e3b] hover:bg-[#033a2b] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-75 flex items-center justify-center space-x-2"
            >
              <span>{isLoading ? 'Reserving Field Slot...' : 'Confirm Free Counter Demo'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                Demo Confirmed!
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Thank you, <strong>{ownerName || 'Merchant'}</strong>! Your appointment for <strong>{shopName || 'your store'}</strong> has been scheduled for <strong>{dateSlot}</strong>.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl text-left border border-slate-200/80 space-y-1.5 text-xs text-slate-600">
              <div>📍 <strong>Location:</strong> {city || 'Your Store Counter'}</div>
              <div>📱 <strong>WhatsApp Alerts:</strong> Active on +91 {phone}</div>
              <div>⚡ <strong>Kit Included:</strong> 58mm Bluetooth Printer + KiranaGrow Barcode Gun demo</div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
