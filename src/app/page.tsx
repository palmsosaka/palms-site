import Link from "next/link";
import Image from "next/image";
import { siteConfig, BASE_PATH } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";
import HeroRotator from "@/components/HeroRotator";
import styles from "./page.module.css";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ===== 1. ヒーローローテーション(3枚・7秒クロスフェード) ===== */}
      <section className={styles.hero} aria-label="ファーストビュー">
        <HeroRotator />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={styles.heroOverlay}>
          <div className={`mx-auto max-w-[1120px] px-5 w-full ${styles.heroTextBlock}`}>
            <p className={styles.heroKicker}>PALMS</p>
            <h1 className={styles.heroEn}>
              MOVE AGAIN<span className={styles.heroEnDot}>.</span>
            </h1>
            <p className={styles.heroJa}>
              止まった車を動かす。
              <br />
              止まっていた憧れも動かす。
            </p>
          </div>
          <div className={`mx-auto max-w-[1120px] px-5 w-full ${styles.heroCtaBlock}`}>
            <div className={styles.heroCta}>
              <Link href="/emergency/" className={`${styles.btn} ${styles.btnPrimary}`}>
                <PhoneIcon className={styles.btnIcon} />
                <span>車のトラブルを相談する</span>
              </Link>
              <Link href="/experience/" className={`${styles.btn} ${styles.btnSecondary}`}>
                <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v6" />
                  <path d="M5.6 8.6l1.4 1.4" />
                  <path d="M18.4 8.6l-1.4 1.4" />
                  <circle cx="12" cy="14" r="4" />
                  <path d="M3 21h18" />
                </svg>
                <span>PALMSの車と体験を見る</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ヒーロー下・3チェック帯(既存LPの強訴求を1箇所に集約) ===== */}
      <section className={styles.checksBand}>
        <div className="mx-auto max-w-[1120px] px-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { l1: "事故現場で車両入替", l2: "レッカー＋その場で代車" },
              { l1: "保険案件も", l2: "ワンストップ対応" },
              { l1: `受付：${siteConfig.hours}`, l2: siteConfig.hoursNote },
            ].map((item) => (
              <div key={item.l1} className={styles.checkItem}>
                <b aria-hidden="true">✓</b>
                <span>
                  {item.l1}
                  <br />
                  {item.l2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2.「困ったら」電話パネル + LINE/フォーム横型カード ===== */}
      <section className="bg-white py-[52px] md:py-[76px]" id="emergency" aria-label="緊急時の相談窓口">
        <div className="mx-auto max-w-[1120px] px-5">
          <p className={styles.secLabel}>IF YOU&apos;RE IN TROUBLE</p>
          <h2 className={styles.secTitle}>困ったら、まず連絡。</h2>

          <a className={styles.callPanel} href={`tel:${siteConfig.phoneRaw}`} onClick={trackCall}>
            <span>
              <span className={styles.callKicker}>事故・故障・レッカー 受付中</span>
              <span className={styles.callNumber}>{siteConfig.phone}</span>
              <span className={styles.callMeta}>
                <b>{siteConfig.hours}</b>
                <span>タップで発信できます</span>
                <span>固定 {siteConfig.phoneFixed}</span>
              </span>
            </span>
            <span className={styles.callAction} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" style={{ stroke: "var(--palms-midnight)", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              電話で相談する
            </span>
          </a>

          <div className={styles.subEntry}>
            <a className={styles.subCard} href={siteConfig.lineUrl} target="_blank" rel="noopener noreferrer" onClick={trackLine}>
              <span className={styles.subIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span>
                <b>LINEで相談</b>
                <span className="block text-xs text-[#5a6068] mt-0.5">現場の写真を送るだけでも伝わります</span>
              </span>
              <span className="ml-auto flex-none" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" style={{ stroke: "var(--chrome-gray)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            <Link className={styles.subCard} href="/contact/">
              <span className={styles.subIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>
              <span>
                <b>フォームで相談</b>
                <span className="block text-xs text-[#5a6068] mt-0.5">急ぎでない相談・お見積りはこちら</span>
              </span>
              <span className="ml-auto flex-none" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" style={{ stroke: "var(--chrome-gray)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3. 一気通貫フロー「一本の道」3フェーズ ===== */}
      <section className="bg-palms-ivory py-[52px] md:py-[76px]" id="flow" aria-label="対応の流れ">
        <div className="mx-auto max-w-[1120px] px-5">
          <p className={styles.secLabel}>ONE-STOP FLOW</p>
          <h2 className={styles.secTitle}>相談から納車まで、一つの窓口で。</h2>
          <ol className={styles.journey}>
            <li className={`${styles.jPhase} ${styles.jYou}`}>
              <div className={styles.jHead}>
                <span className={styles.jNum}>PHASE 01</span>
                <span className={styles.jTitle}>連絡する</span>
                <span className={`${styles.jActor} ${styles.jActorYou}`}>あなた</span>
              </div>
              <p className={styles.jDesc}>電話かLINEで状況を伝えるだけ。手配はすべてこちらで始めます。</p>
            </li>
            <li className={styles.jPhase}>
              <div className={styles.jHead}>
                <span className={styles.jNum}>PHASE 02</span>
                <span className={styles.jTitle}>まかせる</span>
                <span className={`${styles.jActor} ${styles.jActorPalms}`}>PALMS</span>
              </div>
              <p className={styles.jDesc}>ここから先はPALMSの仕事。窓口を移動する必要はありません。</p>
              <div className={styles.jChips}>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M5 17h-2v-4l2-5h9l4 5h3v4h-2" />
                    <circle cx="7.5" cy="17.5" r="2" />
                    <circle cx="17.5" cy="17.5" r="2" />
                  </svg>
                  レッカー
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M17 3l4 4-4 4" />
                    <path d="M21 7H8a5 5 0 0 0 0 10h1" />
                    <path d="M7 21l-4-4 4-4" />
                    <path d="M3 17h13" />
                  </svg>
                  現場で代車
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  修理・鈑金
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ stroke: "var(--palms-charcoal)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  保険会社との調整
                </span>
              </div>
            </li>
            <li className={`${styles.jPhase} ${styles.jYou}`}>
              <div className={styles.jHead}>
                <span className={styles.jNum}>PHASE 03</span>
                <span className={styles.jTitle}>日常へ戻る</span>
                <span className={`${styles.jActor} ${styles.jActorYou}`}>あなた</span>
              </div>
              <p className={styles.jDesc}>直った車を受け取って、いつもの毎日へ。</p>
            </li>
          </ol>
          <p className={styles.flowNote}>
            ※ 状況により流れは異なります。詳しくは<Link href="/emergency/">事故・トラブル対応ページ</Link>へ。
          </p>
        </div>
      </section>

      {/* ===== 4. 4本柱ビジュアルカード ===== */}
      <section className="bg-white py-[52px] md:py-[76px]" id="services" aria-label="PALMSのサービス">
        <div className="mx-auto max-w-[1120px] px-5">
          <p className={styles.secLabel}>WHAT WE DO</p>
          <h2 className={styles.secTitle}>PALMSの4つの領域</h2>
          <div className={styles.pillarGrid}>
            <Link className={`${styles.pillarCard} ${styles.pillarService}`} href="/emergency/">
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <span className={styles.pillarEn}>SERVICE</span>
              <span className={styles.pillarLine}>事故・故障にすぐ動く。</span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarMotors}`} href="/buy-sell/">
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
                  <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                  <circle cx="7.5" cy="17" r="1.5" />
                  <circle cx="16.5" cy="17" r="1.5" />
                </svg>
              </span>
              <span className={styles.pillarEn}>MOTORS</span>
              <span className={styles.pillarLine}>次の一台を見つける。</span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarExperience}`} href="/experience/">
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <path d="M12 3v6" />
                  <path d="M5.6 8.6l1.4 1.4" />
                  <path d="M18.4 8.6l-1.4 1.4" />
                  <circle cx="12" cy="14" r="4" />
                  <path d="M3 21h18" />
                </svg>
              </span>
              <span className={styles.pillarEn}>EXPERIENCE</span>
              <span className={styles.pillarLine}>あの頃の憧れに乗る。</span>
              <span className={styles.planNote}>[構想]</span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarLab}`} href="/lab/">
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ stroke: "currentColor", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" strokeDasharray="3 3" />
                  <circle cx="15" cy="15" r="2" />
                </svg>
              </span>
              <span className={styles.pillarEn}>LAB</span>
              <span className={styles.pillarLine}>車のある日常をつくり直す。</span>
              <span className={styles.planNote}>[構想]</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 5. EXPERIENCE誘導 Midnight帯 ===== */}
      <section className={styles.experienceBand} aria-label="PALMS EXPERIENCEへ">
        <div className={styles.expVisual} aria-hidden="true">
          <svg viewBox="0 0 1600 500" preserveAspectRatio="xMidYMid slice" role="presentation">
            <defs>
              <linearGradient id="skySunsetBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#101827" />
                <stop offset="0.5" stopColor="#3A2E4E" />
                <stop offset="0.8" stopColor="#A85A48" />
                <stop offset="1" stopColor="#F5A24A" />
              </linearGradient>
            </defs>
            <rect width="1600" height="500" fill="url(#skySunsetBand)" />
            <circle cx="800" cy="330" r="70" fill="#F5A24A" opacity="0.55" />
            <path d="M0,500 L660,330 L940,330 L1600,500 Z" fill="#171016" opacity="0.9" />
            <line x1="800" y1="334" x2="800" y2="500" stroke="#F3EFE6" strokeWidth="6" strokeDasharray="16 24" opacity="0.85" />
          </svg>
        </div>
        <div className={styles.expScrim} aria-hidden="true" />
        <div className={`mx-auto max-w-[1120px] px-5 ${styles.expContent}`}>
          <p className={styles.secLabel} style={{ color: "var(--electric-aqua)" }}>PALMS EXPERIENCE</p>
          <h2 className={styles.secTitle}>あの頃、乗れなかった一台へ。</h2>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/experience/">
            <span>PALMSの車と体験を見る</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </Link>
          <p className={styles.expNote}>※ EXPERIENCE事業には[構想]段階の内容を含みます。</p>
        </div>
      </section>

      {/* ===== 6. ブランドストーリー(1文+実ロゴ) ===== */}
      <section className={`${styles.story} py-[52px] md:py-[76px]`} aria-label="ブランドストーリー">
        <div className="mx-auto max-w-[1120px] px-5">
          <Image
            src={`${BASE_PATH}/assets/logo/palms-logo.svg`}
            alt="PALMS"
            width={81}
            height={44}
            className={styles.storyLogo}
          />
          <p className={styles.storyText}>
            PALMSは、事故や故障で止まった車と、かつて諦めた車への憧れを、もう一度動かす自動車ブランドです。
          </p>
          <p className={styles.storySign}>PALMS — MOVE AGAIN.</p>
        </div>
      </section>
    </>
  );
}
