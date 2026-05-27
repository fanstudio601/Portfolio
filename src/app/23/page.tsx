import type { CSSProperties } from "react";

import { DarkPanel } from "@/components/DarkPanel";
import { Img } from "@/components/Img";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import {
  PortfolioHeader,
  Screenshot,
  SectionTitle,
} from "@/components/CaseStudySlide";

const TRAE_SMALL = "/figma/figma-page23-trae-small.png";
const MCP_CHAT = "/figma/figma-page23-mcp-chat.png";
const BUILDER_SCREEN = "/figma/figma-page23-builder.png";
const PLUGIN_LIST = "/figma/figma-page23-plugin-list.png";
const POPUP = "/figma/figma-page23-popup.png";
const CARD_ARROW = "/figma/figma-page23-card-arrow.svg";

const CODE_LINES = [
  "theme: 'light',",
  "useCustomColors: false,",
  "customUIColors: {",
  "  containerBg: '#FFFFFF',",
  "  containerBorder: '#FFFFFF',",
  "  titleText: '#1C1F23',",
  "  axisTitleText: '#86909C',",
  "  xAxisLabelText: '#1C1F23',",
  "  yAxisLabelText: '#86909C',",
  "  gridLine: '#E5E6EB',",
  "  axisLine: '#1C1F23',",
  "  legendText: '#1C1F23',",
  "  indicatorBg: '#FFFFFF',",
  "  chartAreaBg: '#FFFFFF',",
  "  indicatorLabelText: '#86909C',",
  "  indicatorCategoryText: '#1C1F23',",
  "  indicatorValueText: '#006EF9'",
  "},",
  "opacitySettings: {",
  "  container: 70,",
  "  indicator: 100,",
  "  chartArea: 100",
  "}",
];

const TOP_CARDS = [
  {
    n: "01",
    left: 67,
    title: "通过 MCP，把“聊业务”放到外部",
    desc: "围绕业务完成分析，并按插件规范生成图表配置",
  },
  {
    n: "02",
    left: 563,
    title: "把图表结果，批量发送到插件",
    desc: "结果统一接收到，插件列表集中管理",
  },
  {
    n: "03",
    left: 1059,
    title: "回到插件后，可二次编辑",
    desc: "可基于原结果修改数据，也支持重置",
  },
];

const CONNECTORS = [
  {
    src: "/figma/figma-page23-arrow-chat.svg",
    left: 154.56,
    top: 458.16,
    width: 131.24,
    height: 104.26,
    innerWidth: 121.15,
    innerHeight: 90.17,
    transform: "scaleY(-1) rotate(173deg)",
    imgStyle: {
      left: "-2.64%",
      top: "-3.35%",
      width: "103.14%",
      height: "103.35%",
    },
  },
  {
    src: "/figma/figma-page23-vertical-line.svg",
    left: 452,
    top: 660,
    width: 10,
    height: 219,
    innerWidth: 10,
    innerHeight: 219,
    transform: "none",
    imgStyle: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
  },
  {
    src: "/figma/figma-page23-arrow-to-builder.svg",
    left: 456.72,
    top: 599.76,
    width: 160.78,
    height: 183.02,
    innerWidth: 141.48,
    innerHeight: 167.03,
    transform: "rotate(7deg)",
    imgStyle: {
      left: "-2.26%",
      top: "-1.55%",
      width: "102.26%",
      height: "103.47%",
    },
  },
  {
    src: "/figma/figma-page23-arrow-to-list.svg",
    left: 912.5,
    top: 628,
    width: 202,
    height: 48.87,
    innerWidth: 200.49,
    innerHeight: 24.62,
    transform: "rotate(7deg)",
    imgStyle: {
      left: "-1.6%",
      top: "-11%",
      width: "101.6%",
      height: "124%",
    },
  },
];

const IMAGE_CROPS = {
  trae: {
    position: "absolute",
    left: "-6.56%",
    top: "-30.99%",
    width: "111.28%",
    height: "167.6%",
    objectFit: "fill",
  },
  chat: {
    position: "absolute",
    left: "-0.08%",
    top: 0,
    width: "126.59%",
    height: "100%",
    objectFit: "fill",
  },
  popup: {
    position: "absolute",
    left: "-11.37%",
    top: "-22.68%",
    width: "111.37%",
    height: "124.11%",
    objectFit: "fill",
  },
} satisfies Record<string, CSSProperties>;

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
        top: 249,
        width: 405,
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

function CardArrow({ left }: { left: number }) {
  return (
    <Img
      src={CARD_ARROW}
      alt=""
      className="absolute block anim-fade-in"
      style={{
        left,
        top: 296.11,
        width: 61.5,
        height: 5.77,
        animationDelay: "0.55s",
      }}
    />
  );
}

