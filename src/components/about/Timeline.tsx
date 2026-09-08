import { useLanguage } from '../../context/LanguageContext'
import { timelineItems } from '../../data/portfolioData'

export function Timeline() {
  const { t } = useLanguage()

  return (
    <div className="relative pl-6 border-l-2 border-(--primary-color)/30 space-y-8">
      {timelineItems.map(item => (
        <div key={item.id} className="relative group">
          <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full border-2 border-(--primary-color) bg-theme-main transition-transform duration-300 group-hover:scale-125 group-hover:bg-(--primary-color)" />

          <div className="bg-theme-card border border-theme-color rounded-2xl p-5 theme-shadow transition-all duration-300 group-hover:border-(--primary-color)">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-(--primary-color) bg-(--primary-color)/10 mb-2">
              {item.period}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-theme-primary mb-1">{t(item.titleKey)}</h4>
            <p className="text-sm text-theme-secondary leading-relaxed">{t(item.descriptionKey)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
