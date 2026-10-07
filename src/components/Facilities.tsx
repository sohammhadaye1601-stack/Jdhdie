import React, { useState } from 'react';
import { Dumbbell, Activity, ShieldCheck, Flame, Cpu, UserCheck } from 'lucide-react';
import { FACILITIES_DATA } from '../data/defaultData';
import { FallbackImage } from './FallbackImage';

interface FacilitiesProps {
  onOpenEnquiry: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(FACILITIES_DATA[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'strength-training':
        return <Dumbbell className="w-5 h-5 text-amber-500" />;
      case 'cardio-zone':
        return <Activity className="w-5 h-5 text-amber-500" />;
      case 'free-weights':
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'modern-equipment':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'functional-training':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'personal-guidance':
        return <UserCheck className="w-5 h-5 text-amber-500" />;
      default:
        return <Dumbbell className="w-5 h-5 text-amber-500" />;
    }
  };

  const selectedFacility = FACILITIES_DATA.find(f => f.id === activeTab) || FACILITIES_DATA[0];

  return (
    <section id="facilities" className="py-24 bg-[#0c0c0e] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">
            <span>TRAINING DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
            FACILITIES & <span className="gold-gradient-text">TRAINING ZONES</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-3">
            Grounded in athletic science, biomechanics, and dedicated spaces to push every fitness dimension.
          </p>
        </div>

        {/* Dynamic Bento Grid of 6 Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FACILITIES_DATA.map((fac) => {
            const isActive = fac.id === activeTab;
            return (
              <div
                key={fac.id}
                onClick={() => setActiveTab(fac.id)}
                className={`group p-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-amber-500/80 ring-1 ring-amber-500/30 bg-zinc-900/90 shadow-xl shadow-amber-500/5'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700/60 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                      {getIcon(fac.id)}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-amber-500/80 transition-colors">
                      MTS · 0{FACILITIES_DATA.indexOf(fac) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/60">
                  <ul className="space-y-1.5 mb-4">
                    {fac.features.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquiry();
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 pt-1"
                  >
                    <span>Enquire for this zone</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Facility Spotlight Banner */}
        <div className="rounded-2xl border border-zinc-800/90 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-zinc-800 max-h-[300px]">
            <FallbackImage
              src={selectedFacility.imageUrl}
              alt={selectedFacility.title}
              className="w-full h-full object-cover"
              aspectClass="aspect-[16/9]"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <div className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
              SPOTLIGHT FACILITY
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {selectedFacility.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              {selectedFacility.description}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {selectedFacility.features.map((feat, i) => (
                <div key={i} className="text-xs font-medium text-zinc-300 bg-zinc-800/60 p-2 rounded-lg border border-zinc-700/50">
                  ✓ {feat}
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
              >
                Book Free Trial Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
