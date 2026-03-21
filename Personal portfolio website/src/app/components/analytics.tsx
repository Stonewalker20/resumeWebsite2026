import { useEffect } from "react";
import { analyticsEnabled, ensurePlausibleQueue, getPlausibleDomain, getPlausibleSrc } from "../lib/analytics";

export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled() || typeof document === "undefined") {
      return;
    }

    const domain = getPlausibleDomain();
    const src = getPlausibleSrc();

    if (!domain || document.querySelector(`script[data-domain="${domain}"]`)) {
      return;
    }

    ensurePlausibleQueue();

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = domain;
    script.src = src;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
