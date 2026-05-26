import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 15 — 01-2 组件变体：按分析场景细分不同子类
   Shows a horizontal row of overlapping line-chart variant cards. Each
   card is a separate image asset (downloaded individually from Figma).
   Chrome (header, chip, title) is real DOM text. */

const LINE_CHARTS = [
  "/figma/0b009810-fd00-4464-a632-e427eaf65002.png", // 折线图 1
  "/figma/7db6eb0a-08df-4a86-8741-4ed3e06d1e6d.png", // 折线图 3
  "/figma/ac6526b7-8139-4e45-9eee-b61f5715845d.png", // 折线图 8
  "/figma/4c47496b-8f50-45bf-ab61-f26c3b8f9e82.png", // 折线图 4
  "/figma/d97ddcf4-af11-4a26-ad3f-7a6685809638.png", // 折线图 5
  "/figma/7a813db9-7aa6-4169-8980-ef0ec4059948.png", // 折线图 6
  "/figma/b19bd5c9-d19b-4bad-883a-9f54e21b7c5f.png", // 折线图 7
  "/figma/50972a82-3972-4f7d-882f-658211e22084.png", // 折线图 2
];

export default function Page15() {
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

      {/* Overlapping line chart variant cards. Each card is its own image. */}
      <div
        className="absolute flex items-start anim-fade-up"
        style={{
          left: 80,
          top: 248,
          height: 970,
          animationDelay: "0.4s",
        }}
      >
        {LINE_CHARTS.map((src, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden"
            style={{
              width: 641,
              height: 970,
              marginRight: -481,
              borderRadius: 8,
              boxShadow:
                i === 0
                  ? undefined
                  : "-7px 0 13px 0 rgba(0,0,0,0.09)",
            }}
          >
            <Img
              src={src}
              alt=""
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Section chip */}
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
            01-2
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          组件变体：按分析场景细分不同子类
        </p>
      </div>
    </PageFrame>
  );
}
