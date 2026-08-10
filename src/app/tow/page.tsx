import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${siteConfig.area}のレッカー｜事故・故障の搬送なら${siteConfig.companyName}`,
  description: `事故・故障時のレッカー搬送に対応。電話/LINEで迅速に手配します。修理・レンタカーも一括相談可能。`,
};

const towFAQ = [
  {
    question: "レッカーはいくらくらいかかりますか？",
    answer: "距離や状況により料金が変わります。まずはお電話またはLINEで状況をお伝えいただければ、概算をご案内します。",
  },
  {
    question: "営業時間外でもレッカーは頼めますか？",
    answer:
      "レッカーの受付は営業時間（9:00〜19:00・年中無休）内で承っています。時間外のご連絡は翌営業時間内に折り返します。ご加入の保険にロードサービスの特約が付いている場合は、そちらもご確認ください。",
  },
  {
    question: "どこまで搬送してもらえますか？",
    answer:
      "ご指定の工場やディーラーへの搬送にも対応しています。搬送先が決まっていない場合は、当店の工場までの搬送もご相談いただけます。",
  },
  {
    question: "保険でレッカー代は出ますか？",
    answer:
      "ご契約の保険の内容や、ロードサービスの特約の有無により異なります。断定はできませんが、保険会社への確認方法もあわせてご案内します。",
  },
  {
    question: "レッカーと修理をまとめてお願いできますか？",
    answer: "はい。レッカーでの搬送から修理・レンタカーの手配まで、まとめてご相談いただけます。",
  },
];

export default function TowPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "レッカー", url: "/tow/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            レッカー（搬送）
          </h1>
          <p className="mb-8 text-center text-muted">
            事故・故障で自走できない場合、迅速にレッカーを手配します。
          </p>

          <h2 className="mb-4 text-xl font-bold">こんな時にご連絡ください</h2>
          <ul className="mb-8 space-y-2">
            {[
              "事故で自走できない",
              "故障して動かなくなった",
              "警告灯が点灯して不安",
              "タイヤがパンクした",
            ].map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-xl font-bold">対応の流れ</h2>
          <div className="mb-8 space-y-3">
            {[
              "電話/LINEで状況と現在地をお伝えください",
              "レッカー車を手配し、到着目安をご案内します",
              "現場で車両を積載・搬送します",
              "修理やレンタカーの手配もそのままご相談いただけます",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-xl font-bold">対応エリア</h2>
          <p className="mb-2 text-sm text-muted">
            {siteConfig.areaDetail}を中心に対応しています。
          </p>
          <Link
            href="/area/"
            className="text-sm text-accent underline hover:opacity-80"
          >
            対応エリアの詳細を見る →
          </Link>
        </div>
      </section>

      <FAQBlock items={towFAQ} />
      <CTASection variant="emergency" />
    </>
  );
}
