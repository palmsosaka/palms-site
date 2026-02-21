import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const routes = [
    "/",
    "/emergency/",
    "/tow/",
    "/rental/",
    "/repair/",
    "/inspection/",
    "/buy-sell/",
    "/price/",
    "/flow/",
    "/faq/",
    "/works/",
    "/area/",
    "/company/",
    "/contact/",
    "/privacy/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" || route === "/emergency/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/emergency/" ? 0.9 : 0.7,
  }));
}
