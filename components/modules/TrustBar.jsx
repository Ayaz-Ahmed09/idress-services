"use client";
import { services } from "@/data/services.js"
// Placeholder for brand logos - normally these would be Next.js Images
export function TrustBar({ title }) {
  const i = title;
  const brands = services[i]?.brands;

  return (
    <section className="py-8 bg-linear-to-r from-black via-black to-black border-y border-orange overflow-hidden">


      <div className="relative flex overflow-x-hidden group">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-orange-700 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-white via-transparent to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-24 px-12">
          {brands?.map((brand) => (
            <span
              key={brand}
              className="text-xl md:text-2xl font-bold text-gray-300 hover:text-primary transition-colors cursor-default select-none drop-shadow-sm"
            >
              {brand}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {brands?.map((brand) => (
            <span
              key={`dup-${brand}`}
              className="text-xl md:text-2xl font-bold text-gray-300 hover:text-primary transition-colors cursor-default select-none drop-shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
