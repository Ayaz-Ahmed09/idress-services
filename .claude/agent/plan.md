PHASE 1

## PHASE 1: READ EXISTING CODEBASE
----------
### Task 1.1 - Review Current Structure
- Ex

## PHASE 2: CORE LAYOUT & NAVIGATION
----------
### Task 2.1 - Root Layout (app/layout.js)
REQUIREMENTS:
- Import and wrap all pages with Navbar + Footer + FloatingCTA
- Include LocalBusinessSchema in <head> on every page
- Set default metadata (title template, description, OG tags)
- Load fonts optimally using next/font (Inter + optional display font)
- Include Google Analytics / GTM script (deferred for speed)
- Add viewport meta tag for mobile
- Set color scheme / theme color meta tag

METADATA TEMPLATE:
{
    template: '%s | [Company Name]',
    default: 'Home Repair & Service | AC, Fridge, TV, CCTV, Electrician | [DUBAI]'
  
}
PERFORMANCE:
- Use next/font for zero layout shift
- Preconnect to Google Fonts if using external
- No render-blocking resources

### Task 2.2 - Glassmorphism Navbar (components/layout/Navbar.jsx)

DESIGN:
- Fixed top, glassmorphism background (backdrop-blur-xl, bg-white/70)
- Becomes solid on scroll (detect scroll > 50px)
- Logo left side
- Nav links center: Home, Services (dropdown), Book Now, Contact
- Right side: Phone CTA button (visible on desktop)
- Mobile: Hamburger menu → Full-screen overlay with all links

SERVICES MEGA DROPDOWN:
- 2-column or 3-column grid showing all 6 services
- Each with icon + title + brief text
- Links to respective service page

MOBILE MENU:
- Smooth slide animation
- Service links listed vertically
- Phone call button prominent
- WhatsApp button prominent
- Close button (X)

PERFORMANCE:
- Use 'use client' only for this component
- Minimal JS for toggle functionality
- CSS transitions for animations (not JS animation libraries)

### Task 2.3 - Footer (components/layout/Footer.jsx)

DESIGN:
- Dark background (dark slate/gray)
- 4-column grid layout:
  Column 1: Company logo, brief description, social media icons
  Column 2: Quick Links (Home, About, Contact, Blog)
  Column 3: Our Services (all 6 service links)
  Column 4: Contact Info (address, phone, email, hours)
- Bottom bar: Copyright, Privacy Policy, Terms links
- Schema markup for Organization embedded

PERFORMANCE:
- Server component (no 'use client')
- SVG icons instead of icon library
- Lazy load social media icons

## Task 2.3 - Footer (components/layout/Footer.jsx)
DESIGN:
- Dark background (dark slate/gray)
- 4-column grid layout:
  Column 1: Company logo, brief description, social media icons
  Column 2: Quick Links (Home, About, Contact, Blog)
  Column 3: Our Services (all 6 service links)
  Column 4: Contact Info (address, phone, email, hours)
- Bottom bar: Copyright, Privacy Policy, Terms links
- Schema markup for Organization embedded

PERFORMANCE:
- Server component (no 'use client')
- SVG icons instead of icon library
- Lazy load social media icons

## Task 2.4 - Floating CTA Buttons (components/layout/FloatingCTA.jsx)

DESIGN:
- Fixed bottom-right on mobile, bottom-right on desktop
- Two floating buttons:
  1. WhatsApp (green) - Opens WhatsApp with pre-filled message
  2. Phone Call (blue) - Direct tel: link
- Slight bounce animation on load
- Pulse effect on WhatsApp button
- Z-index above everything

WHATSAPP MESSAGE TEMPLATE:
"Hi! I need help with [service]. Please contact me."
- Dynamic based on current page service

MOBILE:
- Bottom fixed bar spanning full width with 2 buttons side-by-side
- OR two floating circular buttons stacked

PERFORMANCE:
- 'use client' component (needs pathname detection)
- Minimal DOM nodes
- CSS animations only
####  PHASE 3: HOMEPAGE (app/page.js) ---------------

## Task 3.1 - Homepage Metadata

