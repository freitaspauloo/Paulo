"use client";

import {
  ArrowRight,
  Brain,
  Code2,
  GitMerge,
  Lock,
  MapPin,
  MessageSquare,
  Send,
  Shield,
  ShieldCheck,
  Sigma,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
const SAMPLE_ANNUAL_CHATS = 5_000_000;
const FRONTIER_ANNUAL = 2_500_000;
const ALIGNED_ANNUAL = 30_000;

function ProductPanelChrome({ title }: { title: string }) {
  return (
    <div className="flex h-10 shrink-0 items-center gap-2 border-b border-black/[0.06] px-4">
      <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
      <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
      <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
      <span className="truncate font-mono text-[0.6875rem] text-muted-foreground">
        {title}
      </span>
    </div>
  );
}

function FlowArrow() {
  return (
    <ArrowRight
      className="mx-0.5 hidden size-3.5 shrink-0 text-black/20 sm:block"
      strokeWidth={2}
      aria-hidden
    />
  );
}

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

const COMPOUND_PATHS: {
  id: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  active: boolean;
}[] = [
  {
    id: "reasoning",
    label: "Reasoning path",
    hint: "Strongest model for this task",
    icon: Brain,
    active: true,
  },
  {
    id: "coding",
    label: "Coding path",
    hint: "Standby until it wins the route",
    icon: Code2,
    active: false,
  },
  {
    id: "math",
    label: "Math path",
    hint: "Standby until it wins the route",
    icon: Sigma,
    active: false,
  },
];

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

          <CardContent className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex w-full flex-col gap-3">
              <RadioGroup
                value="reasoning"
                className="pointer-events-none w-full gap-2"
                aria-readonly
              >
                {COMPOUND_PATHS.map((path) => {
                  const Icon = path.icon;

                  return (
                    <label
                      key={path.id}
                      htmlFor={`compound-${path.id}`}
                      className={cn(
                        "flex w-full items-start gap-2.5 rounded-lg border px-3 py-2.5 sm:px-3.5",
                        path.active
                          ? "border-[#22a06b]/35 bg-[#22a06b]/[0.06] shadow-[0_0_0_1px_rgba(34,160,107,0.08)]"
                          : "border-black/[0.06] bg-muted/30 opacity-75",
                      )}
                    >
                      <RadioGroupItem
                        id={`compound-${path.id}`}
                        value={path.id}
                        className={cn(
                          "mt-0.5",
                          path.active &&
                            "border-[#22a06b] bg-[#22a06b] text-white data-checked:border-[#22a06b] data-checked:bg-[#22a06b]",
                        )}
                      />
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Icon
                            className={cn(
                              "size-3.5 shrink-0",
                              path.active ? "text-[#22a06b]" : "text-muted-foreground",
                            )}
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span
                            className={cn(
                              "text-xs font-medium",
                              path.active ? "text-foreground" : "text-muted-foreground",
                            )}
                          >
                            {path.label}
                          </span>
                        </div>
                        <p className="text-[0.6875rem] leading-4 text-muted-foreground">
                          {path.hint}
                        </p>
                      </div>
                      {path.active ? (
                        <Badge className="mt-0.5 shrink-0 border-transparent bg-[#22a06b]/10 px-1.5 text-[0.625rem] text-[#22a06b] hover:bg-[#22a06b]/10">
                          Strongest
                        </Badge>
                      ) : null}
                    </label>
                  );
                })}
              </RadioGroup>

              <div className="space-y-2 pt-0.5">
                <div className="relative py-1">
                  <Separator className="bg-black/[0.08]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex size-7 items-center justify-center rounded-full border border-black/[0.08] bg-white shadow-sm">
                      <GitMerge
                        className="size-3.5 text-muted-foreground"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-[0.6875rem] leading-4 text-muted-foreground">
                  Paths merge into one composed response
                </p>
              </div>

              <Alert className="w-full border-[#22a06b]/25 bg-gradient-to-br from-[#22a06b]/[0.08] to-white py-3">
                <Sparkles className="size-4 text-[#22a06b]" />
                <AlertTitle className="text-xs font-semibold">
                  One composed output
                </AlertTitle>
                <AlertDescription className="text-[0.6875rem] leading-4">
                  → your application
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionVisualShell>
  );
}

