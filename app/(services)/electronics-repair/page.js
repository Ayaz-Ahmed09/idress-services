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
  title: "Electronics Repair Dubai | Home Appliance Maintenance",
  description:
    "Expert repair for microwave, washing machine, dishwasher, and other home electronics in Dubai. Fast, reliable service.",
  alternates: {
    canonical: "/electronics-repair",
  },
};

const serviceData = services["electronics-repair"];

export default function ElectronicsRepairPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="Appliance Broken?"
          subtitle="Washing machine, microwave, or dishwasher issues? We fix all home electronics fast."
          serviceName="Electronics Repair"
          features={["Washing Machines", "Microwaves", "Dishwashers"]}
        />

        <TrustBar />

        <ProblemGrid
          title="Home Appliances We Fix"
          problems={[
            {
              title: "Washing Machine",
              desc: "Not draining, spinning, or starting? Drum and motor repair.",
              icon: null,
            },
            {
              title: "Microwave Oven",
              desc: "Not heating or sparking? Magnetron and plate motor fix.",
              icon: null,
            },
            {
              title: "Dishwasher",
              desc: "Leaking water or not cleaning dishes? Pump and spray arm repair.",
              icon: null,
            },
            {
              title: "Cooking Range",
              desc: "Burner not lighting or oven not heating? Gas and electric fix.",
              icon: null,
            },
            {
              title: "Dryer",
              desc: "Clothes not drying? Heating element and belt replacement.",
              icon: null,
            },
            {
              title: "Vacuum Cleaner",
              desc: "Low suction or motor noise? Filter and motor maintenance.",
              icon: null,
            },
          ]}
        />

        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="electronics-repair"
          serviceTitle="Electronics Repair"
          gradient="from-orange-500 to-amber-400"
        />

        <ServiceProcess />

        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-orange-500 to-amber-400"
        />

        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="Electronics Repair"
        />

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your Appliance Service
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
