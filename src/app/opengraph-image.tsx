import { ImageResponse } from "next/og";
import { positioning } from "@/content/positioning";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          color: "#17150f",
          padding: "64px 72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#c2542e",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 28 }}>{positioning.wordmark}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 24, color: "#c2542e" }}>
            {`// ${positioning.eyebrow}`}
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              fontFamily: "sans-serif",
              marginTop: 12,
            }}
          >
            {positioning.headline}
          </span>
          <span
            style={{
              fontSize: 30,
              color: "#6b6657",
              marginTop: 20,
              maxWidth: 920,
              fontFamily: "sans-serif",
            }}
          >
            {positioning.subhead}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#6b6657",
            border: "1px solid #e2ddcf",
            borderRadius: 8,
            padding: "14px 20px",
          }}
        >
          <span style={{ color: "#c2542e" }}>OPEN TO</span>
          <span>{positioning.openTo.join(" · ")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
