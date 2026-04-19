"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Users, HeartHandshake } from "lucide-react";


const badges = [
        {
                id: 1,
                title: "Government Approved",
                description: "Fully licensed and approved by local authorities for all technical and maintenance services.",
                icon: ShieldCheck,
                color: "from-blue-600 to-cyan-500",
                bgAccent: "bg-blue-500/10",
                iconColor: "text-blue-500",
        },
        {
                id: 2,
                title: "Google Guaranteed",
                description: "Highly rated and trusted by Google with verified customer reviews and top-tier service standards.",
                icon: CheckCircle2,
                color: "from-green-600 to-emerald-500",
                bgAccent: "bg-green-500/10",
                iconColor: "text-green-500",
        },
        {
                id: 3,
                title: "Trusted by Thousands",
                description: "Over 50,000 satisfied customers rely on us for their daily home and commercial needs.",
                icon: Users,
                color: "from-purple-600 to-pink-500",
                bgAccent: "bg-purple-500/10",
                iconColor: "text-purple-500",
        },
        {
                id: 4,
                title: "100% Satisfaction",
                description: "We guarantee quality in every job with our dedicated post-service support and warranties.",
                icon: HeartHandshake,
                color: "from-orange-600 to-red-500",
                bgAccent: "bg-orange-500/10",
                iconColor: "text-orange-500",
        },
];

export default function TrustBadges() {
        return (
                <section className="py-16 bg-transparent dark:bg-gray-950">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {badges.map((badge) => {
                                                const Icon = badge.icon;
                                                return (
                                                        <div
                                                                key={badge.id}
                                                                className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-transparent  dark:bg-gray-900/50 hover:bg-glass hover:backdrop-blur-3xl dark:hover:bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                                        >
                                                                {/* Top Colored Accent Bar */}
                                                                <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${badge.color}`} />

                                                                <div className="relative z-10 flex flex-col items-center text-center">
                                                                        <div className={`p-4 rounded-full ${badge.bgAccent} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                                                <Icon size={32} className={`${badge.iconColor}`} />
                                                                        </div>

                                                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">
                                                                                {badge.title}
                                                                        </h4>

                                                                        <p className="text-sm text-white/80 dark:text-gray-200 leading-relaxed">
                                                                                {badge.description}
                                                                        </p>
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>
                </section>
        );
}
