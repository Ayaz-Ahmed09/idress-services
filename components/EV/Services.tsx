"use client";

import { motion } from "motion/react";
import
{
  BatteryCharging,
  Wrench,
  Settings,
  MapPin,
  Building2,
  Zap,
  AlertTriangle,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import evChargerImg from "@/public/hero1.jpeg";
import evChargerImg2 from "@/public/Ev-2.png";
import evComImg from "@/public/Ev-Com.png";
import evChargerRepairImg from "@/public/EVChargerRepair.png";
import evChargerMaintenanceImg from "@/public/EVChargerMaintenance.png";
import evMoveImg from "@/public/ev-move.png";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
  image: StaticImageData;
  keywords: string[];
};

const services: Service[] = [
  {
    title: "Home EV Charger Installation",
    desc: "Stop relying on slow 3-pin plugs. We install dedicated, high-speed charging stations at home safely.",
    icon: BatteryCharging,
    image: evChargerImg2,
    keywords: ["install charging station at home", "car charger installation"],
  },
  {
    title: "Commercial EV Charger Installation",
    desc: "Attract high-value customers. Scalable level 2 charger installation for businesses and malls.",
    icon: Building2,
    image: evComImg,
    keywords: ["level 2 charger installation", "electric charger installation"],
  },
  {
    title: "Tesla Charger Installation",
    desc: "Don't void your warranty with uncertified electricians. Specialized Tesla wall connector setup.",
    icon: Zap,
    image: evChargerImg,
    keywords: ["tesla charger installation", "tesla charger installation near me"],
  },
  {
    title: "EV Charger Repair",
    desc: "Charger offline? Fast and reliable repair services for all major EV charging station brands.",
    icon: Wrench,
    image: evChargerRepairImg,
    keywords: ["ev charger repair"],
  },
  {
    title: "EV Charger Maintenance",
    desc: "Prevent electrical fires and downtime. Routine maintenance to ensure peak efficiency year-round.",
    icon: Settings,
    image: evChargerMaintenanceImg,
    keywords: ["ev charger maintenance"],
  },
  {
    title: "EV Charger Relocation",
    desc: "Moving? Safe relocation and rewiring of existing charging stations to new properties.",
    icon: MapPin,
    image: evMoveImg,
    keywords: ["ev charger relocation"],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number })
{
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group relative"
      style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
    >
      {/* Gradient stroke border (premium) */}
      <div className="relative rounded-3xl p-px bg-[conic-gradient(from_210deg,rgba(56,189,248,.75),rgba(59,130,246,.35),rgba(255,255,255,.7),rgba(56,189,248,.65))] shadow-[0_24px_70px_rgba(2,132,199,0.18)] transition-shadow duration-500 group-hover:shadow-[0_34px_90px_rgba(2,132,199,0.26)]">
        {/* Inner surface */}
        <div className="relative overflow-hidden rounded-3xl bg-white">
          {/* Subtle tech-y grid sheen */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(800px 300px at 20% 0%, rgba(56,189,248,0.20), transparent 55%), radial-gradient(700px 320px at 85% 20%, rgba(59,130,246,0.14), transparent 55%)",
            }}
          />

          {/* BIG image header */}
          <div className="relative">
            {/* give the image real height on mobile */}
            <div className="relative h-[240px] sm:h-[270px] lg:h-[230px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.06]"
                quality={92}
              />
              {/* cinematic readability overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
              {/* top chip */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                Certified EV Service
              </div>
            </div>
          </div>

          {/* Floating glass content panel (depth) */}
          <div className="relative -mt-10 px-4 pb-4 sm:px-5 sm:pb-5">
            <div className="rounded-2xl border border-black/5 bg-white/75 p-5 backdrop-blur-xl shadow-[0_18px_55px_rgba(15,23,42,0.14)]">
              <h3 className="font-heading text-lg font-bold sm:text-xl">
               <span className="text-blue-600">{service.title}</span> 
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                {service.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-600 transition-colors group-hover:border-sky-200 group-hover:text-sky-700"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://wa.me/971557864636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-green-500 to-green-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(34,197,94,0.28)] transition hover:brightness-[1.03] hover:shadow-[0_18px_55px_rgba(34,197,94,0.35)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <a
                  href="tel:+971557864636"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-sky-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.25)] transition hover:brightness-[1.03] hover:shadow-[0_18px_55px_rgba(37,99,235,0.32)]"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-24 bg-[radial-gradient(closest-side,rgba(56,189,248,0.18),transparent)]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services()
{
  return (
    <section id="services" className="relative bg-white py-16 sm:py-24 lg:py-32">
      {/* modern background aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-72 w-2xl -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -bottom-28 -right-40 h-72 w-176 rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-sky-700">
              <AlertTriangle className="h-3.5 w-3.5" />
              Stop Risking Your EV
            </div>

            <h2 className="text-3xl font-black  tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-blue-700">Professional EV Charger Installation Services</span> <br />
              <span className="text-gradient-electric">in Dubai.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-600 sm:text-base">
            Amateur installations lead to melted wires and voided vehicle warranties. We provide certified, industrial-grade EV solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}