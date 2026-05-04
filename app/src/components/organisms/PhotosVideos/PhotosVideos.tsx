import styles from './PhotosVideos.module.css';
import Button from '../../atoms/Button';

const BASE = 'https://zelorlyata.ru';
const THUMB = 'https://img.youtube.com/vi';

const PHOTOS = [
  {
    date: '5 апреля 2026',
    title: 'Концерт в КЦ «Зеленоград»',
    src: `${BASE}/upload/resize_cache/iblock/441/360_360_240cd750bba9870f18aada2478b24840a/IMG_20260405_195335.jpg`,
    href: `${BASE}/photos/`,
  },
  {
    date: '12 марта 2026',
    title: 'Репетиция младшей группы',
    src: `${BASE}/upload/resize_cache/iblock/59d/360_360_240cd750bba9870f18aada2478b24840a/%D1%8E%D0%BD%D0%BE%D1%88%D0%B8_%D1%80%D0%B0%D0%B4%D0%BE%D1%81%D1%82%D1%8C8.jpg`,
    href: `${BASE}/photos/`,
  },
  {
    date: '28 февраля 2026',
    title: 'Гастроли в Санкт-Петербурге',
    src: `${BASE}/upload/resize_cache/iblock/e6a/360_360_240cd750bba9870f18aada2478b24840a/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%823.jpg`,
    href: `${BASE}/photos/`,
  },
  {
    date: '17 января 2026',
    title: 'Открытый урок для родителей',
    src: `${BASE}/upload/resize_cache/iblock/e2a/360_360_240cd750bba9870f18aada2478b24840a/IMGP8532.jpg`,
    href: `${BASE}/photos/`,
  },
];

const VIDEOS = [
  {
    duration: '4:32',
    platform: 'YouTube',
    platformHref: 'https://www.youtube.com/@orlyata',
    src: `${THUMB}/RhpOjeObUgc/hqdefault.jpg`,
    title: 'День города. Крылатое сердце мальчишки',
    href: 'https://www.youtube.com/watch?v=RhpOjeObUgc',
  },
  {
    duration: '3:45',
    platform: 'YouTube',
    platformHref: 'https://www.youtube.com/@orlyata',
    src: `${THUMB}/lrU1xqIvBUU/hqdefault.jpg`,
    title: 'Здесь таланты растут, как цветы',
    href: 'https://www.youtube.com/watch?v=lrU1xqIvBUU',
  },
  {
    duration: '12:24',
    platform: 'RuTube',
    platformHref: 'https://rutube.ru',
    src: `${THUMB}/1JtB9VkxsJc/hqdefault.jpg`,
    title: 'Презентация капеллы мальчиков «Орлята»',
    href: 'https://rutube.ru',
  },
];

export default function PhotosVideos() {
  return (
    <section className={styles.section}>
      <div className={styles.gallerySection}>
        <header className={styles.galleryHeader}>
          <h2 className={styles.galleryHeading}>последние фото</h2>
          <div className={styles.galleryControls}>
            <button type="button" className={styles.galleryNav} aria-label="Назад">←</button>
            <button type="button" className={styles.galleryNav} aria-label="Вперёд">→</button>
            <a href={`${BASE}/photos/`} className={styles.galleryAll} target="_blank" rel="noopener noreferrer">Все фото ↗</a>
          </div>
        </header>
        <div className={styles.gallery}>
          {PHOTOS.map(photo => (
            <a key={photo.title} href={photo.href} className={styles.photoCard} target="_blank" rel="noopener noreferrer">
              <img src={photo.src} alt={photo.title} className={styles.photoImg} />
              <span className={styles.dateBadge}>{photo.date}</span>
              <p className={styles.photoTitle}>{photo.title}</p>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.videoSection}>
          <div className={styles.videoHeader}>
            <div>
              <p className={styles.label}>Медиа</p>
              <p className={styles.sectionHeading}>смотреть выступления</p>
            </div>
            <a href={`${BASE}/videos/`} className={styles.viewAll} target="_blank" rel="noopener noreferrer">Все видео ↗</a>
          </div>
          <div className={styles.videoCards}>
            {VIDEOS.map(video => (
              <a key={video.title} href={video.href} className={styles.videoCard} target="_blank" rel="noopener noreferrer">
                <div className={styles.videoThumb}>
                  <img src={video.src} alt={video.title} className={styles.videoImg} />
                  <span className={styles.playCircle}>
                    <span className={styles.playIcon}>▶</span>
                  </span>
                  <span className={styles.duration}>{video.duration}</span>
                </div>
                <div className={styles.videoInfo}>
                  <span className={styles.platform}>{video.platform} ↗</span>
                  <p className={styles.videoTitle}>{video.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaLabel}>Набор открыт</p>
          <div>
            <p className={styles.ctaHeading}>запишите мальчика<br />в капеллу</p>
            <Button variant="primary" href="#">Подать заявку ↗</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