function Connector({
  src,
  left,
  top,
  width,
  height,
  innerWidth,
  innerHeight,
  transform,
  imgStyle,
  delay,
}: (typeof CONNECTORS)[number] & { delay: number }) {
  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none anim-fade-in"
      style={{ left, top, width, height, animationDelay: `${delay}s` }}
    >
      <div
        className="relative"
        style={{ width: innerWidth, height: innerHeight, transform }}
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

export default function Page23() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />
      <PortfolioHeader />
      <SectionTitle
        section="02-5"
        title="v5：接入 MCP，让外部 AI 按图表规范生成，并在插件内统一接收"
      />

      {TOP_CARDS.map((card, index) => (
        <InfoCard
          key={card.n}
          {...card}
          delay={0.3 + index * 0.08}
        />
      ))}
      <CardArrow left={487} />
      <CardArrow left={983} />

      <p
        className="absolute text-[14px] leading-6 text-white/70 anim-fade-up"
        style={{ left: 365, top: 413, width: 108, animationDelay: "0.58s" }}
      >
        Tools：
        <br />
        1.列出支持的图表
        <br />
        2.按格式生成
      </p>

      <Screenshot
        src={TRAE_SMALL}
        left={67}
        top={375}
        width={284}
        height={115}
        delay={0.58}
        radius={9}
        shadow="-4px 0 4px rgba(0,0,0,0.08)"
        objectFit="fill"
        imgStyle={IMAGE_CROPS.trae}
      />
      <Screenshot
        src={MCP_CHAT}
        left={67}
        top={510}
        width={373}
        height={621.43}
        delay={0.66}
        radius={9}
        objectFit="fill"
        imgStyle={IMAGE_CROPS.chat}
      />
      <Screenshot
        src={POPUP}
        left={232}
        top={510}
        width={255}
        height={113}
        delay={0.72}
        radius={9}
        shadow="0 8px 24px rgba(0,0,0,0.18)"
        objectFit="fill"
        imgStyle={IMAGE_CROPS.popup}
      />
      {CONNECTORS.map((connector, index) => (
        <Connector
          key={connector.src}
          {...connector}
          delay={0.72 + index * 0.06}
        />
      ))}
      <Screenshot
        src={BUILDER_SCREEN}
        left={568}
        top={375}
        width={396}
        height={667}
        delay={0.72}
        radius={12}
        border="2px solid #2d2d2d"
        objectFit="fill"
      />
      <Screenshot
        src={PLUGIN_LIST}
        left={1064}
        top={375}
        width={396}
        height={667}
        delay={0.8}
        radius={12}
        border="2px solid #2d2d2d"
        objectFit="fill"
      />

      <div
        className="absolute bg-black anim-fade-up"
        style={{
          left: 1536,
          top: 250,
          width: 384,
          height: 830,
          borderTopLeftRadius: 20,
          boxShadow: "inset 3px 3px 3px 0 #2d2d2d",
          animationDelay: "0.52s",
        }}
      />
      <div
        className="absolute flex items-center gap-1 rounded-br-[20px] rounded-tl-[20px] bg-[#2d2d2d] anim-fade-up"
        style={{
          left: 1536,
          top: 250,
          width: 337,
          height: 43,
          paddingLeft: 33,
          paddingRight: 20,
          boxShadow: "inset 0 1px 1px 0 #5b5a61",
          animationDelay: "0.6s",
        }}
      >
        <span className="text-[18px] leading-none">📃</span>
        <span className="font-hei text-[18px] font-bold leading-none text-white">
          统一配置协议，约束外部 AI 生成
        </span>
      </div>
      <p
        className="absolute text-[16px] leading-[29px] text-white/70 anim-fade-up"
        style={{ left: 1569, top: 319, width: 328, animationDelay: "0.66s" }}
      >
        预先定义图表配置结构、样式字段和默认规则，限制外部 AI 的输出范围，让生成结果符合插件需求并可进入统一渲染流程。
      </p>
      <p
        className="absolute font-mono text-[16px] font-bold leading-[29px] text-white/80 anim-fade-up"
        style={{ left: 1569, top: 442, animationDelay: "0.72s" }}
      >
        mcp-server-cloud.js 👇
      </p>
      <div
        className="absolute font-mono text-[14px] leading-6 text-white/70 anim-fade-up"
        style={{ left: 1569, top: 480, animationDelay: "0.78s" }}
      >
        {CODE_LINES.map((line) => (
          <p key={line} className="whitespace-pre">
            {line}
          </p>
        ))}
      </div>
    </PageFrame>
  );
}
