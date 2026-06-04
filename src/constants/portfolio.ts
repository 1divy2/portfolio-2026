// Centralized portfolio content. Edit here to update the site.

export const PROFILE = {
  name: "Divy Dadheech",
  tagline: "Ready to build",
  role: "Full Stack Developer",
  available: true,
  location: "Udaipur, Rajasthan, India",
  email: "dadheech120404@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1d7xaQDcf5UAWUxf5c1TIi7N0t1HXDm-o/view?usp=drive_link",
  github: "https://github.com/1divy2",
  linkedin: "https://www.linkedin.com/in/divy-dadheech-211050290/",
  twitter: "https://x.com/1divy2",
};

export const ABOUT = {
  heading: "Student. Developer. Builder.",
  body: [
    "I'm a B.Tech Computer Science Engineering student at VIT-AP University, passionate about full stack development and machine learning.",
    "I actively build side projects using Java, Python, and React. Whether it's training ML models or designing robust database schemas, I love exploring the intersection of data and user experience.",
  ],
  pillars: [
    { title: "Machine Learning", desc: "Training models with Scikit-learn & Pandas." },
    { title: "Full Stack", desc: "Building interfaces with React and APIs with Flask." },
    { title: "Systems", desc: "Writing structured logic in Java and Python." },
  ],
};

export type Skill = { name: string; xp: number; cap: number; color: keyof typeof SKILL_COLORS };
export const SKILL_COLORS = {
  mint: "var(--mint)",
  sky: "var(--sky)",
  sun: "var(--sun)",
  coral: "var(--coral)",
  lavender: "var(--lavender)",
  cyan: "var(--cyan)",
} as const;

export const SKILL_GROUPS: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", xp: 85, cap: 100, color: "sky" },
      { name: "Java", xp: 80, cap: 100, color: "mint" },
      { name: "SQL", xp: 75, cap: 100, color: "coral" },
      { name: "TypeScript", xp: 60, cap: 100, color: "lavender" },
    ],
  },
  {
    label: "Frameworks & ML",
    skills: [
      { name: "React", xp: 80, cap: 100, color: "sky" },
      { name: "Flask", xp: 75, cap: 100, color: "mint" },
      { name: "Scikit-learn", xp: 70, cap: 100, color: "cyan" },
      { name: "Pandas/NumPy", xp: 75, cap: 100, color: "sun" },
    ],
  },
  {
    label: "Tools & Certs",
    skills: [
      { name: "Git / GitHub", xp: 85, cap: 100, color: "sun" },
      { name: "AWS Fundamentals", xp: 60, cap: 100, color: "coral" },
      { name: "MongoDB DBA", xp: 100, cap: 100, color: "mint" },
      { name: "Oracle Gen AI", xp: 100, cap: 100, color: "lavender" },
    ],
  },
];

export const BADGES = [
  { label: "B.Tech CSE @ VIT-AP", icon: "Trophy" },
  { label: "ML Enthusiast", icon: "Star" },
  { label: "Open to collab", icon: "Mic" },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  impact: string;
  stack: string[];
  color: keyof typeof SKILL_COLORS;
  liveUrl?: string;
  repoUrl?: string;
  year: number;
  placeholder?: boolean;
  previewMedia?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "veritas-feed",
    title: "VERITAS//FEED",
    tagline: "A real-time visual intelligence and disinformation detection platform.",
    problem: "Analysts struggle to identify, track, and verify rapidly evolving disinformation narratives because data is siloed across disconnected text tables and feeds.",
    impact: "Engineered a responsive intelligence dashboard with real-time Firestore synchronization, interactive knowledge graphs, and automated CI/CD deployments to Firebase Hosting.",
    stack: ["React", "TanStack Router", "Firestore", "Tailwind CSS"],
    color: "coral",
    year: 2026,
    liveUrl: "https://veritas-646ca.web.app/login",
    repoUrl: "https://github.com/1divy2/veritas-feed",
  },
  {
    slug: "stockpile",
    title: "StockPile",
    tagline: "An AI-powered financial terminal and paper trading platform.",
    problem: "Retail investors lack access to unified, institutional-grade market data and AI sentiment analysis in a single interface.",
    impact: "Built a high-performance financial dashboard featuring real-time market feeds, AI-driven research insights, and a live paper trading portfolio.",
    stack: ["TanStack Start", "Tailwind CSS", "Firebase", "Recharts"],
    color: "cyan",
    year: 2024,
    liveUrl: "https://stockpile.divysuper678.workers.dev/",
    repoUrl: "https://github.com/1divy2/stockpile-terminal"
  },
  {
    slug: "shoppersend",
    title: "ShoppersEnd",
    tagline: "A high-performance, full-stack e-commerce storefront.",
    problem: "Architecting a production-ready e-commerce platform capable of managing complex product catalogs and real-time inventory constraints.",
    impact: "Developed a scalable solution featuring a secure Spring Boot REST API, a PostgreSQL database, and a blazing-fast Server-Side Rendered React frontend.",
    stack: ["React", "Spring Boot", "PostgreSQL", "TanStack"],
    color: "sky",
    year: 2024,
    liveUrl: "https://shoppersend-lu9fp9pon-1divy2s-projects.vercel.app/",
    repoUrl: "https://github.com/1divy2/shoppersend",
  },
  {
    slug: "cortex-ai",
    title: "CorTeX.ai",
    tagline: "A deep work operating system that combines focus tracking, knowledge management, tasks, notes, and productivity analytics.",
    problem: "Existing productivity tools split focus tracking, notes, tasks, and insights across multiple apps, making it difficult to understand real work patterns.",
    impact: "Built a unified workspace with real-time focus session tracking, analytics, knowledge graphs, productivity heatmaps, AI-generated insights, and persistent cloud-backed data.",
    stack: ["React", "TypeScript", "TanStack Router", "Supabase"],
    color: "lavender",
    year: 2026,
    liveUrl: "https://cortex-ai.divysuper678.workers.dev/",
    repoUrl: "https://github.com/1divy2/cOrTeX-aI"
  }
];

export const TIMELINE = [
  {
    year: "Recent",
    title: "Building Projects",
    desc: "Actively developing academic and personal software projects using Java, Python, and Machine Learning.",
  },
  {
    year: "2022 - 2026",
    title: "VIT-AP University",
    desc: "Pursuing Bachelor of Technology in Computer Science Engineering. CGPA: 8.28.",
  }
];
