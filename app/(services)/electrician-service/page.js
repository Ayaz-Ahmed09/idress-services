
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

export default async function ElectricianPage() {


  return (
    <>
      {/* JSON-LD Structured Data */}



      <main className="min-h-screen bg-white">
        {/* ─── h1 lives here ─── */}
        <HeroSplit
          title="Electrician Near You - Fast & Affordable 24/7"
          subtitle=" Emergency electrician available near you
          Same-day service – Call now ."
          serviceName="Electrician Services"
          heroImage="/electricen.jpeg"
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


        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="electrician-service"
          serviceTitle="Electrician Service"
          sectionHeading="Full-Range Electrical Services for Dubai Properties"
          gradient="from-yellow-500 to-orange-400"
        />


        <ServiceProcess heading="Our Electrical Service Process — Safe & Certified" />


        <ServiceFAQSection
          title="electrician-service"
          heading="Electrical Service Questions & Expert Guidance"
        />


        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-md">
                Book a Certified Electrician Now
              </h4>
              <p className="text-orange-100 text-lg max-w-xl mx-auto">
                Fill in the form below and we&apos;ll dispatch an electrician
                within 30 minutes
              </p>
              <Link
                href="/book"
                className="mt-8 inline-block px-8 py-3.5 bg-black  text-orange-600 font-bold text-base rounded-xl shadow-xl hover:bg-orange-50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>


        <Testimonials
          testimonials={electricianTestimonials}
          title="Verified Electrician Service Reviews in Dubai"
          subtitle="Hear from homeowners and businesses who rely on our electrical expertise."
          className="mt-4"
        />


        <ContactForm heading="Request a Free Electrical Consultation" />

        <StickyMobileNav />
      </main>

    </>
  );
}
