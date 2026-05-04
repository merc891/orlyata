import styles from './Relax.module.css';
import MediaSlider from '../../molecules/MediaSlider';
import img1 from '../../../assets/relax/IMG_2774.jpeg';
import img2 from '../../../assets/relax/IMG_4960.jpeg';
import img3 from '../../../assets/relax/IMG_4973.jpeg';
import img4 from '../../../assets/relax/photo1703338657.jpeg';

const SLIDES = [
  { src: img1, alt: 'Поездка с педагогами' },
  { src: img2, alt: 'Экскурсия в каникулы' },
  { src: img3, alt: 'Летний отдых' },
  { src: img4, alt: 'Спортивные соревнования' },
];

export default function Relax() {
  return (
    <section className={styles.section}>
      <div className={styles.mediaSlot}>
        <MediaSlider slides={SLIDES} />
      </div>
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <h2 className={styles.heading}>отдых</h2>
        </header>
        <p className={styles.cardText}>
          В период каникул ребята с педагогами и родителями выезжают в театры, музеи, на экскурсии, летом — на отдых, проводят различные спортивные соревнования, с удовольствием играют в футбол и волейбол.
        </p>
      </div>
    </section>
  );
}
