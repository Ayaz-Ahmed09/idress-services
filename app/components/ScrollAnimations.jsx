"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
        useEffect(() => {
                let gsapInstance;
                let ScrollTriggerPlugin;

                const initAnimations = async () => {
                        const gsapModule = await import("gsap");
                        const scrollTriggerModule = await import("gsap/ScrollTrigger");

                        gsapInstance = gsapModule.gsap;
                        ScrollTriggerPlugin = scrollTriggerModule.ScrollTrigger;

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
                                        }
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
                        if (ScrollTriggerPlugin) {
                                ScrollTriggerPlugin.getAll().forEach((t) => t.kill());
                        }
                };
        }, []);

        return null;
}
