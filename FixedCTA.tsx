"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

/**
 * モバイル固定バー(Charcoal地・電話/LINE 2ボタン)。
 * EXPERIENCE / LAB ページには設置しない(SHARED_SPEC準拠)。
 */
export default function FixedCTA() {
  const pathname = usePathname() ?? "/";
  const hide = pathname.startsWith("/experience") || pathname.startsWith("/lab");
  if (hide) return null;

  const stroke = {
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t-2 border-t-palms-sage bg-palms-charcoal md:hidden">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        onClick={trackCall}
        className="flex min-h-[60px] flex-1 items-center justify-center gap-2.5 border-r border-white/10 text-[14px] font-bold text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" style={{ ...stroke, stroke: "var(--palms-sage)" }} aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        電話で相談
      </a>
      <a
        href={siteConfig.lineUrl}
        onClick={trackLine}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[60px] flex-1 items-center justify-center gap-2.5 text-[14px] font-bold text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" style={{ ...stroke, stroke: "var(--palms-sage)" }} aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        LINEで相談
      </a>
    </div>
  );
}
