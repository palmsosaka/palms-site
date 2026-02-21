"use client";

import { siteConfig } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";

type Props = {
  variant?: "default" | "emergency";
  showForm?: boolean;
};

export default function CTASection({
  variant = "default",
  showForm = true,
}: Props) {
  const isEmergency = variant === "emergency";

  return (
    <section
      className={`py-12 ${isEmergency ? "bg-red-50" : "bg-primary-light"}`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold">
          {isEmergency
            ? "まずはご連絡ください"
            : "お気軽にお問い合わせください"}
        </h2>
        <p className="mb-6 text-sm text-muted">
          {isEmergency
            ? "事故・故障で動けない時は、電話またはLINEが最速です"
            : "電話・LINE・フォームからお問い合わせいただけます"}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={trackCall}
            className="w-full rounded-full bg-emergency px-8 py-4 text-lg font-bold text-white hover:bg-emergency-dark sm:w-auto"
          >
            📞 今すぐ電話する
          </a>
          <a
            href={siteConfig.lineUrl}
            onClick={trackLine}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-white hover:opacity-90 sm:w-auto"
          >
            💬 LINEで依頼する
          </a>
        </div>

        <p className="mt-3 text-xs text-muted">
          LINEなら位置情報・写真の送信もOK
        </p>

        {showForm && !isEmergency && (
          <div className="mt-6">
            <a
              href="/contact/"
              className="text-accent underline hover:opacity-80"
            >
              フォームからお問い合わせ →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
