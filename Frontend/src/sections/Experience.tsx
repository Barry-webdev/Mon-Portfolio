import { useLang, t } from "../hooks/useLang";
import { experiences, formations } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const { lang } = useLang();
  const header = useScrollReveal();
  const left   = useScrollReveal();
  const right  = useScrollReveal();

  return (
    <section id="experience" style={{ backgroundColor:"var(--bg-alt)", padding:"7rem 1.5rem" }}>
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
            color:"var(--accent-teal)", marginBottom:"0.75rem",
            fontFamily:"var(--font-mono)",
          }}>
            {lang==="fr" ? "// Parcours" : "// Journey"}
          </span>
          <h2 style={{
            margin:0, fontSize:"clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight:900, color:"var(--text-primary)", letterSpacing:"-0.03em",
          }}>
            {lang==="fr" ? "Expériences & Formations" : "Experience & Education"}
          </h2>
        </div>

        <div className="exp-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"3rem" }}>

          {/* Expériences */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${left.visible ? "visible" : ""}`}
          >
            <h3 style={{
              margin:"0 0 2rem", fontSize:"1.0625rem", fontWeight:800,
              color:"var(--accent-teal)", display:"flex", alignItems:"center", gap:"0.5rem",
              fontFamily:"var(--font-mono)",
            }}>
              💼 {lang==="fr" ? "Expériences professionnelles" : "Work Experience"}
            </h3>

            <div style={{ display:"flex", flexDirection:"column" }}>
              {experiences.map((exp, i) => (
                <div key={i} style={{ display:"flex", gap:"1.25rem", paddingBottom: i < experiences.length-1 ? "2rem" : 0 }}>
                  {/* Timeline dot */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div style={{
                      width:"12px", height:"12px", borderRadius:"50%", marginTop:"4px",
                      background:"linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
                      boxShadow:"0 0 0 3px var(--bg-alt), 0 0 0 5px var(--accent-teal)",
                    }}/>
                    {i < experiences.length-1 && (
                      <div style={{ width:"1px", flexGrow:1, marginTop:"6px", background:"linear-gradient(180deg, rgba(0,212,170,0.4), transparent)" }}/>
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ flexGrow:1, paddingBottom: i < experiences.length-1 ? "0" : 0 }}>
                    <div style={{ display:"flex", flexWrap:"wrap", alignItems:"baseline", gap:"0.4rem", marginBottom:"0.2rem" }}>
                      <span style={{ fontSize:"1rem", fontWeight:800, color:"var(--text-primary)" }}>
                        {t(exp.role, lang)}
                      </span>
                      <span style={{ fontSize:"0.875rem", fontWeight:600, color:"var(--accent-teal)" }}>
                        @ {exp.company}
                      </span>
                    </div>
                    <div style={{
                      display:"inline-flex", alignItems:"center", gap:"0.375rem",
                      fontSize:"0.75rem", color:"var(--text-muted)", marginBottom:"0.875rem",
                      fontFamily:"var(--font-mono)",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {exp.period}
                    </div>
                    <ul style={{ margin:0, padding:"0 0 0 1.125rem", display:"flex", flexDirection:"column", gap:"0.375rem" }}>
                      {exp.tasks.map((task, j) => (
                        <li key={j} style={{ fontSize:"0.875rem", color:"var(--text-muted)", lineHeight:1.65 }}>
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
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${right.visible ? "visible" : ""}`}
          >
            <h3 style={{
              margin:"0 0 2rem", fontSize:"1.0625rem", fontWeight:800,
              color:"var(--accent-purple)", display:"flex", alignItems:"center", gap:"0.5rem",
              fontFamily:"var(--font-mono)",
            }}>
              🎓 {lang==="fr" ? "Formations & Certifications" : "Education & Certifications"}
            </h3>

            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {formations.map((f, i) => (
                <div key={i} style={{
                  display:"flex", gap:"1rem", padding:"1.25rem 1.375rem",
                  borderRadius:"1.125rem",
                  border:"1px solid rgba(108,99,255,0.15)",
                  backgroundColor:"rgba(108,99,255,0.04)",
                  transition:"border-color 0.2s, transform 0.2s",
                  alignItems:"flex-start",
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(108,99,255,0.35)"; e.currentTarget.style.transform="translateX(5px)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(108,99,255,0.15)"; e.currentTarget.style.transform="translateX(0)"; }}
                >
                  <div style={{
                    width:"38px", height:"38px", borderRadius:"0.75rem",
                    backgroundColor:"rgba(108,99,255,0.15)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.1rem", flexShrink:0,
                  }}>📚</div>
                  <div>
                    <div style={{ fontSize:"0.9375rem", fontWeight:700, color:"var(--text-primary)", marginBottom:"0.2rem" }}>
                      {t(f.title, lang)}
                    </div>
                    <div style={{ fontSize:"0.8125rem", color:"var(--accent-purple)", fontWeight:600, marginBottom:"0.125rem" }}>
                      {f.school}
                    </div>
                    <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>{f.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .exp-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
