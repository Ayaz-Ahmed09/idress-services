import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "AC Repair", href: "/ac-repair" },
    { label: "Refrigerator Repair", href: "/fridge-repair" },
    { label: "TV Repair", href: "/tv-repair" },
    { label: "Washing Machine Repair", href: "/electronics-repair" },
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
      className="relative border-t border-(--border-glass)"
    >
      {/* Top gradient */}
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-900 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />


      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1 text-center items-center justify-center">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <div className="flex   items-center justify-center rounded-lg bg-linear-to-br from-(--accent-cyan) to-(--accent-orange) p-[1px]">
                <Image src="/3d-logo.png" alt="Logo" width={400} height={300} />
              </div>
              {/* <div className="bg-linear-to-r from-tranparent via-cyan-500 to-transparent  h-2" /> */}
            </Link>
            <p className="text-sm text-center content-center text-(--text-muted)  mb-6 ">
              Industrial-grade Repair, diagnostics, and maintenance services
              for residential and commercial properties across Dubai
            </p>
            {/* Contact */}
            <div className="space-y-3 flex flex-col items-center justify-center-safe text-center">
              <a
                href="tel:+971501234567"
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
                +971 50 123 4567
              </a>
              <a
                href="mailto:repairs@precisionac.ae"
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
                repairs@precisionac.ae
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
              <button className="shrink-0 rounded-xl bg-(--accent-cyan) px-4 py-2.5 text-sm font-semibold text-(--bg-primary) transition-all duration-300 hover:shadow-lg hover:shadow-(--accent-cyan)/25">
                Join
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "Facebook", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border-glass) text-(--text-muted) transition-all duration-200 hover:border-(--accent-cyan)/30 hover:text-(--accent-cyan) hover:bg-[var(--accent-cyan-dim)]"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--border-glass) pt-8 sm:flex-row">
          <p className="text-xs text-(--text-muted)">
            © 2026 PrecisionAC. All rights reserved. Licensed & Insured in UAE.
          </p>
          <div className="flex items-center gap-4 text-xs text-(--text-muted)">
            <a
              href="#"
              className="hover:text-(--text-secondary) transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-(--text-secondary) transition-colors"
            >
              Terms
            </a>
            <a
              href="/sitemap"
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
