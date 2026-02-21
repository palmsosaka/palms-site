"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, BASE_PATH } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

const navLinks = [
  { href: "/emergency/", label: "緊急対応" },
  { href: "/tow/", label: "レッカー" },
  { href: "/rental/", label: "レンタカー" },
  { href: "/repair/", label: "鈑金・修理" },
  { href: "/inspection/", label: "車検・整備" },
  { href: "/buy-sell/", label: "買取・販売" },
  { href: "/price/", label: "料金目安" },
  { href: "/flow/", label: "ご依頼の流れ" },
  { href: "/works/", label: "事例" },
  { href: "/faq/", label: "よくある質問" },
  { href: "/area/", label: "対応エリア" },
  { href: "/company/", label: "会社情報" },
  { href: "/contact/", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="block">
          <Image
            src={`${BASE_PATH}/images/logo.png`}
            alt={siteConfig.brand}
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-1 text-sm hover:bg-primary-light"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded px-2 py-1 text-sm hover:bg-primary-light"
          >
            その他 ▼
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={trackCall}
            className="rounded-full bg-emergency px-4 py-2 text-sm font-bold text-white hover:bg-emergency-dark"
          >
            電話する
          </a>
          <a
            href={siteConfig.lineUrl}
            onClick={trackLine}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          >
            LINEで依頼
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="メニュー"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-border py-3 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