export function SecurityFlowVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <Card
          size="sm"
          className={sectionVisualPanelClass(
            "flex h-full flex-col gap-0 py-0 ring-black/[0.08]",
          )}
        >
          <ProductPanelChrome title="Safety architecture" />
          <CardContent className="flex flex-1 flex-col justify-center gap-4 px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex w-full items-center justify-between gap-1 overflow-x-auto sm:gap-0">
              <div className="flex min-w-[3.25rem] flex-col items-center gap-1.5 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg border border-black/[0.08] bg-muted/40">
                  <MessageSquare className="size-4 text-muted-foreground" strokeWidth={2} />
                </div>
                <span className="text-[0.625rem] font-medium leading-tight">Prompt</span>
              </div>
              <FlowArrow />
              <div className="flex min-w-[3.75rem] flex-col items-center gap-1.5 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg border-2 border-[#22a06b]/50 bg-[#22a06b]/10 shadow-[0_0_0_1px_rgba(34,160,107,0.12)]">
                  <Shield className="size-4 text-[#22a06b]" strokeWidth={2} />
                </div>
                <span className="text-[0.625rem] font-semibold leading-tight text-[#22a06b]">
                  Classify
                </span>
              </div>
              <FlowArrow />
              <div className="flex min-w-[3.75rem] flex-col items-center gap-1.5 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg border border-black/[0.08] bg-white">
                  <GitMerge className="size-4 text-muted-foreground" strokeWidth={2} />
                </div>
                <span className="text-[0.625rem] font-medium leading-tight">Compound</span>
              </div>
              <FlowArrow />
              <div className="flex min-w-[3.75rem] flex-col items-center gap-1.5 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg border-2 border-[#22a06b]/50 bg-[#22a06b]/10 shadow-[0_0_0_1px_rgba(34,160,107,0.12)]">
                  <ShieldCheck className="size-4 text-[#22a06b]" strokeWidth={2} />
                </div>
                <span className="text-[0.625rem] font-semibold leading-tight text-[#22a06b]">
                  Verify
                </span>
              </div>
              <FlowArrow />
              <div className="flex min-w-[3.25rem] flex-col items-center gap-1.5 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg border border-black/[0.08] bg-muted/40">
                  <Send className="size-4 text-muted-foreground" strokeWidth={2} />
                </div>
                <span className="text-[0.625rem] font-medium leading-tight">Response</span>
              </div>
            </div>
            <p className="text-center text-[0.6875rem] leading-4 text-muted-foreground">
              Gates are part of the architecture — not add-on filters
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionVisualShell>
  );
}

function UsMapOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M28 72 L42 38 L68 28 L98 22 L128 26 L158 34 L172 52 L168 78 L148 96 L118 104 L82 102 L48 92 Z"
        className="fill-[#22a06b]/[0.06] stroke-[#22a06b]/25"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M158 34 L172 52 L178 44 L168 28 Z"
        className="fill-[#22a06b]/[0.04] stroke-[#22a06b]/20"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="108" cy="58" r="5" className="fill-[#22a06b]" />
      <circle cx="108" cy="58" r="9" className="stroke-[#22a06b]/30" strokeWidth="1.5" />
    </svg>
  );
}

export function SovereignMapVisual({ frame = "gray" }: { frame?: SectionVisualFrame }) {
  return (
    <SectionVisualShell frame={frame}>
      <div className={sectionVisualStageClass(frame)}>
        <Card
          size="sm"
          className={sectionVisualPanelClass(
            "flex h-full flex-col gap-0 py-0 ring-black/[0.08]",
          )}
        >
          <ProductPanelChrome title="Data boundary" />
          <CardContent className="relative flex flex-1 flex-col items-center justify-center px-5 py-5">
            <UsMapOutline className="h-auto w-full max-w-[14rem]" />
            <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#22a06b] shadow-md">
                <MapPin className="size-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              <Badge className="gap-1 border-transparent bg-[#22a06b]/10 text-[0.6875rem] text-[#22a06b] hover:bg-[#22a06b]/10">
                <Lock className="size-3" strokeWidth={2} />
                US perimeter
              </Badge>
              <Badge
                variant="outline"
                className="border-black/[0.08] bg-white text-[0.6875rem] font-medium text-[#646464]"
              >
                SOC 2 certification in progress
              </Badge>
            </div>
          </CardContent>
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
            "flex flex-col justify-center gap-3 p-4 ring-2 ring-[#22a06b]/15 sm:gap-3.5 sm:p-5",
          )}
        >
          <p className="text-center text-2xl font-semibold tracking-tight text-[#22a06b] sm:text-[1.75rem]">
            Up to {SAVINGS_MULTIPLIER}× less
          </p>

          <ChartContainer
            config={costChartConfig}
            className="mx-auto aspect-auto h-[8.5rem] w-full max-w-[13rem] sm:h-[9rem]"
            initialDimension={{ width: 208, height: 144 }}
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

          <div className="rounded-xl border border-black/[0.06] bg-[#fafafa] px-3.5 py-3">
            <p className="text-[0.625rem] font-medium uppercase tracking-wide text-[#646464]">
              Same traffic · {(SAMPLE_ANNUAL_CHATS / 1_000_000).toFixed(0)}M chats / year
            </p>
            <div className="mt-2 flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[0.6875rem] text-[#646464]">Frontier APIs</p>
                <p className="text-lg font-semibold tabular-nums text-[#646464] line-through decoration-black/20">
                  ${(FRONTIER_ANNUAL / 1_000_000).toFixed(1)}M
                </p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-[#22a06b]/60" />
              <div className="text-right">
                <p className="text-[0.6875rem] text-[#22a06b]">Aligned</p>
                <p className="text-lg font-semibold tabular-nums text-[#22a06b]">
                  ${(ALIGNED_ANNUAL / 1_000).toFixed(0)}k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionVisualShell>
  );
}
