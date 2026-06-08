import { cn } from "@/lib/utils";

const iconClass = "size-[22px] shrink-0";

/** Tabler outline brand icons — matches joinaligned.ai dev landing footer */
function IconBrandInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  );
}

function IconBrandLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
    </svg>
  );
}

function IconBrandX({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function IconBrandTikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
    </svg>
  );
}

export const LANDING_FOOTER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/joinaligned.ai?igsh=eGE4cDJ4M2RrOWs1",
    Icon: IconBrandInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/join-aligned-ai/",
    Icon: IconBrandLinkedIn,
  },
  {
    label: "X",
    href: "https://x.com/joinalignedai?s=21",
    Icon: IconBrandX,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@joinalignedai?_r=1&_t=ZT-972aZhQmO8z",
    Icon: IconBrandTikTok,
  },
] as const;

const socialLinkClass = cn(
  "inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg p-2",
  "text-white/55 transition-colors hover:bg-white/[0.08] hover:text-white",
);

export function LandingFooterSocial({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex shrink-0 items-center gap-[22px] text-white/55", className)}
      aria-label="Social"
    >
      {LANDING_FOOTER_SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={socialLinkClass}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
