const problems = [
  {
    headline: "レッカーに乗れない",
    desc: "来てくれたけど同乗不可。路上にひとり取り残される",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    headline: "代車まで何段階もの移動",
    desc: "タクシー→駅→電車→レンタカー店…事故後にこの手間",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    headline: "頭が回らない",
    desc: "保険・修理工場・代車…何から始めればいいか分からない",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    headline: "日常が全部止まる",
    desc: "家族の迎え・仕事・予定…すべてリスケのストレス",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1f26] py-16 text-white md:py-24">
      {/* Soft warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="animate-on-scroll">
          <p className="mb-3 text-center text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
            Problem
          </p>
          <h2 className="mb-14 text-center text-2xl font-bold leading-tight md:text-4xl">
            事故直後、こんな
            <span className="text-amber-400">&quot;手間&quot;</span>
            に<br className="md:hidden" />
            困っていませんか？
          </h2>
        </div>

        {/* Cards with staggered animation */}
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((item, i) => (
            <div
              key={item.headline}
              className={`animate-scale-up stagger-${i + 1} group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-950/10 hover:shadow-lg hover:shadow-amber-900/10`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <p className="mb-1.5 text-lg font-bold leading-snug">
                {item.headline}
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="animate-on-scroll mt-14 flex justify-center">
          <div className="relative rounded-2xl border border-amber-500/20 bg-amber-950/15 px-8 py-7 text-center backdrop-blur-sm">
            <p className="text-base font-medium text-gray-300 md:text-lg">
              事故は「車が動かない」だけじゃない。
            </p>
            <p className="mt-2 text-xl font-bold text-amber-400 md:text-2xl">
              「人が動けない」のが、本当の不便さ。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
