"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageKitImage } from "./ImageKitImage";

function CardSkeleton() {
        return (
                <div className="w-full h-full bg-gray-800 animate-pulse" />
        );
}

export function SubServicesSectionIK({
        subServices,
        serviceSlug,
        serviceTitle,
        sectionHeading,
}) {
        const [isMobile, setIsMobile] = useState(false);
        const [imagesLoaded, setImagesLoaded] = useState({});
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
                setMounted(true);
                const checkMobile = () => setIsMobile(window.innerWidth < 768);
                checkMobile();
                window.addEventListener("resize", checkMobile);
                return () => window.removeEventListener("resize", checkMobile);
        }, []);

        const handleImageLoad = (id) => {
                setImagesLoaded((prev) => ({ ...prev, [id]: true }));
        };

        return (
                <section
                        className="relative py-20 md:py-32 px-6 bg-gray-950"
                        id="sub-services"
                >
                        <div className="max-w-7xl mx-auto">
                                {/* Section Header */}
                                <div className="text-center mb-16 md:mb-20">
                                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full text-gray-300 bg-gray-800">
                                                Professional Solutions
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                                {sectionHeading || `Our ${serviceTitle} Services`}
                                        </h2>
                                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                                Comprehensive solutions tailored to your needs. Expert technicians
                                                with transparent pricing and guaranteed satisfaction.
                                        </p>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {subServices.map((subService) => {
                                                const loaded = imagesLoaded[subService.id];

                                                return (
                                                        <div
                                                                key={subService.id}
                                                                className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gray-900"
                                                        >
                                                                {/* ── IMAGE ZONE ── fixed height, image fills it */}
                                                                <div className="relative w-full h-56 shrink-0 bg-gray-800">
                                                                        {!loaded && <CardSkeleton />}

                                                                        {subService.image && (
                                                                                <ImageKitImage
                                                                                        src={subService.image}
                                                                                        alt={subService.title}
                                                                                        fill
                                                                                        className={`object-cover object-center transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                                                                                                }`}
                                                                                        onLoad={() => handleImageLoad(subService.id)}
                                                                                />
                                                                        )}
                                                                </div>

                                                                {/* ── CONTENT ZONE ── sits below image, never overlaps */}
                                                                <div className="flex flex-col flex-1 gap-3 p-6 md:p-7 bg-gray-900">
                                                                        {/* Title */}
                                                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                                                                {subService.title}
                                                                        </h3>

                                                                        {/* Description */}
                                                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                                                                {subService.description}
                                                                        </p>

                                                                        {/* Details row */}
                                                                        <div className="flex items-center gap-3 text-xs text-gray-400 py-2.5 border-t border-b border-gray-700">
                                                                                <span className="font-medium">{subService.estimatedTime}</span>
                                                                                <span className="w-px h-3 bg-gray-600" aria-hidden="true" />
                                                                                <span>Free diagnosis</span>
                                                                        </div>

                                                                        {/* Keywords SEO hidden */}
                                                                        <div className="sr-only">
                                                                                {subService.keywords?.slice(0, 3).map((keyword) => (
                                                                                        <span key={keyword}>{keyword}</span>
                                                                                ))}
                                                                        </div>

                                                                        {/* ── CTA BUTTONS — pushed to bottom of card ── */}
                                                                        <div className="flex gap-2.5 pt-1 mt-auto">
                                                                                <a
                                                                                        href="https://wa.me/0557864636"
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-green-500 hover:bg-green-600 border border-green-500 transition-all duration-300 active:scale-95"
                                                                                >
                                                                                        WhatsApp
                                                                                </a>

                                                                                {mounted && isMobile ? (
                                                                                        <a
                                                                                                href="tel:0557864636"
                                                                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gray-700 hover:bg-gray-600 border border-gray-600 transition-all duration-300 active:scale-95"
                                                                                        >
                                                                                                Call Now
                                                                                        </a>
                                                                                ) : (
                                                                                        <Link
                                                                                                href={`/book?service=${serviceSlug}&subService=${subService.id}`}
                                                                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 active:scale-95"
                                                                                        >
                                                                                                Book Now
                                                                                        </Link>
                                                                                )}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-16 text-center">
                                        <p className="text-gray-400 mb-6">
                                                Can&apos;t find what you&apos;re looking for? We handle all types of{" "}
                                                {serviceTitle.toLowerCase()} issues.
                                        </p>
                                        <a
                                                href="tel:0557864636"
                                                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        >
                                                Call for Custom Quote
                                        </a>
                                </div>
                        </div>
                </section>
        );
}
