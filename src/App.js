import { useState, useEffect, useRef } from "react";
import { PERSONAL, ROLES, SKILLS, PROJECTS, BLOG_POSTS } from "./data";

const NAV = ["About", "Skills", "Projects", "Resume", "Blog", "Contact"];

const STATUS_STYLE = {
  Live:          { bg: "#0f2a1a", color: "#3ddc7a", border: "#1a4a2a" },
  "Open Source": { bg: "#0d1f3a", color: "#5ba3f5", border: "#1a3a5a" },
  "In Progress": { bg: "#2a1a0a", color: "#f5a623", border: "#4a2a0a" },
};

const SKILL_TAG_STYLE = {
  Backend:  { bg: "#2a1a0a", color: "#f5a623", border: "#4a2a0a" },
  Database: { bg: "#1a0a2a", color: "#c084fc", border: "#3a1a4a" },
  DevOps:   { bg: "#0a1a2a", color: "#38bdf8", border: "#1a3a4a" },
  Frontend: { bg: "#1a0a0a", color: "#f87171", border: "#4a1a1a" },
};

function tag(label, styleMap) {
  const s = styleMap[label] || { bg: "#1a1a1a", color: "#aaa", border: "#333" };
  return {
    display: "inline-block",
    background: s.bg,
    color: s.color,
    border: `1px solid ${s.border}`,
    borderRadius: "4px",
    padding: "2px 9px",
    fontSize: "0.7rem",
    fontWeight: 700,
    margin: "2px",
  };
}

