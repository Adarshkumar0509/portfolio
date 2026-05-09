export const PERSONAL = {
  name: "Adarsh Kumar",
  tagline: "Full Stack Developer",
  description:
    "I build fast, scalable, and maintainable web applications — from database schema to production deployment. Clean code, solid architecture, real results.",
  location: "India",
  status: "Open to opportunities",
  education: "B.Tech Computer Science",
  languages: "English, Hindi",
  stats: [
    { number: "10+",  label: "Projects shipped" },
    { number: "25+",  label: "PRs merged" },
    { number: "550+", label: "GitHub commits" },
  ],
  contact: {
    email: "adarshkumarthakur0509@gmail.com",
    github: "github.com/Adarshkumar0509",
    linkedin: "linkedin.com/in/adarsh-kumar-6a5706285",
  },
};

export const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "React Developer",
  "Open Source Contributor",
];

export const SKILLS = {
  Frontend: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  Backend:  ["Node.js", "Express", "Python", "Flask", "REST APIs", "LangChain"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  DevOps:   ["Docker", "GitHub Actions", "Vercel", "Linux", "Git", "CI/CD"],
};

export const PROJECTS = [
  {
    title: "GenUI — AI Component Generator",
    desc: "AI-powered UI component generator using React and Google Gemini API. Supports multiple frameworks (HTML/CSS, Tailwind, Bootstrap) with live preview and Monaco code editor. Includes dark/light theme, prompt history, AI model switcher, and settings panel.",
    tags: ["React", "Vite", "Tailwind CSS", "Gemini API"],
    status: "Live",
    year: "2025",
    link: "https://gen-ui-8mk7.vercel.app",
    github: "https://github.com/Adarshkumar0509/GenUI",
  },
  {
    title: "Cornucopia Dashboard",
    desc: "Automated contributor dashboard for OWASP Cornucopia using GitHub Actions to track commits, pull requests, and issues with daily updates. JavaScript automation scripts fetch GitHub API data and display real-time open source contribution statistics.",
    tags: ["JavaScript", "GitHub Actions", "GitHub API"],
    status: "Live",
    year: "2025",
    link: "https://adarshkumar0509.github.io/cornucopia-dashboard/",
    github: "https://github.com/Adarshkumar0509/Gsoc-cornucopia-dashboard",
  },
  {
    title: "GenAI Resume Parser",
    desc: "AI-powered resume parser extracting structured JSON data from PDF files using LangChain and Groq LLMs. Flask REST API with web interface for file upload and data parsing. Validates extraction of skills, experience, and contact information.",
    tags: ["Flask", "LangChain", "Python", "Groq"],
    status: "Live",
    year: "2025",
    link: "https://genai-resume-parser.onrender.com/",
    github: "https://github.com/Adarshkumar0509/GenAI_Resume_Parser",
  },
  {
    title: "Weather Application",
    desc: "Real-time weather forecasting application with API integration. Modular component architecture with React hooks for efficient state management. Includes error handling and loading states for a smooth user experience.",
    tags: ["React", "Vite", "JavaScript"],
    status: "Live",
    year: "2024",
    link: "https://weather-app-two-eosin-49.vercel.app/",
    github: "https://github.com/Adarshkumar0509/Weather-app",
  },
  {
    title: "Food Delivery Website",
    desc: "Responsive single-page application with dynamic menu rendering and category-based filtering. Shopping cart with state management and checkout flow validation. Mobile-first UI designed with Tailwind CSS utilities.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    status: "Live",
    year: "2024",
    link: "https://food-delivery-ten-delta.vercel.app/",
    github: "https://github.com/Adarshkumar0509/Food-delivery",
  },
];

export const EXPERIENCE = [
  {
    role: "Open Source Contributor",
    org: "OWASP Cornucopia",
    orgLink: "https://github.com/Adarshkumar0509/cornucopia",
    type: "GSoC Project",
    period: "2025 — Present",
    location: "Remote",
    points: [
      "Contributed 25+ merged PRs to OWASP Cornucopia, improving security, accessibility, CI/CD, testing, and frontend/backend functionality in a large-scale open-source cybersecurity project.",
      "Implemented security fixes including CSP hardening, encrypted migrations, authorization validation, and dependency upgrades.",
      "Integrated ESLint and resolved 1400+ lint issues while improving responsive UI, multilingual templates, and automated fuzz testing infrastructure.",
    ],
    tags: ["Python", "JavaScript", "GitHub Actions", "ESLint"],
    prsLink: "https://github.com/OWASP/cornucopia/pulls?q=is%3Apr+is%3Amerged+author%3AAdarshkumar0509",
  },
  {
    role: "Software Development Intern",
    org: "CCL",
    orgLink: "https://github.com/Adarshkumar0509/ai-recipe-generator",
    type: "Internship",
    period: "May – June 2026",
    location: "Ranchi, India",
    points: [
      "Built a full-stack recipe app with React and Node.js that uses Google Gemini AI to generate personalized recipes based on dietary preferences and available ingredients.",
      "Implemented JWT authentication, PostgreSQL database, and REST APIs for managing pantry inventory, meal planning, and automated shopping lists.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Gemini AI", "JWT"],
    certLink: "https://github.com/Adarshkumar0509/ai-recipe-generator",
  },
];

export const BLOG_POSTS = [
  {
    title: "My First Open Source Contribution to OWASP Cornucopia",
    date: "2025",
    tag: "Open Source",
    read: "4 min read",
    excerpt:
      "I closed the terminal the first time I cloned OWASP Cornucopia. Opened it again the next day. Here's what happened after — upgrading the toolchain to Python 3.13, surviving CI pipelines I'd never seen, and why the first PR is the hardest.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7436105973737582593/",
  },
];
