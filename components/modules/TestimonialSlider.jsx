"use client";

import { useEffect, useRef } from "react";

// Inline SVG icons
const Icons = {
  Quote: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

// Testimonial data
const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "Downtown Dubai",
    text: "Outstanding service! My AC was fixed within an hour. The technician was professional and explained everything clearly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    location: "Dubai Marina",
    text: "Best AC repair service in Dubai. Fast response, fair pricing, and excellent workmanship. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    location: "Business Bay",
    text: "Called them at midnight for an emergency and they arrived within 45 minutes. Incredible service and very knowledgeable staff.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Jumeirah",
    text: "Professional team, transparent pricing, and quality work. They diagnosed the issue quickly and fixed it perfectly. 5 stars!",
    rating: 5,
  },
  {
    name: "Khalid Rahman",
    location: "Al Barsha",
    text: "Have used their services multiple times for both home and office AC units. Always reliable and efficient. Great job!",
    rating: 5,
  },
  {
    name: "Fatima Al Zaabi",
    location: "Mirdif",
    text: "The team was punctual, courteous, and very skilled. They cleaned up after the work and left everything spotless. Excellent service!",
    rating: 5,
  },
  {
    name: "James Wilson",
    location: "Arabian Ranches",
    text: "Fair prices and excellent service. They didn't try to upsell unnecessary parts like other companies. Honest and trustworthy.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    location: "Palm Jumeirah",
    text: "From booking to completion, everything was seamless. The technician was well-equipped and completed the job efficiently. Thank you!",
    rating: 5,
  },
];

// Split testimonials into two columns
const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
const rightColumn = testimonials.filter((_, i) => i % 2 !== 0);

function TestimonialCard({ name, location, text, rating }) {
  return (
    <div className="bg-gradient-to-br from-cream-50 to-cream-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-5 mb-4 shadow-md hover:shadow-xl transition-all duration-300 border border-sky-200/50 dark:border-sky-800/30 relative overflow-hidden group">
      {/* Sky blue edge accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-sky-500" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-transparent" />

      {/* Quote icon */}
      <div className="absolute top-3 right-3 text-sky-200 dark:text-sky-800 opacity-50">
        <Icons.Quote />
      </div>

      <div className="relative">
        {/* Rating stars */}
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: rating }, (_, index) => index + 1).map(
            (starNum) => (
              <span key={`star-${starNum}`} className="text-yellow-400">
                <Icons.Star />
              </span>
            ),
          )}
        </div>

        {/* Testimonial text */}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
          &ldquo;{text}&rdquo;
        </p>

        {/* Author info */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
          <p className="font-bold text-gray-900 dark:text-white text-sm">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftColumnEl = leftRef.current;
    const rightColumnEl = rightRef.current;

    if (!leftColumnEl || !rightColumnEl) return;

    let leftPos = 0;
    let rightPos = -50; // Start at different position for reverse effect
    const speed = 0.3;

    const animate = () => {
      leftPos += speed;
      rightPos -= speed;

      // Reset positions for seamless loop
      if (leftPos >= 50) leftPos = 0;
      if (rightPos <= -50) rightPos = 0;

      if (leftColumnEl) {
        leftColumnEl.style.transform = `translateY(-${leftPos}%)`;
      }
      if (rightColumnEl) {
        rightColumnEl.style.transform = `translateY(${rightPos}%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our services.
          </p>
        </div>

        {/* Testimonials container with fade edges */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
            {/* Left column - moves up */}
            <div className="overflow-hidden relative">
              <div ref={leftRef} className="space-y-4">
                {/* Duplicate for seamless loop */}
                {[...leftColumn, ...leftColumn].map((testimonial, i) => (
                  <TestimonialCard
                    key={`left-${testimonial.name}-${i}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Right column - moves down (reverse) */}
            <div className="overflow-hidden relative hidden md:block">
              <div ref={rightRef} className="space-y-4">
                {/* Duplicate for seamless loop */}
                {[...rightColumn, ...rightColumn].map((testimonial, i) => (
                  <TestimonialCard
                    key={`right-${testimonial.name}-${i}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