// ─── UPDATE THIS to change your resume ───────────────────────
const RESUME_FILE_ID = "13Lb3AaD31rPMRXQNU2nDINY4ckx9XnPO";
const RESUME_PREVIEW = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const RESUME_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;
// ─────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive]         = useState("About");
  const [form, setForm]             = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [typed, setTyped]           = useState("");
  const [roleIdx, setRoleIdx]       = useState(0);
  const [charIdx, setCharIdx]       = useState(0);
  const [deleting, setDeleting]     = useState(false);

  const sectionRef = useRef({});

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 40);
    } else {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    setTyped(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.dataset.nav);
      }),
      { threshold: 0.35 }
    );
    Object.values(sectionRef.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goto = section =>
    sectionRef.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleForm = async e => {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise(r => setTimeout(r, 1200));
    setFormStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(null), 4000);
  };

  const S = {
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(8,12,16,0.9)", backdropFilter: "blur(14px)",
      borderBottom: "1px solid #1e2a38",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2.5rem", height: "60px",
    },
    logo: { fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" },
    logoAccent: { color: "#3b82f6" },
    navLinks: { display: "flex", gap: "2px", listStyle: "none" },
    navBtn: active => ({
      background: "none", border: "none", cursor: "pointer",
      padding: "6px 13px", borderRadius: "6px",
      fontSize: "0.83rem", fontWeight: active ? 600 : 400,
      color: active ? "#3b82f6" : "#64748b",
      transition: "color 0.2s, background 0.2s",
    }),
    hero: {
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "0 10vw", position: "relative", overflow: "hidden",
    },
    heroGrid: {
      position: "absolute", inset: 0,
      backgroundImage:
        "linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px)," +
        "linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)",
      backgroundSize: "60px 60px",
    },
    heroGlow: {
      position: "absolute", top: "-15%", left: "-8%",
      width: "600px", height: "600px", borderRadius: "50%",
      background: "radial-gradient(circle,rgba(59,130,246,0.08) 0%,transparent 70%)",
    },
    heroContent: { position: "relative", zIndex: 1, maxWidth: "700px", animation: "fadeUp 0.8s ease" },
    badge: {
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.22)",
      color: "#60a5fa", borderRadius: "100px",
      padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600,
      marginBottom: "1.5rem", letterSpacing: "0.05em",
    },
    dot: { width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", animation: "pulse 2s infinite" },
    heroName: {
      fontSize: "clamp(2.4rem,5.5vw,4.2rem)", fontWeight: 800,
      lineHeight: 1.1, color: "#fff", margin: "0 0 0.75rem", letterSpacing: "-1.5px",
    },
    heroRole: { fontSize: "clamp(1.1rem,2.5vw,1.6rem)", color: "#64748b", margin: "0 0 1.25rem", minHeight: "2rem" },
    cursor: {
      display: "inline-block", width: "2px", height: "1.1em",
      background: "#3b82f6", verticalAlign: "text-bottom",
      marginLeft: "2px", animation: "blink 1s infinite",
    },
    heroDesc: { fontSize: "0.98rem", color: "#64748b", lineHeight: 1.8, maxWidth: "500px", margin: "0 0 2rem" },
    btns: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
    btnP: {
      background: "#2563eb", color: "#fff", border: "none",
      borderRadius: "8px", padding: "11px 26px",
      fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
    },
    btnO: {
      background: "transparent", color: "#94a3b8",
      border: "1px solid #1e2a38", borderRadius: "8px",
      padding: "11px 26px", fontSize: "0.875rem",
      fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
    },
    section: { maxWidth: "980px", margin: "0 auto", padding: "100px 2rem 50px" },
    secLabel: {
      fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em",
      color: "#3b82f6", textTransform: "uppercase", marginBottom: "0.4rem",
    },
    secTitle: {
      fontSize: "clamp(1.7rem,3.5vw,2.2rem)", fontWeight: 800,
      color: "#fff", letterSpacing: "-0.5px", margin: "0 0 0.75rem",
    },
    divider: { width: "36px", height: "3px", borderRadius: "2px", background: "#2563eb", margin: "0 0 2.5rem" },
    card: {
      background: "#0d1117", border: "1px solid #1e2a38",
      borderRadius: "12px", padding: "1.25rem",
      transition: "border-color 0.2s, transform 0.2s",
    },
    grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" },
    grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "1.25rem" },
    skillCat: {
      fontSize: "0.68rem", fontWeight: 700, color: "#3b82f6",
      textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem",
    },
    pill: {
      display: "inline-block", background: "#111827",
      border: "1px solid #1e2a38", color: "#64748b",
      borderRadius: "6px", padding: "3px 10px", fontSize: "0.78rem", margin: "2px",
    },
    projTitle: { fontSize: "1rem", fontWeight: 700, color: "#fff", margin: "0.5rem 0" },
    projDesc:  { fontSize: "0.8rem", color: "#475569", lineHeight: 1.6, margin: "0 0 0.75rem" },
    linkBtn: {
      color: "#3b82f6", fontSize: "0.78rem", fontWeight: 500,
      background: "none", border: "none", cursor: "pointer",
      padding: 0, fontFamily: "inherit", textDecoration: "none",
    },
    dlBtn: {
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: "#2563eb", color: "#fff", border: "none",
      borderRadius: "8px", padding: "10px 22px",
      fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
      textDecoration: "none", fontFamily: "inherit",
    },
    input: {
      width: "100%", background: "#0d1117",
      border: "1px solid #1e2a38", borderRadius: "8px",
      color: "#e2e8f0", padding: "11px 14px",
      fontSize: "0.875rem", outline: "none",
      fontFamily: "inherit", marginBottom: "0.75rem",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%", background: "#0d1117",
      border: "1px solid #1e2a38", borderRadius: "8px",
      color: "#e2e8f0", padding: "11px 14px",
      fontSize: "0.875rem", outline: "none",
      resize: "vertical", minHeight: "130px",
      fontFamily: "inherit", marginBottom: "0.75rem",
      boxSizing: "border-box",
    },
    sendBtn: {
      background: "#2563eb", color: "#fff", border: "none",
      borderRadius: "8px", padding: "11px 28px",
      fontSize: "0.875rem", fontWeight: 600,
      cursor: "pointer", fontFamily: "inherit",
    },
    footer: {
      textAlign: "center", padding: "2rem",
      color: "#334155", fontSize: "0.78rem",
      borderTop: "1px solid #0f1923",
    },
  };

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#080c10", color: "#e2e8f0", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={S.nav}>
        <div style={S.logo}>
          <span style={S.logoAccent}>&lt;</span>dev<span style={S.logoAccent}>/&gt;</span>
        </div>
        <ul style={S.navLinks}>
          {NAV.map(n => (
            <li key={n}>
              <button style={S.navBtn(active === n)} onClick={() => goto(n)}>{n}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section data-nav="About" ref={el => sectionRef.current["About"] = el} style={S.hero}>
        <div style={S.heroGrid} />
        <div style={S.heroGlow} />
        <div style={S.heroContent}>
          <div style={S.badge}><span style={S.dot} /> Available for work</div>
          <h1 style={S.heroName}>
            Hi, I'm<br />
            <span style={{ color: "#3b82f6" }}>{PERSONAL.name}</span>
          </h1>
          <p style={S.heroRole}>
            <span style={{ color: "#94a3b8" }}>{typed}</span>
            <span style={S.cursor} />
          </p>
          <p style={S.heroDesc}>{PERSONAL.description}</p>
          <div style={S.btns}>
            <button style={S.btnP} onClick={() => goto("Projects")}>View Projects →</button>
            <button style={S.btnO} onClick={() => goto("Contact")}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={S.section}>
        <p style={S.secLabel}>Who I am</p>
        <h2 style={S.secTitle}>About Me</h2>
        <div style={S.divider} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.92rem" }}>
              I'm a full stack developer with {PERSONAL.stats[1].number} of experience building production-grade web applications.
              I work across the entire stack — from designing database schemas to shipping pixel-perfect frontends.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.92rem" }}>
              My focus is on writing code that's readable, testable, and built to last. I care deeply about
              performance, developer experience, and shipping things that actually work.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              {PERSONAL.stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#3b82f6" }}>{s.number}</div>
                  <div style={{ fontSize: "0.75rem", color: "#475569" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {[
              ["📍", "Location",  PERSONAL.location],
              ["💼", "Status",    PERSONAL.status],
              ["🎓", "Education", PERSONAL.education],
              ["🌐", "Languages", PERSONAL.languages],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.65rem 0.9rem", background: "#0d1117", border: "1px solid #1e2a38", borderRadius: "8px", marginBottom: "0.6rem" }}>
                <span>{icon}</span>
                <span style={{ color: "#334155", fontSize: "0.82rem", width: "80px" }}>{label}</span>
                <span style={{ color: "#94a3b8", fontSize: "0.82rem" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section data-nav="Skills" ref={el => sectionRef.current["Skills"] = el} style={S.section}>
        <p style={S.secLabel}>What I work with</p>
        <h2 style={S.secTitle}>Skills</h2>
        <div style={S.divider} />
        <div style={S.grid4}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} style={S.card}>
              <div style={S.skillCat}>{cat}</div>
              {items.map(s => <span key={s} style={S.pill}>{s}</span>)}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section data-nav="Projects" ref={el => sectionRef.current["Projects"] = el} style={S.section}>
        <p style={S.secLabel}>What I've built</p>
        <h2 style={S.secTitle}>Projects</h2>
        <div style={S.divider} />
        <div style={S.grid2}>
          {PROJECTS.map(p => (
            <div key={p.title} style={{ ...S.card, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <span style={tag(p.status, STATUS_STYLE)}>{p.status}</span>
                <span style={{ fontSize: "0.72rem", color: "#334155" }}>{p.year}</span>
              </div>
              <div style={S.projTitle}>{p.title}</div>
              <p style={S.projDesc}>{p.desc}</p>
              <div style={{ marginBottom: "0.75rem" }}>
                {p.tags.map(t => <span key={t} style={S.pill}>{t}</span>)}
              </div>
              <div style={{ marginTop: "auto" }}>
                <a href={p.link} style={S.linkBtn}>View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESUME ── */}
      <section data-nav="Resume" ref={el => sectionRef.current["Resume"] = el} style={S.section}>
        <p style={S.secLabel}>My credentials</p>
        <h2 style={S.secTitle}>Resume</h2>
        <div style={S.divider} />
        <div style={{ background: "#0d1117", border: "1px solid #1e2a38", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>📄</span>
              <div>
                <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem" }}>{PERSONAL.name} — Resume</p>
                <p style={{ color: "#334155", fontSize: "0.75rem" }}>PDF · Click to download</p>
              </div>
            </div>
            <a
              href={RESUME_DOWNLOAD}
              target="_blank"
              rel="noreferrer"
              style={S.dlBtn}
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
        <iframe
          src={RESUME_PREVIEW}
          style={{ width: "100%", height: "600px", border: "none", borderRadius: "12px" }}
          title="Resume Preview"
          allow="autoplay"
        />
      </section>

      {/* ── BLOG ── */}
      <section data-nav="Blog" ref={el => sectionRef.current["Blog"] = el} style={S.section}>
        <p style={S.secLabel}>My writing</p>
        <h2 style={S.secTitle}>Blog</h2>
        <div style={S.divider} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.25rem" }}>
          {BLOG_POSTS.map(post => (
            <div key={post.title} style={{ ...S.card, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={tag(post.tag, SKILL_TAG_STYLE)}>{post.tag}</span>
                <span style={{ fontSize: "0.72rem", color: "#334155" }}>{post.read}</span>
              </div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.4 }}>{post.title}</div>
              <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.6, marginBottom: "0.75rem" }}>{post.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.72rem", color: "#334155" }}>{post.date}</span>
                <a href={post.link} style={S.linkBtn}>Read →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section data-nav="Contact" ref={el => sectionRef.current["Contact"] = el} style={S.section}>
        <p style={S.secLabel}>Get in touch</p>
        <h2 style={S.secTitle}>Contact</h2>
        <div style={S.divider} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.9rem" }}>
              Have a project in mind or want to talk? Fill out the form and I'll get back to you within 24 hours.
            </p>
            {[
              ["📧", "Email",    PERSONAL.contact.email],
              ["🐙", "GitHub",   PERSONAL.contact.github],
              ["💼", "LinkedIn", PERSONAL.contact.linkedin],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#0d1117", border: "1px solid #1e2a38", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.68rem", color: "#334155", marginBottom: "1px" }}>{label}</div>
                  <div style={{ fontSize: "0.82rem", color: "#94a3b8" }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleForm}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <input style={S.input} placeholder="Your Name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input style={S.input} type="email" placeholder="Email Address" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <textarea style={S.textarea} placeholder="Your message..." value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} required />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button type="submit" style={{ ...S.sendBtn, opacity: formStatus === "sending" ? 0.7 : 1 }}
                disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send Message →"}
              </button>
              {formStatus === "sent" && (
                <span style={{ color: "#22c55e", fontSize: "0.82rem", fontWeight: 500 }}>✓ Message sent!</span>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer style={S.footer}>
        <p>Built with React · {new Date().getFullYear()} · {PERSONAL.name}</p>
      </footer>
    </div>
  );
}
