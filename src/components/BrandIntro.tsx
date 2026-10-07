import React from 'react';
import { Dumbbell, Target, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';
import { FallbackImage } from './FallbackImage';

interface BrandIntroProps {
  introImage: string;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ introImage }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Typography & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-amber-500 uppercase">
              <span className="w-8 h-[2px] bg-amber-500" />
              <span>THE MTS GYM PHILOSOPHY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.05] text-balance">
              EAT. SLEEP. LIFT. <span className="gold-gradient-text">REPEAT.</span>
            </h2>

            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              MTS GYM is built for people who take their fitness seriously. Whether you're starting your journey or pushing toward your next level, train in an environment built around strength, consistency and discipline.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Located near Shagun Vatika in Shivpuri, MTS GYM was founded to replace commercial fitness gimmicks with pure training integrity. We provide an uncompromising space where heavy lifting meets genuine camaraderie and expert guidance.
            </p>

            {/* Founders Card */}
            <div className="pt-6 border-t border-zinc-800/80">
              <div className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-3">
                FOUNDED & LED BY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GYM_DETAILS.owners.map((owner) => (
                  <div
                    key={owner.name}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-heading text-lg font-bold">
                        {owner.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                          {owner.name}
                        </h3>
                        <p className="text-xs text-zinc-400">{owner.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center sm:text-left">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">100%</div>
                <div className="text-xs text-zinc-400">Iron Focus</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-amber-400">268+</div>
                <div className="text-xs text-zinc-400">Active Workouts</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">600+</div>
                <div className="text-xs text-zinc-400">Shivpuri Lifters</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visually Strong Image with Athletic Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <FallbackImage
                src={introImage}
                alt="Intense strength training workout at MTS GYM Shivpuri"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                aspectClass="aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Floating Overlay Badge on the Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase">SHIVPURI STRENGTH HUB</h3>
                    <p className="text-xs text-zinc-400">Near Shagun Vatika, MP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-amber-500/40 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
