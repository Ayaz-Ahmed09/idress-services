'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, ShieldAlert, Zap, Clock, CheckCircle2 } from 'lucide-react';
import evChargerImg from '@/public/hero1.jpeg';

export default function Hero()
{
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-sky-50">

        {/* Mobile Background - Premium Gradient Glow */}
        <div className="absolute inset-0 md:hidden block">
          <Image
            src={evChargerImg}
            alt="EV Charger Installation Mobile"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] opacity-90"
          />
          {/* Deep sky tint to match theme */}
          <div className="absolute inset-0 bg-sky-950/20 mix-blend-multiply z-10" />

          {/* Top dark gradient to make header readable if nav is transparent */}
          <div className="absolute inset-0 bg-linear-to-b from-sky-950/60 via-transparent to-transparent z-20 h-1/3" />

          {/* Bottom white gradient to seamlessly blend into content below */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t from-sky-300 via-sky-300/80 to-transparent z-20" />
        </div>

        {/* Tablet/Desktop Background */}
        <div className="absolute inset-0 hidden md:block z-0 pointer-events-none">
          <video
            src="/services/ev/ev-installer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
          {/* Universal desktop fade */}
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent z-20" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-sm glass-sharp border-sky-500/30 text-sky-600 text-xs font-mono uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Emergency Repair Units Available Now
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl"
        >
          DON&apos;T LET A BAD INSTALL <br />
          <span className="text-gradient-electric glow-text">FRY YOUR EV.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 font-light"
        >
          Tired of slow charging and tripping breakers? We provide <strong className="text-gray-200">DEWA-approved</strong> Tesla & Level 2 charger installations in Dubai. <strong className="text-red-500 text-shadow-xs">Done right the first time, in under 48 hours.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 "
        >
          <a href="https://wa.me/971545134885" className="group relative inline-flex items-center justify-center gap-3 bg-sky-500 text-white font-bold px-8 py-4 rounded-sm overflow-hidden transition-all hover:scale-105 glow-cyan ">
            <span className="relative z-10 flex items-center gap-2 font-heading tracking-wide uppercase text-sm">
              Book Certified Install <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm glass-sharp hover:bg-gray-100 transition-colors text-gray-900 font-heading tracking-wide uppercase text-sm border border-gray-200 hover:border-sky-500/50 ">
            View Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 shadow-black/20 shadow-lg gap-4 w-full max-w-5xl"
        >
          {[
            { icon: ShieldAlert, title: "No More Tripped Breakers", desc: "Dedicated circuits with proper load balancing." },
            { icon: Zap, title: "Maximum Charging Speed", desc: "Full 22kW Level 2 power delivery guaranteed." },
            { icon: Clock, title: "48-Hour Turnaround", desc: "From quote to fully operational charging station." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start text-left gap-3 glass-panel p-6 rounded-sm group hover:-translate-y-1 transition-transform duration-300">
              <item.icon className="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-heading text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}