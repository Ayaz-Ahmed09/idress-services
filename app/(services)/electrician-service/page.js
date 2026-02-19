import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BrandsSection from "@/components/modules/BrandsSection";
import { HeroSplit } from "@/components/modules/HeroSplit";
import { ProblemGrid } from "@/components/modules/ProblemGrid";
import ServiceFAQSection from "@/components/modules/ServiceFAQSection";
import { ServiceProcess } from "@/components/modules/ServiceProcess";
import { StickyMobileNav } from "@/components/modules/StickyMobileNav";
import SubServicesSection from "@/components/modules/SubServicesSection";
import { TrustBar } from "@/components/modules/TrustBar";
import ServicesForm from "@/components/ui/ServicesForm";
import { services } from "@/data/services";

export const metadata = {
  title: "Emergency Electrician Dubai | Short Circuit & Wiring Fix",
  description:
    "Certified electricians in Dubai for emergency repairs. We fix tripping breakers, short circuits, socket replacement, and lighting.",
  alternates: {
    canonical: "/electrician-service",
  },
};

const serviceData = services["electrician-service"];

export default function ElectricianPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="Electrical Emergency?"
          subtitle="Power tripping? Short circuit? Our certified electricians are 30 minutes away."
          serviceName="Electrician Services"
          features={[
            "Short Circuit Fix",
            "Socket Replacement",
            "Light Installation",
          ]}
        />

        <TrustBar />

        <ProblemGrid
          title="Electrical Services"
          problems={[
            {
              title: "Power Tripping",
              desc: "Breaker keeps tripping? We find the short circuit and fix it.",
              icon: null,
            },
            {
              title: "Socket Repair",
              desc: "Burnt or loose wall sockets replaced safely.",
              icon: null,
            },
            {
              title: "Light Installation",
              desc: "Hanging chandeliers, spotlights, and LED strip lights.",
              icon: null,
            },
            {
              title: "Distribution Box",
              desc: "DB dressing and breaker replacement for safety.",
              icon: null,
            },
            {
              title: "Water Heater Fix",
              desc: "No hot water? We fix heater elements and switches.",
              icon: null,
            },
            {
              title: "Emergency Wiring",
              desc: "Burnt wiring replacement and load balancing.",
              icon: null,
            },
          ]}
        />

        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="electrician-service"
          serviceTitle="Electrician Service"
          gradient="from-yellow-500 to-orange-400"
        />

        <ServiceProcess />

        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-yellow-500 to-orange-400"
        />

        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="Electrician Service"
        />

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your Electrical Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill in the form below and we&apos;ll get back to you within 30
                minutes
              </p>
            </div>
            <ServicesForm />
          </div>
        </section>

        <StickyMobileNav />
      </main>
      <Footer />
    </>
  );
}
