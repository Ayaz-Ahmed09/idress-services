
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
export const metadata = generateServiceMetadata("tv-repair");

/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("tv-repair");

/* ─── Page-specific data ─── */
const serviceData = services["tv-repair"];

const tvTestimonials = [
  {
    name: "Khalid M.",
    role: "Home Theater Enthusiast",
    content:
      "My Samsung 65-inch OLED had a black screen issue. The technician diagnosed a faulty T-Con board and replaced it on-site. Picture quality is flawless again!",
    rating: 5,
  },
  {
    name: "Deepa S.",
    role: "Apartment Resident",
    content:
      "Our Sony TV wasn't turning on at all. They fixed the power supply board within 2 hours and the cost was very reasonable.",
    rating: 5,
  },
  {
    name: "Mohammed H.",
    role: "Villa Owner",
    content:
      "Needed a wall mount installed for our new 75-inch LG TV. Clean wiring, perfect alignment, and they even helped with the sound bar setup.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    role: "Office Manager",
    content:
      "Our conference room Smart TV kept losing WiFi. They updated the firmware and replaced the WiFi module. Works perfectly now.",
    rating: 4,
  },
  {
    name: "Raj P.",
    role: "Gaming Enthusiast",
    content:
      "HDMI port was damaged on my gaming TV. They soldered a new port and saved me from buying a new TV. Highly recommend!",
    rating: 5,
  },
];

export default function TvRepairPage () {
  return (
    <>
      {/* JSON-LD Structured Data */ }


      {/* <Navbar /> */ }
      <main className="min-h-screen bg-dark">
        {/* ─── h1 lives here ─── */ }
        <HeroSplit
          title="Professional TV Repair & Installation in Sharjah"
          subtitle="LED, LCD, OLED or Smart TV — we fix black screens, no power, sound issues, and broken displays at your doorstep. All brands serviced."
          serviceName="TV Repair in Sharjah & Dubai"
          heroImage="/tv-repair/tv-hero.png"
          features={ [
            "Screen Replacement Experts",
            "Motherboard & PCB Repair",
            "Wall Mount Installation",
          ] }
          issueOptions={ [
            "Black Screen / No Display",
            "No Power / Won't Turn On",
            "Sound Issue",
            "Screen Damage",
            "Wall Mount Installation",
            "HDMI / Port Issue",
            "Other",
          ] }
        />

        <TrustBar title="tv-repair" />

        {/* ─── h2: service catalog ─── */ }
        <SubServicesSection
          subServices={ serviceData.subServices || [] }
          serviceSlug="tv-repair"
          serviceTitle="TV Repair"
          sectionHeading="Comprehensive TV Repair Services We Offer"
          gradient="from-purple-500 to-pink-400"
        />

        {/* ─── h2: process / trust ─── */ }
        <ServiceProcess heading="Our TV Repair Process — Diagnosis to Delivery" />

        {/* ─── h2: FAQ signals ─── */ }
        <ServiceFAQSection
          title="tv-repair"
          heading="TV Repair FAQs — Your Questions Answered by Experts"
        />

        {/* ─── h4: booking CTA ─── */ }
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your TV Repair Appointment
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

        {/* ─── h2: social proof ─── */ }
        <Testimonials
          testimonials={ tvTestimonials }
          title="What Dubai Residents Say About Our TV Repair Service"
          subtitle="Real reviews from customers who trusted us with their TV repairs."
          className="mt-4"
        />

        {/* ─── h2: contact / conversion ─── */ }
        <ContactForm heading="Request a Free TV Repair Quote" />

        <StickyMobileNav />
      </main>
      {/* <Footer /> */ }
    </>
  );
}
