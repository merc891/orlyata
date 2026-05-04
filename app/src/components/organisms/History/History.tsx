import styles from './History.module.css';
import Button from '../../atoms/Button';

export default function History() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img
          src="https://zelorlyata.ru/upload/iblock/eca/IMG_6863.jpg"
          alt="История капеллы"
          className={styles.imagePhoto}
        />
      </div>
      <div className={styles.card}>
        <div>
          <p className={styles.label}>О капелле</p>
          <p className={styles.heading}>История капеллы</p>
        </div>
        <p className={styles.text}>
          Создана в <span className={styles.muted}>2005 году</span> по инициативе руководителей
          академического хора «Ковчег» — Заслуженного работника РФ{' '}
          <span className={styles.muted}>Андрея Чернецова</span> и хормейстера{' '}
          <span className={styles.muted}>Ирины Карпман</span>.
        </p>
        <div className={styles.actions}>
          <Button variant="ghost" href="#">Читать историю ↗</Button>
          <Button variant="primary" href="#">Педагоги ↗</Button>
        </div>
      </div>
    </section>
  );
}
