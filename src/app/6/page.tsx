import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

/**
 * The five-column overview: 录入引导 → 长按触发 → 录音反馈 → 实时转写 → 结构化解析.
 * Each column = label + subtitle + phone screenshot, sitting above a row of
 * faint translucent panels with a vertical dashed accent on the left.
 */

const NumberChip = ({ n }: { n: string }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      width: 72,
      height: 72,
      transform: "rotate(-20deg)",
    }}
  >
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 56,
        height: 56,
        background: "#2d2d2d",
        boxShadow:
          "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
      }}
    >
      <span className="font-display italic font-bold text-[24px] text-white">
        {n}
      </span>
    </div>
  </div>
);

const COLUMNS: Array<{
  n: string;
  numLeft: number;
  title: string;
  titleLeft: number;
  subtitle: string;
  subLeft: number;
  phoneLeft: number;
  phoneSrc: string;
  panelLeft: number;
  panelWidth: number;
  colDashLeft: number;
}> = [
  {
    n: "01",
    numLeft: 44,
    title: "录入引导",
    titleLeft: 157,
    subtitle: "从“静态”说明 → “带记忆”的新手教育",
    subLeft: 157,
    phoneLeft: 157,
    phoneSrc: "/figma/f014181c-3e5d-446a-a0ab-be9fbee68192.png",
    panelLeft: 81,
    panelWidth: 353,
    colDashLeft: 77.83,
  },
  {
    n: "02",
    numLeft: 396,
    title: "长按触发",
    titleLeft: 508,
    subtitle: "从“顺滑”交互 → “重新长按”的体验取舍",
    subLeft: 508,
    phoneLeft: 508,
    phoneSrc: "/figma/59aa2095-b010-41e0-a15e-80efaeb42309.png",
    panelLeft: 432,
    panelWidth: 353,
    colDashLeft: 430,
  },
  {
    n: "03",
    numLeft: 750,
    title: "录音反馈",
    titleLeft: 860,
    subtitle: "从“写死”SVG 动画 → “可感知”听写",
    subLeft: 860,
    phoneLeft: 860,
    phoneSrc: "/figma/81a638e2-86b4-438f-bf1b-b24a95eb9b97.png",
    panelLeft: 785,
    panelWidth: 352,
    colDashLeft: 783,
  },
  {
    n: "04",
    numLeft: 1101,
    title: "实时转写",
    titleLeft: 1213,
    subtitle: "从“组件视角” → “共享资源冲突”",
    subLeft: 1213,
    phoneLeft: 1213,
    phoneSrc: "/figma/fc110650-13b5-40bc-9dba-e2a03daf075e.png",
    panelLeft: 1137,
    panelWidth: 353,
    colDashLeft: 1134,
  },
  {
    n: "05",
    numLeft: 1453,
    title: "结构化解析",
    titleLeft: 1564,
    subtitle: "从“一段原话”输入 → “业务字段”输出",
    subLeft: 1564,
    phoneLeft: 1564,
    phoneSrc: "/figma/f729ca82-78d5-42aa-8d1d-1a8c80ce432e.png",
    panelLeft: 1488,
    panelWidth: 353,
    colDashLeft: 1486,
  },
];

const StatChip = ({ children }: { children: React.ReactNode }) => (
  <div
    className="inline-flex items-center rounded-lg px-3 py-1 text-[16px] leading-6 text-white font-hei font-bold"
    style={{
      background: "#2d2d2d",
      boxShadow: "inset 0 1px 1px 0 #5b5a61",
    }}
  >
    {children}
  </div>
);

