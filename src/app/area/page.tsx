import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `対応エリア｜${siteConfig.companyName}（${siteConfig.area}）`,
  description: `${siteConfig.area}を中心に対応しています。事故・故障時はまずご連絡ください。`,
};

const areas = [
  { name: "エリア名1", slug: "area1" },
  { name: "エリア名2", slug: "area2" },
  { name: "エリア名3", slug: "area3" },
  { name: "エリア名4", slug: "area4" },
  { name: "エリア名5", slug: "area5" },
  { name: "エリア名6", slug: "area6" },
];

export default function AreaPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "対応エリア", url: "/area/" }]} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-center text-3xl font-bold">対応エリア</h1>
          <p className="mb-8 text-center text-muted">
            {siteConfig.areaDetail}を中心に対応しています。
            エリア外でも状況によっては対応可能な場合がありますので、まずはご連絡ください。
          </p>

          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.slug}
                className="rounded-lg border p-4 text-center hover:bg-primary-light"
              >
                <p className="font-medium">{area.name}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border-l-4 border-accent bg-primary-light p-4">
            <p className="text-sm">
              上記以外のエリアでも対応可能な場合があります。
              お急ぎの場合は、まずお電話またはLINEでご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
