export default function HeroSection() {
        return (
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
                        {/* Background Effects */}
                        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                                {/* Radial gradient */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,transparent_70%)]" />

                                {/* Animated cooling rings */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-[400px] h-[400px] rounded-full border border-[var(--accent-cyan)]/10 animate-pulse-ring md:w-[600px] md:h-[600px]" />
                                        <div className="absolute inset-8 rounded-full border border-[var(--accent-cyan)]/5 animate-pulse-ring" style={{ animationDelay: "1s" }} />
                                        <div className="absolute inset-16 rounded-full border border-[var(--accent-orange)]/5 animate-pulse-ring" style={{ animationDelay: "2s" }} />
                                </div>

                                {/* Circuit-board dots */}
                                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                                <circle cx="30" cy="30" r="1.5" fill="var(--accent-cyan)" />
                                                <line x1="30" y1="0" x2="30" y2="30" stroke="var(--accent-cyan)" strokeWidth="0.5" />
                                                <line x1="30" y1="30" x2="60" y2="30" stroke="var(--accent-cyan)" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#circuit)" />
                                </svg>

                                {/* Floating accent shapes */}
                                <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-float opacity-40" />
                                <div className="absolute bottom-32 left-[10%] w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)] animate-float opacity-30" style={{ animationDelay: "3s" }} />
                                <div className="absolute top-[40%] right-[8%] w-1 h-1 rounded-full bg-[var(--accent-cyan)] animate-float opacity-20" style={{ animationDelay: "1.5s" }} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mx-auto max-w-5xl text-center">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-cyan)]/20 bg-[var(--accent-cyan-dim)] px-4 py-1.5 mb-8">
                                        <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-75" />
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]" />
                                        </span>
                                        <span className="text-xs font-medium text-[var(--accent-cyan)] tracking-wide uppercase">
                                                24/7 Emergency Service Available
                                        </span>
                                </div>

                                {/* H1 */}
                                <h1 className="text-[var(--text-primary)] mb-6">
                                        Precision AC Repair{" "}
                                        <span className="text-glow-cyan text-[var(--accent-cyan)]">&</span>{" "}
                                        Diagnostics
                                        <br className="hidden sm:block" />
                                        <span className="text-[var(--text-secondary)]"> for All Brands</span>
                                </h1>

                                {/* Subtitle */}
                                <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)] mb-10 leading-relaxed md:text-xl">
                                        Expert HVAC technicians delivering industrial-grade diagnostics,
                                        maintenance, and emergency repairs across Dubai.
                                        <span className="text-[var(--text-muted)]">
                                                {" "}Samsung · LG · Daikin · Carrier · Mitsubishi · Trane
                                        </span>
                                </p>

                                {/* Diagnostic Search Bar */}
                                <div className="mx-auto max-w-xl mb-10">
                                        <div className="relative group">
                                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[var(--accent-cyan)]/30 to-[var(--accent-orange)]/30 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                                                <div className="relative glass rounded-2xl p-1 animate-glow-border">
                                                        <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-secondary)] px-5 py-4">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 opacity-60">
                                                                        <circle cx="11" cy="11" r="8" />
                                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                </svg>
                                                                <input
                                                                        type="text"
                                                                        placeholder="Tell us what's wrong with your AC..."
                                                                        className="w-full bg-transparent text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none"
                                                                        aria-label="Describe your AC issue"
                                                                />
                                                                <button className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] px-4 py-2 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/25">
                                                                        Diagnose
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                        <a
                                                href="#booking"
                                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] px-8 py-3.5 text-base font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent-cyan)]/25 hover:scale-105"
                                        >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                                Book a Technician
                                        </a>
                                        <a
                                                href="#health"
                                                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-glass)] px-8 py-3.5 text-base font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-cyan)]/40 hover:text-[var(--text-primary)] hover:bg-[var(--accent-cyan-dim)]"
                                        >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                </svg>
                                                Free Health Check
                                        </a>
                                </div>

                                {/* Trust indicators */}
                                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]">
                                        <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                </svg>
                                                Licensed & Insured
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                                4.9★ Rating
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                30-Min Response
                                        </div>
                                </div>
                        </div>

                        {/* Bottom gradient fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" aria-hidden="true" />
                </section>
        );
}
