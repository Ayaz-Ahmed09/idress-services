import {
  generateServiceMetadata,
  generateServiceJsonLd,
} from "@/lib/generateServiceMetadata";
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

export const metadata = generateServiceMetadata("ev-charging");
const jsonLd = generateServiceJsonLd("ev-charging");

export default function EvCharger()
{
        return (
                <>
                  {jsonLd && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                  )}
                <main className="min-h-screen  text-gray-900 selection:bg-cyan-500/30 ">
                        <ScrollToTop />
                        <Preloader />
                        <HeroEVCharger/>
                        {/* <Hero /> */}
                        {/* <Hero/> */}
                        <LogoTicker />
                        <Services />

                        {/* ─── SEO rich content: unique guide-style copy ─── */}
                        <section className="py-16 md:py-24 bg-white">
                          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
                              Your Complete Guide to EV Charger Installation in Dubai
                            </h2>
                            <p className="mb-4">
                              Owning an electric vehicle in Dubai is only half the story — having a reliable place to charge it is what makes the ownership experience effortless. Whether you drive a Tesla, a BYD, an Audi e-tron, or any other EV, a professional <strong>EV charger installation in Dubai</strong> transforms how you use your car. Instead of planning trips around public charging stations, a dedicated home or workplace charger means you wake up every morning to a full battery.
                            </p>
                            <p className="mb-4">
                              But <strong>electric vehicle charging installation</strong> is not a DIY weekend project. It involves load calculations, DEWA-compliant wiring, proper earthing, and circuit protection sized for continuous high-amperage draw. A poorly installed charger does not just charge slowly — it can overheat cables, trip your main breaker, or void your vehicle warranty. That is why hiring certified professionals for your <strong>EV charger installation</strong> is the only safe option.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                              Choosing the Right Electric Car Charger for Home Use
                            </h3>
                            <p className="mb-4">
                              When selecting an <strong>electric car charger for home</strong>, the first decision is charging speed. A standard wall socket trickle-charges at roughly 2.3 kW — meaning an overnight charge might give you barely 100 km of range. A dedicated Level 2 wall charger, by contrast, delivers 7 kW to 22 kW depending on your property&apos;s electrical capacity, giving you a full charge in 3 to 8 hours. For most Dubai villas and apartments with adequate supply, an 11 kW unit offers the best balance of speed and electrical load.
                            </p>
                            <p className="mb-4">
                              Our team helps you assess your property&apos;s panel capacity, parking layout, and daily driving habits before recommending hardware. When you decide to <strong>install an electric car charger at home</strong>, we handle the entire process: site survey, load management planning, cabling through walls or underground conduit, charger mounting, and final testing. <strong>Installing a home electric car charger</strong> with us typically takes one day, and we leave your property cleaner than we found it.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                              Tesla Charger Installation — Done to Factory Standards
                            </h3>
                            <p className="mb-4">
                              Tesla owners have specific needs. <strong>Tesla charger installation</strong> requires familiarity with the Tesla Wall Connector&apos;s configuration, Wi-Fi setup, and load-sharing features. Many general electricians can mount the unit, but <strong>installing a Tesla charger</strong> correctly means configuring dip-switches for your exact amperage supply, pairing it with the Tesla app, and ensuring firmware updates flow through properly. A botched <strong>Tesla charge installation</strong> can leave you with a charger that underperforms or throws constant error codes.
                            </p>
                            <p className="mb-4">
                              Our technicians have completed dozens of Tesla Wall Connector setups across Dubai&apos;s villas and apartment buildings. We also handle the approvals side — whether your building requires a No Objection Certificate from the owners&apos; association or DEWA load approval, we prepare the documentation so your <strong>EV home charge install</strong> moves forward without delays.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                              What to Expect From a Professional EV Charge Installation
                            </h3>
                            <p className="mb-4">
                              Every <strong>EV charge installation</strong> we complete follows the same rigorous process. First, we conduct a free site assessment — measuring the distance from your distribution board to the parking spot, checking available breaker capacity, and identifying the safest cable route. Then we install a dedicated circuit with its own breaker and RCD protection, run cable in conduit rated for garage and outdoor conditions, and mount the charger at an ergonomic height with tidy cable management.
                            </p>
                            <p className="mb-4">
                              Finally, we test everything under load, walk you through the app or RFID setup, and hand over an installation certificate. Many customers ask about <strong>installing an electric car charging point</strong> in older buildings where the electrical supply is limited — in those cases, we install smart load-balancing systems that dynamically adjust charging speed based on your home&apos;s real-time power usage, so you never overload the main supply.
                            </p>
                            <p>
                              From a single <strong>EV charger installation home</strong> setup to multi-bay commercial charging for offices and retail parks, our Dubai team covers it all. Transparent quotes, certified hardware from brands like Tesla, ABB, Schneider, and Wallbox, and ongoing maintenance support — that is what a proper EV charging partner looks like. Get in touch today for a free site survey and take the fastest route to convenient, safe home charging.
                            </p>
                          </div>
                        </section>

                        <WhyUs />
                        <AboutSection />
                        <Testimonials />
                        <FAQ />
                        <ContactForm />
                        <StickyMobileNav />

                </main>
    </>
  );
}