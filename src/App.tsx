import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRobot, faBox, faMagnifyingGlass, faBolt, faWind, faEye, faFolder, faRotate, faSatelliteDish, faShield, faWandMagicSparkles, faPlay, faFileLines, faIndustry, faBook, faChevronDown, faArrowRight, faArrowUpRightFromSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import abbLogo from "./images/abblogo.svg";
import omronLogo from "./images/omronlogo.svg";
import pcLogo from "./images/pclogo.svg";
import rittalLogo from "./images/rittallogo.svg";
import smcLogo from "./images/smclogo.svg";
import imgGoFa from "./images/CRB 15000 - GoFa-1_1x1-L.avif";
import imgTm from "./images/TM5-900_.png";
import imgMxh from "./images/img1-MXH-Z.webp";
import catRobotImg from "./images/cat_robot.png";
import catDriveImg from "./images/cat_drive.png";
import catSensorImg from "./images/cat_sensor.png";
import catPanelImg from "./images/cat_panel.png";
import prodControllerImg from "./images/prod_controller.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const applications = [
  {
    id: "imt",
    title: "Injection Molding Machine Tending",
    icon: faGear,
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
    icon: faRobot,
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
    icon: faBox,
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
    icon: faMagnifyingGlass,
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

const brandLogos: Record<string, string> = {
  "ABB": abbLogo,
  "OMRON": omronLogo,
  "SMC": smcLogo,
  "Phoenix Contact": pcLogo,
  "Rittal": rittalLogo
};

const partners = [
  { name: "ABB", desc: "Industrial & collaborative robotics" },
  { name: "OMRON", desc: "Vision, motion & safety systems" },
  { name: "SMC", desc: "Pneumatics & fluid control" },
  { name: "Phoenix Contact", desc: "I/O, networking & power" },
  { name: "Rittal", desc: "Enclosures & thermal management" },
];

const categories = [
  { name: "Robotics", image: catRobotImg },
  { name: "Motion Control", image: catDriveImg },
  { name: "Pneumatics", image: catSensorImg },
  { name: "Vision Systems", image: catSensorImg },
  { name: "Control Panels", image: catPanelImg },
  { name: "Drives & Motors", image: catDriveImg },
  { name: "Sensors", image: catSensorImg },
  { name: "Safety", image: catPanelImg },
];

const featuredProducts = [
  {
    name: "ABB GoFa CRB 15000",
    brand: "ABB",
    desc: "10 kg payload, IP67 rated. Ideal for machine tending without safety fencing in plastics cells.",
    badge: "Featured",
    price: "42,500.00",
    stock: 82,
    inStock: true,
    image: imgGoFa,
  },
  {
    name: "OMRON TM Series",
    brand: "OMRON",
    desc: "Built-in camera and lighting for pick-and-place with inline part verification — no separate vision controller.",
    badge: "Featured",
    price: "38,200.00",
    stock: 0,
    inStock: false,
    image: imgTm,
  },
  {
    name: "SMC MXH Series",
    brand: "SMC",
    desc: "Compact guided actuator for high-cycle EOAT applications. Fits tight mould-area envelopes.",
    badge: "Featured",
    price: "850.00",
    stock: 23,
    inStock: true,
    image: imgMxh,
  },
];

const newSeries = [
  {
    name: "ABB OmniCore",
    brand: "ABB",
    label: "New Controller Platform",
    desc: "Unified controller for all ABB robots. Faster commissioning, built-in SafeMove.",
    image: prodControllerImg,
  },
  {
    name: "Phoenix Contact PLCnext",
    brand: "Phoenix Contact",
    label: "Open IPC Platform",
    desc: "Linux-based controller with IEC 61131-3 and Python/C++ support — built for IIoT edge compute.",
    image: prodControllerImg,
  },
  {
    name: "OMRON FH-3000",
    brand: "OMRON",
    label: "Vision Controller",
    desc: "4-camera synchronous processing at 480 fps. Handles the highest-speed inspection lines.",
    image: prodControllerImg,
  },
];

const popularSeries = [
  {
    name: "L9 Miniature Circuit Breakers",
    brand: "ABB",
    desc: "Compact circuit breakers designed for reliable protection in tight spaces.",
  },
  {
    name: "CB-TM Circuit Breakers",
    brand: "Phoenix Contact",
    desc: "Thermomagnetic device circuit breakers with a compact design and modular expansion options.",
  },
  {
    name: "A-Series Contactors",
    brand: "ABB",
    desc: "High-performance motor protection and switching for industrial applications.",
  },
  {
    name: "SYA Pneumatic Valves",
    brand: "SMC",
    desc: "5-port solenoid valves offering high flow rates and low power consumption.",
  }
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
}> = ({ app }) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #e2e6ed",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Header */}
    <div
      style={{
        padding: "24px",
        borderBottom: "1px solid #EFF3F9",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <p
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: 20,
            color: "#012A4A",
            lineHeight: 1.3,
          }}
        >
          {app.title}
        </p>
      </div>
      <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>
        {app.summary}
      </p>
    </div>

    {/* Body */}
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: "0 0 16px" }}>
        {app.detail}
      </p>

      <div style={{ marginBottom: 16 }}>
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
                  background: "#376FE5",
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", marginBottom: 20 }}>
        {app.partners.map((p) => (
          <span
            key={p}
            style={{
              padding: "4px 10px",
              background: "#EFF3F9",
              color: "#376FE5",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
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

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          style={{
            padding: "9px 18px",
            background: "#376FE5",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap"
          }}
        >
          View products <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 6 }} />
        </button>
        <button
          style={{
            padding: "9px 18px",
            background: "transparent",
            color: "#376FE5",
            border: "1px solid #376FE5",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            flex: 1,
            whiteSpace: "nowrap"
          }}
        >
          Talk to sales
        </button>
      </div>
    </div>
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export const App = () => {

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#012A4A",
        background: "#fff",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #012A4A 0%, #376FE5 60%, #118AB2 100%)",
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
              fontWeight: 700,
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
                color: "#376FE5",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Browse all products
            </button>
            <button
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Contact us
            </button>
          </div>
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
        <div style={{ marginBottom: 32 }}>
          <div>

            <h2 style={{ margin: 0, fontSize: 30, fontWeight: 700, color: "#012A4A" }}>
              Common Applications
            </h2>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: 24
        }}>
          {applications.map((app) => (
            <ApplicationCard
              key={app.id}
              app={app}
            />
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section style={{ background: "#EFF3F9", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>

          <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
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
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <div style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <img src={brandLogos[p.brand]} alt={p.brand} style={{ height: 16, objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  {p.badge && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "#376FE5",
                        background: "#eff3f9",
                        padding: "4px 10px",
                        borderRadius: 9999,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    height: 140,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <img src={p.image} alt={p.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ padding: "16px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 500, color: "#376FE5" }}>{p.name}</h3>
                  <div style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 11, color: "#6b7280", marginRight: 4 }}>CAD$</span>
                    <span style={{ fontSize: 18, fontWeight: 500, color: "#111622" }}>{p.price}</span>
                  </div>
                  <p style={{ margin: "0 0 16px", fontSize: 12, color: "#4b5563", lineHeight: 1.5, flex: 1 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: p.inStock ? "#16a34a" : "#9ca3af" }}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{p.inStock ? `${p.stock} In stock` : "Not in stock"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
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
                background: "#f8f9fb",
                borderRadius: 8,
                padding: "24px",
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f0f2f5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f8f9fb";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <img src={brandLogos[p.name]} alt={p.name} style={{ width: 40, height: 40, objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: "#012A4A" }}>
                  {p.name}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#4b5563", lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAR SERIES ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
          Popular Series
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
          }}
        >
          {popularSeries.map((s) => (
            <div
              key={s.name}
              style={{
                background: "#f8f9fb",
                borderRadius: 8,
                padding: "24px",
                cursor: "pointer",
                transition: "background-color 0.15s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f0f2f5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f8f9fb";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <img src={brandLogos[s.brand]} alt={s.brand} style={{ height: 16, objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, color: "#012A4A" }}>{s.name}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "#4b5563", lineHeight: 1.6, flex: 1 }}>
                {s.desc}
              </p>
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#376FE5" }}>View series <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 4 }} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section style={{ background: "#EFF3F9", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>

          <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 700 }}>
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
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  padding: "18px 16px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  textAlign: "center",
                  transition: "box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                <img src={cat.image} alt={cat.name} style={{ width: 64, height: 64, objectFit: "contain", mixBlendMode: "multiply" }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW & TRENDING ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 700 }}>
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
                background: "#f8f9fb",
                borderRadius: 8,
                overflow: "hidden",
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f0f2f5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f8f9fb";
              }}
            >
              <div
                style={{
                  height: 140,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  borderBottom: "1px solid #f0f2f5"
                }}
              >
                <img src={s.image} alt={s.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
              </div>
              <div style={{ padding: "18px 20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#fff",
                    color: "#376FE5",
                    border: "1px solid #e5e7eb",
                    fontSize: 11,
                    fontWeight: 500,
                    padding: "3px 8px",
                    borderRadius: 9999,
                    marginBottom: 12,
                  }}
                >
                  <img src={brandLogos[s.brand]} alt={s.brand} style={{ height: 12, objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  {s.label}
                </span>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#012A4A" }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#4b5563", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section style={{ background: "#EFF3F9", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>

          <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 700 }}>Videos</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {([
              { title: "IMM Tending with ABB GoFa Cobot", duration: "3:24" },
              { title: "End-of-Line Palletising — Full Line Walkthrough", duration: "5:10" },
            ]).map((v) => (
              <div
                key={v.title}
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  background: "#fff",
                  cursor: "pointer",
                  transition: "box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg, #22577A 0%, #376FE5 100%)",
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
                    <FontAwesomeIcon icon={faPlay} style={{ marginLeft: 4 }} />
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
                  <p style={{ margin: 0, fontWeight: 500, fontSize: 14 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 700 }}>Resources</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {([
            { label: "White Papers", icon: faFileLines, items: resources.whitepapers },
            { label: "Case Studies", icon: faIndustry, items: resources.caseStudies },
            { label: "Guides", icon: faBook, items: resources.guides },
          ]).map((section) => (
            <div
              key={section.label}
              style={{
                background: "#f8f9fb",
                borderRadius: 8,
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 18, color: "#012A4A" }}><FontAwesomeIcon icon={section.icon} /></span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#012A4A" }}>{section.label}</h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {section.items.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: "#376FE5",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 6,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 1 }}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
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
          background: "linear-gradient(135deg, #012A4A 0%, #376FE5 100%)",
          padding: "72px 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px" }}>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: 32,
              fontWeight: 700,
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
                color: "#376FE5",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Request a quote
            </button>
            <button
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
