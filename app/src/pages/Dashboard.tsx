import {
  Sidebar,
  Hero,
  Stats,
  PhotosVideos,
  History,
  EnrollCTA,
  Notes,
  Footer,
} from '../components';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.heroBlock}>
          <Hero />
          <Stats />
        </div>
        <PhotosVideos />
        <History />
        <EnrollCTA />
        <Notes />
        <Footer />
      </main>
    </div>
  );
}
