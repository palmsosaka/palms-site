import type { Metadata } from "next";
import Link from "next/link";
import RevealObserver from "@/components/RevealObserver";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "EXPERIENCE｜あの頃、乗れなかった一台へ。",
  description: "見るだけだった車を、体験する車へ。PALMS EXPERIENCEは、所有だけがゴールではない車との時間を届ける構想中の事業です。",
};

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <RevealObserver />

      {/* 1. ヒーロー(夕暮れ→夜/道路・水平線の抽象SVG) */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <p className={styles.heroKicker}>PALMS EXPERIENCE</p>
          <p className={`${styles.heroEn} chrome-text`} aria-hidden="true">
            DRIVE WHAT
            <br />
            MOVED YOU.
          </p>
          <h1 className={styles.heroTitle} id="hero-title">
            あの頃、乗れなかった一台へ。
          </h1>
          <p className={styles.heroSub}>見るだけだった車を、体験する車へ。</p>
        </div>

        <svg
          className={styles.heroScene}
          viewBox="0 0 1200 340"
          preserveAspectRatio="xMidYMax slice"
          role="img"
          aria-label="夕暮れの水平線へ続く一本道と、クラシックカーの抽象的なシルエット"
        >
          <defs>
            <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F5A24A" />
              <stop offset="1" stopColor="#C97B45" />
            </linearGradient>
            <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1A2233" />
              <stop offset="1" stopColor="#0B111E" />
            </linearGradient>
            <linearGradient id="chromeLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#A9AFB8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E6EBF0" />
              <stop offset="1" stopColor="#A9AFB8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="600" cy="150" r="74" fill="url(#sunGrad)" opacity="0.9" />
          <rect x="0" y="148" width="1200" height="192" fill="url(#roadGrad)" />
          <rect x="0" y="147" width="1200" height="2" fill="url(#chromeLine)" />
          <path d="M600,150 L400,340 L800,340 Z" fill="#151C2B" />
          <path d="M600,156 L600,340" stroke="#F5A24A" strokeWidth="4" strokeDasharray="10 26" opacity="0.7" />
          <path d="M600,150 L404,340" stroke="#3AD7DF" strokeWidth="1.5" opacity="0.35" />
          <path d="M600,150 L796,340" stroke="#3AD7DF" strokeWidth="1.5" opacity="0.35" />
          <path d="M0,210 C180,205 300,215 430,240" stroke="#A9AFB8" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M1200,210 C1020,205 900,215 770,240" stroke="#A9AFB8" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M0,250 C160,246 280,258 400,290" stroke="#F24F9D" strokeWidth="1" fill="none" opacity="0.28" />
          <path d="M1200,250 C1040,246 920,258 800,290" stroke="#F24F9D" strokeWidth="1" fill="none" opacity="0.28" />
          <g aria-hidden="true">
            <path
              d="M520,268 Q522,246 538,242 L556,222 Q560,214 572,212 L628,212 Q640,214 644,222 L662,242 Q678,246 680,268 L678,292 Q676,298 668,298 L532,298 Q524,298 522,292 Z"
              fill="#080C14"
            />
            <path d="M556,222 Q600,216 644,222" stroke="#A9AFB8" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M566,224 L634,224 L626,240 L574,240 Z" fill="#3A2E4E" opacity="0.9" />
            <rect x="530" y="258" width="18" height="7" rx="3" fill="#F24F9D" opacity="0.85" />
            <rect x="652" y="258" width="18" height="7" rx="3" fill="#F24F9D" opacity="0.85" />
            <rect x="524" y="276" width="152" height="5" rx="2.5" fill="#A9AFB8" opacity="0.75" />
            <rect x="530" y="290" width="26" height="10" rx="4" fill="#05070C" />
            <rect x="644" y="290" width="26" height="10" rx="4" fill="#05070C" />
          </g>
        </svg>
        <p className={styles.heroScrollHint} aria-hidden="true">
          SCROLL
        </p>
      </section>

      {/* 2. コンセプト:所有だけがゴールではない */}
      <section className={`${styles.section} ${styles.sectionDark} ${styles.concept}`} aria-labelledby="concept-title">
        <div className={`${styles.wrap} reveal`}>
          <p className={styles.sectionLabel}>CONCEPT</p>
          <h2 className={`${styles.sectionTitle} chrome-text`} id="concept-title">
            NOT ONLY OWNERSHIP
          </h2>
          <p className={styles.sectionTitleJa}>所有だけが、ゴールじゃない。</p>
          <p>憧れは「買う」だけじゃない。車と過ごす時間そのものを届けます。</p>
          <ul className={styles.wayList}>
            <li>
              <span>SALE</span>販売
            </li>
            <li>
              <span>RENTAL</span>レンタル
            </li>
            <li>
              <span>EVENT</span>イベント
            </li>
            <li>
              <span>SHOOTING</span>撮影
            </li>
            <li>
              <span>DRIVE</span>ドライブ
            </li>
          </ul>
          <p className={styles.conceptCopy}>
            昔の夢を、<span className={styles.amber}>今の選択肢</span>に。
          </p>
        </div>
      </section>

      <hr className={styles.horizonRule} />

      {/* 3. CAST CARS(車種・年式は車両選定[要決定]のため空欄) */}
      <section className={`${styles.section} ${styles.sectionDeep}`} aria-labelledby="cast-title">
        <div className={styles.wrap}>
          <div className="reveal">
            <p className={styles.sectionLabel}>CAST CARS</p>
            <h2 className={`${styles.sectionTitle} chrome-text`} id="cast-title">
              MEET THE CAST
            </h2>
            <p className={styles.sectionTitleJa}>車は在庫じゃない。物語のキャストだ。</p>
            <p style={{ maxWidth: 640 }}>車に詳しくなくても、キャラクターとして出会えます。</p>
          </div>

          <div className={styles.castGrid}>
            {[
              {
                no: "CAST 01",
                role: "THE CRUISER",
                roleLine: "LONG-DISTANCE CRUISER",
                personality: "BIG / CALM / UNAPOLOGETIC",
                ja: "長距離と余裕を知る、大きな相棒。",
              },
              {
                no: "CAST 02",
                role: "THE SURVIVOR",
                roleLine: "REBORN MACHINE",
                personality: "TOUGH / HONEST / GRATEFUL",
                ja: "一度止まって、もう一度動きだした一台。",
              },
              {
                no: "CAST 03",
                role: "THE DAILY HERO",
                roleLine: "EVERYDAY PARTNER",
                personality: "LIGHT / FRIENDLY / RELIABLE",
                ja: "毎日を、少しだけ映画にする実用車。",
              },
            ].map((cast) => (
              <article className={`${styles.castCard} reveal`} key={cast.no}>
                <div className={styles.castPhoto} role="img" aria-label="車両写真プレースホルダー">
                  <span>PHOTO: 実写素材[要確認]</span>
                </div>
                <div className={styles.castBody}>
                  <p className={styles.castNo}>{cast.no}</p>
                  <h3 className={`${styles.castRole} chrome-text`}>{cast.role}</h3>
                  <p className={styles.castLine}>
                    <span className={styles.k}>ROLE</span>
                    {cast.roleLine}
                  </p>
                  <p className={styles.castLine}>
                    <span className={styles.k}>PERSONALITY</span>
                    {cast.personality}
                  </p>
                  <details className={styles.castMore}>
                    <summary>STORY &amp; SPEC</summary>
                    <p className={styles.castRoleJa}>{cast.ja}</p>
                    <table className={styles.castSpec}>
                      <tbody>
                        <tr>
                          <th scope="row">YEAR</th>
                          <td>
                            <span className={styles.blank}>—(車両選定[要決定])</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">ENGINE</th>
                          <td>
                            <span className={styles.blank}>—(車両選定[要決定])</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">STORY</th>
                          <td>
                            <span className={styles.blank}>車両決定後に執筆</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.castTags} aria-label="AVAILABLE AS">
                      <span>SALE</span>
                      <span className={styles.tagExp}>EXPERIENCE</span>
                      <span>SHOOTING</span>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>

          <p className={`${styles.castNote} reveal`}>
            ※ 車種・年式・ストーリーは車両選定[要決定]のため未記載(テンプレート表示)。
          </p>
        </div>
      </section>

      {/* 4. 体験メニュー([構想]) */}
      <section className={`${styles.section} ${styles.sectionIvory}`} aria-labelledby="menu-title">
        <div className={styles.wrap}>
          <div className="reveal">
            <p className={styles.planBand}>
              <span className={styles.mono}>[構想]</span>このセクションの内容は検討中の構想です。提供形態は調整中です。
            </p>
            <p className={styles.sectionLabel} style={{ color: "#3E8E96" }}>
              EXPERIENCE MENU
            </p>
            <h2
              className={styles.sectionTitle}
              id="menu-title"
              style={{ WebkitTextFillColor: "initial", background: "none", color: "var(--palms-charcoal)" }}
            >
              WAYS TO MEET THE CARS
            </h2>
            <p className={styles.sectionTitleJa}>車に会いに行く、4つの方法。</p>
          </div>

          <div className={styles.menuGrid}>
            <article className={`${styles.menuCard} reveal`}>
              <span className={styles.menuIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3>展示見学</h3>
              <span className={styles.en}>CAST CAR BAY</span>
              <p>眺める・聞く・座る。買う予定がなくても歓迎です。</p>
            </article>
            <article className={`${styles.menuCard} reveal`}>
              <span className={styles.menuIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  <circle cx="12" cy="13.5" r="3.5" />
                </svg>
              </span>
              <h3>撮影利用</h3>
              <span className={styles.en}>SHOOTING</span>
              <p>記念撮影から映像制作・広告利用まで。</p>
            </article>
            <article className={`${styles.menuCard} reveal`}>
              <span className={styles.menuIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4" />
                  <path d="M5 4h13l-3 4 3 4H5" />
                </svg>
              </span>
              <h3>イベント</h3>
              <span className={styles.en}>EVENT</span>
              <p>展示出展・法人イベントへの車両参加。</p>
            </article>
            <article className={`${styles.menuCard} reveal`}>
              <span className={styles.menuIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7.5" r="3" />
                  <path d="M3.5 20v-1.5a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5V20" />
                  <circle cx="17.5" cy="8.5" r="2.5" />
                  <path d="M20.5 20v-1a4 4 0 0 0-3.5-3.97" />
                </svg>
              </span>
              <h3>同乗体験</h3>
              <span className={styles.en}>RIDE EXPERIENCE</span>
              <p>助手席で、あの時代の音と揺れを。</p>
            </article>
          </div>

          <p className={`${styles.menuLegal} reveal`}>
            ※ すべて検討中の構想です。同乗体験等は許認可の関係で提供形態を調整中(必要に応じて許可事業者と連携)。旧車特有の安全性・故障可能性・操作特性は実施前にご説明します。
          </p>
        </div>
      </section>

      {/* 5. 若年層向け帯 */}
      <section className={styles.youth} aria-labelledby="youth-title">
        <div className={`${styles.wrap} ${styles.youthWrap} reveal`}>
          <h2 id="youth-title">
            知らない時代の車が、
            <br />
            いちばん新しい。
          </h2>
          <p>車に詳しくなくても、心が動けばそれでいい。</p>
        </div>
      </section>

      <hr className={styles.horizonRule} />

      {/* 6. MOVE AGAIN STORIES 予告 */}
      <section className={`${styles.section} ${styles.sectionCharcoal}`} aria-labelledby="stories-title">
        <div className={styles.wrap}>
          <div className="reveal">
            <p className={styles.sectionLabel}>MOVE AGAIN STORIES</p>
            <h2 className={`${styles.sectionTitle} chrome-text`} id="stories-title">
              MOVE AGAIN STORIES
            </h2>
            <p className={styles.sectionTitleJa}>止まっていた車が、動きだすまでの記録。</p>
            <p style={{ maxWidth: 640 }}>修理・再生・再出発の物語を、少しずつ公開していきます。</p>
          </div>

          <div className={styles.storyGrid}>
            <article className={`${styles.storyCard} reveal`}>
              <div className={styles.storyPhoto} role="img" aria-label="ストーリー写真プレースホルダー">
                <span>PHOTO: 実写素材[要確認]</span>
              </div>
              <div className={styles.storyBody}>
                <p className={styles.storyNo}>STORY 01</p>
                <h3>不動車、再び走る。</h3>
                <p>止まっていた一台が、もう一度道へ戻るまで。</p>
                <span className={styles.coming}>COMING SOON</span>
              </div>
            </article>
            <article className={`${styles.storyCard} reveal`}>
              <div className={styles.storyPhoto} role="img" aria-label="ストーリー写真プレースホルダー">
                <span>PHOTO: 実写素材[要確認]</span>
              </div>
              <div className={styles.storyBody}>
                <p className={styles.storyNo}>STORY 02</p>
                <h3>事故のあと、日常へ。</h3>
                <p>事故受付から納車まで、日常を取り戻す記録。</p>
                <span className={styles.coming}>COMING SOON</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. 問い合わせCTA */}
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="cta-title">
        <div className={`${styles.wrap} reveal`}>
          <p className={styles.sectionLabel}>CONTACT</p>
          <h2 className={`${styles.sectionTitle} chrome-text`} id="cta-title">
            LET&apos;S MOVE AGAIN
          </h2>
          <p className={styles.sectionTitleJa}>体験・撮影のご相談はこちら。</p>
          <p className={styles.lead}>構想段階でも、見学・撮影・イベントのご相談を受け付けています。</p>
          <div className={styles.ctaButtons}>
            {/* フォーム未実装のためダミーリンク(プロトタイプ準拠) */}
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#">
              体験・撮影について相談する
            </a>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="/">
              PALMSのトップページへ
            </Link>
          </div>
          <p className={styles.ctaNote}>※ 相談フォームは準備中です。</p>
          <p className={styles.ctaAccident}>
            お急ぎの事故・故障のご相談は <Link href="/emergency/">事故・トラブル対応ページ</Link> へ。
          </p>
        </div>
      </section>
    </div>
  );
}
