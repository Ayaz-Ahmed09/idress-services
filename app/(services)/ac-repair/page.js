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
  title: "AC Repair Dubai | Emergency Air Conditioning Filling & Fix",
  description:
    "Fastest AC repair in Dubai. 24/7 service for split, central, and window ACs. Gas refill, leak repair, and maintenance with warranty.",
  alternates: {
    canonical: "/ac-repair",
  },
};

const serviceData = services["ac-repair"];

export default function AcRepairPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="AC Not Cooling?"
          subtitle="We fix AC breakdowns, leaks, and cooling issues in 60 minutes. Certified troubleshooting experts."
          serviceName="AC Repair"
          features={[
            "24/7 Emergency Fix",
            "Gas Refill Specialists",
            "30-Day Warranty",
          ]}
        />

        <TrustBar />

        <ProblemGrid
          title="What's Wrong With Your AC?"
          problems={[
            {
              title: "Not Cooling",
              desc: "AC running but blowing warm air? We fix gas leaks and compressors.",
              icon: null,
            },
            {
              title: "Water Leakage",
              desc: "Water dripping from your unit? Blocked drains or frozen coils fixed fast.",
              icon: null,
            },
            {
              title: "Loud Noise",
              desc: "Grinding or squealing sounds? Motor bearings or fan issues resolved.",
              icon: null,
            },
            {
              title: "Bad Smell",
              desc: "Musty odors? We perform deep chemical cleaning for mold and bacteria.",
              icon: null,
            },
            {
              title: "High Bills",
              desc: "Unexpected jump in energy costs? Optimization and cleaning saves money.",
              icon: null,
            },
            {
              title: "General Service",
              desc: "Routine maintenance to prevent breakdown during summer peaks.",
              icon: null,
            },
          ]}
        />

        {/* Sub-services Section - Using the reusable component */}
        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="ac-repair"
          serviceTitle="AC Repair"
          gradient="from-blue-500 to-cyan-400"
        />

        <ServiceProcess />

        {/* Brands Section */}
        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-blue-500 to-cyan-400"
        />

        {/* Service FAQ */}
        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="AC Repair"
        />

        {/* Booking Form */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your AC Service
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
