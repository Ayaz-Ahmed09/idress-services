import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";
import PremiumHero from "@/components/modules/PremiumHero";
import ServicesSection from "@/components/modules/ServicesSection";
import TrustSection from "@/components/modules/TrustSection";
import FAQSection from "@/components/modules/FAQSection";

export const metadata = {
  title:
    "Professional Home Services | AC Repair, Electronics, CCTV, Electrician | Same-Day Service",
  description:
    "Expert home services including AC repair, electronics repair, CCTV installation, and electrical services. 24/7 emergency support, 90-day warranty, 50,000+ satisfied customers.",
  keywords:
    "AC repair, electronics repair, CCTV installation, electrician service, home services, same-day service",
  openGraph: {
    title: "Professional Home Services | AC Repair & More",
    description:
      "Same-day service for AC repair, electronics, CCTV, and electrical needs. 30+ years experience, certified technicians.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <PremiumHero />
        <ServicesSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
