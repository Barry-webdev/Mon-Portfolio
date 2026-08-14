import { useState } from "react";
import { useLang } from "../hooks/useLang";
import { info } from "../data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback — remplacer par une API (Resend, EmailJS, etc.) si besoin
    const subject = encodeURIComponent(
      lang === "fr" ? "Prise de contact depuis le portfolio" : "Contact from portfolio"
    );
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const CONTACT_LINKS = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: info.email,
      href: `mailto:${info.email}`,
      color: "#00D4AA",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      label: "GitHub",
      value: "Barry-webdev",
      href: info.github,
      color: "#6C63FF",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Abdoul Razzaï Barry",
      href: info.linkedin,
      color: "#60A5FA",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.95-1.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92v1z" />
        </svg>
      ),
      label: lang === "fr" ? "Téléphone" : "Phone",
      value: info.phone,
      href: `tel:${info.phone.replace(/\s/g, "")}`,
      color: "#F97316",
    },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "rgba(255,255,255,0.04)",
    color: "#e5e5e5",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
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
              color: "#6C63FF",
              marginBottom: "0.75rem",
            }}
          >
            Contact
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
            {lang === "fr" ? "Travaillons ensemble" : "Let's work together"}
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#6b7280", fontSize: "0.9375rem" }}>
            {lang === "fr"
              ? "Un projet ? Une collaboration ? Contactez-moi directement."
              : "A project? A collaboration? Reach out directly."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="contact-grid"
        >
          {/* Liens de contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ margin: "0 0 0.5rem", color: "#a3a3a3", fontSize: "0.9375rem", lineHeight: 1.65 }}>
              {lang === "fr"
                ? "Je suis disponible pour des missions freelance, des collaborations ou tout projet ambitieux. N'hésitez pas à me contacter par l'un des canaux ci-dessous."
                : "I'm available for freelance work, collaborations or any ambitious project. Feel free to reach out through any of the channels below."}
            </p>

            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "1rem",
                  border: `1px solid ${link.color}20`,
                  backgroundColor: "rgba(255,255,255,0.02)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${link.color}40`;
                  e.currentTarget.style.backgroundColor = `${link.color}08`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${link.color}20`;
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.75rem",
                    backgroundColor: `${link.color}15`,
                    color: link.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 500 }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: "0.9375rem", color: "#e5e5e5", fontWeight: 600 }}>
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Formulaire */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.07)",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: "1rem",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem" }}>✅</div>
                <h3 style={{ margin: 0, color: "#fff", fontWeight: 700 }}>
                  {lang === "fr" ? "Message envoyé !" : "Message sent!"}
                </h3>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "0.9375rem" }}>
                  {lang === "fr"
                    ? "Merci, je reviendrai vers vous très bientôt."
                    : "Thanks, I'll get back to you very soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#a3a3a3", marginBottom: "0.5rem" }}>
                    {lang === "fr" ? "Votre nom" : "Your name"}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={lang === "fr" ? "Barry Abdoul Razzaï" : "John Doe"}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#a3a3a3", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@email.com"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#a3a3a3", marginBottom: "0.5rem" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={lang === "fr" ? "Décrivez votre projet ou votre demande..." : "Describe your project or request..."}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "0.875rem 1.5rem",
                    borderRadius: "0.875rem",
                    border: "none",
                    background: "linear-gradient(135deg, #00D4AA 0%, #6C63FF 100%)",
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {lang === "fr" ? "Envoyer le message" : "Send message"}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "4rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
          color: "#4b5563",
          fontSize: "0.8125rem",
        }}
      >
        © {new Date().getFullYear()} Barry Abdoul Razzaï — {lang === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer"}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
