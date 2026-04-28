// ============================================================
//  YOUR PERSONAL DATA — edit everything here, nowhere else
// ============================================================

export const PERSONAL = {
  name: "Alex Dev",                          // ← your name
  tagline: "Full Stack Developer",           // ← subtitle under name
  description:
    "I build fast, scalable, and maintainable web applications — from database schema to production deployment. Clean code, solid architecture, real results.",
  location: "India",
  status: "Open to opportunities",           // ← or "Employed" / "Freelancing"
  education: "B.Tech Computer Science",
  languages: "English, Hindi",
  stats: [
    { number: "15+", label: "Projects shipped" },
    { number: "4+",  label: "Years experience" },
    { number: "200+",label: "GitHub stars" },
  ],
  contact: {
    email: "alex@devmail.com",               // ← your email
    github: "github.com/alexdev",            // ← your github
    linkedin: "linkedin.com/in/alexdev",     // ← your linkedin
  },
};

export const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "React Specialist",
  "API Architect",
];

export const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  Backend:  ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Firebase"],
  DevOps:   ["Docker", "AWS", "CI/CD", "Linux", "Nginx", "Git"],
};

export const PROJECTS = [
  {
    title: "CloudCommerce",
    desc: "Full-stack e-commerce platform with real-time inventory, payment integration, and admin dashboard. Handles 10k+ concurrent users.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    status: "Live",       // "Live" | "Open Source" | "In Progress"
    year: "2024",
    link: "#",            // ← your live URL or github link
  },
  {
    title: "DevCollab",
    desc: "Real-time collaborative code editor with syntax highlighting, live cursors, and integrated Git version control.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Docker"],
    status: "Open Source",
    year: "2024",
    link: "#",
  },
  {
    title: "AnalyticsBoard",
    desc: "Unified analytics dashboard aggregating data from 15+ sources. Custom query builder, exportable reports, and team sharing.",
    tags: ["React", "Python", "FastAPI", "PostgreSQL", "AWS"],
    status: "Live",
    year: "2023",
    link: "#",
  },
  {
    title: "AuthKit",
    desc: "Drop-in authentication SDK supporting OAuth2, magic links, passkeys, and MFA. Used by 200+ developers.",
    tags: ["TypeScript", "Node.js", "Redis", "JWT"],
    status: "Open Source",
    year: "2023",
    link: "#",
  },
];

export const BLOG_POSTS = [
  {
    title: "Why I Stopped Using REST and Moved to tRPC",
    date: "Mar 2025",
    tag: "Backend",
    read: "6 min read",
    excerpt:
      "After building three large-scale APIs with REST, I switched to tRPC on my last project. Here's what I learned.",
    link: "#",
  },
  {
    title: "PostgreSQL vs MongoDB: A Real-World Comparison",
    date: "Jan 2025",
    tag: "Database",
    read: "9 min read",
    excerpt:
      "Not a theory post — this is based on migrating a production app from Mongo to Postgres and back again.",
    link: "#",
  },
  {
    title: "Docker in Development: The Setup I Actually Use",
    date: "Nov 2024",
    tag: "DevOps",
    read: "5 min read",
    excerpt:
      "Most Docker tutorials show you hello-world. This is the actual compose setup I use across every project.",
    link: "#",
  },
];
