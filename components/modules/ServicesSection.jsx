"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { company } from "@/data/company-data";

export default function ServicesSection() {
  const servicesList = Object.values(services);

  return (
    <section
      className="relative py-20 px-6 md:py-32"
      id="services"
      aria-label="Our Services"
    >
      {/* Background Elements */}
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
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            All Services at Your Fingertips
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From air conditioning to electronics repair, we provide expert
            solutions for all your home and business needs. 24/7 emergency
            support available.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service) => (
            <div key={service.slug}>
              <ServiceCard
                slug={service.slug}
                title={service.title}
                icon={service.icon}
                image={service.image}
                color={service.color}
                gradient={service.gradient}
                description={service.metaDescription.substring(0, 120) + "..."}
                emergencyAvailable={service.emergencyAvailable}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-slate-600 mb-6">
            Can't find what you're looking for?
          </p>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-orange-500 to-red-700 text-black ring-white font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
          >
            Contact Support
            <svg
              width="18"
              height="18"
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
          </a>
        </div>
      </div>
    </section>
  );
}
