"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Services", href: "#services" },
  { label: "Contact-us", href: "/contact-us" },
  { label: "About-us", href: "/about-us" },
  // { label: "BOOK NOW", href: "/book" },
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong bg-blur-xl bg-(--bg-primary) shadow-lg shadow-black/20" : "backdrop-blur-xl"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo-idress-home-maintenance-services" width={100} height={100} />
        </Link>
        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text-primary) after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-(--accent-cyan) after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#booking"
          className="hidden rounded-xl bg-linear-to-r from-(--accent-cyan) to-[#00B8D4] px-6 py-2.5 text-sm font-semibold text-(--bg-primary) transition-all duration-300 hover:shadow-lg hover:shadow-(--accent-cyan)/25 hover:scale-105 lg:block"
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-(--text-primary) lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >

          <span
            className={`h-0.5 w-6 rounded-full bg-(--text-primary) transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45 backdrop-blur-xl" : "backdrop-blur-xl"
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-(--text-primary) transition-all duration-300 ${isOpen ? "opacity-0 backdrop-blur-xl" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-(--text-primary) transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45 backdrop-blur-xl" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${isOpen ? "visible opacity-100 backdrop-blur-xl" : "invisible opacity-0"
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] glass-strong transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full blur-3xl"
            }`}
        >
          <div className="flex flex-col gap-2 px-8 pt-24 backdrop-blur-3xl bg-black/80 p-6 rounded-bl-4xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-(--text-secondary) transition-all duration-200 hover:bg-(--accent-cyan-dim) hover:text-(--text-primary) hover:pl-6"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-xl bg-linear-to-r from-(--accent-cyan) to-[#00B8D4] px-6 py-3 text-center text-base font-semibold text-(--bg-primary) transition-all duration-300 hover:shadow-lg hover:shadow-(--accent-cyan)/25"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
