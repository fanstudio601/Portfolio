import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 23 — 02-5 v5: 接入 MCP，让外部 AI 按图表规范生成，并在插件内统一接收 */
export default function Page23() {
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

      <div
        className="absolute overflow-hidden anim-fade-up"
        style={{
          left: 0,
          top: 224,
          width: 1920,
          height: 856,
          animationDelay: "0.4s",
        }}
      >
        <Img
          src="/figma/0548dc5c-0625-42ab-9c1a-8b0cd39351fe.png"
          alt="v5 MCP"
          className="block"
          style={{ width: 1920, height: 1080, marginTop: -224 }}
        />
      </div>

      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div
          className="anim-scale-in inline-flex items-center justify-center px-4 py-1.5 rounded-full"
          style={{
            background: "#2d2d2d",
            width: 71,
            height: 56,
            boxShadow:
              "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            animationDelay: "0.1s",
          }}
        >
          <span className="font-display italic font-bold text-[24px] text-white/50">
            02-5
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          v5：接入 MCP，让外部 AI 按图表规范生成，并在插件内统一接收
        </p>
      </div>
    </PageFrame>
  );
}
