import React from 'react';
import { ArrowDown, Flame, MapPin, Instagram, Dumbbell } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';
import { FallbackImage } from './FallbackImage';

interface HeroProps {
  heroImage: string;
  onOpenEnquiry: () => void;
  onScrollToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  heroImage,
  onOpenEnquiry,
  onScrollToLocation,
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
      {/* Cinematic Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <FallbackImage
          src={heroImage}
          alt="MTS GYM training floor and strength equipment in Shivpuri"
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          aspectClass="h-full"
        />
        {/* Measured multi-layer dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/75 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#09090b]" />
      </div>

      {/* Atmospheric Amber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Small Brand Line & Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-6 backdrop-blur-md shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-semibold tracking-wider text-amber-400">MTS GYM</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">SHIVPURI, MADHYA PRADESH</span>
        </div>

        {/* Elegant MTS GYM Insignia */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/80" />
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Eat. Sleep. Lift. Repeat.</span>
          </div>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/80" />
        </div>

        {/* Dramatic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[0.95] max-w-4xl mb-6 text-balance drop-shadow-2xl">
          BUILD YOUR <span className="gold-gradient-text">STRONGEST</span> SELF.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Train with purpose. Build strength. Build discipline. Become better every single day at Shivpuri's premier fitness & strength destination.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all rounded-lg shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Dumbbell className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>START YOUR FITNESS JOURNEY</span>
          </button>

          <button
            onClick={onScrollToLocation}
            className="w-full sm:w-auto px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-100 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 active:scale-[0.98] transition-all rounded-lg backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>VISIT THE GYM</span>
          </button>
        </div>

        {/* Claim-to-Proof Adjacency (Zero-Pill clean metadata discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-amber-500" />
            <a 
              href={GYM_DETAILS.instagram.url} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 transition-colors font-medium text-zinc-300"
            >
              @mts.gym
            </a>
          </div>
          <span className="text-zinc-700 hidden sm:inline" aria-hidden="true">·</span>
          <div>
            <span className="font-bold text-white font-mono tabular-nums text-sm sm:text-base mr-1.5">{GYM_DETAILS.instagram.postsCount}</span>
            <span className="text-zinc-400">Instagram Posts</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline" aria-hidden="true">·</span>
          <div>
            <span className="font-bold text-white font-mono tabular-nums text-sm sm:text-base mr-1.5">{GYM_DETAILS.instagram.followersCount}</span>
            <span className="text-zinc-400">Community Athletes</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-amber-400 transition-colors group"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-amber-400 transition-colors">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-500/80" />
      </a>
    </section>
  );
};
