import { LimeGradientBackdrop } from "@/components/landing/hero-gradient-lime";
import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

export type SectionVisualFrame = "gray" | "lime";

export function SectionVisualShell({
  frame = "gray",
  children,
}: {
  frame?: SectionVisualFrame;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        landing.sectionVisualShell,
        frame === "gray" && landing.sectionVisualFrame,
        frame === "lime" && "isolate",
      )}
    >
      {frame === "lime" ? (
        <>
          <div aria-hidden className="absolute inset-0 z-0 bg-[#d6ebde]" />
          <LimeGradientBackdrop animated={false} />
        </>
      ) : null}
      {children}
    </div>
  );
}

export function sectionVisualStageClass(frame: SectionVisualFrame = "gray") {
  return cn(landing.sectionVisualStage, frame === "lime" && "relative z-10");
}

export function sectionVisualPanelClass(className?: string) {
  return cn(
    landing.sectionVisualPanel,
    landing.cardLg,
    landing.shadowDrop,
    className,
  );
}

export function sectionVisualPhotoClass(className?: string) {
  return cn(landing.sectionVisualPhoto, landing.cardLg, className);
}
