import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
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
export const metadata = generateServiceMetadata("electrician-service");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("electrician-service");

/* ─── Page-specific data ─── */
const serviceData = services["electrician-service"];

const electricianTestimonials = [
  {
    name: "Oliver T.",
    role: "Villa Owner",
    content:
      "Short circuit tripped our entire DB box at midnight. They arrived in 40 minutes and identified the faulty wire. Emergency service at its best!",
    rating: 5,
  },
  {
    name: "Huda S.",
    role: "Interior Designer",
    content:
      "Hired them for chandelier installation in a client's villa. Perfect alignment, neat wiring, and they matched the dimmer switch perfectly. Very skilled team.",
    rating: 5,
  },
  {
    name: "Mark D.",
    role: "Apartment Resident",
    content:
      "Multiple sockets in my apartment were sparking. They replaced all the faulty ones with Legrand switches and the whole job took under 2 hours.",
    rating: 5,
  },
  {
    name: "Amira F.",
    role: "Shop Owner",
    content:
      "Complete rewiring of my shop and new DB dressing. They managed to do it over the weekend so we didn't lose any business. Professional and on time.",
    rating: 4,
  },
  {
    name: "Chen W.",
    role: "Homeowner",
    content:
      "Installed LED recessed lights, exhaust fans, and a video doorbell in one visit. Clean work. The electrician explained everything properly before starting.",
    rating: 5,
  },
];

export default function ElectricianPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* <Navbar /> */}
      <main className="min-h-screen bg-dark">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="Licensed Electrician Services in Dubai — 24/7"
          subtitle="Short circuit? Power tripping? Need new wiring? Our certified electricians fix all electrical issues safely and fast across Dubai."
          serviceName="Electrician Services"
          heroImage="/electricen-hero.webp"
          features={[
            "24/7 Emergency Response",
            "Licensed & Certified Pros",
            "Safety-First Approach",
          ]}
          issueOptions={[
            "Short Circuit / Tripping",
            "Wiring & Rewiring",
            "Switch & Socket Repair",
            "Light Installation",
            "DB Box / Breaker Issue",
            "New Electrical Fitting",
            "Other",
          ]}
        />

        <TrustBar title="electrician-service" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="electrician-service"
          serviceTitle="Electrician Service"
          sectionHeading="Full-Range Electrical Services for Dubai Properties"
          gradient="from-yellow-500 to-orange-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="Our Electrical Service Process — Safe & Certified" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="electrician-service"
          heading="Electrical Service Questions & Expert Guidance"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book a Certified Electrician Now
              </h4>
              <p className="text-gray-400">
                Fill in the form below and we&apos;ll dispatch an electrician
                within 30 minutes
              </p>
              <button className="mt-4 px-3 py-2 bg-gray-500/50 backdrop-blur-sm outline-1 border-2 border-sky-500">
                <Link href="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

        {/* ─── h2: social proof ─── */}
        <Testimonials
          testimonials={electricianTestimonials}
          title="Verified Electrician Service Reviews in Dubai"
          subtitle="Hear from homeowners and businesses who rely on our electrical expertise."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Request a Free Electrical Consultation" />

        <StickyMobileNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}
