import styles from './History.module.css';
import Tag from '../../atoms/Tag';
import chernetsov from '../../../assets/chernetsov-andrey-viktorovich_w546.png';
import karpman from '../../../assets/karpman-irina-rafailovna_w546.png';

const FOUNDERS = [
  { src: chernetsov, alt: 'А. Чернецов' },
  { src: karpman,    alt: 'И. Карпман'  },
];

export default function History() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={styles.lead}>
          Создана руководителями академического хора «Ковчег» —
          Заслуженным&nbsp;работником РФ Андреем Чернецовым
          и&nbsp;хормейстером Ириной Карпман
        </p>
        <div className={styles.actions}>
          <Tag>о капелле</Tag>
          <Tag>педагоги</Tag>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.markRow}>
          <p className={styles.text}>
            Пройдя большой путь в&nbsp;поиске «своего лица» и&nbsp;в&nbsp;выборе
            репертуара, и&nbsp;в&nbsp;стиле работы, планах обучения
            и&nbsp;приобщения ребят к&nbsp;лучшим образцам певческого
            искусства, в&nbsp;капелле сложилась устойчивая система
            музыкально-хорового воспитания мальчиков от&nbsp;5&nbsp;до&nbsp;17&nbsp;лет
          </p>
          <span className={styles.year}>2005</span>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.founders}>
            {FOUNDERS.map(f => (
              <span key={f.alt} className={styles.avatar}>
                <img src={f.src} alt={f.alt} />
              </span>
            ))}
            <a href="/about#teachers" className={styles.avatarMore} aria-label="Все педагоги">
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <a href="/about#teachers" className={styles.viewAll}>
            подробнее <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
