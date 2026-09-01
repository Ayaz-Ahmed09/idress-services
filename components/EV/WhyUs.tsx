'use client';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">
            <span className="text-orange-900">THE COST OF</span> <span className="text-red-500">CHEAP</span> <br className="hidden md:block" />
            <span className="text-orange-900">THE VALUE OF</span> <span className="text-sky-500">CERTIFIED</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your EV is a massive investment. Don&apos;t risk battery degradation or electrical fires with uncertified &quot;handymen&quot;.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Bad */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-sharp p-8 rounded-sm border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
            <h3 className="text-2xl font-heading font-bold mb-8 text-red-900 flex items-center gap-3">
              <XCircle className="text-red-500 w-6 h-6" /> <span className="text-red-700">Unlicensed</span> <span className="text-red-500">Installers</span>
            </h3>
            <ul className="space-y-6">
              {[
                "Uses standard household wiring (Risk of melting/fire)",
                "No load balancing (Trips your main breaker constantly)",
                "Voids your EV's warranty immediately",
                "No post-installation support or maintenance"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span className="text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Good */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-sm border-sky-500/40 relative overflow-hidden glow-cyan"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-sky-500" />
            <h3 className="text-2xl font-heading font-bold mb-8 text-gray-900 flex items-center gap-3">
              <CheckCircle2 className="text-sky-600 w-6 h-6" /><span className='text-orange-900'> Our Certified Standard</span>
            </h3>
            <ul className="space-y-6">
              {[
                "Industrial-grade wiring rated for continuous EV loads",
                "Smart load balancing protects your home's electrical grid",
                "DEWA-approved & maintains your vehicle warranty",
                "1-Year comprehensive warranty on parts and labor"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}