import { useEffect, useState } from "react";
import { useLang, t } from "../hooks/useLang";
import { info } from "../data";

const STATS = [
  { value: "3+", labelFr: "Ans d'exp.",    labelEn: "Years exp." },
  { value: "6",  labelFr: "Projets",       labelEn: "Projects"   },
  { value: "2",  labelFr: "Formations",    labelEn: "Trainings"  },
];

const FLOATING_TAGS = [
  { label: "React.js",  pos: "top: -16px; right: -24px",  delay: "0s"    },
  { label: "Next.js",   pos: "bottom: -16px; right: -20px", delay: "0.4s" },
  { label: "Node.js",   pos: "bottom: -16px; left: -20px",  delay: "0.8s" },
];

export default function Hero() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const [firstName, ...rest] = info.name.split(" ");
  const lastName = rest.join(" ");

  const delay = (ms: number): React.CSSProperties => ({
    animation: mounted ? `fadeInUp 0.7s cubic-bezier(.22,1,.36,1) ${ms}ms both` : "none",
  });

  return (
    <section id="home" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 1.5rem 5rem", overflow: "hidden",
      backgroundColor: "var(--bg)",
    }}>

      {/* ── Orbs ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:"-120px", left:"-100px",
          width:"600px", height:"600px", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(0,212,170,0.09) 0%, transparent 65%)",
          filter:"blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}/>
        <div style={{
          position:"absolute", bottom:"-100px", right:"-80px",
          width:"500px", height:"500px", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 65%)",
          filter:"blur(40px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}/>
        {/* Grid */}
        <div style={{
          position:"absolute", inset:0, opacity:0.025,
          backgroundImage:"linear-gradient(var(--text-primary) 1px,transparent 1px),linear-gradient(90deg,var(--text-primary) 1px,transparent 1px)",
          backgroundSize:"64px 64px",
        }}/>
      </div>

      {/* ── Layout ── */}
      <div style={{
        position:"relative", zIndex:1,
        maxWidth:"1100px", width:"100%",
        display:"flex", flexDirection:"column",
        alignItems:"center", gap:"2.5rem",
      }} className="hero-layout">

        {/* ── Left: text ── */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", maxWidth:"640px" }} className="hero-text">

          {/* Badge */}
          <div style={{ ...delay(0), marginBottom:"1.5rem",
            display:"inline-flex", alignItems:"center", gap:"0.5rem",
            padding:"0.375rem 1rem", borderRadius:"9999px",
            border:"1px solid rgba(0,212,170,0.3)",
            backgroundColor:"rgba(0,212,170,0.07)",
            color:"var(--accent-teal)", fontSize:"0.8125rem", fontWeight:600,
          }}>
            <span style={{
              width:"8px", height:"8px", borderRadius:"50%",
              backgroundColor:"var(--accent-teal)",
              animation:"pulse-dot 2s ease infinite",
            }}/>
            {lang==="fr" ? "Disponible pour des projets" : "Available for projects"}
          </div>

          {/* Name */}
          <h1 style={{
            ...delay(100), margin:"0 0 0.75rem",
            fontSize:"clamp(2.75rem, 9vw, 5rem)",
            fontWeight:900, lineHeight:1.05, letterSpacing:"-0.04em",
            color:"var(--text-primary)", fontFamily:"var(--font-sans)",
          }}>
            <span style={{ display:"block" }}>{firstName}</span>
            <span style={{
              display:"block",
              background:"linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-purple) 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>
              {lastName}
            </span>
          </h1>

          {/* Title */}
          <p style={{ ...delay(200), margin:"0 0 0.5rem",
            fontSize:"clamp(1rem, 3vw, 1.25rem)", fontWeight:600,
            color:"var(--text-secondary)", letterSpacing:"0.01em",
          }}>
            {t(info.title, lang)}
          </p>

          {/* Tagline */}
          <p style={{ ...delay(300), margin:"0 0 2rem",
            fontSize:"0.8125rem", color:"var(--text-muted)",
            letterSpacing:"0.1em", textTransform:"uppercase",
            fontFamily:"var(--font-mono)",
          }}>
            {t(info.tagline, lang)}
          </p>

          {/* CTAs */}
          <div style={{ ...delay(400),
            display:"flex", gap:"0.75rem", flexWrap:"wrap", justifyContent:"center",
            marginBottom:"2.5rem",
          }}>
            <a href="#projects" style={{
              display:"inline-flex", alignItems:"center", gap:"0.5rem",
              padding:"0.8rem 1.75rem", borderRadius:"0.875rem",
              background:"linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-purple) 100%)",
              color:"#fff", fontWeight:700, fontSize:"0.9375rem",
              textDecoration:"none", boxShadow:"var(--shadow-glow-teal)",
              transition:"transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(0,212,170,0.4)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="var(--shadow-glow-teal)"; }}
            >
              {lang==="fr" ? "Voir mes projets" : "View my projects"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center", gap:"0.5rem",
              padding:"0.8rem 1.75rem", borderRadius:"0.875rem",
              border:"1px solid var(--border-hover)",
              backgroundColor:"var(--bg-card)", color:"var(--text-secondary)",
              fontWeight:600, fontSize:"0.9375rem", textDecoration:"none",
              transition:"border-color 0.2s, color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e=>{ e.currentTarget.style.color="var(--text-primary)"; e.currentTarget.style.transform="translateY(-3px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.color="var(--text-secondary)"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              {lang==="fr" ? "Me contacter" : "Contact me"}
            </a>
          </div>

          {/* Stats */}
          <div style={{ ...delay(500), display:"flex", alignItems:"center", gap:"0", flexWrap:"wrap", justifyContent:"center" }}>
            {STATS.map((stat, i) => (
              <div key={stat.value} style={{ display:"flex", alignItems:"center" }}>
                <div style={{ textAlign:"center", padding:"0 1.5rem" }}>
                  <div style={{
                    fontSize:"2rem", fontWeight:900, color:"var(--text-primary)",
                    fontFamily:"var(--font-sans)", lineHeight:1,
                    background:"linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                  }}>{stat.value}</div>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", marginTop:"0.25rem", whiteSpace:"nowrap" }}>
                    {lang==="fr" ? stat.labelFr : stat.labelEn}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div style={{ width:"1px", height:"2rem", backgroundColor:"var(--border)" }}/>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Avatar card ── */}
        <div style={{ ...delay(300), position:"relative", flexShrink:0 }} className="hero-avatar">
          {/* Glow ring */}
          <div style={{
            position:"absolute", inset:"-20px", borderRadius:"50%",
            background:"conic-gradient(from 0deg, var(--accent-teal), var(--accent-purple), var(--accent-teal))",
            filter:"blur(24px)", opacity:0.25,
            animation:"float 6s ease-in-out infinite",
          }}/>

          {/* Card */}
          <div style={{
            position:"relative", zIndex:1,
            width:"200px", padding:"2rem 1.5rem",
            borderRadius:"1.75rem",
            border:"1px solid var(--border)",
            backgroundColor:"var(--bg-card)",
            backdropFilter:"blur(20px)",
            display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem",
            boxShadow:"var(--shadow-card)",
          }}>
            {/* Avatar */}
            <div style={{
              width:"96px", height:"96px", borderRadius:"1.25rem", overflow:"hidden",
              background:"linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
              boxShadow:"0 8px 28px rgba(108,99,255,0.4)",
              flexShrink:0,
            }}>
              <img src="/photo.jpeg" alt="Barry Abdoul Razzaï" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>

            <div style={{ textAlign:"center" }}>
              <p style={{ margin:0, fontWeight:800, color:"var(--text-primary)", fontSize:"0.9375rem", lineHeight:1.3 }}>
                {info.name}
              </p>
              <p style={{ margin:"0.25rem 0 0", fontSize:"0.75rem", color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>
                {t(info.title, lang)}
              </p>
            </div>

            {/* Status */}
            <div style={{
              display:"flex", alignItems:"center", gap:"0.4rem",
              padding:"0.3rem 0.875rem", borderRadius:"9999px",
              backgroundColor:"rgba(0,212,170,0.1)", color:"var(--accent-teal)",
              fontSize:"0.75rem", fontWeight:700, border:"1px solid rgba(0,212,170,0.2)",
            }}>
              <span style={{
                width:"6px", height:"6px", borderRadius:"50%",
                backgroundColor:"var(--accent-teal)",
                animation:"pulse-dot 2s ease infinite",
              }}/>
              {lang==="fr" ? "Disponible" : "Available"}
            </div>
          </div>

          {/* Floating tags */}
          {FLOATING_TAGS.map((tag) => (
            <div key={tag.label} style={{
              position:"absolute",
              ...Object.fromEntries(
                tag.pos.split(";").filter(Boolean).map(s => {
                  const [k, v] = s.trim().split(":");
                  return [k.trim().replace(/-([a-z])/g, (_,c) => c.toUpperCase()), v.trim()];
                })
              ),
              padding:"0.375rem 0.875rem", borderRadius:"0.875rem",
              border:"1px solid var(--border)",
              backgroundColor:"var(--bg-alt)",
              fontSize:"0.75rem", fontWeight:600, color:"var(--text-secondary)",
              boxShadow:"var(--shadow-card)",
              animation:`float 5s ease-in-out ${tag.delay} infinite`,
              whiteSpace:"nowrap", fontFamily:"var(--font-mono)",
            }}>
              {tag.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <a href="#about" aria-label="Scroll down" style={{
        position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:"0.375rem",
        color:"var(--text-muted)", textDecoration:"none",
        transition:"color 0.2s",
        animation: mounted ? "fadeIn 1s 1s both" : "none",
      }}
        onMouseEnter={e=>{ e.currentTarget.style.color="var(--text-secondary)"; }}
        onMouseLeave={e=>{ e.currentTarget.style.color="var(--text-muted)"; }}
      >
        <div style={{
          width:"20px", height:"34px", borderRadius:"10px",
          border:"2px solid currentColor",
          display:"flex", justifyContent:"center", paddingTop:"4px",
        }}>
          <div style={{
            width:"4px", height:"7px", borderRadius:"2px",
            backgroundColor:"currentColor",
            animation:"bounce-scroll 1.5s ease infinite",
          }}/>
        </div>
        <span style={{ fontSize:"0.625rem", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"var(--font-mono)" }}>scroll</span>
      </a>

      <style>{`
        @media (min-width: 900px) {
          .hero-layout { flex-direction: row !important; justify-content: space-between; align-items: center; }
          .hero-text { align-items: flex-start !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
