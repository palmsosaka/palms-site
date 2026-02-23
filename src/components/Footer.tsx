import Link from "next/link";
import Image from "next/image";
import { siteConfig, BASE_PATH } from "@/config/site";

const footerLinks = [
  {
    title: "サービス",
    links: [
      { href: "/emergency/", label: "緊急対応" },
      { href: "/tow/", label: "レッカー" },
      { href: "/rental/", label: "レンタカー" },
      { href: "/repair/", label: "鈑金・修理" },
      { href: "/inspection/", label: "車検・整備" },
      { href: "/buy-sell/", label: "買取・販売" },
    ],
  },
  {
    title: "情報",
    links: [
      { href: "/price/", label: "料金目安" },
      { href: "/flow/", label: "ご依頼の流れ" },
      { href: "/works/", label: "事例" },
      { href: "/faq/", label: "よくある質問" },
      { href: "/area/", label: "対応エリア" },
    ],
  },
  {
    title: "会社",
    links: [
      { href: "/company/", label: "会社情報" },
      { href: "/contact/", label: "お問い合わせ" },
      { href: "/privacy/", label: "プライバシーポリシー" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#c5e2a5] to-[#a8d580] text-[#1a2e12]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-3 inline-block">
              <Image
                src={`${BASE_PATH}/images/logo.png`}
                alt={siteConfig.brand}
                width={120}
                height={40}
                className="h-10 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="text-sm">{siteConfig.companyName}</p>
            <p className="mt-2 text-sm">{siteConfig.address}</p>
            <p className="text-sm">TEL: {siteConfig.phone}</p>
            <p className="text-sm">FAX: {siteConfig.fax}</p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="mb-3 font-bold">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#2d4a1e] hover:text-[#1a2e12]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-[#1a2e12]/15 pt-8 text-center text-sm text-[#2d4a1e]/70">
          &copy; {new Date().getFullYear()} {siteConfig.brand}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
