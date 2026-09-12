import type {
  SocialLink,
  Highlight,
  TimelineItem,
  ServiceItem,
  SkillCategory,
  ProjectItem,
  TestimonialItem,
  BlogPostItem,
  ContactInfo,
} from '../types'

export const personalInfo = {
  name: 'Dario Klein Alves Batista',
  shortName: 'Dario',
  role: 'Desenvolvedor Full-Stack',
  resumeUrl: '/curriculo-dario-klein.pdf',
  resumeFileName: 'Curriculo-Dario-Klein.pdf',
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/DarioKlein',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dario-klein-7a49ab281/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
]

export const highlights: Highlight[] = [
  {
    id: 'education',
    icon: 'fa-solid fa-graduation-cap',
    titleKey: 'about.education',
    value: 'about.education.desc',
  },
  {
    id: 'experience',
    icon: 'fa-solid fa-code',
    titleKey: 'about.experience',
    value: 'about.experience.desc',
  },
  {
    id: 'focus',
    icon: 'fa-solid fa-layer-group',
    titleKey: 'about.focus',
    value: 'about.focus.desc',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    id: 'technical-course',
    period: '2021 - 2023',
    titleKey: 'timeline.technical.title',
    descriptionKey: 'timeline.technical.description',
  },
  {
    id: 'ada-tech',
    period: '2023',
    titleKey: 'timeline.ada.title',
    descriptionKey: 'timeline.ada.description',
  },
  {
    id: 'cepein',
    period: '2025 - Atual',
    titleKey: 'timeline.cepein.title',
    descriptionKey: 'timeline.cepein.description',
  },
]

