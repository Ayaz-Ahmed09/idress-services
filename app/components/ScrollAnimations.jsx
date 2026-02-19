"use client";

import { useEffect } from "react";

// Scroll animations disabled for performance optimization
export default function ScrollAnimations() {
  useEffect(() => {
    const initAnimations = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsapInstance = gsapModule.gsap;
      const ScrollTriggerPlugin = scrollTriggerModule.ScrollTrigger;

      gsapInstance.registerPlugin(ScrollTriggerPlugin);

      // Reveal sections
      const sections = document.querySelectorAll(".reveal-section");
      sections.forEach((section) => {
        gsapInstance.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Parallax hero background
      const hero = document.querySelector("section");
      if (hero) {
        gsapInstance.to(hero, {
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: 100,
          opacity: 0.6,
        });
      }
    };

    initAnimations();

    return () => {
      // Cleanup
    };
  }, []);

  return null;
}
