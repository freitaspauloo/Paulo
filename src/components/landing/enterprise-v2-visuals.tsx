"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

import { landing } from "@/components/landing/landing-primitives";
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

export function CompoundVisual() {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] p-4 sm:p-6",
        landing.sectionVisualFrame,
      )}
    >
      <div className="relative mx-auto min-h-[22rem] w-full sm:min-h-[26rem]">
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-4 border border-black/[0.06] bg-white p-6 sm:p-8",
            landing.cardLg,
            landing.shadowDrop,
          )}
        >
          <p className="text-xs font-medium text-[#646464]">Compound routing</p>
          {[
            ["Reasoning path", true],
            ["Coding path", false],
            ["Math path", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={cn(
                "flex items-center justify-between rounded-[10px] border px-4 py-3 text-sm",
                active
                  ? "border-[#22a06b]/30 bg-[#22a06b]/[0.06] font-medium"
                  : "border-black/[0.06] text-[#646464]",
              )}
            >
              <span>{label}</span>
              {active ? (
                <span className="text-xs text-[#22a06b]">Strongest match</span>
              ) : null}
            </div>
          ))}
          <div className="mt-2 rounded-[10px] border border-black/[0.06] bg-[#f9f9f9] px-4 py-3 text-sm font-medium">
            One composed output → your application
          </div>
        </div>
      </div>
    </div>
  );
}

export function CostSplitVisual() {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] p-4 sm:p-6",
        landing.sectionVisualFrame,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6 border border-black/[0.06] bg-white px-6 py-8 sm:gap-7 sm:px-9 sm:py-10",
          landing.cardLg,
          landing.shadowDrop,
        )}
      >
        <div className="space-y-1 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-[#646464]">
            Cost per chat
          </p>
          <p className="text-[0.6875rem] text-[#646464]/80">
            Hover each bar for exact pricing
          </p>
        </div>

        <ChartContainer
          config={costChartConfig}
          className="aspect-auto h-[14rem] w-full sm:h-[15rem]"
          initialDimension={{ width: 320, height: 224 }}
        >
          <BarChart
            data={costChartData}
            margin={{ top: 36, right: 16, left: 16, bottom: 8 }}
            barCategoryGap="32%"
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
              barSize={64}
              maxBarSize={72}
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

        <div className="space-y-1.5 text-center">
          <p className="text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight text-[#22a06b]">
            Up to {SAVINGS_MULTIPLIER}× less
          </p>
          <p className="text-xs leading-5 text-[#646464]">
            Same traffic · sample annual bill modeled on request
          </p>
          <p className="text-[0.6875rem] text-[#646464]/75">
            Aligned bar height is floored so the savings stay visible at a glance
          </p>
        </div>
      </div>
    </div>
  );
}
