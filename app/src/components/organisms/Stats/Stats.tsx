import styles from './Stats.module.css';
import SectionTitleCard from '../../molecules/SectionTitleCard';

const STATS = [
  { value: '80+',   label: 'мальчиков и юношей' },
  { value: '5–17 лет', label: 'возраст учащихся' },
  { value: '6',     label: 'опытных педагогов' },
  { value: '15–20', label: 'выступлений в год' },
];

export default function Stats() {
  return (
    <div className={styles.stats}>
      <SectionTitleCard
        label="Капелла сегодня"
        title={<>в цифрах<br />и фактах</>}
      />
      {STATS.map(stat => (
        <div key={stat.value} className={styles.card}>
          <div className={styles.dot} />
          <div className={styles.valueGroup}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
