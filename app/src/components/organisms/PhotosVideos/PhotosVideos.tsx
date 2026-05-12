import styles from './PhotosVideos.module.css';
import Tag from '../../atoms/Tag';
import Button from '../../atoms/Button';
import rehearsalPhoto from '../../../assets/IMG_20260425_170124.jpg';

const BASE = 'https://zelorlyata.ru';
const THUMB = 'https://img.youtube.com/vi';

const FEATURED = {
  src: rehearsalPhoto,
  href: `${BASE}/photos/`,
  date: '2 июня',
  title: 'Гала-концерт в БЗК (юноши и Вита Нова)',
};

const SIDE_TOP = {
  src: `${BASE}/upload/resize_cache/iblock/441/360_360_240cd750bba9870f18aada2478b24840a/IMG_20260405_195335.jpg`,
  href: 'https://www.youtube.com/watch?v=RhpOjeObUgc',
  isVideo: true,
  date: '23 мая',
  title: 'Концерт в КЦ «Зеленоград»',
  platforms: [
    { label: 'RuTube', href: 'https://rutube.ru/channel/24042860/' },
    { label: 'VK',     href: 'https://vk.com/orlyata' },
  ],
};

const SIDE_BOTTOM = {
  src: `${THUMB}/lrU1xqIvBUU/hqdefault.jpg`,
  href: `${BASE}/photos/`,
  date: '21 апреля',
  title: 'Концерт лауреатов фестиваля-конкурса VIVAT MUSICA',
};

export default function PhotosVideos() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.heading}>медиагалерея</h2>
        <a href={`${BASE}/photos/`} className={styles.viewAll}>
          перейти в раздел <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className={styles.grid}>
        {/* ── Featured (left, big) ─────────────────────────── */}
        <a href={FEATURED.href} className={styles.featured}>
          <img src={FEATURED.src} alt={FEATURED.title} className={styles.featuredImage} />
          <div className={styles.featuredOverlay}>
            <Tag>{FEATURED.date}</Tag>
            <p className={styles.featuredTitle}>{FEATURED.title}</p>
          </div>
        </a>

        {/* ── Right pair: 2 side cards ─────────────────────── */}
        <div className={styles.sideGroup}>
          {/* Side card 1 (with video) */}
          <div className={styles.side}>
            <a href={SIDE_TOP.href} className={styles.sideTile}>
              <img src={SIDE_TOP.src} alt={SIDE_TOP.title} className={styles.sideImage} />
              {SIDE_TOP.isVideo && (
                <span className={styles.playBadge} aria-hidden="true">▶</span>
              )}
            </a>
            <div className={styles.sideCaption}>
              <div className={styles.chips}>
                <Tag>{SIDE_TOP.date}</Tag>
                {SIDE_TOP.platforms.map(p => (
                  <Button key={p.label} variant="secondary" href={p.href}>
                    {p.label} <span aria-hidden="true">↗</span>
                  </Button>
                ))}
              </div>
              <p className={styles.sideTitle}>{SIDE_TOP.title}</p>
            </div>
          </div>

          {/* Side card 2 */}
          <a href={SIDE_BOTTOM.href} className={styles.side}>
            <div className={styles.sideTile}>
              <img src={SIDE_BOTTOM.src} alt={SIDE_BOTTOM.title} className={styles.sideImage} />
            </div>
            <div className={styles.sideCaption}>
              <Tag>{SIDE_BOTTOM.date}</Tag>
              <p className={styles.sideTitle}>{SIDE_BOTTOM.title}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
