import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${siteConfig.companyName}`,
  description: `${siteConfig.companyName}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "プライバシーポリシー", url: "/privacy/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-8 text-center text-3xl font-bold">
            プライバシーポリシー
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                1. 個人情報の取得について
              </h2>
              <p>
                当社（{siteConfig.companyName}）は、お問い合わせフォーム、LINE、お電話等を通じて、
                お名前、電話番号、メールアドレス、現在地情報、車両情報、写真等の個人情報を取得することがあります。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                2. 個人情報の利用目的
              </h2>
              <ul className="list-inside list-disc space-y-1">
                <li>お問い合わせへの回答・対応</li>
                <li>レッカー手配、修理、レンタカー等のサービス提供</li>
                <li>見積り・査定のご案内</li>
                <li>サービス品質の向上</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                3. 個人情報の第三者提供
              </h2>
              <p>
                当社は、以下の場合を除き、個人情報を第三者に提供いたしません。
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>サービス提供に必要な範囲で業務委託先に提供する場合</li>
                <li>保険会社等への連絡が必要な場合（ご本人の同意に基づく）</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                4. 個人情報の管理
              </h2>
              <p>
                当社は、個人情報の漏洩、紛失、破壊等を防止するため、適切な安全管理措置を講じます。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                5. 個人情報の開示・訂正・削除
              </h2>
              <p>
                ご本人から個人情報の開示・訂正・削除等のご要望があった場合は、
                ご本人確認の上、適切に対応いたします。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                6. Cookie・アクセス解析について
              </h2>
              <p>
                当サイトでは、サービス向上のためGoogle Analytics等のアクセス解析ツールを使用しています。
                これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                7. ポリシーの変更
              </h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。
                変更した場合は、当サイト上でお知らせいたします。
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-foreground">
                8. お問い合わせ窓口
              </h2>
              <p>
                個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <p className="mt-2">
                {siteConfig.companyName}
                <br />
                住所: {siteConfig.address}
                <br />
                電話: {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
