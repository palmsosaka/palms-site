import { siteConfig } from "@/config/site";

const trustItems = [
  {
    icon: "🔧",
    title: "ワンストップ対応",
    description: "事故・故障のその場からレッカー〜修理〜レンタカーまで一括手配",
  },
  {
    icon: "⚡",
    title: "迅速な対応",
    description: `受付${siteConfig.hours}。${siteConfig.hoursNote}`,
  },
  {
    icon: "📋",
    title: "明確なご案内",
    description: "料金目安と流れを明確に。不安を減らす対応を心がけています",
  },
];

export default function TrustBlock() {
  return (
    <section className="bg-primary-light py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <span className="mb-3 block text-4xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
