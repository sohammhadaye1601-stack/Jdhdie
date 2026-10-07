import React from 'react';
import { Sparkles, Award, HeartHandshake, Flame } from 'lucide-react';
import { FallbackImage } from './FallbackImage';

interface CommunityProps {
  communityImages: { id: string; url: string; title: string }[];
  onOpenEnquiry: () => void;
}

export const Community: React.FC<CommunityProps> = ({ communityImages, onOpenEnquiry }) => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: "Gym Anniversary Celebrations",
      desc: "Annual powerlifting meets, milestone celebrations, and member awards that honor commitment and transformation."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-amber-500" />,
      title: "Iron Brotherhood & Sisterhood",
      desc: "A safe, respectful, and motivating environment where experienced athletes spot beginners and everyone lifts each other up."
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      title: "Daily Training Culture",
      desc: "No vanity egos. Real sweat, disciplined workout batches, and coaches who know every member by name."
    }
  ];

  return (
    <section id="community" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>THE MTS FAMILY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
            MORE THAN <span className="gold-gradient-text">A GYM.</span>
          </h2>
          <p className="text-base sm:text-xl text-zinc-300 mt-4 leading-relaxed font-normal">
            “It's the people who show up, push harder and keep moving forward.”
          </p>
        </div>

        {/* 3 Community Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4"
            >
              <div className="p-3 w-fit rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Community & Event Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityImages.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl aspect-[4/3]"
            >
              <FallbackImage
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                aspectClass="h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  MTS EVENT & MOMENTS
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            BECOME PART OF THE MTS COMMUNITY
          </button>
        </div>

      </div>
    </section>
  );
};
