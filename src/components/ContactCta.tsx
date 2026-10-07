import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Dumbbell, ShieldCheck, Clock } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';

interface ContactCtaProps {
  preselectedPlan?: string;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ preselectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    batch: 'Evening Power Batch (4:30 PM - 10:00 PM)',
    plan: preselectedPlan || '3-Month Commitment',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp pre-filled text
    const text = encodeURIComponent(
      `Hi MTS GYM! I would like to join the gym.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🎯 Fitness Goal: ${formData.goal}\n` +
      `⏰ Preferred Batch: ${formData.batch}\n` +
      `📋 Plan Selected: ${formData.plan}\n` +
      (formData.notes ? `💬 Notes: ${formData.notes}\n` : '') +
      `\nPlease share the membership joining procedure & fees.`
    );

    // Open WhatsApp directly with the details
    window.open(`https://wa.me/${GYM_DETAILS.whatsapp.number}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#09090b] via-zinc-950 to-black relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Header (as requested in brief) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>JOIN THE IRON BROTHERHOOD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-[0.95] text-balance mb-6">
            READY TO <span className="gold-gradient-text">LEVEL UP?</span>
          </h2>

          <p className="text-lg sm:text-2xl text-zinc-300 font-medium max-w-xl mx-auto mb-8">
            “Your next level starts with showing up.”
          </p>

          {/* Prominent Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#enquiry-form"
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-xl shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-center"
            >
              JOIN MTS GYM
            </a>

            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-95 text-center font-mono"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>CALL {GYM_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Interactive Direct Enquiry Form */}
        <div id="enquiry-form" className="max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-8 pb-6 border-b border-zinc-800">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase">
              Instant Membership Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Fill in your details below. We'll instantly connect you via WhatsApp or call you back.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white uppercase">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your membership request has been forwarded to MTS GYM coaches. You can also directly call us at <strong>{GYM_DETAILS.phone}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-amber-500 text-black rounded-xl"
                >
                  Call Coach Manish Now
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 text-xs text-zinc-400 hover:text-white"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 text-sm font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                  >
                    <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                    <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                    <option value="Fat Loss & Body Recomposition">Fat Loss & Body Recomposition</option>
                    <option value="Athletic Conditioning & Cardio">Athletic Conditioning & Cardio</option>
                    <option value="Beginner Form & Fitness">Beginner Starting Out</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Batch Slot
                  </label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                  >
                    <option value="Morning Batch (5:30 AM - 10:30 AM)">Morning Batch (5:30 AM - 10:30 AM)</option>
                    <option value="Evening Batch (4:30 PM - 10:00 PM)">Evening Batch (4:30 PM - 10:00 PM)</option>
                    <option value="Flexible / Either Batch">Flexible / Either Batch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Any Specific Question or Goal Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for personal trainer guidance, beginner squat instruction..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Submit & Connect on WhatsApp / Phone</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Direct response from Gym Owners Manish T. Sharma & Tamanna Ish</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
