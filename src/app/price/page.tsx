import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `料金目安｜${siteConfig.companyName}（${siteConfig.area}）`,
  description: `レッカー・修理・レンタカー等の料金目安をご案内。状況により変動するため、詳細はお問い合わせください。`,
};

const priceItems = [
  {
    category: "レッカー（搬送）",
    items: [
      { name: "レッカー搬送", price: "状況・距離により変動", note: "まずはお見積りください" },
    ],
  },
  {
    category: "鈑金塗装・修理",
    items: [
      { name: "小さなキズ・へこみ", price: "要見積", note: "写真でLINE見積OK" },
      { name: "事故修理", price: "損傷確認後にお見積り", note: "保険修理も対応" },
      { name: "塗装", price: "範囲・色により変動", note: "" },
    ],
  },
  {
    category: "レンタカー（代車）",
    items: [
      { name: "レンタカー", price: "期間・車種により変動", note: "保険適用の相談も可" },
    ],
  },
  {
    category: "車検・整備",
    items: [
      { name: "車検基本料", price: "要見積", note: "法定費用別途" },
      { name: "点検・整備", price: "内容により変動", note: "" },
    ],
  },
  {
    category: "買取",
    items: [
      { name: "査定", price: "無料", note: "LINE査定OK" },
    ],
  },
];

export default function PricePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "料金目安", url: "/price/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">料金目安</h1>
          <p className="mb-8 text-center text-sm text-muted">
            料金は状況・内容により変動いたします。下記はあくまで目安です。
            詳細はお問い合わせください。
          </p>

          <div className="space-y-8">
            {priceItems.map((category) => (
              <div key={category.category}>
                <h2 className="mb-4 text-xl font-bold">{category.category}</h2>
                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">項目</th>
                        <th className="px-4 py-3 text-left font-medium">料金目安</th>
                        <th className="hidden px-4 py-3 text-left font-medium md:table-cell">備考</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.name} className="border-t">
                          <td className="px-4 py-3">{item.name}</td>
                          <td className="px-4 py-3 text-muted">{item.price}</td>
                          <td className="hidden px-4 py-3 text-muted md:table-cell">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            ※上記はすべて目安です。正確な料金は状況確認後にお見積りいたします。
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
