import React from 'react'
import { ParallaxCard } from '@/components/ui/ParallaxCard'
import { ContactForm } from '@/components/ui/ContactForm'
function GeometricPattern({ color }) {
        return (
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-[0.07]">
                        {Array.from({ length: 6 }, (_, i) => (
                                <div
                                        key={i}
                                        className="absolute border rounded-full"
                                        style={{
                                                borderColor: color,
                                                width: 50 + i * 40,
                                                height: 50 + i * 40,
                                                left: `${50 - (50 + i * 40) / 6}%`,
                                                top: `${50 - (50 + i * 40) / 8}%`,
                                        }}
                                />
                        ))}
                </div>
        );
}
function FloatingParticles({ count, color }) {
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
                        {particles.map((p) => (
                                <div
                                        key={p.id}
                                        className="absolute rounded-full animate-pulse"
                                        style={{
                                                left: `${p.x}%`,
                                                top: `${p.y}%`,
                                                width: p.size,
                                                height: p.size,
                                                backgroundColor: color,
                                                opacity: p.opacity,
                                                animationDelay: `${p.delay}s`,
                                                animationDuration: `${2 + Math.random() * 3}s`,
                                        }}
                                />
                        ))}
                </div>
        );
}
export default function ContactUs() {
        const contactCards = [
                {
                        title: "Email Us",
                        value: "ahmedidrees392@gmail.com",
                        secondaryValue: "support@Idrees-services.com",
                        subtitle: "EMAIL",
                        tag: "Write",
                        gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 40%, #2c5364 100%)",
                        //       lottieData: emailAnim,
                        accentColor: "#4fd1c5",
                        dotColor: "bg-teal-400",
                        tagColor: "bg-teal-500/20 text-teal-300 border-teal-400/30",
                        numberLabel: "✦ 01",
                        numberColor: "text-teal-300/60",
                        glowColor: "rgba(79,209,197,0.15)",
                },
                {
                        title: "Call Us",
                        value: "+971557864636",
                        secondaryValue: "+971557864636",
                        subtitle: "PHONE",
                        tag: "Call",
                        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
                        //       lottieData: phoneAnim,
                        accentColor: "#a78bfa",
                        dotColor: "bg-violet-400",
                        tagColor: "bg-violet-500/20 text-violet-300 border-violet-400/30",
                        numberLabel: "✦ 02",
                        numberColor: "text-violet-300/60",
                        glowColor: "rgba(167,139,250,0.15)",
                },
                {
                        title: "Office Hours",
                        value: "Mon — Fri: 9am – 6pm",
                        secondaryValue: "Sat: 10am – 2pm",
                        subtitle: "HOURS",
                        tag: "Schedule",
                        gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #44107a 100%)",
                        //       lottieData: clockAnim,
                        accentColor: "#f472b6",
                        dotColor: "bg-pink-400",
                        tagColor: "bg-pink-500/20 text-pink-300 border-pink-400/30",
                        numberLabel: "✦ 03",
                        numberColor: "text-pink-300/60",
                        glowColor: "rgba(244,114,182,0.15)",
                },
        ];

        return (
                <div className="min-h-screen bg-[#08080e] relative overflow-hidden py-20 ">
                        {/* Ambient background blurs */}
                        <div className="fixed inset-0 pointer-events-none">
                                <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[150px]" />
                                <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[150px]" />
                                <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full bg-teal-900/10 blur-[120px]" />
                                <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-pink-900/10 blur-[100px]" />
                        </div>
                        <div
                                className="fixed inset-0 opacity-[0.025] pointer-events-none"
                                style={{
                                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                        backgroundSize: "60px 60px",
                                }}
                        />
                        <div className="relative z-10 px-4 md:px-8 pb-20">
                                {/* ─── Hero Header ─── */}
                                <div className="text-center pt-12 md:pt-16 pb-14 md:pb-20 max-w-3xl mx-auto">
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-white/50 backdrop-blur-sm">
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                GET IN TOUCH
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-linear-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent tracking-tight leading-[1.1]">
                                                Contact Us
                                        </h1>
                                        <p className="mt-5 text-base md:text-lg text-white/30 max-w-xl mx-auto leading-relaxed">
                                                Have a question or want to work together? Reach out through any of the channels below or fill out the form — we'll get back to you within 24 hours.
                                        </p>
                                </div>
                        </div>
                        {/* ─── Contact Cards Grid ─── */}
                        <div className="flex flex-wrap items-stretch justify-center gap-6 lg:gap-8 max-w-5xl mx-auto mb-20 md:mb-28">
                                {contactCards.map((card, i) => (
                                        <ParallaxCard
                                                key={i}
                                                layers={[
                                                        { depth: -5, content: <GeometricPattern color={card.accentColor} /> },
                                                        { depth: 0.2, content: <FloatingParticles count={10} color={card.accentColor} /> },
                                                        {
                                                                depth: 1.5,
                                                                content: (
                                                                        <div className="mt-[-70px] flex items-center justify-center">
                                                                                {/* Lottie glow backdrop */}
                                                                                <div
                                                                                        className="absolute rounded-full blur-2xl"
                                                                                        style={{
                                                                                                width: 80,
                                                                                                height: 80,
                                                                                                background: card.glowColor,
                                                                                        }}
                                                                                />

                                                                        </div>
                                                                ),
                                                        },
                                                        {
                                                                depth: 2.5,
                                                                content: (
                                                                        <div className={`absolute top-6 right-6 text-[10px] font-bold tracking-[0.3em] ${card.numberColor}`}>
                                                                                {card.numberLabel}
                                                                        </div>
                                                                ),
                                                        },
                                                ]}
                                                backgroundGradient={card.gradient}
                                                width={300}
                                                height={370}
                                                maxTilt={18}
                                                glareOpacity={0.3}
                                        >
                                                <div
                                                        className="relative z-10"
                                                        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
                                                >
                                                        <div className="mb-2 flex items-center gap-2">
                                                                <span className={`inline-block h-2 w-2 rounded-full ${card.dotColor} animate-pulse`} />
                                                                <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">
                                                                        {card.subtitle}
                                                                </span>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                                                        <p className="text-sm text-white/60 leading-relaxed font-medium">{card.value}</p>
                                                        <p className="text-xs text-white/30 mt-0.5 mb-4">{card.secondaryValue}</p>
                                                        <span
                                                                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${card.tagColor}`}
                                                        >
                                                                {card.tag}
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-0.5">
                                                                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                        </span>
                                                </div>
                                        </ParallaxCard>
                                ))}
                        </div>

                        {/* ─── Contact Form Section ─── */}
                        <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start p-4">
                                        {/* Left column — info */}
                                        <div className="lg:col-span-2 pt-4">
                                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-violet-300 uppercase">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                                        </svg>
                                                        Send Message
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 p-3 leading-tight">
                                                        Let's Start a<br />
                                                        <span className="bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                                                                Conversation
                                                        </span>
                                                </h2>
                                                <p className="text-white/30 leading-relaxed mb-10 text-[15px]">
                                                        Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
                                                </p>

                                                {/* Quick info items */}
                                                <div className="space-y-5">
                                                        {[
                                                                { icon: "⚡", label: "Fast Response", desc: "Usually within 2 hours" },
                                                                { icon: "🌍", label: "Global Team", desc: "Support across all timezones" },
                                                                { icon: "🔒", label: "Secure & Private", desc: "Your data is always protected" },
                                                        ].map((item, idx) => (
                                                                <div key={idx} className="flex items-start gap-3.5 group">
                                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-lg group-hover:bg-white/[0.08] transition-colors">
                                                                                {item.icon}
                                                                        </div>
                                                                        <div>
                                                                                <div className="text-sm font-semibold text-white/80">{item.label}</div>
                                                                                <div className="text-xs text-white/30 mt-0.5">{item.desc}</div>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>


                                        </div>

                                        {/* Right column — form */}
                                        <div className="lg:col-span-3 flex justify-center">
                                                <ContactForm />
                                        </div>
                                </div>
                        </div>

                        {/* ─── FAQ / Extra section ─── */}
                        <div className="max-w-4xl mx-auto mt-24 md:mt-32 text-center">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                                        FAQ
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight">
                                        Frequently Asked Questions
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                                { q: "How quickly do you respond?", a: "We typically respond within 2–4 hours during business hours, and within 24 hours on weekends." },
                                                { q: "Do you offer free consultations?", a: "Yes! We offer a free 30-minute consultation to discuss your project needs and goals." },
                                                { q: "What services do you provide?", a: "We specialize in web development, UI/UX design, branding, and digital strategy consulting." },
                                                { q: "Can I schedule a video call?", a: "Absolutely. After initial contact, we'll set up a video meeting at your convenience." },
                                        ].map((faq, idx) => (
                                                <div
                                                        key={idx}
                                                        className="text-left p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
                                                >
                                                        <h4 className="text-sm font-semibold text-white/80 mb-2 flex items-start gap-2">
                                                                <span className="text-violet-400 shrink-0 mt-0.5">Q.</span>
                                                                {faq.q}
                                                        </h4>
                                                        <p className="text-xs text-white/30 leading-relaxed pl-5">{faq.a}</p>
                                                </div>
                                        ))}
                                </div>
                        </div>

                </div>
        )
}
