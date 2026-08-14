import { useLang, t } from "../hooks/useLang";
import { projects } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STATUS_META: Record<string, { fr:string; en:string; color:string }> = {
  live: { fr:"En ligne",  en:"Live",        color:"#00D4AA" },
  beta: { fr:"Beta",      en:"Beta",        color:"#FACC15" },
  wip:  { fr:"En cours",  en:"In progress", color:"#F97316" },
};

export default function Projects() {
  const { lang } = useLang();
  const header = useScrollReveal();

  return (
    <section id="projects" style={{ backgroundColor:"var(--bg)", padding:"7rem 1.5rem" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${header.visible ? "visible" : ""}`}
          style={{ textAlign:"center", marginBottom:"4rem" }}
        >
          <span style={{
            display:"inline-block", fontSize:"0.6875rem", fontWeight:700,
            letterSpacing:"0.18em", textTransform:"uppercase",
            color:"var(--accent-orange)", marginBottom:"0.75rem",
            fontFamily:"var(--font-mono)",
          }}>
            {lang==="fr" ? "// Projets" : "// Projects"}
          </span>
          <h2 style={{
            margin:0, fontSize:"clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight:900, color:"var(--text-primary)", letterSpacing:"-0.03em",
          }}>
            {lang==="fr" ? "Mes réalisations" : "My work"}
          </h2>
          <p style={{ marginTop:"0.75rem", color:"var(--text-muted)", fontSize:"0.9375rem" }}>
            {lang==="fr"
              ? "Des projets concrets, de l'idée au déploiement"
              : "Real projects, from idea to deployment"}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"1.375rem" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, lang, delay }: { project: typeof projects[0]; lang: string; delay: number }) {
  const { ref, visible } = useScrollReveal();
  const status = STATUS_META[project.status];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{
        transitionDelay:`${delay}ms`,
        display:"flex", flexDirection:"column",
        padding:"1.75rem", borderRadius:"1.375rem",
        border:`1px solid ${project.color}18`,
        backgroundColor:"var(--bg-card)",
        transition:"transform 0.25s, border-color 0.25s, box-shadow 0.25s",
        cursor:"default",
      }}
      onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.borderColor=`${project.color}45`; e.currentTarget.style.boxShadow=`0 20px 48px ${project.color}14`; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor=`${project.color}18`; e.currentTarget.style.boxShadow="none"; }}
    >
      {/* Top row */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1.375rem" }}>
        <div style={{
          width:"52px", height:"52px", borderRadius:"0.875rem",
          backgroundColor:`${project.color}15`, border:`1px solid ${project.color}28`,
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem",
        }}>
          {project.icon}
        </div>
        <div style={{ display:"flex", gap:"0.4rem", alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end" }}>
          <span style={{
            fontSize:"0.6875rem", fontWeight:700, padding:"0.2rem 0.6rem",
            borderRadius:"9999px", backgroundColor:"var(--bg-card-hover)",
            color:"var(--text-muted)", letterSpacing:"0.05em", textTransform:"uppercase",
            fontFamily:"var(--font-mono)",
          }}>
            {project.type === "solo" ? "Solo" : "Collab"}
          </span>
          <span style={{
            fontSize:"0.6875rem", fontWeight:700, padding:"0.2rem 0.6rem",
            borderRadius:"9999px",
            backgroundColor:`${status.color}15`, color:status.color,
            border:`1px solid ${status.color}30`,
            letterSpacing:"0.05em", textTransform:"uppercase",
            fontFamily:"var(--font-mono)",
          }}>
            {lang==="fr" ? status.fr : status.en}
          </span>
        </div>
      </div>

      {/* Name */}
      <h3 style={{ margin:"0 0 0.5rem", fontSize:"1.125rem", fontWeight:800, color:"var(--text-primary)", letterSpacing:"-0.02em" }}>
        {project.name}
      </h3>

      {/* Description */}
      <p style={{ margin:"0 0 1.375rem", fontSize:"0.875rem", lineHeight:1.7, color:"var(--text-muted)", flexGrow:1 }}>
        {t(project.description, lang)}
      </p>

      {/* Tags */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"0.375rem", marginBottom:"1.5rem" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontSize:"0.75rem", fontWeight:600, padding:"0.25rem 0.625rem",
            borderRadius:"0.375rem",
            backgroundColor:`${project.color}0e`, color:project.color,
            border:`1px solid ${project.color}22`,
            fontFamily:"var(--font-mono)",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          style={{
            display:"inline-flex", alignItems:"center", gap:"0.5rem",
            fontSize:"0.875rem", fontWeight:700,
            color:project.color, textDecoration:"none",
            padding:"0.5625rem 1.125rem", borderRadius:"0.75rem",
            border:`1px solid ${project.color}30`,
            backgroundColor:`${project.color}08`,
            transition:"background 0.2s, transform 0.2s",
            width:"fit-content",
          }}
          onMouseEnter={e=>{ e.currentTarget.style.backgroundColor=`${project.color}18`; e.currentTarget.style.transform="translateX(3px)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.backgroundColor=`${project.color}08`; e.currentTarget.style.transform="translateX(0)"; }}
        >
          {lang==="fr" ? "Voir le projet" : "View project"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      ) : (
        <span style={{
          display:"inline-flex", alignItems:"center", gap:"0.5rem",
          fontSize:"0.875rem", fontWeight:600, color:"var(--text-muted)",
          padding:"0.5625rem 1.125rem", borderRadius:"0.75rem",
          border:"1px solid var(--border)", width:"fit-content",
        }}>
          🔒 {lang==="fr" ? "Privé" : "Private"}
        </span>
      )}
    </div>
  );
}
