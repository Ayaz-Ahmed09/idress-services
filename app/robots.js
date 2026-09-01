import { company } from "@/data/company-data";
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/book", "/thank-you"],
    },
    sitemap: `${company.website}/sitemap.xml`,
  };
}
