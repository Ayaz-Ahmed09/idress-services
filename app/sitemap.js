export const dynamic = "force-static";


export default function sitemap() {
  const baseUrl = "https://idresselectronicesservices.com";
  const services = [
    "ac-repair",
    "fridge-repair",
    "tv-repair",
    "electronics-repair",
    "cctv-installation",
    "electrician-service",
    "ev-charger"
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
