
import ScrollAnimations from "./components/ScrollAnimations";
import PremiumHero from "@/components/modules/PremiumHero";
import ServicesSection from "@/components/modules/ServicesSection";
import TrustBadges from "@/components/modules/TrustBadges";
import TrustSection from "@/components/modules/TrustSection";
import FAQSection from "@/components/modules/FAQSection";
import Testimonials from "@/components/modules/Services_test";
import ContactForm from "@/components/modules/Contact";


const homeTestimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner",
    content: "Excellent and fast service! My AC was fixed within an hour and it has been running perfectly since.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Business Owner",
    content: "Professional team. They installed our new CCTV system seamlessly. Highly recommended for commercial setups.",
    rating: 5,
  },
  {
    name: "Mohammed K.",
    role: "Resident",
    content: "Very transparent pricing and polite staff. They repaired my washing machine on the same day.",
    rating: 4,
  },
  {
    name: "Fatima Al Farsi",
    role: "Villa Owner",
    content: "Their electrical team rewired my entire house efficiently with absolutely no hidden charges. Great job!",
    rating: 5,
  },
  {
    name: "James D.",
    role: "Apartment Tenant",
    content: "Called them at 2 AM for an emergency. They arrived on time and sorted out the short circuit immediately.",
    rating: 5,
  },
];

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
      <main>
        <PremiumHero />
        <ServicesSection />
        <TrustBadges />
        <TrustSection />
        <Testimonials testimonials={homeTestimonials} />
        <FAQSection />
        <ContactForm />
      </main>
    </>
  );
}
