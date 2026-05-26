import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 25 — 02-7 v7: 加入看板功能，让输出从单个图表走向完整业务页面
   Left: plugin "新建看板" configuration screenshot (single image asset).
   Right: a full BI cost-analysis dashboard composed in Figma from many
   vector chart primitives. The dashboard cannot practically be
   decomposed into per-chart image assets (each chart is rendered as
   ~100+ rectangles + paths in Figma) so we use the rendered dashboard
   image as a single asset, with chrome + side annotations as real DOM. */

const DASHBOARD_IMG = "/figma/99efbd5d-5cbb-49d7-bd7b-d14479f47465.png";

function Bullet({
  left,
  top,
  width,
  text,
  delay,
}: {
  left: number;
  top: number;
  width: number;
  text: string;
  delay: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top,
        width,
        padding: "16px 24px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        animationDelay: `${delay}s`,
      }}
    >
      <p className="text-[16px] leading-7 text-white/80">{text}</p>
    </div>
  );
}

export default function Page25() {
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

      {/* Right — BI dashboard preview (single rendered asset).
          The dashboard contains 6+ Figma-vector charts (line, donut,
          stacked-bar, KPI tiles) so this single rendered image is the
          irreducible asset. Side annotations + chrome remain DOM. */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 970,
          top: 244,
          width: 880,
          height: 780,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.1)",
          animationDelay: "0.6s",
        }}
      >
        <Img
          src={DASHBOARD_IMG}
          alt="成本分析看板"
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
      </div>

      {/* Left mockup placeholder — using same dashboard image but cropped to left
          half (the plugin "新建看板" setup panel) */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 460,
          top: 290,
          width: 380,
          height: 700,
          borderRadius: 11,
          border: "2px solid #2d2d2d",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          animationDelay: "0.5s",
        }}
      >
        <Img
          src={DASHBOARD_IMG}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>

      {/* Left description bullets */}
      <Bullet
        left={80}
        top={443}
        width={312}
        text="通过 17 个内置图层，搭建完整数据布局"
        delay={0.4}
      />
      <Bullet
        left={80}
        top={662}
        width={312}
        text="通过组合内置，灵活搭建页内容编辑"
        delay={0.5}
      />
      <Bullet
        left={960}
        top={443}
        width={312}
        text="通过预览页面，演练画布看板格式"
        delay={0.45}
      />
      <Bullet
        left={960}
        top={662}
        width={312}
        text="兼容真实图表，同步画板等转"
        delay={0.55}
      />

      {/* Section chip with 02-7 */}
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
            02-7
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v7：加入看板功能，让输出从单个图表走向完整业务页面
        </p>
      </div>
    </PageFrame>
  );
}
