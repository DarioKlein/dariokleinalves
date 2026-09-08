import { useLanguage } from '../../context/LanguageContext'
import { blogPosts } from '../../data/portfolioData'

export function Blog() {
  const { t } = useLanguage()

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-main">
      <div className="max-w-7xl mx-auto">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--brand-color) uppercase">
            {t('blog.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">{t('blog.title')}</h2>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article
              data-reveal="scale"
              key={post.id}
              className="bg-theme-card border border-theme-color rounded-2xl overflow-hidden theme-shadow transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color) flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-theme-secondary">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={t(post.titleKey)}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-(--primary-color)/20 to-(--accent-color)/10 flex items-center justify-center text-(--primary-color)">
                      <i className="fa-solid fa-pen-to-square text-4xl"></i>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold text-(--primary-color) bg-(--primary-color)/10">
                    {t(post.categoryKey)}
                  </span>

                  <h3 className="text-lg font-bold text-theme-primary group-hover:text-(--primary-color) transition-colors">
                    {t(post.titleKey)}
                  </h3>

                  <p className="text-sm text-theme-secondary leading-relaxed line-clamp-3">{t(post.descriptionKey)}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                {post.linkUrl ? (
                  <a
                    href={post.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-(--primary-color) hover:text-(--primary-dark) transition-colors"
                  >
                    <span>{t('blog.readMore')}</span>
                    <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-theme-muted">
                    <i className="fa-solid fa-clock"></i>
                    {t('blog.comingSoon')}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
