import React from 'react';
import { Dumbbell, CalendarCheck, Users, Trophy } from 'lucide-react';
import { WHY_MTS_ITEMS } from '../data/defaultData';

export const WhyMtsGym: React.FC = () => {
  const icons = [
    <Dumbbell className="w-5 h-5 text-amber-500" />,
    <CalendarCheck className="w-5 h-5 text-amber-500" />,
    <Users className="w-5 h-5 text-amber-500" />,
    <Trophy className="w-5 h-5 text-amber-500" />,
  ];

  return (
    <section id="why-mts" className="py-24 bg-[#0c0c0e] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">
            <span>THE PILLARS OF PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4 text-balance">
            WHY TRAIN AT <span className="gold-gradient-text">MTS GYM</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Four uncompromising foundations that separate ordinary workout spaces from a true arena of transformation.
          </p>
        </div>

        {/* Four Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_MTS_ITEMS.map((item, index) => (
            <div
              key={item.number}
              className="group relative p-8 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Editorial Number + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-3xl font-bold text-zinc-600 group-hover:text-amber-500 transition-colors">
                    {item.number}
                  </span>
                  <div className="p-3 rounded-xl bg-zinc-800/50 group-hover:bg-amber-500/10 border border-zinc-700/50 group-hover:border-amber-500/20 transition-colors">
                    {icons[index]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Tag (Clean unboxed text) */}
              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
                <span className="group-hover:text-zinc-300 transition-colors">
                  {item.tag}
                </span>
                <span className="text-amber-500/60 group-hover:text-amber-400 transition-colors text-base">
                  →
                </span>
              </div>

              {/* Subtle top edge glow on hover */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500/60 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
