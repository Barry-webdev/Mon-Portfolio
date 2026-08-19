import { useLang } from "../hooks/useLang";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Compétences principales affichées en cercles
const MAIN_SKILLS = [
  { name: "React / Next.js",     level: 88, color: "#00D4AA" },
  { name: "React Native",        level: 90, color: "#00D4AA" },
  { name: "Node.js",             level: 75, color: "#00D4AA" },
  { name: "JavaScript / TS",     level: 85, color: "#00D4AA" },
  { name: "UI / UX (Figma)",     level: 70, color: "#00D4AA" },
];

// Toutes les techs en tags
const ALL_SKILLS = [
  { name: "JavaScript",       category: "Langages",        color: "#FACC15" },
  { name: "TypeScript",       category: "Langages",        color: "#FACC15" },
  { name: "React.js",         category: "Front-End",       color: "#00D4AA" },
  { name: "Next.js",          category: "Front-End",       color: "#00D4AA" },
  { name: "Tailwind CSS",     category: "Front-End",       color: "#00D4AA" },
  { name: "HTML5 / CSS3",     category: "Front-End",       color: "#00D4AA" },
  { name: "React Native",     category: "Mobile",          color: "#F472B6" },
  { name: "Expo",             category: "Mobile",          color: "#F472B6" },
  { name: "Node.js",          category: "Back-End",        color: "#6C63FF" },
  { name: "API REST",         category: "Back-End",        color: "#6C63FF" },
  { name: "PostgreSQL",       category: "Base de données", color: "#F97316" },
  { name: "Prisma ORM",       category: "Base de données", color: "#F97316" },
  { name: "MongoDB",          category: "Base de données", color: "#F97316" },
  { name: "Firebase",         category: "Base de données", color: "#F97316" },
  { name: "Figma",            category: "UI/UX",           color: "#EC4899" },
  { name: "Git / GitHub",     category: "Outils",          color: "#60A5FA" },
  { name: "Vercel",           category: "Outils",          color: "#60A5FA" },
  { name: "VS Code",          category: "Outils",          color: "#60A5FA" },
];

// Cercle SVG
interface CircleProps {
  level: number;
  color: string;
  size?: number;
  visible: boolean;
}

function CircleProgress({ level, color, size = 120, visible }: CircleProps) {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (visible ? level / 100 : 0) * circ;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      {/* Track */}
      <circle cx={size/2} cy={size/2} r={r}
        fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      {/* Progress */}
      <circle cx={size/2} cy={size/2} r={r}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: visible ? "stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)" : "none" }}
      />
    </svg>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const header  = useScrollReveal();
  const circles = useScrollReveal();
  const tags    = useScrollReveal();

  return (
    <section id="skills" style={{ backgroundColor: "var(--bg-alt)", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${header.visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--accent-teal)", marginBottom: "0.75rem",
            fontFamily: "var(--font-mono)",
          }}>
            {lang === "fr" ? "// Compétences" : "// Skills"}
          </span>
          <h2 style={{
            margin: 0, fontSize: "clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.03em",
          }}>
            {lang === "fr" ? "Mes Atouts" : "My Strengths"}
          </h2>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            {lang === "fr" ? "Les technologies que je maîtrise" : "Technologies I master"}
          </p>
        </div>

        {/* Cercles principaux */}
        <div
          ref={circles.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${circles.visible ? "visible" : ""}`}
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {MAIN_SKILLS.map((skill, i) => (
            <div key={skill.name}
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "0.75rem",
                transitionDelay: `${i * 100}ms`,
              }}
              className={`reveal ${circles.visible ? "visible" : ""}`}
            >
              {/* Cercle + % */}
              <div style={{ position: "relative", width: 120, height: 120 }}>
                <CircleProgress level={skill.level} color={skill.color} visible={circles.visible} />
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexDirection: "column",
                }}>
                  <span style={{
                    fontSize: "1.375rem", fontWeight: 900,
                    color: "var(--text-primary)", fontFamily: "var(--font-mono)",
                    lineHeight: 1,
                  }}>
                    {circles.visible ? `${skill.level}%` : "0%"}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: "0.8125rem", fontWeight: 600,
                color: "var(--text-secondary)", textAlign: "center",
                whiteSpace: "nowrap",
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Toutes les techs en tags */}
        <div
          ref={tags.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${tags.visible ? "visible" : ""}`}
          style={{
            padding: "2rem",
            borderRadius: "1.5rem",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h3 style={{
            margin: "0 0 1.5rem",
            fontSize: "0.9375rem", fontWeight: 700,
            color: "var(--text-primary)",
            fontFamily: "var(--font-mono)",
          }}>
            {lang === "fr" ? "// Stack complète" : "// Full stack"}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
            {ALL_SKILLS.map(skill => (
              <span key={skill.name} style={{
                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                padding: "0.375rem 0.875rem", borderRadius: "9999px",
                border: `1px solid ${skill.color}25`,
                backgroundColor: `${skill.color}0e`,
                color: skill.color, fontSize: "0.8125rem", fontWeight: 600,
                fontFamily: "var(--font-mono)",
                transition: "transform 0.2s, background 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${skill.color}20`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${skill.color}0e`; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
