/**
 * Progressive backdrop blur — blur amount ramps from 0 at one edge to `maxBlur`
 * at the opposite edge along the given direction.
 *
 * CSS doesn't natively support gradient blur, so we stack several backdrop-filter
 * layers with overlapping soft masks. Each layer is masked to a band; the layer
 * with the strongest blur occupies the "end" band, weaker layers fill earlier bands.
 */
export function ProgressiveBlur({
  direction = "to bottom",
  maxBlur = 50,
  className = "",
  style = {},
}: {
  direction?: "to bottom" | "to top" | "to left" | "to right";
  maxBlur?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  // Eight overlapping bands give a smooth gradient.
  const layers = [
    { blur: maxBlur * 0.05, from: 0, to: 20 },
    { blur: maxBlur * 0.1, from: 10, to: 30 },
    { blur: maxBlur * 0.2, from: 20, to: 45 },
    { blur: maxBlur * 0.35, from: 35, to: 60 },
    { blur: maxBlur * 0.55, from: 50, to: 75 },
    { blur: maxBlur * 0.75, from: 65, to: 90 },
    { blur: maxBlur * 0.9, from: 80, to: 100 },
    { blur: maxBlur, from: 90, to: 100 },
  ];

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      aria-hidden
    >
      {layers.map((l, i) => {
        const mask = `linear-gradient(${direction}, transparent ${l.from}%, black ${l.from + (l.to - l.from) * 0.5}%, transparent ${l.to}%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${l.blur}px)`,
              WebkitBackdropFilter: `blur(${l.blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
