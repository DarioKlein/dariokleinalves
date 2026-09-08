import { useLanguage } from '../../context/LanguageContext';
import type { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const categoryIcons = {
    frontend: 'fa-solid fa-laptop-code',
    backend: 'fa-solid fa-server',
    fullstack: 'fa-solid fa-layer-group',
  };

  return (
    <div className="bg-theme-card border border-theme-color rounded-2xl overflow-hidden theme-shadow transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color) flex flex-col group">
      <div className="relative aspect-video w-full overflow-hidden bg-theme-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={t(project.titleKey)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-(--primary-color)/20 to-(--accent-color)/10 flex flex-col items-center justify-center gap-3 text-(--primary-color)">
            <i className={`${categoryIcons[project.categoryFilter]} text-4xl`}></i>
            <span className="text-sm font-bold text-theme-primary">{t(project.titleKey)}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px]">
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={t('projects.viewProject')}
            className="w-12 h-12 rounded-full bg-white text-(--primary-color) flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
          </a>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block text-xs font-bold text-(--primary-color) uppercase tracking-wider mb-2">
            {t(project.categoryKey)}
          </span>

          <h3 className="text-xl font-bold text-theme-primary mb-2">
            {t(project.titleKey)}
          </h3>

          <p className="text-sm text-theme-secondary leading-relaxed mb-6">
            {t(project.descriptionKey)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-theme-color">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-theme-secondary text-theme-secondary border border-theme-color"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
