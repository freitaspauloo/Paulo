import { cn } from "@/lib/utils";

/** size-5 (20px) + 25% */
const iconClass = "size-[1.5625rem] shrink-0";

function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <defs>
        <radialGradient
          id="footer-ig-gradient"
          cx="30%"
          cy="107%"
          r="150%"
        >
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285aeb" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#footer-ig-gradient)" />
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="3"
        fill="none"
        stroke="white"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="2.4" fill="none" stroke="white" strokeWidth="1.75" />
      <circle cx="16.8" cy="7.2" r="1" fill="white" />
    </svg>
  );
}

function SocialLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        fill="#0a66c2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function SocialX({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        fill="white"
        d="M13.67 10.55 19.9 3h-1.48l-5.4 6.55L8.55 3H3.2l6.53 9.51L3.2 21h1.48l5.71-6.93 4.56 6.93h5.35l-6.83-9.85Zm-2.1 2.55-.66-.94-5.3-7.58h2.28l4.27 6.1.66.94 5.56 7.95h-2.28l-4.53-6.47Z"
      />
    </svg>
  );
}

function SocialTikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        fill="#25f4ee"
        d="M15.6 4.5c.55 1.9 1.95 3.35 3.9 3.65v2.65a6.9 6.9 0 0 1-3.9-1.15v6.45a5.35 5.35 0 1 1-5.35-5.35c.2 0 .4.02.6.05v2.75a2.6 2.6 0 1 0 1.85 2.5V4.5h2.9Z"
        transform="translate(-0.35 -0.35)"
      />
      <path
        fill="#fe2c55"
        d="M15.6 4.5c.55 1.9 1.95 3.35 3.9 3.65v2.65a6.9 6.9 0 0 1-3.9-1.15v6.45a5.35 5.35 0 1 1-5.35-5.35c.2 0 .4.02.6.05v2.75a2.6 2.6 0 1 0 1.85 2.5V4.5h2.9Z"
        transform="translate(0.35 0.35)"
      />
      <path
        fill="white"
        d="M15.6 4.5c.55 1.9 1.95 3.35 3.9 3.65v2.65a6.9 6.9 0 0 1-3.9-1.15v6.45a5.35 5.35 0 1 1-5.35-5.35c.2 0 .4.02.6.05v2.75a2.6 2.6 0 1 0 1.85 2.5V4.5h2.9Z"
      />
    </svg>
  );
}

const linkClass = cn(
  "flex items-center justify-center transition-opacity hover:opacity-80",
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
