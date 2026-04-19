'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader()
{
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
  {
    const timer = setTimeout(() =>
    {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      exit={{ opacity: 30, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Car moving container */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-50 flex items-center justify-center pointer-events-none"
            initial={{ x: '-100vw', y: '-50%' }}
            animate={{ x: '100vw', y: '-50%' }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="relative flex items-center pointer-events-none">
              {/* Simple Car SVG */}
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] z-20">
                <path d="M10 30C10 35.5228 14.4772 40 20 40C25.5228 40 30 35.5228 30 30H90C90 35.5228 94.4772 40 100 40C105.523 40 110 35.5228 110 30H115C117.761 30 120 27.7614 120 25V15C120 12.2386 117.761 10 115 10H95L80 0H30L15 10H5C2.23858 10 0 12.2386 0 15V25C0 27.7614 2.23858 30 5 30H10Z" fill="#000000" />
                <circle cx="20" cy="30" r="6" fill="#333" />
                <circle cx="100" cy="30" r="6" fill="#333" />
              </svg>

              {/* Burnout Smoke */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute right-full top-1/2 -translate-y-1/2 flex"
              >
                <div className="w-32 h-12 bg-sky-100/50 blur-xl rounded-full" />
                <div className="w-48 h-16 bg-sky-500/20 blur-2xl rounded-full -ml-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Reveal */}
          <div className="absolute z-10 w-full text-center overflow-hidden flex items-center justify-center">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-sky-600 to-sky-400 tracking-tighter uppercase drop-shadow-sm">
                EV Charger Unit Installtion Dubai
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}