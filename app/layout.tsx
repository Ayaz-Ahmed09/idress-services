import { Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import PageViewTracker from "@/components/modules/PageTracker_GTM";
import { WebVitals } from "./components/WebVitalsCore";
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
  title: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES | In Dubai",
  description:
    "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
  keywords: [
    "AC repair Dubai",
    "HVAC service",
    "AC maintenance",
    "electronics repair dubai",
    "fridge repair dubai",
    "tv repair dubai",
    "washing machine repair dubai",
    "cctv installation dubai",
    "electrician service dubai",
    "home maintenance dubai",
    "appliance repair dubai",
    "emergency AC repair",
    "AC diagnostics",
    "industrial chiller repair",
    "split AC service",
    "AC deep cleaning Dubai",
  ],
  openGraph: {
    title: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES | In Dubai",
    description:
      "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://idresselectronicesservices.com/graphgql.webp",
        alt: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES",
        width: 1200,
        height: 600,

      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://idresselectronicesservices.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES",
      description:
        "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
      url: "https://idresselectronicesservices.com/",
      logo: "https://idresselectronicesservices.com/3d-logo.png",
      image: "https://idresselectronicesservices.com/graphgql.webp",
      telephone: "+971 55 786 4636",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
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

      areaServed: "Dubai, UAE",
    },
    {
      "@type": "Service",
      name: "Repair & Maintenance",
      provider: {
        "@type": "LocalBusiness",
        name: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES",
        licenseNumber: "213983",
        licencseName: "IDRESS HUSSAIN ELECTRONICES SERVICES REP DEVICES",
      },
      serviceType: "Repair & Maintenance Services",
      areaServed: "Dubai, UAE",
      description:
        "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <GoogleTagManager gtmId="GTM-KCPJ9C9M" />
      <body
        className={`${ outfit.variable } ${ spaceGrotesk.variable } antialiased`}
      >
        <WebVitals />
        <Navbar />
        <PageViewTracker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
