import type { ReactNode } from "react";
import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/case-avatar.png";
const PLUGIN_CONFIG = "/figma/figma-page19-plugin-config.png";
const PLUGIN_DATA = "/figma/figma-page19-plugin-data.png";

const chartValues = [1250, 980, 750, 1120];
const chartLabels = ["1月", "2月", "3月", "4月"];
const yTicks = [2500, 2000, 1500, 1000, 500, 0];

const leftLabels = [
  { n: 1, label: "月度项目...", x: 754, y: 384, width: 116 },
  { n: 2, label: "柱形图", x: 754, y: 455, width: 116 },
  { n: 3, label: "金额", x: 754, y: 522, width: 116 },
  { n: 4, label: "万元", x: 754, y: 585, width: 116 },
  { n: 5, label: "2500", x: 754, y: 646, width: 116 },
  { n: 6, label: "1月、2月", x: 754, y: 761, width: 116 },
  { n: 7, label: "柱形高度", x: 754, y: 872, width: 116 },
];

const paramLabels = [
  { n: 1, label: "图表标题", y: 383 },
  { n: 2, label: "图表类型", y: 456 },
  { n: 3, label: "Y轴标题", y: 530 },
  { n: 4, label: "Y轴单位", y: 604 },
  { n: 5, label: "Y轴标签", y: 678 },
  { n: 6, label: "X轴标签", y: 752 },
  { n: 7, label: "标签名称", y: 826 },
  { n: 8, label: "数据数值", y: 900 },
];

function SectionTitle() {
  return (
    <div className="absolute flex items-center gap-5" style={{ left: 80, top: 148 }}>
      <div
        className="inline-flex h-14 items-center justify-center rounded-full px-4 py-1.5 anim-scale-in"
        style={{
          background: "#2d2d2d",
          boxShadow:
            "inset 0 -4px 4px 0 rgba(0,0,0,0.25), inset 0 4px 5px 0 #3f3e44",
          animationDelay: "0.12s",
        }}
      >
        <span className="font-display text-[24px] font-bold italic leading-none text-white/50">
          02-1
        </span>
      </div>
      <p
        className="font-hei text-[36px] font-bold leading-10 text-white anim-fade-right"
        style={{ animationDelay: "0.22s" }}
      >
        v1：MVP开发，从图表组件构成 → 插件配置项
      </p>
    </div>
  );
}

function SmallChip({ children, left, top }: { children: ReactNode; left: number; top: number }) {
  return (
    <div
      className="absolute inline-flex items-center justify-center rounded-lg px-4 py-[9px] anim-fade-up"
      style={{
        left,
        top,
        background: "#2d2d2d",
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: "0.32s",
      }}
    >
      <span className="whitespace-nowrap text-[16px] leading-none text-[#f7f8fa]">
        {children}
      </span>
    </div>
  );
}

function NumberPill({
  n,
  label,
  left,
  top,
  width,
}: {
  n: number;
  label: string;
  left: number;
  top: number;
  width: number;
}) {
  return (
    <div
      className="absolute flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#2d2d2d] px-4 py-0.5 anim-fade-up"
      style={{
        left,
        top,
        width,
        boxShadow: "inset 0 1px 1px 0 #5b5a61",
        animationDelay: `${0.52 + n * 0.035}s`,
      }}
    >
      <span className="font-display text-[16px] font-bold italic leading-none text-white/50">
        {n}
      </span>
      <span className="font-hei whitespace-nowrap text-[16px] font-bold leading-[38px] text-white">
        {label}
      </span>
    </div>
  );
}

function Marker({
  n,
  left,
  top,
  rotate = 0,
}: {
  n: number;
  left: number;
  top: number;
  rotate?: number;
}) {
  return (
    <div
      className="absolute z-20 flex size-5 items-center justify-center rounded-[4px] bg-[#2d2d2d] text-center font-display text-[13px] font-bold italic leading-none text-white shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
      style={{ left, top, transform: `rotate(${rotate}deg)` }}
    >
      <span style={{ transform: `rotate(${-rotate}deg)` }}>{n}</span>
    </div>
  );
}

