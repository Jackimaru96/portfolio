export function CircuitPortrait() {
  return (
    <svg
      viewBox="0 0 320 260"
      className="h-auto w-full max-w-sm text-foreground"
      role="img"
      aria-label="Illustration of a circuit board tracing around a profile photo"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
        fontFamily="var(--font-geist-mono)"
      >
        <path d="M60 60 H110 M60 60 V40" />
        <circle cx="60" cy="40" r="3" fill="currentColor" stroke="none" />
        <text x="40" y="34" fontSize="9">
          3V3
        </text>

        <path d="M70 180 H110 M70 180 V200" />
        <circle cx="70" cy="200" r="3" fill="currentColor" stroke="none" />
        <text x="50" y="214" fontSize="9">
          SDA
        </text>

        <path d="M250 55 H210 M250 55 V35" />
        <circle cx="250" cy="35" r="3" fill="currentColor" stroke="none" />
        <text x="244" y="28" fontSize="9">
          GND
        </text>

        <path d="M235 190 H210 M235 190 V225 H270" stroke="var(--accent)" />
        <circle cx="235" cy="190" r="3.5" fill="var(--accent)" stroke="none" />
        <text x="238" y="238" fontSize="9" fill="var(--accent)" stroke="none">
          LLM_OUT
        </text>

        <path d="M60 130 H30" />
        <path d="M60 130 m-28 -5 h8 v10 h-8 z" />
        <text x="5" y="116" fontSize="9">
          R1 220Ω
        </text>
      </g>
      <circle
        cx="160"
        cy="130"
        r="78"
        fill="var(--card)"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <foreignObject x="90" y="60" width="140" height="140">
        <div className="h-full w-full overflow-hidden rounded-full border border-border bg-border/40">
          {/* Replace /public/jack-chen-placeholder.svg with a real headshot
              at /public/jack-chen.jpg, then swap the src below. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/jack-chen.png"
            alt="Jack Chen"
            className="h-full w-full object-cover"
          />
        </div>
      </foreignObject>
    </svg>
  );
}
