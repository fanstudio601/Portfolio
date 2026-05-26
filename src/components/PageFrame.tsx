"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fits the fixed 1920x1080 design canvas into any viewport using CSS transform.
 * Measures its OWN bounding box (via ResizeObserver) instead of window dims —
 * that way the mobile-portrait rotation in globals.css just works, because the
 * frame sees the rotated body's box (e.g. 812×375 on an iPhone in portrait)
 * and scales accordingly.
 */
export function PageFrame({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      // Use offsetWidth/Height (layout box, pre-transform) so the scale is
      // correct even when an ancestor (body) is rotated for mobile portrait.
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      setScale(Math.min(width / 1920, height / 1080));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    const onOrient = () => requestAnimationFrame(compute);
    window.addEventListener("orientationchange", onOrient);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", onOrient);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 bg-black overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 1920,
          height: 1080,
          overflow: "hidden",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
