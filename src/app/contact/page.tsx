"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import { trackContactSubmit } from "@/lib/analytics";

const subjects = [
  "緊急（事故・故障）",
  "レッカー",
  "修理・鈑金",
  "レンタカー・代車",
  "車検・整備",
  "買取・査定",
  "その他",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form submission (API Route or Server Action)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    trackContactSubmit();
    setSubmitted(true);
    setIsSubmitting(false);
  }

  if (submitted) {
    return (
      <>
        <Breadcrumb items={[{ name: "お問い合わせ", url: "/contact/" }]} />
        <section className="py-20">
          <div className="mx-auto max-w-md px-4 text-center">
            <p className="mb-4 text-4xl">✓</p>
            <h1 className="mb-4 text-2xl font-bold">
              お問い合わせありがとうございます
            </h1>
            <p className="mb-8 text-muted">
              内容を確認の上、折り返しご連絡いたします。
              緊急の場合はお電話またはLINEをご利用ください。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="rounded-full bg-emergency px-6 py-3 font-bold text-white"
              >
                📞 電話する
              </a>
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-6 py-3 font-bold text-white"
              >
                💬 LINEで連絡
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={[{ name: "お問い合わせ", url: "/contact/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="mb-4 text-center text-3xl font-bold">
            お問い合わせ
          </h1>
          <p className="mb-2 text-center text-muted">
            お問い合わせは電話・LINE・フォームから。
          </p>
          <p className="mb-8 text-center text-sm text-emergency font-medium">
            緊急の場合は電話またはLINEがおすすめです。
          </p>

          {/* Quick CTA */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-full bg-emergency px-6 py-3 text-center font-bold text-white"
            >
              📞 今すぐ電話する
            </a>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-center font-bold text-white"
            >
              💬 LINEで依頼する
            </a>
          </div>

          <hr className="mb-8" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                お名前 <span className="text-emergency">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                電話番号 <span className="text-emergency">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                メールアドレス（任意）
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1 block text-sm font-medium"
              >
                ご用件
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value="">選択してください</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                内容 <span className="text-emergency">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-1 block text-sm font-medium"
              >
                現在地（任意：緊急時）
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="住所や目印など"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="rounded-lg border border-dashed p-4 text-center text-xs text-muted">
              reCAPTCHA（スパム対策）をここに配置
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent px-8 py-4 font-bold text-white hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