export const metadata = {
  title: 'Home Appliance Repair & Service | AC, Fridge, TV, CCTV, Electrician | [City]',
  description: 'Expert home repair services - AC repair, refrigerator repair, TV repair, CCTV installation, electrician service, electronics repair. Same-day service in [City]. Call now!',
  keywords: 'ac repair, fridge repair, tv repair, cctv installation, electrician, home service, appliance repair, [city]',
  openGraph: {
    title: '[Company Name] - Your Trusted Home Service Partner',
    description: 'Expert repair services for AC, Fridge, TV, CCTV & more. Same-day service with warranty.',
    type: 'website',
    url: 'https://yourdomain.com',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }]
  },
  alternates: {
    canonical: 'https://yourdomain.com'
  }
};

## Task 3.2 - Hero Section with Service Selector (components/home/HeroHome.jsx)

DESIGN:
- Full viewport height hero section
- Gradient background (dynamic, subtle animation)
- Left side: 
  H1: "Expert Home Repair Services"
  H2/Subtitle: "AC • Fridge • TV • CCTV • Electrician • Electronics"
  Paragraph: Brief value proposition
  CTA Buttons: "Book Now" (primary) + "Call Us" (secondary)
  Trust badges below: "✓ Same Day Service  ✓ 90-Day Warranty  ✓ Certified Technicians"
- Right side / Below on mobile:
  SERVICE SELECTOR GRID (replaces search bar)

## Task 3.3 - SERVICE SELECTOR (components/home/ServiceSelector.jsx):
- Heading: "What do you need help with?"
- 6 cards in 2x3 or 3x2 grid
- Each card:
  - Service icon (emoji or SVG)
  - Service name
  - Brief text (e.g., "Not cooling? Gas refill? Installation?")
  - Click → navigates to /[service-slug]
- Cards have hover effect (lift + glow in service color)
- Glassmorphism card style

PERFORMANCE:
- Hero image: use next/image with priority loading
- Or use CSS gradient/SVG instead of image for fastest load
- Service selector is static links (no JS needed)
- Server component

## Task 3.3 - Bento Grid Services Overview (components/home/BentoGrid.jsx)

DESIGN:
- Section heading: "Our Services" with subtext
- CSS Grid bento layout (varied card sizes)
- 6 service cards with different sizes:
  - AC Repair: Large card (spans 2 columns) - main service
  - Fridge Repair: Medium card
  - TV Repair: Medium card
  - CCTV Installation: Medium card
  - Electrician: Medium card
  - Electronics Repair: Wide card (spans 2 columns)
- Each card contains:
  - Service icon
  - Service title
  - 3-4 key sub-services listed
  - "Learn More →" link
  - Gradient background matching service color
- Glassmorphism overlay effect

SPECIAL CARDS (integrated into bento):
- Card: "24/7 Emergency Service" with pulsing red dot
- Card: Stats counter (50,000+ customers, 200+ technicians)
- Card: "Trusted by leading brands" with logo marquee

PERFORMANCE:
- Server component
- CSS Grid (no JS for layout)
- Icons as inline SVG or emoji (no icon library)

## Task 3.4 - Why Choose Us Section (components/home/WhyChooseUs.jsx)

DESIGN:
- Section heading: "Why Choose [Company Name]?"
- 4-6 feature cards in grid:
  1. ⚡ Same-Day Service - "Get repairs done today"
  2. ✅ Certified Technicians - "Trained & verified professionals"
  3. 🛡️ 90-Day Warranty - "On all repairs & parts"
  4. 💰 Transparent Pricing - "No hidden charges"
  5. 🏠 Doorstep Service - "We come to you"
  6. 📞 24/7 Support - "Always available"
- Each card: Icon + Title + Brief description
- Subtle gradient backgrounds

PERFORMANCE:
- Server component
- Pure CSS effects

## Task 3.5 - Brand Marquee (components/service/BrandMarquee.jsx)

DESIGN:
- "Brands We Service" heading
- Infinite horizontal scroll of brand logos
- Grayscale logos → color on hover
- CSS-only infinite marquee animation (duplicate logos for seamless loop)
- Show logos for: Daikin, LG, Samsung, Voltas, Blue Star, Whirlpool, Sony, Hikvision, etc.

PERFORMANCE:
- CSS-only animation (no JS)
- SVG logos optimized
- Server component

## Task 3.6 - Testimonials Section (components/home/TestimonialsSlider.jsx)

DESIGN:
- Section heading: "What Our Customers Say"
- Auto-scrolling horizontal cards (CSS-only preferred)
- Each card: Customer name, service used, rating stars, review text, date
- Google review badge integration
- Rating aggregate shown (4.8/5 from 12,000+ reviews)

