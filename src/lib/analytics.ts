"use client";

type GAEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ action, category, label, value }: GAEvent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackCall() {
  trackEvent({ action: "click_call", category: "cta", label: "phone" });
}

export function trackLine() {
  trackEvent({ action: "click_line", category: "cta", label: "line" });
}

export function trackContactSubmit() {
  trackEvent({ action: "submit_contact", category: "form", label: "contact" });
}

export function trackMapRoute() {
  trackEvent({ action: "click_map_route", category: "map", label: "route" });
}

export function trackServiceCard(service: string) {
  trackEvent({
    action: "click_service_card",
    category: "navigation",
    label: service,
  });
}
