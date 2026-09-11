import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Store, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import merchantHeroImg from '../assets/images/kirana_merchant_hero_1789138777149.jpg';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onBookDemo }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          
          <img
            src={merchantHeroImg}
            alt="Ajay Patel Video Story"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />

          {/* Video Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

          {/* Merchant location pill on video */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Patel's Fresh Mart, Ahmedabad</span>
          </div>

          {/* Center Play/Pause toggle overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transform hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 translate-x-0.5" />}
          </button>

          {/* Subtitles / Captions */}
          <div className="absolute bottom-16 left-6 right-6 z-20 text-center">
            <div className="inline-block px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/10 shadow-lg">
              “KiranaGrow transformed our billing. In rush evening hours, customers don't abandon baskets anymore.”
            </div>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black to-transparent space-y-2">
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <span>0:{progress < 10 ? `0${Math.floor(progress * 1.2)}` : Math.floor(progress * 1.2)} / 2:00</span>
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] text-emerald-400 font-semibold uppercase">1080p HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Callout */}
        <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif]">
              Ready to automate your dukaan like Ajay Patel?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              14-Day risk-free trial delivered to your shop in 24 hours.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookDemo();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors shrink-0"
          >
            Book Free Counter Demo →
          </button>
        </div>

      </div>
    </div>
  );
};
