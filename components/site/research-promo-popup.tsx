'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ResearchPromoPopup() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('aeroin_research_popup');

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPromo(true);
        sessionStorage.setItem('aeroin_research_popup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPromo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-blue-500/30 bg-[hsl(222_47%_8%)] shadow-2xl">

        {/* Close button */}
        <button
          onClick={() => setShowPromo(false)}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-slate-400 transition hover:bg-white/20 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top glow */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-600/20 to-transparent" />

        <div className="relative px-6 py-8 text-center sm:px-10 sm:py-10">

          {/* Admissions badge */}
          <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
            🚀 Admissions Open
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Start Your Research Journey
            <span className="block text-blue-400">
              In Space Technology
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Explore research-focused internship programs in Aerospace,
            Space Technology, AI, Robotics, Satellites and more.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-3 gap-3">

            <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
              <div className="text-xl">🔬</div>
              <p className="mt-1 text-xs text-slate-300">
                Research
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
              <div className="text-xl">📄</div>
              <p className="mt-1 text-xs text-slate-300">
                Paper Guidance
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
              <div className="text-xl">🚀</div>
              <p className="mt-1 text-xs text-slate-300">
                Expert Led
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <Button
              onClick={() => setShowPromo(false)}
              className="flex-1 bg-blue-600 text-white hover:bg-blue-500"
            >
              Explore Programs
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                window.open(
                  'https://wa.me/919176209914',
                  '_blank'
                );
              }}
              className="flex-1 border-white/20 text-white hover:bg-white/10"
            >
              Talk to Us
            </Button>

          </div>

          <p className="mt-5 text-xs text-slate-500">
            Limited seats available for upcoming batches
          </p>

        </div>
      </div>
    </div>
  );
}