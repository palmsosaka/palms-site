"use client";

import { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/config/site";
import styles from "@/app/page.module.css";

const SLIDES = [
  {
    src: `${BASE_PATH}/assets/hero/hero-02-experience.svg`,
    alt: "マジックアワーの一本道と旧車のシルエット",
    dotLabel: "1枚目(夕暮れの道)を表示",
  },
  {
    src: `${BASE_PATH}/assets/hero/hero-03-story.svg`,
    alt: "夜、半開きのシャッターから暖かい光が漏れるガレージと旧車のシルエット",
    dotLabel: "2枚目(夜のガレージ)を表示",
  },
  {
    src: `${BASE_PATH}/assets/hero/hero-01-service.svg`,
    alt: "明るい午前の清潔なガレージ前に停まる積載車のシルエット",
    dotLabel: "3枚目(ガレージ)を表示",
  },
];

/**
 * ヒーローローテーション(3枚クロスフェード・7秒)
 * prefers-reduced-motion時は1枚目固定・ドット非表示(プロトタイプ仕様準拠)
 */
export default function HeroRotator() {
  const [current, setCurrent] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Reading prefers-reduced-motion requires the browser; it can only be
    // known after mount, so this one-time sync-on-mount setState is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduced, current]);

  function goTo(idx: number) {
    setCurrent(idx);
  }

  return (
    <>
      <div className={styles.heroSlides}>
        {SLIDES.map((slide, idx) => {
          const isActive = reduced ? idx === 0 : idx === current;
          return (
            <div
              key={slide.src}
              className={`${styles.heroSlide} ${isActive ? styles.isActive : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} />
            </div>
          );
        })}
      </div>
      {!reduced && (
        <div className={styles.heroDots} role="tablist" aria-label="ヒーロー画像の切り替え">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              className={`${styles.heroDot} ${idx === current ? styles.isActive : ""}`}
              aria-selected={idx === current}
              aria-label={slide.dotLabel}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      )}
    </>
  );
}
