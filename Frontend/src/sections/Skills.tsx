import { useLang } from "../hooks/useLang";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

interface SkillGroup {
  labelFr: string;
  labelEn: string;
  icon: string;
  accent: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    labelFr: "Front-End",
    labelEn: "Front-End",
    icon: "🎨",
    accent: "#00D4AA",
    skills: [
      { name: "React.js",     icon: "⚛️",  color: "#61DAFB" },
      { name: "Next.js",      icon: "▲",   color: "#ffffff" },
      { name: "TypeScript",   icon: "TS",  color: "#3178C6" },
      { name: "JavaScript",   icon: "JS",  color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "🌊",  color: "#38BDF8" },
      { name: "HTML5 / CSS3", icon: "🔷",  color: "#E34F26" },
    ],
  },
  {
    labelFr: "Mobile",
    labelEn: "Mobile",
    icon: "📱",
    accent: "#F472B6",
    skills: [
      { name: "React Native", icon: "⚛️", color: "#61DAFB" },
      { name: "Expo",         icon: "⬡",  color: "#ffffff" },
      { name: "Firebase",     icon: "🔥", color: "#FFCA28" },
    ],
  },
  {
    labelFr: "Back-End",
    labelEn: "Back-End",
    icon: "⚙️",
    accent: "#6C63FF",
    skills: [
      { name: "Node.js",          icon: "🟢", color: "#8CC84B" },
      { name: "API REST",         icon: "🔌", color: "#a3a3a3" },
      { name: "NextAuth.js",      icon: "🔐", color: "#ffffff" },
    ],
  },
  {
    labelFr: "Base de données",
    labelEn: "Database",
    icon: "🗄️",
    accent: "#F97316",
    skills: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Prisma ORM", icon: "◆",  color: "#5A67D8" },
      { name: "MongoDB",    icon: "🍃", color: "#4DB33D" },
      { name: "SQLite",     icon: "💾", color: "#003B57" },
    ],
  },
  {
    labelFr: "Outils & Deploy",
    labelEn: "Tools & Deploy",
    icon: "🚀",
    accent: "#60A5FA",
    skills: [
      { name: "Git / GitHub", icon: "🐙", color: "#ffffff" },
      { name: "Vercel",       icon: "▲",  color: "#ffffff" },
      { name: "VS Code",      icon: "💙", color: "#007ACC" },
      { name: "npm",          icon: "📦", color: "#CB3837" },
    ],
  },
  {
    labelFr: "UI / UX",
    labelEn: "UI / UX",
    icon: "✏️",
    accent: "#EC4899",
    skills: [
      { name: "Figma",      icon: "🎯", color: "#F24E1E" },
      { name: "Responsive", icon: "📐", color: "#a3a3a3" },
    ],
  },
];

// Compétences principales avec cercles
const MAIN_SKILLS = [
  { name: "React / Next.js", level: 88, color: "#00D4AA" },
  { name: "React Native",    level: 90, color: "#F472B6" },
  { name: "Node.js",         level: 75, color: "#6C63FF" },
  { name: "JavaScript / TS", level: 85, color: "#FACC15" },
  { name: "UI / UX (Figma)", level: 70, color: "#EC4899" },
];

function CircleProgress({ level, color, size = 110, visible }: { level: number; color: string; size?: number; visible: boolean }) {
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (visible ? level / 100 : 0) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transition: visible ? "stroke-dashoffset 1.3s cubic-bezier(.22,1,.36,1)" : "none",
          filter: `drop-shadow(0 0 6px ${color}80)` }} />
    </svg>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const header  = useScrollReveal();
  const circles = useScrollReveal();
  const grid    = useScrollReveal();

  return (
    <section id="skills" style={{ backgroundColor: "var(--bg-alt)", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${header.visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--accent-teal)", marginBottom: "0.75rem", fontFamily: "var(--font-mono)",
          }}>
            {lang === "fr" ? "// Compétences" : "// Skills"}
          </span>
          <h2 style={{
            margin: "0 0 0.75rem", fontSize: "clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.03em",
          }}>
            {lang === "fr" ? "Mes Atouts" : "My Strengths"}
          </h2>
          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "500px", margin: "0 auto" }}>
            {lang === "fr"
              ? "Technologies maîtrisées et utilisées en production"
              : "Technologies mastered and used in production"}
          </p>
        </div>

        {/* ── Cercles ── */}
        <div ref={circles.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${circles.visible ? "visible" : ""}`}
          style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: "1.5rem", marginBottom: "4rem",
          }}>
          {MAIN_SKILLS.map((skill, i) => (
            <div key={skill.name}
              className={`reveal ${circles.visible ? "visible" : ""}`}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
                transitionDelay: `${i * 100}ms`,
                padding: "1.5rem 1.25rem",
                borderRadius: "1.25rem",
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-card)",
                minWidth: "120px",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = `${skill.color}50`;
                e.currentTarget.style.boxShadow = `0 20px 40px ${skill.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", width: 110, height: 110 }}>
                <CircleProgress level={skill.level} color={skill.color} visible={circles.visible} />
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontSize: "1.375rem", fontWeight: 900,
                    color: "var(--text-primary)", fontFamily: "var(--font-mono)",
                  }}>
                    {circles.visible ? `${skill.level}%` : "0%"}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: "0.8125rem", fontWeight: 600,
                color: "var(--text-secondary)", textAlign: "center",
                whiteSpace: "nowrap", fontFamily: "var(--font-mono)",
              }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Grid par catégorie ── */}
        <div ref={grid.ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${grid.visible ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div key={group.labelFr}
              className={`reveal ${grid.visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${gi * 80}ms`,
                padding: "1.5rem",
                borderRadius: "1.375rem",
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-card)",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${group.accent}40`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${group.accent}10`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                marginBottom: "1.25rem",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "0.625rem",
                  backgroundColor: `${group.accent}15`,
                  border: `1px solid ${group.accent}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", flexShrink: 0,
                }}>
                  {group.icon}
                </div>
                <span style={{
                  fontSize: "0.8125rem", fontWeight: 700,
                  color: group.accent, letterSpacing: "0.06em",
                  textTransform: "uppercase", fontFamily: "var(--font-mono)",
                }}>
                  {lang === "fr" ? group.labelFr : group.labelEn}
                </span>
              </div>

              {/* Skills chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map(skill => (
                  <div key={skill.name}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.375rem",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.5rem",
                      border: `1px solid ${group.accent}20`,
                      backgroundColor: `${group.accent}08`,
                      transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = `${group.accent}18`;
                      e.currentTarget.style.borderColor = `${group.accent}45`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = `${group.accent}08`;
                      e.currentTarget.style.borderColor = `${group.accent}20`;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{
                      fontSize: "0.75rem",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "16px",
                    }}>
                      {skill.icon}
                    </span>
                    <span style={{
                      fontSize: "0.8125rem", fontWeight: 600,
                      color: "var(--text-secondary)", fontFamily: "var(--font-mono)",
                    }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
