import { HeroSplit } from "@/components/modules/HeroSplit";
import { ServiceProcess } from "@/components/modules/ServiceProcess";
import { StickyMobileNav } from "@/components/modules/StickyMobileNav";
import SubServicesSection from "@/components/modules/SubServicesSection";
import { TrustBar } from "@/components/modules/TrustBar";
import ServiceFAQSection from "@/components/modules/ServiceFAQSection";
import Testimonials from "@/components/modules/Services_test";
import ContactForm from "@/components/modules/Contact";
import { services } from "@/data/services";
import Link from "next/link";
import {
  generateServiceMetadata,
  generateServiceJsonLd,
} from "@/lib/generateServiceMetadata";



/* ─── Metadata (Next.js Metadata API) ─── */
export const metadata = generateServiceMetadata("painting-services");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("painting-services");

/* ─── Page-specific data ─── */
const serviceData = services["painting-services"];

const paintingTestimonials = [
  {
    name: "Tariq Al Hashimi",
    role: "Villa Owner in Palm Jumeirah",
    content:
      "We hired them to repaint our 5-bedroom villa exterior and interior. Flawless surface prep, zero paint splatters on floors, and completed ahead of schedule. Outstanding Jotun paint finish!",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Commercial Property Manager",
    content:
      "Repainted our 3-floor office space over the weekend. Their team worked overnight so our business experienced zero downtime. Highly professional commercial painters.",
    rating: 5,
  },
  {
    name: "Omar Mansoor",
    role: "Apartment Tenant in Marina",
    content:
      "Needed a move-out paint job for tenancy handover. They filled all wall holes, color-matched the original paint, and helped me get my full deposit back. Exceptional service!",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Interior Designer",
    content:
      "Their team created a stunning Venetian plaster feature wall in our living room. Their decorative painting skills are top tier in Dubai.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "Restaurant Owner in DIFC",
    content:
      "Epoxy floor coating in our commercial kitchen and dining wall repaint. High heat resistance and washable paint finish. Very satisfied with the outcome.",
    rating: 4,
  },
];

export default function PaintingServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* <Navbar /> */}
      <main className="min-h-screen bg-white">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="Professional Painting Services (Commercial & Villas) in Dubai"
          subtitle="Transform your villa, commercial office, or apartment with Dubai's premier painting specialists. Spotless preparation, Jotun washable paints, and licensed painters."
          serviceName="Painting Services"
          heroImage="/painting/apartment-painting.webp"
          features={[
            "Premium Jotun & Caparol Paints",
            "100% Furniture & Floor Covering",
            "Licensed Villa & Commercial Painters",
          ]}
          issueOptions={[
            "Villa Interior Painting",
            "Villa Exterior Weatherproof Paint",
            "Commercial Office Painting",
            "Move-Out Apartment Handover Paint",
            "Decorative Feature Wall Painting",
            "Epoxy Floor Coating",
            "Other Painting Project",
          ]}
        />

        <TrustBar title="painting-services" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          subServices={serviceData?.subServices || []}
          serviceSlug="painting-services"
          serviceTitle="Painting Services"
          sectionHeading="Commercial & Residential Painting Solutions Across Dubai"
          gradient="from-orange-500 to-amber-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="How We Paint Your Space — Spotless & Guaranteed" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="painting-services"
          heading="Painting Services FAQs — Common Questions Answered"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
                Schedule Your Painting Service Today
              </h4>
              <p className="text-orange-100 text-lg max-w-xl mx-auto">
                Fill in the form below and we&apos;ll get back to you within 30
                minutes
              </p>
              <Link
                href="/book"
                className="mt-8 inline-block px-8 py-3.5 bg-white text-orange-600 font-bold text-base rounded-xl shadow-xl hover:bg-orange-50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* ─── h2: social proof ─── */}
        <Testimonials
          testimonials={paintingTestimonials}
          title="Dubai Customers Trust Our Painting Service"
          subtitle="Genuine reviews from homeowners and businesses we've helped."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Get a Free Painting Service Estimate" />

        <StickyMobileNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}
