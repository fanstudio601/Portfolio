import { Img } from "./Img";

/**
 * The handwritten "嗨，我是范云云" signature with leading 👋 emoji.
 *
 * The Figma source uses a large sprite image (1728x2304) and crops to the
 * middle portion where the signature is drawn. We replicate that crop and
 * rotate the result by 5.2° to match the design.
 */
export function Signature({
  x,
  y,
}: {
  x: number;
  y: number;
}) {
  // Container size in design units
  const w = 345.755;
  const h = 125.15;

  return (
    <div
      className="absolute"
      style={{ left: x, top: y, width: w, height: h }}
    >
      {/* 👋 sits at the left of the signature, not rotated */}
      <div
        className="absolute z-10 text-[40px] leading-[44px] select-none"
        style={{ left: 11, top: 32, fontFamily: "system-ui, sans-serif" }}
      >
        👋
      </div>

      {/* Rotated signature image with sprite crop */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotate(5.2deg)" }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: 338.551, height: 94.85 }}
        >
          <Img
            alt="嗨，我是范云云"
            src="/figma/82a98a45-4fe6-4ef0-96e4-f7ca009d4a6e.png"
            className="absolute max-w-none"
            style={{
              width: "106.63%",
              height: "507.5%",
              left: 0,
              top: "-197.36%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
