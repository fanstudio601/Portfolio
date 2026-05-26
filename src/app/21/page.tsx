import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 21 — 02-3 v3: 加入指标卡与快捷指标，让图表更接近真实 BI 模块
   Three columns top-down. Each column has a one-line description chip
   above a series of stacked BI module screenshots. All screenshot images
   are individual assets; descriptive text and chips are real DOM. */

const PANEL_1A = "/figma/ba224eda-d41b-47bc-b255-04ea4053f036.png";
const PANEL_1B = "/figma/3b2f6a30-546d-43f2-b666-8c5a140ee6b0.png";

const COLUMNS = [
  {
    no: "01",
    title: "在图表中，先扣出关键指标",
    desc: "结合多个指标类型，并显示在原标题区域，再增强图表的内容",
    src: PANEL_1A,
  },
  {
    no: "02",
    title: "让数据的分析、对比，效率得到一键提升",
    desc: "支持自动添加 最大值、最小值，可在数据中一键提取",
    src: PANEL_1B,
  },
  {
    no: "03",
    title: "针对计算指标之外，做随手计算定义指标",
    desc: "结合多种业务需求，方便自定义、自定义生成新的指标",
    src: PANEL_1A,
  },
];

export default function Page21() {
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

      {/* 3 column cards */}
      {COLUMNS.map((col, i) => {
        const left = 80 + i * 605;
        return (
          <div key={col.no}>
            <div
              className="absolute anim-fade-up"
              style={{
                left,
                top: 245,
                width: 580,
                height: 130,
                background: "rgba(255,255,255,0.02)",
                border: "0.9px solid rgba(255,255,255,0.2)",
                borderRadius: 16,
                padding: 24,
                animationDelay: `${0.35 + i * 0.08}s`,
              }}
            >
              <p className="font-hei font-bold text-[16px] leading-7 text-white/90 mb-1">
                {col.title}
              </p>
              <p className="text-[16px] leading-7 text-white/70">{col.desc}</p>
            </div>
            {/* Big number badge — italic floating top-left */}
            <div
              className="absolute flex items-center justify-center anim-scale-in"
              style={{
                left: left - 17,
                top: 228,
                width: 36,
                height: 36,
                borderRadius: 999,
                background: "#2d2d2d",
                boxShadow:
                  "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 3px 0 #3f3e44",
                transform: "rotate(-20deg)",
                animationDelay: `${0.4 + i * 0.08}s`,
              }}
            >
              <span className="font-display italic font-bold text-[14px] text-white leading-none">
                {col.no}
              </span>
            </div>
            {/* Mobile mockup screenshot */}
            <div
              className="absolute anim-fade-up overflow-hidden"
              style={{
                left: left + 110,
                top: 420,
                width: 380,
                height: 600,
                borderRadius: 12,
                border: "2px solid #2d2d2d",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                animationDelay: `${0.55 + i * 0.08}s`,
              }}
            >
              <Img
                src={col.src}
                alt=""
                className="block w-full h-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        );
      })}

      {/* Section chip with 02-3 */}
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
            02-3
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v3：加入指标卡与快捷指标，让图表更接近真实 BI 模块
        </p>
      </div>
    </PageFrame>
  );
}
