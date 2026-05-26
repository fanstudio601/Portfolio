"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Fits the fixed 1920x1080 design canvas into any viewport using CSS transform.
 * Centers via absolute + translate(-50%, -50%) (more reliable than grid centering
 * when the child is larger than the parent and gets scaled down).
 */
export function PageFrame({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 1920,
          height: 1080,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
