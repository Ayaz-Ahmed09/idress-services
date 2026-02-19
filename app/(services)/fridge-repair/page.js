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
  title: "Fridge Repair Dubai | Same-Day Refrigerator & Freezer Fix",
  description:
    "Emergency fridge repair in Dubai. We fix cooling issues, compressors, gas leaks, and more for all major brands (Samsung, LG, Bosch).",
  alternates: {
    canonical: "/fridge-repair",
  },
};

const serviceData = services["fridge-repair"];

export default function FridgeRepairPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="Fridge Not Cooling?"
          subtitle="Save your food! Expert refrigerator repair service at your doorstep in under 60 minutes."
          serviceName="Fridge Repair"
          features={["Compressor Repair", "Gas Refilling", "Genuine Parts"]}
        />

        <TrustBar />

        <ProblemGrid
          title="Common Refrigerator Issues"
          problems={[
            {
              title: "Not Cooling",
              desc: "Fridge or freezer not getting cold enough? Compressor or thermostat issues.",
              icon: null,
            },
            {
              title: "Water Leakage",
              desc: "Water pooling on the floor? Clogged defrost drain or seal issues.",
              icon: null,
            },
            {
              title: "Strange Noises",
              desc: "Loud humming or buzzing? Fan motor or compressor struggling.",
              icon: null,
            },
            {
              title: "Ice Buildup",
              desc: "Too much ice in freezer? Defrost heater or timer failure.",
              icon: null,
            },
            {
              title: "Door Not Sealing",
              desc: "Gasket worn out? Energy bills rising due to air leaks.",
              icon: null,
            },
            {
              title: "Light Not Working",
              desc: "Bulb burnt out or switch failure? Quick fix available.",
              icon: null,
            },
          ]}
        />

        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="fridge-repair"
          serviceTitle="Fridge Repair"
          gradient="from-teal-500 to-emerald-400"
        />

        <ServiceProcess />

        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-teal-500 to-emerald-400"
        />

        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="Fridge Repair"
        />

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your Fridge Service
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
