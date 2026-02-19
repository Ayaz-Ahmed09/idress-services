"use client";

// Placeholder for brand logos - normally these would be Next.js Images
const brands = [
  "Samsung",
  "LG",
  "Daikin",
  "Carrier",
  "Mitsubishi",
  "General",
  "O General",
  "Panasonic",
  "Super General",
  "Gree",
];

export function TrustBar() {
  return (
    <section className="py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-y border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          Trusted Experts for All Major Brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-24 px-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-default select-none drop-shadow-sm"
            >
              {brand}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand) => (
            <span
              key={`dup-${brand}`}
              className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-default select-none drop-shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
