import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, faCheck, faGear, faShield, faBolt, faEye, 
  faArrowRight, faIndustry, faScrewdriverWrench, faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { 
  applications, brandLogos, featuredProductsBase 
} from "../data/industryData";

export const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const app = applications.find(a => a.id === id);

  if (!app) {
    return (
      <div style={{ padding: 100, textAlign: "center" }}>
        <h1>Application Not Found</h1>
        <Link to="/">Return to Industries</Link>
      </div>
    );
  }

  // Filter products relevant to this application (mock logic for demo)
  const relevantProducts = featuredProductsBase.filter(p => 
    app.partners.includes(p.brand)
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#012A4A", background: "#fff" }}>
      {/* ── NAVIGATION ── */}
      <nav style={{ padding: "20px 32px", borderBottom: "1px solid #eef2fb", display: "flex", alignItems: "center", gap: 16 }}>
        <Link to="/" style={{ color: "#376FE5", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Industries
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #012A4A 0%, #1a3a5a 100%)", 
        color: "#fff", 
        padding: "80px 32px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ 
              display: "inline-block", 
              padding: "6px 12px", 
              background: "rgba(55, 111, 229, 0.2)", 
              color: "#7eb5f0", 
              borderRadius: 6, 
              fontSize: 12, 
              fontWeight: 700, 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              marginBottom: 20
            }}>
              Application Focus / {app.category}
            </span>
            <h1 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 24px", lineHeight: 1.1 }}>
              {app.title}
            </h1>
            <p style={{ fontSize: 18, color: "#b8d4f0", lineHeight: 1.6, marginBottom: 40, maxWidth: 500 }}>
              Optimize your plastics production with precision machine tending. Reduce cycle times, eliminate safety risks, and ensure 24/7 consistency.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button style={{ padding: "14px 32px", background: "#376FE5", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
                Talk to a Specialist
              </button>
              <button style={{ padding: "14px 32px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 8, fontSize: 16, fontWeight: 500, cursor: "pointer" }}>
                View Technical Specs
              </button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
             <div style={{ 
               width: "100%", 
               aspectRatio: "4/3", 
               background: "rgba(255,255,255,0.05)", 
               borderRadius: 24,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               border: "1px solid rgba(255,255,255,0.1)",
               backdropFilter: "blur(10px)"
             }}>
               <FontAwesomeIcon icon={app.icon} style={{ fontSize: 120, opacity: 0.2 }} />
             </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES & SOLUTIONS ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>The Automation Advantage</h2>
          <p style={{ color: "#4b5563", maxWidth: 700, margin: "0 auto" }}>
            Transitioning from manual to automated machine tending solves the core bottlenecks in modern injection molding environments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div style={{ background: "#fdf2f2", padding: 40, borderRadius: 20 }}>
            <h3 style={{ color: "#991b1b", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <FontAwesomeIcon icon={faShield} /> The Manual Challenge
            </h3>
            <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Safety risks from handling hot parts and molds",
                "Inconsistent cycle times leading to part variations",
                "High labor turnover in repetitive, demanding roles",
                "Difficult to scale production for 24/7 operation"
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: 12, color: "#7f1d1d", fontSize: 15 }}>
                  <FontAwesomeIcon icon={faArrowRight} style={{ marginTop: 4, opacity: 0.5 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#f0fdf4", padding: 40, borderRadius: 20 }}>
            <h3 style={{ color: "#166534", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <FontAwesomeIcon icon={faCheck} /> The Proax Solution
            </h3>
            <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Collaborative robots (Cobots) for fence-less operation",
                "Precision synchronization with machine Euromap 67 I/O",
                "Custom End-of-Arm Tooling (EOAT) designed in-house",
                "Scalable controls with real-time OEE monitoring"
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: 12, color: "#14532d", fontSize: 15 }}>
                  <FontAwesomeIcon icon={faCheck} style={{ marginTop: 4, color: "#22c55e" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section style={{ background: "#fafbfd", padding: "100px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { title: "Cycle Sync", icon: faGear, desc: "Direct integration with the injection molding controller for perfect timing." },
              { title: "Smart Vision", icon: faEye, desc: "Inline quality checks for short shots, flash, and dimensional accuracy." },
              { title: "Rapid EOAT", icon: faBolt, desc: "Quick-change tooling systems to handle multiple SKUs on a single press." }
            ].map(cap => (
              <div key={cap.title} style={{ background: "#fff", padding: 32, borderRadius: 16, border: "1px solid #eef2fb" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#eef2fb", color: "#376FE5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>
                  <FontAwesomeIcon icon={cap.icon} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{cap.title}</h3>
                <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED PRODUCTS ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 32px" }}>
        <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 40 }}>Recommended Technology</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {relevantProducts.map(p => (
            <div key={p.name} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: 20, background: "#f8f9fb", height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={p.image} alt={p.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ padding: 24 }}>
                <img src={brandLogos[p.brand]} alt={p.brand} style={{ height: 16, marginBottom: 12 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.5, marginBottom: 20 }}>{p.desc}</p>
                <button style={{ 
                  width: "100%", 
                  padding: "10px", 
                  background: "#fff", 
                  color: "#376FE5", 
                  border: "1px solid #376FE5", 
                  borderRadius: 6, 
                  fontWeight: 600, 
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}>
                  View Product Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENGINEERING CALLOUT ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px 100px" }}>
        <div style={{ 
          background: "linear-gradient(rgba(55, 111, 229, 0.05), rgba(55, 111, 229, 0.05))", 
          borderRadius: 24, 
          padding: 64,
          display: "flex",
          alignItems: "center",
          gap: 64
        }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>Need a Custom EOAT?</h2>
            <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.7, marginBottom: 32 }}>
              The key to successful machine tending is the gripper. Proax's in-house engineering team designs and builds custom vacuum, pneumatic, and electric end-of-arm tooling specifically for your mold geometry.
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FontAwesomeIcon icon={faIndustry} style={{ color: "#376FE5" }} />
                <span style={{ fontWeight: 600 }}>In-house Design</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: "#376FE5" }} />
                <span style={{ fontWeight: 600 }}>Rapid Prototyping</span>
              </div>
            </div>
          </div>
          <div style={{ width: 300, height: 200, background: "#eef2fb", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FontAwesomeIcon icon={faGear} style={{ fontSize: 64, color: "#376FE5", opacity: 0.2 }} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "#012A4A", padding: "80px 32px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Ready to Optimize?</h2>
          <p style={{ color: "#b8d4f0", marginBottom: 40 }}>Schedule a free application review with one of our robotics engineers today.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button style={{ padding: "14px 32px", background: "#376FE5", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Talk to a Specialist
            </button>
            <button style={{ padding: "14px 32px", background: "#fff", color: "#012A4A", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              Browse All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
