import styles from './AchievementsTeaser.module.css';

const TOP_ACHIEVEMENTS = [
  { year: '2026', rank: 'Лауреат I степени',  event: 'XI Московский областной открытый конкурс хоров мальчиков Подмосковья — ансамбль юношей', diploma: '#' },
  { year: '2026', rank: 'Лауреат I степени',  event: 'XXVII Московский международный фестиваль-конкурс — православная духовная музыка, ансамбль юношей', diploma: '#' },
  { year: '2022', rank: 'Гран-при',           event: 'Конкурс «Рождественская песнь» — хор мальчиков и юношей', diploma: '#' },
  { year: '2020', rank: 'Гран-при',           event: 'Хоровой форум, г. Охрид, Македония', diploma: '#' },
  { year: '2018', rank: 'Лауреат I степени',  event: 'Международный конкурс хорового искусства, г. Москва', diploma: '#' },
  { year: '2016', rank: 'Гран-при',           event: 'Международный конкурс «Рождественская песнь», г. Москва', diploma: '#' },
  { year: '2014', rank: 'Лауреат II степени', event: 'Хоровой фестиваль «Поют мальчики России»', diploma: '#' },
  { year: '2012', rank: 'Гран-при',           event: 'Конкурс детских хоровых коллективов, г. Санкт-Петербург', diploma: '#' },
  { year: '2010', rank: 'Лауреат I степени',  event: 'Международный фестиваль «Крылатое сердце»', diploma: '#' },
  { year: '2008', rank: 'Лауреат I степени',  event: 'Открытый конкурс хоров мальчиков Подмосковья', diploma: '#' },
];

export default function AchievementsTeaser() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.heading}>достижения</h2>
        <a href="#" className={styles.viewAll}>Все достижения ↗</a>
      </header>
      <ol className={styles.list}>
        {TOP_ACHIEVEMENTS.map((item, i) => (
          <li key={i} className={styles.row}>
            <span className={styles.year}>{item.year}</span>
            <span className={styles.rank}>{item.rank}</span>
            <span className={styles.event}>{item.event}</span>
            <a href={item.diploma} className={styles.diploma}>Смотреть диплом</a>
          </li>
        ))}
      </ol>
    </section>
  );
}
