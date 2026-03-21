declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: {
        props?: Record<string, string>;
      },
    ) => void;
  }
}

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_SRC = import.meta.env.VITE_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";

export function analyticsEnabled() {
  return Boolean(PLAUSIBLE_DOMAIN);
}

export function getPlausibleDomain() {
  return PLAUSIBLE_DOMAIN;
}

export function getPlausibleSrc() {
  return PLAUSIBLE_SRC;
}

export function ensurePlausibleQueue() {
  if (typeof window === "undefined") {
    return;
  }

  window.plausible =
    window.plausible ||
    function queuedPlausibleEvent(eventName: string, options?: { props?: Record<string, string> }) {
      ((window.plausible as unknown as { q?: Array<[string, { props?: Record<string, string> } | undefined]> }).q ||= []).push([
        eventName,
        options,
      ]);
    };
}

export function trackAnalyticsEvent(eventName: string, props?: Record<string, string>) {
  if (!analyticsEnabled() || typeof window === "undefined") {
    return;
  }

  ensurePlausibleQueue();
  window.plausible?.(eventName, props ? { props } : undefined);
}