function ChartCard() {
  return (
    <div
      className="absolute rounded-xl bg-white p-4 anim-fade-up"
      style={{ left: 112, top: 505, width: 538, height: 306, animationDelay: "0.42s" }}
    >
      <p className="text-[16px] font-medium leading-6 text-[#1d2129]">
        月度项目收款统计
      </p>
      <div className="mt-5 flex h-[226px]">
        <div className="flex w-5 items-center justify-center">
          <p className="-rotate-90 whitespace-nowrap text-center text-[12px] leading-5 text-[#86909c]">
            金额(万元)
          </p>
        </div>
        <div className="flex w-[44px] flex-col justify-between pb-6 pr-1 text-right text-[12px] leading-5 text-[#86909c]">
          {yTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
        <div className="relative h-full flex-1">
          <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between">
            {yTicks.map((tick) => (
              <span
                key={tick}
                className="block h-px w-full border-t border-dashed border-[#e5e6eb]"
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-6 h-px bg-[#1d2129]" />
          <div className="absolute inset-x-0 top-0 bottom-6 flex items-end">
            {chartValues.map((value, index) => (
              <div key={chartLabels[index]} className="flex h-full flex-1 items-end justify-center px-[23px]">
                <span
                  className="block w-full bg-[#165dff]"
                  style={{ height: `${(value / 2500) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-6 items-start pt-1 text-center text-[12px] leading-5 text-[#272e3b]">
            {chartLabels.map((label) => (
              <span key={label} className="flex-1">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectorLines() {
  return (
    <svg
      className="absolute left-0 top-0 pointer-events-none anim-fade-in"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      style={{ animationDelay: "0.7s" }}
      aria-hidden
    >
      <g stroke="#4e4e4e" strokeWidth="1.2" strokeDasharray="4 4">
        <path d="M194 499L194 401L750 401" />
        <path d="M517 741L517 899L750 899" />
        <path d="M360 703.5L360 473L750 473" />
        <path d="M99 650.5H88V448H699.3V545H750" />
        <path d="M99 688H88V448H699.3V617H750" />
        <path d="M132 567H88V448H699.3V690H750" />
        <path d="M251 800.8V846H691.5V794H750" />
      </g>
      <g stroke="#165dff" strokeWidth="1">
        <path d="M502 694H512" />
        <path d="M507 694V771" strokeDasharray="2 2" />
        <path d="M502 771H512" />
      </g>
      <g fill="#d9d9d9" opacity="0.1">
        <path d="M991.547 647L1015.093 677.274L991.547 663.621L968 677.274L991.547 647Z" />
        <path d="M970.94 653L988.881 675.425L970.94 665.312L953 675.425L970.94 653Z" />
        <path d="M951.577 656L966.153 672.819L951.577 665.234L937 672.819L951.577 656Z" />
      </g>
    </svg>
  );
}

function PluginShot({
  src,
  left,
  width,
  delay,
}: {
  src: string;
  left: number;
  width: number;
  delay: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-xl border-[3px] border-[#2d2d2d] anim-fade-up"
      style={{ left, top: 339, width, height: 661, animationDelay: `${delay}s` }}
    >
      <Img src={src} alt="" className="block h-full w-full object-cover object-top" />
    </div>
  );
}

function ScreenshotMarkers() {
  return (
    <>
      <Marker n={1} left={1295} top={421} rotate={30} />
      <Marker n={2} left={1294} top={486} rotate={30} />
      <Marker n={3} left={1294} top={643} rotate={30} />
      <Marker n={5} left={1293} top={539} rotate={30} />
      <Marker n={6} left={1687} top={463} rotate={30} />
      <Marker n={7} left={1871} top={463} rotate={30} />
      <Marker n={4} left={1463} top={643} rotate={30} />
    </>
  );
}

export default function Page19() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

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

      <SectionTitle />

      <div
        className="absolute rounded-br-2xl rounded-tr-2xl border-y border-r border-white/20 bg-white/[0.02] anim-fade-up"
        style={{ left: 0, top: 271, width: 900, height: 775, animationDelay: "0.24s" }}
      />
      <div
        className="absolute rounded-bl-2xl rounded-tl-2xl border-y border-l border-white/20 bg-white/[0.02] anim-fade-up"
        style={{ left: 1020, top: 271, width: 900, height: 775, animationDelay: "0.28s" }}
      />

      <SmallChip left={404} top={253}>基础柱形图</SmallChip>
      <SmallChip left={1408} top={253}>插件配置参数</SmallChip>

      <ChartCard />
      <ConnectorLines />
      {leftLabels.map((item) => (
        <NumberPill
          key={`${item.n}-${item.label}`}
          n={item.n}
          label={item.label}
          left={item.x}
          top={item.y}
          width={item.width}
        />
      ))}

      {paramLabels.map((item) => (
        <NumberPill
          key={item.n}
          n={item.n}
          label={item.label}
          left={1050}
          top={item.y}
          width={115}
        />
      ))}

      <PluginShot src={PLUGIN_CONFIG} left={1203} width={394} delay={0.54} />
      <PluginShot src={PLUGIN_DATA} left={1607} width={392} delay={0.62} />

      <Marker n={1} left={183} top={508} />
      <Marker n={2} left={350} top={713} />
      <Marker n={7} left={507} top={710} rotate={33} />
      <Marker n={6} left={241} top={756} />
      <Marker n={3} left={106} top={674} rotate={-45} />
      <Marker n={4} left={106} top={636} rotate={-45} />
      <Marker n={5} left={136} top={548} rotate={-40} />
      <ScreenshotMarkers />
    </PageFrame>
  );
}
