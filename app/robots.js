export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/book", "/thank-you"],
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
