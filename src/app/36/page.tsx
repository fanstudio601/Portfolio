import { PageFrame } from "@/components/PageFrame";
import { Stripes } from "@/components/Stripes";
import { DarkPanel } from "@/components/DarkPanel";
import { PageHeader } from "@/components/PageHeader";
import { Img } from "@/components/Img";

const AVATAR = "/figma/b30106d9-557a-4a4c-811e-4d20a09c69c7.png";
const DIVIDER = "/figma/d2e43441-0810-484b-ac6b-26f02898f6b2.svg";

type Tag = {
  label: string;
  left: number;
  top: number;
  width: number;
  rotate: number;
  delay: number;
};

const TAGS: Tag[] = [
  { label: "Paper", left: 766, top: 481, width: 118, rotate: -10, delay: 0.5 },
  { label: "Pencil", left: 653, top: 552, width: 117, rotate: 4.12, delay: 0.58 },
  { label: "Code→Canvas", left: 869, top: 552, width: 212, rotate: 4.12, delay: 0.66 },
  { label: "Stitch", left: 789, top: 616, width: 112, rotate: -4.92, delay: 0.74 },
  { label: "Html→Design", left: 1058, top: 494, width: 209, rotate: 14.26, delay: 0.82 },
  { label: "...", left: 1082, top: 628, width: 75, rotate: 9.56, delay: 0.9 },
];

const TagChip = ({ tag }: { tag: Tag }) => (
  <div
    className="absolute flex items-center justify-center anim-scale-in"
    style={{
      left: tag.left,
      top: tag.top,
      width: tag.width,
      height: 110,
      animationDelay: `${tag.delay}s`,
    }}
  >
    <div style={{ transform: `rotate(${tag.rotate}deg)` }}>
      <div
        className="inline-flex items-center justify-center px-[22px] rounded-[20px]"
        style={{
          height: 58,
          background: "rgba(255,255,255,0.02)",
          border: "0.919px solid rgba(255,255,255,0.2)",
        }}
      >
        <p className="text-[24px] leading-[38px] text-white whitespace-nowrap font-hei">
          {tag.label}
        </p>
      </div>
    </div>
  </div>
);

export default function Page36() {
  return (
    <PageFrame>
      <Stripes coverage="top" />
      <DarkPanel top={101} />

      <PageHeader
        subtitle="AI编程时代，对设计系统的重新理解"
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
            <Img src={AVATAR} alt="" className="w-full h-full object-cover" />
          </div>
        }
      />

      {/* Center title */}
      <p
        className="absolute font-hei font-bold text-[24px] leading-[29px] text-white/90 text-center whitespace-nowrap anim-fade-up"
        style={{
          left: "50%",
          top: 314,
          width: 375,
          transform: "translateX(-50%)",
          animationDelay: "0.25s",
        }}
      >
        更多尝试...不一一列举了🤦🏻‍♀️
      </p>

      {/* Floating tags */}
      {TAGS.map((t) => (
        <TagChip key={t.label} tag={t} />
      ))}

      {/* Bottom "THE END" with dividers */}
      <div
        className="absolute flex gap-6 items-center justify-center anim-fade-up"
        style={{
          left: "50%",
          top: 945,
          width: 1517,
          transform: "translateX(-50%)",
          animationDelay: "1.1s",
        }}
      >
        <div className="flex-1">
          <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        </div>
        <p className="font-display font-bold text-[32px] leading-[42px] text-white/60 text-center whitespace-nowrap">
          THE END
        </p>
        <div className="flex-1">
          <Img src={DIVIDER} alt="" style={{ width: "100%", height: 1 }} />
        </div>
      </div>
    </PageFrame>
  );
}
