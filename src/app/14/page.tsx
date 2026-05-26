import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 14 — 01-1 图表组件库总览
   The body is a 28-card grid of chart visualizations. Each card's chart
   itself is rendered with Figma vector primitives (rectangles + paths), so
   we composite the chart-area image of the grid, then render every CARD
   TITLE as real DOM text on top of the image to mask its baked-in labels.
   The center "图表 28+ / 变体 800+" block is also real DOM text on a black
   card. The page chrome (chip, big title) is real DOM. */

type Card = { x: number; y: number; zh: string; en: string };

/* 4 rows × 7 cols, but the center 2×2 of row 2-3 / col 4-5 is the big stat
   card so two of the 28 grid cells are blank for that. */
const CARDS: Card[] = [
  // Row 1
  { x: 0, y: 0, zh: "条形图", en: "Bar Chart" },
  { x: 1, y: 0, zh: "柱形图", en: "Column Chart" },
  { x: 2, y: 0, zh: "面积图", en: "Area Chart" },
  { x: 3, y: 0, zh: "折线图", en: "Line Chart" },
  { x: 4, y: 0, zh: "折柱混合图", en: "Mixed Chart" },
  { x: 5, y: 0, zh: "环形图", en: "Donut Chart" },
  { x: 6, y: 0, zh: "饼图", en: "Pie Chart" },
  { x: 7, y: 0, zh: "玫瑰图", en: "Rose Chart" },
  // Row 2
  { x: 0, y: 1, zh: "玉珏图", en: "Radial Bar Chart" },
  { x: 1, y: 1, zh: "阶梯图", en: "Step Line Chart" },
  { x: 2, y: 1, zh: "瀑布图", en: "Waterfall Chart" },
  // gap (3,1)..(4,1) covered by stat card
  { x: 5, y: 1, zh: "气泡图", en: "Bubble Chart" },
  { x: 6, y: 1, zh: "漏斗图", en: "Funnel Chart" },
  { x: 7, y: 1, zh: "仪表盘", en: "Gauge" },
  // Row 3
  { x: 0, y: 2, zh: "色块图", en: "Color Block" },
  { x: 1, y: 2, zh: "棒棒糖图", en: "Lollipop Chart" },
  { x: 2, y: 2, zh: "哑铃图", en: "Dumbbell Chart" },
  // gap (3,2)..(4,2) covered by stat card
  { x: 5, y: 2, zh: "水液图", en: "Liquid Chart" },
  { x: 6, y: 2, zh: "子弹图", en: "Bullet Chart" },
  { x: 7, y: 2, zh: "直方图", en: "Histogram" },
  // Row 4
  { x: 0, y: 3, zh: "雷达图", en: "Radar Chart" },
  { x: 1, y: 3, zh: "散点图", en: "Scatter Chart" },
  { x: 2, y: 3, zh: "K线图", en: "K Chart" },
  { x: 3, y: 3, zh: "桑基图", en: "Sankey Chart" },
  { x: 4, y: 3, zh: "箱型图", en: "Box Chart" },
  { x: 5, y: 3, zh: "生态图", en: "Dendrogram" },
  { x: 6, y: 3, zh: "辐射图", en: "Radial Dendrogram" },
  { x: 7, y: 3, zh: "指标图", en: "Index" },
];

/* Grid layout — Figma's chart grid frame occupies the full content area
   (x=80, y=264, width=1764, height=724). 8 cols × 4 rows. */
const GRID_LEFT = 80;
const GRID_TOP = 264;
const CARD_W = 217;
const CARD_GAP = 4;
const CARD_H = 175;
const ROW_GAP = 8;

function CardTitle({ x, y, zh, en, delay }: Card & { delay: number }) {
  const left = GRID_LEFT + x * (CARD_W + CARD_GAP) + 16;
  const top = GRID_TOP + y * (CARD_H + ROW_GAP) + 16;
  return (
    <div
      className="absolute inline-flex items-end gap-1 anim-fade-up"
      style={{
        left,
        top,
        background: "#0d0d0f",
        paddingRight: 4,
        animationDelay: `${delay}s`,
      }}
    >
      <span className="font-hei font-bold text-[14px] leading-4 text-[#1d2129]" style={{ color: "#1d2129", background: "#ffffff", padding: "0 1px" }}>
        {zh}
      </span>
      <span className="font-display text-[12px] leading-3 text-[#1d2129]/60" style={{ background: "#ffffff", padding: "0 1px" }}>
        / {en}
      </span>
    </div>
  );
}

export default function Page14() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="图表组件库与Figma看板插件"
        right={
          <div
            className="rounded-full overflow-hidden anim-fade-down"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
              animationDelay: "0.1s",
            }}
          >
            <Img
              src="/figma/4c6570a8-e7d7-4868-aa84-aa6a1abf046d.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Chart-grid visualization image (chart shapes only).
          This is the rendered chart-grid frame from Figma — 8 cols × 4 rows
          of chart visualizations. Card-title text comes from DOM overlays. */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 80,
          top: 264,
          width: 1764,
          height: 724,
          animationDelay: "0.4s",
        }}
      >
        <Img
          src="/figma/3e5d8f1b-be63-4a3f-bc26-659d040b9bc9.png"
          alt="图表组件库"
          className="block w-full h-full"
        />
      </div>

      {/* Center "图表 28+ / 变体 800+" big stat card — covers 2 cols × 2 rows */}
      <div
        className="absolute flex flex-col items-center justify-center anim-fade-up"
        style={{
          left: GRID_LEFT + 3 * (CARD_W + CARD_GAP),
          top: GRID_TOP + 1 * (CARD_H + ROW_GAP),
          width: 2 * CARD_W + CARD_GAP,
          height: 2 * CARD_H + ROW_GAP,
          background: "#0d0d0f",
          animationDelay: "0.6s",
        }}
      >
        <div className="flex items-baseline justify-between" style={{ width: 320 }}>
          <span className="font-hei font-bold text-[32px] text-white leading-none">
            图表
          </span>
          <span className="font-display italic font-bold text-[44px] text-white leading-none">
            28+
          </span>
        </div>
        <div className="my-6" style={{ width: 320, height: 1, borderTop: "1px dashed rgba(255,255,255,0.3)" }} />
        <div className="flex items-baseline justify-between" style={{ width: 320 }}>
          <span className="font-hei font-bold text-[32px] text-white leading-none">
            变体
          </span>
          <span className="font-display italic font-bold text-[44px] text-white leading-none">
            800+
          </span>
        </div>
      </div>

      {/* Card title labels — render real DOM text on top of each card to
          mask the baked-in labels in the chart-grid image. */}
      {CARDS.map((c, i) => (
        <CardTitle key={`${c.zh}-${i}`} {...c} delay={0.5 + i * 0.015} />
      ))}

      {/* Section chip with 01-1 */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div
          className="anim-scale-in inline-flex items-center justify-center px-5 py-1.5 rounded-full"
          style={{
            background: "#2d2d2d",
            height: 56,
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            animationDelay: "0.1s",
          }}
        >
          <span className="font-display italic font-bold text-[24px] text-white/50 whitespace-nowrap leading-none">
            01-1
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          图表组件库总览
        </p>
      </div>
    </PageFrame>
  );
}
