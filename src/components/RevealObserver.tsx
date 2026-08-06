"use client";

import { useEffect } from "react";

/**
 * EXPERIENCE / LAB ページのスクロールリビール制御。
 * プロトタイプJSと同挙動:
 * - html に "js" クラスを付与(JS無効時は最初から表示される設計)
 * - prefers-reduced-motion / IntersectionObserver非対応環境では即時表示
 * - 何らかの理由でObserverが発火しない場合の4秒フォールバックを必須で備える
 */
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const fallback = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 4000);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return null;
}
