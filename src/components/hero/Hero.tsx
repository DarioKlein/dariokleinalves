import { useLanguage } from '../../context/LanguageContext'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import { Typewriter } from './Typewriter'
import { MatrixBackground } from './MatrixBackground'

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <MatrixBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="hero-reveal lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-theme-color bg-theme-card theme-shadow">
            <i className="fa-solid fa-chart-bar text-(--brand-color) text-xs"></i>
            <span className="text-xs sm:text-sm font-semibold text-theme-primary">{t('hero.badge')}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-theme-primary tracking-tight leading-tight">
              {t('hero.greeting')} <span className="gradient-text">{personalInfo.shortName}</span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <Typewriter key={language} />
            </div>
          </div>

          <p className="text-base sm:text-lg text-theme-secondary max-w-xl leading-relaxed">{t('hero.description')}</p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-theme-brand text-white font-semibold text-sm sm:text-base theme-shadow hover:bg-(--brand-dark) transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span>{t('hero.viewProjects')}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-theme-color bg-theme-card text-theme-primary font-semibold text-sm sm:text-base hover:border-(--primary-color) hover:text-(--primary-color) transition-all hover:scale-105 active:scale-95 cursor-pointer theme-shadow"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>{t('hero.contact')}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {socialLinks.map(social => (
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

        <div className="hero-reveal hero-reveal-delayed lg:col-span-5 flex justify-center relative">
          <div className="relative w-64 aspect-5/6 sm:w-80 md:w-96">
            <div className="absolute inset-0 rounded-3xl bg-(--brand-color) opacity-10 blur-xl animate-pulse-subtle" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-theme-color bg-theme-card theme-shadow p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-theme-secondary border-t-4 border-t-(--brand-color)">
                <img
                  src="/dario.jpg"
                  alt={personalInfo.name}
                  width="1152"
                  height="2048"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 px-5 pt-14 pb-5 text-left bg-gradient-to-t from-black/85 via-black/45 to-transparent">
                  <strong className="block text-xl sm:text-2xl text-white">Dario Klein</strong>
                  <span className="text-xs sm:text-sm text-white/80">{t('hero.badge')}</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 sm:-left-8 bg-theme-card border border-theme-color rounded-xl px-3.5 py-2 flex items-center gap-2.5 theme-shadow animate-float-slow z-20">
              <div className="w-8 h-8 rounded-lg bg-(--react-color)/10 text-(--react-color) flex items-center justify-center font-bold">
                <i className="fa-brands fa-react text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm font-bold text-theme-primary">{t('hero.floating.react')}</span>
            </div>

            <div className="absolute top-1/4 -right-4 sm:-right-8 bg-theme-card border border-theme-color rounded-xl px-3.5 py-2 flex items-center gap-2.5 theme-shadow animate-float-medium z-20">
              <div className="w-8 h-8 rounded-lg bg-(--angular-color)/10 text-(--angular-color) flex items-center justify-center font-bold">
                <i className="fa-brands fa-angular text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm font-bold text-theme-primary">{t('hero.floating.angular')}</span>
            </div>

            <div className="absolute -bottom-4 left-6 sm:left-12 bg-theme-card border border-theme-color rounded-xl px-3.5 py-2 flex items-center gap-2.5 theme-shadow animate-float-fast z-20">
              <div className="w-8 h-8 rounded-lg bg-(--spring-color)/10 text-(--spring-color) flex items-center justify-center font-bold">
                <i className="fa-solid fa-leaf text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm font-bold text-theme-primary">{t('hero.floating.java')}</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Rolar para baixo"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-theme-muted hover:text-(--primary-color) transition-colors animate-bounce-indicator z-10 cursor-pointer p-2"
      >
        <i className="fa-solid fa-chevron-down text-lg"></i>
      </a>
    </section>
  )
}
