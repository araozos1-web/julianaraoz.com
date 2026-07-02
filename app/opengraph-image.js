import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Julian Araoz — Partnership Architect"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "48px" }}>
          <div style={{ background: "#10B981", borderRadius: "8px", padding: "8px 18px", color: "#000", fontWeight: 800, fontSize: "20px", marginRight: "20px" }}>
            JA
          </div>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px", letterSpacing: "0.04em" }}>julianaraoz.com</span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: "78px", fontWeight: 800, color: "#fff", lineHeight: 0.88, letterSpacing: "-4px", marginBottom: "40px" }}>
          Nobody built your<br />partnership program.
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>
          Julian Araoz · Partnership Architect · MIT Sloan
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "14px" }}>
          <div style={{ background: "#10B981", color: "#000", padding: "12px 28px", borderRadius: "100px", fontSize: "18px", fontWeight: 700 }}>
            30-day deployment
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", padding: "12px 28px", borderRadius: "100px", fontSize: "18px" }}>
            $10M–$100M+ revenue
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", padding: "12px 28px", borderRadius: "100px", fontSize: "18px" }}>
            AI-powered
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
