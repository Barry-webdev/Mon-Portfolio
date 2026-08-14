import { useLang, t } from "../hooks/useLang";
import { experiences, formations } from "../data";

export default function Experience() {
  const { lang } = useLang();

  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#0D0D14",
        padding: "6rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
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
            {lang === "fr" ? "Parcours" : "Journey"}
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            {lang === "fr" ? "Expériences & Formations" : "Experience & Education"}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="exp-grid"
        >
          {/* Expériences */}
          <div>
            <h3
              style={{
                margin: "0 0 2rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#00D4AA",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              💼 {lang === "fr" ? "Expériences professionnelles" : "Work Experience"}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    paddingBottom: i < experiences.length - 1 ? "2rem" : "0",
                  }}
                >
                  {/* Timeline */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#00D4AA",
                        border: "2px solid #0D0D14",
                        outline: "2px solid #00D4AA",
                        flexShrink: 0,
                        marginTop: "4px",
                      }}
                    />
                    {i < experiences.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          flexGrow: 1,
                          backgroundColor: "rgba(0,212,170,0.2)",
                          marginTop: "4px",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flexGrow: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "baseline",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {t(exp.role, lang)}
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "#00D4AA",
                        }}
                      >
                        — {exp.company}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        marginBottom: "0.875rem",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      📅 {exp.period}
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        padding: "0 0 0 1.125rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                      }}
                    >
                      {exp.tasks.map((task, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: "0.875rem",
                            color: "#9ca3af",
                            lineHeight: 1.6,
                          }}
                        >
                          {t(task, lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3
              style={{
                margin: "0 0 2rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#6C63FF",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              🎓 {lang === "fr" ? "Formations & Certifications" : "Education & Certifications"}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {formations.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    borderRadius: "1rem",
                    border: "1px solid rgba(108,99,255,0.15)",
                    backgroundColor: "rgba(108,99,255,0.04)",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "0.625rem",
                      backgroundColor: "rgba(108,99,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    📚
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "#e5e5e5",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {t(f.title, lang)}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "#6C63FF",
                        fontWeight: 600,
                        marginBottom: "0.125rem",
                      }}
                    >
                      {f.school}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                      {f.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
