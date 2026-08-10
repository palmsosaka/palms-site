import Link from "next/link";
import Image from "next/image";
import { siteConfig, BASE_PATH } from "@/config/site";
import { trackCall, trackLine } from "@/lib/analytics";
import HeroRotator from "@/components/HeroRotator";
import styles from "./page.module.css";

const stroke = {
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={stroke} aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

function SecHead({
  index,
  label,
  title,
  dark = false,
}: {
  index: string;
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className={`${styles.secHead} ${dark ? styles.secHeadDark : ""}`}>
      <span className={styles.secIndex}>{index}</span>
      <div>
        <p className={styles.secLabel}>{label}</p>
        <h2 className={`${styles.secTitle} ${dark ? styles.secTitleLight : ""}`}>{title}</h2>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== 1. ヒーロー(3枚ローテーション) ===== */}
      <section className={styles.hero} aria-label="ファーストビュー">
        <HeroRotator />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={styles.heroOverlay}>
          <div className="mx-auto w-full max-w-[1120px] px-6">
            <p className={styles.heroKicker}>SAKAI, OSAKA — AUTO SERVICE &amp; MOTOR CULTURE</p>
            <h1 className={styles.heroEn}>
              MOVE AGAIN<span className={styles.heroEnDot}>.</span>
            </h1>
            <p className={styles.heroJa}>
              止まった車を動かす。
              <br />
              止まっていた憧れも動かす。
            </p>
            <div className={styles.heroCtaBlock}>
              <div className={styles.heroCta}>
                <Link href="/emergency/" className={`${styles.btn} ${styles.btnPrimary}`}>
                  <PhoneIcon className={styles.btnIcon} />
                  <span>車のトラブルを相談する</span>
                </Link>
                <Link href="/experience/" className={`${styles.btn} ${styles.btnSecondary}`}>
                  <span>PALMSの車と体験を見る</span>
                  <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ヒーロー直下・約束の帯(道路ストリップ) ===== */}
      <section className={styles.checksBand} aria-label="PALMSの約束">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { l1: "事故現場で車両入替", l2: "レッカー＋その場で代車" },
              { l1: "保険案件もワンストップ対応", l2: "窓口はPALMSひとつ" },
              { l1: `受付 ${siteConfig.hours}`, l2: siteConfig.hoursNote },
            ].map((item) => (
              <div key={item.l1} className={styles.checkItem}>
                <b aria-hidden="true">✓</b>
                <span>
                  {item.l1}
                  <small>{item.l2}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2.「困ったら」電話パネル ===== */}
      <section className="bg-white py-[64px] md:py-[92px]" id="emergency" aria-label="緊急時の相談窓口">
        <div className="mx-auto max-w-[1120px] px-6">
          <SecHead index="01" label="IF YOU'RE IN TROUBLE" title="困ったら、まず連絡。" />

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
              <PhoneIcon className={styles.btnIcon} />
              電話で相談する
            </span>
          </a>

          <div className={styles.subEntry}>
            <a
              className={styles.subCard}
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackLine}
            >
              <span className={styles.subIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="21" height="21" style={stroke}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span>
                <b>LINEで相談</b>
                <span className={styles.subDesc}>現場の写真を送るだけでも伝わります</span>
              </span>
              <span className={styles.subArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <Link className={styles.subCard} href="/contact/">
              <span className={styles.subIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="21" height="21" style={stroke}>
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>
              <span>
                <b>フォームで相談</b>
                <span className={styles.subDesc}>急ぎでない相談・お見積りはこちら</span>
              </span>
              <span className={styles.subArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3. 一気通貫フロー「一本の道」 ===== */}
      <section className="bg-palms-ivory py-[64px] md:py-[92px]" id="flow" aria-label="対応の流れ">
        <div className="mx-auto max-w-[1120px] px-6">
          <SecHead index="02" label="ONE-STOP FLOW" title="相談から納車まで、一つの窓口で。" />
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
                  <svg width="16" height="16" viewBox="0 0 24 24" style={stroke}>
                    <path d="M5 17h-2v-4l2-5h9l4 5h3v4h-2" />
                    <circle cx="7.5" cy="17.5" r="2" />
                    <circle cx="17.5" cy="17.5" r="2" />
                  </svg>
                  レッカー
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={stroke}>
                    <path d="M17 3l4 4-4 4" />
                    <path d="M21 7H8a5 5 0 0 0 0 10h1" />
                    <path d="M7 21l-4-4 4-4" />
                    <path d="M3 17h13" />
                  </svg>
                  現場で代車
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={stroke}>
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  修理・鈑金
                </span>
                <span className={styles.jChip}>
                  <svg width="16" height="16" viewBox="0 0 24 24" style={stroke}>
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

      {/* ===== 4. 4本柱 ===== */}
      <section className="bg-white py-[64px] md:py-[92px]" id="services" aria-label="PALMSのサービス">
        <div className="mx-auto max-w-[1120px] px-6">
          <SecHead index="03" label="WHAT WE DO" title="PALMSの4つの領域" />
          <div className={styles.pillarGrid}>
            <Link className={`${styles.pillarCard} ${styles.pillarService}`} href="/emergency/">
              <span className={styles.pillarIndex} aria-hidden="true">01</span>
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" style={stroke}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <span className={styles.pillarEn}>SERVICE</span>
              <span className={styles.pillarLine}>事故・故障にすぐ動く。レッカーから納車まで。</span>
              <span className={styles.pillarFoot}>
                <span className={styles.pillarArrow}><ArrowIcon /></span>
              </span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarMotors}`} href="/buy-sell/">
              <span className={styles.pillarIndex} aria-hidden="true">02</span>
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" style={stroke}>
                  <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
                  <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                  <circle cx="7.5" cy="17" r="1.5" />
                  <circle cx="16.5" cy="17" r="1.5" />
                </svg>
              </span>
              <span className={styles.pillarEn}>MOTORS</span>
              <span className={styles.pillarLine}>次の一台を見つける。買取・販売・乗り換え。</span>
              <span className={styles.pillarFoot}>
                <span className={styles.pillarArrow}><ArrowIcon /></span>
              </span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarExperience}`} href="/experience/">
              <span className={styles.pillarIndex} aria-hidden="true">03</span>
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" style={stroke}>
                  <path d="M12 3v6" />
                  <path d="M5.6 8.6l1.4 1.4" />
                  <path d="M18.4 8.6l-1.4 1.4" />
                  <circle cx="12" cy="14" r="4" />
                  <path d="M3 21h18" />
                </svg>
              </span>
              <span className={styles.pillarEn}>EXPERIENCE</span>
              <span className={styles.pillarLine}>あの頃の憧れに乗る。見るだけだった車を、体験へ。</span>
              <span className={styles.pillarFoot}>
                <span className={styles.planNote}>[構想]</span>
                <span className={styles.pillarArrow}><ArrowIcon /></span>
              </span>
            </Link>
            <Link className={`${styles.pillarCard} ${styles.pillarLab}`} href="/lab/">
              <span className={styles.pillarIndex} aria-hidden="true">04</span>
              <span className={styles.pillarIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" style={stroke}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" strokeDasharray="3 3" />
                  <circle cx="15" cy="15" r="2" />
                </svg>
              </span>
              <span className={styles.pillarEn}>LAB</span>
              <span className={styles.pillarLine}>車のある日常をつくり直す。図面の上の構想。</span>
              <span className={styles.pillarFoot}>
                <span className={styles.planNote}>[構想]</span>
                <span className={styles.pillarArrow}><ArrowIcon /></span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 5. EXPERIENCE誘導帯 ===== */}
      <section className={styles.experienceBand} aria-label="PALMS EXPERIENCEへ">
        <div className={styles.expVisual} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE_PATH}/assets/hero/hero-02-experience.svg`} alt="" loading="lazy" />
        </div>
        <div className={styles.expScrim} aria-hidden="true" />
        <div className={`mx-auto max-w-[1120px] px-6 ${styles.expContent}`}>
          <p className={styles.secLabel} style={{ color: "var(--electric-aqua)" }}>
            PALMS EXPERIENCE
          </p>
          <h2 className={styles.expTitle}>あの頃、乗れなかった一台へ。</h2>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/experience/">
            <span>PALMSの車と体験を見る</span>
            <svg className={styles.btnIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </Link>
          <p className={styles.expNote}>※ EXPERIENCE事業には[構想]段階の内容を含みます。</p>
        </div>
      </section>

      {/* ===== 6. ブランドストーリー ===== */}
      <section className={`${styles.story} py-[72px] md:py-[100px]`} aria-label="ブランドストーリー">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/assets/icon/palms-symbol-pcrop.svg`}
          alt=""
          aria-hidden="true"
          className={styles.storyMark}
          loading="lazy"
        />
        <div className="relative mx-auto max-w-[1120px] px-6">
          <Image
            src={`${BASE_PATH}/assets/logo/palms-logo.svg`}
            alt="PALMS"
            width={99}
            height={54}
            className={styles.storyLogo}
          />
          <p className={styles.storyText}>
            PALMSは、事故や故障で止まった車と、かつて諦めた車への憧れを、
            <br className="hidden md:block" />
            もう一度動かす自動車ブランドです。
          </p>
          <p className={styles.storySign}>PALMS — MOVE AGAIN.</p>
        </div>
      </section>
    </>
  );
}
