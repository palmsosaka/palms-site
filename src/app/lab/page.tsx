import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import styles from "./lab.module.css";

export const metadata: Metadata = {
  title: "LAB｜PALMS LAB — 懐かしさを、今使える形につくり直す。",
  description: "PALMS LABは構想・開発段階のプロジェクト群です。価格・時期・仕様はすべて未定[構想]。整備・保険・レンタカー・イベント・観光などの事業者との協業アイデアを募集しています。",
};

const projects = [
  {
    no: "PL-01",
    name: "日常拡張型カスタムカー",
    en: "Daily-Expand Custom",
    desc: "通勤も週末も、車が日常を広げる道具になるカスタムの構想。",
    label: "MODULE",
    dim: "L:TBD",
    thumb: (
      <svg viewBox="0 0 320 180" role="img" aria-label="ルーフモジュールを載せた車の図面風スケッチ">
        <g fill="none" stroke="var(--draft-line)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <path d="M40 128 L42 106 L52 99 L72 72 L150 66 L208 68 L238 78 L262 94 L268 112 L266 128" />
          <path d="M40 128 L62 128 M110 128 L204 128 M254 128 L266 128" />
          <circle cx="86" cy="129" r="17" />
          <circle cx="229" cy="129" r="17" />
        </g>
        <g stroke="var(--draft-thin)" strokeWidth="1">
          <path d="M86 122 L86 136 M79 129 L93 129" />
          <path d="M229 122 L229 136 M222 129 L236 129" />
          <path d="M56 99 L240 92" />
          <path d="M140 68 L140 126" strokeDasharray="5 4" />
        </g>
        <g fill="none" stroke="var(--electric-aqua)" strokeWidth="1.2">
          <rect x="84" y="46" width="112" height="13" strokeDasharray="5 4" />
          <path d="M196 50 L226 32 L282 32" />
        </g>
        <text x="216" y="27" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          MODULE
        </text>
        <g stroke="var(--draft-thin)" strokeWidth="1" fill="none">
          <path d="M40 146 L40 162 M266 146 L266 162 M40 156 L128 156 M178 156 L266 156" />
        </g>
        <text x="153" y="160" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          L:TBD
        </text>
      </svg>
    ),
  },
  {
    no: "PL-02",
    name: "LIFE BASE DRAWER",
    en: "In-Car Storage Module",
    desc: "車を「引き出しのある基地」に変える車載収納モジュールの構想。",
    thumb: (
      <svg viewBox="0 0 320 180" role="img" aria-label="引き出し式の車載収納モジュールの図面風スケッチ">
        <g fill="none" stroke="var(--draft-line)" strokeWidth="1.6">
          <rect x="62" y="42" width="140" height="88" />
          <rect x="70" y="50" width="124" height="32" />
        </g>
        <rect x="70" y="90" width="124" height="32" fill="none" stroke="var(--draft-thin)" strokeWidth="1.2" strokeDasharray="5 4" />
        <g fill="none" stroke="var(--draft-line)" strokeWidth="1.6">
          <rect x="122" y="90" width="124" height="32" />
          <path d="M176 106 L192 106" />
          <path d="M116 62 L132 62" />
        </g>
        <g stroke="var(--draft-thin)" strokeWidth="1">
          <path d="M126 118 L154 90 M138 120 L166 92 M150 122 L178 94" />
        </g>
        <g fill="none" stroke="var(--electric-aqua)" strokeWidth="1.4">
          <path d="M252 106 L286 106 M286 106 l-9 -5 M286 106 l-9 5" />
        </g>
        <text x="252" y="94" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          SLIDE
        </text>
        <text x="62" y="152" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          UNIT: LIFE BASE DRAWER
        </text>
      </svg>
    ),
  },
  {
    no: "PL-03",
    name: "FIT KIT",
    en: "Model-Specific Kit",
    desc: "車種ごとの寸法に合わせて設計する、車種別キットの構想。",
    thumb: (
      <svg viewBox="0 0 320 180" role="img" aria-label="車の上面図に区画割りしたキット配置の図面風スケッチ">
        <rect x="52" y="38" width="176" height="104" rx="34" fill="none" stroke="var(--draft-line)" strokeWidth="1.6" />
        <path d="M92 38 L92 142 M188 38 L188 142" stroke="var(--draft-thin)" strokeWidth="1" strokeDasharray="5 4" fill="none" />
        <g fill="none" stroke="var(--draft-thin)" strokeWidth="1.2">
          <rect x="196" y="52" width="26" height="24" />
          <rect x="196" y="104" width="26" height="24" />
          <rect x="104" y="52" width="34" height="24" />
        </g>
        <rect x="196" y="78" width="26" height="24" fill="none" stroke="var(--electric-aqua)" strokeWidth="1.4" />
        <g fill="none" stroke="var(--electric-aqua)" strokeWidth="1.2">
          <path d="M222 84 L252 62 L296 62" />
        </g>
        <text x="254" y="57" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          FIT
        </text>
        <g stroke="var(--draft-thin)" strokeWidth="1" fill="none">
          <path d="M52 152 L52 166 M228 152 L228 166 M52 160 L106 160 M172 160 L228 160" />
        </g>
        <text x="140" y="164" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          BY MODEL
        </text>
      </svg>
    ),
  },
  {
    no: "PL-04",
    name: "防災車両",
    en: "Disaster-Ready Family Car",
    desc: "いざという時、家族の拠点になる防災ファミリーカーの構想。",
    thumb: (
      <svg viewBox="0 0 320 180" role="img" aria-label="電源・水・備品モジュールを積んだバンの図面風スケッチ">
        <g fill="none" stroke="var(--draft-line)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <path d="M46 128 L46 70 L74 54 L196 54 L226 66 L256 90 L260 112 L258 128" />
          <path d="M46 128 L64 128 M112 128 L196 128 M246 128 L258 128" />
          <circle cx="88" cy="129" r="17" />
          <circle cx="221" cy="129" r="17" />
        </g>
        <g stroke="var(--draft-thin)" strokeWidth="1">
          <path d="M88 122 L88 136 M81 129 L95 129" />
          <path d="M221 122 L221 136 M214 129 L228 129" />
          <path d="M196 54 L196 126" strokeDasharray="5 4" />
        </g>
        <g fill="none" stroke="var(--draft-thin)" strokeWidth="1.2" strokeDasharray="5 4">
          <rect x="62" y="92" width="34" height="26" />
          <rect x="102" y="92" width="34" height="26" />
          <rect x="142" y="92" width="34" height="26" />
        </g>
        <path d="M118 66 L110 80 L117 80 L111 92 L124 76 L117 76 L123 66 Z" fill="var(--electric-aqua)" opacity="0.9" />
        <text x="62" y="152" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          PWR / H2O / KIT
        </text>
      </svg>
    ),
  },
  {
    no: "PL-05",
    name: "AI・DX業務改善",
    en: "Auto-Biz Improvement",
    desc: "AI・DXで自動車業務の手間を減らす、仕組みづくりの構想。",
    thumb: (
      <svg viewBox="0 0 320 180" role="img" aria-label="アナログメーターと業務フロー図を組み合わせた図面風スケッチ">
        <g fill="none" stroke="var(--draft-line)" strokeWidth="1.6">
          <path d="M40 118 A52 52 0 0 1 144 118" />
          <path d="M40 118 L144 118" />
        </g>
        <g stroke="var(--draft-thin)" strokeWidth="1.2">
          <path d="M50 100 L58 104 M66 80 L72 86 M92 70 L92 78 M118 80 L112 86 M134 100 L126 104" />
        </g>
        <path d="M92 118 L64 88" stroke="var(--sunset-amber)" strokeWidth="2" fill="none" />
        <circle cx="92" cy="118" r="4" fill="var(--sunset-amber)" />
        <text x="92" y="136" textAnchor="middle" fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          WORKLOAD
        </text>
        <g fill="none" stroke="var(--draft-thin)" strokeWidth="1.2">
          <rect x="190" y="40" width="92" height="24" />
          <rect x="190" y="118" width="92" height="24" />
          <path d="M236 64 L236 74 M236 108 L236 118 M236 74 l-5 -8 M236 118 l-5 -8 M236 74 l5 -8 M236 118 l5 -8" />
        </g>
        <rect x="190" y="79" width="92" height="24" fill="none" stroke="var(--electric-aqua)" strokeWidth="1.4" />
        <g fontFamily="IBM Plex Mono,monospace" fontSize="9" fill="var(--chrome-gray)" letterSpacing="1">
          <text x="236" y="55" textAnchor="middle">
            INPUT
          </text>
          <text x="236" y="94" textAnchor="middle" fill="var(--electric-aqua)">
            AI / DX
          </text>
          <text x="236" y="133" textAnchor="middle">
            OUTPUT
          </text>
        </g>
      </svg>
    ),
  },
];

