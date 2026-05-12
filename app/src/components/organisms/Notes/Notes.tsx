import styles from './Notes.module.css';
import NoteRow from '../../molecules/NoteRow';
import iconMusic from '../../../assets/icon-music.svg';
import iconDownload from '../../../assets/download.svg';

const NOTES = [
  { title: 'Ave Maria',                 author: 'Ф. Шуберт',      category: 'Старший хор' },
  { title: 'Богородице Дево, радуйся',  author: 'С. Рахманинов',  category: 'Мужской' },
  { title: 'Вечерняя песня',            author: 'А. Чернецов',    category: 'Юноши' },
  { title: 'Дорогой длинною',           author: 'Б. Фомин',       category: 'Тенор' },
  { title: 'Gaudete',                   author: 'М. Преториус',   category: 'Мальчики' },
  { title: 'Жаворонок',                 author: 'М. Глинка',      category: 'Старший хор' },
  { title: 'Калинка',                   author: 'Русская нар.',   category: 'Старший хор' },
  { title: 'Колыбельная',               author: 'И. Карпман',     category: 'Сопрано' },
  { title: 'Лакримоза',                 author: 'В.А. Моцарт',    category: 'Старший хор' },
  { title: 'Многая лета',               author: 'Д. Бортнянский', category: 'Старший хор' },
  { title: 'Не шуми ты, рожь',          author: 'А. Варламов',    category: 'Баритон' },
  { title: 'О, Фортуна',                author: 'К. Орф',         category: 'Старший хор' },
  { title: 'Панис Ангеликус',           author: 'С. Франк',       category: 'Тенор' },
  { title: 'Плыви, плыви, кораблик',    author: 'И. Карпман',     category: 'Мальчики' },
  { title: 'Реквием · Kyrie',           author: 'В.А. Моцарт',    category: 'Старший хор' },
  { title: 'Серенада',                  author: 'Ф. Шуберт',      category: 'Тенор' },
  { title: 'Тихая ночь',                author: 'Ф. Грубер',      category: 'Старший хор' },
  { title: 'Утро',                      author: 'Э. Григ',        category: 'Старший хор' },
  { title: 'Херувимская',               author: 'П. Чесноков',    category: 'Старший хор' },
  { title: 'Школьный вальс',            author: 'И. Дунаевский',  category: 'Старший хор' },
];

export default function Notes() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.heading}>ноты для скачивания</h2>
        <a href="#" className={styles.viewAll}>
          Вся библиотека <span aria-hidden="true">↗</span>
        </a>
      </header>
      <div className={styles.list}>
        {NOTES.map((note, i) => (
          <NoteRow
            key={note.title}
            index={i + 1}
            title={note.title}
            author={note.author}
            category={note.category}
            icon={<img src={iconMusic} alt="" className={styles.iconImg} />}
            action={<img src={iconDownload} alt="" className={styles.iconImg} />}
            href="#"
          />
        ))}
      </div>
    </section>
  );
}
