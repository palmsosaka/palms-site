import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `よくある質問｜${siteConfig.companyName}（${siteConfig.area}）`,
  description: `事故・故障、レッカー、修理、レンタカー、保険対応など、よくある質問にお答えします。`,
};

const faqCategories = [
  {
    category: "緊急対応",
    items: [
      { question: "夜間でも対応可能ですか？", answer: "可能な限り対応いたします。状況により変動するため、まずはご連絡ください。" },
      { question: "事故で相手がいる場合でも相談できますか？", answer: "はい。状況を伺い、必要な手順をご案内します。" },
      { question: "連絡の時に何を伝えればいいですか？", answer: "現在地（位置情報）と状況（事故/故障、自走可否）がわかれば手配がスムーズです。" },
    ],
  },
  {
    category: "レッカー",
    items: [
      { question: "レッカーの料金はどのくらいですか？", answer: "状況・距離により変動します。まずはお電話またはLINEでご相談ください。" },
      { question: "どこまで搬送してもらえますか？", answer: "ご指定の工場やディーラーへの搬送も可能です。ご相談ください。" },
    ],
  },
  {
    category: "レンタカー・代車",
    items: [
      { question: "修理期間中の代車はありますか？", answer: "はい。修理期間に合わせてレンタカーをご用意いたします。" },
      { question: "保険でレンタカー代は出ますか？", answer: "保険の内容・条件により異なります。保険会社への確認もサポートいたします。" },
      { question: "すぐに借りられますか？", answer: "在庫状況によりますが、可能な限り迅速に手配いたします。" },
    ],
  },
  {
    category: "鈑金・修理",
    items: [
      { question: "見積だけでもいいですか？", answer: "はい。写真をLINEで送っていただければ概算見積をお伝えできます。" },
      { question: "保険で修理できますか？", answer: "保険修理にも対応しています。保険会社への連絡もサポートいたします。" },
      { question: "修理期間はどのくらいですか？", answer: "損傷の程度によりますが、入庫後に目安をお伝えいたします。" },
    ],
  },
  {
    category: "保険",
    items: [
      { question: "保険の手続きもサポートしてもらえますか？", answer: "はい。保険会社への連絡方法や手順をご案内いたします。" },
      { question: "保険修理の場合、自己負担はありますか？", answer: "保険の内容により異なります。詳細はご相談ください。" },
    ],
  },
  {
    category: "料金・見積",
    items: [
      { question: "料金はどのくらいですか？", answer: "状況・内容により変動します。料金目安ページをご覧いただくか、お問い合わせください。" },
      { question: "見積は無料ですか？", answer: "お問い合わせ・概算見積は無料です。お気軽にご相談ください。" },
    ],
  },
  {
    category: "対応エリア",
    items: [
      { question: "どのエリアまで来てもらえますか？", answer: `${siteConfig.areaDetail}を中心に対応しています。詳細は対応エリアページをご覧ください。` },
      { question: "エリア外でも対応してもらえますか？", answer: "状況によっては対応可能な場合もあります。まずはご相談ください。" },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "よくある質問", url: "/faq/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            よくある質問
          </h1>
          <p className="mb-12 text-center text-muted">
            お問い合わせの多いご質問をまとめました。
          </p>

          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-10">
              <h2 className="mb-4 text-xl font-bold">{cat.category}</h2>
              <FAQBlock items={cat.items} showLink={false} />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
