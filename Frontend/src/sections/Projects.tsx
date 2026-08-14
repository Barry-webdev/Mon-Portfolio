import { useLang, t } from "../hooks/useLang";
import { projects } from "../data";

const STATUS_LABEL: Record<string, { fr: string; en: string }> = {
  live:  { fr: "En ligne",  en: "Live" },
  beta:  { fr: "Beta",      en: "Beta" },
  wip:   { fr: "En cours",  en: "In progress" },
};

const STATUS_COLOR: Record<string, string> = {
  live: "#00D4AA",
  beta: "#FACC15",
  wip:  "#F97316",
};

export default function Projects() {
  const { lang } = useLang();

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#0A0A0F",
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
              color: "#F97316",
              marginBottom: "0.75rem",
            }}
          >
            {lang === "fr" ? "Projets" : "Projects"}
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
            {lang === "fr" ? "Mes réalisations" : "My work"}
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#6b7280", fontSize: "0.9375rem" }}>
            {lang === "fr"
              ? "Des projets concrets, de l'idée au déploiement"
              : "Real projects, from idea to deployment"}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1.75rem",
                borderRadius: "1.25rem",
                border: `1px solid ${project.color}20`,
                backgroundColor: "rgba(255,255,255,0.02)",
                transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${project.color}50`;
                el.style.boxShadow = `0 16px 40px ${project.color}12`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = `${project.color}20`;
                el.style.boxShadow = "none";
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "0.875rem",
                    backgroundColor: `${project.color}18`,
                    border: `1px solid ${project.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {project.icon}
                </div>

                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  {/* Type badge */}
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#a3a3a3",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.type === "solo"
                      ? "Solo"
                      : lang === "fr" ? "Collab" : "Collab"}
                  </span>
                  {/* Status badge */}
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      backgroundColor: `${STATUS_COLOR[project.status]}18`,
                      color: STATUS_COLOR[project.status],
                      border: `1px solid ${STATUS_COLOR[project.status]}30`,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {lang === "fr"
                      ? STATUS_LABEL[project.status].fr
                      : STATUS_LABEL[project.status].en}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: "0 0 1.25rem",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "#6b7280",
                  flexGrow: 1,
                }}
              >
                {t(project.description, lang)}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      padding: "0.25rem 0.625rem",
                      borderRadius: "0.375rem",
                      backgroundColor: `${project.color}10`,
                      color: project.color,
                      border: `1px solid ${project.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: project.color,
                    textDecoration: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.625rem",
                    border: `1px solid ${project.color}30`,
                    backgroundColor: `${project.color}08`,
                    transition: "background 0.2s",
                  }}
                >
                  {lang === "fr" ? "Voir le projet" : "View project"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ) : (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#4b5563",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.625rem",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  🔒 {lang === "fr" ? "Privé" : "Private"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
