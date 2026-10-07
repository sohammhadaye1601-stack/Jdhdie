import React from 'react';
import { Dumbbell } from 'lucide-react';
import { FallbackImage } from './FallbackImage';

interface MotivationBannerProps {
  motivationImage: string;
}

export const MotivationBanner: React.FC<MotivationBannerProps> = ({ motivationImage }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-black flex items-center justify-center border-y border-zinc-900">
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <FallbackImage
          src={motivationImage}
          alt="Discipline Over Everything - MTS GYM Shivpuri"
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
          aspectClass="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]" />
      </div>

      {/* Atmospheric center spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-[1px] w-8 sm:w-16 bg-amber-500/60" />
          <Dumbbell className="w-5 h-5 text-amber-500 animate-pulse" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
            THE MTS CREED
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-amber-500/60" />
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-[0.95] text-balance mb-8 drop-shadow-2xl">
          DISCIPLINE OVER <span className="gold-gradient-text">EVERYTHING.</span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Motivation gets you started. Discipline keeps you going when the excitement fades. Put your hands on the barbell and let the work speak for itself.
        </p>

        <div className="mt-8 text-xs font-mono tracking-widest text-zinc-500 uppercase">
          EAT · SLEEP · LIFT · REPEAT
        </div>
      </div>
    </section>
  );
};
