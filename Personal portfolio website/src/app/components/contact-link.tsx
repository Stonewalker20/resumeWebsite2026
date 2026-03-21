import { trackAnalyticsEvent } from "../lib/analytics";

let lastContactClickAt = 0;

type ContactLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ContactLink({ onClick, href, ...props }: ContactLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        const now = Date.now();

        if (now - lastContactClickAt < 1500) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        lastContactClickAt = now;
        trackAnalyticsEvent("Contact Click", {
          href: href || "mailto",
        });
        onClick?.(event);
      }}
    />
  );
}
