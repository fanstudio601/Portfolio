"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Tracks mouse position and exposes it as `--px` and `--py` CSS variables
 * (range -1 to 1, where 0,0 is the viewport center) on the wrapping element.
 *
 * Children with class `parallax-layer` will translate based on these vars.
 * Use per-element `--ix` and `--iy` style props to scale intensity per layer.
 *
 * The effect is smoothed with rAF + lerp so it feels organic, not jittery.
 */
export function MouseParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      // Lerp toward target for smooth follow
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty("--px", currentX.toFixed(4));
      el.style.setProperty("--py", currentY.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
