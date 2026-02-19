const footerLinks = {
  services: [
    { label: "AC Repair", href: "#services" },
    { label: "AC Installation", href: "#services" },
    { label: "Deep Cleaning", href: "#services" },
    { label: "Maintenance", href: "#services" },
    { label: "Emergency Service", href: "#services" },
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
      className="relative border-t border-[var(--border-glass)]"
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-orange)] p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-[var(--bg-primary)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-lg font-bold">
                <span className="text-[var(--text-primary)]">Precision</span>
                <span className="text-[var(--accent-cyan)]">AC</span>
              </span>
            </a>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-xs">
              Industrial-grade AC repair, diagnostics, and maintenance services
              for residential and commercial properties across Dubai.
            </p>
            {/* Contact */}
            <div className="space-y-3">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
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
                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
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
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.areas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-[var(--text-muted)]">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Get maintenance tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-secondary)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent-cyan)]"
                aria-label="Email address"
              />
              <button className="flex-shrink-0 rounded-xl bg-[var(--accent-cyan)] px-4 py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/25">
                Join
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "Facebook", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--accent-cyan)]/30 hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-dim)]"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-glass)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 PrecisionAC. All rights reserved. Licensed & Insured in UAE.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
            <a
              href="#"
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
