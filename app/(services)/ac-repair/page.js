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
export const metadata = generateServiceMetadata("ac-repair");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("ac-repair");

/* ─── Page-specific data ─── */
const serviceData = services["ac-repair"];

const acTestimonials = [
  {
    name: "John Davis",
    role: "Resident",
    content:
      "My AC completely stopped cooling during the weekend. These guys came within 45 minutes and fixed the gas leak. Super fast!",
    rating: 5,
  },
  {
    name: "Aisha M.",
    role: "Villa Owner",
    content:
      "Affordable and transparent pricing for their AC maintenance service. My central AC runs so much quieter now.",
    rating: 5,
  },
  {
    name: "Omar Tariq",
    role: "Restaurant Manager",
    content:
      "We had a major breakdown of our dining area AC. The emergency response team saved our weekend rush.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Apartment Tenant",
    content:
      "Very clean work! They didn't leave any mess after the chemical wash of my split AC.",
    rating: 4,
  },
  {
    name: "David Smith",
    role: "Homeowner",
    content:
      "Their technicians are highly knowledgeable. Explained the compressor issue clearly before starting the repair.",
    rating: 5,
  },
];

export default function AcRepairPage() {
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
          title="Expert AC Repair & Service in Dubai"
          subtitle="We fix AC breakdowns, gas leaks, and cooling issues in 60 minutes flat. Certified HVAC technicians with same-day response across Dubai."
          serviceName="AC Repair"
          heroImage="/Ac-hero.png"
          features={[
            "24/7 Emergency AC Fix",
            "Gas Refill Specialists",
            "30-Day Service Warranty",
          ]}
          issueOptions={[
            "Not Cooling / Heating",
            "Gas Leakage / Refill",
            "Water Leakage",
            "Noise Issue",
            "AC Installation",
            "AC Cleaning / Service",
            "Other",
          ]}
        />

        <TrustBar title="ac-repair" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          id="#services"
          subServices={serviceData.subServices || []}
          serviceSlug="ac-repair"
          serviceTitle="AC Repair"
          sectionHeading="Professional AC Repair Solutions We Offer"
          gradient="from-blue-500 to-cyan-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="Our AC Repair Process — Fast & Transparent" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="ac-repair"
          heading="AC Repair Questions & Expert Answers"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your AC Service Appointment
              </h4>
              <p className="text-gray-400">
                Fill in the form below and we&apos;ll get back to you within 30
                minutes
              </p>
              <button className="mt-4 px-3 py-2 bg-gray-500/50 backdrop-blur-sm outline-1 border-2 border-sky-500">
                <Link href="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

        {/* ─── h2: social proof ─── */}
        <Testimonials
          testimonials={acTestimonials}
          title="Verified AC Repair Reviews From Dubai Customers"
          subtitle="Real reviews from people who trusted us with their cooling needs."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Request a Free AC Repair Consultation" />

        <StickyMobileNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}
