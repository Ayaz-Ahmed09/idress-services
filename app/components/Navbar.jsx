"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { services } from '../../data/services'
import { usePathname } from "next/navigation";
import { company } from "@/data/company-data";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-gradient-to-r from-white/80 via-orange-500 to-white backdrop-blur-xl border-b border-white/90 shadow-xl shadow-orange-950/20"
        : "bg-gradient-to-r from-white/80 via-orange-500 to-white backdrop-blur-xl border-b border-white/90 shadow-lg shadow-orange-950/10"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <div className="flex items-center gap-4 h-10 p-1">
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              alt="Logo-home-maintenance-services"
              width={90}
              height={90}
              className="object-contain filter drop-shadow-sm"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold text-white transition-colors duration-200 hover:text-orange-100 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full drop-shadow-xs"
            >
              {link.label}
            </a>
          ))}

          {/* Show ONLY the current page's service with dropdown */}
          {activeService && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="relative flex items-center gap-1.5 text-sm font-semibold text-white bg-orange-700/60 hover:bg-orange-700/80 border border-orange-300/40 px-3.5 py-1.5 rounded-lg transition-colors duration-200 shadow-xs"
              >
                <span>{activeService.title}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sub-services dropdown */}
              {dropdownOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-orange-200 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl z-50">
                  {activeService.subServices.map((sub) => (
                    <Link
                      key={sub.id}
                      href="/book"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition-colors duration-150 hover:bg-orange-50 hover:text-orange-600"
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
          className="hidden rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-orange-600 shadow-md transition-all duration-300 hover:bg-orange-50 hover:shadow-xl hover:scale-105 lg:block"
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
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
          className="absolute inset-0 bg-orange-500/45 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white border-l border-orange-500/30 shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col gap-3 px-6 pt-24 pb-8 min-h-full bg-white backdrop-blur-2xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-semibold text-slate-100 transition-all duration-200 hover:bg-orange-500/20 hover:text-orange-400 hover:pl-6 border border-transparent hover:border-orange-500/30"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {link.label}
              </Link>
            ))}

            {/* Show ONLY the current page's service with dropdown */}
            {activeService && (
              <div className="relative mt-2" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-orange-400 bg-orange-950/50 border border-orange-500/30"
                >
                  <span>{activeService.title}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sub-services dropdown */}
                {dropdownOpen && (
                  <div className="mt-2 flex flex-col gap-1 rounded-xl border border-orange-500/20 bg-slate-950 p-2 shadow-xl">
                    {activeService.subServices.map((sub) => (
                      <Link
                        key={sub.id}
                        href="/book"
                        onClick={() => {
                          setDropdownOpen(false);
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-orange-500/20 hover:text-orange-300"
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
              href={`tel:+${company.whatsapp}`}
              onClick={() => setIsOpen(false)}
              className="mt-6 block rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
