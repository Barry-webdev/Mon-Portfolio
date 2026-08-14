import { useLang } from "../hooks/useLang";
import { skills } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORY_META: Record<string, { fr:string; en:string; color:string; icon:string }> = {
  frontend: { fr:"Front-End",       en:"Front-End",    color:"#00D4AA", icon:"🎨" },
  backend:  { fr:"Back-End",        en:"Back-End",     color:"#6C63FF", icon:"⚙️" },
  database: { fr:"Base de données", en:"Database",     color:"#F97316", icon:"🗄️" },
  language: { fr:"Langages",        en:"Languages",    color:"#FACC15", icon:"💡" },
  devops:   { fr:"Outils & Deploy", en:"Tools & Deploy",color:"#60A5FA",icon:"🚀" },
  mobile:   { fr:"Mobile",          en:"Mobile",       color:"#F472B6", icon:"📱" },
  other:    { fr:"Autre",           en:"Other",        color:"#a3a3a3", icon:"🔩" },
};

export default function Skills() {
  const { lang } = useLang();
  const header = useScrollReveal();

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" style={{ backgroundColor:"var(--bg-alt)", padding:"7rem 1.5rem" }}>
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
            color:"var(--accent-purple)", marginBottom:"0.75rem",
            fontFamily:"var(--font-mono)",
          }}>
            {lang==="fr" ? "// Compétences" : "// Skills"}
          </span>
          <h2 style={{
            margin:0, fontSize:"clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight:900, color:"var(--text-primary)", letterSpacing:"-0.03em",
          }}>
            {lang==="fr" ? "Stack technique" : "Tech Stack"}
          </h2>
          <p style={{ marginTop:"0.75rem", color:"var(--text-muted)", fontSize:"0.9375rem" }}>
            {lang==="fr" ? "Les technologies que j'utilise au quotidien" : "Technologies I use on a daily basis"}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"1.25rem" }}>
          {categories.map((cat, ci) => {
            const meta = CATEGORY_META[cat] ?? CATEGORY_META.other;
            const catSkills = skills.filter(s => s.category === cat);
            return (
              <SkillCard key={cat} meta={meta} catSkills={catSkills} lang={lang} delay={ci * 80} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  meta: { fr:string; en:string; color:string; icon:string };
  catSkills: typeof skills;
  lang: string;
  delay: number;
}

function SkillCard({ meta, catSkills, lang, delay }: SkillCardProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        padding:"1.5rem", borderRadius:"1.375rem",
        border:"1px solid var(--border)",
        backgroundColor:"var(--bg-card)",
        transition:"border-color 0.25s, transform 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={e=>{ e.currentTarget.style.borderColor=`${meta.color}40`; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 16px 40px ${meta.color}12`; }}
      onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
    >
      {/* Category pill */}
      <div style={{
        display:"inline-flex", alignItems:"center", gap:"0.5rem",
        marginBottom:"1.375rem", padding:"0.3rem 0.875rem",
        borderRadius:"9999px",
        backgroundColor:`${meta.color}12`,
        border:`1px solid ${meta.color}30`,
      }}>
        <span style={{ fontSize:"0.875rem" }}>{meta.icon}</span>
        <span style={{ fontSize:"0.75rem", fontWeight:700, color:meta.color, letterSpacing:"0.06em", fontFamily:"var(--font-mono)" }}>
          {lang==="fr" ? meta.fr : meta.en}
        </span>
      </div>

      {/* Skills */}
      <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
        {catSkills.map(skill => (
          <div key={skill.name}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.4rem" }}>
              <span style={{ fontSize:"0.875rem", fontWeight:600, color:"var(--text-secondary)" }}>{skill.name}</span>
              <span style={{ fontSize:"0.75rem", fontWeight:700, color:meta.color, fontFamily:"var(--font-mono)" }}>{skill.level}%</span>
            </div>
            <div style={{
              height:"5px", borderRadius:"9999px",
              backgroundColor:"var(--border)", overflow:"hidden",
            }}>
              <div style={{
                height:"100%", borderRadius:"9999px",
                width: visible ? `${skill.level}%` : "0%",
                background:`linear-gradient(90deg, ${meta.color}80, ${meta.color})`,
                transition:`width 1.1s cubic-bezier(.22,1,.36,1) ${Math.random()*200}ms`,
              }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
