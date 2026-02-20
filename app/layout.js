import { Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Precision AC Repair & Diagnostics | Premium HVAC Service Dubai",
  description:
    "Expert AC repair, maintenance, and diagnostics for all brands in Dubai. 24/7 emergency service, certified technicians, and smart diagnostic tools. Book your AC service today.",
  keywords: [
    "AC repair Dubai",
    "HVAC service",
    "AC maintenance",
    "emergency AC repair",
    "AC diagnostics",
    "industrial chiller repair",
    "split AC service",
    "AC deep cleaning Dubai",
  ],
  openGraph: {
    title: "Precision AC Repair & Diagnostics | Premium HVAC Service Dubai",
    description:
      "Expert AC repair, maintenance, and diagnostics for all brands in Dubai. 24/7 emergency service.",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Precision AC Repair & Diagnostics",
      description:
        "Premium AC repair, maintenance, and diagnostic services for all brands in Dubai.",
      url: "https://precisionac.ae",
      telephone: "+971-50-123-4567",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Business Bay",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1865,
        longitude: 55.2628,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
      areaServed: "Dubai, UAE",
    },
    {
      "@type": "Service",
      name: "AC Repair & Maintenance",
      provider: {
        "@type": "LocalBusiness",
        name: "Precision AC Repair & Diagnostics",
      },
      serviceType: "HVAC Repair",
      areaServed: "Dubai, UAE",
      description:
        "Professional AC repair, deep cleaning, installation, and maintenance services for residential and commercial properties.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
