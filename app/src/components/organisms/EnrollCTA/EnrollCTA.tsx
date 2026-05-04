import styles from './EnrollCTA.module.css';
import Button from '../../atoms/Button';

export default function EnrollCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.left}>
        <p className={styles.label}>Набор открыт</p>
        <p className={styles.heading}>хотите вырастить<br />творческую личность?</p>
      </div>
      <div className={styles.right}>
        <p className={styles.subtitle}>Запишите мальчика 5–17 лет в капеллу. Прослушивание не требуется.</p>
        <Button variant="primary" href="#">Записаться ↗</Button>
      </div>
    </section>
  );
}
