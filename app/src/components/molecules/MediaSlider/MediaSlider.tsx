import { useRef } from 'react';
import styles from './MediaSlider.module.css';

interface Slide {
  src: string;
  alt: string;
}

interface MediaSliderProps {
  slides: Slide[];
}

export default function MediaSlider({ slides }: MediaSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: dir * slider.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className={styles.media}>
      <div className={styles.track} ref={sliderRef}>
        {slides.map(slide => (
          <div key={slide.src} className={styles.slide}>
            <img src={slide.src} alt={slide.alt} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.nav} aria-label="Назад" onClick={() => scroll(-1)}>←</button>
        <button type="button" className={styles.nav} aria-label="Вперёд" onClick={() => scroll(1)}>→</button>
      </div>
    </div>
  );
}
