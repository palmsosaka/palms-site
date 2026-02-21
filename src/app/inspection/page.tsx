import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
  title: `${siteConfig.area}の車検・整備｜安心の点検と明確なご案内｜${siteConfig.companyName}`,
  description: `車検・点検・整備に対応。事前見積で安心。予約はLINEまたはフォームから。`,
};

const inspectionFAQ = [
  {
    question: "車検の料金はどのくらいですか？",
    answer: "車種・年式により変動します。事前にお見積りいたしますのでご相談ください。",
  },
  {
    question: "車検はどのくらいの期間がかかりますか？",
    answer: "通常1〜2日程度ですが、整備内容により変動します。",
  },
  {
    question: "代車は借りられますか？",
    answer: "はい。車検期間中の代車もご用意いたします。",
  },
  {
    question: "車検切れの車でもお願いできますか？",
    answer: "はい。レッカーでの搬送も対応いたします。ご相談ください。",
  },
  {
    question: "予約はどうすればいいですか？",
    answer: "LINEまたはフォームからご予約いただけます。希望日と車種をお伝えください。",
  },
];

export default function InspectionPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "車検・整備", url: "/inspection/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">車検・整備</h1>
          <p className="mb-8 text-center text-muted">
            車検・点検・整備に対応。事前見積で安心してお任せいただけます。
          </p>

          <h2 className="mb-4 text-xl font-bold">予約の流れ</h2>
          <div className="mb-8 space-y-3">
            {[
              "LINEまたはフォームで希望日・車種をお伝えください",
              "日程を調整し、確認のご連絡をいたします",
              "入庫・点検・整備を実施します",
              "完了のご連絡後、お引き渡しです",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 rounded-lg border-l-4 border-accent bg-primary-light p-4">
            <p className="text-sm">
              ※法定費用（重量税・自賠責保険料・印紙代）は車種・年式により変動します。
              詳細はお見積り時にご案内いたします。
            </p>
          </div>
        </div>
      </section>

      <FAQBlock items={inspectionFAQ} />
      <CTASection />
    </>
  );
}
