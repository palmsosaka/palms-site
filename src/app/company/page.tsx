import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `会社情報｜${siteConfig.companyName}`,
  description: `${siteConfig.companyName}の会社概要・アクセス・営業時間をご案内します。`,
};

const companyInfo = [
  { label: "会社名", value: siteConfig.companyName },
  { label: "屋号/ブランド", value: siteConfig.brand },
  { label: "住所", value: siteConfig.address },
  { label: "電話番号", value: siteConfig.phone },
  { label: "FAX", value: siteConfig.fax },
  { label: "営業時間", value: siteConfig.hours },
  {
    label: "事業内容",
    value: "レッカー / レンタカー / 鈑金塗装・修理 / 車検・整備 / 買取・販売",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "会社情報", url: "/company/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">会社情報</h1>

          <div className="mb-8 overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <tbody>
                {companyInfo.map((item) => (
                  <tr key={item.label} className="border-b last:border-b-0">
                    <th className="w-1/3 bg-gray-50 px-4 py-3 text-left font-medium">
                      {item.label}
                    </th>
                    <td className="px-4 py-3">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Google Map */}
          <h2 className="mb-4 text-xl font-bold">アクセス</h2>
          <div className="mb-8 overflow-hidden rounded-lg border">
            <div className="flex h-64 items-center justify-center bg-gray-200 text-sm text-muted md:h-96">
              {/* Replace with actual Google Maps embed */}
              <p>Googleマップ埋め込み</p>
              {/* Example: */}
              {/* <iframe
                src={siteConfig.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
