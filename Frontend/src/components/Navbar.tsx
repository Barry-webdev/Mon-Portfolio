import { useState, useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { href: "#home",       labelFr: "Accueil",      labelEn: "Home" },
  { href: "#about",      labelFr: "À propos",     labelEn: "About" },
  { href: "#skills",     labelFr: "Compétences",  labelEn: "Skills" },
  { href: "#projects",   labelFr: "Projets",      labelEn: "Projects" },
  { href: "#experience", labelFr: "Expérience",   labelEn: "Experience" },
  { href: "#contact",    labelFr: "Contact",      labelEn: "Contact" },
];

export default function Navbar() {
  const { lang, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mounted, setMounted]     = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = theme === "dark";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
        backgroundColor: scrolled
          ? dark ? "rgba(10,10,15,0.88)" : "rgba(248,249,252,0.88)"
          : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
        animation: mounted ? "fadeInDown 0.5s ease both" : "none",
      }}
    >
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "0 1.5rem", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* ── Logo ── */}
        <a href="#home" style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 700, fontSize: "1.1rem",
          textDecoration: "none", letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-purple) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          &lt;BAR.dev /&gt;
        </a>

        {/* ── Desktop nav ── */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}
              style={{
                padding: "0.4rem 0.8rem", borderRadius: "0.5rem",
                fontSize: "0.875rem", fontWeight: 500,
                color: "var(--text-muted)", textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {lang === "fr" ? link.labelFr : link.labelEn}
            </a>
          ))}

          {/* Theme toggle */}
          <button onClick={toggleTheme} title={dark ? "Light mode" : "Dark mode"}
            style={{
              marginLeft: "0.5rem", width: "36px", height: "36px",
              borderRadius: "0.625rem", border: "1px solid var(--border)",
              backgroundColor: "var(--bg-card)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.backgroundColor = "var(--bg-card-hover)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.backgroundColor = "var(--bg-card)"; }}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Lang toggle */}
          <button onClick={toggle}
            style={{
              marginLeft: "0.375rem", padding: "0.4rem 0.875rem",
              borderRadius: "0.5rem", border: "1px solid rgba(0,212,170,0.35)",
              backgroundColor: "rgba(0,212,170,0.08)", color: "var(--accent-teal)",
              fontSize: "0.8125rem", fontWeight: 700, cursor: "pointer",
              letterSpacing: "0.06em", fontFamily: "var(--font-mono)",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(0,212,170,0.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(0,212,170,0.08)"; }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* ── Mobile right side ── */}
        <div className="mobile-right" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button onClick={toggleTheme}
            style={{
              width: "34px", height: "34px", borderRadius: "0.5rem",
              border: "1px solid var(--border)", backgroundColor: "var(--bg-card)",
              cursor: "pointer", fontSize: "0.9rem",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.375rem", color: "var(--text-secondary)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div style={{
        overflow: "hidden",
        maxHeight: menuOpen ? "400px" : "0",
        transition: "max-height 0.35s cubic-bezier(.22,1,.36,1)",
        backgroundColor: dark ? "rgba(10,10,15,0.97)" : "rgba(248,249,252,0.97)",
        borderTop: menuOpen ? "1px solid var(--border)" : "none",
      }}>
        <div style={{ padding: "0.75rem 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.625rem 0.75rem", borderRadius: "0.5rem",
                fontSize: "0.9375rem", color: "var(--text-secondary)",
                textDecoration: "none", fontWeight: 500,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--bg-card)"; e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              {lang === "fr" ? link.labelFr : link.labelEn}
            </a>
          ))}
          <button onClick={() => { toggle(); setMenuOpen(false); }}
            style={{
              marginTop: "0.5rem", padding: "0.625rem 0.875rem",
              borderRadius: "0.5rem", border: "1px solid rgba(0,212,170,0.3)",
              backgroundColor: "rgba(0,212,170,0.08)", color: "var(--accent-teal)",
              fontSize: "0.875rem", fontWeight: 700, cursor: "pointer",
              width: "fit-content", fontFamily: "var(--font-mono)",
            }}
          >
            {lang === "fr" ? "Switch to EN" : "Passer en FR"}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-right { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav  { display: none !important; } }
      `}</style>
    </nav>
  );
}
