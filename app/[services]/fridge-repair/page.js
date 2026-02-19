import { services } from "@/data/services";
import ServiceHeroSection from "@/components/modules/ServiceHeroSection";
import SubServicesSection from "@/components/modules/SubServicesSection";
import BrandsSection from "@/components/modules/BrandsSection";
import ServiceFAQSection from "@/components/modules/ServiceFAQSection";
import ServiceBreadcrumb from "@/components/modules/ServiceBreadcrumb";
import Link from "next/link";

const serviceData = services["fridge-repair"];

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDescription,
  keywords:
    "Fridge repair, refrigerator service, same-day repair, emergency fridge repair, fridge installation",
  alternates: {
    canonical: "/fridge-repair",
  },
  openGraph: {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    type: "website",
    url: "/fridge-repair",
  },
};

export default function FridgeRepairPage() {
  const gradientClass = `from-red-600 to-orange-500`;

  return (
    <>
      <ServiceBreadcrumb serviceSlug="fridge-repair" />
      <main className="min-h-screen">
        <ServiceHeroSection service={serviceData} />

        <SubServicesSection
          subServices={serviceData.subServices}
          serviceSlug="fridge-repair"
          gradient={gradientClass}
        />

        <BrandsSection brands={serviceData.brands} gradient={gradientClass} />

        {/* Process Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Simple, transparent, and efficient service delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  number: "1",
                  title: "Book Service",
                  description:
                    "Select your date and time slot that works best for you",
                  icon: "📅",
                },
                {
                  number: "2",
                  title: "Free Diagnosis",
                  description:
                    "Our technician assesses the issue with no extra charge",
                  icon: "🔍",
                },
                {
                  number: "3",
                  title: "Expert Repair",
                  description:
                    "Professional repair with genuine parts and warranty",
                  icon: "🔧",
                },
                {
                  number: "4",
                  title: "Follow-up Support",
                  description:
                    "Complimentary support for 90 days after service",
                  icon: "✅",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 rounded-full bg-red-600 border-4 border-white dark:border-gray-950 text-white text-xs flex items-center justify-center font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQSection
          serviceFaqs={serviceData.faqs}
          gradient={gradientClass}
        />

        {/* CTA Banner */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-red-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fridge Not Working? We Fix It Fast!
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Our expert technicians are ready to repair your refrigerator
              quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book?service=fridge-repair"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-red-600 bg-white hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105"
              >
                Book Now - Same-Day Service
                <svg
                  className="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href="tel:0557864636"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                📞 Call: 055-7864636
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
