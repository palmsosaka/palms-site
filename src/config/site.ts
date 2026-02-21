/** Must match next.config.ts basePath (empty string for custom domain) */
export const BASE_PATH = "/palms-site";

export const siteConfig = {
  companyName: "PALMS",
  brand: "PALMS",
  area: "堺市・大阪南部",
  areaDetail: "堺市南区を中心に、堺市全域・大阪南部エリア",
  phone: "072-220-6886",
  phoneRaw: "0722206886",
  fax: "072-320-2401",
  lineUrl: "{{LINE_URL}}",
  address: "〒590-0152 大阪府堺市南区和田379-1",
  hours: "可能な限り24時間対応",
  mapUrl: "https://www.google.com/maps?q=大阪府堺市南区和田379-1",
  siteUrl: "https://example.com",
  themeColor: "#CFE8B4",
} as const;
