import { useLang, t } from "../hooks/useLang";
import { info } from "../data";

interface Stat {
  value: string;
  labelFr: string;
  labelEn: string;
}

const STATS: Stat[] = [
  { value: "3+", labelFr: "Ans d'expérience", labelEn: "Years exp." },
  { value: "3", labelFr: "Projets", labelEn: "Projects" },
  { value: "2", labelFr: "Formations", labelEn: "Trainings" },
];

export default function Hero() {
  const { lang } = useLang();

  const [firstName, ...rest] = info.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.25rem 4rem",
        overflow: "hidden",
        backgroundColor: "#0A0A0F",
      }}
    >
      {/* Orbs background */}
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          left: "-8rem",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-6rem",
          right: "-6rem",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        {/* Badge disponible */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            border: "1px solid rgba(0,212,170,0.3)",
            backgroundColor: "rgba(0,212,170,0.08)",
            color: "#00D4AA",
            fontSize: "0.8125rem",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#00D4AA",
              boxShadow: "0 0 0 3px rgba(0,212,170,0.25)",
              animation: "pulse 2s infinite",
            }}
          />
          {lang === "fr" ? "Disponible pour des projets" : "Available for projects"}
        </div>

        {/* Nom */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          <span style={{ display: "block" }}>{firstName}</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #00D4AA 0%, #6C63FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {lastName}
          </span>
        </h1>

        {/* Titre */}
        <p
          style={{
            margin: 0,
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            fontWeight: 500,
            color: "#a3a3a3",
            letterSpacing: "0.01em",
          }}
        >
          {t(info.title, lang)}
        </p>

        {/* Tagline */}
        <p
          style={{
            margin: 0,
            fontSize: "0.875rem",
            color: "#6b7280",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {t(info.tagline, lang)}
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #00D4AA 0%, #6C63FF 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(0,212,170,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,212,170,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,212,170,0.25)";
            }}
          >
            {lang === "fr" ? "Voir mes projets" : "View my projects"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "#d4d4d4",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#d4d4d4";
            }}
          >
            {lang === "fr" ? "Me contacter" : "Contact me"}
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginTop: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.value} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    marginTop: "0.25rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {lang === "fr" ? stat.labelFr : stat.labelEn}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "2rem",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll down"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          color: "#4b5563",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "34px",
            borderRadius: "10px",
            border: "2px solid currentColor",
            display: "flex",
            justifyContent: "center",
            paddingTop: "4px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "6px",
              borderRadius: "2px",
              backgroundColor: "currentColor",
              animation: "bounce 1.5s infinite",
            }}
          />
        </div>
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(0,212,170,0.25); }
          50% { box-shadow: 0 0 0 6px rgba(0,212,170,0.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
