import styles from './Repertoire.module.css';

export default function Repertoire() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.heading}>репертуар</h2>
      </header>
      <p className={styles.body}>
        В репертуаре «Орлят» произведения русской, западно-европейской классики, народные песни в обработках, произведения советских и современных русских композиторов, духовная и патриотическая музыка. «Орлята» принимали участие в театрализованных постановках академического хора «Ковчег» — «Рождественской драме» Св. Дм. Ростовского и «Кармен» Ж. Бизе.
      </p>
    </section>
  );
}
