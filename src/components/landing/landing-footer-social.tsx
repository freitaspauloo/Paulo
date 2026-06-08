import { Instagram, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";

const iconClass = "size-[17px] shrink-0";

function SocialX({ className }: { className?: string }) {
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
      strokeWidth={1.5}
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

const linkClass =
  "text-[#b8b8b8] transition-colors hover:text-[#e8e8e8]";

const boxedLinkClass = cn(
  linkClass,
  "flex size-9 items-center justify-center rounded-[7px] border border-[#b8b8b8]/70 hover:border-[#e8e8e8]",
);

export function LandingFooterSocial({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 sm:gap-5", className)}>
      <a href="#" aria-label="Instagram" className={boxedLinkClass}>
        <Instagram className={iconClass} strokeWidth={1.5} />
      </a>
      <a href="#" aria-label="LinkedIn" className={boxedLinkClass}>
        <Linkedin className={iconClass} strokeWidth={1.5} />
      </a>
      <a href="#" aria-label="X" className={cn(linkClass, "flex items-center justify-center")}>
        <SocialX />
      </a>
      <a
        href="#"
        aria-label="TikTok"
        className={cn(linkClass, "flex items-center justify-center")}
      >
        <SocialTikTok />
      </a>
    </div>
  );
}
