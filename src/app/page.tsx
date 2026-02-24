import Link from "next/link";
import { siteConfig, BASE_PATH } from "@/config/site";
import FAQBlock from "@/components/FAQBlock";
import ProblemSection from "@/components/ProblemSection";
import ScrollAnimator from "@/components/ScrollAnimator";
import Image from "next/image";

const topFAQ = [
  {
    question: "事故現場で本当にレンタカーを借りられますか？",
    answer:
      "状況と在庫次第で可能です。安全確保・道路状況・車種などを確認し、可能な限り現場での差し替えを行います。",
  },
  {
    question: "レッカー車に同乗できないと言われました",
    answer:
      'ロードサービスの運用上、同乗できないケースは珍しくありません。PALMSはその"移動の空白"を減らすため、代車を現場へお持ちする体制を整えています。※状況により、同乗の可否や対応は変わることがあります。',
  },
  {
    question: "夜間・休日でも対応できますか？",
    answer:
      "24時間受付（可能な限り対応）しています。混雑状況や安全上の理由で到着時間が前後する場合があります。",
  },
  {
    question: "料金はいくらですか？",
    answer:
      "基本的にお客様加入の保険内で、等級が上下せず利用できる保険内容（ロードアシスタンス特約等）からご精算いただきます。そちらの加入がない場合でも企業努力いたします！",
  },
  {
    question: "保険が使えるか分かりません",
    answer:
      "加入内容によって異なりますが、状況整理からお手伝いします。保険会社への連絡タイミングや必要情報も、わかりやすくご案内します。",
  },
  {
    question: "どのエリアまで来てもらえますか？",
    answer: `${siteConfig.areaDetail}を中心に対応しています。距離や道路状況により、到着時間が前後する場合があります。`,
  },
  {
    question: "借りる時に必要なものは？",
    answer:
      "原則として、運転免許証が必要です。その他、年齢条件・決済方法など詳細はお問い合わせください。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Global scroll animator (single observer, CSS-driven) */}
      <ScrollAnimator />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#d4eabc] via-[#eaf5de] to-white">
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="hero-animate-1 mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              24時間受付・可能な限り対応
            </div>

            <h1 className="hero-animate-2 mb-6 text-3xl font-bold leading-tight tracking-tight text-[#1a2e12] md:text-5xl md:leading-tight">
              事故現場で
              <span className="text-accent">&quot;レンタカー<span className="text-[#1a2e12]/60 text-[0.85em]">or</span>代車&quot;</span>
              お渡し
              <br />
              お車とレンタカーを
              <br className="md:hidden" />
              その場で差し替え
            </h1>

            <p className="hero-animate-3 mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              事故・故障の現場に、レンタカーを積んで駆けつけ
              <br className="hidden md:block" />
              お車はレッカーでお引き取り、あなたは
              <strong className="text-[#1a2e12]">その場で代車に乗り換えて出発</strong>
              できます
            </p>

            {/* 3 Points */}
            <div className="hero-animate-3 mx-auto mb-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              {[
                { line1: "事故現場で車両入替", line2: "（レッカー＋代車）" },
                { line1: "保険案件も", line2: "ワンストップ対応" },
                { line1: "受付：24時間", line2: "（可能な限り対応）" },
              ].map((item) => (
                <div
                  key={item.line1}
                  className="flex items-center gap-2 rounded-lg border border-accent/15 bg-white px-4 py-2.5 text-sm shadow-sm"
                >
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-gray-700">{item.line1}<br />{item.line2}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-animate-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#F5A623] px-12 py-6 text-xl font-bold text-white shadow-lg shadow-yellow-600/25 transition-all duration-300 hover:bg-[#e69a1e] hover:shadow-yellow-600/35 hover:scale-105 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" /></svg>
                今すぐ電話する
              </a>
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-accent bg-white px-12 py-6 text-xl font-bold text-accent shadow-sm transition-all duration-300 hover:bg-accent/5 hover:scale-105 sm:w-auto"
              >
                💬 LINEで相談する
              </a>
            </div>
            <p className="hero-animate-5 mt-4 text-xs text-gray-400">
              LINEなら写真・位置情報も送れます
            </p>
          </div>
        </div>
      </section>

      {/* ===== ワンストップ画像 ===== */}
      <section className="bg-white py-0">
        <div className="animate-fade mx-auto max-w-4xl">
          <Image
            src={`${BASE_PATH}/images/onestop.png`}
            alt="事故から復旧まで、安心のワンストップサービス"
            width={1200}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* ===== 課題提起 ===== */}
      <ProblemSection />

      {/* ===== 解決策 ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="animate-on-scroll mb-4 text-center text-sm font-bold tracking-widest text-accent">
            SOLUTION
          </div>
          <h2 className="animate-on-scroll mb-6 text-center text-2xl font-bold md:text-3xl">
            PALMSの解決策：
            <br className="md:hidden" />
            現場で&quot;代車に乗り換え&quot;
          </h2>
          <p className="animate-on-scroll mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-muted md:text-base">
            現場へレンタカーを積んで出動。レッカー引き上げと同時にその場で車両差し替え。
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "その場で移動手段を確保",
                desc: "事故直後でもすぐに移動できます",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h3.86a2.25 2.25 0 0 0 1.519-.585l1.586-1.414a2.25 2.25 0 0 1 1.519-.585h2.391a2.25 2.25 0 0 1 1.451.527l1.722 1.472h3.457" />
                  </svg>
                ),
              },
              {
                title: "複数移動が不要",
                desc: "タクシー・電車の乗り継ぎ不要",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                  </svg>
                ),
              },
              {
                title: "判断コストが下がる",
                desc: "保険・修理もまとめて相談OK",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`animate-scale-up stagger-${i + 1} hover-lift rounded-2xl border border-gray-100 bg-white p-6 shadow-sm`}
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== こんな方に ===== */}
      <section className="bg-primary-light py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="animate-on-scroll mb-10 text-center text-2xl font-bold md:text-3xl">
            こんな方におすすめ
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "仕事・子どもの送迎など、すぐ移動が必要な方",
              "事故直後の手配をひとつにまとめたい方",
              "修理・保険・代車を丸投げで進めたい方",
              "夜間・休日の事故で、店舗に行くのが難しい方",
            ].map((text, i) => (
              <div
                key={text}
                className={`animate-scale-up stagger-${i + 1} hover-lift flex items-center gap-3 rounded-xl bg-white p-5 shadow-sm`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm text-white">
                  ✓
                </span>
                <p className="text-sm font-medium md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ご利用の流れ ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="animate-on-scroll mb-4 text-center text-sm font-bold tracking-widest text-accent">
            FLOW
          </div>
          <h2 className="animate-on-scroll mb-12 text-center text-2xl font-bold md:text-3xl">
            ご利用の流れ（最短3ステップ）
          </h2>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "まずはご連絡（電話 / LINE）",
                desc: "状況・場所・車種を確認し、最短手配を行います。",
                sub: "",
              },
              {
                num: "02",
                title: "現場へ出動（レッカー＋代車積載）",
                desc: "レンタカーを積んで現場へ駆けつけます。",
                sub: "",
              },
              {
                num: "03",
                title: "車両差し替え → その場で出発",
                desc: "お車はレッカーで搬送、あなたは代車に乗り換えて出発。",
                sub: "",
              },
            ].map((item, i) => (
              <div key={item.num} className={`animate-on-scroll stagger-${i + 1} flex gap-5`}>
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white">
                    {item.num}
                  </span>
                  {i < 2 && <div className="mt-2 h-full w-px bg-gray-200" />}
                </div>
                <div className="pb-8">
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  {item.sub && (
                    <p className="mt-2 text-xs text-accent">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 選ばれる理由 ===== */}
      <section className="bg-[#1a1a1a] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="animate-on-scroll mb-4 text-center text-sm font-bold tracking-widest text-primary">
            WHY PALMS
          </div>
          <h2 className="animate-on-scroll mb-12 text-center text-2xl font-bold md:text-3xl">
            PALMSが選ばれる理由
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                num: "01",
                title: '事故対応を"分断"させない',
                desc: "レッカー・代車・修理・保険をまとめて対応。",
              },
              {
                num: "02",
                title: "現場で代車を渡せるから、行動が止まらない",
                desc: "事故直後でもその日の予定を守れます。",
              },
              {
                num: "03",
                title: "相談窓口がひとつ",
                desc: "迷わず相談できる一本化窓口。",
              },
              {
                num: "04",
                title: "スピード重視（ただし安全優先）",
                desc: "迅速対応、安全最優先。",
              },
              {
                num: "05",
                title: '"わかりやすさ"重視',
                desc: "やることを最小化して分かりやすくご案内。",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`animate-scale-up stagger-${i + 1} rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/10`}
              >
                <span className="mb-2 inline-block text-xs font-bold text-primary">
                  {item.num}
                </span>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 対応サービス ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="animate-on-scroll mb-4 text-center text-sm font-bold tracking-widest text-accent">
            SERVICE
          </div>
          <h2 className="animate-on-scroll mb-10 text-center text-2xl font-bold md:text-3xl">
            対応サービス
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                label: "レッカー・搬送",
                href: "/tow/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h3.86a2.25 2.25 0 0 0 1.519-.585l1.586-1.414a2.25 2.25 0 0 1 1.519-.585h2.391" />
                  </svg>
                ),
              },
              {
                label: "レンタカー（代車）お渡し",
                href: "/rental/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                  </svg>
                ),
              },
              {
                label: "鈑金・塗装・修理",
                href: "/repair/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" />
                  </svg>
                ),
              },
              {
                label: "車検・整備",
                href: "/inspection/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
              {
                label: "買取・販売",
                href: "/buy-sell/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className={`animate-scale-up stagger-${i + 1} hover-lift flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-accent/30`}
              >
                {item.icon}
                <p className="text-sm font-medium md:text-base">
                  {item.label}
                </p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="ml-auto h-4 w-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <div className="bg-gray-50">
        <div className="animate-on-scroll">
          <FAQBlock items={topFAQ} />
        </div>
      </div>

      {/* ===== 最終CTA ===== */}
      <section className="bg-gradient-to-b from-[#d4eabc] to-[#c5e2a5] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="animate-on-scroll mb-4 text-2xl font-bold text-[#1a2e12] md:text-3xl">
            まずは「今どこで、どういう状況か」
            <br />
            だけ教えてください
          </h2>
          <p className="animate-on-scroll mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            PALMSが手配・段取りを最短ルートで整理します。
          </p>

          <div className="animate-scale-up flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#F5A623] px-12 py-6 text-xl font-bold text-white shadow-lg shadow-yellow-600/25 transition-all duration-300 hover:bg-[#e69a1e] hover:shadow-yellow-600/35 hover:scale-105 sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" /></svg>
              今すぐ電話する
            </a>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-accent bg-white px-12 py-6 text-xl font-bold text-accent shadow-sm transition-all duration-300 hover:bg-accent/5 hover:scale-105 sm:w-auto"
            >
              💬 LINEで相談する
            </a>
          </div>
          <p className="animate-fade mt-4 text-xs text-gray-500">
            LINEなら写真・位置情報も送れます
          </p>

          <div className="animate-fade mt-8 flex flex-col items-center gap-2 text-sm text-gray-500">
            <a href="/contact/" className="underline transition-colors duration-300 hover:text-accent">
              Webフォームからのお問い合わせはこちら
            </a>
          </div>
        </div>
      </section>

      {/* ===== 注意事項 ===== */}
      <section className="border-t bg-gray-50 py-6">
        <div className="mx-auto max-w-3xl px-4">
          <ul className="space-y-1 text-[11px] leading-relaxed text-muted">
            <li>
              ※安全確保のため、安全な場所へ移動後の対応となる場合があります。
            </li>
            <li>
              ※在庫・車種・時間帯・道路状況により、現場での差し替えが難しい場合があります。
            </li>
            <li>
              ※貸出には免許証確認等のお手続きが必要です。
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