PERFORMANCE:
- CSS scroll-snap or CSS animation for auto-scroll
- If JS needed, minimal vanilla JS (no heavy slider library)
- 'use client' only if interaction needed

## Task 3.7 - CTA Banner (components/home/CTABanner.jsx)

DESIGN:
- Full-width gradient banner
- Heading: "Need Urgent Repair? Call Us Now!"
- Two large buttons: "📞 Call Now" + "💬 WhatsApp Us"
- Pulsing animation on phone icon
- Background subtle pattern or gradient mesh

PERFORMANCE:
- Server component
- Links are standard <a> tags

## Task 3.8 - Homepage FAQ Section
- 5-6 general FAQs about the company services
- Accordion component (details/summary HTML for zero JS)
- FAQ schema markup included

### PHASE 4: SERVICE PAGE TEMPLATE
Each service page follows identical structure with dynamic data.
Template: app/[service-slug]/page.js
## Task 4.1 - Service Page Metadata (Dynamic per service)
JavaScript

// Example for AC Repair: app/ac-repair/page.js

import { services } from '@/data/services';

const service = services['ac-repair'];

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.subServices.flatMap(s => s.keywords).join(', '),
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: 'website',
    url: `https://yourdomain.com/${service.slug}`,
    images: [{ url: `/og-${service.slug}.jpg`, width: 1200, height: 630 }]
  },
  alternates: {
    canonical: `https://yourdomain.com/${service.slug}`
  }
};
## Task 4.2 - Service Hero Section (components/service/ServiceHero.jsx)
text

PROPS: { service } - service data object

DESIGN:
- Full-width section with service-specific gradient background
- Left content:
  - Breadcrumb: Home > [Service Name]
  - H1: service.heroHeading
  - H2: service.heroSubheading
  - Paragraph: service.heroDescription
  - Trust indicators: "✓ Same Day  ✓ All Brands  ✓ Warranty"
  - CTA Buttons row:
    1. "📞 Call Now" → tel: link (large, primary)
    2. "💬 WhatsApp" → WhatsApp link (green)
    3. "📅 Book Online" → scroll to booking form or /book?service=slug
  - If emergencyAvailable: Show "🔴 24/7 Emergency Service Available" badge
- Right side (desktop): Service-related SVG illustration or icon composition

PERFORMANCE:
- Server component
- No images (use CSS gradients + SVG icons)
- All CTAs are standard <a> tags


## Task 4.3 - Sub-Services Grid (components/service/SubServiceCards.jsx)
text

PROPS: { subServices, serviceName, whatsappNumber }

DESIGN:
- Section heading: "Our [Service Name] Services"
- Subheading: "Select your issue below and get instant help"
- CSS Grid: 2 columns on mobile, 3-4 columns on desktop
- Each SubServiceCard:
  ┌─────────────────────────────────────┐
  │ 🌡️  Icon                           │
  │                                     │
  │ AC Not Cooling                      │
  │ (H3 heading)                        │
  │                                     │
  │ AC running but not cooling?         │
  │ We diagnose and fix compressor      │
  │ issues, gas leaks...                │
  │                                     │
  │ ⏱ 1-2 hours  |  💰 Starting ₹299  │
  │                                     │
  │ ┌──────────┐  ┌──────────────────┐  │
  │ │ 💬 WhatsApp│  │ 📅 Book Now     │  │
  │ └──────────┘  └──────────────────┘  │
  └─────────────────────────────────────┘

CARD BEHAVIOR:
- WhatsApp Button: Opens WhatsApp with pre-filled message:
  "Hi, I need help with [Sub-service title] ([Service name]). Please contact me."
  URL: https://wa.me/[number]?text=[encoded message]
  
- Book Now Button: Opens inline modal/form OR navigates to:
  /book?service=[service-slug]&issue=[sub-service-id]

CARD DESIGN:
- Glassmorphism card with hover lift effect
- Service-color left border or top accent
- Subtle shadow on hover

PERFORMANCE:
- Server component for cards
- WhatsApp links are plain <a> tags (no JS needed)
- Book Now either <a> link to /book or trigger client-side modal
Task 4.4 - Inline Booking Form Section
text

DESIGN:
- Section on the service page itself (no need to go to /book)
- Heading: "Book Your [Service Name] Appointment"
- Simple form fields:
  1. Name (required)
  2. Phone Number (required)  
  3. Email (optional)
  4. Service (pre-selected, readonly, from page context)
  5. Issue/Sub-service (dropdown - populated from subServices)
  6. Preferred Date (date picker)
  7. Preferred Time Slot (morning/afternoon/evening dropdown)
  8. Address / Location (textarea)
  9. Additional Notes (textarea, optional)
