"use client";

import { Calendar, Wrench, ShieldCheck, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Book/Call",
    desc: "Call us or fix appointment online in 60 seconds.",
  },
  {
    icon: Calendar,
    title: "2. We Arrive",
    desc: "Expert technician arrives at your doorstep on time.",
  },
  {
    icon: Wrench,
    title: "3. Fixed Fast",
    desc: "Diagnosis & repair with genuine parts & transparency.",
  },
  {
    icon: ShieldCheck,
    title: "4. Warranty",
    desc: "Enjoy peace of mind with our service warranty.",
  },
];

export function ServiceProcess() {
  return (
    <section className="py-16 bg-surface-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-400">
            Simple 4-step process to get your comfort back.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
