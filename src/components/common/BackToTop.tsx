import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let pulseTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
        clearTimeout(pulseTimer);
        pulseTimer = setTimeout(() => {
          setPulse(true);
        }, 3000);
      } else {
        setVisible(false);
        setPulse(false);
        clearTimeout(pulseTimer);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(pulseTimer);
    };
  }, []);

  const scrollToTop = () => {
    setPulse(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className={`fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-theme-brand text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-(--brand-dark) cursor-pointer ${
        pulse ? 'animate-pulse-subtle' : ''
      }`}
    >
      <i className="fa-solid fa-arrow-up text-base"></i>
    </button>
  );
}
