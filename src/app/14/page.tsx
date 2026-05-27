import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 14 — 01-1 图表组件库总览
   The body is a 28-card grid of chart visualizations (8 cols × 4 rows with
   a 2×2 center stat card). Each card's chart + title is baked into the
   Figma-rendered image, so we use that image as-is.

   Animation: a diagonal wave reveals the grid one card at a time. We
   cover the image with 32 dark mask tiles aligned to each cell, then
   fade them out with a per-cell delay based on (col + row). After the
   last card reveals, the center "图表 28+ / 变体 800+" stat card pops
   in with an overshoot bounce. */

/* Grid layout — chart grid frame occupies (x=80, y=264, w=1764, h=724) */
const GRID_LEFT = 80;
const GRID_TOP = 264;
const CARD_W = 217;
const CARD_GAP = 4;
const CARD_H = 175;
const ROW_GAP = 8;
const COLS = 8;
const ROWS = 4;

/* Stat card occupies cols 3-4, rows 1-2 — those tiles aren't blank so we
   keep them in the reveal sequence but their reveal happens behind the
   stat card and the stat card animates in after the mask wipe arrives at
   that area. */
const STAT_COL = 3;
const STAT_ROW = 1;

/* Total wipe duration: cells animate left-to-right + top-to-bottom.
   peakDelay = (COLS-1) + (ROWS-1) = 10. step = 0.05s ⇒ wipe spans 0.5s
   after the first cell starts at 0.4s — ends at ~1.6s including 0.7s
   reveal duration. */
const FIRST_CELL_DELAY = 0.4;
const STEP = 0.05;
const STAT_DELAY =
  FIRST_CELL_DELAY + (STAT_COL + STAT_ROW + 1) * STEP + 0.25;

function cellRect(col: number, row: number) {
  return {
    left: GRID_LEFT + col * (CARD_W + CARD_GAP),
    top: GRID_TOP + row * (CARD_H + ROW_GAP),
    width: CARD_W,
    height: CARD_H,
  };
}

export default function Page14() {
  /* Generate mask tiles */
  const tiles = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const inStatArea =
        col >= STAT_COL && col <= STAT_COL + 1 &&
        row >= STAT_ROW && row <= STAT_ROW + 1;
      if (inStatArea) continue;
      const delay = FIRST_CELL_DELAY + (col + row) * STEP;
      tiles.push({ col, row, delay });
    }
  }

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
              src="/figma/case-avatar.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

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

      {/* Chart-grid backdrop image (all 28 cards + titles baked in) */}
      <div
        className="absolute"
        style={{
          left: 80,
          top: 264,
          width: 1764,
          height: 724,
        }}
      >
        <Img
          src="/figma/3e5d8f1b-be63-4a3f-bc26-659d040b9bc9.png"
          alt="图表组件库"
          className="block w-full h-full"
        />
      </div>

      {/* Diagonal wave mask — 28 dark tiles fade out one by one */}
      {tiles.map(({ col, row, delay }) => {
        const r = cellRect(col, row);
        return (
          <div
            key={`${col}-${row}`}
            className="absolute pointer-events-none anim-mask-reveal"
            style={{
              left: r.left,
              top: r.top,
              width: r.width,
              height: r.height,
              background: "#101012",
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* Center "图表 28+ / 变体 800+" stat card — pops in after the wave */}
      <div
        className="absolute flex flex-col items-center justify-center anim-stat-pop"
        style={{
          left: GRID_LEFT + STAT_COL * (CARD_W + CARD_GAP),
          top: GRID_TOP + STAT_ROW * (CARD_H + ROW_GAP),
          width: 2 * CARD_W + CARD_GAP,
          height: 2 * CARD_H + ROW_GAP,
          background: "#0d0d0f",
          animationDelay: `${STAT_DELAY}s`,
        }}
      >
        <div
          className="flex items-baseline justify-between"
          style={{ width: 320 }}
        >
          <span className="font-hei font-bold text-[32px] text-white leading-none">
            图表
          </span>
          <span className="font-display italic font-bold text-[44px] text-white leading-none">
            28+
          </span>
        </div>
        <div
          className="my-6"
          style={{
            width: 320,
            height: 1,
            borderTop: "1px dashed rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="flex items-baseline justify-between"
          style={{ width: 320 }}
        >
          <span className="font-hei font-bold text-[32px] text-white leading-none">
            变体
          </span>
          <span className="font-display italic font-bold text-[44px] text-white leading-none">
            800+
          </span>
        </div>
      </div>
    </PageFrame>
  );
}
