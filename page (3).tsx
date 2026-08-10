import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
  title: `【緊急】${siteConfig.area}の事故・故障｜レッカー即手配・修理・レンタカー｜${siteConfig.companyName}`,
  description: `事故・故障で動けない時は、電話またはLINEでご連絡ください。位置情報・写真送付OK。${siteConfig.area}でレッカー〜修理〜レンタカーまで一括手配します。`,
};

const emergencyFAQ = [
  {
    question: "営業時間を教えてください。時間外に連絡したらどうなりますか？",
    answer:
      "営業時間は9:00〜19:00で、年中無休です。時間外にいただいたご連絡は、翌営業時間内に折り返しご対応します。お急ぎのご事情がある場合は、その旨をメッセージに残していただけると助かります。",
  },
  {
    question: "事故のあと、まず何をすればいいですか？",
    answer:
      "まずは安全な場所への移動とハザード点灯で安全を確保してください。けががあれば救急、事故の場合は警察への届け出が必要です。そのうえでご加入の保険会社にご連絡いただき、レッカーやその後の対応が必要であれば当店までご連絡ください。",
  },
  {
    question: "事故で相手がいる場合でも相談できますか？",
    answer:
      "はい、ご相談いただけます。相手の方がいる事故でも、レッカーの手配や修理・保険会社とのやり取りの進め方についてご案内します。過失割合や賠償については保険会社・専門家のご判断になりますので、そちらとあわせてご確認ください。",
  },
  {
    question: "電話するとき、何を伝えればいいですか？",
    answer:
      "現在地、車種、自走できるかどうかの3点を教えていただけるとスムーズです。わかる範囲で構いませんので、LINEなら位置情報や写真もあわせて送っていただけます。",
  },
  {
    question: "レンタカー代は保険で出ますか？",
    answer:
      "ご契約の保険の内容や条件により異なります。断定はできませんが、保険会社への確認方法もあわせてご案内しますので、まずはご相談ください。",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "緊急対応", url: "/emergency/" }]} />

      {/* Hero - Emergency CTA */}
      <section className="bg-red-50 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-2xl font-bold text-emergency md:text-3xl">
            【緊急】事故・故障で動けない時は、まずご連絡ください
          </h1>
          <p className="mb-6 text-muted">
            電話またはLINEでご連絡いただければ、最短で手配いたします。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full rounded-full bg-emergency px-8 py-5 text-xl font-bold text-white hover:bg-emergency-dark sm:w-auto"
            >
              📞 今すぐ電話する
            </a>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-accent px-8 py-5 text-xl font-bold text-white hover:opacity-90 sm:w-auto"
            >
              💬 LINEで依頼する
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">
            LINEなら位置情報・写真の送信もOK
          </p>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">
            まずやること（3ステップ）
          </h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "安全確保",
                desc: "ハザード点灯。安全な場所へ移動してください（可能なら）。",
              },
              {
                num: "2",
                title: "連絡",
                desc: "電話またはLINEでご連絡ください。",
              },
              {
                num: "3",
                title: "位置情報共有",
                desc: "LINEで現在地を送信してください（写真も任意で）。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 rounded-xl border-2 border-emergency bg-white p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emergency text-lg font-bold text-white">
                  {item.num}
                </span>
                <div>
                  <h3 className="mb-1 font-bold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            ※対応可否は状況・エリア・時間帯により変動します。まずはご連絡ください。
          </p>
        </div>
      </section>

      {/* LINE Template */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold">
            LINE送信テンプレ（コピペ用）
          </h2>
          <p className="mb-4 text-center text-sm text-muted">
            以下を送ると手配が早いです
          </p>
          <div className="rounded-xl border bg-white p-6 font-mono text-sm leading-relaxed">
            <p>お名前：</p>
            <p>現在地（位置情報）：</p>
            <p>車種/ナンバー（わかる範囲）：</p>
            <p>状況（事故/故障、自走可否）：</p>
            <p>写真（任意：損傷/警告灯/周辺）：</p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">対応の流れ</h2>
          <div className="space-y-4">
            {[
              "電話/LINEで状況確認",
              "レッカー手配（到着目安を案内）",
              "搬送 → 修理/鈑金のご提案",
              "必要に応じてレンタカー手配（保険相談も対応）",
            ].map((title, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Cases */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold">
            よくあるケース
          </h2>
          <ul className="space-y-3">
            {[
              "走行中に警告灯が点灯した",
              "エンジンの調子が悪く動かせない",
              "事故で自走できない",
              "修理期間中の代車が必要",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 rounded-lg bg-white p-4"
              >
                <span className="text-accent">✓</span>
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Price Guide */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold">料金目安</h2>
          <div className="space-y-4">
            {[
              {
                service: "レッカー",
                note: "状況・距離により変動（まずは見積）",
              },
              { service: "修理/鈑金", note: "損傷確認後に見積" },
              {
                service: "レンタカー",
                note: "期間・車種により変動（保険適用可否も相談）",
              },
            ].map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <span className="font-medium">{item.service}</span>
                <span className="text-sm text-muted">{item.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            ※料金は状況により変動します。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQBlock items={emergencyFAQ} />

      {/* Bottom CTA */}
      <CTASection variant="emergency" showForm={false} />
    </>
  );
}
