import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 18 — 02-0 从图表组件库 → Figma 插件：为什么做？
   Three columns of content separated by vertical timeline lines.
   Center has a circular Cursor date callout.
   Bottom row has a row of phone/mockup screenshot cards.
   Each phone screenshot and the bar-chart mockup card on the bottom-left
   are individual image assets; rest is real DOM. */

const PHONE_3 = "/figma/e19eb0a1-d678-41c3-95d7-ff7d626c2065.png";
const PHONE_4 = "/figma/00579cbd-969a-4ab1-bb5d-4028cca7339f.png";
const PHONE_5 = "/figma/edc1b8ef-2fa5-44e4-b767-b200b9cb7356.png";
const DASHBOARD_6 = "/figma/db78c199-d7f9-4128-8060-41e484cc28b9.png";

/* Numbered version chip — italic v# inside a small dark card. */
function VersionChip({
  v,
  text,
}: {
  v: string;
  text: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid #28282a",
      }}
    >
      <span className="font-display italic font-bold text-[16px] text-white/50">
        {v}
      </span>
      <span className="text-[16px] leading-7 text-white/70 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

function ArrowSmall() {
  return (
    <div className="inline-block" style={{ width: 24, height: 6 }}>
      <svg width="24" height="6" viewBox="0 0 24 6" fill="none">
        <path
          d="M0 3H22M22 3L19 0M22 3L19 6"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function ArrowMedium() {
  return (
    <div className="inline-block" style={{ width: 40, height: 6 }}>
      <svg width="40" height="6" viewBox="0 0 40 6" fill="none">
        <path
          d="M0 3H38M38 3L35 0M38 3L35 6"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function ColHeader({
  left,
  top,
  text,
  delay,
}: {
  left: number;
  top: number;
  text: string;
  delay: number;
}) {
  return (
    <div
      className="absolute inline-flex items-center justify-center px-4 py-2 rounded-lg anim-fade-up"
      style={{
        left,
        top,
        background: "#2d2d2d",
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${delay}s`,
      }}
    >
      <span className="font-hei font-bold text-[16px] text-white leading-none whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export default function Page18() {
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

      {/* Column header chips */}
      <ColHeader left={295} top={275} text="组件库的局限性" delay={0.3} />
      <ColHeader left={894} top={275} text="AI 带来的转机" delay={0.38} />
      <ColHeader left={1473} top={275} text="插件的尝试与迭代" delay={0.46} />

      {/* Vertical timeline lines + dots */}
      {[72, 665, 1258, 1851].map((x, i) => (
        <div
          key={i}
          className="absolute anim-fade-up"
          style={{ left: x, top: 248, animationDelay: `${0.4 + i * 0.05}s` }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "rgba(255,255,255,0.3)",
            }}
          />
          <div
            style={{
              marginLeft: 2.5,
              marginTop: 3,
              width: 1,
              height: 792,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      ))}

      {/* Left column — 3 limitation cards */}
      {[
        { top: 338, title: "图表仍然要手动调整", desc: "只要指标变化，坐标轴、图形等，都要重新调整" },
        { top: 518, title: "图表修改会反复发生", desc: "在项目前期讨论阶段，要不断复制、改图、推翻、重来" },
        { top: 698, title: "数据真实性很难保证", desc: "BI类对数据敏感度更高，人工调整图表很难贴近真实数据" },
      ].map((c, i) => (
        <div
          key={c.title}
          className="absolute anim-fade-up"
          style={{
            left: 72,
            top: c.top,
            width: 593,
            height: 180,
            background: "rgba(255,255,255,0.04)",
            animationDelay: `${0.5 + i * 0.07}s`,
          }}
        >
          <div className="px-12 h-full flex flex-col justify-center gap-3">
            <p className="font-hei font-bold text-[20px] leading-10 text-white">
              {c.title}
            </p>
            <p className="text-[16px] leading-7 text-white/70">{c.desc}</p>
          </div>
        </div>
      ))}

      {/* Center column — Cursor circle with date */}
      <div
        className="absolute flex items-center justify-center anim-scale-in"
        style={{
          left: 856,
          top: 540,
          width: 208,
          height: 208,
          borderRadius: 999,
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
          animationDelay: "0.6s",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="font-display italic font-bold text-[18px] text-white/70 tracking-wider whitespace-nowrap leading-none">
            2025/07-08
          </p>
          <p className="font-display italic font-bold text-[37px] text-white whitespace-nowrap leading-none">
            Cursor
          </p>
        </div>
      </div>

      {/* Right column — 3 phase cards */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1257,
          top: 338,
          width: 594,
          height: 180,
          background: "rgba(255,255,255,0.04)",
          animationDelay: "0.55s",
        }}
      >
        <div className="px-12 h-full flex flex-col justify-center gap-4">
          <p className="font-hei font-bold text-[20px] leading-10 text-white">
            基础能力建立
          </p>
          <div className="flex gap-2 items-center">
            <VersionChip v="v1" text="MVP 开发" />
            <ArrowMedium />
            <VersionChip v="v2" text="扩展14类图表" />
          </div>
        </div>
      </div>
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1257,
          top: 518,
          width: 594,
          height: 180,
          background: "rgba(255,255,255,0.04)",
          animationDelay: "0.62s",
        }}
      >
        <div className="px-12 h-full flex flex-col justify-center gap-4">
          <p className="font-hei font-bold text-[20px] leading-10 text-white">
            基于业务场景完善
          </p>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex gap-2 items-center">
              <VersionChip v="v3" text="支持指标卡配置" />
              <ArrowSmall />
              <VersionChip v="v4" text="接入AI，支持对话生成" />
            </div>
            <div className="flex gap-2 items-center">
              <VersionChip v="v5" text="搭建MCP，连接外部AI工具" />
              <ArrowSmall />
              <VersionChip v="v6" text="支持收藏与复用修改" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1257,
          top: 698,
          width: 594,
          height: 180,
          background: "rgba(255,255,255,0.04)",
          animationDelay: "0.7s",
        }}
      >
        <div className="px-12 h-full flex flex-col justify-center gap-4">
          <p className="font-hei font-bold text-[20px] leading-10 text-white">
            看板与交付延伸
          </p>
          <div className="flex gap-2 items-center">
            <VersionChip v="v7" text="看板配置与导出" />
            <ArrowMedium />
            <VersionChip v="v8" text="HTML导出" />
          </div>
        </div>
      </div>

      {/* Bottom row — phone mockup screenshots (real assets) */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1305,
          top: 924,
          width: 170,
          height: 297,
          borderRadius: 12,
          border: "3px solid #2d2d2d",
          opacity: 0.3,
          animationDelay: "0.8s",
        }}
      >
        <Img src={PHONE_3} alt="" className="block w-full h-full object-cover" />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1650,
          top: 924,
          width: 170,
          height: 297,
          borderRadius: 12,
          border: "3px solid #2d2d2d",
          opacity: 0.3,
          animationDelay: "0.85s",
        }}
      >
        <Img src={PHONE_4} alt="" className="block w-full h-full object-cover" />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1469,
          top: 878,
          width: 188,
          height: 329,
          borderRadius: 12,
          border: "3px solid #2d2d2d",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          opacity: 0.9,
          animationDelay: "0.9s",
        }}
      >
        <Img src={PHONE_5} alt="" className="block w-full h-full object-cover" />
      </div>
      {/* Bottom center — dashboard preview */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 712,
          top: 878,
          width: 497,
          height: 228,
          borderRadius: 12,
          border: "3px solid #2d2d2d",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          opacity: 0.9,
          animationDelay: "0.95s",
        }}
      >
        <Img
          src={DASHBOARD_6}
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>

      {/* Bottom left — Bar Chart mockup card (DOM-rendered bar chart). */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 120,
          top: 878,
          width: 164,
          height: 106,
          borderRadius: 9,
          border: "2px solid #2d2d2d",
          background: "white",
          opacity: 0.9,
          padding: 12,
          animationDelay: "0.8s",
        }}
      >
        <div className="flex items-end gap-1 mb-2" style={{ color: "#1d2129" }}>
          <span className="font-hei font-bold text-[10px] leading-3">条形图</span>
          <span className="font-display text-[9px] leading-3 text-[#1d2129]/70">
            / Bar Chart
          </span>
        </div>
        <div className="flex flex-col gap-1">
          {[170, 154, 138, 67, 37].map((w, i) => (
            <div
              key={i}
              style={{ width: w, height: 11, background: "#165dff" }}
            />
          ))}
        </div>
      </div>

      {/* Section chip with 02-0 */}
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
            02-0
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          从图表组件库→Figma插件：为什么做？
        </p>
      </div>
    </PageFrame>
  );
}
