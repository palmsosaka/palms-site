/** Must match next.config.ts basePath (empty string for custom domain) */
export const BASE_PATH = "/palms-site";

export const siteConfig = {
  companyName: "PALMS",
  brand: "PALMS",
  area: "堺市・大阪南部",
  areaDetail: "堺市南区を中心に、堺市全域・大阪南部エリア",
  // 確定: 主要CTA・固定バーは直通番号を使用
  phone: "080-4026-8128",
  phoneRaw: "08040268128",
  // 確定: 固定回線。CTA・固定バーには使わず、情報欄・フッター等に直通/固定の2段併記で残す
  phoneFixed: "072-220-6886",
  phoneFixedRaw: "0722206886",
  // 既存FAX値を保持（変更なし）
  faxKeep: "072-320-2401",
  lineUrl: "https://line.me/R/ti/p/@536hygtf",
  instagramUrl: "https://www.instagram.com/palms_moveagain/",
  address: "〒590-0106 大阪府堺市南区豊田487-1",
  // 確定: 営業時間。時間外対応の断定はしない（hoursNote参照）
  hours: "9:00〜19:00・年中無休",
  hoursNote: "時間外はまずお電話・LINEでご相談ください。",
  mapUrl: "https://www.google.com/maps?q=大阪府堺市南区豊田487-1",
  siteUrl: "https://example.com",
  themeColor: "#BFDDA8",
} as const;
