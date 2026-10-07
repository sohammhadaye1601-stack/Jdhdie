import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS, BATCH_SCHEDULES } from '../data/defaultData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR SHIVPURI FACILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
            COME TRAIN <span className="gold-gradient-text">WITH US.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mt-2">
            Centrally located near Shagun Vatika in Shivpuri. Step onto the floor, meet the coaches, and start lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location details, Address, Timings & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-zinc-900/60 p-6 sm:p-10 rounded-2xl border border-zinc-800">
            <div>
              {/* Gym Name & Address Block */}
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  MTS GYM • SHIVPURI
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  MTS GYM
                </h3>

                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-semibold text-white">Near Shagun Vatika</p>
                    <p className="text-sm text-zinc-400">Shivpuri, Madhya Pradesh, India</p>
                    <p className="text-xs text-zinc-500 mt-1">Circular Road / Shagun Vatika Landmark</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-300 pt-2">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-500 block uppercase font-medium">Direct Hotline</span>
                    <a
                      href={`tel:${GYM_DETAILS.phone}`}
                      className="text-lg font-mono font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {GYM_DETAILS.formattedPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Batch Timings */}
              <div className="space-y-3 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>TRAINING BATCH SCHEDULE</span>
                </div>

                <div className="space-y-2.5">
                  {BATCH_SCHEDULES.map((batch, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-xs font-bold text-white uppercase">{batch.name}</div>
                        <div className="text-[11px] text-zinc-400">{batch.recommendedFor}</div>
                      </div>
                      <div className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 whitespace-nowrap self-start sm:self-auto">
                        {batch.timeSlot}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Two Large Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>CALL NOW</span>
              </a>

              <a
                href={GYM_DETAILS.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 flex items-center justify-center gap-2.5 transition-all active:scale-95 text-center"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Card & Embed */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
            {/* Visual Header for the Map */}
            <div className="p-4 sm:p-5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Gym Open For Training Inquiries</span>
              </div>
              <a
                href={GYM_DETAILS.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Map Embed */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[420px] bg-zinc-900">
              <iframe
                title="MTS GYM Location Map Shivpuri"
                src={`https://maps.google.com/maps?q=Shagun+Vatika+Shivpuri+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter grayscale-[40%] contrast-125 invert-[8%] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Pin Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-black/90 backdrop-blur-md border border-zinc-800 shadow-xl">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>MTS GYM LANDMARK</span>
                </div>
                <p className="text-xs text-zinc-300 font-medium">
                  Located right Near Shagun Vatika, easy access for two-wheelers and cars.
                </p>
                <a
                  href={GYM_DETAILS.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Click for navigation link ({GYM_DETAILS.googleMaps.url.replace('https://', '')})</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
