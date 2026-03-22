
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
export const metadata = generateServiceMetadata("fridge-repair");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("fridge-repair");

/* ─── Page-specific data ─── */
const serviceData = services["fridge-repair"];

const fridgeTestimonials = [
  {
    name: "Sarah K.",
    role: "Villa Owner",
    content:
      "Our Samsung fridge stopped cooling completely on a Friday night. They came within an hour and fixed the compressor. Absolute lifesavers!",
    rating: 5,
  },
  {
    name: "Ahmad R.",
    role: "Restaurant Owner",
    content:
      "We rely on our commercial fridges daily. Their team diagnosed the gas leak quickly and had it running perfectly the same day.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Apartment Resident",
    content:
      "My LG fridge was making terrible noises. The technician replaced the fan motor and it's been silent ever since. Very professional.",
    rating: 5,
  },
  {
    name: "James W.",
    role: "Homeowner",
    content:
      "Great experience — they fixed the ice buildup issue in my freezer and replaced the door seal. Fair pricing too.",
    rating: 4,
  },
  {
    name: "Fatima A.",
    role: "Villa Tenant",
    content:
      "Quick response, transparent pricing, and they cleaned up after themselves. My Bosch fridge works like new now.",
    rating: 5,
  },
];

export default function FridgeRepairPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* <Navbar /> */}
      <main className="min-h-screen backdrop-blur-lg">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="Expert Refrigerator Repair & Service in Dubai"
          subtitle="Fridge not cooling? Water leaking? Our certified technicians fix all refrigerator brands at your doorstep with same-day service and genuine parts."
          serviceName="Fridge Repair"
          heroImage="/fridge/fridge-1-1.png"
          features={[
            "Same-Day Doorstep Service",
            "Compressor & Gas Specialists",
            "90-Day Repair Warranty",
          ]}
          issueOptions={[
            "Not Cooling",
            "Water Leakage",
            "Compressor Issue",
            "Gas Refill",
            "Ice Build-up",
            "Noise Issue",
            "Other",
          ]}
        />

        <TrustBar title="fridge-repair" />

        {/* ─── h2: service catalog ─── */}
        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="fridge-repair"
          serviceTitle="Fridge Repair"
          sectionHeading="Complete Refrigerator Repair Services in Dubai"
          gradient="from-teal-500 to-emerald-400"
        />

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="How Our Fridge Repair Works — Simple & Reliable" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="fridge-repair"
          heading="Refrigerator Repair Questions & Expert Answers"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Fridge Repair Appointment
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
          testimonials={fridgeTestimonials}
          title="Trusted Refrigerator Repair Reviews From Dubai Residents"
          subtitle="Real feedback from customers who got their fridges fixed by our experts."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */}
        <ContactForm heading="Get a Free Fridge Repair Estimate" />

      </main>
      {/* <Footer /> */}
      <StickyMobileNav />

    </>
  );
}
