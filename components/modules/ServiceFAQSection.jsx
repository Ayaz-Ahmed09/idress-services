"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";

export default function ServiceFAQSection({ title, gradient, heading }) {
  const [expandedId, setExpandedId] = useState(-1);
  const faqs = services[title]?.faqs || [];

  return (
    <section className="relative  py-20 md:py-32 px-6 bg-gradient-to-r from-orange-50 via-accent/60 to-orange-200 text-white overflow-hidden shadow-2xl">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
            {heading || "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-black">
            Common questions and answers about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div className="space-y-4" layout>
          <AnimatePresence mode="popLayout">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}

                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === index ? -1 : index)
                  }
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 shadow-md ${expandedId === index
                    ? "bg-orange-500 border-white-300 shadow-xl"
                    : "bg-orange-500 border-white "
                    }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedId === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-white"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-orange-600 border-t border-orange-400 rounded-b-xl">
                        <p className="text-white leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
