export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1f26] py-12 text-white md:py-16">
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="animate-on-scroll mb-4 text-xs font-bold tracking-[0.25em] uppercase text-amber-400">
          Problem
        </p>
        <h2 className="animate-on-scroll mb-6 text-xl font-bold leading-tight md:text-3xl">
          事故は「車が動かない」だけじゃない。
          <br />
          <span className="text-amber-400">「人が動けない」のが、本当の不便さ。</span>
        </h2>
        <div className="animate-on-scroll mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {[
            "レッカーに同乗不可",
            "代車まで何段階もの移動",
            "頭が回らない",
            "日常が全部止まる",
          ].map((text) => (
            <span
              key={text}
              className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-gray-300"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
