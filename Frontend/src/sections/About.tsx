import { useLang, t } from "../hooks/useLang";
import { info } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STRENGTHS = [
  { icon: "⚡", titleFr:"Front-End",         textFr:"React · Next.js · Tailwind",    titleEn:"Front-End",  textEn:"React · Next.js · Tailwind"  },
  { icon: "�", titleFr:"Mobile",            textFr:"React Native",                  titleEn:"Mobile",     textEn:"React Native"                },
  { icon: "�🔧", titleFr:"Back-End",          textFr:"Node.js · API REST · Auth",     titleEn:"Back-End",   textEn:"Node.js · REST API · Auth"    },
  { icon: "🗄️", titleFr:"Base de données",   textFr:"PostgreSQL · Prisma · MongoDB", titleEn:"Database",   textEn:"PostgreSQL · Prisma · MongoDB"},
  { icon: "🎓", titleFr:"Formateur",          textFr:"Simplon · CSP EIB-Pita",       titleEn:"Trainer",    textEn:"Simplon · CSP EIB-Pita"       },
];

export default function About() {
  const { lang } = useLang();
  const header  = useScrollReveal();
  const left    = useScrollReveal();
  const right   = useScrollReveal();

  return (
    <section id="about" style={{ backgroundColor:"var(--bg)", padding:"7rem 1.5rem" }}>
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
            {lang==="fr" ? "// À propos" : "// About"}
          </span>
          <h2 style={{
            margin:0, fontSize:"clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight:900, color:"var(--text-primary)",
            letterSpacing:"-0.03em", lineHeight:1.15,
          }}>
            {lang==="fr" ? "Qui suis-je ?" : "Who am I?"}
          </h2>
        </div>

        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"3rem" }}>

          {/* Avatar */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${left.visible ? "visible" : ""}`}
            style={{ display:"flex", justifyContent:"center" }}
          >
            <div style={{ position:"relative", width:"240px" }}>
              <div style={{
                position:"absolute", inset:"-12px", borderRadius:"2rem",
                background:"linear-gradient(135deg, rgba(0,212,170,0.15), rgba(108,99,255,0.15))",
                filter:"blur(16px)",
              }}/>
              <div style={{
                position:"relative", padding:"2rem 1.75rem",
                borderRadius:"1.75rem", border:"1px solid var(--border)",
                backgroundColor:"var(--bg-card)",
                backdropFilter:"blur(12px)",
                display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem",
                boxShadow:"var(--shadow-card)",
              }}>
                {/* Photo */}
                <div style={{
                  width:"100px", height:"100px", borderRadius:"1.375rem", overflow:"hidden",
                  boxShadow:"0 8px 28px rgba(108,99,255,0.4)",
                }}>
                  <img src="/photo.jpeg" alt="Barry Abdoul Razzaï" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                </div>

                <div style={{ textAlign:"center" }}>
                  <p style={{ margin:0, fontWeight:800, color:"var(--text-primary)", fontSize:"1rem" }}>{info.name}</p>
                  <p style={{ margin:"0.25rem 0 0", fontSize:"0.75rem", color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>
                    {t(info.title, lang)}
                  </p>
                </div>

                <div style={{
                  display:"flex", alignItems:"center", gap:"0.4rem",
                  padding:"0.3rem 0.875rem", borderRadius:"9999px",
                  backgroundColor:"rgba(0,212,170,0.1)", color:"var(--accent-teal)",
                  fontSize:"0.75rem", fontWeight:700,
                }}>
                  <span style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:"var(--accent-teal)", animation:"pulse-dot 2s ease infinite" }}/>
                  {lang==="fr" ? "Disponible" : "Available"}
                </div>

                {[
                  { icon:"📍", text:"Guinée" },
                  { icon:"✉️", text:info.email },
                  { icon:"📱", text:info.phone },
                ].map(item => (
                  <div key={item.text} style={{ display:"flex", alignItems:"center", gap:"0.5rem", fontSize:"0.75rem", color:"var(--text-muted)", width:"100%" }}>
                    <span>{item.icon}</span>
                    <span style={{ wordBreak:"break-all" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${right.visible ? "visible" : ""}`}
            style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.75rem" }}
          >
            <p style={{ margin:0, fontSize:"1.0625rem", lineHeight:1.8, color:"var(--text-secondary)" }}>
              {t(info.about, lang)}
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.875rem" }}>
              {STRENGTHS.map((card, i) => (
                <div key={card.titleFr}
                  className={`reveal delay-${(i+1)*100}`}
                  style={{
                    padding:"1.125rem", borderRadius:"1rem",
                    border:"1px solid var(--border)",
                    backgroundColor:"var(--bg-card)",
                    transition:"border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                    cursor:"default",
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="var(--shadow-card)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <div style={{ fontSize:"1.25rem", marginBottom:"0.375rem" }}>{card.icon}</div>
                  <div style={{ fontSize:"0.8125rem", fontWeight:700, color:"var(--text-primary)", marginBottom:"0.25rem" }}>
                    {lang==="fr" ? card.titleFr : card.titleEn}
                  </div>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>
                    {lang==="fr" ? card.textFr : card.textEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Liens */}
            <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
              {[
                { href:info.github,   label:"GitHub",   color:"var(--accent-purple)" },
                { href:info.linkedin, label:"LinkedIn",  color:"#60A5FA" },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"0.5rem",
                    padding:"0.5625rem 1.125rem", borderRadius:"0.75rem",
                    border:"1px solid var(--border)", backgroundColor:"var(--bg-card)",
                    color:"var(--text-secondary)", fontSize:"0.875rem", fontWeight:600,
                    textDecoration:"none", transition:"color 0.2s, border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.color=link.color; e.currentTarget.style.borderColor=link.color+"60"; e.currentTarget.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.color="var(--text-secondary)"; e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: auto 1fr !important; }
        }
      `}</style>
    </section>
  );
}
