import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company-data";

const footerLinks = {
  services: [
    { label: "AC Repair", href: "/ac-repair" },
    // { label: "Refrigerator Repair", href: "/fridge-repair" },
    // { label: "TV Repair", href: "/tv-repair" },
    { label: "Painting Services", href: "/painting-services" },
    { label: "Electrician", href: "/electrician-service" },
    { label: "CCTV Installation", href: "/cctv-installation" },
  ],
  areas: [
    "Downtown Dubai",
    "Business Bay",
    "Marina",
    "JBR",
    "Palm Jumeirah",
    "JLT",
    "DIFC",
    "Silicon Oasis",
  ],
};


export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t-5 border-orange-600 bg-orange-50 text-slate-800"
    >
      {/* Top gradient */}
      {/* Background Glows */}
      {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-900 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" /> */}


      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1 text-center items-center justify-center">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className=" items-center justify-center rounded-lg p-px">
                <Image src="/logo-transparent.png" alt="Logo" width={200} height={200} className="fill" />
              </div>
            </Link>
            <div className="text-sm text-center content-center text-(--text-muted) font-bold  mb-6 ">
              {company.name}
            </div>
            {/* Contact */}
            <div className="space-y-3 flex flex-col items-center justify-center-safe text-center">
              <a
                href={`tel:+${company.whatsapp}`}
                className="flex items-center gap-2 text-sm text-(--text-secondary) hover:text-(--accent-cyan) transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-(--text-secondary) hover:text-(--accent-cyan) transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {company.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-(--text-primary) uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-(--text-muted) hover:text-(--text-primary) transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm text-center flex flex-col font-semibold text-(--text-primary) uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.areas.map((area) => (
                <li key={area} className="flex flex-col text-center">
                  <span className="text-sm text-(--text-muted) items-center justify-center">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-sm text-center font-semibold text-(--text-primary) uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-(--text-muted) mb-4">
              Get maintenance tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-(--border-glass) bg-(--bg-secondary) px-4 py-2.5 text-sm text-(--text-primary) placeholder-(--text-muted) outline-none transition-colors focus:border-(--accent-cyan)"
                aria-label="Email address"

              />
              <button className="shrink-0 rounded-xl bg-(--accent-cyan) px-4 py-2.5 text-sm font-semibold text-(--bg-primary) transition-all duration-300 hover:shadow-lg hover:shadow-(--accent-cyan)/25" >
                Join
              </button>
            </div>


          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-orange-600 pt-8 sm:flex-row">
          <p className="text-xs text-(--text-muted)">
            {company.address.city}, UAE
          </p>
          <div className="flex items-center gap-4 text-xs text-(--text-muted)">
            <p

              className="hover:text-(--text-secondary) transition-colors"
            >
              Licence No: {company.licenseNumber}
            </p>
            {/* <a
              href="#"
              className="hover:text-(--text-secondary) transition-colors"
            >
              Terms
            </a> */}
            <a
              href="/sitemap.xml"
              className="hover:text-(--text-secondary) transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
