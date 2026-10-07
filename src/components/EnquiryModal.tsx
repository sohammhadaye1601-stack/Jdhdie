import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = '3-Month Commitment'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    batch: 'Evening Power Batch (4:30 PM - 10:00 PM)',
    plan: selectedPlan
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = encodeURIComponent(
      `Hi MTS GYM! I would like to join the gym.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🎯 Fitness Goal: ${formData.goal}\n` +
      `⏰ Preferred Batch: ${formData.batch}\n` +
      `📋 Membership Plan: ${formData.plan}\n\n` +
      `Please let me know admission timings & fees!`
    );

    window.open(`https://wa.me/${GYM_DETAILS.whatsapp.number}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase">
              Enquiry Forwarded!
            </h3>
            <p className="text-sm text-zinc-300">
              Your inquiry has been sent to MTS GYM. Coach Manish and Tamanna Ish will get back to you immediately.
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="w-full py-3.5 bg-amber-500 text-black font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: {GYM_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>MTS GYM ADMISSIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
                Start Your Fitness Journey
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Near Shagun Vatika, Shivpuri · Call {GYM_DETAILS.formattedPhone}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 text-sm font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 text-xs"
                  >
                    <option value="Muscle Building & Hypertrophy">Muscle Building</option>
                    <option value="Strength & Powerlifting">Strength Training</option>
                    <option value="Fat Loss & Toning">Fat Loss & Toning</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Preferred Batch
                  </label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 text-xs"
                  >
                    <option value="Morning Batch (5:30 AM - 10:30 AM)">Morning (5:30 - 10:30 AM)</option>
                    <option value="Evening Batch (4:30 PM - 10:00 PM)">Evening (4:30 - 10:00 PM)</option>
                    <option value="Flexible Timing">Flexible Timing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Selected Package
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 text-xs"
                >
                  <option value="Monthly Starter">Monthly Starter</option>
                  <option value="3-Month Commitment">3-Month Commitment (Most Popular)</option>
                  <option value="Annual Iron Elite">Annual Iron Elite</option>
                  <option value="Personal Training Guidance">Personal Training Mentorship</option>
                </select>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry (Instant)</span>
                </button>

                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call {GYM_DETAILS.formattedPhone}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-zinc-500 text-[11px] pt-1">
                <ShieldCheck className="w-3 h-3 text-amber-500" />
                <span>Zero spam · Walk-ins also welcome Near Shagun Vatika</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
