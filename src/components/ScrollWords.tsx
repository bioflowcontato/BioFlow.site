import { Fragment, useEffect, useRef } from 'react';

type ScrollWordsProps = {
  text: string;
  className?: string;
};

export default function ScrollWords({ text, className = '' }: ScrollWordsProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const wordElements = Array.from(paragraph.querySelectorAll<HTMLElement>('[data-scroll-word]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const previewNormalMotion =
      import.meta.env.DEV && new URLSearchParams(window.location.search).get('motion') === 'normal';
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const rect = paragraph.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startLine = viewportHeight * 0.82;
      const endLine = viewportHeight * 0.24;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (startLine - rect.top) / (rect.height + startLine - endLine)),
      );
      const shouldReduceMotion = reducedMotion.matches && !previewNormalMotion;
      const revealProgress = shouldReduceMotion ? 1 : scrollProgress;

      paragraph.dataset.scrollProgress = scrollProgress.toFixed(3);
      paragraph.dataset.reducedMotion = String(shouldReduceMotion);
      paragraph.dataset.previewMotion = String(previewNormalMotion);

      wordElements.forEach((word, index) => {
        const wordProgress = Math.min(1, Math.max(0, revealProgress * wordElements.length - index));
        const revealLayer = word.querySelector<HTMLElement>('[data-word-reveal]');
        if (revealLayer) {
          revealLayer.style.clipPath = `inset(0 ${(1 - wordProgress) * 100}% 0 0)`;
        }

        word.dataset.wordProgress = wordProgress.toFixed(3);
        word.style.transform = shouldReduceMotion
          ? 'none'
          : `translate3d(0, ${(1 - wordProgress) * 5}px, 0)`;
      });
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    reducedMotion.addEventListener('change', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <p ref={paragraphRef} aria-label={text} className={className} data-scroll-words data-scroll-progress="0">
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span aria-hidden="true" data-scroll-word className="relative inline-block will-change-transform">
            <span className="text-[#202020]" style={{ color: '#202020' }}>
              {word}
            </span>
            <span
              data-word-reveal
              className="pointer-events-none absolute inset-0 whitespace-nowrap text-[#f5f5f5]"
              style={{ color: '#f5f5f5', clipPath: 'inset(0 100% 0 0)' }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </p>
  );
}
