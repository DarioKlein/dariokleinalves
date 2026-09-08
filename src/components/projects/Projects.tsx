import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';

type Filter = 'all' | 'frontend' | 'backend' | 'fullstack';

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categoryFilter === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-main">
      <div className="max-w-7xl mx-auto">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--brand-color) uppercase">
            {t('projects.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('projects.title')}
          </h2>
        </div>

        <div data-reveal="scale" className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {(['all', 'frontend', 'backend', 'fullstack'] as Filter[]).map((filterKey) => (
            <button
              key={filterKey}
              onClick={() => setActiveFilter(filterKey)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === filterKey
                  ? 'bg-theme-brand text-white theme-shadow'
                  : 'bg-theme-card border border-theme-color text-theme-secondary hover:text-theme-primary hover:border-(--primary-color)'
              }`}
            >
              {t(`projects.filter.${filterKey}`)}
            </button>
          ))}
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
