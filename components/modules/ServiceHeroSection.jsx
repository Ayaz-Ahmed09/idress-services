"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceHeroSection({ service }) {
  if (!service) return null;

  const colorClass = {
    blue: "from-blue-600 to-cyan-500",
    red: "from-red-600 to-orange-500",
    purple: "from-purple-600 to-pink-500",
    green: "from-green-600 to-emerald-500",
    amber: "from-amber-600 to-yellow-500",
    indigo: "from-indigo-600 to-blue-500",
  };

  const gradient = colorClass[service.color] || "from-blue-600 to-cyan-500";

  return (
    <section
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 bg-gradient-to-br ${gradient}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {/* Icon */}
        <motion.div
          className="text-7xl md:text-8xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {service.icon}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {service.heroHeading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {service.heroSubheading}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {service.heroDescription}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/book?service=${service.slug}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-gray-900 bg-white hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Book Now - Same-Day Service</span>
            <svg
              className="ml-2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
          >
            View Other Services
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: "Same-day", value: "Service" },
            { label: "90-day", value: "Warranty" },
            { label: "24/7", value: "Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <p className="text-sm text-white/80">{item.label}</p>
              <p className="font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
