"use client";

import { siteConfig } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex bg-palms-charcoal md:hidden">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        onClick={trackCall}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 border-t-2 border-t-palms-sage py-4 text-sm font-bold text-white"
      >
        <span aria-hidden="true" className="text-palms-sage">📞</span>
        今すぐ電話
      </a>
      <a
        href={siteConfig.lineUrl}
        onClick={trackLine}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-bold text-white"
      >
        <span aria-hidden="true">💬</span>
        LINEで依頼
      </a>
    </div>
  );
}
