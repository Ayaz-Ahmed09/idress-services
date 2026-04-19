'use client';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  { name: "Ahmed Al Maktoum", role: "Tesla Owner", text: "Other companies quoted me 2 weeks. These guys had my Tesla Wall Connector installed and DEWA approved in 48 hours." },
  { name: "Sarah Williams", role: "Homeowner", text: "My previous charger kept tripping the breaker. They rewired a dedicated circuit and it's been flawless since." },
  { name: "Mohammed R.", role: "Business Owner", text: "Installed 10 Level 2 chargers for our office parking. Zero downtime, perfect cable management." },
  { name: "Elena K.", role: "Porsche Taycan Owner", text: "The dealership wanted a fortune for installation. EV Dubai did it for half the price with the exact same certified quality." },
  { name: "David Chen", role: "Villa Resident", text: "Very neat install. No messy wires, perfectly integrated into our villa's electrical system." },
  { name: "Fatima S.", role: "Audi e-tron Owner", text: "Emergency repair at 10 PM. The technician arrived in 30 mins and fixed the fault. Lifesavers." }
];

export default function Testimonials()
{
  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-mono uppercase tracking-widest mb-6">
            Verified Reviews
          </div>
          <h2 className="text-4xl md:text-6xl text-blue-900 font-heading font-black tracking-tight mb-6">
            <span className="text-blue-900">TRUSTED BY</span> <br />
            <span className="text-sky-500">500+ EV OWNERS</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Don&apos;t just take our word for it. See how we&apos;ve solved charging nightmares for hundreds of EV owners across Dubai.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center overflow-hidden relative">
                  <Image src={`https://picsum.photos/seed/user${ i }/100/100`} alt="User" fill sizes="48px" className="object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-sky-600">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium text-gray-700">5.0 from 200+ reviews</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 h-[600px] relative overflow-hidden flex gap-6 mask-image-vertical">
          <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-white via-transparent to-white" />

          {/* Column 1 */}
          <div className="w-1/2 flex flex-col gap-6 animate-marquee-vertical">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="glass-panel p-6 rounded-sm border-sky-500/20">
                <div className="flex text-sky-600 mb-4">
                  {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-sky-100 overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/${ review.name }/100/100`} alt={review.name} fill sizes="40px" className="object-cover grayscale" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                    <p className="text-xs text-sky-600 font-mono uppercase">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Offset) */}
          <div className="w-1/2 flex flex-col gap-6 animate-marquee-vertical" style={{ animationDirection: 'reverse' }}>
            {[...reviews.reverse(), ...reviews].map((review, i) => (
              <div key={i} className="glass-panel p-6 rounded-sm border-sky-500/20">
                <div className="flex text-sky-600 mb-4">
                  {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-sky-100 overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/${ review.name }2/100/100`} alt={review.name} fill sizes="40px" className="object-cover grayscale" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                    <p className="text-xs text-sky-600 font-mono uppercase">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}