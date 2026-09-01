"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactForm({ heading = "GET IN TOUCH" }) {
        const formRef = useRef();
        const [status, setStatus] = useState("idle"); // idle | loading | success | error

        const sendEmail = (e) => {
                e.preventDefault();
                setStatus("loading");

                // Accessing your .env.local secrets
                const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
                const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

                emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
                        .then(() => {
                                setStatus("success");
                                formRef.current.reset();
                                setTimeout(() => setStatus("idle"), 5000);
                        })
                        .catch((err) => {
                                console.error("EmailJS Error:", err);
                                setStatus("error");
                        });
        };

        return (
                <section className="relative min-h-screen flex items-center justify-center p-6 ">
                        {/* Background Glows */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/40 srounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />

                        <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative w-full max-w-xl p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
                        >
                                <div className="mb-8">
                                        <h2 className="text-4xl font-black text-orange-500 tracking-tight font-outfit">{heading}</h2>
                                        <div className="h-1 w-12 bg-orange-500 mt-2 rounded-full" />
                                </div>

                                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Your Name</label>
                                                        <input type="text" name="user_name" required placeholder="Full Name"
                                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500/50 transition-all outline-none" />
                                                </div>
                                                <div className="space-y-2">
                                                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
                                                        <input type="email" name="user_email" required placeholder="Email"
                                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500/50 transition-all outline-none" />
                                                </div>
                                        </div>

                                        <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Message</label>
                                                <textarea name="message" required rows="4" placeholder="How can we help?"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500/50 transition-all outline-none resize-none" />
                                        </div>

                                        <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full group relative overflow-hidden bg-orange-500 hover:bg-black text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-orange-900/20 disabled:opacity-50"
                                        >
                                                <span className="relative z-10 uppercase tracking-tighter text-lg">
                                                        {status === "loading" ? "TRANSMITTING..." : "SEND MESSAGE"}
                                                </span>
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </button>

                                        {/* Status Indicators */}
                                        {status === "success" && (
                                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-400 font-bold text-sm">
                                                        SUCCESS! TRANSMISSION RECEIVED.
                                                </motion.p>
                                        )}
                                </form>
                        </motion.div>
                </section>
        );
}