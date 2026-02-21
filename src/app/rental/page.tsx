import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
  title: `${siteConfig.area}のレンタカー｜修理期間の代車・保険対応も相談｜${siteConfig.companyName}`,
  description: `修理期間中のレンタカー（代車）をご用意。保険でレンタカーが出るかの相談も対応します。`,
};

const rentalFAQ = [
  {
    question: "修理期間中の代車はありますか？",
    answer: "はい。修理期間に合わせてレンタカーをご用意いたします。",
  },
  {
    question: "保険でレンタカー代は出ますか？",
    answer: "保険の内容・条件により異なります。保険会社への確認もサポートいたします。",
  },
  {
    question: "レンタカーの料金はどのくらいですか？",
    answer: "期間・車種により変動します。お見積りいたしますのでご相談ください。",
  },
  {
    question: "すぐに借りられますか？",
    answer: "在庫状況によりますが、可能な限り迅速に手配いたします。",
  },
  {
    question: "修理とレンタカーを一緒にお願いできますか？",
    answer: "はい。修理〜レンタカーまで一括で対応いたします。",
  },
];

export default function RentalPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "レンタカー", url: "/rental/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            レンタカー（修理期間の代車）
          </h1>
          <p className="mb-8 text-center text-muted">
            修理期間中のレンタカー（代車）をスムーズに手配します。保険対応のご相談も承ります。
          </p>

          <h2 className="mb-4 text-xl font-bold">メリット</h2>
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            {[
              { title: "手配が早い", desc: "修理と同時に手配するため、待ち時間が少ない" },
              { title: "一括でラク", desc: "修理・レンタカー・保険をまとめて相談できる" },
              { title: "保険対応", desc: "保険でレンタカー代が出るかの確認もサポート" },
              { title: "車種の相談", desc: "ご希望に応じた車種をご案内いたします" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border p-4">
                <h3 className="mb-1 font-bold">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-xl font-bold">保険対応について</h2>
          <p className="mb-8 text-sm text-muted">
            レンタカー代が保険で出るかどうかは、保険の内容・条件により異なります。
            断定はできませんが、保険会社への確認を含めてご相談いただけます。
            まずはお気軽にお問い合わせください。
          </p>

          <h2 className="mb-4 text-xl font-bold">予約・相談の流れ</h2>
          <div className="mb-8 space-y-3">
            {[
              "LINEまたはお電話でご連絡ください",
              "利用期間・希望車種をお伝えください",
              "在庫確認後、お見積りをご案内します",
              "ご納得いただけたら手配完了です",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock items={rentalFAQ} />
      <CTASection />
    </>
  );
}
