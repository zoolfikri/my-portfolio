export interface Personal {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  avatar: string;
  typewriterTexts: string[];
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface Navigation {
  brand: string;
  links: NavigationLink[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Skills {
  title: string;
  categories: SkillCategory[];
}

export interface Technology {
  name: string;
  color: string;
}

export interface ProjectLinks {
  demo: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
  technologies: Technology[];
  links: ProjectLinks;
}

export interface Projects {
  title: string;
  items: Project[];
}

export interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  color: string;
}

export interface Experience {
  title: string;
  items: ExperienceItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactEmail {
  address: string;
  subject: string;
}

export interface Contact {
  title: string;
  description: string;
  email: ContactEmail;
  social: SocialLink[];
}

export interface Footer {
  copyright: string;
}

export interface PortfolioData {
  personal: Personal;
  navigation: Navigation;
  skills: Skills;
  projects: Projects;
  experience: Experience;
  contact: Contact;
  footer: Footer;
}
