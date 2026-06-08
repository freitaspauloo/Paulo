"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

import { landing } from "@/components/landing/landing-primitives";
import {
  SectionVisualShell,
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
  { label: "Reasoning", active: true },
  { label: "Coding", active: false },
  { label: "Math", active: false },
] as const;

function CompoundConvergeLines() {
  return (
    <svg
      viewBox="0 0 280 72"
      fill="none"
      aria-hidden
      className="mx-auto h-[4.5rem] w-full max-w-[17.5rem]"
    >
      <path
        d="M42 4 L140 58"
        className="stroke-[#22a06b]/55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M140 4 L140 58"
        className="stroke-black/10"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M238 4 L140 58"
        className="stroke-black/10"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M140 58 L140 68"
        className="stroke-[#202020]/20"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="140" cy="58" r="5" className="fill-[#22a06b]" />
      <circle cx="140" cy="58" r="9" className="fill-[#22a06b]/15" />
    </svg>
  );
}

export function CompoundVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center border border-black/[0.06] bg-white p-5 sm:p-6",
            landing.cardLg,
            landing.shadowDrop,
          )}
        >
          <div className="mb-4 flex items-center gap-2 border-b border-black/[0.06] pb-3">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-black/10" />
              <span className="size-2 rounded-full bg-black/10" />
              <span className="size-2 rounded-full bg-black/10" />
            </div>
            <p className="text-xs font-medium text-[#646464]">Compound routing</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {COMPOUND_PATHS.map((path) => (
              <div
                key={path.label}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-[10px] border px-2 py-3 text-center sm:px-3",
                  path.active
                    ? "border-[#22a06b]/35 bg-[#22a06b]/[0.07] shadow-[0_0_0_1px_rgba(34,160,107,0.08)]"
                    : "border-black/[0.06] bg-[#fafafa] text-[#646464]",
                )}
              >
                <span
                  className={cn(
                    "text-[0.6875rem] font-semibold sm:text-xs",
                    path.active ? "text-foreground" : "text-[#646464]",
                  )}
                >
                  {path.label}
                </span>
                {path.active ? (
                  <span className="rounded-full bg-[#22a06b]/10 px-2 py-0.5 text-[0.625rem] font-medium leading-none text-[#22a06b]">
                    Strongest
                  </span>
                ) : (
                  <span className="text-[0.625rem] text-[#646464]/70">Model path</span>
                )}
              </div>
            ))}
          </div>

          <CompoundConvergeLines />

          <div className="mx-auto -mt-1 flex w-fit items-center gap-1.5 rounded-full border border-black/[0.08] bg-[#f9f9f9] px-3 py-1 text-[0.6875rem] font-medium text-[#646464]">
            Compose
          </div>

          <div className="mt-3 rounded-[10px] border border-[#202020]/12 bg-[#202020] px-4 py-3 text-center text-sm font-medium text-white">
            One composed output
            <span className="mt-0.5 block text-[0.6875rem] font-normal text-white/65">
              → your application
            </span>
          </div>
        </div>
      </div>
    </SectionVisualShell>
  );
}

export function CostSplitVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-4 border border-black/[0.06] bg-white p-5 sm:gap-4 sm:p-6",
            landing.cardLg,
            landing.shadowDrop,
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
            className="aspect-auto h-[9.5rem] w-full sm:h-[10.25rem]"
            initialDimension={{ width: 320, height: 164 }}
          >
            <BarChart
              data={costChartData}
              margin={{ top: 28, right: 12, left: 12, bottom: 4 }}
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