export default function LabPage() {
  return (
    <div className={styles.page}>
      <RevealObserver />

      {/* [構想]帯 — LAB全体が構想・開発段階であることの明示 */}
      <div className={styles.conceptNotice} role="note">
        <div className={styles.wrap}>
          <span className={styles.noticeTag}>STATUS: CONCEPT</span>
          <p>
            LABの各プロジェクトは構想・開発段階です。<span className={styles.mono}>価格・時期・仕様はすべて未定 [構想]</span>
          </p>
        </div>
      </div>

      {/* 1. ヒーロー(設計図面風ブループリント) */}
      <section className={`${styles.hero} ${styles.draftBg}`} aria-labelledby="hero-title">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <p className={styles.heroKicker}>CONCEPT &amp; PRODUCT DIVISION</p>
          <h1 className={`${styles.heroEn} chrome-text`} id="hero-title">
            PALMS LAB
          </h1>
          <p className={styles.heroCopy}>
            懐かしさを飾るのではなく、
            <br />
            今使える形につくり直す。
          </p>
          <p className={styles.heroNote}>ALL PROJECTS: CONCEPT PHASE [構想]</p>
        </div>

        <svg
          className={styles.heroScene}
          viewBox="0 0 1200 430"
          preserveAspectRatio="xMidYMax meet"
          role="img"
          aria-label="設計図面風に描いた抽象的な車のアウトライン。寸法はすべて未定と表記"
        >
          <g fill="none" stroke="var(--draft-line)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
            <path d="M240 330 L244 288 L262 276 L292 226 L470 214 L688 214 L744 224 L820 258 L856 282 L864 310 L862 330" />
            <path d="M240 330 L286 330 M394 330 L706 330 M814 330 L862 330" />
            <circle cx="340" cy="332" r="46" />
            <circle cx="760" cy="332" r="46" />
            <circle cx="340" cy="332" r="20" stroke="var(--draft-thin)" />
            <circle cx="760" cy="332" r="20" stroke="var(--draft-thin)" />
          </g>
          <g stroke="var(--draft-thin)" strokeWidth="1.5">
            <path d="M340 318 L340 346 M326 332 L354 332" />
            <path d="M760 318 L760 346 M746 332 L774 332" />
          </g>
          <path d="M175 332 L925 332" stroke="var(--draft-thin)" strokeWidth="1" strokeDasharray="16 6 3 6" fill="none" />
          <g fill="none" stroke="var(--draft-thin)" strokeWidth="1.2">
            <path d="M266 278 L818 264" />
            <path d="M298 228 L332 272" />
            <path d="M744 226 L788 260" />
            <path d="M470 218 L470 328" strokeDasharray="7 6" />
            <path d="M640 216 L640 328" strokeDasharray="7 6" />
          </g>
          <g fill="none" stroke="var(--electric-aqua)" strokeWidth="1.4">
            <rect x="474" y="192" width="196" height="16" strokeDasharray="6 5" />
            <path d="M670 196 L716 156 L804 156" />
            <rect x="772" y="288" width="82" height="26" strokeDasharray="6 5" />
            <path d="M854 296 L906 268 L1010 268" opacity="0.9" />
          </g>
          <g fontFamily="IBM Plex Mono,monospace" fontSize="15" fill="var(--chrome-gray)" letterSpacing="1">
            <text x="808" y="151">
              MODULE AREA [構想]
            </text>
            <text x="1014" y="263">
              DRAWER [構想]
            </text>
          </g>
          <g stroke="var(--draft-thin)" strokeWidth="1" fill="none">
            <path d="M240 348 L240 392 M864 348 L864 392" />
            <path d="M240 384 L508 384 M612 384 L864 384" />
            <path d="M240 384 l12 -4 M240 384 l12 4 M864 384 l-12 -4 M864 384 l-12 4" />
            <path d="M204 214 L228 214 M204 330 L228 330" />
            <path d="M212 214 L212 250 M212 296 L212 330" />
          </g>
          <g fontFamily="IBM Plex Mono,monospace" fontSize="14" fill="var(--chrome-gray)" letterSpacing="1">
            <text x="560" y="389" textAnchor="middle">
              L : TBD
            </text>
            <text x="212" y="278" textAnchor="middle">
              H:TBD
            </text>
          </g>
          <g stroke="var(--draft-thin)" strokeWidth="1" fill="none">
            <rect x="924" y="330" width="246" height="76" />
            <path d="M924 355 L1170 355 M924 380 L1170 380" />
          </g>
          <g fontFamily="IBM Plex Mono,monospace" fontSize="13" fill="var(--chrome-gray)" letterSpacing="1">
            <text x="936" y="347">
              PALMS LAB
            </text>
            <text x="936" y="372">
              DWG NO. PL-0000 / SHEET 1
            </text>
            <text x="936" y="398" fill="var(--sunset-amber)">
              STATUS: CONCEPT [構想]
            </text>
          </g>
        </svg>
      </section>

      {/* 2. プロジェクトカード×5(すべて[構想]。仕様・価格・時期の断定表記なし) */}
      <section className={`${styles.section} ${styles.sectionDark}`} aria-labelledby="projects-title">
        <div className={styles.wrap}>
          <p className={`${styles.sectionLabel} reveal`}>PROJECTS</p>
          <h2 className={`${styles.sectionTitle} chrome-text reveal`} id="projects-title">
            NOW DRAFTING
          </h2>
          <p className={`${styles.sectionTitleJa} reveal`}>いま、図面の上にあるもの。</p>

          <div className={styles.labGrid}>
            {projects.map((p) => (
              <article className={`${styles.labCard} reveal`} key={p.no}>
                <div className={styles.cardLabel}>
                  <span className={styles.cardNo}>{p.no}</span>
                  <span className={styles.cardStatus}>STATUS: CONCEPT</span>
                </div>
                <div className={styles.cardThumb}>{p.thumb}</div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <p className={styles.cardEn}>{p.en}</p>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className={styles.horizonRule} />

      {/* 3. LABの思想(3キーワードのみ・文字最小) */}
      <section className={`${styles.section} ${styles.draftBg}`} aria-labelledby="idea-title">
        <div className={styles.wrap}>
          <p className={`${styles.sectionLabel} reveal`}>PHILOSOPHY</p>
          <h2 className={`${styles.sectionTitle} chrome-text reveal`} id="idea-title">
            THREE LINES
          </h2>
          <ul className={styles.ideaList}>
            <li className="reveal">
              <span className={styles.ideaNo}>01</span>
              <span className={`${styles.ideaWord} chrome-text`}>RE-DESIGN</span>
              <span className={styles.ideaLine}>懐かしさを、今の道具につくり直す。</span>
            </li>
            <li className="reveal">
              <span className={styles.ideaNo}>02</span>
              <span className={`${styles.ideaWord} chrome-text`}>DAILY USE</span>
              <span className={styles.ideaLine}>飾るためではなく、毎日使うために。</span>
            </li>
            <li className="reveal">
              <span className={styles.ideaNo}>03</span>
              <span className={`${styles.ideaWord} chrome-text`}>KEEP THE DREAM ALIVE</span>
              <span className={styles.ideaLine}>止まっていた憧れを、動かし続ける。</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. 協業・アイデア募集CTA(Ivory・実直/BtoB) */}
      <section className={`${styles.section} ${styles.sectionIvory} ${styles.cta}`} aria-labelledby="cta-title">
        <div className={styles.wrap}>
          <p className={`${styles.sectionLabel} reveal`}>COLLABORATION</p>
          <h2 className={`${styles.ctaTitle} reveal`} id="cta-title">
            協業・アイデア募集
          </h2>
          <p className={`${styles.ctaLine} reveal`}>
            整備・保険・レンタカー・イベント・観光などの事業者のみなさまと、LABの構想を一緒に形にするアイデアを募集しています。
          </p>
          {/* [要確認] 問い合わせ先未設置のためダミーリンク(プロトタイプ準拠) */}
          <p className="reveal">
            <a className={styles.btnPrimary} href="#">
              協業について問い合わせる
            </a>
          </p>
          <p className={`${styles.ctaNote} reveal`}>ALL PROJECTS ARE IN CONCEPT PHASE [構想]</p>
        </div>
      </section>
    </div>
  );
}
