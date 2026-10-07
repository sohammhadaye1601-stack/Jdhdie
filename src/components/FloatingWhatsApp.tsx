import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMessage = encodeURIComponent(GYM_DETAILS.whatsapp.defaultMessage);
  const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp.number}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="relative bg-zinc-900 border border-zinc-700/80 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[220px]">
          <div>
            <span className="font-bold text-amber-400 block">Chat with MTS GYM</span>
            <span className="text-[11px] text-zinc-300">Click to ask membership fees</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-400 hover:text-white p-0.5 rounded"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MTS GYM on WhatsApp (7047767275)"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-zinc-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-zinc-950" />
      </a>
    </div>
  );
};
