"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { services } from '../../data/services'
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact-us", href: "/contact-us" },
  { label: "About-us", href: "/about-us" },
];

// Find the active service based on current pathname
const serviceList = Object.values(services);

export default function Navbar() {
  const pathname = usePathname();
  const activeService = serviceList.find((s) => pathname.includes(s.slug));

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong bg-blur-xl bg-black/80 shadow-lg shadow-black/20" : "backdrop-blur-xl"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4 h-10 p-2">
          <Link href="/">
            <Image src="/logo-new.webp" alt="Logo-idress-home-maintenance-services" width={90} height={90} />
          </Link>
        </div>

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

          {/* Show ONLY the current page's service with dropdown */}
          {activeService && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="relative flex items-center gap-1.5 text-sm font-medium text-(--accent-cyan) transition-colors duration-200 hover:text-(--text-primary)"
              >
                <span>{activeService.title}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-services dropdown */}
              {dropdownOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-(--border-glass) bg-black/90 p-2 shadow-2xl backdrop-blur-xl z-50">
                  {activeService.subServices.map((sub) => (
                    <Link
                      key={sub.id}
                      href="/book"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-(--text-secondary) transition-colors duration-150 hover:bg-(--accent-cyan)/10 hover:text-(--text-primary)"
                    >
                      <span className="text-base">{sub.icon}</span>
                      <span>{sub.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop CTA */}
        <a
          href="/book"
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
            {/* Show ONLY the current page's service with dropdown */}
            {activeService && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="relative flex items-center gap-1.5 text-sm font-medium text-(--accent-cyan) transition-colors duration-200 hover:text-(--text-primary)"
                >
                  <span>{activeService.title}</span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sub-services dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-(--border-glass) bg-black/90 p-2 shadow-2xl backdrop-blur-xl z-50">
                    {activeService.subServices.map((sub) => (
                      <Link
                        key={sub.id}
                        href="/book"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-(--text-secondary) transition-colors duration-150 hover:bg-(--accent-cyan)/10 hover:text-(--text-primary)"
                      >
                        <span className="text-base">{sub.icon}</span>
                        <span>{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}


            <Link
              href="tel:+971557864636"
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
