import { MetadataRoute } from "next";

const BASE_URL = "https://albremodeling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/interior-exterior-painting", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/bathroom-remodeling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/kitchen-remodeling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/tile-installation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/fire-water-restoration", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/home-building", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/addition", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/our-work", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
