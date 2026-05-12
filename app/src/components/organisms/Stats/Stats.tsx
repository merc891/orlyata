import styles from './Stats.module.css';

const STATS = [
  { value: '80+',     label: 'мальчиков и юношей' },
  { value: '5–17 лет', label: 'возрастной состав' },
  { value: '6',       label: 'опытных педагогов' },
  { value: '15–20',   label: 'выступлений в год' },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.titleCell}>
        <h2 className={styles.title}>в цифрах<br />и фактах</h2>
        <p className={styles.subtitle}>Капелла сегодня</p>
      </div>
      {STATS.map(stat => (
        <div key={stat.value} className={styles.cell}>
          <span className={styles.dot} aria-hidden="true" />
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
