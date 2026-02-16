const gaugeData = [
        { label: "Cooling Efficiency", value: 87, color: "var(--accent-cyan)", status: "Good" },
        { label: "Air Quality Index", value: 72, color: "#22c55e", status: "Moderate" },
        { label: "Filter Condition", value: 34, color: "var(--accent-orange)", status: "Replace Soon" },
        { label: "Coolant Level", value: 91, color: "var(--accent-cyan)", status: "Optimal" },
];

function GaugeBar({ label, value, color, status, delay }) {
        return (
                <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                                <span className="text-[var(--text-secondary)] font-medium">{label}</span>
                                <span
                                        className="font-bold"
                                        style={{ color }}
                                >
                                        {value}%
                                </span>
                        </div>
                        <div className="h-2 rounded-full bg-[var(--bg-secondary)] overflow-hidden">
                                <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                                width: `${value}%`,
                                                background: `linear-gradient(90deg, ${color}, ${color}dd)`,
                                                boxShadow: `0 0 8px ${color}40`,
                                                animationDelay: `${delay}ms`,
                                        }}
                                />
                        </div>
                        <div className="flex items-center gap-1.5">
                                <span
                                        className="h-1.5 w-1.5 rounded-full"
                                        style={{ background: color }}
                                />
                                <span className="text-xs text-[var(--text-muted)]">{status}</span>
                        </div>
                </div>
        );
}

export default function HealthReport() {
        return (
                <section id="health" className="relative py-24 px-6">
                        <div className="mx-auto max-w-6xl">
                                {/* Section Header */}
                                <div className="mb-16 text-center reveal-section">
                                        <span className="inline-block rounded-full border border-[var(--accent-cyan)]/20 bg-[var(--accent-cyan-dim)] px-4 py-1.5 text-xs font-medium text-[var(--accent-cyan)] uppercase tracking-wider mb-4">
                                                Diagnostic Report
                                        </span>
                                        <h2 className="text-[var(--text-primary)] mb-4">
                                                Digital AC{" "}
                                                <span className="text-[var(--accent-cyan)]">Health Check</span>
                                        </h2>
                                        <p className="mx-auto max-w-xl text-[var(--text-secondary)]">
                                                Get a comprehensive diagnostic report with real-time monitoring of your AC system&apos;s vital metrics.
                                        </p>
                                </div>

                                {/* Report Card */}
                                <div className="grid gap-6 lg:grid-cols-5 reveal-section">
                                        {/* Left: Report Visual */}
                                        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 glow-cyan lg:col-span-3">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-8">
                                                        <div className="flex items-center gap-3">
                                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-cyan-dim)]">
                                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                                        </svg>
                                                                </div>
                                                                <div>
                                                                        <h3 className="text-base font-semibold text-[var(--text-primary)]">
                                                                                System Health Report
                                                                        </h3>
                                                                        <p className="text-xs text-[var(--text-muted)]">
                                                                                Last scanned: Today, 2:45 PM
                                                                        </p>
                                                                </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">
                                                                <span className="h-2 w-2 rounded-full bg-green-500 animate-live-pulse" />
                                                                <span className="text-xs font-medium text-green-400">Live</span>
                                                        </div>
                                                </div>

                                                {/* Overall Score Ring */}
                                                <div className="flex flex-col items-center mb-8 sm:flex-row sm:items-start sm:gap-8">
                                                        <div className="relative flex-shrink-0 mb-6 sm:mb-0">
                                                                <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
                                                                        {/* Background ring */}
                                                                        <circle cx="70" cy="70" r="58" fill="none" stroke="var(--bg-secondary)" strokeWidth="10" />
                                                                        {/* Score ring */}
                                                                        <circle
                                                                                cx="70"
                                                                                cy="70"
                                                                                r="58"
                                                                                fill="none"
                                                                                stroke="var(--accent-cyan)"
                                                                                strokeWidth="10"
                                                                                strokeDasharray={`${71 * 3.64} ${100 * 3.64}`}
                                                                                strokeLinecap="round"
                                                                                style={{
                                                                                        filter: "drop-shadow(0 0 6px rgba(0,240,255,0.4))",
                                                                                }}
                                                                        />
                                                                </svg>
                                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                                        <span className="text-3xl font-bold text-[var(--text-primary)]">71</span>
                                                                        <span className="text-xs text-[var(--text-muted)]">Overall</span>
                                                                </div>
                                                        </div>

                                                        {/* Gauges */}
                                                        <div className="flex-1 w-full space-y-5">
                                                                {gaugeData.map((gauge, i) => (
                                                                        <GaugeBar key={gauge.label} {...gauge} delay={i * 200} />
                                                                ))}
                                                        </div>
                                                </div>

                                                {/* Recommendations */}
                                                <div className="rounded-xl bg-[var(--bg-secondary)] p-4">
                                                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                                                        <line x1="12" y1="9" x2="12" y2="13" />
                                                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                                                </svg>
                                                                Recommendations
                                                        </h4>
                                                        <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                                                                <li className="flex items-start gap-2">
                                                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-orange)]" />
                                                                        Replace air filters within 2 weeks for optimal airflow
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-cyan)]" />
                                                                        Schedule deep cleaning to improve air quality index
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                                                                        Coolant levels are optimal — no refill needed
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>

                                        {/* Right: Stats Cards */}
                                        <div className="flex flex-col gap-4 lg:col-span-2">
                                                {[
                                                        { label: "Energy Saved", value: "23%", sub: "vs. last month", icon: "⚡", color: "var(--accent-cyan)" },
                                                        { label: "Uptime", value: "99.2%", sub: "This quarter", icon: "📡", color: "#22c55e" },
                                                        { label: "Next Service", value: "14 Days", sub: "Feb 28, 2026", icon: "🔧", color: "var(--accent-orange)" },
                                                        { label: "Lifetime Savings", value: "AED 2,400", sub: "Since first service", icon: "💰", color: "var(--accent-cyan)" },
                                                ].map((stat) => (
                                                        <div
                                                                key={stat.label}
                                                                className="glass rounded-2xl p-5 transition-all duration-300 hover:border-[var(--accent-cyan)]/30"
                                                        >
                                                                <div className="flex items-center gap-4">
                                                                        <span className="text-2xl">{stat.icon}</span>
                                                                        <div>
                                                                                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                                                                                        {stat.value}
                                                                                </p>
                                                                                <p className="text-sm text-[var(--text-secondary)]">
                                                                                        {stat.label}
                                                                                </p>
                                                                                <p className="text-xs text-[var(--text-muted)]">
                                                                                        {stat.sub}
                                                                                </p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
