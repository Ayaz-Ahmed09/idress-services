"use client";


import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Whatsapp } from "./Svg";
import { company } from "@/data/company-data";

// Inline SVG icons for optimal performance
const Icons = {
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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
      width="14"
      height="14"
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
      width="14"
      height="14"
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
  Eye: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function ServiceCard({
  slug,
  title,
  icon,
  image,
  color,
  gradient,
  description,
  emergencyAvailable = false,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const colorClasses = {
    orange: "from-orange-500/20 to-cyan-500/20 border-orange-500/30 group-hover:border-orange-500/60",
    red: "from-red-500/20 to-orange-500/20 border-red-500/30 group-hover:border-red-500/60",
    purple:
      "from-purple-500/20 to-pink-500/20 border-purple-500/30 group-hover:border-purple-500/60",
    green:
      "from-green-500/20 to-emerald-500/20 border-green-500/30 group-hover:border-green-500/60",
    amber:
      "from-amber-500/20 to-yellow-500/20 border-amber-500/30 group-hover:border-amber-500/60",
    indigo:
      "from-indigo-500/20 to-orange-500/20 border-indigo-500/30 group-hover:border-indigo-500/60",
    teal: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 group-hover:border-teal-500/60",
    orange:
      "from-orange-500/20 to-amber-500/20 border-orange-500/30 group-hover:border-orange-500/60",
    yellow:
      "from-yellow-500/20 to-orange-500/20 border-yellow-500/30 group-hover:border-yellow-500/60",
  };

  const gradientClasses = {
    "from-orange-500 to-cyan-400": "from-orange-600 to-cyan-500",
    "from-red-500 to-orange-400": "from-red-600 to-orange-500",
    "from-purple-500 to-pink-400": "from-purple-600 to-pink-500",
    "from-green-500 to-emerald-400": "from-green-600 to-emerald-500",
    "from-amber-500 to-yellow-400": "from-amber-600 to-yellow-500",
    "from-indigo-500 to-orange-400": "from-indigo-600 to-orange-500",
    "from-teal-500 to-emerald-400": "from-teal-600 to-emerald-500",
    "from-orange-500 to-amber-400": "from-orange-600 to-amber-500",
    "from-yellow-500 to-orange-400": "from-yellow-600 to-orange-500",
  };

  const selectedColor = colorClasses[color] || colorClasses.orange;
  const selectedGradient =
    gradientClasses[gradient] || gradientClasses["from-orange-500 to-transparent"];

  return (
    <div className="w-full h-full flex flex-col group p-1 sm:p-2 md:p-3 lg:p-4">
      <div className="border-2 border-orange-500 hover:border-orange-800 transition-all duration-300 rounded-2xl p-4 sm:p-5 flex-1 flex flex-col bg-white shadow-md">

        {/* Image Container with fixed responsive height */}
        <div className="w-full h-[180px] sm:h-[190px] md:h-[210px] items-center justify-center flex rounded-xl overflow-hidden mb-4 shrink-0 relative bg-slate-100">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-all duration-300 line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-3">
            {description}
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-4 border-t-2  border-orange-600">
            {isMobile ? (
              <>
                <Link
                  href={`/${slug}`}
                  className="group/btn flex-1 min-w-[120px] inline-flex items-center justify-center ring-1 ring-orange-500 gap-1.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 transition-all duration-300 hover:shadow-lg active:scale-95"
                  aria-label={`View details for ${title}`}
                >
                  <span className="whitespace-nowrap">Details</span>
                  <ArrowRightCircle
                    size={18}
                    fill="black"
                    color="white"
                    className="transition-transform duration-700 group-hover/btn:translate-x-1"
                  />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 active:scale-95"
                  aria-label={`WhatsApp for ${title} service`}
                >
                  <Whatsapp className="w-5 h-5 text-white" />
                  <span className="whitespace-nowrap text-white">Whatsapp</span>
                </a>
              </>
            ) : (
              // Desktop: Details link + Book Now + WhatsApp icon
              <>
                <Link href={`/${slug}`} className="group/link flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-sky-600 transition-colors">
                  Details
                  <ArrowRightCircle size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>

                <div className="flex items-center ml-auto gap-24  ">
                  <Link
                    href={`/book?service=${slug}`}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:scale-95`}
                    aria-label={`Book ${title} service`}
                  >
                    <Icons.BookOpen />
                    {/* <span>Book</span> */}
                  </Link>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                    aria-label={`WhatsApp for ${title} service`}
                  >
                    <Whatsapp className="w-5 h-5 text-white" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
