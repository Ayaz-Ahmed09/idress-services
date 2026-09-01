import { Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
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

import { company } from "@/data/company-data";

export const metadata = {
  metadataBase: new URL(company.website),
  title: `${company.name} | In Dubai`,
  description:
    "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
  keywords: [
    "AC repair Dubai",
    "HVAC service",
    "AC maintenance",
    "painting services dubai",
    "electrician service dubai",
    "villa painting dubai",
    "apartment painting dubai",
    "best electrician in dubai",
    "best painting services in dubai",
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
    title: `${company.name} | In Dubai`,
    description:
      "Professional Painting Services in Dubai. Expert technicians for AC, Electrician, and all home appliances. 24/7 Emergency Service.",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: `${company.website}/graphgql.webp`,
        alt: company.name,
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
    canonical: company.website,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: company.name,
      description:
        "Professional Painting Services in Dubai. Expert technicians for AC, Electrician, and all home appliances. 24/7 Emergency Service.",
      url: company.website,
      logo: `${company.website}/logo.png`,
      image: `${company.website}/graphgql.webp`,
      telephone: company.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.office,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        addressCountry: "UAE",
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
        name: company.name,
        licenseNumber: company.licenseNumber,
        licencseName: company.name,
      },
      serviceType: "Repair & Maintenance Services",
      areaServed: "Dubai, UAE",
      description:
        "Professional Painting Services in Dubai. Expert technicians for AC, electrical, and all home appliances. 24/7 Emergency Service.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NT39MPTQ');`
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT39MPTQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <WebVitals />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