- Submit button: "📅 Book Appointment"
- Below form: "Or call us directly: 📞 [Phone Number]"

FORM SUBMISSION:
- POST to /api/book
- API route sends email to company inbox using Nodemailer / Resend
- On success: Show success message + WhatsApp follow-up link
- On error: Show error message with phone number fallback

PERFORMANCE:
- 'use client' component (needs form state)
- No heavy form libraries (use native HTML form + useState)
- Client-side validation with HTML5 attributes
- Loading state on submit button
## Task 4.5 - How It Works / Process Section (components/service/ServiceProcess.jsx)
text

DESIGN:
- Heading: "How It Works"
- 4 steps in horizontal timeline (vertical on mobile):
  Step 1: 📞 "Book Service" - Call, WhatsApp, or fill the form
  Step 2: 👨‍🔧 "Technician Assigned" - Expert dispatched to your location
  Step 3: 🔍 "Diagnosis & Repair" - Issue identified and fixed on spot
  Step 4: ✅ "Quality Check" - Testing done, warranty provided
- Each step: Number circle + Icon + Title + Description
- Connected by dashed line

PERFORMANCE:
- Server component
- CSS-only design
## Task 4.6 - Pricing Section (components/service/PricingTable.jsx)
text

DESIGN:
- Heading: "Transparent Pricing"
- Table or card grid showing sub-service prices
- Columns: Service | Estimated Time | Starting Price
- Note at bottom: "* Prices may vary based on brand, model, and issue complexity. Final quote given after diagnosis."
- CTA: "Get Exact Quote → Call/WhatsApp"

PERFORMANCE:
- Server component
- Simple HTML table with Tailwind styling
## Task 4.7 - Brands We Service (components/service/BrandMarquee.jsx)
text

(Reusable component from homepage)
PROPS: { brands } - array of brand names specific to the service

DESIGN:
- Heading: "We Service All Major Brands"
- Logo marquee specific to the service category
- "& Many More" at the end
# Task 4.8 - Emergency Banner (components/service/EmergencyBanner.jsx)
text

CONDITIONAL: Only show if service.emergencyAvailable === true

DESIGN:
- Full-width red/orange gradient banner
- Pulsing red dot indicator
- Text: "🚨 24/7 Emergency [Service Name] Available"
- "Call now for immediate assistance"
- Large phone call button
- Appears between sections for visibility

PERFORMANCE:
- Server component
- CSS pulse animation
## Task 4.9 - Service Area Section (components/service/ServiceAreaMap.jsx)
text

DESIGN:
- Heading: "Our Service Areas"
- Grid of area/locality names served
- Grouped by zones or listed alphabetically
- Note: "Can't find your area? Call us to check availability."
- NO actual map embed (Google Maps iframe kills page speed)
- Instead: Styled list/grid of areas with location pin icon

PERFORMANCE:
- Server component
- No external embeds
- Good for local SEO (area keywords)
## Task 4.10 - Service FAQ Section (components/service/ServiceFAQ.jsx)
text

PROPS: { faqs, serviceName }

DESIGN:
- Heading: "Frequently Asked Questions about [Service Name]"
- Accordion using <details><summary> HTML (zero JS!)
- Each FAQ: Question as summary, answer as content
- Smooth open/close with CSS transition (max-height trick)
- FAQ Schema markup included via FAQSchema component

PERFORMANCE:
- Server component
- Zero JavaScript
- <details> + <summary> native HTML
- Schema generated server-side
Task 4.11 - Related Services Section (components/service/RelatedServices.jsx)
text

DESIGN:
- Heading: "Other Services You May Need"
- Horizontal scroll or grid of 5 other service cards (excluding current)
- Each card: Icon + Title + Brief + "Learn More →" link
- Helps with internal linking for SEO

PERFORMANCE:
- Server component
- Internal links for link equity distribution
Task 4.12 - Service-Specific Testimonials
text

- 2-3 reviews specific to the service
- Customer name, rating, review text
- Schema AggregateRating for the service
Task 4.13 - Phone Call CTA Section (between sections)
text

