"use client"
import React, { useState } from 'react'
import { ParallaxCard } from '@/components/ui/ParallaxCard'
export const dynamic = 'force-dynamic';

function FloatingParticles ({ count, color }) {
        const particles = Array.from({ length: count }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 1,
                opacity: Math.random() * 0.4 + 0.1,
                delay: Math.random() * 5,
        }));
        return (
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        { particles.map((p) => (
                                <div
                                        key={ p.id }
                                        className="absolute rounded-full animate-pulse"
                                        style={ {
                                                left: `${ p.x }%`,
                                                top: `${ p.y }%`,
                                                width: p.size,
                                                height: p.size,
                                                backgroundColor: color,
                                                opacity: p.opacity,
                                                animationDelay: `${ p.delay }s`,
                                                animationDuration: `${ 2 + Math.random() * 3 }s`,
                                        } }
                                />
                        )) }
                </div>
        );
}

function GeometricPattern ({ color }) {
        return (
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-[0.07]">
                        { Array.from({ length: 6 }, (_, i) => (
                                <div
                                        key={ i }
                                        className="absolute border rounded-full"
                                        style={ {
                                                borderColor: color,
                                                width: 60 + i * 40,
                                                height: 80 + i * 40,
                                                left: `${ 50 - (20 + i * 60) / 4 }%`,
                                                top: `${ 50 - (80 + i * 60) / 6 }%`,
                                        } }
                                />
                        )) }
                </div>
        );
}

/* ─── Counter animation hook ─── */
function useCountUp (target, duration = 2000) {
        const [count, setCount] = useState(0);
        const [started, setStarted] = useState(false);

        const start = () => {
                if (started) return;
                setStarted(true);
                const steps = 60;
                const increment = target / steps;
                let current = 0;
                const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                                setCount(target);
                                clearInterval(interval);
                        } else {
                                setCount(Math.floor(current));
                        }
                }, duration / steps);
        };

        return { count, start, started };
}

function StatCard ({ value, suffix, label, color }) {
        const { count, start } = useCountUp(value);

        return (
                <div
                        className="text-center group cursor-default"
                        onMouseEnter={ start }
                >
                        <div
                                className="text-4xl md:text-5xl font-black mb-2 transition-all duration-500"
                                style={ { color } }
                        >
                                { count }
                                <span className="text-2xl">{ suffix }</span>
                        </div>
                        <div className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">{ label }</div>
                </div>
        );
}

