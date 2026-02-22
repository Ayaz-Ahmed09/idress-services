"use client"
import { useRef, useState, useCallback } from "react";

interface CardLayer {
        content: React.ReactNode;
        depth: number;
}

interface ParallaxCardProps {
        layers?: CardLayer[];
        backgroundGradient: string;
        width?: number | string;
        height?: number | string;
        maxTilt?: number;
        perspective?: number;
        glareOpacity?: number;
        children?: React.ReactNode;
        className?: string;
}

interface TiltState {
        rotateX: number;
        rotateY: number;
        mouseX: number;
        mouseY: number;
        isHovering: boolean;
}

export function ParallaxCard({
        layers = [],
        backgroundGradient,
        width = 360,
        height = 480,
        maxTilt = 20,
        perspective = 1000,
        glareOpacity = 0.35,
        children,
        className = "",
}: ParallaxCardProps) {
        const cardRef = useRef<HTMLDivElement>(null);
        const [tilt, setTilt] = useState<TiltState>({
                rotateX: 0,
                rotateY: 0,
                mouseX: 0.5,
                mouseY: 0.5,
                isHovering: false,
        });

        const handleMouseMove = useCallback(
                (e: React.MouseEvent<HTMLDivElement>) => {
                        if (!cardRef.current) return;
                        const rect = cardRef.current.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width;
                        const y = (e.clientY - rect.top) / rect.height;
                        const rotateX = (0.5 - y) * maxTilt;
                        const rotateY = (x - 0.5) * maxTilt;

                        setTilt({
                                rotateX,
                                rotateY,
                                mouseX: x,
                                mouseY: y,
                                isHovering: true,
                        });
                },
                [maxTilt]
        );

        const handleMouseLeave = useCallback(() => {
                setTilt({
                        rotateX: 0,
                        rotateY: 0,
                        mouseX: 0.5,
                        mouseY: 0.5,
                        isHovering: false,
                });
        }, []);

        const shadowX = -tilt.rotateY * 1.5;
        const shadowY = tilt.rotateX * 1.5;
        const shadowBlur = tilt.isHovering ? 40 : 20;
        const shadowSpread = tilt.isHovering ? -5 : -10;
        const liftZ = tilt.isHovering ? 30 : 0;

        const glareAngle =
                Math.atan2(tilt.mouseY - 0.5, tilt.mouseX - 0.5) * (180 / Math.PI) + 90;

        return (
                <div
                        style={{ perspective: `${perspective}px`, width, height }}
                        className={`relative ${className}`}
                >
                        <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative h-full w-full rounded-2xl"
                                style={{
                                        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${liftZ}px)`,
                                        transition: tilt.isHovering
                                                ? "transform 0.1s ease-out, box-shadow 0.1s ease-out"
                                                : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                        transformStyle: "preserve-3d",
                                        boxShadow: `
            ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0,0,0,0.3),
            ${shadowX * 0.5}px ${shadowY * 0.5}px ${shadowBlur * 0.5}px ${shadowSpread * 0.5}px rgba(0,0,0,0.15),
            0 0 ${tilt.isHovering ? 80 : 40}px -20px rgba(0,0,0,0.1)
          `,
                                }}
                        >
                                {/* Card background */}
                                <div
                                        className="absolute inset-0 overflow-hidden rounded-2xl"
                                        style={{ background: backgroundGradient }}
                                >
                                        <div
                                                className="absolute inset-0 opacity-[0.03]"
                                                style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                                                }}
                                        />
                                </div>

                                {/* Depth layers */}
                                {layers.map((layer, index) => (
                                        <div
                                                key={index}
                                                className="absolute inset-0 flex items-center justify-center"
                                                style={{
                                                        transform: `translateX(${(tilt.mouseX - 0.5) * layer.depth * 30}px) translateY(${(tilt.mouseY - 0.5) * layer.depth * 30}px) translateZ(${layer.depth * 40}px)`,
                                                        transition: tilt.isHovering
                                                                ? "transform 0.1s ease-out"
                                                                : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                                        transformStyle: "preserve-3d",
                                                }}
                                        >
                                                {layer.content}
                                        </div>
                                ))}

                                {/* Card content */}
                                {children && (
                                        <div
                                                className="relative z-10 flex h-full flex-col justify-end p-6"
                                                style={{
                                                        transform: `translateZ(30px)`,
                                                        transformStyle: "preserve-3d",
                                                }}
                                        >
                                                {children}
                                        </div>
                                )}

                                {/* Shine / Glare effect */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-2xl"
                                        style={{
                                                background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,${tilt.isHovering ? glareOpacity : 0
                                                        }) 0%, rgba(255,255,255,0) 60%)`,
                                                transition: tilt.isHovering
                                                        ? "opacity 0.1s ease-out"
                                                        : "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                        }}
                                />

                                {/* Specular highlight */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-2xl"
                                        style={{
                                                background: `radial-gradient(circle at ${tilt.mouseX * 100}% ${tilt.mouseY * 100
                                                        }%, rgba(255,255,255,${tilt.isHovering ? 0.25 : 0
                                                        }) 0%, transparent 50%)`,
                                                transition: tilt.isHovering
                                                        ? "opacity 0.1s ease-out"
                                                        : "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                        }}
                                />

                                {/* Edge highlight */}
                                <div
                                        className="pointer-events-none absolute inset-0 rounded-2xl"
                                        style={{
                                                boxShadow: `inset 0 0 0 1px rgba(255,255,255,${tilt.isHovering ? 0.2 : 0.1
                                                        }), inset 0 1px 0 rgba(255,255,255,${tilt.isHovering ? 0.3 : 0.15
                                                        })`,
                                                transition: "box-shadow 0.3s ease",
                                        }}
                                />
                        </div>
                </div>
        );
}
