import styles from './Hero.module.css';
import heroVideo from '../../../assets/hero.mp4';
import bg from '../../../assets/bg2.png';
import iconMasks from '../../../assets/svg/streamline-ultimate_show-theater-masks.svg';
import iconStar from '../../../assets/svg/basil_star-outline.svg';
import EventCard from '../../molecules/EventCard';

const EVENTS = [
  {
    date: '18 апреля',
    title: '«Крылатое сердце» — большой весенний концерт',
    icon: iconMasks,
    href: '#',
  },
  {
    date: '2 апреля',
    title: 'Ансамбль юношей — Лауреаты I степени',
    icon: iconStar,
    href: '#',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.video}>
        <video
          className={styles.videoMedia}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div
        className={styles.tile}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className={styles.heading}>
          хоровая<br />капелла<br />мальчиков<br />орлята
        </h1>
        <div className={styles.eventsHeader}>
          <span className={styles.eventsLabel}>события</span>
          <a className={styles.eventsLink} href="#">
            все события <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.events}>
          {EVENTS.map(ev => (
            <EventCard
              key={ev.title}
              date={ev.date}
              title={ev.title}
              icon={<img src={ev.icon} alt="" className={styles.eventIcon} />}
              href={ev.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
