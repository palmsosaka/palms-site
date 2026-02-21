import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `ご依頼の流れ｜事故・故障／修理・車検／買取｜${siteConfig.companyName}`,
  description: `事故・故障時、修理、車検、買取それぞれの流れをわかりやすくご案内します。`,
};

const flows = [
  {
    title: "緊急（事故・故障）",
    icon: "🚨",
    steps: [
      "安全確保（ハザード点灯・安全な場所へ移動）",
      "電話またはLINEでご連絡",
      "位置情報・状況をお伝えください",
      "レッカー手配（到着目安をご案内）",
      "搬送 → 修理/鈑金のご提案",
      "必要に応じてレンタカー手配・保険相談",
    ],
  },
  {
    title: "準緊急（保険・レンタカー）",
    icon: "🚗",
    steps: [
      "LINEまたはお電話でご連絡",
      "状況・ご希望をお伝えください",
      "保険内容の確認・レンタカーの手配",
      "修理の見積・ご提案",
      "修理完了後、お引き渡し",
    ],
  },
  {
    title: "非緊急（鈑金・車検・買取）",
    icon: "🔧",
    steps: [
      "LINEまたはフォームでお問い合わせ",
      "写真・情報をお送りください（可能な範囲で）",
      "見積・日程のご案内",
      "ご納得いただけたら入庫・作業開始",
      "完了のご連絡 → お引き渡し",
    ],
  },
];

export default function FlowPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ご依頼の流れ", url: "/flow/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">
            ご依頼の流れ
          </h1>
          <p className="mb-12 text-center text-muted">
            状況に応じた流れをご案内します。
          </p>

          <div className="space-y-12">
            {flows.map((flow) => (
              <div key={flow.title}>
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <span aria-hidden="true">{flow.icon}</span>
                  {flow.title}
                </h2>
                <div className="space-y-3">
                  {flow.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-0.5 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
