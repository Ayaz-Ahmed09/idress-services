
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
import { generateServiceMetadata, generateServiceJsonLd } from "@/lib/generateServiceMetadata";





/* ─── Metadata (Next.js Metadata API) ─── */
const baseMetadata = generateServiceMetadata("ac-repair", {
  title: "AC Repair Near You | Dubai",
  description: "Ac air conditioner repair in Dubai, ac repair near you in Dubai with 24/7 emergency support and same-day service across all Dubai areas.",
});
export const metadata = {
  ...(baseMetadata ?? {}),
  keywords: "AC repair, Dubai HVAC, emergency AC repair, gas refill, same-day service Dubai, AC maintenance Dubai",
};


/* ─── JSON-LD Structured Data ─── */
const jsonLd = generateServiceJsonLd("ac-repair");
// ensure JSON-LD description matches page metadata for ad relevance
if (jsonLd && Array.isArray(jsonLd["@graph"])) {
  const serviceNode = jsonLd["@graph"].find((n) => n["@type"] === "Service");
  if (serviceNode) serviceNode.description = metadata.description || serviceNode.description;
  const localNode = jsonLd["@graph"].find((n) => n["@type"] === "LocalBusiness");
  if (localNode) localNode.description = metadata.description || localNode.description;
}



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
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* <Navbar /> */}
      <main className="min-h-screen py-8 bg-white">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="AC Repair Near You in Dubai"
          secondaryHeading="Emergency AC Repair Near You in Dubai"
          subtitle="Quick AC fixing, gas refill, and same-day technician service anywhere in Dubai."
          serviceName="AC Repair"
          heroImage="/ac-repair/ac-installtion.webp"
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
          gradient="from-orange-500 to-cyan-400"
        />

        {/* ─── h2: SEO rich content ─── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
              Reliable AC Repair &amp; Air Conditioning Service in Dubai
            </h2>
            <p className="mb-4">
              When your cooling system breaks down in the middle of a Dubai summer, the first thing most people search for is <strong>AC repair near me</strong> or <strong>air conditioner repair near me</strong>. We built our company to be the fastest, most trustworthy answer to that search. Whether you need <strong>AC repair in Dubai</strong>, routine maintenance, or an emergency <strong>aircon repair in Dubai</strong>, our certified <strong>air conditioning technicians</strong> are stationed across every major community — so when you look for an <strong>AC service near me</strong>, a qualified expert is already close by.
            </p>
            <p className="mb-4">
              Our <strong>AC repair service</strong> covers every make and model, from split units and window air conditioners to central ducted systems and VRF installations. If your unit is blowing warm air, leaking water, making strange noises, or refusing to switch on, our team will diagnose and <strong>fix your air conditioner</strong> on the spot in most cases. Customers searching for <strong>aircon repair near me</strong>, <strong>AC fix</strong>, or <strong>air conditioner repair service near me</strong> choose us because we combine transparent pricing with a 30-day service warranty — a rare promise in the Dubai repair market.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Complete AC Repair and Service — From Gas Refill to Full Overhaul
            </h3>
            <p className="mb-4">
              A proper <strong>AC repair and service</strong> visit goes far beyond a quick look. Our technicians inspect refrigerant pressure, test the compressor and PCB boards, clean or replace filters, flush drain lines, and calibrate your thermostat. This is why customers who once searched <strong>fix air conditioner near me</strong> or <strong>repair air conditioner near me</strong> end up booking our full <strong>air conditioner service and repair</strong> packages instead. Every <strong>air repair service</strong> call includes a written report, so you always know exactly what was done and why.
            </p>
            <p className="mb-4">
              We also specialize in <strong>AC fixing in Dubai</strong> for landlords, property managers, and businesses. From villa communities in Arabian Ranches to offices in Business Bay, our <strong>air conditioning repair Dubai</strong> teams handle bulk and recurring contracts with dedicated account support. Looking for an <strong>air conditioning service near me</strong> or <strong>aircon service near me</strong> for a single apartment? We treat one-unit jobs with the same urgency as a fifty-unit portfolio.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              AC Maintenance in Dubai — Prevent Breakdowns Before They Happen
            </h3>
            <p className="mb-4">
              The cheapest repair is the one you never need. Our <strong>AC maintenance Dubai</strong> plans are designed around the reality of the UAE climate: fine dust, extreme heat, and near-constant summer usage. Regular <strong>air conditioner maintenance</strong> keeps energy bills low, improves indoor air quality, and can double the lifespan of your equipment. If you have been typing <strong>AC maintenance near me</strong> or <strong>air conditioner maintenance near me</strong> into Google, our scheduled <strong>air conditioning maintenance Dubai</strong> visits are exactly what you need.
            </p>
            <p className="mb-4">
              Our <strong>AC maintenance services Dubai</strong> include deep chemical cleaning, coil treatment, drain disinfection, and full-system diagnostics — real <strong>air conditioning unit maintenance</strong>, not just a filter rinse. Many customers find us through searches like <strong>aircon servicing</strong>, <strong>air con servicing</strong>, or <strong>AC service Dubai</strong>, and stay with us year after year because our <strong>aircon maintenance Dubai</strong> plans come with priority booking and discounted spare parts.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Why Dubai Chooses Us for AC Service &amp; Repair
            </h3>
            <p className="mb-4">
              Type <strong>AC repair Dubai near me</strong> and you will find hundreds of options — but very few combine certified technicians, genuine spare parts, a written warranty, and average response times under one hour. Our <strong>AC repair service near me</strong> coverage spans Downtown Dubai, Marina, JVC, Deira, Bur Dubai, Al Barsha, and every community in between. Whether you searched for <strong>AC service and repair</strong>, <strong>aircon repair service</strong>, or simply <strong>air cond repair</strong>, the result is the same: fast, honest, professional work at a fair price.
            </p>
            <p>
              Do not wait for a small issue to become a compressor failure. Book your <strong>air conditioner repair</strong> or <strong>AC service</strong> today and experience the difference a dedicated Dubai HVAC team makes. One call handles everything — diagnosis, <strong>AC fix</strong>, maintenance plan, and follow-up — so your home or business stays cool all year round.
            </p>
          </div>
        </section>

        {/* ─── h2: process / trust ─── */}
        <ServiceProcess heading="Our AC Repair Process — Fast & Transparent" />

        {/* ─── h2: FAQ signals ─── */}
        <ServiceFAQSection
          title="ac-repair"
          heading="AC Repair Questions & Expert Answers"
        />

        {/* ─── h4: booking CTA ─── */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
                Schedule Your AC Service Appointment
              </h4>
              <p className="text-orange-100 text-lg max-w-xl mx-auto">
                Fill in the form below and we&apos;ll get back to you within 30
                minutes
              </p>
              <Link
                href="/book"
                className="mt-8 inline-block px-8 py-3.5 bg-black text-orange-600 font-bold text-base rounded-xl shadow-xl hover:bg-orange-50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book Now
              </Link>
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
