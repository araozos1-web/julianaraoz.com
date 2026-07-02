"use client"
import Link from "next/link"

export default function AutomatedAcquisition() {
  return (
    <main style={{
      background: "#080808",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "'General Sans', system-ui, sans-serif",
      WebkitFontSmoothing: "antialiased",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 56,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(8,8,8,0.92)", backdropFilter: "blur(16px)",
      }}>
        <Link href="/" style={{
          fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ color: "#10B981" }}>←</span> JULIAN ARAOZ
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)" }}>
            MODULE 01 — AUTOMATED ACQUISITION
          </span>
        </div>
      </nav>

      {/* MAIN DIAGRAM */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 60px",
      }}>
        <img
          src="/playbook-acquisition.png"
          alt="Automated Acquisition Framework"
          style={{
            width: "100%",
            maxWidth: 1100,
            height: "auto",
            borderRadius: 16,
          }}
        />
      </div>

      {/* FOOTER */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "20px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{
          fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.3)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ color: "#10B981" }}>←</span> BACK
        </Link>
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)" }}>
          MODULE 02 — RETENTION & MONETIZATION →
        </span>
      </div>

    </main>
  )
}
