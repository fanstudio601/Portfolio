import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 20 — 02-2 v2: 参考组件库图表体系，扩展插件至 15 种
   Left container: chart-type classification (三层分类). Right container:
   sankey-data-conservation feature (data integrity check).
   All chart panel + sankey conservation screenshots are individual
   image assets; classification rows + descriptive labels are real DOM. */

const SANKEY_BEFORE = "/figma/2290b997-3329-4e4f-acb5-dae3e93de858.png";
const SANKEY_MID = "/figma/4cb56bce-fcfa-427e-b13f-36c118df894f.png";
const SANKEY_AFTER = "/figma/f7e0459b-1f84-4708-b57a-c53be50fef93.png";
const INDEX_IMG = "/figma/be79796b-8ef5-4464-be6b-56716f1e5a98.png";
const TYPES_IMG = "/figma/fe5071dc-a066-4ad7-b0a9-297e8bb67848.png";

const CLASSIFY_ROWS = [
  { label: "对比", desc: "柱状图、条形图、雷达图" },
  { label: "趋势", desc: "折线图、面积图、K线图" },
  { label: "占比", desc: "饼图、环形图、玫瑰图、旭日图" },
  { label: "分布", desc: "散点图、气泡图、词云图" },
  { label: "转化", desc: "漏斗图、桑基图" },
];

function NumberPill({
  n,
  text,
}: {
  n: string;
  text: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 px-3 rounded-full"
      style={{
        height: 22,
        background: "#2d2d2d",
        boxShadow:
          "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 2px 5px 0 #3f3e44",
      }}
    >
      <span className="font-display italic font-bold text-[8px] text-white/80 leading-none">
        {n}.
      </span>
      <span className="font-hei font-bold text-[12px] text-white leading-none">
        {text}
      </span>
    </div>
  );
}

export default function Page20() {
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

      {/* Left card — chart type classification */}
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
          <span className="text-[16px] leading-none text-white">图表类型扩展</span>
        </div>
      </div>
      <p
        className="absolute font-hei font-bold text-[24px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 111, top: 343, lineHeight: "38px", animationDelay: "0.45s" }}
      >
        三层分类：分析目的 → 图表类型 → 图表子类
      </p>

      {/* Types image — chart-library index visual */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 192,
          top: 408,
          width: 801,
          height: 228,
          borderRadius: 12,
          border: "2px solid #2d2d2d",
          animationDelay: "0.55s",
        }}
      >
        <Img
          src={TYPES_IMG}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
      {/* "图表组件库索引" chip overlay */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 865, top: 596, animationDelay: "0.6s" }}
      >
        <div
          className="inline-flex items-center px-4 py-2 rounded-full"
          style={{
            background: "#2d2d2d",
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 2px 5px 0 #3f3e44",
          }}
        >
          <span className="font-hei font-bold text-[12px] text-white leading-none whitespace-nowrap">
            图表组件库索引
          </span>
        </div>
      </div>

      {/* Bottom-left — Index image */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 192,
          top: 715,
          width: 344,
          height: 280,
          borderRadius: 12,
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={INDEX_IMG}
          alt=""
          className="block w-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Classification rows */}
      <div
        className="absolute flex flex-col gap-3 anim-fade-up"
        style={{ left: 594, top: 727, width: 366, animationDelay: "0.75s" }}
      >
        {CLASSIFY_ROWS.map((row, i) => (
          <div key={row.label}>
            <div className="flex items-center gap-4">
              <span className="text-[16px] leading-8 text-white/90">{row.label}</span>
              <span className="text-[16px] leading-8 text-white/50">{row.desc}</span>
            </div>
            {i < CLASSIFY_ROWS.length - 1 && (
              <div
                style={{
                  marginTop: 6,
                  height: 1,
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Right card — sankey data conservation */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1060,
          top: 244,
          width: 783,
          height: 781,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 16,
          animationDelay: "0.4s",
        }}
      />
      <div
        className="absolute anim-fade-up"
        style={{ left: 1091, top: 274, animationDelay: "0.45s" }}
      >
        <div
          className="inline-flex items-center px-4 py-2 rounded-lg"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          <span className="text-[16px] leading-none text-white whitespace-nowrap">
            特殊图表：数据逻辑支持
          </span>
        </div>
      </div>
      <p
        className="absolute font-hei font-bold text-[24px] text-white whitespace-nowrap anim-fade-up"
        style={{ left: 1091, top: 343, lineHeight: "38px", animationDelay: "0.5s" }}
      >
        以桑基图为例，加入数据守恒检查和一键修改
      </p>

      {/* 3 sankey screenshots overlapping */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1092,
          top: 408,
          width: 304,
          height: 514,
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          animationDelay: "0.62s",
        }}
      >
        <Img
          src={SANKEY_BEFORE}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1361,
          top: 443,
          width: 305,
          height: 512,
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={SANKEY_MID}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1651,
          top: 477,
          width: 306,
          height: 513,
          borderRadius: 12,
          border: "1px solid #2d2d2d",
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.78s",
        }}
      >
        <Img
          src={SANKEY_AFTER}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Numbered step pills */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 1216, top: 397, animationDelay: "0.85s" }}
      >
        <NumberPill n="1" text="检查" />
      </div>
      <div
        className="absolute anim-fade-up"
        style={{ left: 1481, top: 432, animationDelay: "0.9s" }}
      >
        <NumberPill n="2" text="修复" />
      </div>
      <div
        className="absolute anim-fade-up"
        style={{ left: 1776, top: 466, animationDelay: "0.95s" }}
      >
        <NumberPill n="3" text="守恒" />
      </div>

      {/* Section chip with 02-2 */}
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
            02-2
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v2：参考组件库图表体系，扩展插件至 15 种
        </p>
      </div>
    </PageFrame>
  );
}
