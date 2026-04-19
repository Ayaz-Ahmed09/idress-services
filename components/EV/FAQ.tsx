'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: "How long does a home EV charger installation take?", a: "Typically, a standard install charging station at home takes between 2 to 4 hours, depending on your electrical panel's location and capacity." },
  { q: "Do you provide Tesla charger installation?", a: "Yes, we specialize in Tesla charger installation. Our technicians are highly experienced with Tesla Wall Connectors." },
  { q: "Can you upgrade my electrical panel if needed?", a: "Absolutely. If your current panel cannot support a level 2 charger installation, our certified electricians can perform a full panel upgrade." },
  { q: "Do you offer EV charger maintenance?", a: "Yes, we offer comprehensive EV charger maintenance to ensure your station remains safe and efficient." },
  { q: "Are you certified car charger installers near me?", a: "Yes, we are fully certified and licensed to operate across all of Dubai, providing top-tier electric charger installation." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-mono uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3" />
            Clear Answers
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
            <span className="text-blue-900">FREQUENTLY ASKED</span> <br />
            <span className="text-sky-500">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel rounded-sm overflow-hidden border-sky-500/10 hover:border-sky-500/30 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg font-heading text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-sky-600 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}