DESIGN:
- Interspersed between major sections on service page
- Simple bar: "Need immediate help? 📞 Call [Phone Number]"
- Full-width, accent color background
- <a href="tel:+91XXXXXXXXXX"> for click-to-call

PLACEMENT: After SubServiceCards and after FAQ sections


#### PHASE 5: SERVICE PAGES (Individual Route Files)
Each service page imports the template components and passes service-specific data.
## Task 5.1 - AC Repair Page (app/ac-repair/page.js)
text

SECTIONS IN ORDER:
1. ServiceSchema + FAQSchema + BreadcrumbSchema (JSON-LD in head)
2. ServiceHero (with AC-specific data, blue gradient)
3. PhoneCallCTA
4. SubServiceCards (8 AC sub-services)
5. InlineBookingForm (pre-selected: AC Repair)
6. ServiceProcess
7. EmergencyBanner (24/7 available)
8. PricingTable (AC service prices)
9. PhoneCallCTA
10. BrandMarquee (AC brands)
11. ServiceFAQ (AC-specific FAQs)
12. Testimonials (AC repair reviews)
13. ServiceAreaMap
14. RelatedServices (other 5 services)
15. CTABanner (final CTA)
## Task 5.2 - Fridge Repair Page (app/fridge-repair/page.js)
text

Same structure as Task 5.1 with fridge-repair data
Gradient: teal/emerald
Emergency: Yes
## Task 5.3 - TV Repair Page (app/tv-repair/page.js)
text

Same structure with tv-repair data
Gradient: purple/pink
Emergency: No (omit EmergencyBanner)
## Task 5.4 - Electronics Repair Page (app/electronics-repair/page.js)
text

Same structure with electronics-repair data
Gradient: orange/amber
Emergency: No
## Task 5.5 - CCTV Installation Page (app/cctv-installation/page.js)
text

Same structure with cctv-installation data
Gradient: red/rose
Emergency: No
Additional: "Free Site Survey" CTA badge in hero
## Task 5.6 - Electrician Service Page (app/electrician-service/page.js)
text

Same structure with electrician-service data
Gradient: yellow/orange
Emergency: Yes


 ##### PHASE 6: BOOKING SYSTEM
Task 6.1 - Booking Page (app/book/page.js)
text

ACCEPTS URL PARAMS: ?service=ac-repair&issue=ac-not-cooling

DESIGN:
- Clean, minimal page focused on conversion
- Heading: "Book Your Service"
- Multi-step form (BookingForm component)
- Side panel: Company contact info + trust badges

