import { PersonalInfo, Skill, Service, Project } from './types';

export const personalInfo: PersonalInfo = {
  name: "Cumar",
  lastName: "Saciid",
  title: "Graphic Designer & Frontend Developer",
  bio: "I create beautiful, modern and user-friendly websites and designs that help brands grow and stand out.",
  detailedBio: "I'm a passionate Graphic Designer and Frontend Developer based in Somalia. I love turning ideas into beautiful, functional and user-friendly digital experiences.",
  experienceSummary: "With a strong eye for design and clean code, I help businesses grow through modern web solutions and creative visuals.",
  experienceYears: 2,
  location: "Somalia",
  education: "Computer Science",
  availability: "Freelance",
  email: "omarwhatbest@gmail.com",
  phone: "+252 61 XXXXXXX",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com"
  }
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    level: 96,
    category: "frontend",
    icon: "Html5Icon", // Will match custom or Lucide
    color: "from-orange-500 to-red-500"
  },
  {
    name: "CSS3",
    level: 90,
    category: "frontend",
    icon: "Css3Icon",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "JavaScript",
    level: 80,
    category: "frontend",
    icon: "JsIcon",
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "React",
    level: 75,
    category: "frontend",
    icon: "ReactIcon",
    color: "from-sky-400 to-blue-500"
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: "TailwindIcon",
    color: "from-cyan-400 to-teal-500"
  },
  {
    name: "Figma",
    level: 85,
    category: "design",
    icon: "FigmaIcon",
    color: "from-purple-500 to-pink-500"
  }
];

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    description: "I create modern, responsive website designs that are beautiful, engaging, and user-friendly.",
    icon: "Monitor"
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "I build fast, responsive and interactive websites using modern frontend web technologies.",
    icon: "Code2"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "I design creative visuals for brands including high-quality banners, posters, and more.",
    icon: "Palette"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "I design unique, creative, and professional logos that represent your distinct brand identity.",
    icon: "PenTool"
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "SaaS Analytics Dashboard",
    category: "Frontend Development",
    description: "A fast, fully-responsive dashboard tracking operational SaaS metrics, featuring charts and filters.",
    imageUrl: "https://picsum.photos/seed/dash/600/450",
    demoUrl: "#",
    githubUrl: "https://github.com",
    tags: ["React", "Tailwind", "Recharts"]
  },
  {
    id: "proj-2",
    title: "Eco-Friendly E-Commerce",
    category: "Web Design",
    description: "Modern, minimal design concept for a green organic lifestyle brand, with seamless checkouts.",
    imageUrl: "https://picsum.photos/seed/eco/600/450",
    demoUrl: "#",
    tags: ["Figma", "UI/UX", "Prototyping"]
  },
  {
    id: "proj-3",
    title: "Brand Identity - Cumar Saciid",
    category: "Logo Design",
    description: "A comprehensive brand manual and stationery design, presenting a bold typographic monogram.",
    imageUrl: "https://picsum.photos/seed/brand/600/450",
    demoUrl: "#",
    tags: ["Illustrator", "Branding", "Vector"]
  },
  {
    id: "proj-4",
    title: "Agency Promotional Poster",
    category: "Graphic Design",
    description: "High-impact visual composition created for an international creative studio launch campaign.",
    imageUrl: "https://picsum.photos/seed/poster/600/450",
    demoUrl: "#",
    tags: ["Photoshop", "Typography", "Composition"]
  },
  {
    id: "proj-5",
    title: "Creative Agency Website",
    category: "Frontend Development",
    description: "Interactive portfolio showcase for developers with smooth, framer-motion page transitions.",
    imageUrl: "https://picsum.photos/seed/agency/600/450",
    demoUrl: "#",
    githubUrl: "https://github.com",
    tags: ["React", "Motion", "Tailwind"]
  },
  {
    id: "proj-6",
    title: "Smart Home Mobile App UI",
    category: "Web Design",
    description: "Intuitive mobile app UI design focusing on custom smart device controls, dark and light presets.",
    imageUrl: "https://picsum.photos/seed/smarthome/600/450",
    demoUrl: "#",
    tags: ["Figma", "Mobile UI", "UX Research"]
  }
];
