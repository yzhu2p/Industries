import "./index.css";
import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const applications = [
  {
    id: "imt",
    title: "Injection Molding Machine Tending",
    icon: "⚙️",
    summary: "Automate cycle-timed part retrieval from injection molding machines.",
    detail:
      "Collaborative or industrial robots load raw material and unload finished parts from IMMs — eliminating operator exposure to hot molds and repetitive strain. Key considerations include cycle time matching, end-of-arm tooling (EOAT) for varying shot sizes, and integration with the machine's safety gate I/O. Proax recommends ABB GoFa cobots for low-volume cells or OMRON TM Series for vision-guided pick-and-place.",
    keyPoints: [
      "Cycle-synchronised robot control via digital I/O or OPC-UA",
      "Custom EOAT for multi-cavity moulds — soft grippers or vacuum",
      "Safety-rated monitored stop for operator intervention",
      "Conveyor integration for downstream buffering",
    ],
    partners: ["ABB", "OMRON", "SMC"],
    category: "Robotics",
  },
  {
    id: "part-removal",
    title: "Part Removal & Degating",
    icon: "🦾",
    summary: "High-speed sprue removal, degating, and quality sorting.",
    detail:
      "After the mould opens, a side-entry or top-entry robot removes the sprue and deposits runners separately from finished parts. Vision systems confirm part presence and orientation before release to downstream conveyors. SMC pneumatic grippers paired with Phoenix Contact I/O modules provide the speed and reliability this step demands.",
    keyPoints: [
      "Sub-2-second removal cycles for high-cavitation tooling",
      "Integrated sprue/runner separation at the point of removal",
      "Vision-guided orientation check before conveyor release",
      "Quick-change EOAT brackets for SKU changeover in minutes",
    ],
    partners: ["SMC", "Phoenix Contact", "OMRON"],
    category: "Robotics",
  },
  {
    id: "downstream",
    title: "Downstream Packaging",
    icon: "📦",
    summary: "Automated bagging, boxing, and palletising at end-of-line.",
    detail:
      "Parts leaving the moulding cell are counted, oriented, and fed into automated packaging systems. Proax configures complete lines from part counting conveyors through to collaborative palletisers — reducing labour on repetitive tasks and maintaining consistent pack patterns. Rittal enclosures house the control architecture for reliable operation in production environments.",
    keyPoints: [
      "Count-verified pack fills using photo-eye arrays",
      "Cobot palletisers for mixed-SKU end-of-line flexibility",
      "Integrated label-print-apply for traceability",
      "Rittal ClimaSys climate control for panel longevity",
    ],
    partners: ["ABB", "Rittal", "Phoenix Contact"],
    category: "Motion Control",
  },
  {
    id: "inspection",
    title: "Automated Inspection",
    icon: "🔍",
    summary: "100% inline vision inspection for defects, flash, and dimensions.",
    detail:
      "Machine vision cameras mounted inline or on a robot wrist capture every part before it reaches packaging. OMRON's FH Vision system detects flash, short shots, sink marks, and dimensional deviations — triggering automatic rejection without human intervention. Reject statistics feed dashboards for real-time OEE monitoring.",
    keyPoints: [
      "Multi-angle imaging with structured light for 3-D defect detection",
      "Teach-mode setup — no programming required for new part profiles",
      "OPC-UA data export to MES / SCADA for SPC trending",
      "Rejection chute with part archiving for root-cause review",
    ],
    partners: ["OMRON", "Phoenix Contact"],
    category: "Vision Systems",
  },
];

const partners = [
  { name: "ABB", desc: "Industrial & collaborative robotics" },
  { name: "OMRON", desc: "Vision, motion & safety systems" },
  { name: "SMC", desc: "Pneumatics & fluid control" },
  { name: "Phoenix Contact", desc: "I/O, networking & power" },
  { name: "Rittal", desc: "Enclosures & thermal management" },
];

const categories = [
  { name: "Robotics", icon: "🤖" },
  { name: "Motion Control", icon: "⚡" },
  { name: "Pneumatics", icon: "💨" },
  { name: "Vision Systems", icon: "👁️" },
  { name: "Control Panels", icon: "🗂️" },
  { name: "Drives & Motors", icon: "🔄" },
  { name: "Sensors", icon: "📡" },
  { name: "Safety", icon: "🛡️" },
];

const featuredProducts = [
  {
    name: "ABB GoFa CRB 15000",
    tag: "Collaborative Robot",
    desc: "10 kg payload, IP67 rated. Ideal for machine tending without safety fencing in plastics cells.",
    badge: "Most Specified",
  },
  {
    name: "OMRON TM Series",
    tag: "Vision-Guided Cobot",
    desc: "Built-in camera and lighting for pick-and-place with inline part verification — no separate vision controller.",
    badge: null,
  },
  {
    name: "SMC MXH Series",
    tag: "Pneumatic Slide",
    desc: "Compact guided actuator for high-cycle EOAT applications. Fits tight mould-area envelopes.",
    badge: null,
  },
];

