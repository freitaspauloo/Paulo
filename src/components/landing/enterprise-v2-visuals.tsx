"use client";

import { GitMerge } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  SectionVisualShell,
  sectionVisualPanelClass,
  sectionVisualStageClass,
  type SectionVisualFrame,
} from "@/components/landing/section-visual-shell";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const FRONTIER_COST = 0.5;
const ALIGNED_COST = 0.006;
const SAVINGS_MULTIPLIER = 50;

type CostDatum = {
  name: string;
  value: number;
  display: string;
  lead: boolean;
  detail: string;
};

const costChartData: CostDatum[] = [
  {
    name: "Frontier APIs",
    value: FRONTIER_COST,
    display: "~$0.50",
    lead: false,
    detail: "Typical frontier API pricing per chat",
  },
  {
    name: "Aligned",
    value: ALIGNED_COST,
    display: "$0.006",
    lead: true,
    detail: "Up to 50× less than frontier APIs",
  },
];

const costChartConfig = {
  value: { label: "Cost per chat" },
  "Frontier APIs": { label: "Frontier APIs", color: "#d0d0d0" },
  Aligned: { label: "Aligned", color: "#22a06b" },
} satisfies ChartConfig;

const ALIGNED_MIN_BAR_PX = 40;

type BarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  payload?: CostDatum;
};

function CostBarShape({ x = 0, y = 0, width = 0, height = 0, fill, payload }: BarShapeProps) {
  const minHeight = payload?.lead ? ALIGNED_MIN_BAR_PX : 0;
  const barHeight = Math.max(height, minHeight);
  const barY = y + height - barHeight;

  return (
    <rect
      x={x}
      y={barY}
      width={width}
      height={barHeight}
      fill={fill}
      rx={10}
      className="transition-[opacity,filter] duration-200 hover:opacity-90"
    />
  );
}

const COMPOUND_PATHS = [
  {
    id: "reasoning",
    label: "Reasoning path",
    detail: "Strongest model for this task",
    active: true,
  },
  {
    id: "coding",
    label: "Coding path",
    detail: "Standby until it wins the route",
    active: false,
  },
  {
    id: "math",
    label: "Math path",
    detail: "Standby until it wins the route",
    active: false,
  },
] as const;

