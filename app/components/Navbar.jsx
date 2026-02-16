"use client";

import { useState, useEffect } from "react";

const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Booking", href: "#booking" },
        { label: "Health Check", href: "#health" },
        { label: "Contact", href: "#contact" },
];

export default function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
                const handleScroll = () => setScrolled(window.scrollY > 20);
                window.addEventListener("scroll", handleScroll, { passive: true });
                return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        useEffect(() => {
                if (isOpen) {
                        document.body.style.overflow = "hidden";
                } else {
                        document.body.style.overflow = "";
                }
                return () => { document.body.style.overflow = ""; };
        }, [isOpen]);

        return (
                <header
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                                        ? "glass-strong shadow-lg shadow-black/20"
                                        : "bg-transparent"
                                }`}
                >
                        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                                {/* Logo */}
                                <a href="#" className="flex items-center gap-2 group" aria-label="Precision AC home">
                                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-orange)] p-[1px]">
                                                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[var(--bg-primary)]">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                                        </svg>
                                                </div>
                                        </div>
                                        <span className="font-display text-lg font-bold tracking-tight">
                                                <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300">Precision</span>
                                                <span className="text-[var(--accent-cyan)]">AC</span>
                                        </span>
                                </a>

                                {/* Desktop Links */}
                                <div className="hidden items-center gap-8 lg:flex">
                                        {navLinks.map((link) => (
                                                <a
                                                        key={link.label}
                                                        href={link.href}
                                                        className="relative text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-cyan)] after:transition-all after:duration-300 hover:after:w-full"
                                                >
                                                        {link.label}
                                                </a>
                                        ))}
                                </div>

                                {/* Desktop CTA */}
                                <a
                                        href="#booking"
                                        className="hidden rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] px-6 py-2.5 text-sm font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/25 hover:scale-105 lg:block"
                                >
                                        Book Now
                                </a>

                                {/* Mobile Hamburger */}
                                <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                                        aria-label="Toggle menu"
                                        aria-expanded={isOpen}
                                >
                                        <span
                                                className={`h-0.5 w-6 rounded-full bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                                                        }`}
                                        />
                                        <span
                                                className={`h-0.5 w-6 rounded-full bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                                        }`}
                                        />
                                        <span
                                                className={`h-0.5 w-6 rounded-full bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                                                        }`}
                                        />
                                </button>
                        </nav>

                        {/* Mobile Drawer */}
                        <div
                                className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                                        }`}
                        >
                                {/* Overlay */}
                                <div
                                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                        onClick={() => setIsOpen(false)}
                                        aria-hidden="true"
                                />

                                {/* Drawer */}
                                <div
                                        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] glass-strong transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                                                }`}
                                >
                                        <div className="flex flex-col gap-2 px-8 pt-24">
                                                {navLinks.map((link, i) => (
                                                        <a
                                                                key={link.label}
                                                                href={link.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block rounded-xl px-4 py-3 text-lg font-medium text-[var(--text-secondary)] transition-all duration-200 hover:bg-[var(--accent-cyan-dim)] hover:text-[var(--text-primary)] hover:pl-6"
                                                                style={{ animationDelay: `${i * 75}ms` }}
                                                        >
                                                                {link.label}
                                                        </a>
                                                ))}
                                                <a
                                                        href="#booking"
                                                        onClick={() => setIsOpen(false)}
                                                        className="mt-4 block rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[#00B8D4] px-6 py-3 text-center text-base font-semibold text-[var(--bg-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/25"
                                                >
                                                        Book Now
                                                </a>
                                        </div>
                                </div>
                        </div>
                </header>
        );
}
