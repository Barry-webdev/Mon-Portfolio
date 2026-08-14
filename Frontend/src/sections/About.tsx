import { useLang, t } from "../hooks/useLang";
import { info } from "../data";

export default function About() {
  const { lang } = useLang();

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0A0A0F",
        padding: "6rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00D4AA",
              marginBottom: "0.75rem",
            }}
          >
            {lang === "fr" ? "À propos" : "About"}
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            {lang === "fr" ? "Qui suis-je ?" : "Who am I?"}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="about-grid"
        >
          {/* Avatar card */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "220px",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "2rem 1.5rem",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                {/* Initiales */}
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "1.25rem",
                    background: "linear-gradient(135deg, #00D4AA 0%, #6C63FF 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(108,99,255,0.35)",
                  }}
                >
                  BR
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ margin: 0, fontWeight: 700, color: "#fff", fontSize: "1rem" }}>
                    {info.name}
                  </p>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.8125rem", color: "#6b7280" }}>
                    {t(info.title, lang)}
                  </p>
                </div>
                {/* Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(0,212,170,0.1)",
                    color: "#00D4AA",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#00D4AA",
                    }}
                  />
                  {lang === "fr" ? "Disponible" : "Available"}
                </div>
                {/* Info lines */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { icon: "📍", text: "Guinée" },
                    { icon: "✉️", text: info.email },
                    { icon: "📱", text: info.phone },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.75rem",
                        color: "#6b7280",
                      }}
                    >
                      <span>{item.icon}</span>
                      <span style={{ wordBreak: "break-all" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#a3a3a3",
              }}
            >
              {t(info.about, lang)}
            </p>

            {/* Points forts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {[
                { icon: "⚡", titleFr: "Front-End", textFr: "React · Next.js · Tailwind", titleEn: "Front-End", textEn: "React · Next.js · Tailwind" },
                { icon: "🔧", titleFr: "Back-End", textFr: "Node.js · API REST · Auth", titleEn: "Back-End", textEn: "Node.js · REST API · Auth" },
                { icon: "🗄️", titleFr: "Base de données", textFr: "PostgreSQL · Prisma · MongoDB", titleEn: "Database", textEn: "PostgreSQL · Prisma · MongoDB" },
                { icon: "🎓", titleFr: "Formateur", textFr: "Simplon · CSP EIB-Pita", titleEn: "Trainer", textEn: "Simplon · CSP EIB-Pita" },
              ].map((card) => (
                <div
                  key={card.titleFr}
                  style={{
                    padding: "1rem",
                    borderRadius: "0.875rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div style={{ fontSize: "1.25rem", marginBottom: "0.375rem" }}>{card.icon}</div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#fff", marginBottom: "0.25rem" }}>
                    {lang === "fr" ? card.titleFr : card.titleEn}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    {lang === "fr" ? card.textFr : card.textEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Liens sociaux */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                style={socialBtnStyle}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={socialBtnStyle}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: auto 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const socialBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.625rem",
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.03)",
  color: "#a3a3a3",
  fontSize: "0.875rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s, border-color 0.2s",
};
