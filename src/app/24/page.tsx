import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/* Page 24 — 02-6 v6: 加入收藏功能，让相似业务场景，从重复制作走向资产复用
   Four plugin-screen mockups arranged in a row, each illustrating a
   step of the collect-and-reuse flow (favorite → restore → edit →
   export). Each mockup is an individual image asset; descriptions
   above each card and the bottom caption are real DOM text. */

const STEP_IMG_1 = "/figma/a9c63352-b1a3-48a6-9a14-bdfaaf8afa60.png";
const STEP_IMG_2 = "/figma/0ebbf449-5000-4139-bab6-e0bcb60b10ce.png";
const STEP_IMG_3 = "/figma/be947a2b-5f48-45af-ac7b-da3d34636489.png";
const STEP_IMG_4 = "/figma/b985d4e3-087c-4f5c-a892-4a87f83161c9.png";

const STEPS = [
  { n: "01", title: "收藏常用图表", desc: "沉淀高频业务配置，减少重复制作", src: STEP_IMG_1 },
  { n: "02", title: "恢复原有配置", desc: "回到收藏时的数据配置", src: STEP_IMG_2 },
  { n: "03", title: "二次编辑调整", desc: "针对新场景做小范围修改", src: STEP_IMG_3 },
  { n: "04", title: "再次收藏 / 导出到画布", desc: "保留新版本沉淀，或直接导出当前图表", src: STEP_IMG_4 },
];

export default function Page24() {
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
      {STEPS.map((s, i) => {
        const left = 80 + i * 468;
        return (
          <div key={s.n}>
            <div
              className="absolute anim-fade-up"
              style={{
                left,
                top: 245,
                width: 360,
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
            {/* Mockup screenshot */}
            <div
              className="absolute anim-fade-up overflow-hidden"
              style={{
                left: left - 50,
                top: 373,
                width: 340,
                height: 573,
                borderRadius: 11,
                border: "2px solid #2d2d2d",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                animationDelay: `${0.5 + i * 0.07}s`,
              }}
            >
              <Img
                src={s.src}
                alt=""
                className="block w-full h-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        );
      })}

      {/* Bottom gradient strip + caption */}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 1001,
          width: 1920,
          height: 79,
          background:
            "linear-gradient(263deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 33%, rgba(255,255,255,0.1) 72%, rgba(255,255,255,0) 100%)",
          borderTop: "1px solid rgba(255,255,255,0)",
          borderBottom: "1px solid rgba(255,255,255,0)",
        }}
      />
      <p
        className="absolute font-hei font-bold text-[20px] text-white/90 text-center whitespace-nowrap anim-fade-up"
        style={{
          left: 960,
          top: 1026,
          transform: "translateX(-50%)",
          lineHeight: "24px",
          animationDelay: "1s",
        }}
      >
        收藏页 = 图表资产底层库
      </p>

      {/* Section chip with 02-6 */}
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
            02-6
          </span>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          v6：加入收藏功能，让相似业务场景，从重复制作走向资产复用
        </p>
      </div>
    </PageFrame>
  );
}
