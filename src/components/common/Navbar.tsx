import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { personalInfo } from '../../data/portfolioData'

const navItems = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#services', key: 'nav.services' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#blog', key: 'nav.blog' },
  { href: '#contact', key: 'nav.contact' },
]

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'blog', 'contact']
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-300 ${
        scrolled
          ? 'bg-(--header-bg) backdrop-blur-md border-b border-theme-color py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-theme-brand flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
            {personalInfo.shortName.charAt(0)}
          </div>
          <span className="font-semibold text-lg text-theme-primary tracking-tight">
            {personalInfo.shortName} <span className="text-(--brand-color)">Klein</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map(item => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-(--brand-color) font-semibold'
                      : 'text-theme-secondary hover:text-theme-primary hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {t(item.key)}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-theme-color bg-theme-card text-xs font-semibold text-theme-primary hover:border-(--primary-color) transition-colors cursor-pointer"
              aria-label="Selecionar idioma"
            >
              <img
                src={language === 'pt' ? 'https://flagcdn.com/w20/br.png' : 'https://flagcdn.com/w20/us.png'}
                alt={language.toUpperCase()}
                className="w-4 h-3 object-cover rounded-sm"
              />
              <span>{language.toUpperCase()}</span>
              <i className="fa-solid fa-chevron-down text-[10px] text-theme-muted ml-0.5"></i>
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-32 bg-theme-card border border-theme-color rounded-xl shadow-lg py-1.5 z-50 animate-fadeIn"
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <button
                  onClick={() => {
                    setLanguage('pt')
                    setLangDropdownOpen(false)
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                    language === 'pt'
                      ? 'bg-(--primary-color)/10 text-(--primary-color) font-bold'
                      : 'text-theme-primary hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <img src="https://flagcdn.com/w20/br.png" alt="Português" className="w-4 h-3 rounded-sm" />
                  <span>Português</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('en')
                    setLangDropdownOpen(false)
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-(--primary-color)/10 text-(--primary-color) font-bold'
                      : 'text-theme-primary hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-4 h-3 rounded-sm" />
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            title="Alternar tema"
            className="w-9 h-9 rounded-lg border border-theme-color bg-theme-card flex items-center justify-center text-theme-primary hover:text-(--brand-color) hover:border-(--brand-color) transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun text-sm text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-sm text-theme-secondary"></i>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="md:hidden w-9 h-9 rounded-lg border border-theme-color bg-theme-card flex items-center justify-center text-theme-primary hover:text-(--primary-color) transition-colors cursor-pointer"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-theme-card border-b border-theme-color px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map(item => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-(--brand-color)/10 text-(--brand-color) font-semibold'
                    : 'text-theme-primary hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {t(item.key)}
              </a>
            )
          })}

          <div className="pt-3 border-t border-theme-color flex items-center gap-3">
            <span className="text-xs text-theme-muted font-medium">Idioma:</span>
            <button
              onClick={() => {
                setLanguage('pt')
                setMobileMenuOpen(false)
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border ${
                language === 'pt'
                  ? 'border-(--primary-color) bg-(--primary-color)/10 text-(--primary-color) font-bold'
                  : 'border-theme-color text-theme-primary'
              }`}
            >
              <img src="https://flagcdn.com/w20/br.png" alt="PT" className="w-4 h-3 rounded-sm" />
              <span>PT</span>
            </button>
            <button
              onClick={() => {
                setLanguage('en')
                setMobileMenuOpen(false)
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border ${
                language === 'en'
                  ? 'border-(--primary-color) bg-(--primary-color)/10 text-(--primary-color) font-bold'
                  : 'border-theme-color text-theme-primary'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4 h-3 rounded-sm" />
              <span>EN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
