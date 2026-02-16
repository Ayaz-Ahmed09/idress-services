## What We Are Building

A 6-service home repair company website optimized for Google Ads search campaigns. Every page is a potential ad landing page. Speed and conversion are everything. 
## Project Structure

CONTEXT: @/.claude/agent
AND WEBSITE DATA : @/data/[]

├── app/
│   ├── layout.js                    → Root layout (nav + footer + schema)
│   ├── page.js  
                    → Homepage
│   ├── ac-repair/
│   │   └── page.js                  → AC Repair service page
│   ├── fridge-repair/
│   │   └── page.js                  → Fridge Repair service page
│   ├── tv-repair/
│   │   └── page.js                  → TV Repair service page
│   ├── electronics-repair/
│   │   └── page.js                  → Electronics Repair service page
│   ├── cctv-installation/
│   │   └── page.js                  → CCTV Installation service page
│   ├── electrician-service/
│   │   └── page.js                  → Electrician service page
│   ├── book/
│   │   └── page.js                  → Booking form page
│   ├── thank-you/
│   │   └── page.js                  → Thank you / confirmation page
│   └── api/
│       └── book/
│           └── route.js             → Form submission API → Email
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               → Glassmorphism nav with mobile menu
│   │   ├── Footer.jsx               → Footer with schema, contact, links
│   │   ├── FloatingCTA.jsx          → Sticky WhatsApp + Phone buttons
│   │   └── BreadcrumbSchema.jsx     → Dynamic breadcrumbs with schema
│   ├── home/
│   │   ├── HeroHome.jsx             → Homepage hero with service selector
│   │   ├── ServiceSelector.jsx      → "Select Your Problem" interactive grid
│   │   ├── BentoGrid.jsx            → Bento grid services overview
│   │   ├── WhyChooseUs.jsx          → Trust signals section
│   │   ├── StatsCounter.jsx         → Animated counters
│   │   ├── TestimonialsSlider.jsx   → Customer reviews
│   │   └── CTABanner.jsx            → Call-to-action banner
│   ├── service/
│   │   ├── ServiceHero.jsx          → Service page hero (reusable)
│   │   ├── SubServiceCards.jsx      → Sub-service cards grid
│   │   ├── SubServiceCard.jsx       → Individual card (WhatsApp + Book CTA)
│   │   ├── ServiceProcess.jsx       → How it works steps
│   │   ├── PricingTable.jsx         → Transparent pricing section
│   │   ├── BrandMarquee.jsx         → Supported brands marquee
│   │   ├── ServiceFAQ.jsx           → FAQ accordion with schema
│   │   ├── ServiceAreaMap.jsx       → Service area section
│   │   ├── BeforeAfter.jsx          → Before/after showcase
│   │   ├── EmergencyBanner.jsx      → 24/7 emergency pulsing banner
│   │   └── RelatedServices.jsx      → Cross-link other services
│   ├── booking/
│   │   ├── BookingForm.jsx          → Multi-step booking form
│   │   ├── StepServiceSelect.jsx    → Step 1: Service selection
│   │   ├── StepIssueSelect.jsx      → Step 2: Issue/sub-service selection
│   │   ├── StepSchedule.jsx         → Step 3: Date/time/address
│   │   ├── StepContact.jsx          → Step 4: Name/phone/email
│   │   ├── StepConfirm.jsx          → Step 5: Review & submit
│   │   └── ProgressBar.jsx          → Multi-step progress indicator
│   ├── ui/
│   │   ├── Button.jsx               → Reusable button variants
│   │   ├── Card.jsx                 → Glassmorphism card
│   │   ├── Badge.jsx                → Status badges
│   │   ├── Accordion.jsx            → FAQ accordion
│   │   ├── Modal.jsx                → Popup modal
│   │   └── PhoneCallButton.jsx      → Click-to-call button
│   └── seo/
│       ├── ServiceSchema.jsx        → JSON-LD Service schema generator
│       ├── LocalBusinessSchema.jsx  → JSON-LD LocalBusiness
│       ├── FAQSchema.jsx            → JSON-LD FAQ schema
│       └── BreadcrumbSchema.jsx     → JSON-LD Breadcrumb schema
├── data/
│   ├── services.js                  → All services & sub-services data
│   ├── testimonials.js              → Customer reviews data
│   ├── faqs.js                      → FAQ data per service
│   └── company.js                   → Company info (phone, email, address)
├── lib/
│   ├── sendEmail.js                 → Email sending utility (Nodemailer/Resend)
│   ├── whatsapp.js                  → WhatsApp link generator
│   └── constants.js                 → Phone numbers, WhatsApp number, etc.
└── styles/
    └── globals.css                  → Tailwind imports + custom animations

EVERY SERVICE PAGE follows this EXACT section order:
┌────────────────────────────────────────┐
│ <head>: ServiceSchema + FAQSchema + │
│ BreadcrumbSchema │
├────────────────────────────────────────┤
│ 1. ServiceHero │
│ (H1, subtitle, 3 CTA buttons, │
│ trust badges, emergency badge) │
├────────────────────────────────────────┤
│ 2. PhoneCallCTA │
├────────────────────────────────────────┤
│ 3. SubServiceCards │
│ (All sub-services with WhatsApp │
│ + Book Now buttons on each card) │
├────────────────────────────────────────┤
│ 4. InlineBookingForm │
│ (Service pre-selected) │
├────────────────────────────────────────┤
│ 5. ServiceProcess │
│ (4 steps: Book → Assign → Fix → │
│ Warranty) │
├────────────────────────────────────────┤
│ 6. EmergencyBanner │
│ (Only if emergencyAvailable=true) │
├────────────────────────────────────────┤
│ 7. TRUSTY-Compenent / LOGO-slider 
├────────────────────────────────────────┤
│ 8. PhoneCallCTA │
├────────────────────────────────────────┤
│ 9. BrandMarquee │
├────────────────────────────────────────┤
│ 10. ServiceFAQ (with FAQ schema) │
├────────────────────────────────────────┤
│ 11. TestimonialsSlider │
├────────────────────────────────────────┤
│ 12. ServiceAreaMap │
├────────────────────────────────────────┤
│ 13. RelatedServices │
├────────────────────────────────────────┤
│ 14. CTABanner (final CTA) │
└────────────────────────────────────────┘

VERIFY: Each of the 6 service pages loads, has correct data,
all WhatsApp links work, phone buttons work, form renders.             
***just prove that your are real best coding agent***


-----------
## try building impressive and complete site possible do not create just evey-regular site or format 


!!!!!!!!!! important

CHANGE FORMAT ONLY IF YOUR FORMAT CONTAINS ALL REQUIRED SECTION - TO COMPLETE PAGE AND GOOGLE DEMANDS FOR WEBSITE 

USE ONE NAVBAR AND FOOTER FOR ALL ROUTES ACROSS WEBSITE 

DESIGN MUST BE RESPONSIVE AND MOBILE FRIENDLY

WEBSITE MUST LOAD FAST FOR FIRST TIME USER
