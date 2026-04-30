import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRobot, faBox, faMagnifyingGlass, faBolt, faWind, faEye, faFolder, faRotate, faSatelliteDish, faShield, faWandMagicSparkles, faPlay, faFileLines, faIndustry, faBook, faChevronDown, faArrowRight, faArrowUpRightFromSquare, faCheck, faAngleLeft, faAngleRight, faUserTie, faClock, faGraduationCap, faHeadset, faScrewdriverWrench, faWarehouse, faAward } from "@fortawesome/free-solid-svg-icons";
import { 
  applications, brandLogos, partners, categories, 
  featuredProducts, newSeries, popularSeries, resources, whyChooseUs 
} from "./data/industryData.ts";
import { ApplicationDetail } from "./pages/ApplicationDetail.tsx";

// ─── UTILS ───────────────────────────────────────────────────────────────────

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const ApplicationCard: React.FC<{
  app: typeof applications[0];
}> = ({ app }) => (
  <div
    style={{
      position: "relative",
      background: "#fff",
      border: "1px solid #e2e6ed",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(1, 42, 74, 0.08)";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "none";
    }}
  >
    {/* Header */}
    <div
      style={{
        padding: "24px",
        borderBottom: "1px solid #EFF3F9",
        background: "#fafbfd",
      }}
    >
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: "#eef2fb",
          color: "#376FE5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0,
        }}>
          <FontAwesomeIcon icon={app.icon} />
        </div>
        <Link
          to={`/applications/${app.id}`}
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: 20,
            color: "#012A4A",
            lineHeight: 1.2,
            textDecoration: "none",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline" }}
          onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none" }}
        >
          {app.title}
          <span style={{ position: "absolute", inset: 0, zIndex: 1 }} aria-hidden="true" />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>
          What it does
        </p>
        <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.5 }}>
          {app.whatItDoes}
        </p>
      </div>
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
      <div style={{ marginBottom: 24, flex: 1 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#6b7280",
            margin: "0 0 12px",
          }}
        >
          Why it matters
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {app.outcomes.map((outcome, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 14,
                color: "#4b5563",
                lineHeight: 1.5,
              }}
            >
              <FontAwesomeIcon icon={faCheck} style={{ color: "#10b981", marginTop: 4, fontSize: 12, flexShrink: 0 }} />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20, position: "relative", zIndex: 2 }}>
        {app.partners.map((p) => (
          <a
            href={`https://proax.ca/en/manufacturers/${p.toLowerCase().replace(/\s+/g, '-')}`}
            key={p}
            style={{
              padding: "4px 10px",
              background: "#EFF3F9",
              color: "#376FE5",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#dbe4f3" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#EFF3F9" }}
          >
            {p}
          </a>
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

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", position: "relative", zIndex: 2 }}>
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
            whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#2a5dc2" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#376FE5" }}
        >
          Browse All Products <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 6 }} />
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
            whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#f4f7fc" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
        >
          Talk to a Specialist
        </button>
      </div>
    </div>
  </div>
);

const Carousel: React.FC<{
  children: React.ReactNode;
  gap?: number;
  itemWidth?: string;
}> = ({ children, gap = 20, itemWidth = "280px" }) => {
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.offsetWidth;
      trackRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: "relative", margin: `0 -${gap}px`, padding: `0 ${gap}px`, overflowX: "hidden" }}>
      <button
        onClick={() => scroll('left')}
        style={{
          position: "absolute",
          left: gap / 2,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <div
        ref={trackRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: gap,
          scrollbarWidth: "none",
          paddingBottom: 20,
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {React.Children.map(children, child => (
          <div style={{
            flex: `0 0 ${itemWidth}`,
            scrollSnapAlign: "start",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}>
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        style={{
          position: "absolute",
          right: gap / 2,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

// ─── INDUSTRIES PAGE ──────────────────────────────────────────────────────────

const IndustriesPage = () => {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#012A4A",
        background: "#fff",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100%",
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
              Browse All Products
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
              Talk to a Specialist
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
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
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

          <Carousel itemWidth="280px" gap={20}>
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  flex: 1,
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
          </Carousel>
        </div>
      </section>

      {/* ── MANUFACTURERS ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
          Manufacturers
        </h2>

        <Carousel itemWidth="220px" gap={14}>
          {partners.map((p) => (
            <a
              href={`https://proax.ca/en/manufacturers/${p.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={p.name}
              style={{
                background: "#f8f9fb",
                borderRadius: 8,
                padding: "24px",
                cursor: "pointer",
                transition: "background-color 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f0f2f5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f8f9fb";
              }}
            >
              <img src={brandLogos[p.name]} alt={p.name} style={{ width: "auto", height: 60, maxWidth: "100%", objectFit: "contain" }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </a>
          ))}
        </Carousel>
      </section>

      {/* ── POPULAR SERIES ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
          Popular Series
        </h2>

        <Carousel itemWidth="250px" gap={20}>
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
                flex: 1,
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
        </Carousel>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section style={{ background: "#EFF3F9", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>

          <h2 style={{ margin: "0 0 28px", fontSize: 30, fontWeight: 700 }}>
            Product Categories
          </h2>

          <Carousel itemWidth="150px" gap={12}>
            {categories.map((cat) => (
              <div
                key={cat.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  flex: 1,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <img src={cat.image} alt={cat.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                </div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{cat.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ── NEW & TRENDING ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>
        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
          New &amp; Trending
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
          gap: 24
        }}>
          {newSeries.map((s) => (
            <div
              key={s.name}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div style={{ height: 200, background: "#f8f9fb", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                <img src={s.image} alt={s.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ padding: 24 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#376FE5", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0" }}>
                  <img src={brandLogos[s.brand]} alt={s.brand} style={{ height: 14 }} />
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{s.name}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section style={{ background: "#EFF3F9", padding: "72px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
            Training &amp; Demos
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: 24
          }}>
            <div style={{ background: "#000", borderRadius: 12, aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#376FE5", fontSize: 24, paddingLeft: 4 }}>
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 20, left: 20, color: "#fff" }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500, opacity: 0.8 }}>Featured Video</p>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Automating the Plastics Industry with ABB GoFa</h3>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: "flex", gap: 16, background: "#fff", padding: 12, borderRadius: 12, cursor: "pointer" }}>
                  <div style={{ width: 140, aspectRatio: "16/9", background: "#000", borderRadius: 8, flexShrink: 0 }}></div>
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700 }}>Technical Webinar: OMRON Vision for Plastics</h4>
                    <p style={{ margin: 0, fontSize: 13, color: "#4b5563" }}>12:45 • Advanced Level</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE PROAX ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 32, fontWeight: 700, color: "#012A4A" }}>
            Why Choose Proax
          </h2>
          <p style={{ margin: "0 auto", fontSize: 16, color: "#4b5563", maxWidth: 600, lineHeight: 1.6 }}>
            Our engineering expertise and localized support ensure your automation projects succeed from concept to commissioning.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", 
          gap: 24 
        }}>
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                border: "1px solid #e2e6ed",
                borderRadius: 12,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(1, 42, 74, 0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#eef2fb",
                color: "#376FE5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 20,
              }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "#012A4A" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#4b5563", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 32px" }}>

        <h2 style={{ margin: "0 0 32px", fontSize: 30, fontWeight: 700 }}>
          Resources
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
          gap: 32
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#EFF3F9", color: "#376FE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Whitepapers</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {resources.whitepapers.map(w => (
                <div key={w} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faChevronDown} style={{ transform: "rotate(-90deg)", fontSize: 10, color: "#9ca3af" }} />
                  <span style={{ fontSize: 14, color: "#4b5563" }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#EFF3F9", color: "#376FE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faIndustry} />
              </div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Case Studies</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {resources.caseStudies.map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faChevronDown} style={{ transform: "rotate(-90deg)", fontSize: 10, color: "#9ca3af" }} />
                  <span style={{ fontSize: 14, color: "#4b5563" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#EFF3F9", color: "#376FE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Solution Guides</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {resources.guides.map(g => (
                <div key={g} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faChevronDown} style={{ transform: "rotate(-90deg)", fontSize: 10, color: "#9ca3af" }} />
                  <span style={{ fontSize: 14, color: "#4b5563" }}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #012A4A 0%, #376FE5 100%)",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
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
              Browse All Products
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
              Talk to a Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndustriesPage />} />
        <Route path="/applications/:id" element={<ApplicationDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
