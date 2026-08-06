"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, BASE_PATH } from "@/config/site";

const footerLinks = [
  {
    title: "サービス",
    links: [
      { href: "/emergency/", label: "事故・トラブル対応" },
      { href: "/tow/", label: "レッカー" },
      { href: "/rental/", label: "レンタカー" },
      { href: "/repair/", label: "鈑金・修理" },
      { href: "/inspection/", label: "車検・整備" },
      { href: "/buy-sell/", label: "買取・販売" },
      { href: "/price/", label: "料金目安" },
      { href: "/flow/", label: "ご依頼の流れ" },
      { href: "/works/", label: "事例" },
      { href: "/area/", label: "対応エリア" },
    ],
  },
  {
    title: "PALMSの領域",
    links: [
      { href: "/emergency/", label: "SERVICE" },
      { href: "/buy-sell/", label: "MOTORS" },
      { href: "/experience/", label: "EXPERIENCE" },
      { href: "/lab/", label: "LAB" },
    ],
  },
  {
    title: "会社",
    links: [
      { href: "/company/", label: "会社情報" },
      { href: "/faq/", label: "よくある質問" },
      { href: "/contact/", label: "お問い合わせ" },
      { href: "/privacy/", label: "プライバシーポリシー" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const isMidnight = pathname.startsWith("/experience") || pathname.startsWith("/lab");

  return (
    <footer className={isMidnight ? "bg-palms-midnight text-palms-chrome" : "bg-palms-charcoal text-palms-ivory"}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-3 inline-block">
              <Image
                src={`${BASE_PATH}/assets/logo/palms-logo-solid.svg`}
                alt={siteConfig.brand}
                width={44}
                height={24}
                className="h-6 w-auto invert"
              />
              <span className="mt-1 block font-mono text-[9px] tracking-[0.3em] text-palms-chrome">
                MOVE AGAIN.
              </span>
            </Link>
            <p className="mt-3 text-sm leading-7">
              PALMS(正式社名[要確認])
              <br />
              {siteConfig.address}
              <br />
              TEL(直通): {siteConfig.phone}
              <br />
              TEL(固定): {siteConfig.phoneFixed}
              <br />
              FAX: {siteConfig.faxKeep}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="mb-3 font-bold text-white">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-palms-chrome hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center font-mono text-xs tracking-wide text-palms-chrome">
          &copy; PALMS — MOVE AGAIN.
        </div>
      </div>
    </footer>
  );
}
