"use client";

import {
  AlertTriangle,
  ThermometerSnowflake,
  Droplets,
  Volume2,
  Zap,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const defaultOne = [
  {
    icon: ThermometerSnowflake,
    title: "Not Cooling",
    desc: "AC running but blowing warm air? We fix gas leaks and compressors.",
  },
];

export function ProblemGrid({
  title = "Common Problems We Fix",
  problems = [],
}) {
  // Fallback if no problems passed
  const displayItems = problems.length > 0 ? problems : defaultOne;

  return (
    <section className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            Select your issue and get an instant quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, i) => {
            const Icon = item.icon || Wrench;
            return (
              <GlassCard
                key={i}
                className="p-6 hover:border-primary/50 transition-all cursor-pointer group bg-secondary/50 border-white/5 shadow-sm hover:shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
