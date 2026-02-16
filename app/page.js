import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import BookingFunnel from "./components/BookingFunnel";
import HealthReport from "./components/HealthReport";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <HeroSection />
        <BentoGrid />
        <BookingFunnel />
        <HealthReport />
      </main>
      <Footer />
    </>
  );
}
