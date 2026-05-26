import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 16 — 01-3 组件嵌套：按业务需求切换不同构成
   Left column: stacked Area Chart properties panels (cascading).
   Right top row: Tooltips card + 头部组件 card.
   Right bottom row: 图例 / 网格线 X、Y / 网格线 文本、数字 cards.
   All chart-component card screenshots are individual image assets;
   page chrome and card labels are real DOM. */

// Individual chart-component assets — each is its own download
const AREA_PANEL = "/figma/91ac7036-0d42-41c0-9ac1-ad7f24cc7ae1.png"; // Area Chart panel
const TOOLTIPS_IMG = "/figma/67fc7e38-357d-45e3-9feb-3a87204b6416.png"; // Tooltips card grid
const HEADER_IMG = "/figma/f50974c6-939f-4ad3-8278-f0b073b3cbb4.png"; // 头部组件
const LEGEND_IMG = "/figma/8a3ee866-d66c-4241-ae21-2a8decfba224.png"; // 图例
const GRID_XY_IMG = "/figma/63905153-c528-4547-9bd3-826b9b6824ad.png"; // 网格线 X,Y
const GRID_TEXT_IMG = "/figma/fc918455-852e-4b65-b411-b49da21a68fa.png"; // 网格线 text

/* A right-side chart-card with chip label inside top-left and side
   description on the right. */
function ChartCard({
  left,
  top,
  width,
  height,
  src,
  chip,
  desc,
  delay,
  imgFit = "cover",
  imgInsetTop = 0,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  src: string;
  chip: string;
  desc: string;
  delay: number;
  imgFit?: "cover" | "contain";
  imgInsetTop?: number;
}) {
  return (
    <div
      className="absolute anim-fade-up overflow-hidden"
      style={{
        left,
        top,
        width,
        height,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid #2d2d2d",
        animationDelay: `${delay}s`,
      }}
    >
      {/* image content */}
      <div className="absolute inset-0 overflow-hidden">
        <Img
          src={src}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: imgFit, marginTop: imgInsetTop }}
        />
      </div>
      {/* chip in top-left */}
      <div
        className="absolute inline-flex items-center justify-center px-3 rounded-md"
        style={{
          left: 24,
          top: 24,
          height: 36,
          background: "#2d2d2d",
          boxShadow: "inset 0 1px 1px 0 #5b5a61",
        }}
      >
        <span className="text-[16px] leading-none text-white whitespace-nowrap">
          {chip}
        </span>
      </div>
      {/* desc top-right */}
      <p
        className="absolute text-[16px] leading-none text-white/60 whitespace-nowrap"
        style={{ right: 24, top: 34, background: "#0d0d0f", padding: "0 6px" }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function Page16() {
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

      {/* Left container — Area Chart panel + cascading copies */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 0,
          top: 238,
          width: 712,
          height: 842,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid #2d2d2d",
          animationDelay: "0.35s",
        }}
      />
      {/* Area Chart label top-left */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 14, top: 254, animationDelay: "0.4s" }}
      >
        <div className="inline-flex flex-col px-3 py-2" style={{ background: "#0d0d0f" }}>
          <p className="text-[16px] leading-5 text-white/90">
            <span className="font-display">Area Chart </span>
            <span className="text-white/55 text-[13px]">面积图</span>
          </p>
          <p className="text-[11px] leading-4 text-white/40 mt-0.5">
            Properties for the layer
          </p>
        </div>
      </div>
      {/* Stack of 5 area chart property panels — each its own image,
          cascading like a deck of cards. The same panel image is used
          for the stack (since all variants share the same properties UI). */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute anim-fade-up overflow-hidden"
          style={{
            left: 110 + i * 48,
            top: 320 + i * 78,
            width: 232,
            height: 660 - i * 40,
            borderRadius: 12,
            background: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
            transform: `rotate(${-6 + i * 1.4}deg)`,
            animationDelay: `${0.45 + i * 0.08}s`,
            zIndex: 5 - i,
          }}
        >
          <Img
            src={AREA_PANEL}
            alt=""
            className="block w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* Right top row — Tooltips + 头部组件 */}
      <ChartCard
        left={711}
        top={238}
        width={462}
        height={421}
        src={TOOLTIPS_IMG}
        chip="Tooltips"
        desc="单系列、多系列"
        delay={0.55}
        imgFit="cover"
      />
      <ChartCard
        left={1173}
        top={238}
        width={747}
        height={421}
        src={HEADER_IMG}
        chip="头部组件"
        desc="注释、工具栏、筛选、选项卡"
        delay={0.62}
        imgFit="cover"
      />

      {/* Right bottom row — 图例 / 网格线 X,Y / 网格线 文本、数字 */}
      <ChartCard
        left={711}
        top={658}
        width={462}
        height={421}
        src={LEGEND_IMG}
        chip="图例"
        desc="横向、纵向"
        delay={0.7}
        imgFit="cover"
      />
      <ChartCard
        left={1173}
        top={658}
        width={373}
        height={421}
        src={GRID_XY_IMG}
        chip="网格线"
        desc="X、Y"
        delay={0.78}
        imgFit="cover"
      />
      <ChartCard
        left={1546}
        top={658}
        width={374}
        height={421}
        src={GRID_TEXT_IMG}
        chip="网格线"
        desc="文本、数字"
        delay={0.86}
        imgFit="cover"
      />

      {/* Section chip with 01-3 */}
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
            01-3
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          组件嵌套：按业务需求切换不同构成
        </p>
      </div>
    </PageFrame>
  );
}
