import type { CSSProperties, ReactNode } from "react";

import { Img } from "@/components/Img";
import { PageHeader } from "@/components/PageHeader";

const AVATAR = "/figma/case-avatar.png";

export function PortfolioHeader() {
  return (
    <PageHeader
      subtitle="图表组件库与Figma看板插件"
      right={
        <div
          className="overflow-hidden rounded-full anim-fade-down"
          style={{
            width: 36,
            height: 36,
            border: "2px solid rgba(255,255,255,0.5)",
            animationDelay: "0.1s",
          }}
        >
          <Img src={AVATAR} alt="" className="h-full w-full object-cover" />
        </div>
      }
    />
  );
}

export function SectionTitle({
  section,
  title,
}: {
  section: string;
  title: string;
}) {
  return (
    <div className="absolute flex items-center gap-5" style={{ left: 80, top: 148 }}>
      <div
        className="inline-flex items-center justify-center rounded-full px-5 py-1.5 anim-scale-in"
        style={{
          height: 56,
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
          animationDelay: "0.1s",
        }}
      >
        <span className="font-display text-[24px] font-bold italic leading-none text-white/50 whitespace-nowrap">
          {section}
        </span>
      </div>
      <p
        className="font-hei text-[36px] font-bold leading-10 text-white whitespace-nowrap anim-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        {title}
      </p>
    </div>
  );
}

export function NumberBadge({
  n,
  left,
  top,
  size = 36,
  fontSize = 12,
  delay,
}: {
  n: string;
  left: number;
  top: number;
  size?: number;
  fontSize?: number;
  delay?: number;
}) {
  return (
    <div
      className="absolute flex items-center justify-center anim-fade-in"
      style={{
        left,
        top,
        width: size,
        height: size,
        animationDelay: delay ? `${delay}s` : undefined,
      }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-[#2d2d2d]"
        style={{
          width: 28.5,
          height: 28.5,
          transform: "rotate(-20deg)",
          boxShadow:
            "inset 0 -2px 2px 0 rgba(0,0,0,0.25), inset 0 2px 2.5px 0 #3f3e44",
        }}
      >
        <span
          className="font-display font-bold italic leading-none text-[#f7f8fa]"
          style={{ fontSize }}
        >
          {n}
        </span>
      </div>
    </div>
  );
}

export function StepCard({
  n,
  title,
  desc,
  left,
  top,
  width,
  delay,
  height,
}: {
  n: string;
  title: string;
  desc: string;
  left: number;
  top: number;
  width: number;
  delay: number;
  height?: number;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top,
        width,
        minHeight: height,
        padding: 24,
        background: "rgba(255,255,255,0.02)",
        border: "0.9px solid rgba(255,255,255,0.2)",
        borderRadius: 16,
        animationDelay: `${delay}s`,
      }}
    >
      <p className="mb-1 font-hei text-[16px] font-bold leading-7 text-white/90">
        {title}
      </p>
      <p className="text-[16px] leading-7 text-white/70">{desc}</p>
      <NumberBadge n={n} left={-18} top={-18} delay={delay + 0.05} />
    </div>
  );
}

export function PanelLabel({
  left,
  top,
  children,
  delay,
  pill = false,
}: {
  left: number;
  top: number;
  children: ReactNode;
  delay: number;
  pill?: boolean;
}) {
  return (
    <div
      className="absolute inline-flex items-center anim-fade-up"
      style={{
        left,
        top,
        padding: pill ? "8px 16px" : "9px 16px",
        borderRadius: pill ? 999 : 8,
        background: "#2d2d2d",
        boxShadow: pill
          ? "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 2px 5px 0 #3f3e44"
          : "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${delay}s`,
      }}
    >
      <span className="font-hei text-[16px] font-bold leading-none text-white">
        {children}
      </span>
    </div>
  );
}

export function Screenshot({
  src,
  left,
  top,
  width,
  height,
  delay,
  radius = 12,
  border,
  opacity,
  objectFit = "cover",
  objectPosition = "top",
  shadow,
  imgStyle,
  className,
}: {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  radius?: number;
  border?: string;
  opacity?: number;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: CSSProperties["objectPosition"];
  shadow?: string;
  imgStyle?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`absolute overflow-hidden anim-fade-up ${className ?? ""}`}
      style={{
        left,
        top,
        width,
        height,
        borderRadius: radius,
        border,
        opacity,
        boxShadow: shadow,
        animationDelay: `${delay}s`,
      }}
    >
      <Img
        src={src}
        alt=""
        className="block h-full w-full"
        style={{ objectFit, objectPosition, ...imgStyle }}
      />
    </div>
  );
}

export function PanelShell({
  left,
  top,
  width,
  height,
  delay,
  radius = 16,
  children,
  background = "rgba(255,255,255,0.02)",
  border = "1px solid rgba(255,255,255,0.2)",
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  radius?: number;
  children?: ReactNode;
  background?: string;
  border?: string;
}) {
  return (
    <div
      className="absolute anim-fade-up"
      style={{
        left,
        top,
        width,
        height,
        borderRadius: radius,
        background,
        border,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function SimpleArrow({
  left,
  top,
  width,
  height,
  delay,
  flip = false,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  flip?: boolean;
}) {
  return (
    <svg
      className="absolute anim-fade-in"
      style={{
        left,
        top,
        width,
        height,
        transform: flip ? "scaleX(-1)" : undefined,
        animationDelay: `${delay}s`,
      }}
      viewBox="0 0 120 420"
      fill="none"
    >
      <path
        d="M29 8C105 70 105 176 60 228C22 272 21 340 96 404"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M98 404L78 398M98 404L91 383"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
