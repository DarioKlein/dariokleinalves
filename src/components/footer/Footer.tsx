import { useLanguage } from '../../context/LanguageContext';
import { contactInfo, personalInfo, socialLinks } from '../../data/portfolioData';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-main border-t border-theme-color pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xl font-bold text-theme-primary">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-theme-secondary leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-2 text-sm text-theme-secondary">
              <li>
                <a href="#home" className="hover:text-(--primary-color) transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-(--primary-color) transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-(--primary-color) transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-(--primary-color) transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-(--primary-color) transition-colors">
                  {t('nav.blog')}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 text-sm text-theme-secondary">
              <li>
                <a href="#services" className="hover:text-(--primary-color) transition-colors">
                  {t('services.frontend.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-(--primary-color) transition-colors">
                  {t('services.backend.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-(--primary-color) transition-colors">
                  {t('services.fullstack.title')}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-2 text-sm text-theme-secondary">
              <li className="break-all">{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-theme-color flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-theme-muted">
          <p>
            &copy; {currentYear} {personalInfo.name}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={social.label}
                className="w-8 h-8 rounded-lg border border-theme-color bg-theme-card flex items-center justify-center text-theme-secondary hover:text-(--primary-color) hover:border-(--primary-color) transition-colors"
              >
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
