"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = [
        "#FF6B6B", "#FFE66D", "#4ECDC4", "#45B7D1", "#96CEB4",
        "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE",
        "#FF9FF3", "#54A0FF", "#5F27CD", "#01A3A4", "#F368E0",
        "#FF6348", "#7BED9F", "#70A1FF", "#FFA502", "#2ED573",
];

export default function Confetti({ duration = 5000 }) {
        const canvasRef = useRef(null);
        const particlesRef = useRef([]);
        const animationRef = useRef(0);
        const startTimeRef = useRef(0);

        const createParticle = useCallback((canvasWidth, canvasHeight) => {
                // Force particles to start from the bottom-ish or center to create a "burst"
                const shapes = ["rect", "circle", "star"];
                return {
                        x: canvasWidth / 2 + (Math.random() - 0.5) * 40, // Start center
                        y: canvasHeight + 10, // Start just off screen bottom
                        vx: (Math.random() - 0.5) * 15, // Wide horizontal spread
                        vy: -(Math.random() * 15 + 10), // Powerful upward initial jump
                        color: COLORS[Math.floor(Math.random() * COLORS.length)],
                        size: Math.random() * 8 + 6,
                        rotation: Math.random() * Math.PI * 2,
                        rotationSpeed: (Math.random() - 0.5) * 0.2,
                        opacity: 1,
                        shape: shapes[Math.floor(Math.random() * shapes.length)],
                        wobble: Math.random() * 10,
                        wobbleSpeed: Math.random() * 0.1,
                        gravity: 0.35, // Stronger gravity for a natural arc
                        drag: 0.97,    // Air resistance
                };
        }, []);

        const drawStar = (ctx, x, y, spikes, outerRadius, innerRadius) => {
                let rot = (Math.PI / 2) * 3;
                let cx = x;
                let cy = y;
                let step = Math.PI / spikes;

                ctx.beginPath();
                ctx.moveTo(cx, cy - outerRadius);
                for (let i = 0; i < spikes; i++) {
                        x = cx + Math.cos(rot) * outerRadius;
                        y = cy + Math.sin(rot) * outerRadius;
                        ctx.lineTo(x, y);
                        rot += step;

                        x = cx + Math.cos(rot) * innerRadius;
                        y = cy + Math.sin(rot) * innerRadius;
                        ctx.lineTo(x, y);
                        rot += step;
                }
                ctx.lineTo(cx, cy - outerRadius);
                ctx.closePath();
                ctx.fill();
        };

        useEffect(() => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext("2d");

                const resize = () => {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                };
                resize();
                window.addEventListener("resize", resize);

                startTimeRef.current = Date.now();

                // Initial explosion of particles
                for (let i = 0; i < 150; i++) {
                        particlesRef.current.push(createParticle(canvas.width, canvas.height));
                }

                const animate = () => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        const elapsed = Date.now() - startTimeRef.current;

                        // Filter and Update particles
                        particlesRef.current = particlesRef.current.filter((p) => {
                                // Physics logic
                                p.vy += p.gravity;
                                p.vx *= p.drag;
                                p.vy *= p.drag;
                                p.x += p.vx + Math.sin(p.wobble) * 2;
                                p.y += p.vy;
                                p.rotation += p.rotationSpeed;
                                p.wobble += p.wobbleSpeed;

                                // Fade out logic
                                if (elapsed > duration * 0.7) {
                                        p.opacity -= 0.02;
                                }

                                if (p.opacity <= 0 || p.y > canvas.height + 50) return false;

                                // Drawing logic
                                ctx.save();
                                ctx.translate(p.x, p.y);
                                ctx.rotate(p.rotation);
                                ctx.globalAlpha = p.opacity;
                                ctx.fillStyle = p.color;

                                if (p.shape === "rect") {
                                        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 1.5);
                                } else if (p.shape === "circle") {
                                        ctx.beginPath();
                                        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                                        ctx.fill();
                                } else if (p.shape === "star") {
                                        drawStar(ctx, 0, 0, 5, p.size, p.size / 2);
                                }

                                ctx.restore();
                                return true;
                        });

                        if (elapsed < duration || particlesRef.current.length > 0) {
                                animationRef.current = requestAnimationFrame(animate);
                        }
                };

                animationRef.current = requestAnimationFrame(animate);

                return () => {
                        cancelAnimationFrame(animationRef.current);
                        window.removeEventListener("resize", resize);
                };
        }, [createParticle, duration]);

        return (
                <AnimatePresence>
                        <motion.canvas
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                ref={canvasRef}
                                className="pointer-events-none fixed inset-0 z-50"
                                style={{ width: "100vw", height: "100vh" }}
                        />
                </AnimatePresence>
        );
}