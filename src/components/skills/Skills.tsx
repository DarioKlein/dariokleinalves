import type { CSSProperties } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories } from '../../data/portfolioData';

const skillColors: Record<string, string> = {
  React: 'var(--react-color)',
  Angular: 'var(--angular-color)',
  TypeScript: 'var(--typescript-color)',
  'Tailwind CSS': 'var(--tailwind-color)',
  Java: 'var(--java-color)',
  'Spring Boot': 'var(--spring-color)',
  'APIs REST': 'var(--spring-color)',
  'JPA / Hibernate': 'var(--database-color)',
  'MySQL & PostgreSQL': 'var(--database-color)',
  MongoDB: 'var(--spring-color)',
  Docker: 'var(--docker-color)',
  'Git & GitHub': 'var(--git-color)',
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--brand-color) uppercase">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('skills.title')}
          </h2>
        </div>

        <div className="reveal-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category, catIdx) => (
            <div
              data-reveal
              key={catIdx}
              className="bg-theme-card border border-theme-color rounded-2xl p-6 sm:p-8 theme-shadow space-y-6"
            >
              <h3 className="text-xl font-bold text-theme-primary border-b border-theme-color pb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-(--primary-color)"></span>
                {t(category.titleKey)}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="technology-card flex items-start gap-3.5 p-3.5 rounded-xl border bg-theme-secondary transition-all hover:translate-x-1"
                    style={{ '--item-accent': skillColors[skill.name] } as CSSProperties}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{
                        color: skillColors[skill.name],
                        backgroundColor: `color-mix(in srgb, ${skillColors[skill.name]} 11%, transparent)`,
                      }}
                    >
                      <i className={skill.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-theme-primary">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-theme-secondary leading-snug">
                        {t(skill.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
