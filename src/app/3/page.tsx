import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const PHONE_IMAGES_TOP = [
  "/figma/21d808b1-16d3-4e01-bac0-db3f3fc13641.png",
  "/figma/ae1378fa-0f09-43c1-9006-97ce6bf88c57.png",
  "/figma/1b7b7b91-7d51-4310-ae98-41406323c3d0.png",
  "/figma/ad445eae-e6ff-4fad-b1c7-790e4693c51b.png",
  "/figma/ab205bd3-647d-4ff5-b092-be3d6ad294f2.png",
  "/figma/ab205bd3-647d-4ff5-b092-be3d6ad294f2.png",
  "/figma/cc0a5630-0016-46ce-9989-6d4df2045777.png",
];

const PHONE_IMAGES_BOTTOM = [
  "/figma/cc0a5630-0016-46ce-9989-6d4df2045777.png",
  "/figma/ab205bd3-647d-4ff5-b092-be3d6ad294f2.png",
  "/figma/df4a012f-adf0-4b6a-b6e4-29d3b500f73b.png",
  "/figma/a0d6027d-821f-4b19-bcde-9485b99b787b.png",
  "/figma/cc0a5630-0016-46ce-9989-6d4df2045777.png",
];

const PhoneRow = ({ images, top }: { images: string[]; top: number }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{ left: 935, top, width: 1636, height: 610 }}
  >
    <div style={{ transform: "skewX(-5deg) rotate(3deg)" }}>
      <div className="flex gap-[17px] items-center" style={{ height: 533 }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden shrink-0"
            style={{
              width: 246,
              height: 533,
              borderRadius: 16,
              border: "1px solid #cfc1ad",
            }}
          >
            <Img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NumberedStep = ({
  n,
  text,
}: {
  n: number;
  text: string;
}) => (
  <div
    className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid #28282a",
    }}
  >
    <span className="font-display italic font-bold text-[16px] text-white/50">
      {n}.
    </span>
    <span className="text-[18px] leading-[26px] text-white/90">{text}</span>
  </div>
);

const Arrow = () => (
  <div
    className="w-10 h-px shrink-0"
    style={{ background: "rgba(255,255,255,0.3)" }}
  />
);

export default function Page3() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="员工外勤语音填报"
        right={
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 36,
              height: 36,
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            <Img
              src="/figma/da1f3c63-583b-41b2-a8aa-0018f465caea.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Phone rows (decorative, behind text-ish but starting from canvas) */}
      <PhoneRow images={PHONE_IMAGES_TOP} top={127} />
      <PhoneRow images={PHONE_IMAGES_BOTTOM} top={676} />

      {/* Section tag */}
      <div className="absolute" style={{ left: 80, top: 157 }}>
        <div
          className="inline-flex items-center rounded-lg px-3 py-1 text-[16px] leading-6 text-white font-hei font-bold"
          style={{
            background: "#2d2d2d",
            boxShadow: "inset 0 1px 1px 0 #5b5a61",
          }}
        >
          0-1 全链路产品落地
        </div>
      </div>

      {/* Project title with logo */}
      <div
        className="absolute flex items-center"
        style={{ left: 71, top: 278 }}
      >
        <div className="w-12 h-12">
          <Img
            src="/figma/1e485ff5-ac7e-48f0-9edb-b9c29397ef28.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-hei font-bold text-[32px] leading-[78px] text-white">
          外勤语音填报项目
        </p>
      </div>

      {/* Big title */}
      <h1
        className="absolute font-hei font-bold text-white whitespace-nowrap"
        style={{ left: 79, top: 372, fontSize: 73, lineHeight: "78px" }}
      >
        我会怎么讲？
      </h1>

      {/* Accent line under title */}
      <div
        className="absolute h-[15px]"
        style={{
          left: 80,
          top: 502,
          width: 600,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.2), transparent)",
        }}
      />

      {/* Bullet points */}
      <div className="absolute flex items-center gap-2" style={{ left: 80, top: 569 }}>
        <div className="w-8 h-8 flex items-center justify-center text-white/70">
          ✕
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          我不会按照传统设计作品来讲，也不会只把它讲成一个开发项目
        </p>
      </div>
      <div className="absolute flex items-center gap-2" style={{ left: 80, top: 617 }}>
        <div className="w-8 h-8 flex items-center justify-center text-white/70">
          ✓
        </div>
        <p className="text-[20px] leading-9 text-white/80">
          我更想讲的是，一个
          <span className="font-hei font-bold text-[24px] text-white">
            “桥”
          </span>
        </p>
      </div>

      {/* Description */}
      <div
        className="absolute font-hei font-bold text-[24px] text-white whitespace-nowrap"
        style={{ left: 85, top: 694, lineHeight: "44px" }}
      >
        <p>作为一名设计师，我是如何借助 AI Coding，</p>
        <p>从工作需求出发，完成从 Idea → 开发实现 → 最终落地。</p>
      </div>

      {/* Roadmap */}
      <div
        className="absolute flex flex-col gap-5"
        style={{ left: 85, top: 905, width: 787 }}
      >
        <p className="text-[18px] leading-9 text-white/70">
          所以，后面的内容，我会按照这条顺序来讲：
        </p>
        <div className="flex gap-2 items-center">
          <NumberedStep n={1} text="日常工作里发现问题" />
          <Arrow />
          <NumberedStep n={2} text=" 整个工具的开发流程" />
          <Arrow />
          <NumberedStep n={3} text="语音核心链路的具体落地" />
        </div>
      </div>
    </PageFrame>
  );
}
