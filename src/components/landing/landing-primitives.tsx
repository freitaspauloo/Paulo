import { cn } from "@/lib/utils";

/** Aligned-2 (Oreo) tokens — radius/control 8, card-sm 12, card-md 16, container 24, capsule 999 */
/** Figma drop shadow: x 0, y 2, blur 6, spread 0, #0F172A @ 5% */
const dropShadow = "shadow-[0_2px_6px_0_rgba(15,23,42,0.05)]" as const;

export const landing = {
  page: "mx-auto w-full max-w-[72rem]",
  container: "rounded-[24px]",
  heroFrame: "rounded-[2.5rem]",
  heroGradient:
    "bg-[linear-gradient(180deg,#bfeaf6_0%,#d4f0f8_28%,#e8f7fc_55%,#f6fbfe_100%)]",
  /** v3 — lime green variant (same stops as heroGradient) */
  heroGradientLime:
    "bg-[linear-gradient(180deg,#c8f0a0_0%,#ddf5bd_28%,#eefad4_55%,#f8fdf2_100%)]",
  /** ~10% gutter each side; clamps so margins never disappear on small screens */
  heroMargin: "mx-[clamp(1rem,10%,6rem)] w-[calc(100%-2*clamp(1rem,10%,6rem))]",
  cardLg: "rounded-[20px]",
  cardMd: "rounded-[16px]",
  cardSm: "rounded-[12px]",
  control: "rounded-[8px]",
  capsule: "rounded-full",
  shadowDrop: dropShadow,
  shadowCard: dropShadow,
  shadowFloat: dropShadow,
  shadowHero: dropShadow,
} as const;

export function LandingEyebrow({
  accent,
  children,
}: {
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center bg-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-black/[0.08] backdrop-blur-sm",
        landing.capsule,
        accent,
      )}
    >
      {children}
    </span>
  );
}

const primaryButtonClass =
  "inline-flex h-10 items-center justify-center bg-[#202020] px-6 text-sm font-medium text-white transition-colors hover:bg-[#202020]/90 active:bg-[#202020]/80";

const ghostButtonClass =
  "inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-foreground transition-colors hover:bg-black/[0.04] active:bg-black/[0.06]";

export function LandingPrimaryButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classNames = cn(primaryButtonClass, landing.capsule, className);

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames}>
      {children}
    </button>
  );
}

export function LandingGhostButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classNames = cn(ghostButtonClass, landing.capsule, className);

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames}>
      {children}
    </button>
  );
}

/** Stacked scene: tinted panel → photo plate → floating UI layers */
export function LayeredScene({
  tint,
  className,
  children,
}: {
  tint: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden p-6 sm:p-10",
        landing.container,
        tint,
        className,
      )}
    >
      <div className="relative mx-auto min-h-[22rem] w-full max-w-[28rem] sm:min-h-[26rem] sm:max-w-none">
        {children}
      </div>
    </div>
  );
}

export function PhotoPlate({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-x-6 top-8 bottom-8 overflow-hidden sm:inset-x-12 sm:top-10 sm:bottom-10",
        landing.cardLg,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="size-full object-cover" />
    </div>
  );
}

export function FloatCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute z-20 border border-black/[0.06] bg-white p-4",
        landing.cardMd,
        landing.shadowFloat,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatusPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute z-30 inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-black/[0.08] backdrop-blur-sm",
        landing.capsule,
        landing.shadowCard,
        className,
      )}
    >
      {children}
    </span>
  );
}
