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
  title: "CCTV Installation Dubai | Security Camera Repair & Setup",
  description:
    "Professional CCTV installation for home and office. Hikvision, Dahua certified installers. Remote viewing setup and maintenance.",
  alternates: {
    canonical: "/cctv-installation",
  },
};

const serviceData = services["cctv-installation"];

export default function CctvPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <HeroSplit
          title="Secure Your Property"
          subtitle="Professional CCTV installation and maintenance for homes and offices in Dubai. Remote viewing on mobile."
          serviceName="CCTV Services"
          features={["Hikvision/Dahua", "Mobile Access", "SIRA Certified"]}
        />

        <TrustBar />

        <ProblemGrid
          title="CCTV Solutions"
          problems={[
            {
              title: "New Installation",
              desc: "Complete 4/8/16 channel camera systems for home & office.",
              icon: null,
            },
            {
              title: "Camera Offline",
              desc: "No signal or black screen? We fix wiring and DVR issues.",
              icon: null,
            },
            {
              title: "Mobile Setup",
              desc: "Watch your cameras from anywhere on your smartphone.",
              icon: null,
            },
            {
              title: "DVR/NVR Repair",
              desc: "Hard drive failure or recording issues resolved.",
              icon: null,
            },
            {
              title: "Cable Management",
              desc: "Neat and concealed wiring for a professional look.",
              icon: null,
            },
            {
              title: "Upgrade System",
              desc: "Replace old analog cameras with high-res IP cameras.",
              icon: null,
            },
          ]}
        />

        <SubServicesSection
          subServices={serviceData.subServices || []}
          serviceSlug="cctv-installation"
          serviceTitle="CCTV Installation"
          gradient="from-red-500 to-rose-400"
        />

        <ServiceProcess />

        <BrandsSection
          brands={serviceData.brands || []}
          gradient="from-red-500 to-rose-400"
        />

        <ServiceFAQSection
          faqs={serviceData.faqs || []}
          serviceTitle="CCTV Installation"
        />

        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Book Your CCTV Service
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
