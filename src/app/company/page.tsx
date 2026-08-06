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
  { label: "電話番号（直通）", value: siteConfig.phone },
  { label: "電話番号（固定）", value: siteConfig.phoneFixed },
  { label: "FAX", value: siteConfig.faxKeep },
  { label: "営業時間", value: `${siteConfig.hours}${siteConfig.hoursNote}` },
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
            <iframe
              src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A0%BA%E5%B8%82%E5%8D%97%E5%8C%BA%E8%B1%8A%E7%94%B0487-1&t=m&z=15&output=embed&hl=ja"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PALMS所在地"
              className="h-64 w-full md:h-96"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