export default function Page6() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="员工外勤语音填报"
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
              src="/figma/717e5766-0ea5-433f-8227-207d52f4a434.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        }
      />

      {/* Section title with 03 chip */}
      <div
        className="absolute flex items-center gap-5"
        style={{ left: 80, top: 148 }}
      >
        <div className="anim-scale-in" style={{ animationDelay: "0.15s" }}>
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 56,
              height: 56,
              background: "#2d2d2d",
              boxShadow:
                "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
            }}
          >
            <span className="font-display italic font-bold text-[24px] text-white/50">
              03
            </span>
          </div>
        </div>
        <p
          className="font-hei font-bold text-[36px] leading-10 text-white whitespace-nowrap anim-fade-right"
          style={{ animationDelay: "0.25s" }}
        >
          从一句自然表达，到完整的语音链路
        </p>
      </div>

      {/* Top-right note */}
      <p
        className="absolute text-[16px] leading-9 text-white/70 whitespace-nowrap anim-fade-left"
        style={{
          right: 80,
          top: 155,
          animationDelay: "0.3s",
        }}
      >
        作品集篇幅有限，只讲语音填报主路径
      </p>

      {/* Translucent footer panels for each column */}
      {COLUMNS.map((col, i) => (
        <div
          key={`panel-${i}`}
          className="absolute anim-fade-up"
          style={{
            left: col.panelLeft,
            top: 329,
            width: col.panelWidth,
            height: 275,
            background: "rgba(255,255,255,0.05)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            animationDelay: `${0.35 + i * 0.05}s`,
          }}
        />
      ))}
      {/* Outer panels (left/right edges) */}
      <div
        className="absolute anim-fade-up"
        style={{
          left: 0,
          top: 329,
          width: 81,
          height: 275,
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          animationDelay: "0.35s",
        }}
      />
      <div
        className="absolute anim-fade-up"
        style={{
          left: 1841,
          top: 329,
          width: 81,
          height: 275,
          background: "rgba(255,255,255,0.05)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          animationDelay: "0.6s",
        }}
      />

      {/* Vertical dashed/gradient columns (one per phone column) */}
      {COLUMNS.map((col, i) => (
        <Img
          key={`col-${i}`}
          src="/figma/0d12e466-7307-4d86-a1ba-d5ceee382d7c.svg"
          alt=""
          className="absolute anim-fade-in"
          style={{
            left: col.colDashLeft,
            top: 264,
            width: 6,
            height: 816,
            animationDelay: `${0.4 + i * 0.05}s`,
          }}
        />
      ))}

      {/* Tilted number chips above each column */}
      {COLUMNS.map((col, i) => (
        <div
          key={`num-${i}`}
          className="absolute anim-scale-in"
          style={{
            left: col.numLeft,
            top: 305,
            animationDelay: `${0.5 + i * 0.08}s`,
          }}
        >
          <NumberChip n={col.n} />
        </div>
      ))}

      {/* Column titles (录入引导 etc) */}
      {COLUMNS.map((col, i) => (
        <p
          key={`title-${i}`}
          className="absolute font-hei font-bold text-[24px] leading-[38px] text-white whitespace-nowrap anim-fade-up"
          style={{
            left: col.titleLeft,
            top: 378,
            animationDelay: `${0.55 + i * 0.08}s`,
          }}
        >
          {col.title}
        </p>
      ))}

      {/* Column subtitles */}
      {COLUMNS.map((col, i) => (
        <p
          key={`sub-${i}`}
          className="absolute text-[16px] leading-[29px] text-white/70 anim-fade-up"
          style={{
            left: col.subLeft,
            top: 444,
            width: 218,
            animationDelay: `${0.65 + i * 0.08}s`,
          }}
        >
          {col.subtitle}
        </p>
      ))}

      {/* Note under column 5 about the full landscape link */}
      <p
        className="absolute text-[16px] leading-[29px] text-white/70 anim-fade-up"
        style={{
          left: 1564,
          top: 519,
          width: 218,
          animationDelay: `${0.65 + 4 * 0.08 + 0.08}s`,
        }}
      >
        附：全景链路
      </p>

      {/* Phone screenshots — slide up with stagger */}
      {COLUMNS.map((col, i) => (
        <div
          key={`phone-${i}`}
          className="absolute overflow-hidden anim-fade-up"
          style={{
            left: col.phoneLeft,
            top: 566,
            width: 201,
            height: 435,
            borderRadius: 12,
            border: "0.913px solid #cfc1ad",
            animationDelay: `${0.7 + i * 0.1}s`,
          }}
        >
          <Img
            src={col.phoneSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* (StatChip kept so unused-component warnings stay away if tweaked later) */}
      <div className="hidden">
        <StatChip>0</StatChip>
      </div>
    </PageFrame>
  );
}
