"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll animator.
 * Uses a single IntersectionObserver to toggle `.is-visible`
 * on all `.animate-on-scroll`, `.animate-scale-up`, `.animate-fade` elements.
 * CSS handles the actual animation (GPU-accelerated, no JS per-frame).
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".animate-on-scroll, .animate-scale-up, .animate-fade"
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
