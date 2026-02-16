must be done before production


// next.config.js optimizations

const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  
  // Compression
  compress: true,
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        source: '/(.*)\\.(js|css|svg|png|jpg|jpeg|webp|avif|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  
  // Powered by header removal
  poweredByHeader: false,
};

////////////////////Component Performance Rules

CRITICAL RULES FOR AI TO FOLLOW:

1. SERVER COMPONENTS BY DEFAULT:
   - Every component is a Server Component unless it needs interactivity
   - Only add 'use client' when ABSOLUTELY necessary
   - Components that need 'use client':
     - Navbar (mobile toggle)
     - BookingForm (form state)
     - FloatingCTA (pathname detection)
     - Any accordion that uses JS (prefer HTML details/summary instead)

2. NO HEAVY LIBRARIES:
   - ❌ No Framer Motion (use CSS animations)
   - ❌ No GSAP (use CSS animations + Intersection Observer)
   - ❌ No Swiper/Slick (use CSS scroll-snap)
   - ❌ No Axios (use native fetch)
   - ❌ No Moment.js (use native Date)
   - ❌ No React Hook Form (use native form + useState)
   - ❌ No Material UI / Chakra / Ant Design
   - ✅ Only Tailwind CSS for styling
   - ✅ Nodemailer OR Resend for email (API route only)

3. IMAGE OPTIMIZATION:
   - Use next/image for ALL images
   - Provide width/height to prevent layout shift
   - Use priority on above-fold images only
   - Prefer SVG/CSS over raster images where possible
   - Use blur placeholder for large images

4. FONT OPTIMIZATION:
   - Use next/font/google for Google Fonts
   - Subset fonts to Latin only
   - Display: swap for fast text rendering
   - Load only weights needed (400, 500, 600, 700)

5. CSS OPTIMIZATION:
   - Tailwind v4.1 handles purging automatically
   - No inline styles (use Tailwind classes)
   - Custom CSS only in globals.css for animations
   - Use CSS containment for complex sections

6. JAVASCRIPT BUDGET:
   - Target: < 100KB total JS bundle (first load)
   - Minimize 'use client' components
   - No client-side data fetching (all data is static/build-time)
   - Use dynamic imports for below-fold client components