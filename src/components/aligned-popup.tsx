// 📣 Aligned AI "Pop-up" — an announcement card, rebuilt from the Figma design.
// Three variants: "banner" (full-bleed image), "wrapped" (inset image),
// and "no-image". Styled entirely with the Aligned AI theme tokens.

import { Button } from "@/components/ui/button";

type AlignedPopupVariant = "banner" | "wrapped" | "no-image";

interface AlignedPopupProps {
  title?: string;
  description?: string;
  variant?: AlignedPopupVariant;
  /** Optional image. When omitted, a neutral placeholder is shown. */
  imageUrl?: string;
  onDismiss?: () => void;
  onLearnMore?: () => void;
}

// The floating shadow from the design (Shadow/Floating).
const floatingShadow =
  "shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08),0px_0px_1px_0px_rgba(0,0,0,0.24)]";

function ImagePlaceholder({ imageUrl }: { imageUrl?: string }) {
  if (imageUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={imageUrl} alt="" className="h-full w-full object-cover" />;
  }
  return <div className="h-full w-full bg-[#d9d9d9]" />;
}

function Actions({
  onDismiss,
  onLearnMore,
}: Pick<AlignedPopupProps, "onDismiss" | "onLearnMore">) {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm" onClick={onDismiss}>
        Dismiss
      </Button>
      <Button size="sm" onClick={onLearnMore}>
        Learn more
      </Button>
    </div>
  );
}

function TextBlock({
  title,
  description,
}: Pick<AlignedPopupProps, "title" | "description">) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h3 className="text-[17px] font-semibold leading-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="text-sm leading-5 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function AlignedPopup({
  title = "Introducing Team function",
  description = "Aligned AI has just launched its team collaboration function. Invite your team members now!",
  variant = "banner",
  imageUrl,
  onDismiss,
  onLearnMore,
}: AlignedPopupProps) {
  // No-image variant: just text + actions.
  if (variant === "no-image") {
    return (
      <div
        className={`flex w-[320px] flex-col items-end gap-5 rounded-[16px] bg-card p-5 ${floatingShadow}`}
      >
        <TextBlock title={title} description={description} />
        <Actions onDismiss={onDismiss} onLearnMore={onLearnMore} />
      </div>
    );
  }

  // Wrapped variant: inset, rounded image with padding around it.
  if (variant === "wrapped") {
    return (
      <div
        className={`flex w-[320px] flex-col gap-2 rounded-[16px] bg-card p-3 ${floatingShadow}`}
      >
        <div className="h-[148px] w-full overflow-hidden rounded-[8px]">
          <ImagePlaceholder imageUrl={imageUrl} />
        </div>
        <div className="flex flex-col items-end gap-[18px] p-2">
          <TextBlock title={title} description={description} />
          <Actions onDismiss={onDismiss} onLearnMore={onLearnMore} />
        </div>
      </div>
    );
  }

  // Banner variant (default): full-bleed image header with a fade into content.
  return (
    <div
      className={`flex w-[320px] flex-col overflow-hidden rounded-[16px] bg-card ${floatingShadow}`}
    >
      <div className="relative h-[180px] w-full overflow-hidden border-b-[0.5px] border-border bg-muted">
        <ImagePlaceholder imageUrl={imageUrl} />
        {/* Soft fade from the image into the card surface */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-b from-transparent to-card" />
      </div>
      <div className="flex flex-col items-end gap-5 px-5 pb-5 pt-4">
        <TextBlock title={title} description={description} />
        <Actions onDismiss={onDismiss} onLearnMore={onLearnMore} />
      </div>
    </div>
  );
}
