import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${siteConfig.area}の鈑金塗装・修理｜保険修理も対応｜${siteConfig.companyName}`,
  description: `キズ・へこみ修理、事故修理に対応。保険修理のご相談も可能。見積はお気軽に。`,
};

const repairFAQ = [
  {
    question: "見積だけでもいいですか？",
    answer: "はい。写真をLINEで送っていただければ概算見積をお伝えできます。",
  },
  {
    question: "保険で修理できますか？",
    answer: "保険修理にも対応しています。保険会社への連絡もサポートいたします。",
  },
  {
    question: "修理期間はどのくらいですか？",
    answer: "損傷の程度によりますが、入庫後に目安をお伝えいたします。",
  },
  {
    question: "修理中の代車はありますか？",
    answer: "はい。レンタカーの手配も一括で対応いたします。",
  },
  {
    question: "どんな修理に対応していますか？",
    answer: "キズ・へこみ・事故修理・塗装など幅広く対応しています。",
  },
];

export default function RepairPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "鈑金塗装・修理", url: "/repair/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            鈑金塗装・修理
          </h1>
          <p className="mb-8 text-center text-muted">
            キズ・へこみから事故修理まで幅広く対応。保険修理のご相談も可能です。
          </p>

          <h2 className="mb-4 text-xl font-bold">施工例</h2>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="mb-2 flex h-32 items-center justify-center rounded bg-gray-200 text-xs text-muted">
                  Before/After {i}
                </div>
                <p className="text-sm font-medium">施工事例 {i}</p>
              </div>
            ))}
          </div>
          <div className="mb-8 text-center">
            <Link href="/works/" className="text-accent underline hover:opacity-80">
              すべての事例を見る →
            </Link>
          </div>

          <h2 className="mb-4 text-xl font-bold">見積の流れ</h2>
          <div className="mb-8 space-y-3">
            {[
              "写真をLINEで送信 or お電話でご相談",
              "概算見積をご案内",
              "入庫・確認後に確定見積",
              "修理開始（必要に応じてレンタカー手配）",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-xl font-bold">保険修理について</h2>
          <p className="text-sm text-muted">
            保険修理にも対応しています。保険会社への連絡方法や手順もご案内いたしますので、
            お気軽にご相談ください。断定的なことはお伝えできませんが、
            スムーズな対応をサポートいたします。
          </p>
        </div>
      </section>

      <FAQBlock items={repairFAQ} />
      <CTASection />
    </>
  );
}
