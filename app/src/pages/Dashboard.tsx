import { Sidebar, Hero, Stats, PhotosVideos, History, Notes, Footer } from '../components';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Hero />
        <Stats />
        <PhotosVideos />
        <History />
        <Notes />
        <Footer />
      </main>
    </div>
  );
}
