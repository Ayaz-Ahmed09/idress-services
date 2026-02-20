import React, { useMemo } from 'react';
import "../../app/globals.css"
interface Testimonial {
  id?: number;
  name: string;
  role?: string;
  location?: string;
  content?: string;
  comment?: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = [],
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied customers"
}) => {
  // Normalize testimonials to handle both data formats
  const normalizedTestimonials = useMemo(() => (testimonials || []).map((t, index) => ({
    id: t.id || index + 1,
    name: t.name,
    role: t.role || t.location || 'Customer',
    content: t.content || t.comment || '',
    rating: t.rating
  })), [testimonials]);

  // Split testimonials into 3 columns
  const column1 = useMemo(() => normalizedTestimonials.filter((_, i) => i % 3 === 0), [normalizedTestimonials]);
  const column2 = useMemo(() => normalizedTestimonials.filter((_, i) => i % 3 === 1), [normalizedTestimonials]);
  const column3 = useMemo(() => normalizedTestimonials.filter((_, i) => i % 3 === 2), [normalizedTestimonials]);

  // If no testimonials, show a message
  if (normalizedTestimonials.length === 0) {
    return (
      <section className="py-20 bg-linear-to-br from-blue-900 via-sky-500 to-sky-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/80 text-lg">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  const TestimonialCard: React.FC<{ testimonial: typeof normalizedTestimonials[0] }> = ({ testimonial }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-cyan-500 hover:bg-white/15 transition-all duration-300 mb-4 min-h-[200px] flex flex-col">
      <div className="flex items-center gap-1 mb-3 h-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-sky-500 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 flex-1 min-h-[4.5em] line-clamp-6">
        "{testimonial.content}"
      </p>
      <div className="border-t border-cyan-500 pt-4">
        <p className="text-white font-bold text-base">{testimonial.name}</p>
        <p className="text-cyan-300 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );

  const MemoizedTestimonialCard = React.memo(TestimonialCard);

  return (
    <section className="py-10 bg-transparent overflow-hidden">


      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
          <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid with Vertical Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden min-h-[600px]">
          {/* Column 1 */}
          <div className="space-y-4 animate-slide-up-slow will-change-transform">
            {[...column1, ...column1].map((testimonial, index) => (
              <MemoizedTestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4 animate-slide-up-medium hidden md:block will-change-transform">
            {[...column2, ...column2].map((testimonial, index) => (
              <MemoizedTestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4 animate-slide-up-fast hidden lg:block will-change-transform">
            {[...column3, ...column3].map((testimonial, index) => (
              <MemoizedTestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);