export const services: ServiceItem[] = [
  {
    id: 'frontend',
    icon: 'fa-solid fa-laptop-code',
    titleKey: 'services.frontend.title',
    descriptionKey: 'services.frontend.description',
    features: ['services.feature.reactAngular', 'services.feature.typescript', 'services.feature.responsive'],
  },
  {
    id: 'backend',
    icon: 'fa-solid fa-server',
    titleKey: 'services.backend.title',
    descriptionKey: 'services.backend.description',
    features: ['services.feature.javaSpring', 'services.feature.rest', 'services.feature.jpa'],
  },
  {
    id: 'fullstack',
    icon: 'fa-solid fa-layer-group',
    titleKey: 'services.fullstack.title',
    descriptionKey: 'services.fullstack.description',
    features: ['services.feature.integration', 'services.feature.databases', 'services.feature.devops'],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills.frontend.title',
    skills: [
      { name: 'React', icon: 'fa-brands fa-react', descriptionKey: 'skills.frontend.react' },
      { name: 'Angular', icon: 'fa-brands fa-angular', descriptionKey: 'skills.frontend.angular' },
      { name: 'TypeScript', icon: 'fa-solid fa-code', descriptionKey: 'skills.frontend.typescript' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wand-magic-sparkles', descriptionKey: 'skills.frontend.tailwind' },
    ],
  },
  {
    titleKey: 'skills.backend.title',
    skills: [
      { name: 'Java', icon: 'fa-brands fa-java', descriptionKey: 'skills.backend.java' },
      { name: 'Spring Boot', icon: 'fa-solid fa-leaf', descriptionKey: 'skills.backend.spring' },
      { name: 'APIs REST', icon: 'fa-solid fa-plug', descriptionKey: 'skills.backend.api' },
      { name: 'JPA / Hibernate', icon: 'fa-solid fa-database', descriptionKey: 'skills.backend.jpa' },
    ],
  },
  {
    titleKey: 'skills.tools.title',
    skills: [
      { name: 'MySQL & PostgreSQL', icon: 'fa-solid fa-database', descriptionKey: 'skills.tools.sql' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf', descriptionKey: 'skills.tools.mongodb' },
      { name: 'Docker', icon: 'fa-brands fa-docker', descriptionKey: 'skills.tools.docker' },
      { name: 'Git & GitHub', icon: 'fa-brands fa-github', descriptionKey: 'skills.tools.git' },
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'clinica-restauracao',
    titleKey: 'projects.clinica.title',
    categoryKey: 'projects.frontend.category',
    categoryFilter: 'frontend',
    descriptionKey: 'projects.clinica.description',
    technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Tailwind CSS'],
    image: '/clinica-restauracao.png',
    linkUrl: 'https://github.com/LuisFelipedaSilvaE/restauracao-clinica-angular',
  },
  {
    id: 'nexus-app',
    titleKey: 'projects.nexus.title',
    categoryKey: 'projects.frontend.category',
    categoryFilter: 'frontend',
    descriptionKey: 'projects.nexus.description',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    image: '/nexus-app.png',
    linkUrl: 'https://github.com/DarioKlein/nexus-app-react',
  },
  {
    id: 'ecopass',
    titleKey: 'projects.ecopass.title',
    categoryKey: 'projects.backend.category',
    categoryFilter: 'backend',
    descriptionKey: 'projects.ecopass.description',
    technologies: ['Java 21', 'Spring Boot', 'MapStruct', 'Spring Validation'],
    image: '/ecopass.png',
    linkUrl: 'https://github.com/DarioKlein/ecopass-api-springboot',
  },
  {
    id: 'gaming-core',
    titleKey: 'projects.gaming.title',
    categoryKey: 'projects.fullstack.category',
    categoryFilter: 'fullstack',
    descriptionKey: 'projects.gaming.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    linkUrl: 'https://github.com/DarioKlein/gaming-core',
  },
  {
    id: 'task-manager',
    titleKey: 'projects.tasks.title',
    categoryKey: 'projects.frontend.category',
    categoryFilter: 'frontend',
    descriptionKey: 'projects.tasks.description',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Bootstrap'],
    linkUrl: 'https://github.com/DarioKlein/projeto-fixacao-cepein-angular',
  },
  {
    id: 'transactions-api',
    titleKey: 'projects.transactions.title',
    categoryKey: 'projects.backend.category',
    categoryFilter: 'backend',
    descriptionKey: 'projects.transactions.description',
    technologies: ['Node.js', 'TypeScript', 'Fastify', 'Vitest', 'Supertest'],
    linkUrl: 'https://github.com/DarioKlein/transactions-api-fastify',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    nameKey: 'testimonials.placeholder1.name',
    roleKey: 'testimonials.placeholder1.role',
    textKey: 'testimonials.placeholder1.text',
  },
  {
    id: 'placeholder-2',
    nameKey: 'testimonials.placeholder2.name',
    roleKey: 'testimonials.placeholder2.role',
    textKey: 'testimonials.placeholder2.text',
  },
  {
    id: 'placeholder-3',
    nameKey: 'testimonials.placeholder3.name',
    roleKey: 'testimonials.placeholder3.role',
    textKey: 'testimonials.placeholder3.text',
  },
]

export const blogPosts: BlogPostItem[] = [
  {
    id: 'placeholder-1',
    titleKey: 'blog.placeholder1.title',
    categoryKey: 'blog.category.backend',
    descriptionKey: 'blog.placeholder1.description',
  },
  {
    id: 'placeholder-2',
    titleKey: 'blog.placeholder2.title',
    categoryKey: 'blog.category.frontend',
    descriptionKey: 'blog.placeholder2.description',
  },
  {
    id: 'placeholder-3',
    titleKey: 'blog.placeholder3.title',
    categoryKey: 'blog.category.career',
    descriptionKey: 'blog.placeholder3.description',
  },
]

export const contactInfo: ContactInfo = {
  email: 'dariokleinalves@gmail.com',
  phone: '(18) 99732-5633',
  location: 'Brasil',
  whatsappUrl: 'https://wa.me/5518997325633',
}
