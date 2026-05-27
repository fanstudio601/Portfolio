import { DarkPanel } from "@/components/DarkPanel";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
} from "@/components/CaseStudySlide";
import { Img } from "@/components/Img";

const STEPS = [
  {
    n: "01",
    left: 80,
    imageLeft: 90,
    title: "收藏常用图表",
    desc: "沉淀高频业务配置，减少重复制作",
    src: "/figma/figma-page24-favorite.png",
  },
  {
    n: "02",
    left: 548,
    imageLeft: 558,
    title: "恢复原有配置",
    desc: "回到收藏时的数据配置",
    src: "/figma/figma-page24-restore.png",
  },
  {
    n: "03",
    left: 1016,
    imageLeft: 1026,
    title: "二次编辑调整",
    desc: "针对新场景做小范围修改",
    src: "/figma/figma-page24-edit.png",
  },
  {
    n: "04",
    left: 1484,
    imageLeft: 1494,
    title: "再次收藏 / 导出到画布",
    desc: "保留新版本沉淀，或直接导出当前图表",
    src: "/figma/figma-page24-export.png",
  },
];

const ARROWS = [
  {
    src: "/figma/figma-page24-arrow-1.svg",
    left: 328,
    top: 489.18,
    width: 343.46,
    height: 254.78,
    innerWidth: 319.34,
    innerHeight: 217.48,
    imgStyle: {
      left: "-0.92%",
      top: 0,
      width: "102.09%",
      height: "101.47%",
    },
  },
  {
    src: "/figma/figma-page24-arrow-2.svg",
    left: 690.72,
    top: 509.12,
    width: 421.1,
    height: 349.79,
    innerWidth: 386.82,
    innerHeight: 304.92,
    imgStyle: {
      left: "-0.83%",
      top: "-0.73%",
      width: "100.83%",
      height: "101.81%",
    },
  },
  {
    src: "/figma/figma-page24-arrow-3.svg",
    left: 1264.24,
    top: 462,
    width: 486.91,
    height: 298.98,
    innerWidth: 460.53,
    innerHeight: 244.68,
    imgStyle: {
      left: "-0.65%",
      top: 0,
      width: "101.48%",
      height: "101.31%",
    },
  },
];

function LocalBadge({ n, delay }: { n: string; delay: number }) {
  return (
    <div
      className="absolute anim-fade-in"
      style={{
        left: -3.72,
        top: 6,
        width: 36.45,
        height: 36.45,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-[#2d2d2d]"
        style={{
          width: 28.44,
          height: 28.44,
          transform: "rotate(-20deg)",
          boxShadow:
            "inset 0 -2.031px 2.031px 0 rgba(0,0,0,0.25), inset 0 2.031px 2.539px 0 #3f3e44",
        }}
      >
        <span className="font-display text-[12.188px] font-bold italic leading-none text-[#f7f8fa]">
          {n}
        </span>
      </div>
    </div>
  );
}

function InfoCard({
  n,
  title,
  desc,
  left,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  left: number;
  delay: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top: 245,
        width: 360,
        minHeight: 110,
        padding: 24,
        background: "rgba(255,255,255,0.02)",
        border: "0.919px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        animationDelay: `${delay}s`,
      }}
    >
      <LocalBadge n={n} delay={delay + 0.05} />
      <div className="flex flex-col gap-1">
        <p className="font-hei text-[16px] font-bold leading-[29px] text-white/90">
          {title}
        </p>
        <p className="text-[16px] leading-[29px] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function FlowArrow({
  src,
  left,
  top,
  width,
  height,
  innerWidth,
  innerHeight,
  imgStyle,
  delay,
}: (typeof ARROWS)[number] & { delay: number }) {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none anim-fade-in"
      style={{ left, top, width, height, animationDelay: `${delay}s` }}
    >
      <div
        className="relative"
        style={{
          width: innerWidth,
          height: innerHeight,
          transform: "rotate(7deg)",
        }}
      >
        <Img
          src={src}
          alt=""
          className="absolute block max-w-none"
          style={imgStyle}
        />
      </div>
    </div>
  );
}

export default function Page24() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-6"
        title="v6：加入收藏功能，让相似业务场景，从重复制作走向资产复用"
      />

      {STEPS.map((step, index) => (
        <div key={step.n}>
          <InfoCard
            n={step.n}
            left={step.left}
            title={step.title}
            desc={step.desc}
            delay={0.3 + index * 0.08}
          />
          <Screenshot
            src={step.src}
            left={step.imageLeft}
            top={373}
            width={340}
            height={index === 1 ? 567 : 573}
            delay={0.52 + index * 0.08}
            radius={index === 0 ? 10.75 : 12}
            border={index === 0 ? "1.792px solid #2d2d2d" : "2px solid #2d2d2d"}
            shadow="0 4px 24px rgba(0,0,0,0.3)"
            objectFit="cover"
            imgStyle={
              index === 1
                ? {
                    position: "absolute",
                    left: "-0.58%",
                    top: "-0.35%",
                    width: "101.16%",
                    height: "101.06%",
                    objectFit: "fill",
                  }
                : undefined
            }
          />
        </div>
      ))}
      {ARROWS.map((arrow, index) => (
        <FlowArrow key={arrow.src} {...arrow} delay={0.74 + index * 0.08} />
      ))}

      <div
        className="absolute"
        style={{
          left: 0,
          top: 1001,
          width: 1919,
          height: 79,
          borderTop: "1px solid rgba(255,255,255,0)",
          borderBottom: "1px solid rgba(255,255,255,0)",
          background:
            "linear-gradient(263deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 33%, rgba(255,255,255,0.1) 72%, rgba(255,255,255,0) 100%)",
        }}
      />
      <p
        className="absolute font-hei text-[20px] font-bold leading-6 text-white/90 whitespace-nowrap anim-fade-up"
        style={{
          left: 960,
          top: 1026,
          transform: "translateX(-50%)",
          animationDelay: "0.98s",
        }}
      >
        收藏页 = 图表资产底层库
      </p>
    </PageFrame>
  );
}
