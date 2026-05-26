import { ProgressiveBlur } from "./ProgressiveBlur";
import { withBase } from "@/lib/base";

/**
 * The 5-vertical-color-band background used across all pages.
 *
 * - 5 solid 20%-wide bars, slightly oversaturated colors with 85% opacity.
 * - A progressive (gradient) backdrop blur on top so the bands are crisp at the
 *   top edge and gradually melt into dark blur toward the bottom.
 * - A grain texture overlaid with mix-blend-overlay for the painted feel.
 *
 * `coverage`:
 *   - "full" — stripes fill the whole 1080px canvas (cover page).
 *   - "top"  — stripes are only at the top, fading into the dark panel below.
 */
export function Stripes({ coverage = "full" }: { coverage?: "full" | "top" }) {
  const isFull = coverage === "full";
  const stripeHeight = isFull ? 1080 : 300;

  return (
    <div
      className="absolute inset-x-0 top-0 overflow-hidden bg-black"
      style={{ height: isFull ? 1080 : 320 }}
      aria-hidden
    >
      {/* Layer 1: five solid color bars */}
      <div
        className="absolute inset-x-0 top-0 flex opacity-90"
        style={{ height: stripeHeight }}
      >
        <div className="flex-1" style={{ background: "#ff4e16" }} />
        <div className="flex-1" style={{ background: "#ff9643" }} />
        <div className="flex-1" style={{ background: "#ffffff" }} />
        <div className="flex-1" style={{ background: "#e66db3" }} />
        <div className="flex-1" style={{ background: "#b7277c" }} />
      </div>

      {/* Layer 2: progressive blur from top (clear) to bottom (max blur) */}
      <ProgressiveBlur
        direction="to bottom"
        maxBlur={isFull ? 80 : 60}
        className="inset-0"
        style={{ inset: 0 }}
      />

      {/* Layer 3: darkening gradient (deeper at the bottom) */}
      <div
        className="absolute inset-0"
        style={{
          background: isFull
            ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.95) 100%)"
            : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, rgba(16,16,18,0.85) 80%, #101012 100%)",
        }}
      />

      {/* Layer 4: subtle grain texture */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url(${withBase("/figma/ed7d243a-253a-437c-8ba8-33132c4a91f8.png")})`,
          backgroundSize: "1280px 768px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
