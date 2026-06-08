import { BrandedLambdaMark } from "@/components/landing/branded-lambda-mark";
import { cn } from "@/lib/utils";

/** joinaligned.ai enterprise header lockup — icon + wordmark sizing matched */
export function AlignedNavBrand({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[1.25rem] font-semibold leading-none tracking-[-0.02em] text-foreground",
        className,
      )}
    >
      <BrandedLambdaMark size="nav" />
      Aligned AI
    </span>
  );
}
