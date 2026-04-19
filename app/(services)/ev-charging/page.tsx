// import { generatePageMetadata } from "@/lib/metadata";
// export const metadata = generatePageMetadata("/ev-charger");

import ContactForm from "@/components/modules/Contact";
import FAQ from "@/components/EV/FAQ";
import LogoTicker from "@/components/EV/LogoTicker";
import Preloader from "@/components/EV/Preloader";
import Testimonials from "@/components/EV/Testimonials";
import Services from "@/components/EV/Services";
import HeroEVCharger from "@/components/ui/EV_HERO_TEST";
import AboutSection from "@/components/EV/About";
import WhyUs from "@/components/EV/WhyUs";
import ScrollToTop from "@/components/ScrollToTop";
import { StickyMobileNav } from "@/components/modules/StickyMobileNav";
import Hero from "@/components/EV/Hero";






export default function EvCharger()
{
        return (
                <main className="min-h-screen  text-gray-900 selection:bg-cyan-500/30 ">
                        <ScrollToTop />
                        <Preloader />
                        <HeroEVCharger/>
                        {/* <Hero /> */}
                        {/* <Hero/> */}
                        <LogoTicker />
                        <Services />
                        <WhyUs />
                        <AboutSection />
                        <Testimonials />
                        <FAQ />
                        <ContactForm />
                        <StickyMobileNav />

                </main>
        );
}