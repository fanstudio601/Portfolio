import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 26 — 02-8 v8: 加入 HTML 导出，让看板从设计结果走向可落地页面
   Four step cards across the top describing the export-to-HTML flow.
   Below: a row of mockup screenshots showing the exported HTML page
   in different responsive sizes. All screenshots are individual image
   assets; descriptive text is real DOM. */

const SHOT_1 = "/figma/7fb068a0-ee93-4ab9-97e6-8d7c9a73aab2.png";
const SHOT_2 = "/figma/4788c46b-a862-4092-b6b5-59261520d643.png";
const SHOT_3 = "/figma/d3f6f5ea-6bf7-49c2-aec7-286690fb8f49.png";
const SHOT_4 = "/figma/657f41f7-7ff8-414b-bcf3-644f2a44eb43.png";

const STEPS = [
  { n: "01", title: "导出 HTML", desc: "除了绘制画布外，也可直接导出为 HTML", left: 80 },
  { n: "02", title: "独立预览与响应式布局", desc: "导出后可本地预览，并支持响应式", left: 534 },
  { n: "03", title: "真实 API 对接", desc: "可接入真实数据源配置，或保持静态做Demo演示", left: 988 },
  { n: "04", title: "作为外链嵌入后台", desc: "CSS与JS集中在同一文件中，可外链管理后台", left: 1442 },
];

export default function Page26() {
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

      {/* 4 step cards */}
      {STEPS.map((s, i) => (
        <div key={s.n}>
          <div
            className="absolute anim-fade-up"
            style={{
              left: s.left,
              top: 261,
              width: 397,
              padding: 24,
              background: "rgba(255,255,255,0.02)",
              border: "0.9px solid rgba(255,255,255,0.2)",
              borderRadius: 16,
              animationDelay: `${0.3 + i * 0.07}s`,
            }}
          >
            <p className="font-hei font-bold text-[16px] text-white/90 leading-7 mb-1">
              {s.title}
            </p>
            <p className="text-[16px] leading-7 text-white/70">{s.desc}</p>
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: -28,
                top: -28,
                width: 36,
                height: 36,
                borderRadius: 999,
                background: "#2d2d2d",
                boxShadow:
                  "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 3px 0 #3f3e44",
                transform: "rotate(-20deg)",
              }}
            >
              <span className="font-display italic font-bold text-[12px] text-white leading-none">
                {s.n}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom row — 4 export mockup screenshots overlapping */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 80,
          top: 410,
          width: 766,
          height: 574,
          borderRadius: 12,
          opacity: 0.7,
          animationDelay: "0.6s",
        }}
      >
        <Img
          src={SHOT_1}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 622,
          top: 410,
          width: 312,
          height: 574,
          borderRadius: 12,
          animationDelay: "0.65s",
        }}
      >
        <Img
          src={SHOT_2}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 988,
          top: 410,
          width: 825,
          height: 574,
          borderRadius: 12,
          animationDelay: "0.7s",
        }}
      >
        <Img
          src={SHOT_3}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 1446,
          top: 410,
          width: 697,
          height: 574,
          borderRadius: 12,
          boxShadow: "-4px 0 4px rgba(0,0,0,0.08)",
          animationDelay: "0.75s",
        }}
      >
        <Img
          src={SHOT_4}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Section chip with 02-8 */}
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
            02-8
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v8：加入 HTML 导出，让看板从设计结果走向可落地页面
        </p>
      </div>
    </PageFrame>
  );
}
