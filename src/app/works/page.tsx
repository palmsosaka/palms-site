import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `事例｜修理・鈑金・対応実績｜${siteConfig.companyName}`,
  description: `修理・鈑金・対応事例を掲載。安心材料としてご覧ください。`,
};

const works = [
  {
    id: 1,
    title: "フロントバンパーのキズ修理",
    car: "車種名",
    damage: "フロントバンパーの擦りキズ",
    content: "鈑金塗装にて修復",
    period: "2〜3日",
    cost: "要見積",
  },
  {
    id: 2,
    title: "リアフェンダーのへこみ修理",
    car: "車種名",
    damage: "リアフェンダーのへこみ",
    content: "鈑金修理・塗装",
    period: "3〜5日",
    cost: "要見積",
  },
  {
    id: 3,
    title: "事故による複数箇所の修理",
    car: "車種名",
    damage: "フロント周り複数箇所の損傷",
    content: "保険修理にて対応",
    period: "1〜2週間",
    cost: "保険適用",
  },
  {
    id: 4,
    title: "ドアパネルの交換",
    car: "車種名",
    damage: "運転席ドアの大きなへこみ",
    content: "パネル交換・塗装",
    period: "3〜5日",
    cost: "要見積",
  },
  {
    id: 5,
    title: "故障車のレッカー搬送",
    car: "車種名",
    damage: "エンジン不調で自走不可",
    content: "レッカー搬送 → 修理",
    period: "搬送当日 + 修理期間",
    cost: "要見積",
  },
  {
    id: 6,
    title: "車検整備",
    car: "車種名",
    damage: "定期車検",
    content: "車検・点検・整備",
    period: "1〜2日",
    cost: "要見積",
  },
];

export default function WorksPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "事例", url: "/works/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            対応事例
          </h1>
          <p className="mb-12 text-center text-muted">
            これまでの対応事例の一部をご紹介します。
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <div key={work.id} className="rounded-xl border p-4">
                <div className="mb-3 flex h-40 items-center justify-center rounded-lg bg-gray-200 text-sm text-muted">
                  Before / After
                </div>
                <h2 className="mb-2 font-bold">{work.title}</h2>
                <dl className="space-y-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-muted">車種:</dt>
                    <dd>{work.car}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-muted">損傷:</dt>
                    <dd>{work.damage}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-muted">対応:</dt>
                    <dd>{work.content}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-muted">期間:</dt>
                    <dd>{work.period}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-muted">費用:</dt>
                    <dd>{work.cost}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
