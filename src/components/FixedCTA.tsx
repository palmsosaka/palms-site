"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

/**
 * モバイル固定バー(Charcoal地・電話/LINE 2ボタン)。
 * EXPERIENCE / LAB ページには設置しない(SHARED_SPEC準拠。
 * 事故導線はヘッダー右上「事故・トラブルの方はこちら」で確保)。
 */
export default function FixedCTA() {
  const pathname = usePathname() ?? "/";
  const hide = pathname.startsWith("/experience") || pathname.startsWith("/lab");
  if (hide) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex bg-palms-charcoal md:hidden">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        onClick={trackCall}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 border-t-2 border-t-palms-sage py-4 text-sm font-bold text-white"
      >
        <span aria-hidden="true" className="text-palms-sage">📞</span>
        電話で相談
      </a>
      <a
        href={siteConfig.lineUrl}
        onClick={trackLine}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-bold text-white"
      >
        <span aria-hidden="true">💬</span>
        LINEで相談
      </a>
    </div>
  );
}
