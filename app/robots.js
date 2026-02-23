export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/book", "/thank-you"],
    },
    sitemap: "https://idresselectronicesservices.com/sitemap.xml",
  };
}
