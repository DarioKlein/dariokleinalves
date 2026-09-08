import { useLanguage } from '../../context/LanguageContext';
import { highlights, personalInfo } from '../../data/portfolioData';
import { Timeline } from './Timeline';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--primary-color) uppercase">
            {t('about.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg font-medium text-theme-primary leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-base text-theme-secondary leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h) => (
                <div
                  key={h.id}
                  className="bg-theme-card border border-theme-color rounded-2xl p-4 theme-shadow transition-transform hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center mb-3">
                    <i className={`${h.icon} text-lg`}></i>
                  </div>
                  <h4 className="font-bold text-sm text-theme-primary mb-1">
                    {t(h.titleKey)}
                  </h4>
                  <p className="text-xs text-theme-secondary leading-normal">
                    {t(h.value)}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-theme-brand text-white font-semibold text-sm sm:text-base theme-shadow hover:bg-(--primary-dark) transition-all hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-download"></i>
                <span>{t('about.downloadCV')}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
}
