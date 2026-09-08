import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function Typewriter() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = [t('hero.typewriter1'), t('hero.typewriter2')];
    const currentFullText = texts[textIndex % texts.length];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 120);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, t]);

  return (
    <span className="inline-flex items-center text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary tracking-tight">
      <span>{displayText}</span>
      <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-(--primary-color) animate-cursor-blink" />
    </span>
  );
}
