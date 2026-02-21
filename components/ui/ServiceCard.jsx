"use client";


import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 group-hover:border-blue-500/60",
    red: "from-red-500/20 to-orange-500/20 border-red-500/30 group-hover:border-red-500/60",
    purple:
      "from-purple-500/20 to-pink-500/20 border-purple-500/30 group-hover:border-purple-500/60",
    green:
      "from-green-500/20 to-emerald-500/20 border-green-500/30 group-hover:border-green-500/60",
    amber:
      "from-amber-500/20 to-yellow-500/20 border-amber-500/30 group-hover:border-amber-500/60",
    indigo:
      "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 group-hover:border-indigo-500/60",
    teal: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 group-hover:border-teal-500/60",
    orange:
      "from-orange-500/20 to-amber-500/20 border-orange-500/30 group-hover:border-orange-500/60",
    yellow:
      "from-yellow-500/20 to-orange-500/20 border-yellow-500/30 group-hover:border-yellow-500/60",
  };

  const gradientClasses = {
    "from-blue-500 to-cyan-400": "from-blue-600 to-cyan-500",
    "from-red-500 to-orange-400": "from-red-600 to-orange-500",
    "from-purple-500 to-pink-400": "from-purple-600 to-pink-500",
    "from-green-500 to-emerald-400": "from-green-600 to-emerald-500",
    "from-amber-500 to-yellow-400": "from-amber-600 to-yellow-500",
    "from-indigo-500 to-blue-400": "from-indigo-600 to-blue-500",
    "from-teal-500 to-emerald-400": "from-teal-600 to-emerald-500",
    "from-orange-500 to-amber-400": "from-orange-600 to-amber-500",
    "from-yellow-500 to-orange-400": "from-yellow-600 to-orange-500",
  };

  const selectedColor = colorClasses[color] || colorClasses.blue;
  const selectedGradient =
    gradientClasses[gradient] || gradientClasses["from-blue-500 to-cyan-400"];

  return (
    <div className="w-full h-full flex flex-col group">

      {/* Background Image using Next Image */}


      <div className="p-6 flex-1 flex flex-col">
        {/* Icon and Emergency Badge */}

        <div className="border-2 border-orange-500/50 rounded-lg p-5 flex-1 flex flex-col">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="  opacity-80 group-hover:opacity-100 mb-2 transition-all duration-500 group-hover:scale-90"
          />


          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 content-center box-content dark:text-gray-300 text-md leading-relaxed mb-6 grow">
            {description}
          </p>

          {/* Buttons Container */}
          <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-orange-500/50">
            {isMobile ? (
              <>
                <Link
                  href={`/${slug}`}
                  className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300  hover:shadow-lg active:scale-95"
                  aria-label={`View details for ${title}`}
                >
                  Details
                  <ArrowRightCircle
                    size={18}
                    fill="black"
                    color="white"
                    className="transition-transform duration-700 group-hover/btn:translate-x-2"
                  />

                </Link>
                <a
                  href="tel:0557864636"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 bg-linear-to-r from-green-600 to-emerald-500 hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
                  aria-label={`Call for ${title} service`}
                >
                  <Icons.Phone />
                </a>
              </>
            ) : (
              // Desktop: Call button + Book Now
              <>
                <Link href={`/${slug}`}>
                  <div className="flex items-center gap-2">
                    Details
                    <ArrowRightCircle />
                  </div>
                </Link>

                <Link
                  href={`/book?service=${slug}`}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 bg-linear-to-r ${selectedGradient} hover:shadow-lg active:scale-95`}
                  aria-label={`Book ${title} service`}
                >
                  <Icons.BookOpen />
                  <span>Book</span>
                </Link>
              </>
            )}

            {/* WhatsApp button for both mobile and desktop */}
            <a
              href="https://wa.me/0557864636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 active:scale-95"
              aria-label={`WhatsApp for ${title} service`}
            >
              <Icons.MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}
