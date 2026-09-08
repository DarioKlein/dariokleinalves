import { useLanguage } from '../../context/LanguageContext';
import { services } from '../../data/portfolioData';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-main">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--primary-color) uppercase">
            {t('services.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-theme-card border border-theme-color rounded-2xl p-8 theme-shadow transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color) hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center text-2xl mb-6 transition-colors duration-300 group-hover:bg-(--primary-color) group-hover:text-white">
                  <i className={service.icon}></i>
                </div>

                <h3 className="text-xl font-bold text-theme-primary mb-3">
                  {t(service.titleKey)}
                </h3>

                <p className="text-sm text-theme-secondary leading-relaxed mb-6">
                  {t(service.descriptionKey)}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-theme-color">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-theme-secondary">
                    <i className="fa-solid fa-check text-(--primary-color) text-xs"></i>
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
