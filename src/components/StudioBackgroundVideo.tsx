import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster: string;
  alt: string;
  loading?: 'eager' | 'lazy';
  videoClassName?: string;
};

/** Background footage is deferred until near the viewport; the poster remains the fallback. */
export default function StudioBackgroundVideo({ src, poster, alt, loading = 'lazy', videoClassName = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !('IntersectionObserver' in window)) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let nearViewport = false;

    const syncPlayback = () => {
      if (motionPreference.matches || !nearViewport) {
        video.pause();
        if (motionPreference.matches) {
          video.removeAttribute('src');
          video.load();
          setPlaying(false);
        }
        return;
      }

      if (video.getAttribute('src') !== src) {
        video.src = src;
        video.load();
      }
      void video.play().catch(() => setPlaying(false));
    };

    const observer = new IntersectionObserver(([entry]) => {
      nearViewport = entry.isIntersecting;
      syncPlayback();
    }, { rootMargin: '180px 0px', threshold: 0.01 });

    observer.observe(video);
    motionPreference.addEventListener('change', syncPlayback);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener('change', syncPlayback);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [src]);

  return (
    <>
      <img src={poster} alt={alt} loading={loading} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <video
        ref={videoRef}
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setPlaying(false)}
        className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-700 ${playing ? 'opacity-100' : 'opacity-0'} ${videoClassName}`}
      />
    </>
  );
}
