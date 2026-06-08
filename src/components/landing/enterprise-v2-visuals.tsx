"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const COMPOUND_TABS = {
  reasoning: {
    label: "Reasoning",
    status: "Strongest model selected for this task.",
  },
  coding: {
    label: "Coding",
    status: "Available when coding is the strongest match.",
  },
  math: {
    label: "Math",
    status: "Available when math is the strongest match.",
  },
} as const;

export function CompoundVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <Card
          size="sm"
          className={sectionVisualPanelClass("gap-0 py-0 ring-black/[0.08]")}
        >
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-black/[0.06] px-4">
            <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
            <span className="truncate font-mono text-[0.6875rem] text-muted-foreground">
              Compound routing
            </span>
          </div>

          <CardHeader className="gap-2 border-b border-black/[0.06] pb-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <CardTitle className="text-sm font-semibold">Model paths</CardTitle>
                <CardDescription className="text-xs">
                  One composed response per request
                </CardDescription>
              </div>
              <Badge className="shrink-0 border-transparent bg-[#22a06b]/10 text-[#22a06b] hover:bg-[#22a06b]/10">
                Strongest match
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-4">
            <Tabs defaultValue="reasoning">
              <TabsList className="grid h-9 w-full grid-cols-3">
                {Object.entries(COMPOUND_TABS).map(([value, tab]) => (
                  <TabsTrigger key={value} value={value} className="text-xs">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(COMPOUND_TABS).map(([value, tab]) => (
                <TabsContent key={value} value={value} className="mt-3">
                  <p className="rounded-lg border border-black/[0.06] bg-muted/40 px-3 py-2.5 text-xs leading-5 text-muted-foreground">
                    {tab.status}
                  </p>
                </TabsContent>
              ))}
            </Tabs>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-[0.6875rem] font-medium text-muted-foreground">
                Compose
              </span>
              <Separator className="flex-1" />
            </div>
          </CardContent>

          <CardFooter className="border-t border-black/[0.06] bg-[#202020] py-3 text-background">
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
