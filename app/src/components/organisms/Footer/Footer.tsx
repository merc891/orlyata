import styles from './Footer.module.css';

const NAV = ['О капелле', 'События', 'Достижения', 'Педагоги', 'Ноты', 'Контакты'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.tagline}>
            Сегодня <span className={styles.slanted}>орлята</span>,<br />
            а&nbsp;завтра&nbsp;– орлы
          </p>
          <p className={styles.copy}>
            © 2005–2026<br />
            Хоровая капелла мальчиков «Орлята»
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.nav}>
            <ul className={styles.list}>
              {NAV.map(item => (
                <li key={item}>
                  <a href="#" className={styles.link}>{item}</a>
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/zel_orlyata"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.legal}
            >
              Телеграм-канал
            </a>
          </div>

          <div className={styles.contacts}>
            <div className={styles.contactsTop}>
              <div className={styles.phones}>
                <a href="tel:+79254345198" className={styles.link}>+7 (925) 434-51-98</a>
                <a href="tel:+79162584912" className={styles.link}>+7 (916) 258-49-12</a>
                <a href="mailto:info@zelorlyata.ru" className={styles.link}>info@zelorlyata.ru</a>
              </div>
              <p className={styles.address}>
                г. Зеленоград, Центральная площадь, 1<br />
                КЦ «Зеленоград»
              </p>
            </div>
            <a href="#" className={styles.legal}>Пользовательская оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
