import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ExitIntentModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      if (window.innerWidth < 768) return;
      if (e.clientY <= 30 && Date.now() - startTime > 7000) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-md bg-theme-card border border-theme-color rounded-2xl p-6 sm:p-8 text-center theme-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-theme-muted hover:text-theme-primary transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5"
          aria-label="Fechar modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-(--primary-color)/10 text-(--primary-color) flex items-center justify-center">
          <i className="fa-solid fa-hand text-2xl animate-pulse-subtle"></i>
        </div>

        <h3 className="text-2xl font-bold text-theme-primary mb-3">
          {t('exit.title')}
        </h3>

        <p className="text-theme-secondary text-sm sm:text-base leading-relaxed mb-6">
          {t('exit.text')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-theme-brand text-white font-medium hover:bg-(--primary-dark) transition-colors theme-shadow"
          >
            <i className="fa-solid fa-briefcase text-sm"></i>
            <span>{t('exit.viewProjects')}</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-theme-color bg-theme-secondary text-theme-primary font-medium hover:border-(--primary-color) transition-colors"
          >
            <i className="fa-solid fa-envelope text-sm"></i>
            <span>{t('exit.contact')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
