import React from 'react';
import { Instagram, MapPin, Phone, Dumbbell, Settings2, ExternalLink } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';

interface FooterProps {
  onOpenOwnerHub: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerHub }) => {
  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-zinc-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-heading font-bold text-amber-500">MTS</span>
              <span className="text-3xl font-heading font-bold text-white">GYM</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-zinc-300">
              “{GYM_DETAILS.tagline}”
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Shivpuri's premier strength training and fitness club. Dedicated to progressive overload, iron discipline, and an empowered lifting community.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenOwnerHub}
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-amber-400 transition-colors py-1 px-2.5 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Owner Image & Content Manager</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore Gym
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About & Philosophy
                </a>
              </li>
              <li>
                <a href="#why-mts" className="hover:text-amber-400 transition-colors">
                  Why MTS GYM
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Facilities & Equipment
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-amber-400 transition-colors">
                  Community & Events
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Timings
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Map */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Location & Address
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Near Shagun Vatika</p>
                  <p className="text-zinc-400">Shivpuri, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="pt-1">
                <a
                  href={GYM_DETAILS.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact & Social
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="font-mono font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  {GYM_DETAILS.formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={GYM_DETAILS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {GYM_DETAILS.instagram.handle}
                </a>
              </div>

              <div className="pt-3 text-[11px] text-zinc-500">
                <p>Morning: 05:30 AM – 10:30 AM</p>
                <p>Evening: 04:30 PM – 10:00 PM</p>
                <p className="mt-1">Founders: Manish T. Sharma & Tamanna Ish1422</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright (as requested in brief) */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 MTS GYM. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Shivpuri, Madhya Pradesh</span>
            <span>·</span>
            <span>Eat. Sleep. Lift. Repeat.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
