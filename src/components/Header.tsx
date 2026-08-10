"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, BASE_PATH } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

const serviceLinks = [
  { href: "/tow/", label: "レッカー" },
  { href: "/rental/", label: "レンタカー" },
  { href: "/repair/", label: "鈑金修理" },
  { href: "/inspection/", label: "車検整備" },
  { href: "/buy-sell/", label: "買取販売" },
  { href: "/price/", label: "料金" },
  { href: "/flow/", label: "流れ" },
  { href: "/area/", label: "エリア" },
  { href: "/works/", label: "実績" },
];

/**
 * PALMS 新IA(6項目): 事故・トラブル / サービス(▼) / MOTORS / EXPERIENCE / LAB / 会社案内
 * EXPERIENCE・LABページは Midnight 背景 + 右上「事故・トラブルの方はこちら」導線(SERVICE導線確保)。
 */
export default function Header() {
  const pathname = usePathname() ?? "/";
  const isMidnight = pathname.startsWith("/experience") || pathname.startsWith("/lab");
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  if (isMidnight) {
    const isExperience = pathname.startsWith("/experience");
    const isLab = pathname.startsWith("/lab");
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-palms-midnight">
        {/* 右上・小型の事故導線(SERVICE導線を妨げない配慮) */}
        <div className="bg-palms-charcoal">
          <div className="mx-auto flex max-w-6xl justify-end px-4">
            <Link
              href="/emergency/"
              className="flex min-h-[44px] items-center gap-2 py-2 text-xs text-palms-ivory hover:underline"
            >
              <span className="h-2 w-2 rounded-full bg-palms-sage" aria-hidden="true" />
              事故・トラブルの方はこちら
            </Link>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="block" aria-label="PALMS トップページへ">
            <Image
              src={`${BASE_PATH}/assets/logo/palms-logo.svg`}
              alt="PALMS"
              width={73}
              height={40}
              className="h-9 w-auto invert"
              priority
            />
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm" aria-label="グローバルナビゲーション">
            <Link href="/emergency/" className="min-h-[44px] rounded px-2 py-2 text-palms-ivory hover:text-palms-aqua">
              事故・トラブル
            </Link>
            <Link href="/#services" className="min-h-[44px] rounded px-2 py-2 text-palms-ivory hover:text-palms-aqua">
              サービス
            </Link>
            <Link href="/buy-sell/" className="min-h-[44px] rounded px-2 py-2 text-palms-ivory hover:text-palms-aqua">
              MOTORS
            </Link>
            <Link
              href="/experience/"
              aria-current={isExperience ? "page" : undefined}
              className={`min-h-[44px] rounded border-b-2 px-2 py-2 ${
                isExperience ? "border-palms-aqua text-palms-aqua" : "border-transparent text-palms-ivory hover:text-palms-aqua"
              }`}
            >
              EXPERIENCE
            </Link>
            <Link
              href="/lab/"
              aria-current={isLab ? "page" : undefined}
              className={`min-h-[44px] rounded border-b-2 px-2 py-2 ${
                isLab ? "border-palms-aqua text-palms-aqua" : "border-transparent text-palms-ivory hover:text-palms-aqua"
              }`}
            >
              LAB
            </Link>
            <Link href="/company/" className="min-h-[44px] rounded px-2 py-2 text-palms-ivory hover:text-palms-aqua">
              会社案内
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(37,42,48,0.12)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-6 py-3.5">
        <Link href="/" className="block text-palms-charcoal" aria-label="PALMS ホーム">
          <Image
            src={`${BASE_PATH}/assets/logo/palms-logo.svg`}
            alt={siteConfig.brand}
            width={73}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="グローバルナビゲーション">
          <Link
            href="/emergency/"
            className="mr-1 rounded-full bg-palms-sage px-4 py-2 text-[13px] font-bold text-palms-midnight transition hover:brightness-105"
          >
            事故・トラブル
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button
              type="button"
              className="rounded px-2.5 py-2 text-[13.5px] font-medium text-palms-charcoal transition hover:text-palms-midnight hover:bg-palms-ivory"
              onClick={() => setIsServiceOpen((v) => !v)}
              aria-expanded={isServiceOpen}
            >
              サービス <span aria-hidden="true" className="text-[10px] opacity-60">▼</span>
            </button>
            {isServiceOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-lg border border-[rgba(37,42,48,0.14)] bg-white py-2 shadow-[0_12px_32px_rgba(16,24,39,0.12)]">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-[13.5px] transition hover:bg-palms-ivory"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/buy-sell/" className="rounded px-2.5 py-2 font-[family-name:var(--font-display-en)] text-[13px] font-medium tracking-[0.04em] text-palms-charcoal transition hover:bg-palms-ivory">
            MOTORS
          </Link>
          <Link href="/experience/" className="rounded px-2.5 py-2 font-[family-name:var(--font-display-en)] text-[13px] font-medium tracking-[0.04em] text-palms-charcoal transition hover:bg-palms-ivory">
            EXPERIENCE
          </Link>
          <Link href="/lab/" className="rounded px-2.5 py-2 font-[family-name:var(--font-display-en)] text-[13px] font-medium tracking-[0.04em] text-palms-charcoal transition hover:bg-palms-ivory">
            LAB
          </Link>
          <Link href="/company/" className="rounded px-2.5 py-2 text-[13.5px] font-medium text-palms-charcoal transition hover:bg-palms-ivory">
            会社案内
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={trackCall}
            className="flex flex-col items-end rounded-full bg-palms-sage py-1.5 pl-5 pr-5 leading-tight text-palms-midnight transition hover:brightness-105"
          >
            <span className="font-[family-name:var(--font-display-en)] text-[15px] font-bold tabular-nums">{siteConfig.phone}</span>
            <span className="text-[10px] font-bold tracking-wide">{siteConfig.hours}</span>
          </a>
          <a
            href={siteConfig.lineUrl}
            onClick={trackLine}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-palms-charcoal px-4 py-2 text-[13px] font-bold text-palms-charcoal transition hover:bg-palms-charcoal hover:text-white"
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
        <nav className="border-t bg-white px-4 pb-4 lg:hidden" aria-label="モバイルナビゲーション">
          <Link
            href="/emergency/"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded bg-palms-sage px-3 py-3 text-center text-sm font-bold text-palms-midnight"
          >
            事故・トラブル
          </Link>
          <p className="mt-4 mb-1 text-xs font-bold tracking-wide text-muted">サービス</p>
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-border py-3 pl-2 text-sm"
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-4 mb-1 text-xs font-bold tracking-wide text-muted">PALMSの領域</p>
          {[
            { href: "/buy-sell/", label: "MOTORS" },
            { href: "/experience/", label: "EXPERIENCE" },
            { href: "/lab/", label: "LAB" },
            { href: "/company/", label: "会社案内" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-border py-3 pl-2 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
