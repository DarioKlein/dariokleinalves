import { useLanguage } from '../../context/LanguageContext';
import { contactInfo, socialLinks } from '../../data/portfolioData';
import { ContactForm } from './ContactForm';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--primary-color) uppercase">
            {t('contact.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-theme-primary">
              {t('contact.heading')}
            </h3>

            <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-lg"></i>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-theme-muted uppercase">
                    {t('contact.email')}
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-theme-primary hover:text-(--primary-color) transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-lg"></i>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-theme-muted uppercase">
                    {t('contact.phone')}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-theme-primary hover:text-(--primary-color) transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-theme-muted uppercase">
                    {t('contact.location')}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-theme-primary">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-theme-color">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-theme-color bg-theme-card flex items-center justify-center text-theme-secondary hover:text-(--primary-color) hover:border-(--primary-color) transition-all hover:scale-110 theme-shadow"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-theme-card border border-theme-color rounded-2xl p-6 sm:p-8 theme-shadow">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
