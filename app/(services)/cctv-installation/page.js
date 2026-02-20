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
export const metadata = generateServiceMetadata("cctv-installation");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("cctv-installation");

/* ─── Page-specific data ─── */
const serviceData = services["cctv-installation"];

const cctvTestimonials = [
  {
    name: "Rashid A.",
    role: "Villa Owner",
    content:
      "They installed 8 Hikvision cameras around my villa with complete wiring concealment. The mobile app setup works perfectly — I can see everything from my office.",
    rating: 5,
  },
  {
    name: "Karen L.",
    role: "Retail Store Owner",
    content:
      "Upgraded our old analog system to IP cameras. Night vision is crystal clear and the DVR stores 30 days of footage. Very professional installation.",
    rating: 5,
  },
  {
    name: "Imran S.",
    role: "Office Manager",
    content:
      "Needed CCTV for our warehouse urgently. They came the next morning with all equipment and finished the 16-camera setup by evening. Impressive!",
    rating: 5,
  },
  {
    name: "Diana P.",
    role: "Apartment Resident",
    content:
      "Installed a WiFi camera at my front door with motion alerts on my phone. Simple, clean, and exactly what I needed. Great price too.",
    rating: 4,
  },
  {
    name: "Yousuf M.",
    role: "Restaurant Owner",
    content:
      "Their AMC service is excellent. They come quarterly for maintenance and any issues are resolved same-day. Reliable team!",
    rating: 5,
  },
];

export default function CctvPage() {
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
          title="Professional CCTV Installation & Security in Dubai"
          subtitle="Protect your home and business with HD/IP cameras, DVR/NVR setup, and 24/7 remote monitoring. Hikvision & Dahua certified installers."
          serviceName="CCTV Services"
          features={[
            "SIRA Certified Installers",
            "Mobile App Remote Viewing",
            "Free Site Survey & Quote",
          ]}
        />

        <TrustBar title="cctv-installation" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="cctv-installation"
          serviceTitle="CCTV Installation"
          sectionHeading="Security Camera Solutions for Home & Business"
          gradient="from-red-500 to-rose-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="CCTV Installation Process — Survey to Go-Live" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="cctv-installation"
          heading="CCTV & Security Camera Questions Answered"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Your Free CCTV Site Survey
              </h4>
              <p className="text-gray-400">
                Fill in the form below and we&apos;ll schedule a free survey
                within 24 hours
              </p>
              <button className="mt-4 px-3 py-2 bg-gray-500/50 backdrop-blur-sm outline-1 border-2 border-sky-500">
                <Link href="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

        {/* ─── h2: social proof ─── */}
        <Testimonials
          testimonials={cctvTestimonials}
          title="CCTV Installation Reviews From Dubai Customers"
          subtitle="See what our customers say about their security camera installations."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Request a Free Security Camera Consultation" />

        <StickyMobileNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}
