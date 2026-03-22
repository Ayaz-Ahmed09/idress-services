"use client";
import React, { useState, useEffect } from 'react';

export function FloatingParticles ({ count, color }) {
        const [particles, setParticles] = useState([]);

        useEffect(() => {
                setParticles(Array.from({ length: count }, (_, i) => ({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 4 + 1,
                        opacity: Math.random() * 0.4 + 0.1,
                        delay: Math.random() * 5,
                })));
        }, [count]);

        if (particles.length === 0) return null;
        return (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                        { particles.map((p) => (
                                <div
                                        key={ p.id }
                                        className="absolute rounded-full animate-pulse"
                                        style={ {
                                                left: `${ p.x }%`,
                                                top: `${ p.y }%`,
                                                width: p.size,
                                                height: p.size,
                                                backgroundColor: color,
                                                opacity: p.opacity,
                                                animationDelay: `${ p.delay }s`,
                                                animationDuration: `${ 2 + Math.random() * 3 }s`,
                                        } }
                                />
                        )) }
                </div>
        );
}
