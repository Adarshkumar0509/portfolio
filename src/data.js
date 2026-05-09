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
    { number: "6+",  label: "Projects shipped" },
    { number: "0-1", label: "Years experience" },
    { number: "50+", label: "GitHub commits" },
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
