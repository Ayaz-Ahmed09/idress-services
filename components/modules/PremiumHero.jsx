"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { company } from "@/data/company-data";
import { Whatsapp } from "../ui/Svg";

const SERVICE_OPTIONS = Object.values(services).map((s) => ({
  value: s.slug,
  label: s.title,
}));

export default function PremiumHero() {
  const formRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCallback = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const formData = new FormData(e.target);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3_PUBLIC_KEY ||
        "a1024588-a9d0-4258-88ff-70918df432c3"
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        e.target.reset();
        router.push("/thank-you");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form Error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/home-tools.png"
          alt="Professional technician background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* ── Overlay for high readability ── */}
      <div className="absolute inset-0 -z-10 bg-slate-950/50 backdrop-blur-[1px]" />

      {/* ── Gradient accents (on top of overlay) ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-orange-500/20 via-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-orange-500/20 via-amber-300/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge */}


            {/* Main Heading */}
            <motion.h1
              style={{ color: "#ffffff" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white text-center mb-4 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Professional, Expert Services,{" "}
              <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
                One Call Away
              </span>
            </motion.h1>

            {/* Services Links under H1 */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 text-sm sm:text-base font-bold tracking-wide text-white drop-shadow-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              {[
                { label: "AC REPAIR", href: "/ac-repair" },
                { label: "PAINTING", href: "/painting-services" },
                { label: "CCTV INSTALLATION", href: "/cctv-installation" },
                { label: "ELECTRICIAN", href: "/electrician-service" },
                { label: "EV CHARGING", href: "/ev-charging" },
              ].map((item, index, array) => (
                <div key={item.href} className="flex items-center gap-2 md:gap-3">
                  <Link
                    href={item.href}
                    className="text-orange-400 hover:text-amber-300 transition-colors duration-200 underline-offset-4 hover:underline drop-shadow"
                  >
                    {item.label}
                  </Link>
                  {index < array.length - 1 && (
                    <span className="text-slate-300/70 font-normal">|</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-center text-slate-100 leading-relaxed mb-8 max-w-lg font-medium drop-shadow-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expert technicians delivering same-day repairs for AC,
              electronics, CCTV, and electrical services across Dubai with 30+
              years of experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/book"
                className="hidden md:inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-accent hover:bg-accent hover:shadow-xl hover:shadow-sky-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
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

              <Link href={`https://wa.me/${company.whatsapp}`} className="block md:hidden">
                <Button
                  size="lg"
                  variant="orange"
                  className="justify-center px-9 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-accent to-accent-hover hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Whatsapp />
                  <span className="ml-3">Chat via Whatsapp</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Callback Form ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <GlassCard
              id="lead-form"
              className="p-8 max-w-md mx-auto relative z-10 border-t-4 border-t-sky-500 hidden md:block bg-white/95 border-slate-200 shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Get a Quick Quote
                  </h3>
                  <p className="text-sm text-slate-500">
                    Response time: 5 mins
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleCallback}
                  className="space-y-4"
                >
                  <input type="hidden" name="form_source" value="Hero Callback Form" />

                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:ring-0 transition-all outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 rounded-lg text-slate-900 border border-slate-200 bg-slate-50 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:ring-0 transition-all outline-none"
                    />
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg text-slate-900 border border-slate-200 bg-slate-50 focus:border-sky-500 focus:bg-white focus:ring-2 transition-all outline-none"
                    >
                      <option value="" className="bg-white text-slate-500">Select Service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s.value} value={s.label} className="bg-white text-slate-900">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {errorMsg && (
                    <p className="text-sm text-red-400 text-center">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    variant="black"
                    className="w-full font-bold text-lg border-b-4 border-orange-500 border-t-2"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Request Callback"}
                  </Button>
                  <p className="text-xs text-center text-gray-400">
                    No hidden fees. Free cancellation.
                  </p>
                </form>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-3 gap-1 lg:gap-6 md:gap-12"
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
              className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
            >
              <p className="sm:text-md lg:text-xl md:text-2xl font-bold bg-linear-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm sm:w-full text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
