import { services } from "@/data/services";
import { company } from "@/data/company-data";
export const dynamic = "force-dynamic";
const SITE_URL = company.website;
const SITE_NAME = company.name;
const DEFAULT_LOCALE = "en_AE";

/**
 * Generates comprehensive Next.js Metadata API object for any service page.
 * Includes title, description, keywords, Open Graph, Twitter, canonical, and robots.
 *
 * Usage in any page.js:
 *   import { generateServiceMetadata } from "@/lib/generateServiceMetadata";
 *   export const metadata = generateServiceMetadata("ac-repair");
 *
 * @param {string} serviceSlug - key from data/services.js (e.g. "ac-repair")
 * @param {object} overrides   - optional field overrides
 */
export function generateServiceMetadata(serviceSlug, overrides = {}) {
        const service = services[serviceSlug];
        if (!service) {
                return {
                        title: `${SITE_NAME} — Professional Home Services in Dubai`,
                        description:
                                "Premium AC repair, painting , electrical, and maintenance services across Dubai. Licensed technicians, same-day service, satisfaction guaranteed.",
                };
        }

        const title =
                overrides.title || service.seoTitle || service.metaTitle || service.title;
        const description =
                overrides.description ||
                service.seoDescription ||
                service.metaDescription ||
                service.heroDescription;
        const keywords = [
                ...(service.seoKeywords || []),
                ...(overrides.keywords || []),
        ];
        const canonical = `/${serviceSlug}`;
        const fullUrl = `${SITE_URL}${canonical}`;

        return {
                title,
                description,
                keywords,
                alternates: {
                        canonical: fullUrl,
                },
                openGraph: {
                        title,
                        description,
                        url: fullUrl,
                        siteName: SITE_NAME,
                        locale: DEFAULT_LOCALE,
                        type: "website",
                        images: [
                                {
                                        url: `${SITE_URL}/graphgql.webp`,
                                        width: 1200,
                                        height: 630,
                                        alt: title,
                                },
                        ],
                },
                twitter: {
                        card: "summary_large_image",
                        title,
                        description,
                        images: [`${SITE_URL}/og-${serviceSlug}.jpg`],
                },
                robots: {
                        index: true,
                        follow: true,
                        "max-image-preview": "large",
                        "max-snippet": -1,
                        "max-video-preview": -1,
                },
                other: {
                        "geo.region": "AE-DU",
                        "geo.placename": "Dubai",
                },
                ...overrides,
        };
}

/**
 * Generates JSON-LD structured data for a service page.
 * Returns a script-safe JSON string for <script type="application/ld+json">.
 *
 * Includes: LocalBusiness, Service, and FAQPage schemas.
 *
 * @param {string} serviceSlug - key from data/services.js
 */
export function generateServiceJsonLd(serviceSlug) {
        const service = services[serviceSlug];
        if (!service) return null;

        const canonical = `${SITE_URL}/${serviceSlug}`;

        const localBusiness = {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#business`,
                name: SITE_NAME,
                url: SITE_URL,
                image: `${SITE_URL}/graphgql.webp`,
                description: "Professional Electronics Repair Services in Dubai. Expert technicians for AC, Fridge, TV, Washing Machine, and all home appliances. 24/7 Emergency Service.",
                telephone: company.phoneDisplay,
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

                areaServed: {
                        "@type": "City",
                        name: "Dubai",
                },
                sameAs: [],
        };

        const serviceSchema = {
                "@type": "Service",
                name: service.title,
                provider: {
                        "@type": "LocalBusiness",
                        name: SITE_NAME,
                        image: `${SITE_URL}/graphgql.webp`,
                },
                serviceType: service.jsonLdServiceType || service.title,
                areaServed: {
                        "@type": "City",
                        name: "Dubai",
                },
                url: canonical,
                image: `${SITE_URL}/og-${serviceSlug}.jpg`,
                description:
                        service.seoDescription || service.metaDescription || service.heroDescription,
                offers: {
                        "@type": "Offer",
                        url: canonical,
                        priceCurrency: "AED",
                        price: "150",
                        availability: "https://schema.org/InStock",
                        areaServed: "Dubai, UAE",
                },
                aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.8",
                        reviewCount: "1284",
                        bestRating: "5",
                        worstRating: "1",
                },
        };

        const faqSchema =
                service.faqs && service.faqs.length > 0
                        ? {
                                "@type": "FAQPage",
                                mainEntity: service.faqs.map((faq) => ({
                                        "@type": "Question",
                                        name: faq.question,
                                        acceptedAnswer: {
                                                "@type": "Answer",
                                                text: faq.answer,
                                        },
                                })),
                        }
                        : null;

        const graph = [localBusiness, serviceSchema];
        if (faqSchema) graph.push(faqSchema);

        return {
                "@context": "https://schema.org",
                "@graph": graph,
        };
}
