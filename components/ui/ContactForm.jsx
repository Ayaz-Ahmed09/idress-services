"use client"
import { useState, useRef, useCallback } from "react";
// import Lottie from "lottie-react";
// import sendAnim from "../assets/lottie/send.json";



export function ContactForm() {
        const cardRef = useRef(null);
        const [tilt, setTilt] = useState({
                rotateX: 0,
                rotateY: 0,
                mouseX: 0.5,
                mouseY: 0.5,
                isHovering: false,
        });

        const [formData, setFormData] = useState({
                name: "",
                email: "",
                subject: "",
                message: "",
        });

        const [focused, setFocused] = useState(null);
        const [submitted, setSubmitted] = useState(false);

        const handleMouseMove = useCallback(
                (e) => {
                        if (!cardRef.current) return;
                        const rect = cardRef.current.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width;
                        const y = (e.clientY - rect.top) / rect.height;
                        setTilt({
                                rotateX: (0.5 - y) * 8,
                                rotateY: (x - 0.5) * 8,
                                mouseX: x,
                                mouseY: y,
                                isHovering: true,
                        });
                },
                []
        );

        const handleMouseLeave = useCallback(() => {
                setTilt({ rotateX: 0, rotateY: 0, mouseX: 0.5, mouseY: 0.5, isHovering: false });
        }, []);

        const handleSubmit = (e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                setFormData({ name: "", email: "", subject: "", message: "" });
        };

        const shadowX = -tilt.rotateY * 2;
        const shadowY = tilt.rotateX * 2;
        const glareAngle = Math.atan2(tilt.mouseY - 0.5, tilt.mouseX - 0.5) * (180 / Math.PI) + 90;

        const inputClass = (field) =>
                `w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-slate-900 text-sm placeholder-slate-400 outline-none transition-all duration-300 ${focused === field
                        ? "border-sky-500 bg-white shadow-[0_0_15px_-3px_rgba(2,132,199,0.2)]"
                        : "border-slate-200 hover:border-slate-300 hover:bg-white"
                }`;

        return (
                <div style={{ perspective: "1200px" }} className="w-full max-w-2xl">
                        <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
                                style={{
                                        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${tilt.isHovering ? 15 : 0}px)`,
                                        transition: tilt.isHovering
                                                ? "transform 0.15s ease-out, box-shadow 0.15s ease-out"
                                                : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                        transformStyle: "preserve-3d",
                                        boxShadow: `
            ${shadowX}px ${shadowY}px ${tilt.isHovering ? 30 : 15}px -5px rgba(0,0,0,0.08),
            ${shadowX * 0.5}px ${shadowY * 0.5}px 15px -3px rgba(0,0,0,0.05)
          `,
                                }}
                        >
                                {/* Background */}
                                <div
                                        className="absolute inset-0"
                                        style={{
                                                background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                                        }}
                                />

                                {/* Background geometric pattern */}
                                <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
                                        {Array.from({ length: 8 }, (_, i) => (
                                                <div
                                                        key={i}
                                                        className="absolute border border-violet-500 rounded-full"
                                                        style={{
                                                                width: 100 + i * 80,
                                                                height: 100 + i * 80,
                                                                right: -50 - i * 20,
                                                                top: -50 - i * 20,
                                                        }}
                                                />
                                        ))}
                                </div>

                                {/* Floating particles */}
                                <div className="absolute inset-0 overflow-hidden">
                                        {Array.from({ length: 20 }, (_, i) => (
                                                <div
                                                        key={i}
                                                        className="absolute rounded-full animate-pulse"
                                                        style={{
                                                                left: `${Math.random() * 100}%`,
                                                                top: `${Math.random() * 100}%`,
                                                                width: Math.random() * 3 + 1,
                                                                height: Math.random() * 3 + 1,
                                                                backgroundColor: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#818cf8" : "#c4b5fd",
                                                                opacity: Math.random() * 0.3 + 0.05,
                                                                animationDelay: `${Math.random() * 5}s`,
                                                                animationDuration: `${2 + Math.random() * 3}s`,
                                                        }}
                                                />
                                        ))}
                                </div>

                                {/* Glare effect */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-3xl"
                                        style={{
                                                background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,${tilt.isHovering ? 0.12 : 0}) 0%, rgba(255,255,255,0) 60%)`,
                                                transition: tilt.isHovering ? "opacity 0.1s" : "opacity 0.6s ease",
                                        }}
                                />

                                {/* Specular */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-3xl"
                                        style={{
                                                background: `radial-gradient(circle at ${tilt.mouseX * 100}% ${tilt.mouseY * 100}%, rgba(255,255,255,${tilt.isHovering ? 0.12 : 0}) 0%, transparent 50%)`,
                                        }}
                                />

                                {/* Edge glow */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-3xl"
                                        style={{
                                                boxShadow: `inset 0 0 0 1px rgba(255,255,255,${tilt.isHovering ? 0.15 : 0.07}), inset 0 1px 0 rgba(255,255,255,${tilt.isHovering ? 0.2 : 0.1})`,
                                                transition: "box-shadow 0.3s ease",
                                        }}
                                />

                                {/* Form content */}
                                <div className="relative z-10 p-8 md:p-10">
                                        {/* Header with Lottie */}
                                        <div className="mb-8">
                                                <div className="mb-3 flex items-center gap-3">
                                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-400/20 overflow-hidden">
                                                                {/* Glow behind lottie */}
                                                                <div className="absolute inset-0 bg-violet-500/10 rounded-2xl blur-sm" />
                                                                /
                                                        </div>
                                                        <div>
                                                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Send a Message</h2>
                                                                <p className="text-sm text-slate-500 mt-0.5">We'd love to hear from you</p>
                                                        </div>
                                                </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                                {/* Name & Email row */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                                <label className="block text-xs font-semibold tracking-[0.15em] text-white/40 mb-2 uppercase">
                                                                        Full Name
                                                                </label>
                                                                <div className="relative">
                                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                                                        <circle cx="12" cy="7" r="4" />
                                                                                </svg>
                                                                        </div>
                                                                        <input
                                                                                type="text"
                                                                                value={formData.name}
                                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                                onFocus={() => setFocused("name")}
                                                                                onBlur={() => setFocused(null)}
                                                                                placeholder="John Doe"
                                                                                className={`${inputClass("name")} pl-11`}
                                                                                required
                                                                        />
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <label className="block text-xs font-semibold tracking-[0.15em] text-white/40 mb-2 uppercase">
                                                                        Email
                                                                </label>
                                                                <div className="relative">
                                                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                                                                        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                                                                                </svg>
                                                                        </div>
                                                                        <input
                                                                                type="email"
                                                                                value={formData.email}
                                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                                onFocus={() => setFocused("email")}
                                                                                onBlur={() => setFocused(null)}
                                                                                placeholder="john@example.com"
                                                                                className={`${inputClass("email")} pl-11`}
                                                                                required
                                                                        />
                                                                </div>
                                                        </div>
                                                </div>

                                                {/* Subject */}
                                                <div>
                                                        <label className="block text-xs font-semibold tracking-[0.15em] text-white/40 mb-2 uppercase">
                                                                Subject
                                                        </label>
                                                        <div className="relative">
                                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4" />
                                                                                <polyline points="14 2 14 8 20 8" />
                                                                                <path d="M3 15h6" /><path d="M6 12v6" />
                                                                        </svg>
                                                                </div>
                                                                <input
                                                                        type="text"
                                                                        value={formData.subject}
                                                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                                        onFocus={() => setFocused("subject")}
                                                                        onBlur={() => setFocused(null)}
                                                                        placeholder="How can we help?"
                                                                        className={`${inputClass("subject")} pl-11`}
                                                                        required
                                                                />
                                                        </div>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                        <label className="block text-xs font-semibold tracking-[0.15em] text-white/40 mb-2 uppercase">
                                                                Message
                                                        </label>
                                                        <textarea
                                                                rows={5}
                                                                value={formData.message}
                                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                                onFocus={() => setFocused("message")}
                                                                onBlur={() => setFocused(null)}
                                                                placeholder="Tell us more about your project, ideas, or questions..."
                                                                className={`${inputClass("message")} resize-none`}
                                                                required
                                                        />
                                                </div>

                                                {/* Submit button */}
                                                <div className="pt-2">
                                                        <button
                                                                type="submit"
                                                                className="group relative w-full overflow-hidden rounded-xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)] active:scale-[0.98]"
                                                                style={{
                                                                        background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)",
                                                                }}
                                                        >
                                                                {/* Button shine */}
                                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                                        style={{
                                                                                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 70%)",
                                                                        }}
                                                                />
                                                                <div className="relative flex items-center justify-center gap-2">
                                                                        {submitted ? (
                                                                                <>
                                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-300">
                                                                                                <polyline points="20 6 9 17 4 12" />
                                                                                        </svg>
                                                                                        <span>Message Sent Successfully!</span>
                                                                                </>
                                                                        ) : (
                                                                                <>
                                                                                        <span>Send Message</span>
                                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                                                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                                                                        </svg>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </button>
                                                </div>
                                        </form>

                                        {/* Footer info */}
                                        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/20">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                                </svg>
                                                <span>Your information is encrypted and secure</span>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
