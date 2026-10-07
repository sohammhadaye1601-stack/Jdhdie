import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Settings2 } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenOwnerHub: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenOwnerHub }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Why MTS', href: '#why-mts' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Community', href: '#community' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-2xl sm:text-3xl font-heading tracking-wider text-white hover:text-amber-400 transition-colors flex items-center gap-2 group whitespace-nowrap"
            >
              <span className="text-amber-500 font-bold">MTS</span>
              <span className="text-zinc-100">GYM</span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors relative py-1 hover:border-b-2 hover:border-amber-400 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              {/* Gym Owner Media Hub Access */}
              <button
                onClick={onOpenOwnerHub}
                title="Owner Media Hub: Upload & Customize Gym Photos"
                aria-label="Owner Photo Manager"
                className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-zinc-800/60 rounded-lg transition-colors border border-transparent hover:border-zinc-700"
              >
                <Settings2 className="w-4 h-4" />
              </button>

              {/* Direct Call Button (Compact on mobile) */}
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>{GYM_DETAILS.phone}</span>
              </a>

              {/* Primary CTA */}
              <button
                onClick={onOpenEnquiry}
                className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all rounded-lg shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                Join Now
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800/70 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl pt-20 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="space-y-4 pt-4">
            <div className="pb-4 border-b border-zinc-800">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Navigation</span>
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-2xl font-heading tracking-wide text-zinc-100 hover:text-amber-400 transition-colors py-1.5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-800/80">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-zinc-900 border border-zinc-700 rounded-lg active:bg-zinc-800"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {GYM_DETAILS.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg shadow-lg shadow-amber-500/20 active:scale-[0.99]"
            >
              Start Your Fitness Journey
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOwnerHub();
              }}
              className="w-full py-2.5 text-xs text-zinc-400 hover:text-amber-400 flex items-center justify-center gap-1.5"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Manage Gym Photos & Content</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
