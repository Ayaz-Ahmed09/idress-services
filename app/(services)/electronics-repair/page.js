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
export const metadata = generateServiceMetadata("electronics-repair");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("electronics-repair");

/* ─── Page-specific data ─── */
const serviceData = services["electronics-repair"];

const electronicsTestimonials = [
  {
    name: "Nora B.",
    role: "Homeowner",
    content:
      "My washing machine was leaking badly. The technician came the same day, replaced the pump, and it's working perfectly. Very clean work!",
    rating: 5,
  },
  {
    name: "Hassan D.",
    role: "Villa Owner",
    content:
      "Our microwave stopped heating. They replaced the magnetron and tested everything thoroughly. Fast service and fair pricing.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Apartment Resident",
    content:
      "RO water purifier membrane change was done quickly. They also cleaned the filters and sanitized the system. Very thorough.",
    rating: 5,
  },
  {
    name: "Ali K.",
    role: "Business Owner",
    content:
      "Our office dishwasher wasn't draining. Fixed within an hour with genuine parts. Will definitely use them again.",
    rating: 4,
  },
  {
    name: "Priya M.",
    role: "Tenant",
    content:
      "Geyser wasn't heating at all. Turned out to be a thermostat issue. Replaced quickly and even installed a safety valve. Great service!",
    rating: 5,
  },
];

export default function ElectronicsRepairPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="min-h-screen bg-dark">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="Home Appliance & Electronics Repair in Dubai"
          subtitle="Washing machine, microwave, water purifier, or geyser broken? Our expert technicians repair all home electronics at your doorstep with genuine parts."
          serviceName="Electronics Repair"
          features={[
            "All Major Brands Covered",
            "Genuine Spare Parts",
            "Same-Day Service Available",
          ]}
        />

        <TrustBar title="electronics-repair" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="electronics-repair"
          serviceTitle="Electronics Repair"
          sectionHeading="Home Appliance Repair Solutions Across Dubai"
          gradient="from-orange-500 to-amber-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="How We Repair Your Appliances — Hassle-Free" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="electronics-repair"
          heading="Appliance Repair FAQs — Common Questions Answered"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Appliance Repair Today
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
          testimonials={electronicsTestimonials}
          title="Dubai Customers Trust Our Appliance Repair Service"
          subtitle="Genuine reviews from homeowners and businesses we've helped."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Get a Free Appliance Repair Estimate" />

        <StickyMobileNav />
      </main>
      <Footer />
    </>
  );
}
