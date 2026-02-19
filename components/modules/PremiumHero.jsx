"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

import Image from "next/image";
import { Wrench, Electricity, TV, AC } from "../ui/Svg";
export default function PremiumHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-linear-to-b from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl" />

        {/* Secondary gradient */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-linear-to-t from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mb-8 w-fit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                ⚡ 24/7 Emergency Service Available
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional Services,{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                One Call Away
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expert technicians delivering same-day repairs for AC,
              electronics, CCTV, and electrical services across Dubai with 30+
              years of experience.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                // {
                //   icon: CheckCircle,
                //   text: "Same-day service & instant booking",
                // },
                // { icon: Zap, text: "90-day warranty on all repairs" },
                // {
                //   icon: ShieldCheck,
                //   text: "Certified technicians & transparent pricing",
                // },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Book Now</span>
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
              <a
                href="tel:0557864636"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                📞 Call: 055-7864636
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-[500px] md:h-[600px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Floating Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main circle */}
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
                {/* Animated gradient circle */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-2xl animate-pulse" /> */}

                {/* Center icon */}
                <div className="absolute inset-0 rounded-full flex items-center justify-center ">
                  <Image src="/idres-technicen.avif" alt="repairing-man" width={500} height={500} className="rounded-full box-content " />
                </div>

                {/* Orbiting dots */}
                {[AC, Wrench, TV, Electricity].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg"
                    animate={{
                      rotate: 360,
                      x: Math.cos((i / 4) * 2 * Math.PI) * 220, // Increased radius for larger image
                      y: Math.sin((i / 4) * 2 * Math.PI) * 220,
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      x: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 20, repeat: Infinity, ease: "linear" },
                    }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <motion.div
              className="absolute top-10 right-0 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                50,000+ Customers
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Trust us daily
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-0 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                4.8★ Rating
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                18,000+ reviews
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Years Experience", value: "30+" },
            { label: "Happy Customers", value: "50K+" },
            { label: "Service Areas", value: "50+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div >
    </section >
  );
}
