import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 22 — 02-4 v4: 加入 AI 生成，让图表基于真实数值更快生成
   Left column: manual entry mockup. Right column: 3 AI-flow mockups
   side by side (DeepSeek setup → prompt → generated chart). All mockup
   screenshots are individual image assets; text is real DOM. */

const MANUAL_PANEL = "/figma/f5f59ce5-af3f-42bb-8430-e1ed4259e565.png"; // empty / API setup
const AI_PROMPT = "/figma/573971df-9f5b-40b7-9501-6875568524ac.png"; // prompt + result
const AI_DATA = "/figma/5aed77e4-47f5-40c7-9cec-637b64d81345.png"; // generated data
const LOGO = "/figma/c0aec573-9eef-405e-8223-b745dfd96a6c.png";

export default function Page22() {
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

      {/* Left "从人工录入" column header chip */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 80, top: 257, animationDelay: "0.3s" }}
      >
        <p className="font-hei font-bold text-[16px] text-white/90 leading-7 whitespace-nowrap">
          从人工录入，复杂内容很难成型
        </p>
        <p className="text-[14px] leading-6 text-white/70 mt-1 whitespace-nowrap">
          复杂内容需重复录入，繁琐易错。
        </p>
      </div>

      {/* Left mockup screenshot */}
      <div
        className="absolute anim-fade-up overflow-hidden"
        style={{
          left: 105,
          top: 360,
          width: 380,
          height: 600,
          borderRadius: 16,
          border: "1px solid #2d2d2d",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          animationDelay: "0.5s",
        }}
      >
        <Img
          src={MANUAL_PANEL}
          alt=""
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Bottom-left logo note */}
      <div
        className="absolute flex items-center gap-3 anim-fade-up"
        style={{ left: 110, top: 975, animationDelay: "0.6s" }}
      >
        <div className="w-9 h-9 rounded-md overflow-hidden">
          <Img src={LOGO} alt="" className="w-full h-full" />
        </div>
        <p className="text-[14px] text-white/70 whitespace-nowrap">
          即图 InstaChart
        </p>
      </div>

      {/* Big divider arrow */}
      <div
        className="absolute anim-fade-in"
        style={{ left: 545, top: 600, animationDelay: "0.7s" }}
      >
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path
            d="M0 20H70M70 20L55 5M70 20L55 35"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Right "从AI 入口" column header */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 685, top: 257, animationDelay: "0.4s" }}
      >
        <p className="font-hei font-bold text-[16px] text-white/90 leading-7 whitespace-nowrap">
          从AI 入口，复杂内容也能快速生成
        </p>
        <p className="text-[14px] leading-6 text-white/70 mt-1 whitespace-nowrap">
          通过自然语言描述需求，AI按规范自动生成可用图表配置。
        </p>
      </div>

      {/* AI prompt callout (right of mockups) */}
      <div
        className="absolute anim-fade-up"
        style={{ left: 705, top: 460, animationDelay: "0.55s" }}
      >
        <div
          className="inline-flex flex-col px-4 py-3 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.15)",
            maxWidth: 380,
          }}
        >
          <p className="text-[14px] leading-6 text-white/90">
            生成一个&quot;各部门月度收支余统计&quot;的分组柱形图，部门包括：
          </p>
          <p className="text-[14px] leading-6 text-white/90">
            销售部、产品部、运营部、市场部、客服部、技术部
          </p>
        </div>
      </div>

      {/* 3 AI flow mockups */}
      {[
        { src: MANUAL_PANEL, left: 740, delay: 0.65 },
        { src: AI_PROMPT, left: 1130, delay: 0.72 },
        { src: AI_DATA, left: 1480, delay: 0.79 },
      ].map((m, i) => (
        <div
          key={i}
          className="absolute anim-fade-up overflow-hidden"
          style={{
            left: m.left,
            top: 380,
            width: 360,
            height: 620,
            borderRadius: 16,
            border: "1px solid #2d2d2d",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            animationDelay: `${m.delay}s`,
          }}
        >
          <Img
            src={m.src}
            alt=""
            className="block w-full h-full"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      ))}

      {/* Section chip with 02-4 */}
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
            02-4
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v4：加入 AI 生成，让图表基于真实数值更快生成
        </p>
      </div>
    </PageFrame>
  );
}
