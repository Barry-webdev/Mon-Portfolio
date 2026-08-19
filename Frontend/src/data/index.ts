export interface BilingualText {
  fr: string;
  en: string;
}

export interface Info {
  name: string;
  title: BilingualText;
  tagline: BilingualText;
  about: BilingualText;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  level: number;
  category:
    | "frontend"
    | "mobile"
    | "backend"
    | "language"
    | "devops"
    | "database"
    | "ai"
    | "other";
}

export type ProjectStatus = "live" | "beta" | "wip";
export type ProjectType = "solo" | "collab";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  color: string;
  icon: string;
  tags: string[];
  description: BilingualText;
  link: string | null;
  status: ProjectStatus;
}

export interface Experience {
  role: BilingualText;
  company: string;
  period: string;
  tasks: BilingualText[];
}

export interface Formation {
  title: BilingualText;
  school: string;
  period: string;
}

// ─────────────────────────────────────────────
// INFO PERSONNELLE
// ─────────────────────────────────────────────
export const info: Info = {
  name: "Barry Abdoul Razzaï",
  title: {
    fr: "Développeur Full-Stack",
    en: "Full-Stack Developer",
  },
  tagline: {
    fr: "JavaScript · TypeScript · React · React Native · Expo · Next.js · Node.js · PostgreSQL",
    en: "JavaScript · TypeScript · React · React Native · Expo · Next.js · Node.js · PostgreSQL",
  },
  about: {
    fr: "Développeur Full-Stack spécialisé dans la conception d'applications web & mobile modernes, de l'interface jusqu'à la logique serveur. Je travaille avec React, React Native, Next.js, Tailwind CSS, Node.js, Prisma et PostgreSQL. Formateur en développement web, je combine expertise technique et transmission du savoir.",
    en: "Full-Stack Developer specialized in building modern web & mobile applications, from UI to server logic. I work with React, React Native, Next.js, Tailwind CSS, Node.js, Prisma and PostgreSQL. Web development trainer, I combine technical expertise with knowledge sharing.",
  },
  phone: "+224 623 897 381",
  email: "babdoulrazzai@gmail.com",
  github: "https://github.com/Barry-webdev",
  linkedin: "http://linkedin.com/in/abdoul-razzaï-barry-488483343",
};

// ─────────────────────────────────────────────
// COMPÉTENCES
// ─────────────────────────────────────────────
export const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "language" },
  { name: "TypeScript", level: 85, category: "language" },
  { name: "React.js / Next.js", level: 88, category: "frontend" },
  { name: "React Native", level: 90, category: "mobile" },
  { name: "Expo", level: 78, category: "mobile" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "HTML5 / CSS3", level: 92, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Next.js API Routes", level: 80, category: "backend" },
  { name: "Prisma ORM", level: 78, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "MongoDB", level: 72, category: "database" },
  { name: "UI / UX (Figma)", level: 70, category: "other" },
  { name: "Git / GitHub", level: 85, category: "devops" },
  { name: "Vercel", level: 82, category: "devops" },
];

