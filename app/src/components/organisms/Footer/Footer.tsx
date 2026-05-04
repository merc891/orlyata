import styles from './Footer.module.css';
import logo from '../../../assets/logo.svg';

const NAV = ['О капелле', 'Педагоги', 'Достижения', 'Объявления', 'Ноты'];
const MEDIA = ['Фотогалерея', 'Видео', 'YouTube', 'RuTube', 'Пресс-кит'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <img src={logo} alt="" className={styles.logo} />
          <p className={styles.tagline}>
            Сегодня <em className={styles.slanted}>орлята</em>,<br />
            а завтра&nbsp;– орлы
          </p>
          <p className={styles.copy}>
            © 2005–2026 Хоровая капелла мальчиков «Орлята».<br />
            Все права защищены.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Навигация</p>
          <ul className={styles.list}>
            {NAV.map(item => (
              <li key={item}><a href="#" className={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>Медиа</p>
          <ul className={styles.list}>
            {MEDIA.map(item => (
              <li key={item}><a href="#" className={styles.link}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.colWide}>
          <p className={styles.colLabel}>Контакты</p>
          <p className={styles.address}>
            г. Зеленоград,<br />
            Центральная площадь, 1<br />
            КЦ «Зеленоград»
          </p>
          <div className={styles.contacts}>
            <a href="tel:+79254345198" className={styles.link}>+7 (925) 434-51-98</a>
            <a href="tel:+79162584912" className={styles.link}>+7 (916) 258-49-12</a>
            <a href="mailto:info@zelorlyata.ru" className={`${styles.link} ${styles.email}`}>info@zelorlyata.ru</a>
          </div>
          <a href="#" className={styles.legal}>Пользовательская оферта</a>
        </div>
      </div>
    </footer>
  );
}
