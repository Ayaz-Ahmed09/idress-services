"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Star, Clock, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function HeroSplit({
  title,
  subtitle,
  features = [
    "24/7 Emergency Service",
    "30-Min Response",
    "Warranty on Repairs",
  ],
  imageSrc,
  serviceName,
}) {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-surface-dark text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-medium text-accent animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available Now in Your Area
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {title}
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-300 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <Button
              size="lg"
              variant="accent"
              onClick={() =>
                document
                  .getElementById("lead-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Expert Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
            >
              Call 050-123-4567
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-surface-dark bg-gray-600 relative overflow-hidden"
                >
                  {/* Placeholder avatars would go here */}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-xs text-gray-400">
                4.9/5 from 1,200+ Dubai residents
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Lead Form or Hero Image */}
        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
          <GlassCard
            id="lead-form"
            className="p-8 max-w-md mx-auto relative z-10 border-t-4 border-t-accent"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get a Quick Quote
                </h3>
                <p className="text-sm text-gray-500">Response time: ~15 mins</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all text-gray-500">
                    <option>Select Issue</option>
                    <option>Not Cooling / Heating</option>
                    <option>Water Leakage</option>
                    <option>Noise Issue</option>
                    <option>Installation</option>
                    <option>Other</option>
                  </select>
                </div>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full font-bold text-lg"
                >
                  Request Callback
                </Button>
                <p className="text-xs text-center text-gray-400">
                  No hidden fees. Free cancellation.
                </p>
              </form>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
