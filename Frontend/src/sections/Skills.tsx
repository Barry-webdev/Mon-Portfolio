import { useLang } from "../hooks/useLang";
import { skills } from "../data";

const CATEGORY_LABELS: Record<string, { fr: string; en: string; color: string }> = {
  frontend:  { fr: "Front-End",      en: "Front-End",   color: "#00D4AA" },
  backend:   { fr: "Back-End",       en: "Back-End",    color: "#6C63FF" },
  database:  { fr: "Base de données",en: "Database",    color: "#F97316" },
  language:  { fr: "Langages",       en: "Languages",   color: "#FACC15" },
  devops:    { fr: "Outils & Deploy",en: "Tools & Deploy", color: "#60A5FA" },
  mobile:    { fr: "Mobile",         en: "Mobile",      color: "#F472B6" },
  other:     { fr: "Autre",          en: "Other",       color: "#a3a3a3" },
};

export default function Skills() {
  const { lang } = useLang();

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
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
              color: "#6C63FF",
              marginBottom: "0.75rem",
            }}
          >
            {lang === "fr" ? "Compétences" : "Skills"}
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
            {lang === "fr" ? "Stack technique" : "Tech Stack"}
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "#6b7280",
              fontSize: "0.9375rem",
            }}
          >
            {lang === "fr"
              ? "Les technologies que j'utilise au quotidien"
              : "Technologies I use on a daily basis"}
          </p>
        </div>

        {/* Categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat) => {
            const meta = CATEGORY_LABELS[cat] ?? CATEGORY_LABELS.other;
            const catSkills = skills.filter((s) => s.category === cat);

            return (
              <div
                key={cat}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Category label */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.25rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    backgroundColor: `${meta.color}14`,
                    border: `1px solid ${meta.color}30`,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: meta.color,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: meta.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {lang === "fr" ? meta.fr : meta.en}
                  </span>
                </div>

                {/* Skills list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.375rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#e5e5e5",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: meta.color,
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div
                        style={{
                          height: "5px",
                          borderRadius: "9999px",
                          backgroundColor: "rgba(255,255,255,0.06)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            borderRadius: "9999px",
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${meta.color}99, ${meta.color})`,
                            transition: "width 1s ease",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
