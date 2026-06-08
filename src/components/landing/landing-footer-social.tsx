import { cn } from "@/lib/utils";

const iconClass = "size-5 shrink-0";

function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="17.2" cy="6.8" r="0.75" />
    </svg>
  );
}

function SocialLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8.5v.01" />
      <path d="M12 16v-3a1.5 1.5 0 0 1 3 0v3" />
      <path d="M12 11v5" />
    </svg>
  );
}

function SocialX({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function SocialTikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4.5a5.5 5.5 0 0 0 5.5 5.5" />
      <path d="M15 4.5v3" />
    </svg>
  );
}

const linkClass = cn(
  "flex items-center justify-center text-[#a3a3a3] transition-colors hover:text-[#d4d4d4]",
);

export function LandingFooterSocial({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <a href="#" aria-label="Instagram" className={linkClass}>
        <SocialInstagram />
      </a>
      <a href="#" aria-label="LinkedIn" className={linkClass}>
        <SocialLinkedIn />
      </a>
      <a href="#" aria-label="X" className={linkClass}>
        <SocialX />
      </a>
      <a href="#" aria-label="TikTok" className={linkClass}>
        <SocialTikTok />
      </a>
    </div>
  );
}
