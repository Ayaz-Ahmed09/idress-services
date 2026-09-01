"use client";

import { useEffect, useRef, useState } from "react";

// Inline SVG icons
const Icons = {
  Users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Calendar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  ThumbsUp: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  ),
};

const stats = [
  {
    icon: Icons.Users,
    value: 50000,
    suffix: "+",
    label: "Happy Customers",
    description: "Satisfied clients across the region",
  },
  {
    icon: Icons.Calendar,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Industry expertise and knowledge",
  },
  {
    icon: Icons.Star,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "First-time fix guarantee",
  },
  {
    icon: Icons.ThumbsUp,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    description: "Based on customer reviews",
  },
];

function useCountUp(end, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!startCounting) return;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - (1 - progress) ** 4;

      const currentCount = startValue + (end - startValue) * easeOutQuart;
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, startCounting]);

  return count;
}

function CounterCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  isVisible,
}) {
  const isDecimal = value % 1 !== 0;
  const count = useCountUp(value, 2000, isVisible);
  const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

  return (
    <div className="text-center p-6 md:p-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-cyan-500 text-white mb-5 shadow-lg shadow-orange-500/30">
        <Icon />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
        {displayValue}
        <span className="text-primary">{suffix}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {label}
      </h3>
      <p className="text-gray-200 dark:text-gray-200 text-sm">{description}</p>
    </div>
  );
}

export default function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-semibold rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Trusted by thousands of customers for reliable home services
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <CounterCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
