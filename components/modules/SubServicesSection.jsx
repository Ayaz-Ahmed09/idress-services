"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Inline SVG icons
const Icons = {
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MessageCircle: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  BookOpen: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Clock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Search: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
};

export default function SubServicesSection({
  subServices,
  serviceSlug,
  serviceTitle,
  gradient,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      id="sub-services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={`inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r ${gradient} text-white`}
          >
            Professional Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our {serviceTitle} Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs. Expert technicians
            with transparent pricing and guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {subServices.map((subService, index) => (
            <div
              key={subService.id}
              className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: subService.image
                    ? `url(${subService.image})`
                    : `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                {/* Gradient overlay for text readability */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col text-white">
                {/* Icon and Price Row */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {subService.icon}
                  </span>
                  <span className="text-sm font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                    {subService.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {subService.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-4 flex-grow">
                  {subService.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 text-sm text-white/80 mb-5 py-3 border-t border-b border-white/20">
                  <div className="flex items-center gap-2">
                    <Icons.Clock />
                    <span>{subService.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.Search />
                    <span>Free diagnosis</span>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {subService.keywords?.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons - Always visible for landing pages */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  {/* Primary Call Button - Always visible */}
                  <a
                    href="tel:0557864636"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 transition-all duration-300 active:scale-95 hover:shadow-lg"
                  >
                    <Icons.Phone />
                    <span>Call Now</span>
                  </a>

                  {/* Secondary Buttons */}
                  <div className="flex gap-2.5">
                    <a
                      href="https://wa.me/0557864636"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-green-500/90 hover:bg-green-500 transition-all duration-300 active:scale-95"
                    >
                      <Icons.MessageCircle />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                    <Link
                      href={`/book?service=${serviceSlug}&subService=${subService.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 active:scale-95"
                    >
                      <Icons.BookOpen />
                      <span className="hidden sm:inline">Book</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for? We handle all types of{" "}
            {serviceTitle.toLowerCase()} issues.
          </p>
          <a
            href="tel:0557864636"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${gradient} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
          >
            <Icons.Phone />
            <span>Call for Custom Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
