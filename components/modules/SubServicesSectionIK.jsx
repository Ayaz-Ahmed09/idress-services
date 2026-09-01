"use client";

import { company } from "@/data/company-data";
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
                        className="relative py-20 md:py-32 px-6 bg-white overflow-hidden"
                        id="sub-services"
                >
                        {/* Background Glow Elements */}
                        <div className="absolute inset-0 pointer-events-none -z-10">
                                <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
                                <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
                        </div>

                        <div className="max-w-7xl mx-auto">
                                {/* Section Header */}
                                <div className="text-center mb-16 md:mb-20">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 mb-6">
                                                <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75" />
                                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
                                                </span>
                                                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                                                        Professional Solutions
                                                </span>
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                                {sectionHeading || `Our ${serviceTitle} Services`}
                                        </h2>
                                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                                                                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                                                        >
                                                                {/* ── IMAGE ZONE ── fixed height, image fills it */}
                                                                <div className="relative w-full h-56 shrink-0 bg-slate-100">
                                                                        {!loaded && <CardSkeleton />}

                                                                        {subService.image && (
                                                                                <ImageKitImage
                                                                                        src={subService.image}
                                                                                        alt={subService.title}
                                                                                        fill
                                                                                        className={`object-cover object-center transition-all duration-500 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"
                                                                                                }`}
                                                                                        onLoad={() => handleImageLoad(subService.id)}
                                                                                />
                                                                        )}
                                                                </div>

                                                                {/* ── CONTENT ZONE ── sits below image, never overlaps */}
                                                                <div className="flex flex-col flex-1 gap-3 p-6 md:p-7 bg-white">
                                                                        {/* Title */}
                                                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                                                                                {subService.title}
                                                                        </h3>

                                                                        {/* Description */}
                                                                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                                                                {subService.description}
                                                                        </p>

                                                                        {/* Details row */}
                                                                        <div className="flex items-center gap-3 text-xs text-slate-500 py-2.5 border-t border-b border-slate-100">
                                                                                <span className="font-medium">{subService.estimatedTime}</span>
                                                                                <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
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
                                                                                        href={`https://wa.me/${company.whatsapp}`}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-green-500 hover:bg-green-600 border border-green-500 transition-all duration-300 active:scale-95 shadow-sm"
                                                                                >
                                                                                        WhatsApp
                                                                                </a>

                                                                                {mounted && isMobile ? (
                                                                                        <a
                                                                                                href={`tel:+${company.whatsapp}`}
                                                                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-300 active:scale-95"
                                                                                        >
                                                                                                Call Now
                                                                                        </a>
                                                                                ) : (
                                                                                        <Link
                                                                                                href={`/book?service=${serviceSlug}&subService=${subService.id}`}
                                                                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-600 to-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95"
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
                                        <p className="text-slate-600 mb-6">
                                                Can&apos;t find what you&apos;re looking for? We handle all types of{" "}
                                                {serviceTitle.toLowerCase()} issues.
                                        </p>
                                        <a
                                                href={`tel:+${company.whatsapp}`}
                                                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                        >
                                                Call for Custom Quote
                                        </a>
                                </div>
                        </div>
                </section>
        );
}