const newSeries = [
  {
    name: "ABB OmniCore",
    label: "New Controller Platform",
    desc: "Unified controller for all ABB robots. Faster commissioning, built-in SafeMove.",
  },
  {
    name: "Phoenix Contact PLCnext",
    label: "Open IPC Platform",
    desc: "Linux-based controller with IEC 61131-3 and Python/C++ support — built for IIoT edge compute.",
  },
  {
    name: "OMRON FH-3000",
    label: "Vision Controller",
    desc: "4-camera synchronous processing at 480 fps. Handles the highest-speed inspection lines.",
  },
];

const resources = {
  whitepapers: [
    "Optimising Injection Moulding Cell OEE",
    "Cobot vs. Industrial Robot: Plastics Cell ROI Guide",
    "Pneumatic vs. Electric Actuation in EOAT",
  ],
  caseStudies: [
    "Tier-1 Packaging Supplier: 38% Labour Reduction",
    "Automotive Plastics: Automated Part Removal Install",
    "Food-Grade Container Line: Vision Inspection Upgrade",
  ],
  guides: [
    "Robot Selection Guide for IMM Tending",
    "EOAT Design Basics for Injection Moulded Parts",
    "Safety Standards for Collaborative Robots (ISO TS 15066)",
  ],
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const ApplicationCard: React.FC<{
  app: typeof applications[0];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ app, isOpen, onToggle }) => (
  <div
    style={{
      background: "#fff",
      border: isOpen ? "1.5px solid #1a5eb8" : "1px solid #e2e6ed",
      borderRadius: 12,
      overflow: "hidden",
      transition: "border-color 0.2s",
    }}
  >
    {/* Header */}
    <button
      onClick={onToggle}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "20px 24px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{app.icon}</span>
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: "0 0 4px",
            fontWeight: 600,
            fontSize: 15,
            color: "#1a1f2e",
          }}
        >
          {app.title}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
          {app.summary}
        </p>
      </div>
      <span
        style={{
          color: "#1a5eb8",
          fontSize: 18,
          flexShrink: 0,
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          marginTop: 2,
        }}
      >
        ▾
      </span>
    </button>

    {/* Expanded panel */}
    {isOpen && (
      <div
        style={{
          padding: "0 24px 24px",
          borderTop: "1px solid #eef0f4",
        }}
      >
        <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginTop: 16 }}>
          {app.detail}
        </p>

        <div style={{ marginTop: 16 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9ca3af",
              margin: "0 0 10px",
            }}
          >
            Key Considerations
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {app.keyPoints.map((pt) => (
              <li
                key={pt}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 7,
                  fontSize: 13,
                  color: "#374151",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#1a5eb8",
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
          {app.partners.map((p) => (
            <span
              key={p}
              style={{
                padding: "4px 10px",
                background: "#eef4fb",
                color: "#1a5eb8",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {p}
            </span>
          ))}
          <span
            style={{
              padding: "4px 10px",
              background: "#f3f4f6",
              color: "#6b7280",
              borderRadius: 6,
              fontSize: 12,
            }}
          >
            {app.category}
          </span>
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
          <button
            style={{
              padding: "9px 18px",
              background: "#1a5eb8",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Browse related products →
          </button>
          <button
            style={{
              padding: "9px 18px",
              background: "transparent",
              color: "#1a5eb8",
              border: "1px solid #1a5eb8",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Talk to an engineer
          </button>
        </div>
      </div>
    )}
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const App = () => {
  const [openApp, setOpenApp] = useState<string | null>("imt");

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1a1f2e",
        background: "#fff",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d2f5e 0%, #1a5eb8 60%, #1e73d4 100%)",
          color: "#fff",
          padding: "64px 0 56px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7eb5f0",
              margin: "0 0 12px",
            }}
          >
            Industries / Plastics, Packaging & Converting
          </p>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              margin: "0 0 20px",
              lineHeight: 1.15,
              maxWidth: 680,
            }}
          >
            Plastics, Packaging &amp; Converting
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#b8d4f0",
              maxWidth: 600,
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            End-to-end automation for injection moulding, part handling, and
            packaging workflows — backed by Proax's engineering team and Canada's
            leading automation brands.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              style={{
                padding: "13px 28px",
                background: "#fff",
                color: "#1a5eb8",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Talk to an application engineer
            </button>
            <button
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Browse all products
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        style={{
          background: "#f8f9fc",
          borderBottom: "1px solid #e5e8ef",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 0,
          }}
        >
          {[
            { val: "60+", label: "Years serving Canadian industry" },
            { val: "5", label: "Top-tier technology partners" },
            { val: "100%", label: "In-stock parts, fast ship" },
            { val: "Free", label: "Application engineering support" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "22px 24px",
                borderRight: i < 3 ? "1px solid #e5e8ef" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#1a5eb8",
                }}
              >
                {s.val}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "72px 32px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
              What we automate
            </p>
            <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, color: "#1a1f2e" }}>
              Common Applications
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: "#6b7280", maxWidth: 320, textAlign: "right" }}>
            Expand any application to see technical detail, recommended partners, and direct product links.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {applications.map((app) => (
            <ApplicationCard
              key={app.id}
              app={app}
              isOpen={openApp === app.id}
              onToggle={() => setOpenApp(openApp === app.id ? null : app.id)}
            />
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ background: "#f8f9fc", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
            Top picks for this industry
          </p>
          <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 800 }}>
            Featured Products
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {featuredProducts.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #e2e6ed",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: 160,
                    background: "linear-gradient(135deg, #eef4fb 0%, #dce8f5 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 48,
                  }}
                >
                  🤖
                </div>
                <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#1a5eb8",
                        background: "#eef4fb",
                        padding: "3px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.tag}
                    </span>
                    {p.badge && (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#15803d",
                          background: "#dcfce7",
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700 }}>{p.name}</h3>
                  <p style={{ margin: "0 0 20px", fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
                    {p.desc}
                  </p>
                  <button
                    style={{
                      padding: "9px 0",
                      background: "transparent",
                      color: "#1a5eb8",
                      border: "1px solid #1a5eb8",
                      borderRadius: 7,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    View product →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>
        <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
          Who we work with
        </p>
        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 800 }}>
          Technology Partners
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
          }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#fff",
                border: "1px solid #e2e6ed",
                borderRadius: 10,
                padding: "20px 20px",
                cursor: "pointer",
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1a5eb8";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(26,94,184,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e6ed";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 16, color: "#1a1f2e" }}>
                {p.name}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section style={{ background: "#f8f9fc", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
            Shop by discipline
          </p>
          <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 800 }}>
            Product Categories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: 12,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e6ed",
                  borderRadius: 10,
                  padding: "18px 16px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  textAlign: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#eef4fb";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#fff";
                }}
              >
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW & TRENDING ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>
        <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
          Just launched
        </p>
        <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 800 }}>
          New &amp; Trending
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {newSeries.map((s) => (
            <div
              key={s.name}
              style={{
                background: "#fff",
                border: "1px solid #e2e6ed",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: 120,
                  background: "linear-gradient(135deg, #dce8f5 0%, #eef4fb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                ✨
              </div>
              <div style={{ padding: "18px 20px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#fef9c3",
                    color: "#854d0e",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                    marginBottom: 8,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </span>
                <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700 }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section style={{ background: "#f8f9fc", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
            See it in action
          </p>
          <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 800 }}>Videos</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {[
              { title: "IMM Tending with ABB GoFa Cobot", duration: "3:24" },
              { title: "End-of-Line Palletising — Full Line Walkthrough", duration: "5:10" },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid #e2e6ed",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg, #1a2f5e 0%, #1a5eb8 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      paddingLeft: 4,
                    }}
                  >
                    ▶
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 12,
                      background: "rgba(0,0,0,0.65)",
                      color: "#fff",
                      fontSize: 12,
                      padding: "2px 7px",
                      borderRadius: 4,
                    }}
                  >
                    {v.duration}
                  </span>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>
        <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a5eb8" }}>
          Go deeper
        </p>
        <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 800 }}>Resources</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { label: "White Papers", icon: "📄", items: resources.whitepapers },
            { label: "Case Studies", icon: "🏭", items: resources.caseStudies },
            { label: "Guides", icon: "📘", items: resources.guides },
          ].map((section) => (
            <div
              key={section.label}
              style={{
                background: "#fff",
                border: "1px solid #e2e6ed",
                borderRadius: 12,
                padding: "22px 22px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 18 }}>{section.icon}</span>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>{section.label}</h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {section.items.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: "#1a5eb8",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 6,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 1 }}>↗</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d2f5e 0%, #1a5eb8 100%)",
          padding: "72px 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px" }}>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: 32,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Ready to automate your plastics line?
          </h2>
          <p
            style={{
              margin: "0 0 36px",
              fontSize: 16,
              color: "#b8d4f0",
              lineHeight: 1.7,
            }}
          >
            Proax application engineers are available to review your process,
            recommend equipment, and provide a no-obligation quote.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "14px 32px",
                background: "#fff",
                color: "#1a5eb8",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Contact Proax
            </button>
            <button
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Request a quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
