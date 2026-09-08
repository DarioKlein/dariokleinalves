export type Language = 'pt' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Highlight {
  id: string;
  icon: string;
  titleKey: string;
  value: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  descriptionKey: string;
}

export interface SkillCategory {
  titleKey: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  categoryFilter: 'frontend' | 'backend' | 'fullstack';
  descriptionKey: string;
  technologies: string[];
  image?: string;
  linkUrl: string;
}

export interface TestimonialItem {
  id: string;
  nameKey: string;
  roleKey: string;
  textKey: string;
  avatar?: string;
}

export interface BlogPostItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  image?: string;
  linkUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  whatsappUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}
