import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { testimonials } from '../../data/portfolioData';

export function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  }, [stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(startAutoSlide, 5000);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(startAutoSlide, 5000);
  };

  const currentItem = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
      <div className="max-w-4xl mx-auto">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-(--brand-color) uppercase">
            {t('testimonials.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-primary tracking-tight">
            {t('testimonials.title')}
          </h2>
        </div>

        <div data-reveal="scale" className="relative bg-theme-card border border-theme-color rounded-3xl p-8 sm:p-12 theme-shadow transition-all">
          <div className="text-(--primary-color)/20 text-5xl mb-6">
            <i className="fa-solid fa-quote-left"></i>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-theme-primary italic leading-relaxed mb-8 min-h-25">
            "{t(currentItem.textKey)}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-theme-color">
            <div className="flex items-center gap-4">
              {currentItem.avatar ? (
                <img
                  src={currentItem.avatar}
                  alt={t(currentItem.nameKey)}
                  className="w-14 h-14 rounded-full object-cover border-2 border-(--primary-color)"
                />
              ) : (
                <div className="w-14 h-14 rounded-full border-2 border-(--primary-color) bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center">
                  <i className="fa-solid fa-user text-xl"></i>
                </div>
              )}
              <div>
                <h4 className="font-bold text-base text-theme-primary">
                  {t(currentItem.nameKey)}
                </h4>
                <span className="text-xs sm:text-sm text-theme-secondary font-medium">
                  {t(currentItem.roleKey)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-xl border border-theme-color bg-theme-secondary flex items-center justify-center text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-xl border border-theme-color bg-theme-secondary flex items-center justify-center text-theme-primary hover:border-(--primary-color) hover:text-(--primary-color) transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                stopAutoSlide();
                setCurrentIndex(idx);
                setTimeout(startAutoSlide, 5000);
              }}
              aria-label={`Ir para depoimento ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-theme-brand'
                  : 'w-2.5 bg-theme-muted/40 hover:bg-theme-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
