"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

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
  heroImage,
  issueOptions = [
    "Not Cooling / Heating",
    "Water Leakage",
    "Noise Issue",
    "Installation",
    "Other",
  ],
}) {
  const formRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const formData = new FormData(e.target);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3_PUBLIC_KEY ||
        "5b54b2db-ee98-4dee-a4ed-40b6f6e33e8b"
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
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden text-white">
      {/* ── Background Image via next/image (auto WebP/AVIF, srcset, zero CLS) ── */}
      {heroImage && (
        <div className="absolute inset-0 ">
          <Image
            src={heroImage}
            alt={`${serviceName || "Service"} background`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={85}
            loading="lazy"
          />
        </div>
      )}

      {/* ── Gradient overlay: readable text + image still visible ── */}
      {heroImage && (
        <div className="absolute inset-0 z-10 " />
      )}

      {/* Background decoration (fallback when no image) */}
      {!heroImage && (
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full" />
      )}

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative -z-[10px]">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-medium text-accent animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available Now in Your Area
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-lg">
            {title}
          </h1>

          <p className="text-lg font-display text-gray-100 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 drop-shadow-md">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 drop-shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
            <Link href="/book">
              <Button
                size="lg"
                variant="accent"
              >
                Book Expert Now
              </Button>
            </Link>
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
              <p className="text-xs text-gray-300">
                4.9/5 from 1,200+ Dubai residents
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Lead Form */}
        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 md:block hidden">
          <GlassCard
            id="lead-form"
            className="p-8 max-w-md mx-auto relative z-10 glass-card shadow-2xl border-t-4 border-t-accent"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Get a Quick Quote
                </h3>
                <p className="text-sm text-orange-500">Response time: 5 mins</p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="form_source"
                  value={`Hero Callback – ${serviceName || "Service Page"}`}
                />

                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-b-2 border-orange-500 bg-transparent text-white focus:border-primary focus:bg-gray-700 focus:ring-0 transition-all outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 rounded-lg text-white border-b-2 border-orange-500 bg-transparent focus:border-primary focus:bg-gray-700 focus:ring-0 transition-all outline-none"
                  />
                  <select
                    name="issue"
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-300 border-b-2 border-orange-500 bg-transparent focus:border-primary focus:bg-gray-700 focus:ring-2 transition-all outline-none"
                  >
                    <option value="">Select Issue</option>
                    {issueOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
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
        </div>
      </div>
    </section>
  );
}
