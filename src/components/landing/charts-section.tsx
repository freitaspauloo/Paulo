import { ArrowRight } from "lucide-react";

import { landing } from "@/components/landing/landing-primitives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const charts = [
  {
    title: "Cost per chat",
    caption: "Lower is better",
    bars: [
      { label: "Aligned", value: "$0.006", pct: 6, lead: true },
      { label: "Top 3", value: "$0.12", pct: 40, lead: false },
      { label: "Other", value: "$0.50", pct: 100, lead: false },
    ],
  },
  {
    title: "General accuracy",
    caption: "Higher is better",
    bars: [
      { label: "Aligned", value: "88.4%", pct: 96, lead: true },
      { label: "Top 3", value: "85.5%", pct: 90, lead: false },
      { label: "Other", value: "83.0%", pct: 84, lead: false },
    ],
  },
  {
    title: "Accuracy per $",
    caption: "Higher is better",
    bars: [
      { label: "Aligned", value: "#1", pct: 100, lead: true },
      { label: "Top 3", value: "0.4×", pct: 40, lead: false },
      { label: "Other", value: "0.1×", pct: 12, lead: false },
    ],
  },
] as const;

const legend = [
  { label: "Aligned AI", dot: "bg-progress" },
  { label: "Top 3 frontier", dot: "bg-black/30" },
  { label: "Other frontier", dot: "bg-black/15" },
] as const;

export function ChartsSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div
        className={cn(
          landing.heroMargin,
          landing.heroFrame,
          landing.heroGradient,
          "overflow-hidden px-4 py-12 sm:px-8 sm:py-16",
        )}
      >
        <div className="mx-auto w-full max-w-[58rem]">
          <div className="mx-auto max-w-[40rem] space-y-3 text-center">
            <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
              Just as good, a fraction of the cost.
            </h2>
            <p className="text-base leading-7 text-[#646464]">
              Top-3 accuracy across 13 deployed models, and #1 on accuracy per
              dollar — with the benchmark named and the source public.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {charts.map((chart) => (
              <Card
                key={chart.title}
                className={cn(
                  landing.cardMd,
                  landing.shadowDrop,
                  "gap-0 border border-black/[0.06] bg-white py-0 ring-0",
                )}
              >
                <CardHeader className="border-b border-black/[0.06] pb-4">
                  <CardTitle className="text-sm font-semibold">{chart.title}</CardTitle>
                  <CardAction>
                    <span className="text-xs text-[#646464]">{chart.caption}</span>
                  </CardAction>
                </CardHeader>
                <CardContent className="pt-6 pb-6">
                  <div className="flex h-44 items-end justify-around gap-3 sm:h-48">
                    {chart.bars.map((bar) => (
                      <div
                        key={bar.label}
                        className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                      >
                        <span
                          className={cn(
                            "text-xs tabular-nums",
                            bar.lead ? "font-semibold text-foreground" : "text-[#646464]",
                          )}
                        >
                          {bar.value}
                        </span>
                        <div
                          className={cn(
                            "w-full max-w-[3.25rem] rounded-t-[8px] transition-[height]",
                            bar.lead
                              ? "bg-gradient-to-t from-progress to-cyan"
                              : "bg-black/[0.08]",
                          )}
                          style={{ height: `${Math.max(bar.pct, 6)}%` }}
                        />
                        <span className="text-center text-[0.7rem] text-[#646464]">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10">
            {legend.map((item) => (
              <Badge
                key={item.label}
                variant="secondary"
                className="gap-1.5 bg-white px-3 py-1 text-xs font-medium text-[#646464] ring-1 ring-black/[0.08]"
              >
                <span className={cn("size-2 rounded-full", item.dot)} />
                {item.label}
              </Badge>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Button variant="link" className="h-auto gap-1 px-0 text-sm font-medium">
              View Benchmarks
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
