/*
 * Decorative, code-drawn visuals for VectraSyn.
 * - HeroVisual: a browser window, a phone app and an automation flow, looping gently.
 * - ProofThumb: abstract wireframe thumbnails used until real case studies exist.
 *
 * Rules: brand palette only (via theme tokens), no text and no numbers inside the art
 * (nothing that could be mistaken for real client work or results), no monospace fonts.
 * Art stays left-to-right (dir="ltr") in both languages because it is symbolic, not text.
 * Motion is defined in styles.css and is switched off for prefers-reduced-motion.
 */

type VisualProps = { label: string; className?: string };

export function HeroVisual({ label, className }: VisualProps) {
  return (
    <div className={className} dir="ltr">
      <svg
        viewBox="0 0 560 440"
        role="img"
        aria-label={label}
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <clipPath id="vs-window-clip">
            <rect x="30" y="40" width="360" height="270" rx="18" />
          </clipPath>
          <linearGradient id="vs-shimmer" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.55" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* soft ground shadow */}
        <ellipse cx="280" cy="424" rx="210" ry="9" className="fill-foreground/10" />

        {/* ---------- browser window ---------- */}
        <g className="vs-float-slow">
          <rect
            x="30"
            y="40"
            width="360"
            height="270"
            rx="18"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <g clipPath="url(#vs-window-clip)">
            {/* title bar */}
            <rect x="30" y="40" width="360" height="36" className="fill-muted" />
            <circle cx="52" cy="58" r="4.5" className="fill-primary" />
            <circle cx="67" cy="58" r="4.5" className="fill-chart-3" />
            <circle cx="82" cy="58" r="4.5" className="fill-secondary" />
            <rect x="104" y="49" width="190" height="18" rx="9" className="fill-card" />
            <rect x="114" y="55" width="70" height="6" rx="3" className="fill-foreground/15" />

            {/* hero copy skeleton */}
            <rect x="54" y="100" width="170" height="14" rx="7" className="fill-foreground/80" />
            <rect x="54" y="122" width="118" height="14" rx="7" className="fill-primary" />
            <rect x="54" y="148" width="190" height="8" rx="4" className="fill-foreground/15" />
            <rect x="54" y="164" width="150" height="8" rx="4" className="fill-foreground/15" />
            <rect x="54" y="186" width="88" height="26" rx="13" className="fill-primary" />
            <rect
              x="152"
              y="186"
              width="76"
              height="26"
              rx="13"
              className="fill-none stroke-secondary"
              strokeWidth="1.5"
            />

            {/* image block */}
            <rect x="262" y="96" width="88" height="116" rx="14" className="fill-accent" />
            <circle cx="326" cy="122" r="12" className="fill-primary/60" />
            <path
              d="M262 196 C 288 164, 306 190, 326 168 S 344 176, 350 172 V212 H262 Z"
              className="fill-secondary/50"
            />

            {/* feature cards */}
            {[48, 142, 236].map((x, i) => (
              <g key={x}>
                <rect
                  x={x}
                  y="234"
                  width="88"
                  height="62"
                  rx="12"
                  className="fill-card stroke-border"
                  strokeWidth="1.2"
                />
                <circle
                  cx={x + 18}
                  cy="252"
                  r="8"
                  className={i === 1 ? "fill-secondary/70" : "fill-primary/70"}
                />
                <rect
                  x={x + 12}
                  y="268"
                  width="64"
                  height="6"
                  rx="3"
                  className="fill-foreground/70"
                />
                <rect
                  x={x + 12}
                  y="280"
                  width="44"
                  height="5"
                  rx="2.5"
                  className="fill-foreground/15"
                />
              </g>
            ))}

            {/* light sweep */}
            <rect
              x="-120"
              y="40"
              width="120"
              height="270"
              fill="url(#vs-shimmer)"
              className="vs-sweep"
              transform="skewX(-14)"
            />
          </g>
        </g>

        {/* ---------- phone ---------- */}
        <g className="vs-float">
          <rect
            x="360"
            y="96"
            width="160"
            height="304"
            rx="28"
            className="fill-card stroke-foreground/80"
            strokeWidth="3"
          />
          <rect x="418" y="108" width="44" height="9" rx="4.5" className="fill-foreground/80" />
          {/* app header */}
          <rect x="374" y="132" width="132" height="40" rx="12" className="fill-secondary" />
          <circle cx="392" cy="152" r="8" className="fill-white/80" />
          <rect x="408" y="146" width="70" height="7" rx="3.5" className="fill-white/85" />
          <rect x="408" y="157" width="46" height="5" rx="2.5" className="fill-white/50" />
          {/* task rows with check marks that tick in turn */}
          {[188, 228, 268].map((y, i) => (
            <g key={y}>
              <rect x="374" y={y} width="132" height="32" rx="10" className="fill-muted" />
              <circle cx="391" cy={y + 16} r="9" className="fill-primary/20" />
              <path
                d={`M386 ${y + 16} l4 4 l7 -8`}
                className={`vs-check vs-check-${i + 1} fill-none stroke-primary`}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="408"
                y={y + 10}
                width={i === 1 ? 62 : 78}
                height="6"
                rx="3"
                className="fill-foreground/60"
              />
              <rect
                x="408"
                y={y + 20}
                width="40"
                height="4"
                rx="2"
                className="fill-foreground/15"
              />
            </g>
          ))}
          <rect x="374" y="314" width="132" height="36" rx="18" className="fill-primary" />
          <rect x="414" y="329" width="52" height="7" rx="3.5" className="fill-white/90" />
          <rect x="426" y="384" width="28" height="4" rx="2" className="fill-foreground/30" />
        </g>

        {/* ---------- automation flow ---------- */}
        <g>
          <path
            d="M96 372 H162 M214 372 H280 M332 372 H350"
            className="vs-dash fill-none stroke-secondary/70"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
          />
          {[
            { cx: 70, icon: "M62 372 h16 M70 364 v16", delay: "vs-pulse-1" },
            { cx: 188, icon: "M180 372 l6 6 l10 -12", delay: "vs-pulse-2" },
            { cx: 306, icon: "M310 360 l-12 14 h10 l-4 12 l14 -16 h-10 z", delay: "vs-pulse-3" },
          ].map((n) => (
            <g key={n.cx} className={n.delay}>
              <circle
                cx={n.cx}
                cy="372"
                r="26"
                className="fill-card stroke-secondary"
                strokeWidth="2"
              />
              <path
                d={n.icon}
                className="fill-none stroke-secondary"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          ))}
        </g>

        {/* ---------- floating chips ---------- */}
        <g className="vs-float-fast">
          <rect
            x="430"
            y="26"
            width="52"
            height="52"
            rx="16"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          <path
            d="M449 44 l-9 8 l9 8 M463 44 l9 8 l-9 8 M458 41 l-4 22"
            className="fill-none stroke-primary"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g className="vs-float-slow">
          <rect
            x="10"
            y="12"
            width="44"
            height="44"
            rx="14"
            className="fill-accent stroke-primary/30"
            strokeWidth="1.5"
          />
          <circle cx="32" cy="34" r="6" className="fill-none stroke-primary" strokeWidth="2.4" />
          <path
            d="M32 22 v4 M32 42 v4 M20 34 h4 M40 34 h4"
            className="stroke-primary"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const win = (
  <>
    <rect
      x="40"
      y="18"
      width="240"
      height="144"
      rx="14"
      className="fill-card stroke-border"
      strokeWidth="1.5"
    />
    <rect x="40" y="18" width="240" height="24" rx="14" className="fill-muted" />
    <rect x="40" y="32" width="240" height="10" className="fill-muted" />
    <circle cx="56" cy="30" r="3.5" className="fill-primary" />
    <circle cx="68" cy="30" r="3.5" className="fill-chart-3" />
    <circle cx="80" cy="30" r="3.5" className="fill-secondary" />
  </>
);

function Variant({ index }: { index: number }) {
  switch (index % 6) {
    case 0: // local services — map pin + contact
      return (
        <>
          <rect x="56" y="54" width="104" height="92" rx="10" className="fill-accent" />
          <path
            d="M108 76 c-12 0 -20 9 -20 19 c0 14 20 32 20 32 s20 -18 20 -32 c0 -10 -8 -19 -20 -19 z"
            className="fill-primary"
          />
          <circle cx="108" cy="95" r="7" className="fill-card" />
          <rect x="174" y="58" width="90" height="10" rx="5" className="fill-foreground/70" />
          <rect x="174" y="76" width="70" height="7" rx="3.5" className="fill-foreground/15" />
          <rect x="174" y="90" width="80" height="7" rx="3.5" className="fill-foreground/15" />
          <rect x="174" y="116" width="76" height="24" rx="12" className="fill-secondary" />
        </>
      );
    case 1: // retail — product grid
      return (
        <>
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => (
              <g key={`${c}-${r}`}>
                <rect
                  x={56 + c * 74}
                  y={54 + r * 52}
                  width="66"
                  height="42"
                  rx="9"
                  className={(c + r) % 2 ? "fill-secondary/20" : "fill-accent"}
                />
                <rect
                  x={62 + c * 74}
                  y={100 + r * 52 - 2}
                  width="30"
                  height="5"
                  rx="2.5"
                  className="fill-foreground/50"
                />
              </g>
            )),
          )}
        </>
      );
    case 2: // clinics — calendar
      return (
        <>
          {Array.from({ length: 21 }).map((_, i) => {
            const c = i % 7;
            const r = Math.floor(i / 7);
            const hot = i === 9;
            return (
              <rect
                key={i}
                x={58 + c * 31}
                y={56 + r * 31}
                width="25"
                height="25"
                rx="7"
                className={hot ? "fill-primary" : i % 5 === 0 ? "fill-secondary/25" : "fill-muted"}
              />
            );
          })}
        </>
      );
    case 3: // hospitality — menu rows + reserve
      return (
        <>
          {[56, 80, 104].map((y, i) => (
            <g key={y}>
              <circle
                cx="68"
                cy={y + 8}
                r="8"
                className={i === 1 ? "fill-secondary/40" : "fill-primary/40"}
              />
              <rect
                x="86"
                y={y + 3}
                width={110 - i * 12}
                height="7"
                rx="3.5"
                className="fill-foreground/60"
              />
              <rect
                x="86"
                y={y + 14}
                width="60"
                height="5"
                rx="2.5"
                className="fill-foreground/15"
              />
              <rect
                x="232"
                y={y + 5}
                width="30"
                height="7"
                rx="3.5"
                className="fill-foreground/25"
              />
            </g>
          ))}
          <rect x="56" y="132" width="206" height="22" rx="11" className="fill-primary" />
        </>
      );
    case 4: // trades — quote form
      return (
        <>
          <rect x="56" y="54" width="96" height="14" rx="7" className="fill-foreground/70" />
          {[78, 100].map((y) => (
            <rect
              key={y}
              x="56"
              y={y}
              width="150"
              height="16"
              rx="8"
              className="fill-muted stroke-border"
              strokeWidth="1"
            />
          ))}
          <rect x="56" y="124" width="84" height="24" rx="12" className="fill-primary" />
          <rect x="218" y="54" width="46" height="94" rx="10" className="fill-secondary/20" />
          <path
            d="M228 128 l10 -22 l10 12 l8 -26"
            className="fill-none stroke-secondary"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    default: // education — lesson cards + progress
      return (
        <>
          {[0, 1].map((c) => (
            <g key={c}>
              <rect
                x={56 + c * 106}
                y="54"
                width="98"
                height="58"
                rx="10"
                className={c ? "fill-secondary/20" : "fill-accent"}
              />
              <path
                d={`M${95 + c * 106} 72 l16 9 l-16 9 z`}
                className={c ? "fill-secondary" : "fill-primary"}
              />
            </g>
          ))}
          <rect x="56" y="126" width="204" height="8" rx="4" className="fill-muted" />
          <rect x="56" y="126" width="124" height="8" rx="4" className="fill-primary" />
          <rect x="56" y="142" width="90" height="6" rx="3" className="fill-foreground/15" />
        </>
      );
  }
}

export function ProofThumb({
  index,
  label,
  className,
}: {
  index: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      dir="ltr"
      className={`proof-thumb relative overflow-hidden bg-sand ${className ?? "h-44"}`}
    >
      <svg
        viewBox="0 0 320 180"
        role="img"
        aria-label={label}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        {win}
        <Variant index={index} />
      </svg>
    </div>
  );
}
