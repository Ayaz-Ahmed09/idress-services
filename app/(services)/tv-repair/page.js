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
  title: "TV Repair Dubai | LED, LCD & Smart TV Screen Fix",
  description:
    "Pro TV repair in Dubai for all brands (Sony, Samsung, LG). We fix broken screens, sound issues, power problems, and motherboard faults.",
  alternates: {
    canonical: "/tv-repair",
  },
};

const serviceData = services["tv-repair"];

export default function TvRepairPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="TV Screen / Power Issues?"
          subtitle="Black screen? No Sound? We fix LED, OLED, & Smart TVs in your home or pick-up & delivery."
          serviceName="TV Repair"
          features={[
            "Screen Replacement",
            "Motherboard Repair",
            "Original Parts",
          ]}
        />

        <TrustBar />

        <ProblemGrid
          title="Common TV Problems"
          problems={[
            {
              title: "Broken Screen",
              desc: "Cracked or shattered LED/OLED panel replacement.",
              icon: null,
            },
            {
              title: "No Picture / Sound",
              desc: "TV turns on but no image or audio? Logic board issue.",
              icon: null,
            },
            {
              title: "Power Issues",
              desc: "TV won't turn on or keeps restarting? Power supply fix.",
              icon: null,
            },
            {
              title: "Lines on Screen",
              desc: "Vertical or horizontal lines? Panel or T-Con board fault.",
              icon: null,
            },
            {
              title: "WiFi Not Connecting",
              desc: "Smart TV features not working? Module repair.",
              icon: null,
            },
            {
              title: "HDMI Port Broken",
              desc: "Cannot connect gaming console or STB? Port replacement.",
              icon: null,
            },
          ]}
        />

        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="tv-repair"
          serviceTitle="TV Repair"
          gradient="from-purple-500 to-pink-400"
        />

        <ServiceProcess />

        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-purple-500 to-pink-400"
        />

        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="TV Repair"
        />

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your TV Service
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
