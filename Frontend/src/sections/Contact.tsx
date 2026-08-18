import { useState } from "react";
import { useLang } from "../hooks/useLang";
import { info } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface FormState { name: string; email: string; message: string; }
type SendStatus = "idle" | "sending" | "success" | "error";

const inputBase: React.CSSProperties = {
  width:"100%", padding:"0.8125rem 1rem",
  borderRadius:"0.875rem", border:"1px solid var(--border)",
  backgroundColor:"var(--bg-card)", color:"var(--text-primary)",
  fontSize:"0.9375rem", outline:"none",
  transition:"border-color 0.2s, box-shadow 0.2s",
  boxSizing:"border-box", fontFamily:"var(--font-sans)",
};

export default function Contact() {
  const { lang } = useLang();
  const [form, setForm]       = useState<FormState>({ name:"", email:"", message:"" });
  const [status, setStatus]   = useState<SendStatus>("idle");
  const header = useScrollReveal();
  const left   = useScrollReveal();
  const right  = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "2e51c5c2-2473-4be5-93e0-15a6f86431f7",
          subject: `[Portfolio] Nouveau message de ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name:"", email:"", message:"" });
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
    }
  };

  const LINKS = [
    { icon:"✉️",  label:"Email",    value:info.email,  href:`mailto:${info.email}`,              color:"var(--accent-teal)"   },
    { icon:"💼",  label:"LinkedIn", value:"Abdoul Razzaï Barry", href:info.linkedin,             color:"#60A5FA"              },
    { icon:"🐙",  label:"GitHub",   value:"Barry-webdev",        href:info.github,               color:"var(--accent-purple)" },
    { icon:"📱",  label: lang==="fr"?"Téléphone":"Phone", value:info.phone, href:`tel:${info.phone.replace(/\s/g,"")}`, color:"var(--accent-orange)" },
  ];

  return (
    <section id="contact" style={{ backgroundColor:"var(--bg)", padding:"7rem 1.5rem" }}>
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
            {lang==="fr" ? "// Contact" : "// Contact"}
          </span>
          <h2 style={{
            margin:0, fontSize:"clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight:900, color:"var(--text-primary)", letterSpacing:"-0.03em",
          }}>
            {lang==="fr" ? "Travaillons ensemble" : "Let's work together"}
          </h2>
          <p style={{ marginTop:"0.75rem", color:"var(--text-muted)", fontSize:"0.9375rem" }}>
            {lang==="fr" ? "Un projet ? Une idée ? Je suis disponible." : "A project? An idea? I'm available."}
          </p>
        </div>

        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2.5rem" }}>

          {/* Links */}
          <div
            ref={left.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${left.visible ? "visible" : ""}`}
            style={{ display:"flex", flexDirection:"column", gap:"1rem" }}
          >
            <p style={{ margin:"0 0 0.5rem", color:"var(--text-secondary)", fontSize:"0.9375rem", lineHeight:1.75 }}>
              {lang==="fr"
                ? "Je suis ouvert aux missions freelance, collaborations et projets innovants. Contactez-moi via l'un des canaux ci-dessous ou utilisez le formulaire."
                : "I'm open to freelance work, collaborations and innovative projects. Reach out through any channel below or use the form."}
            </p>
            {LINKS.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1rem 1.25rem", borderRadius:"1rem",
                  border:`1px solid ${link.color}20`,
                  backgroundColor:"var(--bg-card)", textDecoration:"none",
                  transition:"border-color 0.2s, background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=`${link.color}50`; e.currentTarget.style.backgroundColor=`${link.color}08`; e.currentTarget.style.transform="translateX(5px)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=`${link.color}20`; e.currentTarget.style.backgroundColor="var(--bg-card)"; e.currentTarget.style.transform="translateX(0)"; }}
              >
                <div style={{
                  width:"44px", height:"44px", borderRadius:"0.75rem", flexShrink:0,
                  backgroundColor:`${link.color}14`, fontSize:"1.25rem",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize:"0.75rem", color:"var(--text-muted)", fontWeight:500, fontFamily:"var(--font-mono)" }}>{link.label}</div>
                  <div style={{ fontSize:"0.9375rem", color:"var(--text-primary)", fontWeight:700 }}>{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${right.visible ? "visible" : ""}`}
            style={{
              padding:"2rem", borderRadius:"1.5rem",
              border:"1px solid var(--border)",
              backgroundColor:"var(--bg-card)",
              boxShadow:"var(--shadow-card)",
            }}
          >
            {status === "success" ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1rem", padding:"2rem", textAlign:"center", minHeight:"280px" }}>
                <div style={{ fontSize:"3.5rem", animation:"scaleIn 0.5s ease both" }}>✅</div>
                <h3 style={{ margin:0, color:"var(--text-primary)", fontWeight:800, fontSize:"1.25rem" }}>
                  {lang==="fr" ? "Message envoyé !" : "Message sent!"}
                </h3>
                <p style={{ margin:0, color:"var(--text-muted)", fontSize:"0.9375rem" }}>
                  {lang==="fr" ? "Merci, je reviendrai vers vous très bientôt." : "Thanks, I'll get back to you very soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
                {[
                  { name:"name",    label:lang==="fr"?"Votre nom":"Your name", type:"text",  placeholder:lang==="fr"?"Barry Abdoul Razzaï":"Oumou Hawa Bah" },
                  { name:"email",   label:"Email",                              type:"email", placeholder:"vous@email.com" },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display:"block", fontSize:"0.8125rem", fontWeight:700, color:"var(--text-secondary)", marginBottom:"0.5rem" }}>
                      {field.label}
                    </label>
                    <input
                      name={field.name} type={field.type} required
                      placeholder={field.placeholder}
                      value={form[field.name as keyof FormState]}
                      onChange={handleChange}
                      style={inputBase}
                      onFocus={e=>{ e.currentTarget.style.borderColor="rgba(0,212,170,0.5)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(0,212,170,0.1)"; }}
                      onBlur={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none"; }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display:"block", fontSize:"0.8125rem", fontWeight:700, color:"var(--text-secondary)", marginBottom:"0.5rem" }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={5}
                    placeholder={lang==="fr" ? "Décrivez votre projet ou votre demande..." : "Describe your project or request..."}
                    value={form.message} onChange={handleChange}
                    style={{ ...inputBase, resize:"vertical", minHeight:"130px" }}
                    onFocus={e=>{ e.currentTarget.style.borderColor="rgba(0,212,170,0.5)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(0,212,170,0.1)"; }}
                    onBlur={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none"; }}
                  />
                </div>
                <button type="submit" disabled={status === "sending"} style={{
                  padding:"0.9375rem", borderRadius:"0.875rem", border:"none",
                  background:"linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-purple) 100%)",
                  color:"#fff", fontSize:"0.9375rem", fontWeight:800, cursor: status === "sending" ? "not-allowed" : "pointer",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem",
                  transition:"transform 0.2s, box-shadow 0.2s",
                  boxShadow:"var(--shadow-glow-teal)", fontFamily:"var(--font-sans)",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                  onMouseEnter={e=>{ if(status !== "sending") { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(0,212,170,0.4)"; }}}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="var(--shadow-glow-teal)"; }}
                >
                  {status === "sending" ? (
                    <>{lang==="fr" ? "Envoi en cours..." : "Sending..."}</>
                  ) : (
                    <>{lang==="fr" ? "Envoyer le message" : "Send message"}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p style={{ margin:0, textAlign:"center", fontSize:"0.875rem", color:"#f87171", fontWeight:500 }}>
                    {lang==="fr" ? "❌ Une erreur est survenue. Réessayez ou contactez-moi directement." : "❌ Something went wrong. Please try again or contact me directly."}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth:"1100px", margin:"5rem auto 0",
        paddingTop:"2rem", borderTop:"1px solid var(--border)",
        display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between",
        gap:"0.75rem",
      }}>
        <span style={{ color:"var(--text-muted)", fontSize:"0.8125rem", fontFamily:"var(--font-mono)" }}>
          © {new Date().getFullYear()} Barry Abdoul Razzaï
        </span>
        <span style={{
          fontSize:"0.8125rem", fontWeight:600,
          background:"linear-gradient(135deg, var(--accent-teal), var(--accent-purple))",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          fontFamily:"var(--font-mono)",
        }}>
          {lang==="fr" ? "Développeur Full-Stack" : "Full-Stack Developer"}
        </span>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
