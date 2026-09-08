import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    const observeElement = (element: Element) => {
      if (element instanceof HTMLElement && element.matches('[data-reveal]')) {
        observer.observe(element);
      }
      element.querySelectorAll<HTMLElement>('[data-reveal]').forEach((child) => observer.observe(child));
    };

    elements.forEach((element) => observer.observe(element));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeElement(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
