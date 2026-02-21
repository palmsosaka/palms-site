import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
  title: `${siteConfig.area}の車買取・販売｜査定・相談はこちら｜${siteConfig.companyName}`,
  description: `お車の買取・販売に対応。査定はLINEで写真送付もOK。`,
};

const buySellFAQ = [
  {
    question: "査定だけでもいいですか？",
    answer: "はい。査定のみのご依頼も歓迎です。お気軽にどうぞ。",
  },
  {
    question: "査定はどうすればいいですか？",
    answer: "LINEで車の写真・走行距離・車検残をお送りいただければ概算をお伝えできます。",
  },
  {
    question: "事故車でも買い取ってもらえますか？",
    answer: "状態によります。まずはご相談ください。",
  },
  {
    question: "販売車両はどこで見られますか？",
    answer: "在庫についてはお問い合わせください。ご希望に合った車両をご案内いたします。",
  },
  {
    question: "ローンが残っている車でも売れますか？",
    answer: "状況により対応可能です。詳細はご相談ください。",
  },
];

export default function BuySellPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "買取・販売", url: "/buy-sell/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">買取・販売</h1>
          <p className="mb-8 text-center text-muted">
            お車の買取・販売に対応しています。LINE査定も可能です。
          </p>

          <h2 className="mb-4 text-xl font-bold">買取 — LINE査定の流れ</h2>
          <div className="mb-8 space-y-3">
            {[
              "LINEで車の写真をお送りください",
              "走行距離・車検残をお伝えください",
              "概算査定額をご案内します",
              "ご納得いただけたら手続きに進みます",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-xl font-bold">販売</h2>
          <p className="text-sm text-muted">
            販売車両については随時更新しています。
            ご希望の車種・条件がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <FAQBlock items={buySellFAQ} />
      <CTASection />
    </>
  );
}
