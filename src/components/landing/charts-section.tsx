"use client";

import { ArrowRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type ChartDatum = {
  name: string;
  value: number;
  display: string;
  lead: boolean;
};

const charts: {
  title: string;
  caption: string;
  config: ChartConfig;
  data: ChartDatum[];
}[] = [
  {
    title: "Cost per chat",
    caption: "Lower is better",
    config: {
      value: { label: "Cost" },
      Aligned: { label: "Aligned", color: "var(--color-chart-2)" },
      "Top 3": { label: "Top 3", color: "hsl(0 0% 0% / 0.12)" },
      Other: { label: "Other", color: "hsl(0 0% 0% / 0.08)" },
    },
    data: [
      { name: "Aligned", value: 0.006, display: "$0.006", lead: true },
      { name: "Top 3", value: 0.12, display: "$0.12", lead: false },
      { name: "Other", value: 0.5, display: "$0.50", lead: false },
    ],
  },
  {
    title: "General accuracy",
    caption: "Higher is better",
    config: {
      value: { label: "Accuracy" },
      Aligned: { label: "Aligned", color: "var(--color-chart-2)" },
      "Top 3": { label: "Top 3", color: "hsl(0 0% 0% / 0.12)" },
      Other: { label: "Other", color: "hsl(0 0% 0% / 0.08)" },
    },
    data: [
      { name: "Aligned", value: 88.4, display: "88.4%", lead: true },
      { name: "Top 3", value: 85.5, display: "85.5%", lead: false },
      { name: "Other", value: 83.0, display: "83.0%", lead: false },
    ],
  },
  {
    title: "Accuracy per $",
    caption: "Higher is better",
    config: {
      value: { label: "Efficiency" },
      Aligned: { label: "Aligned", color: "var(--color-chart-2)" },
      "Top 3": { label: "Top 3", color: "hsl(0 0% 0% / 0.12)" },
      Other: { label: "Other", color: "hsl(0 0% 0% / 0.08)" },
    },
    data: [
      { name: "Aligned", value: 100, display: "#1", lead: true },
      { name: "Top 3", value: 40, display: "0.4×", lead: false },
      { name: "Other", value: 12, display: "0.1×", lead: false },
    ],
  },
];

const legend = [
  { label: "Aligned AI", dot: "bg-chart-2" },
  { label: "Top 3 frontier", dot: "bg-black/30" },
  { label: "Other frontier", dot: "bg-black/15" },
] as const;

function BenchmarkBarChart({
  config,
  data,
}: {
  config: ChartConfig;
  data: ChartDatum[];
}) {
  return (
    <ChartContainer
      config={config}
      className="aspect-auto h-[11.5rem] w-full"
      initialDimension={{ width: 280, height: 184 }}
    >
      <BarChart
        data={data}
        margin={{ top: 28, right: 4, left: 4, bottom: 0 }}
        barCategoryGap="22%"
      >
        <defs>
          <linearGradient id="alignedBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--progress)" />
            <stop offset="100%" stopColor="var(--palette-cyan)" />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-black/[0.06]" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tick={{ fill: "#646464", fontSize: 11 }}
        />
        <ChartTooltip
          cursor={{ fill: "hsl(0 0% 0% / 0.04)" }}
          content={
            <ChartTooltipContent
              hideLabel
              formatter={(_, __, item) => {
                const row = item.payload as ChartDatum;
                return (
                  <span className="font-mono font-medium tabular-nums">
                    {row.display}
                  </span>
                );
              }}
            />
          }
        />
        <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={44}>
          {data.map((entry) => (
            <Cell
              key={entry.name}
              fill={entry.lead ? "url(#alignedBar)" : "hsl(0 0% 0% / 0.1)"}
            />
          ))}
          <LabelList
            dataKey="display"
            position="top"
            content={({ x, y, value, index }) => {
              if (x == null || y == null || value == null) return null;
              const entry = data[index ?? 0];
              return (
                <text
                  x={Number(x)}
                  y={Number(y)}
                  dy={-8}
                  textAnchor="middle"
                  className={cn(
                    "text-[11px] tabular-nums",
                    entry?.lead
                      ? "fill-foreground font-semibold"
                      : "fill-[#646464]",
                  )}
                >
                  {value}
                </text>
              );
            }}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

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
                <CardHeader className="border-b border-black/[0.06] px-5 pt-5 pb-4">
                  <CardTitle className="text-sm font-semibold">{chart.title}</CardTitle>
                  <CardAction>
                    <span className="text-xs text-[#646464]">{chart.caption}</span>
                  </CardAction>
                </CardHeader>
                <CardContent className="px-4 pt-5 pb-5 sm:px-5 sm:pb-6">
                  <BenchmarkBarChart config={chart.config} data={chart.data} />
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
