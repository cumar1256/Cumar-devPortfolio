export interface Skill {
  name: string;
  level: number; // e.g. 96
  category: 'frontend' | 'design' | 'tools';
  icon: string; // lucide icon name or React component key
  color: string; // styling colors
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  title: string;
  bio: string;
  detailedBio: string;
  experienceYears: number;
  location: string;
  education: string;
  experienceSummary: string;
  availability: string;
  email: string;
  phone: string;
  whatsapp: string;
  socials: {
    github: string;
    linkedin: string;
    tiktok: string;
    behance: string;
    dribbble: string;
  };
}
