import styles from './Notes.module.css';
import iconMusic from '../../../assets/icon-music.svg';
import iconDownload from '../../../assets/icon-download.svg';

const NOTES = [
  { id: 1,  title: 'Ave Maria',                 composer: 'Ф. Шуберт',       voice: 'Смешанный', href: '#' },
  { id: 2,  title: 'Богородице Дево, радуйся',  composer: 'С. Рахманинов',   voice: 'Мужской',   href: '#' },
  { id: 3,  title: 'Вечерняя песня',            composer: 'А. Чернецов',     voice: 'Юноши',     href: '#' },
  { id: 4,  title: 'Дорогой длинною',           composer: 'Б. Фомин',        voice: 'Тенор',     href: '#' },
  { id: 5,  title: 'Gaudete',                   composer: 'М. Преториус',    voice: 'Мальчики',  href: '#' },
  { id: 6,  title: 'Жаворонок',                 composer: 'М. Глинка',       voice: 'Смешанный', href: '#' },
  { id: 7,  title: 'Калинка',                   composer: 'Русская нар.',    voice: 'Смешанный', href: '#' },
  { id: 8,  title: 'Колыбельная',               composer: 'И. Карпман',      voice: 'Сопрано',   href: '#' },
  { id: 9,  title: 'Лакримоза',                 composer: 'В.А. Моцарт',     voice: 'Смешанный', href: '#' },
  { id: 10, title: 'Многая лета',               composer: 'Д. Бортнянский',  voice: 'Смешанный', href: '#' },
  { id: 11, title: 'Не шуми ты, рожь',          composer: 'А. Варламов',     voice: 'Баритон',   href: '#' },
  { id: 12, title: 'О, Фортуна',                composer: 'К. Орф',          voice: 'Смешанный', href: '#' },
  { id: 13, title: 'Панис Ангеликус',           composer: 'С. Франк',        voice: 'Тенор',     href: '#' },
  { id: 14, title: 'Плыви, плыви, кораблик',   composer: 'И. Карпман',      voice: 'Мальчики',  href: '#' },
  { id: 15, title: 'Реквием · Kyrie',           composer: 'В.А. Моцарт',     voice: 'Смешанный', href: '#' },
  { id: 16, title: 'Серенада',                  composer: 'Ф. Шуберт',       voice: 'Тенор',     href: '#' },
  { id: 17, title: 'Тихая ночь',                composer: 'Ф. Грубер',       voice: 'Смешанный', href: '#' },
  { id: 18, title: 'Утро',                      composer: 'Э. Григ',         voice: 'Смешанный', href: '#' },
  { id: 19, title: 'Херувимская',               composer: 'П. Чесноков',     voice: 'Смешанный', href: '#' },
  { id: 20, title: 'Школьный вальс',            composer: 'И. Дунаевский',   voice: 'Смешанный', href: '#' },
];

export default function Notes() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.heading}>ноты для скачивания</p>
        <a href="#" className={styles.viewAll}>Вся библиотека ↗</a>
      </div>
      <div className={styles.table}>
        {NOTES.map(note => (
          <div key={note.id} className={styles.row}>
            <span className={styles.num}>{String(note.id).padStart(2, '0')}</span>
            <div className={styles.titleCell}>
              <img src={iconMusic} alt="" className={styles.musicIcon} />
              <span className={styles.title}>{note.title}</span>
            </div>
            <span className={styles.composer}>{note.composer}</span>
            <span className={styles.voice}>{note.voice}</span>
            <a href={note.href} className={styles.download} aria-label="Скачать">
              <img src={iconDownload} alt="" className={styles.downloadIcon} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