export function CompoundVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <Card
          size="sm"
          className={sectionVisualPanelClass(
            "flex h-full flex-col gap-0 py-0 ring-black/[0.08]",
          )}
        >
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-black/[0.06] px-4">
            <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
            <span className="truncate font-mono text-[0.6875rem] text-muted-foreground">
              Compound routing
            </span>
          </div>

          <CardContent className="flex flex-1 flex-col justify-center gap-3 px-4 py-4">
            <RadioGroup
              value="reasoning"
              className="pointer-events-none gap-2"
              aria-readonly
            >
              {COMPOUND_PATHS.map((path) => (
                <label
                  key={path.id}
                  htmlFor={`compound-${path.id}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-3 py-2.5",
                    path.active
                      ? "border-[#22a06b]/35 bg-[#22a06b]/[0.06] shadow-[0_0_0_1px_rgba(34,160,107,0.06)]"
                      : "border-black/[0.06] bg-muted/35",
                  )}
                >
                  <RadioGroupItem
                    id={`compound-${path.id}`}
                    value={path.id}
                    className={cn(
                      path.active &&
                        "border-[#22a06b] bg-[#22a06b] text-white data-checked:border-[#22a06b] data-checked:bg-[#22a06b]",
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "text-xs font-medium sm:text-[0.8125rem]",
                        path.active ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {path.label}
                    </p>
                    <p className="text-[0.6875rem] leading-4 text-muted-foreground">
                      {path.detail}
                    </p>
                  </div>
                  {path.active ? (
                    <Badge className="shrink-0 border-transparent bg-[#22a06b]/10 text-[0.625rem] text-[#22a06b] hover:bg-[#22a06b]/10">
                      Strongest
                    </Badge>
                  ) : null}
                </label>
              ))}
            </RadioGroup>

            <div className="flex items-center gap-2.5 py-0.5">
              <Separator className="flex-1" />
              <div className="flex size-7 items-center justify-center rounded-full bg-muted">
                <GitMerge className="size-3.5 text-muted-foreground" />
              </div>
              <Separator className="flex-1" />
            </div>
            <p className="text-center text-[0.6875rem] font-medium text-muted-foreground">
              Paths merge into one composed response
            </p>
          </CardContent>

          <CardFooter className="mt-auto border-t border-black/[0.06] bg-[#202020] py-3 text-background">
            <div className="flex w-full flex-col gap-0.5">
              <span className="text-sm font-medium">One composed output</span>
              <span className="text-xs text-white/65">→ your application</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </SectionVisualShell>
  );
}

export function CostSplitVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <div
          className={sectionVisualPanelClass(
            "flex flex-col justify-center gap-3 p-5 sm:gap-3.5 sm:p-6",
          )}
        >
          <div className="space-y-0.5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-[#646464]">
              Cost per chat
            </p>
            <p className="text-[0.6875rem] text-[#646464]/80">
              Hover each bar for exact pricing
            </p>
          </div>

          <ChartContainer
            config={costChartConfig}
            className="mx-auto aspect-auto h-[9.5rem] w-full max-w-[12.5rem] sm:h-[10.25rem]"
            initialDimension={{ width: 200, height: 164 }}
          >
            <BarChart
              data={costChartData}
              margin={{ top: 28, right: 4, left: 4, bottom: 4 }}
              barCategoryGap="18%"
            >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-black/[0.06]"
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={14}
              interval={0}
              tick={{ fill: "#646464", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={{ fill: "hsl(0 0% 0% / 0.05)", radius: 8 }}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(_, __, item) => {
                    const row = item.payload as CostDatum;
                    return (
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-sm font-semibold tabular-nums">
                          {row.display}
                        </span>
                        <span
                          className={cn(
                            "text-[0.6875rem] leading-snug",
                            row.lead ? "text-[#22a06b]" : "text-[#646464]",
                          )}
                        >
                          {row.detail}
                        </span>
                      </div>
                    );
                  }}
                />
              }
            />
            <Bar
              dataKey="value"
              barSize={44}
              maxBarSize={48}
              isAnimationActive
              animationDuration={900}
              animationEasing="ease-out"
              shape={(props) => <CostBarShape {...props} payload={props.payload as CostDatum} />}
            >
              {costChartData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.lead ? "#22a06b" : "#d0d0d0"}
                  className="outline-none"
                />
              ))}
              <LabelList
                dataKey="display"
                position="top"
                offset={12}
                content={({ x, width, y, height, value, index }) => {
                  if (x == null || y == null || value == null) return null;
                  const entry = costChartData[index ?? 0];
                  const centerX = Number(x) + (width != null ? Number(width) / 2 : 0);
                  const rawHeight = height != null ? Number(height) : 0;
                  const rawY = Number(y);
                  const minHeight = entry?.lead ? ALIGNED_MIN_BAR_PX : 0;
                  const visualTop = rawY + rawHeight - Math.max(rawHeight, minHeight);
                  return (
                    <text
                      x={centerX}
                      y={visualTop}
                      dy={-10}
                      textAnchor="middle"
                      className={cn(
                        "text-[11px] tabular-nums sm:text-xs",
                        entry?.lead
                          ? "fill-[#22a06b] font-semibold"
                          : "fill-[#646464] font-medium",
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

          <div className="space-y-1 text-center">
            <p className="text-lg font-semibold tracking-tight text-[#22a06b] sm:text-xl">
              Up to {SAVINGS_MULTIPLIER}× less
            </p>
            <p className="text-[0.6875rem] leading-5 text-[#646464]">
              Same traffic · sample annual bill modeled on request
            </p>
          </div>
        </div>
      </div>
    </SectionVisualShell>
  );
}