METADATA:
  title: "Book a Service | [Company Name]"
  description: "Book AC repair, fridge repair, TV repair, CCTV installation, or electrician service online. Quick booking, same-day service."
  robots: "noindex, follow" (don't index booking page)
Task 6.2 - Multi-Step Booking Form (components/booking/BookingForm.jsx)
text

'use client' component

STEPS:
Step 1 - Service Selection (StepServiceSelect):
  - 6 service cards to select from
  - Pre-selected if ?service param exists
  - Click to select, highlighted state

Step 2 - Issue Selection (StepIssueSelect):
  - Shows sub-services of selected service
  - Select one or multiple issues
  - Pre-selected if ?issue param exists
  - "Other" option with text input

Step 3 - Schedule (StepSchedule):
  - Preferred date (next 7 days shown as clickable date cards)
  - Time slot: Morning (8-12), Afternoon (12-4), Evening (4-8)
  - Address input (textarea)
  - Landmark (optional)

Step 4 - Contact Details (StepContact):
  - Full Name (required)
  - Phone Number (required, validated)
  - Email (optional)
  - Any additional notes

Step 5 - Confirmation (StepConfirm):
  - Summary of all selections
  - Edit buttons for each section
  - "Confirm Booking" button
  - Terms agreement checkbox

PROGRESS INDICATOR (ProgressBar):
  - 5 steps shown as connected circles
  - Active step highlighted
  - Completed steps with checkmark
  - Step labels below

TRANSITIONS:
  - Slide animation between steps (CSS transform)
  - Form state managed with useState (no external library)

SUBMISSION:
  - POST to /api/book
  - Show loading spinner on button
  - On success: redirect to /thank-you
  - On error: show inline error with retry option

PERFORMANCE:
  - Single 'use client' component
  - No form library (native form + React state)
  - Lazy validation (validate on "Next" click)
Task 6.3 - Booking API Route (app/api/book/route.js)
text

METHOD: POST

RECEIVES:
{
  service: "ac-repair",
  issues: ["ac-not-cooling", "ac-gas-refill"],
  date: "2025-01-15",
  timeSlot: "morning",
  address: "...",
  landmark: "...",
  name: "...",
  phone: "+91XXXXXXXXXX",
  email: "...",
  notes: "..."
}

ACTIONS:
1. Validate required fields (name, phone, service, date)
2. Sanitize inputs
3. Send email to company inbox using Nodemailer or Resend:
   - To: booking@yourdomain.com
   - Subject: "New Booking: [Service Name] - [Customer Name]"
   - HTML email template with all booking details
   - Reply-To: customer email (if provided)
4. (Optional) Send confirmation SMS/WhatsApp to customer
5. Return success response

EMAIL TEMPLATE:
  Professional HTML email with:
  - Company header
  - Booking reference number (timestamp-based)
  - Customer details table
  - Service & issue details
  - Date/time/address
  - Phone number (clickable)
  - "Call customer" button

PERFORMANCE:
  - Use Resend (free tier, easy setup) or Nodemailer with SMTP
  - Environment variables for email credentials
  - Rate limiting consideration (optional)
Task 6.4 - Thank You Page (app/thank-you/page.js)
text

DESIGN:
- Success checkmark animation (CSS)
- Heading: "Booking Confirmed! 🎉"
- Message: "Our team will contact you within 30 minutes to confirm your appointment."
- Booking reference number (if generated)
- Contact info: "Questions? Call us at [Phone]"
- WhatsApp button: "Track your booking on WhatsApp"
- Link: "Book Another Service"
- Link: "Return to Home"

METADATA:
  robots: "noindex, nofollow" (don't index this page)

  ### PHASE 7: SEO & SCHEMA MARKUP
Task 7.1 - LocalBusiness Schema (components/seo/LocalBusinessSchema.jsx)
text

Placed in root layout (every page)

JSON-LD:
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yourdomain.com/#business",
  "name": "[Company Name]",
  "image": "https://yourdomain.com/logo.png",
  "url": "https://yourdomain.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "booking@yourdomain.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "addressRegion": "...",
    "postalCode": "...",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  },
  "openingHoursSpecification": [...],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "12000"
  },
  "sameAs": [social media URLs]
}
Task 7.2 - Service Schema (components/seo/ServiceSchema.jsx)
text

Placed on each service page

GENERATES per service:
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Service Description]",
  "provider": { "@id": "https://yourdomain.com/#business" },
  "serviceType": "[Service Type]",
  "areaServed": {
    "@type": "City",
    "name": "[City]"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "[Service] Services",
    "itemListElement": [
      // Each sub-service as Offer
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[Sub-service Name]",
          "description": "[Sub-service Description]"
        },
        "price": "299",
        "priceCurrency": "INR"
      }
    ]
  }
}
Task 7.3 - FAQ Schema (components/seo/FAQSchema.jsx)
text

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer]"
      }
    }
  ]
}
Task 7.4 - Breadcrumb Schema (components/seo/BreadcrumbSchema.jsx)
text

{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com" },
    { "@type": "ListItem", "position": 2, "name": "[Service Name]", "item": "https://yourdomain.com/[slug]" }
  ]
}
Task 7.5 - Semantic HTML Requirements
text

EVERY PAGE MUST USE:
- Exactly ONE <h1> tag (page main heading)
- Proper heading hierarchy (h1 > h2 > h3, no skipping)
- <main> tag wrapping page content
- <section> tags for each content section
- <article> for blog posts (if added later)
- <nav> for navigation
- <footer> for footer
- <address> for contact information
- <time> for dates
- aria-labels on interactive elements
- alt text on all images
- rel="noopener noreferrer" on external links
- Proper <a> tags for all links (not div/button acting as links)
Task 7.6 - Meta Tags Checklist (per page)
text

- <title> unique per page (50-60 chars)
- <meta name="description"> unique per page (150-160 chars)
- <meta name="keywords"> relevant keywords
- <link rel="canonical"> self-referencing canonical
- <meta property="og:title">
- <meta property="og:description">
- <meta property="og:image"> (1200x630)
- <meta property="og:url">
- <meta property="og:type">
- <meta property="og:site_name">
- <meta name="twitter:card" content="summary_large_image">
- <meta name="twitter:title">
- <meta name="twitter:description">
- <meta name="robots" content="index, follow"> (or noindex for /book, /thank-you)