// ─────────────────────────────────────────────
// PROJETS
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "devtech",
    name: "DevTech Community",
    type: "collab",
    color: "#00D4AA",
    icon: "🌐",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    description: {
      fr: "Application web communautaire pour connecter les développeurs et entrepreneurs guinéens. Interface responsive avec Next.js, composants réutilisables et déploiement sur Vercel.",
      en: "Community web application to connect Guinean developers and entrepreneurs. Responsive interface with Next.js, reusable components and Vercel deployment.",
    },
    link: "https://dev-tech-community-app.vercel.app",
    status: "live",
  },
  {
    id: "ecopulse",
    name: "EcoPulse — Gestion des Déchets Pita",
    type: "solo",
    color: "#4ADE80",
    icon: "🌿",
    tags: ["React.js", "Node.js", "Smart City", "Guinée"],
    description: {
      fr: "Plateforme numérique de gestion des déchets urbains pour la ville de Pita. Connecte les services d'assainissement, les autorités locales et les citoyens pour une ville plus propre et durable.",
      en: "Digital urban waste management platform for the city of Pita. Connects sanitation services, local authorities and citizens for a cleaner, more sustainable city.",
    },
    link: "https://ecopulse-wine.vercel.app",
    status: "live",
  },
  {
    id: "minka",
    name: "Minka Aditrans",
    type: "solo",
    color: "#F97316",
    icon: "🚛",
    tags: ["React Native", "Node.js", "GPS", "Transport"],
    description: {
      fr: "Solution de transport et de logistique avec suivi GPS en temps réel. Gestion des véhicules, des opérations terrain et des signaux photo pour un suivi précis des missions.",
      en: "Transport and logistics solution with real-time GPS tracking. Vehicle management, field operations and photo signals for precise mission tracking.",
    },
    link: "https://minkaaditrans.vercel.app",
    status: "live",
  },
  {
    id: "hirrde",
    name: "Hirrdé",
    type: "collab",
    color: "#6C63FF",
    icon: "🎟️",
    tags: ["React.js", "Node.js", "Événements", "Billetterie"],
    description: {
      fr: "Application de gestion d'événements et de billetterie en ligne. Permet aux organisateurs de créer, gérer et vendre des billets pour leurs événements de façon simple et moderne.",
      en: "Online event management and ticketing application. Allows organizers to create, manage and sell tickets for their events in a simple and modern way.",
    },
    link: "https://hirrde.vercel.app",
    status: "live",
  },
  {
    id: "saadpoisson",
    name: "Saad Poisson",
    type: "collab",
    color: "#60A5FA",
    icon: "🐟",
    tags: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    description: {
      fr: "Site web professionnel pour une entreprise de vente de poissons. Interface moderne et responsive pour la présentation des produits et services.",
      en: "Professional website for a fish sales company. Modern and responsive interface for showcasing products and services.",
    },
    link: "https://www.saadpoisson.com",
    status: "live",
  },
  {
    id: "mairie-pita",
    name: "Portail Mairie de Pita",
    type: "collab",
    color: "#FACC15",
    icon: "🏛️",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
    description: {
      fr: "Application web Full-Stack pour la mairie de Pita. Je gère l'intégralité du Front-End (Next.js, Tailwind CSS, interfaces responsives) en collaboration avec un développeur Back-End (API, PostgreSQL, authentification).",
      en: "Full-Stack web application for Pita city hall. I handle the entire Front-End (Next.js, Tailwind CSS, responsive interfaces) in collaboration with a Back-End developer (API, PostgreSQL, authentication).",
    },
    link: null,
    status: "wip",
  },
];

// ─────────────────────────────────────────────
// EXPÉRIENCES
// ─────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: {
      fr: "Formateur en Développement Web",
      en: "Web Development Trainer",
    },
    company: "Simplon Guinée",
    period: "Juillet 2025 – Septembre 2025",
    tasks: [
      {
        fr: "Formation et accompagnement des apprenants en développement web.",
        en: "Training and mentoring learners in web development.",
      },
      {
        fr: "Transmission des bases et bonnes pratiques du développement web.",
        en: "Teaching fundamentals and best practices of web development.",
      },
      {
        fr: "Encadrement dans la réalisation de projets pratiques.",
        en: "Guiding learners through practical projects.",
      },
    ],
  },
  {
    role: {
      fr: "Formateur en Informatique",
      en: "IT Trainer",
    },
    company: "CSP EIB-Pita",
    period: "2022 – Novembre 2024",
    tasks: [
      {
        fr: "Animation de cours d'informatique et formations pratiques.",
        en: "Running computer science courses and practical training.",
      },
      {
        fr: "Formation en informatique bureautique et outils Microsoft Office.",
        en: "Training in office computing and Microsoft Office tools.",
      },
      {
        fr: "Développement et animation des réseaux sociaux.",
        en: "Social media development and management.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// FORMATIONS
// ─────────────────────────────────────────────
export const formations: Formation[] = [
  {
    title: {
      fr: "Principes Fondamentaux de l'Intelligence Artificielle",
      en: "Fundamentals of Artificial Intelligence",
    },
    school: "Heure IA",
    period: "Juin 2026",
  },
  {
    title: {
      fr: "Développement Web et Mobile",
      en: "Web and Mobile Development",
    },
    school: "Simplon Guinée",
    period: "2024 – 2025",
  },
  {
    title: {
      fr: "Développement Web avec React.js",
      en: "Web Development with React.js",
    },
    school: "FODR Labé",
    period: "2025",
  },
  {
    title: {
      fr: "Parcours de préincubation — Grand Prix ANSUTEN",
      en: "Pre-incubation Program — Grand Prix ANSUTEN",
    },
    school: "ANSUTEN",
    period: "2025",
  },
];
