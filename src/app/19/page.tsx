import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 19 — 02-1 v1: MVP 开发，从图表组件构成 → 插件配置项
   Left: a 分组柱形图 chart card with numbered annotations 1-7 showing the
   anatomy of a chart component, lines linking to each annotation.
   Right: two plugin "组件配置项" panels (config + data tabs).
   All chart and panel screenshots are individual image assets. */

const CHART_BAR = "/figma/268352ab-30ea-40c1-8196-b6b08edeca54.png"; // 分组柱形图
const PANEL_CONFIG = "/figma/0a1d329d-68d2-425e-bdfd-5262a1a2bc48.png";
const PANEL_DATA = "/figma/11c756c6-cb46-44cc-83c7-6e1770615383.png";

function NumChip({
  left,
  top,
  n,
  label,
  delay,
}: {
  left: number;
  top: number;
  n: number;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="absolute flex items-center gap-2 anim-fade-up"
      style={{ left, top, animationDelay: `${delay}s` }}
    >
      <div
        className="inline-flex items-center justify-center"
        style={{
          width: 24,
          height: 24,
          borderRadius: 999,
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 3px 0 #3f3e44",
        }}
      >
        <span className="font-display italic font-bold text-[12px] text-white/80 leading-none">
          {n}
        </span>
      </div>
      <span className="text-[14px] leading-6 text-white/80 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function Page19() {
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

      {/* Left container — 影响范围 */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 80,
          top: 244,
          width: 860,
          height: 781,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 16,
          animationDelay: "0.35s",
        }}
      />
      {/* "影响范围" chip */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 111, top: 274, animationDelay: "0.4s" }}
      >
        <div
          className="inline-flex items-center px-4 py-2 rounded-lg"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          <span className="text-[16px] leading-none text-white">影响范围</span>
        </div>
      </div>
      {/* "图表组件树构成" title */}
      <p
        className="absolute font-hei font-bold text-[24px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 111, top: 343, lineHeight: "38px", animationDelay: "0.45s" }}
      >
        图表组件树构成
      </p>

      {/* Left — bar chart card with numbered annotations */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 240,
          top: 480,
          width: 360,
          height: 460,
          background: "white",
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.55s",
        }}
      >
        <Img src={CHART_BAR} alt="" className="block w-full h-full" style={{ objectFit: "contain" }} />
      </div>

      {/* Numbered annotations along the right side of the chart card */}
      <NumChip left={640} top={490} n={1} label="标题" delay={0.65} />
      <NumChip left={640} top={540} n={2} label="图例" delay={0.7} />
      <NumChip left={640} top={590} n={3} label="Y轴" delay={0.75} />
      <NumChip left={640} top={640} n={4} label="数据" delay={0.8} />
      <NumChip left={640} top={690} n={5} label="2500..." delay={0.85} />
      <NumChip left={640} top={740} n={6} label="X轴、2项" delay={0.9} />
      <NumChip left={640} top={790} n={7} label="柱形高度" delay={0.95} />

      {/* Arrow between left and right sections */}
      <div
        className="absolute anim-fade-in"
        style={{ left: 925, top: 620, animationDelay: "1s" }}
      >
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
          <path d="M0 10H44M44 10L36 2M44 10L36 18" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
        </svg>
      </div>

      {/* Right container — 组件配置项 */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 980,
          top: 244,
          width: 860,
          height: 781,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 16,
          animationDelay: "0.45s",
        }}
      />
      {/* "组件配置项" chip */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 1011, top: 274, animationDelay: "0.5s" }}
      >
        <div
          className="inline-flex items-center px-4 py-2 rounded-lg"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          <span className="text-[16px] leading-none text-white">组件配置项</span>
        </div>
      </div>
      {/* "配置图表组件" title */}
      <p
        className="absolute font-hei font-bold text-[24px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 1011, top: 343, lineHeight: "38px", animationDelay: "0.55s" }}
      >
        基于组件树，配置插件参数
      </p>

      {/* Plugin panels */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1060,
          top: 430,
          width: 330,
          height: 560,
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={PANEL_CONFIG}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1430,
          top: 430,
          width: 330,
          height: 560,
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.78s",
        }}
      >
        <Img
          src={PANEL_DATA}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Section chip with 02-1 */}
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
            02-1
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v1: MVP 开发，从图表组件构成 → 插件配置项
        </p>
      </div>
    </PageFrame>
  );
}
