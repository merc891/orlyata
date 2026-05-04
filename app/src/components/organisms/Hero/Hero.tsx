import styles from './Hero.module.css';
import heroVideo from '../../../assets/hero.mp4';
import Badge from '../../atoms/Badge';
import SectionTitleCard from '../../molecules/SectionTitleCard';

const NEWS = [
  { tag: 'Концерт', date: '18 апреля', title: '«Крылатое сердце» — большой весенний концерт', href: '#' },
  { tag: 'Достижение', date: '2 апреля', title: 'Ансамбль юношей — Лауреаты I степени', href: '#' },
  { tag: 'Объявление', date: '25 марта', title: 'Открыт набор в капеллу 2026', href: '#' },
];

const HERO_WORDS = [
  { text: 'хоровая', accent: false },
  { text: 'капелла', accent: false },
  { text: 'мальчиков', accent: false },
  { text: 'орлята', accent: true },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <video
          className={styles.heroBg}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className={styles.heroTopRow}>
          <Badge tone="overlay">2005</Badge>
          <Badge tone="overlay">г. Зеленоград</Badge>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.heroText}>
            {HERO_WORDS.map(w => (
              <div key={w.text} className={styles.heroWordWrap}>
                <span
                  className={`${styles.heroWord}${w.accent ? ` ${styles.heroWordAccent}` : ''}`}
                >
                  {w.text}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.heroSubtitle}>
            Мальчики и юноши 5–17 лет. Академическое пение, концерты в Москве и за рубежом. Более 80 участников
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <SectionTitleCard
          variant="dark"
          label="Новости и события"
          title={<>что<br />нового</>}
          linkLabel="Посмотреть все ↗"
          linkHref="#"
        />
        {NEWS.map(item => (
          <a key={item.title} href={item.href} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>{item.tag}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
            <div className={styles.cardBottom}>
              <p className={styles.cardTitle}>{item.title}</p>
              <span className={styles.arrow}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
