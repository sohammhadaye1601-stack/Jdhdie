import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { MEMBERSHIP_TIERS, GYM_DETAILS } from '../data/defaultData';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section className="py-20 bg-[#0c0c0e] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>TRANSPARENT FITNESS PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
            MEMBERSHIP <span className="gold-gradient-text">OPTIONS</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2">
            Affordable, premium memberships tailored for beginners and competitive lifters alike in Shivpuri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.recommended
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 md:-translate-y-2'
                  : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-widest shadow-md">
                  MOST POPULAR IN SHIVPURI
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    {tier.period}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-amber-400 mt-2 font-medium">
                    {tier.highlight}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-800/80 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="p-1 rounded bg-amber-500/10 text-amber-500 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm transition-all cursor-pointer ${
                    tier.recommended
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20 active:scale-98'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 active:scale-98'
                  }`}
                >
                  ENQUIRE FOR {tier.name}
                </button>
                <p className="text-[11px] text-zinc-500 text-center mt-3">
                  Call {GYM_DETAILS.phone} for seasonal student & group discounts
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
