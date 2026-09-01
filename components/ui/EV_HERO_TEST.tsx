"use client";

import { company } from "@/data/company-data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import evChargerImg from "@/public/hero1.jpeg";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.08 * i, duration: 0.7, ease: EASE },
  }),
} as const;

function BoltIcon(props: React.SVGProps<SVGSVGElement>)
{
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        className="fill-white"
        opacity="0.95"
      />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>)
{
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        className="fill-white"
        opacity="0.95"
      />
      <path
        d="M8.6 12.2 11 14.6l4.6-5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroEVCharger()
{
  return (
    <section className="relative mt-10 overflow-hidden py-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={evChargerImg}
          alt="EV charger installation under a bright sky"
          fill
          priority
          className="object-cover"
        />

        {/* Color grading for improved text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b from-sky-900/60 via-sky-900/40 to-sky-950/90 opacity-70 " />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(255,255,255,0.15),transparent_55%)]" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(600px 320px at 50% 30%, black 60%, transparent 100%)",
          }}
        />
      </div>


      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-8 sm:py-20 lg:px-10">
        <div className="grid w-full mt-10 lg:mt-16 grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_0_6px_rgba(125,211,252,0.18)]" />
              EV Charger Installation • Repair • Maintenance
            </motion.div>

            <h1
              style={{ color: "#ffffff" }}
              className="mt-6 font-extrabold text-5xl tracking-tight !text-white text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
            >
              Best EV Charger Installation in Dubai
            </h1>

            <motion.p
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-md sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              Looking for the best ev charger installtion in Dubai? We offer DEWA-approved services. Licensed technicians, dedicated circuits, 48-hour turnaround. Tesla, Level 2 & commercial charging units installed right the first time.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >


              <Link
                href={`tel:+${company.whatsapp}`}
                className="inline-flex items-center justify-center rounded-xl bg-sky-400 hover:bg-sky-300 px-6 py-3.5 text-sm font-semibold text-sky-950 shadow-[0_10px_30px_rgba(56,189,248,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:-translate-y-1"
              >
                Call Now
              </Link>

              <div className="text-xs text-white/70 sm:ml-2">
                Response in <span className="font-semibold text-white">under 24h</span>
              </div>
            </motion.div>

            {/* Mobile-only compact CTA (since the big card is hidden) */}
            <motion.div
              className="mt-8 lg:hidden"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-(--font-poppins) text-sm text-white">
                      Want an instant estimate?
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      View packages and recommended setups.
                    </div>
                  </div>
                  <span className="rounded-full bg-sky-300/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                    Quick
                  </span>
                </div>

              </div>
            </motion.div>

            {/* Trust points */}
            <motion.div
              className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/20 ring-1 ring-white/15">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Code-Compliant</div>
                    <div className="text-xs text-white/70">Permits & safety checks</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/20 ring-1 ring-white/15">
                    <BoltIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Fast Installs</div>
                    <div className="text-xs text-white/70">Clean, hidden cabling</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/20 ring-1 ring-white/15">
                    <span className="text-sm font-semibold text-white">24/7</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Repair Support</div>
                    <div className="text-xs text-white/70">Diagnostics & parts</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D glass panel (hidden on mobile) */}
          <motion.aside
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, y: 22, scale: 0.98, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
            whileHover={{ y: -10, rotateX: -6, rotateY: 6, scale: 1.01 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
          >
            <div className="relative">
              {/* shadow plane (makes it feel like it rises off the surface) */}
              <div className="pointer-events-none absolute -inset-x-6 -bottom-8 h-24 bg-[radial-gradient(closest-side,rgba(0,0,0,0.45),transparent)] blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-[0_30px_90px_rgba(2,132,199,0.22)]">
                {/* shine */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rotate-12 bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),transparent)]" />

                {/* inner content slightly “forward” */}
                <div style={{ transform: "translateZ(18px)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-poppins text-lg font-semibold text-white">
                        Get an instant estimate
                      </p>
                      <p className="mt-1 text-sm text-white/75">
                        Share your setup and we’ll recommend the right charger + install plan.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15">
                      EVSE Pros
                    </div>
                  </div>

                  <form action="https://api.web3forms.com/submit" method="POST" className="mt-6">
                    <input type="hidden" name="access_key" value="208242f1-579d-4570-8d51-1f8b7a9abfa4" />
                    <input type="hidden" name="subject" value="New EV Charger Estimate Request" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="name" placeholder="Name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400" />
                        <input type="tel" name="phone" placeholder="Phone" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/50 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400" />
                      </div>

                      <select name="property_type" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 [&>option]:text-slate-900">
                        <option value="" disabled>Home / Business</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential & Commercial">Residential & Commercial</option>
                      </select>

                      <select name="service_needed" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 [&>option]:text-slate-900">
                        <option value="" disabled>Services</option>
                        <option value="Install">Install</option>
                        <option value="Repair">Repair</option>
                        <option value="Upgrade">Upgrade</option>
                        <option value="Install • Repair • Upgrade">Install • Repair • Upgrade</option>
                      </select>

                      <select name="charger_type" required defaultValue="" className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 [&>option]:text-slate-900">
                        <option value="" disabled>Popular Chargers</option>
                        <option value="Level 2 (240V) Charger">Level 2 (240V) Charger</option>
                        <option value="Level 3 (DC Fast) Charger">Level 3 (DC Fast) Charger</option>
                        <option value="Tesla Wall Connector">Tesla Wall Connector</option>
                        <option value="Not Sure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Licensed electricians", "Surge protection", "Load balancing", "Warranty"].map(
                        (chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur"
                          >
                            {chip}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-sky-400/90 px-5 py-3 text-sm font-semibold text-sky-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        Get Instant Estimate
                      </button>
                      <p className="mt-3 text-center text-xs text-white/65">
                        Transparent pricing • No surprise add-ons
                      </p>
                    </div>
                  </form>
                </div>

                {/* subtle edge highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}