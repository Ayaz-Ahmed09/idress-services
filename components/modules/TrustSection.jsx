"use client";

import { motion } from "framer-motion";
import { Award, Clock, Zap, Users, Headphones, DollarSign } from "lucide-react";
import { company } from "@/data/company-data";

const features = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Emergency technicians available 24/7. We reach you within 60 minutes in most service areas.",
    gradient: "from-orange-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "200+ certified technicians with 30+ years of combined experience handling all brands and models.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "90-Day Warranty",
    description:
      "All repairs covered with comprehensive 90-day warranty. Peace of mind guaranteed.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Free diagnosis on every repair. Competitive rates with no surprises.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated customer support team ready to assist. Multilingual support available.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: Users,
    title: "50,000+ Happy Customers",
    description:
      "4.8★ rating with 18,000+ verified reviews. Trusted by families and businesses.",
    gradient: "from-indigo-500 to-orange-500",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-20 md:py-32 px-6" id="why-us">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Thousands, Built on Excellence
          </h3>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine expertise, reliability, and customer care to deliver the
            best service experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-md backdrop-blur-lg hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                {/* Gradient accent */}
                {/* <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} pointer-events-none blur-xl`}
                  style={{ filter: "blur(20px)" }}
                /> */}

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${feature.gradient} mb-4`}
                  >
                    <feature.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${feature.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-md backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Ready for Professional Service?
              </h3>
              <p className="text-slate-600">
                Book your service now and experience the difference. Same-day
                appointments available in your area.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-orange-600 to-cyan-500 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book Service
              </a>
              <a
                href={`tel:+${company.whatsapp}`}
                className="inline-flex items-center bg-accent text-white justify-center px-8 py-3 rounded-xl font-semibold  dark:text-white  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
