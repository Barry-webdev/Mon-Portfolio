import { useState, useEffect } from "react";
import { useLang } from "../hooks/useLang";

const NAV_LINKS = [
  { href: "#home", labelFr: "Accueil", labelEn: "Home" },
  { href: "#about", labelFr: "À propos", labelEn: "About" },
  { href: "#skills", labelFr: "Compétences", labelEn: "Skills" },
  { href: "#projects", labelFr: "Projets", labelEn: "Projects" },
  { href: "#experience", labelFr: "Expérience", labelEn: "Experience" },
  { href: "#contact", labelFr: "Contact", labelEn: "Contact" },
];

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.3s, border-color 0.3s",
    backgroundColor: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
  };

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.25rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontWeight: 800,
            fontSize: "1.125rem",
            textDecoration: "none",
            background: "linear-gradient(135deg, #00D4AA 0%, #6C63FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          BAR<span style={{ opacity: 0.7 }}>.</span>dev
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: "0.375rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "#a3a3a3",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a3a3a3";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {lang === "fr" ? link.labelFr : link.labelEn}
            </a>
          ))}

          {/* Lang toggle */}
          <button
            onClick={toggle}
            style={{
              marginLeft: "0.5rem",
              padding: "0.375rem 0.875rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(0,212,170,0.3)",
              backgroundColor: "rgba(0,212,170,0.08)",
              color: "#00D4AA",
              fontSize: "0.8125rem",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,212,170,0.16)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,212,170,0.08)";
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="mobile-burger"
          aria-label="Menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#d4d4d4",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10,10,15,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.625rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.9375rem",
                color: "#a3a3a3",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {lang === "fr" ? link.labelFr : link.labelEn}
            </a>
          ))}
          <button
            onClick={() => { toggle(); setMenuOpen(false); }}
            style={{
              marginTop: "0.5rem",
              padding: "0.625rem 0.875rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(0,212,170,0.3)",
              backgroundColor: "rgba(0,212,170,0.08)",
              color: "#00D4AA",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            {lang === "fr" ? "Switch to EN" : "Passer en FR"}
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .mobile-burger { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
