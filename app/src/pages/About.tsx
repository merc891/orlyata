import {
  Sidebar,
  Stats,
  Footer,
  PageHero,
  AgeGroups,
  Teachers,
  AchievementsTeaser,
  Geography,
  EnrollCTA,
  Repertoire,
  Relax,
  MediaSlider,
} from '../components';
import aboutHero from '../assets/about_prologue-01.jpg';
import competitions1 from '../assets/competitions/DSC02696.jpg';
import competitions2 from '../assets/competitions/IMG_3107.jpeg';
import competitions3 from '../assets/competitions/IMG_3117.jpeg';
import styles from './About.module.css';

const COMPETITIONS_SLIDES = [
  { src: competitions1, alt: 'Международный конкурс' },
  { src: competitions2, alt: 'Выступление на конкурсе' },
  { src: competitions3, alt: 'Концертное выступление' },
];

export default function About() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <PageHero
          title="о капелле"
          image={aboutHero}
          imageAlt="Хоровая капелла «Орлята» на сцене"
        />
        <div className={styles.splitEqual}>
          <AgeGroups />
          <Repertoire />
        </div>
        <Stats />
        <Teachers />
        <AchievementsTeaser />
        <div className={styles.splitEqual}>
          <Geography />
          <div className={styles.competitionsSlot}>
            <MediaSlider slides={COMPETITIONS_SLIDES} />
          </div>
        </div>
        <Relax />
        <EnrollCTA />
        <Footer />
      </main>
    </div>
  );
}
