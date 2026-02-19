const brands = [
  "Samsung",
  "LG",
  "Daikin",
  "Carrier",
  "Mitsubishi",
  "Trane",
  "Samsung",
  "LG",
  "Daikin",
  "Carrier",
  "Mitsubishi",
  "Trane",
];

const services = [
  {
    title: "AC Installation",
    description: "Professional setup for split, cassette, and ducted systems",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-cyan)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled inspections to extend AC lifespan by 40%",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-cyan)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    description: "Anti-bacterial deep clean for healthier indoor air quality",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-cyan)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center reveal-section">
          <span className="inline-block rounded-full border border-[var(--accent-cyan)]/20 bg-[var(--accent-cyan-dim)] px-4 py-1.5 text-xs font-medium text-[var(--accent-cyan)] uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Engineering-Grade{" "}
            <span className="text-[var(--accent-cyan)]">AC Solutions</span>
          </h2>
          <p className="mx-auto max-w-xl text-[var(--text-secondary)]">
            From emergency repairs to industrial chiller maintenance — precision
            diagnostics for every cooling system.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] reveal-section">
          {/* Card A — Technician Tracking (Large / Spans 2 cols on lg) */}
          <div className="group relative overflow-hidden rounded-2xl glass p-6 lg:col-span-2 lg:row-span-2 transition-all duration-500 hover:border-[var(--accent-cyan)]/30">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-cyan-dim)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Live Technician Tracking
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Real-time ETA on your service request
                  </p>
                </div>
              </div>

              {/* Map Mockup */}
              <div className="relative flex-1 min-h-[240px] rounded-xl bg-[var(--bg-secondary)] overflow-hidden md:min-h-[320px]">
                {/* Grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="40"
                      stroke="var(--accent-cyan)"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="0"
                      stroke="var(--accent-cyan)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Animated dots representing technicians */}
                <div className="absolute top-[25%] left-[30%] flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent-cyan)]" />
                  </span>
                  <span className="text-xs text-[var(--accent-cyan)] font-medium glass rounded-md px-2 py-0.5">
                    Tech #1 — 8 min away
                  </span>
                </div>
                <div className="absolute top-[55%] left-[60%] flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-orange)] opacity-75"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent-orange)]" />
                  </span>
                  <span className="text-xs text-[var(--accent-orange)] font-medium glass rounded-md px-2 py-0.5">
                    Tech #2 — On-site
                  </span>
                </div>
                <div className="absolute top-[75%] left-[20%] flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                      style={{ animationDelay: "1s" }}
                    />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs text-green-400 font-medium glass rounded-md px-2 py-0.5">
                    Tech #3 — Available
                  </span>
                </div>

                {/* Route line */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120,80 Q200,150 280,200"
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card B — Brand Marquee */}
          <div className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-[var(--accent-cyan)]/30">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              All Brands Covered
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Certified for 50+ AC manufacturers
            </p>

            {/* Marquee */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--bg-card)] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--bg-card)] to-transparent z-10" />
              <div className="flex animate-marquee whitespace-nowrap py-3">
                {brands.map((brand, i) => (
                  <span
                    key={`${brand}-${i}`}
                    className="mx-4 inline-flex items-center justify-center rounded-lg bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-dim)] grayscale hover:grayscale-0 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card C — 24/7 Emergency */}
          <div
            className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-[var(--accent-orange)]/30"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,95,31,0.08), rgba(26,26,46,0.6))",
              border: "1px solid rgba(255,95,31,0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-orange-dim)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-orange)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18.36 5.64a9 9 0 1 1-12.73 0M12 2v10" />
                  </svg>
                </div>
                {/* Pulsing live indicator */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-orange)] opacity-75 animate-live-pulse" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-[var(--accent-orange)]" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                  24/7 Emergency Repair
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">
                  Rapid response within 30 minutes for critical breakdowns
                </p>
                <a
                  href="tel:+971501234567"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-orange)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-orange)]/25 hover:scale-105"
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
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Additional Service Cards */}
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-[var(--accent-cyan)]/30 hover:bg-[var(--accent-cyan-dim)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-cyan-dim)] mb-4 transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
