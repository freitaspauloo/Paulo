import { cn } from "@/lib/utils";

type BrandedLambdaMarkProps = {
  className?: string;
  size?: "default" | "compact" | "prominent" | "sidebar";
};

/** Matches joinaligned.ai BrandedLambdaMark (nav / enterprise header). */
export function BrandedLambdaMark({
  className,
  size = "default",
}: BrandedLambdaMarkProps) {
  const isProminent = size === "prominent";
  const isCompact = size === "compact";
  const isSidebar = size === "sidebar";

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden border-black bg-neutral-950 shadow-none",
        isProminent
          ? "h-16 w-16 rounded-[14px] border-2"
          : isSidebar
            ? "h-6 w-6 rounded-md border"
            : isCompact
              ? "h-[18px] w-[18px] rounded-[5px] border"
              : "h-8 w-8 rounded-[10px] border-2",
        className,
      )}
      aria-hidden
    >
      <span
        className={cn(
          "relative z-[1] select-none font-sans leading-none tracking-tight text-white antialiased",
          isSidebar ? "text-[0.9375rem] font-light" : "font-extralight",
          isProminent && "text-[2.625rem]",
          isCompact && "text-[0.6875rem]",
          !isProminent && !isCompact && !isSidebar && "text-[1.3125rem]",
        )}
      >
        λ
      </span>
    </div>
  );
}