const AboutUs = () => {
        const services = [
                {
                        title: "AC Repair & Service",
                        description: "Expert AC installation, repair, and maintenance. We service all brands including split, central, and window units across Dubai.",
                        // lottieData: acAnim,
                        accentColor: "#4fd1c5",
                        gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 40%, #2c5364 100%)",
                        tag: "Most Popular",
                        tagColor: "bg-teal-500/20 text-teal-300 border-teal-400/30",
                        glowColor: "rgba(79,209,197,0.15)",
                        dotColor: "bg-teal-400",
                        numberLabel: "✦ 01",
                        numberColor: "text-teal-300/60",
                },
                {
                        title: "TV Repair & Setup",
                        description: "LCD, LED, OLED, and Smart TV repair services. Screen replacement, circuit board repair, and wall mounting installation.",
                        // lottieData: tvAnim,
                        accentColor: "#a78bfa",
                        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
                        tag: "All Brands",
                        tagColor: "bg-violet-500/20 text-violet-300 border-violet-400/30",
                        glowColor: "rgba(167,139,250,0.15)",
                        dotColor: "bg-violet-400",
                        numberLabel: "✦ 02",
                        numberColor: "text-violet-300/60",
                },
                {
                        title: "CCTV Installation",
                        description: "Professional CCTV camera installation, repair, and monitoring setup. Indoor & outdoor security systems for homes and offices.",
                        // lottieData: cctvAnim,
                        accentColor: "#f5a623",
                        gradient: "linear-gradient(135deg, #1a1205 0%, #2d1f0a 40%, #3d2b10 100%)",
                        tag: "Security",
                        tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
                        glowColor: "rgba(245,166,35,0.15)",
                        dotColor: "bg-amber-400",
                        numberLabel: "✦ 03",
                        numberColor: "text-amber-300/60",
                },
                {
                        title: "Home Appliance Repair",
                        description: "Washing machine, refrigerator, dishwasher, oven, and all home appliance repair services with genuine spare parts.",
                        // lottieData: applianceAnim,
                        accentColor: "#38bdf8",
                        gradient: "linear-gradient(135deg, #0a1628 0%, #0f2240 40%, #153260 100%)",
                        tag: "Full Service",
                        tagColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
                        glowColor: "rgba(56,189,248,0.15)",
                        dotColor: "bg-sky-400",
                        numberLabel: "✦ 04",
                        numberColor: "text-sky-300/60",
                },
                {
                        title: "Refrigerator Repair",
                        description: "Refrigerator repair services with genuine spare parts.",
                        // lottieData: plumbingAnim,
                        accentColor: "#4ade80",
                        gradient: "linear-gradient(135deg, #0a1a0f 0%, #0f2a18 40%, #153520 100%)",
                        tag: "24/7 Available",
                        tagColor: "bg-green-500/20 text-green-300 border-green-400/30",
                        glowColor: "rgba(74,222,128,0.15)",
                        dotColor: "bg-green-400",
                        numberLabel: "✦ 05",
                        numberColor: "text-green-300/60",
                },
                {
                        title: "Electrical Work",
                        description: "Licensed electrical services — wiring, panel upgrades, light fixture installation, short circuit repair and safety inspections.",
                        // lottieData: electricalAnim,
                        accentColor: "#fbbf24",
                        gradient: "linear-gradient(135deg, #1a1505 0%, #2a2008 40%, #3a2e10 100%)",
                        tag: "Licensed",
                        tagColor: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
                        glowColor: "rgba(251,191,36,0.15)",
                        dotColor: "bg-yellow-400",
                        numberLabel: "✦ 06",
                        numberColor: "text-yellow-300/60",
                },
        ];
        return (
                <div className="min-h-screen bg-[#08080e] relative overflow-hidden">
                        {/* Ambient background blurs */ }
                        <div className="fixed inset-0 pointer-events-none">
                                <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-teal-900/20 blur-[150px]" />
                                <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[150px]" />
                                <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[120px]" />
                                <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-amber-900/10 blur-[100px]" />
                                <div className="absolute top-[50%] left-[10%] w-[400px] h-[400px] rounded-full bg-green-900/10 blur-[120px]" />
                        </div>

                        {/* Grid pattern */ }
                        <div
                                className="fixed inset-0 opacity-[0.025] pointer-events-none"
                                style={ {
                                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                        backgroundSize: "60px 60px",
                                } }
                        />

                        {/* ════════════════════════════════════════════════════════ */ }
                        {/* ─── HERO SECTION ─── */ }
                        {/* ════════════════════════════════════════════════════════ */ }
                        <div className="text-center pt-12 md:pt-20 pb-16 md:pb-24 max-w-4xl mx-auto">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-teal-300 uppercase">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                                        Dubai Government Approved
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent tracking-tight leading-[1.1] mb-6">
                                        About <span className="bg-gradient-to-r from-violet-800 to-blue-500 bg-clip-text text-transparent">Idrees</span>
                                </h1>
                                <p className="text-base md:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed mb-4">
                                        Your trusted partner for professional home maintenance and technical services in Dubai.
                                        Licensed, certified, and committed to excellence since day one.
                                </p>
                                <div className="flex items-center justify-center gap-3 mt-6">
                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                                </svg>
                                                License No: <span className="text-cyan-500 font-bold">213983</span>
                                        </div>
                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                        <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                Dubai, UAE
                                        </div>
                                </div>
                        </div>

                        {/* ════════════════════════════════════════════════════════ */ }
                        {/* ─── ABOUT / WHO WE ARE ─── */ }
                        {/* ════════════════════════════════════════════════════════ */ }
                        <div className="max-w-6xl mx-auto mb-24 md:mb-32">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                        {/* Left - Shield parallax card */ }
                                        <div className="flex justify-center">
                                                <ParallaxCard
                                                        layers={ [
                                                                { depth: 0.1, content: <GeometricPattern color="#2fff" /> },
                                                                { depth: 0.5, content: <FloatingParticles count={ 50 } color="#ffffff" /> },
                                                                {
                                                                        depth: 1.1,
                                                                        content: (
                                                                                <div className="flex items-center justify-center mt-[-30px]">
                                                                                        <div className="absolute rounded-full blur-xl" style={ { width: 120, height: 120, background: "rgba(0,0,0,0.0.75)" } } />
                                                                                        {/* <LottieIcon animationData={shieldAnim} size={130} /> */ }
                                                                                </div>
                                                                        ),
                                                                },
                                                                {
                                                                        depth: 1.5,
                                                                        content: (
                                                                                <div className="absolute top-6 right-6 text-[10px] font-bold tracking-[0.3em] text-blue-300/60">
                                                                                        EST. DUBAI
                                                                                </div>
                                                                        ),
                                                                },
                                                        ] }
                                                        backgroundGradient="linear-gradient(135deg, #120a1a 0%, #1c0f2a 40%, #251535 100%)"
                                                        width={ 380 }
                                                        height={ 440 }
                                                        maxTilt={ 16 }
                                                        glareOpacity={ 0.25 }
                                                >
                                                        <div className="relative z-10" style={ { transform: "translateZ(40px)", transformStyle: "preserve-3d" } }>
                                                                <div className="mb-2 flex items-center gap-2">
                                                                        <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                                                                        <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">Verified Company</span>
                                                                </div>
                                                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Government Approved</h3>
                                                                <p className="text-sm text-white/50 leading-relaxed">Licensed & regulated by Dubai authorities</p>
                                                                <p className="text-xs text-teal-400/70 font-mono mt-2">LIC #213983</p>
                                                        </div>
                                                </ParallaxCard>
                                        </div>

                                        {/* Right - Text content */ }
                                        <div className="lg:pl-4">
                                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-teal-300 uppercase">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                                        </svg>
                                                        Who We Are
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-tight">
                                                        Idres Home Maintenance<br />
                                                        <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                                                & Technical Services
                                                        </span>
                                                </h2>
                                                <p className="text-white/35 leading-relaxed mb-6 text-[15px]">
                                                        We are a Dubai-based, government-approved home maintenance and technical services company dedicated to keeping your home and office running perfectly. With <strong className="text-white/60">Trade License #213983</strong>, we deliver professional, reliable, and affordable solutions across the emirate.
                                                </p>
                                                <p className="text-white/30 leading-relaxed mb-8 text-[14px]">
                                                        Our team of experienced and certified technicians specialize in AC repair, TV repair, CCTV installation, home appliance repair, plumbing, and electrical work. Every technician is trained, background-verified, and equipped with the latest tools and genuine parts to ensure top-quality service.
                                                </p>

                                                {/* Quick facts */ }
                                                <div className="grid grid-cols-2 gap-4">
                                                        { [
                                                                { icon: "🏛️", label: "Dubai Govt. Approved", desc: "Fully licensed company" },
                                                                { icon: "🛡️", label: "Insured Services", desc: "100% damage coverage" },
                                                                { icon: "⚡", label: "Same-Day Service", desc: "Quick response guaranteed" },
                                                                { icon: "🔧", label: "Genuine Parts", desc: "Original spare parts only" },
                                                        ].map((item, idx) => (
                                                                <div key={ idx } className="flex items-start gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-lg">
                                                                                { item.icon }
                                                                        </div>
                                                                        <div>
                                                                                <div className="text-xs font-semibold text-white/70">{ item.label }</div>
                                                                                <div className="text-[10px] text-white/25 mt-0.5">{ item.desc }</div>
                                                                        </div>
                                                                </div>
                                                        )) }
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* ════════════════════════════════════════════════════════ */ }
                        {/* ─── STATS SECTION ─── */ }
                        {/* ════════════════════════════════════════════════════════ */ }
                        <div className="max-w-5xl mx-auto mb-24 md:mb-32">
                                <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                                <StatCard value={ 5000 } suffix="+" label="Happy Customers" color="#4fd1c5" />
                                                <StatCard value={ 15 } suffix="+" label="Years Experience" color="#a78bfa" />
                                                <StatCard value={ 30 } suffix="+" label="Expert Technicians" color="#38bdf8" />
                                                <StatCard value={ 98 } suffix="%" label="Satisfaction Rate" color="#4ade80" />
                                        </div>
                                </div>
                        </div>

                        {/* ════════════════════════════════════════════════════════ */ }
                        {/* ─── OUR SERVICES (6 Parallax Cards) ─── */ }
                        {/* ════════════════════════════════════════════════════════ */ }
                        <div className="max-w-7xl mx-auto mb-24 md:mb-32">
                                <div className="text-center mb-14">
                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                                                What We Do
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                                                Our <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Services</span>
                                        </h2>
                                        <p className="text-white/30 max-w-xl mx-auto text-sm">
                                                From cooling systems to security cameras — we cover every aspect of home maintenance with certified expertise.
                                        </p>
                                </div>

                                <div className="flex flex-wrap items-stretch justify-center gap-6 lg:gap-7">
                                        { services.map((service, i) => (
                                                <ParallaxCard
                                                        key={ i }
                                                        layers={ [
                                                                { depth: -1, content: <GeometricPattern color={ service.accentColor } /> },
                                                                { depth: 0.5, content: <FloatingParticles count={ 8 } color={ service.accentColor } /> },
                                                                {
                                                                        depth: 1.5,
                                                                        content: (
                                                                                <div className="mt-[-60px] flex items-center justify-center">
                                                                                        <div className="absolute rounded-full blur-2xl" style={ { width: 70, height: 70, background: service.glowColor } } />
                                                                                        {/* <LottieIcon animationData={service.lottieData} size={80} /> */ }
                                                                                </div>
                                                                        ),
                                                                },
                                                                {
                                                                        depth: 2.5,
                                                                        content: (
                                                                                <div className={ `absolute top-5 right-5 text-[9px] font-bold tracking-[0.3em] ${ service.numberColor }` }>
                                                                                        { service.numberLabel }
                                                                                </div>
                                                                        ),
                                                                },
                                                        ] }
                                                        backgroundGradient={ service.gradient }
                                                        width={ 320 }
                                                        height={ 360 }
                                                        maxTilt={ 16 }
                                                        glareOpacity={ 0.25 }
                                                >
                                                        <div className="relative z-10" style={ { transform: "translateZ(40px)", transformStyle: "preserve-3d" } }>
                                                                <div className="mb-2 flex items-center gap-2">
                                                                        <span className={ `inline-block h-2 w-2 rounded-full ${ service.dotColor } animate-pulse` } />
                                                                        <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">Service</span>
                                                                </div>
                                                                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{ service.title }</h3>
                                                                <p className="text-[12px] text-white/40 leading-relaxed mb-4 line-clamp-3">{ service.description }</p>
                                                                <span className={ `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold ${ service.tagColor }` }>
                                                                        { service.tag }
                                                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="ml-0.5">
                                                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                </span>
                                                        </div>
                                                </ParallaxCard>
                                        )) }
                                </div>
                        </div>


                </div>
        )
}

export default AboutUs