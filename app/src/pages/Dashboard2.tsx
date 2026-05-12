import { Sidebar } from '../components';
import styles from './Dashboard2.module.css';
import rehearsalPhoto from '../assets/IMG_20260425_170124.jpg';
import historyPhoto from '../assets/about_prologue-01.jpg';
import comp1 from '../assets/competitions/DSC02696.jpg';
import comp2 from '../assets/competitions/IMG_3107.jpeg';
import comp3 from '../assets/competitions/IMG_3117.jpeg';
import relax1 from '../assets/relax/IMG_2774.jpeg';
import relax2 from '../assets/relax/IMG_4960.jpeg';
import chernetsov from '../assets/chernetsov-andrey-viktorovich_w546.png';
import karpman    from '../assets/karpman-irina-rafailovna_w546.png';
import chernetsova from '../assets/chernetsova-elena-ivanovna_w546.png';
import klimova    from '../assets/klimova-maryana-leonidovna_w546.png';

const PROGRAMS = [
  {
    id: '01',
    title: 'Младшая группа',
    age: '5–10 лет',
    desc: 'Постановка голоса, основы хорового пения, музыкальная грамота. Подготовка к выходу на сцену.',
    meta: ['8 часов в неделю', 'до 24 мест', 'бюджетная основа'],
    tags: ['вокал', 'сольфеджио', 'ансамбль'],
    cta: 'Записаться на прослушивание',
  },
  {
    id: '02',
    title: 'Старшая группа',
    age: '11–17 лет',
    desc: 'Концертная программа, репертуар на 5 языках, гастроли по России и за рубежом. Гарантированный концертный опыт.',
    meta: ['10 часов в неделю', 'до 32 мест', 'бюджетная основа'],
    tags: ['репертуар', 'гастроли', 'фестивали'],
    cta: 'Записаться на прослушивание',
  },
  {
    id: '03',
    title: 'Сольное пение',
    age: 'для талантливых',
    desc: 'Индивидуальная работа с педагогом по голосу для участников капеллы. Подготовка к конкурсам.',
    meta: ['1 час в неделю', '12 мест', 'по приглашению'],
    tags: ['соло', 'конкурсы'],
    cta: 'Узнать об отборе',
  },
  {
    id: '04',
    title: 'Музыкальная грамота',
    age: 'все участники',
    desc: 'Чтение нот с листа, гармония, история музыки. Свидетельство об окончании курса по итогам.',
    meta: ['2 часа в неделю', 'все группы', 'входит в программу'],
    tags: ['теория', 'история', 'нотация'],
    cta: 'Состав курса',
  },
];

const STATS = [
  { num: '80+',   label: 'голосов на сцене' },
  { num: '21',    label: 'год капелле'      },
  { num: '5–17',  label: 'лет участникам'   },
  { num: '10–15', label: 'концертов в год'  },
];

const PRINCIPLES = [
  {
    n: '01',
    title: 'Голос — главный инструмент',
    body: 'Мы не учим петь — мы помогаем найти свой голос. Каждый мальчик уникален, и мы строим работу от его природного звучания.',
  },
  {
    n: '02',
    title: 'Сцена с первого года',
    body: 'Дети выходят на сцену уже после первого сезона. Концертный опыт — лучший учитель сценической свободы.',
  },
  {
    n: '03',
    title: 'Репертуар без скидок',
    body: 'От русской классики до современных композиторов. Мы доверяем детям сложный материал — и они отвечают вниманием.',
  },
  {
    n: '04',
    title: 'Старшие учат младших',
    body: 'Юноши работают с младшими в роли наставников. Так формируется преемственность и любовь к делу.',
  },
  {
    n: '05',
    title: 'Дружба важнее результата',
    body: 'Капелла — это коллектив на десять лет вперёд. Мы вкладываемся в отношения внутри группы.',
  },
  {
    n: '06',
    title: 'Голос ломается — мы рядом',
    body: 'Мутация голоса — деликатный период. У нас есть программа, чтобы перейти из мальчишеского в юношеский без перерыва в пении.',
  },
  {
    n: '07',
    title: 'Родители — часть процесса',
    body: 'Открытые репетиции, обратная связь, совместные поездки. Без поддержки семьи невозможно вырастить певца.',
  },
];

const TEACHERS = [
  { photo: chernetsov,  name: 'Андрей Чернецов',  role: 'Художественный руководитель', meta: 'Заслуженный работник РФ · с 2005' },
  { photo: karpman,     name: 'Ирина Карпман',     role: 'Главный хормейстер',          meta: 'Хормейстер высшей категории · с 2005' },
  { photo: chernetsova, name: 'Елена Чернецова',   role: 'Педагог по вокалу',           meta: 'Вокальные методики · с 2009' },
  { photo: klimova,     name: 'Марьяна Климова',   role: 'Концертмейстер',              meta: 'Фортепиано · с 2014' },
];

const NEWS = [
  { date: '03.05.2026', tag: 'концерт', title: 'Крылатое сердце мальчишки', body: 'Сольный концерт ко Дню Победы в КЦ «Зеленоград» с симфоническим оркестром.' },
  { date: '18.04.2026', tag: 'конкурс', title: 'Лауреаты I степени',         body: 'Гран-при международного фестиваля хорового искусства в Москве.' },
  { date: '25.03.2026', tag: 'набор',   title: 'Открыт набор 2026–27',       body: 'Прослушивания мальчиков 5–10 лет — каждую субботу мая. Запись по телефону.' },
];

const PHOTOS = [
  { src: comp1,  cap: 'Гала-концерт',       date: '03.05.2026', size: 'lg' },
  { src: comp2,  cap: 'Хоровой фестиваль',  date: '12.03.2026', size: 'sm' },
  { src: relax1, cap: 'Летний лагерь',      date: '07.2025',    size: 'md' },
  { src: comp3,  cap: 'Международный конкурс', date: '18.04.2026', size: 'sm' },
  { src: relax2, cap: 'Репетиция',           date: '25.04.2026', size: 'md' },
];

const VIDEO = {
  thumb: 'https://img.youtube.com/vi/RhpOjeObUgc/maxresdefault.jpg',
  title: 'День города · Крылатое сердце мальчишки',
  date:  '03.05.2026',
  dur:   '04:32',
  href:  'https://www.youtube.com/watch?v=RhpOjeObUgc',
};

const NOTES = [
  { num: '01', title: 'Ave Maria',                composer: 'Ф. Шуберт',     voice: 'Смешанный' },
  { num: '02', title: 'Богородице Дево, радуйся', composer: 'С. Рахманинов', voice: 'Мужской'   },
  { num: '03', title: 'Вечерняя песня',           composer: 'А. Чернецов',   voice: 'Юноши'     },
  { num: '04', title: 'Дорогой длинною',          composer: 'Б. Фомин',      voice: 'Тенор'     },
  { num: '05', title: 'Gaudete',                  composer: 'М. Преториус',  voice: 'Мальчики'  },
  { num: '06', title: 'Жаворонок',                composer: 'М. Глинка',     voice: 'Смешанный' },
];

export default function Dashboard2() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>Зеленоград</span>
            <span className={styles.heroMetaDot}>·</span>
            <span className={styles.heroMetaItem}>с 2005 года</span>
            <span className={styles.heroMetaDot}>·</span>
            <span className={styles.heroMetaItem}>хоровая капелла мальчиков</span>
          </div>

          <h1 className={styles.heroTitle}>
            Хоровая капелла,<br />
            в которой <span className={styles.heroAccent}>80 голосов</span><br />
            растут на сцене<br />
            с пяти до семнадцати лет.
          </h1>

          <div className={styles.heroBottom}>
            <div className={styles.heroLead}>
              <p className={styles.heroLeadText}>
                Учим мальчиков петь, держать сцену и дружить.
                Гастроли в Москве, России и за рубежом — 10–15 концертов в год.
              </p>
              <div className={styles.heroActions}>
                <a href="/contacts" className={styles.heroBtn}>Записаться к нам ↗</a>
                <a href="#programs" className={styles.heroLink}>Посмотреть программы →</a>
              </div>
            </div>

            <figure className={styles.heroFig}>
              <img src={rehearsalPhoto} alt="" className={styles.heroPhoto} />
              <figcaption className={styles.heroFigCap}>
                <span>репетиция</span>
                <span>апрель 2026</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── PROGRAMS (Pragmatica-style cards) ── */}
        <section className={styles.section} id="programs">
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>04 / программы</span>
            <h2 className={styles.sectionTitle}>
              Что мы предлагаем мальчикам<br />
              и их родителям
            </h2>
            <p className={styles.sectionSub}>
              Четыре формата работы — от младшего хора до сольных программ.
              Все курсы бесплатные, по итогам выдаётся свидетельство.
            </p>
          </header>

          <div className={styles.progGrid}>
            {PROGRAMS.map((p) => (
              <article key={p.id} className={styles.progCard}>
                <header className={styles.progHead}>
                  <span className={styles.progNum}>{p.id}</span>
                  <span className={styles.progAge}>{p.age}</span>
                </header>
                <h3 className={styles.progTitle}>{p.title}</h3>
                <p className={styles.progDesc}>{p.desc}</p>
                <ul className={styles.progMeta}>
                  {p.meta.map((m, i) => (
                    <li key={i} className={styles.progMetaItem}>{m}</li>
                  ))}
                </ul>
                <div className={styles.progTags}>
                  {p.tags.map((t, i) => (
                    <span key={i} className={styles.progTag}>{t}</span>
                  ))}
                </div>
                <a href="/contacts" className={styles.progCta}>
                  {p.cta} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section className={styles.statsBand}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statCell}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── PRINCIPLES ── */}
        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>07 / принципов</span>
            <h2 className={styles.sectionTitle}>
              Как устроено хоровое<br />
              воспитание мальчиков
            </h2>
            <p className={styles.sectionSub}>
              Семь правил, которые мы вывели за двадцать лет работы.
              Они объясняют наши решения по репертуару, нагрузке и атмосфере на репетициях.
            </p>
          </header>

          <ol className={styles.princList}>
            {PRINCIPLES.map((p) => (
              <li key={p.n} className={styles.princRow}>
                <span className={styles.princNum}>{p.n}</span>
                <h3 className={styles.princTitle}>{p.title}</h3>
                <p className={styles.princBody}>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── HISTORY ── */}
        <section className={`${styles.section} ${styles.histSection}`}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>21 / год</span>
            <h2 className={styles.sectionTitle}>
              История капеллы —<br />
              с 2005 года и до сегодня
            </h2>
          </header>

          <div className={styles.histGrid}>
            <figure className={styles.histFig}>
              <img src={historyPhoto} alt="" className={styles.histPhoto} />
              <figcaption className={styles.histCap}>
                <span>fig. 01</span>
                <span>архив капеллы — 2010-е</span>
              </figcaption>
            </figure>
            <article className={styles.histText}>
              <p className={styles.histLead}>
                Капелла создана в 2005 году по инициативе руководителей академического
                хора «Ковчег» — заслуженного работника РФ <em>Андрея Чернецова</em> и
                хормейстера <em>Ирины Карпман</em>.
              </p>
              <p className={styles.histBody}>
                Пройдя большой путь в выборе репертуара и стиля работы, в капелле
                сложилась устойчивая система музыкально-хорового воспитания мальчиков
                от 5 до 17 лет. Сегодня — 80+ голосов, 10–15 концертов в год и постоянное
                участие в российских и международных фестивалях.
              </p>
              <div className={styles.histTimeline}>
                <div className={styles.histYear}><span className={styles.histYearNum}>2005</span><span>основание · хор «Ковчег»</span></div>
                <div className={styles.histYear}><span className={styles.histYearNum}>2012</span><span>первые международные гастроли</span></div>
                <div className={styles.histYear}><span className={styles.histYearNum}>2018</span><span>лауреаты «Поющего Зеленограда»</span></div>
                <div className={styles.histYear}><span className={styles.histYearNum}>2025</span><span>20-летие капеллы</span></div>
              </div>
              <a href="/about" className={styles.histLink}>Подробная история →</a>
            </article>
          </div>
        </section>

        {/* ── TEAM (asymmetric grid) ── */}
        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>04 / педагога</span>
            <h2 className={styles.sectionTitle}>
              Команда, с которой<br />
              работают мальчики
            </h2>
            <p className={styles.sectionSub}>
              Хормейстеры, педагоги по вокалу и концертмейстеры — все с консерваторским
              образованием и опытом работы с детским голосом 10+ лет.
            </p>
          </header>

          <div className={styles.teamGrid}>
            {TEACHERS.map((t, i) => (
              <article key={i} className={`${styles.teamCard} ${styles[`teamCard${i}`]}`}>
                <figure className={styles.teamFig}>
                  <img src={t.photo} alt={t.name} className={styles.teamPhoto} />
                </figure>
                <div className={styles.teamInfo}>
                  <span className={styles.teamRole}>{t.role}</span>
                  <h3 className={styles.teamName}>{t.name}</h3>
                  <p className={styles.teamMeta}>{t.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── NEWS ── */}
        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>03 / события</span>
            <h2 className={styles.sectionTitle}>
              Что происходит<br />
              в капелле сейчас
            </h2>
            <a href="/news" className={styles.sectionLink}>Все новости и анонсы →</a>
          </header>

          <div className={styles.newsGrid}>
            {NEWS.map((n, i) => (
              <article key={i} className={styles.newsCard}>
                <div className={styles.newsTop}>
                  <span className={styles.newsDate}>{n.date}</span>
                  <span className={styles.newsTag}>{n.tag}</span>
                </div>
                <h3 className={styles.newsTitle}>{n.title}</h3>
                <p className={styles.newsBody}>{n.body}</p>
                <a href="/news" className={styles.newsLink}>читать →</a>
              </article>
            ))}
          </div>
        </section>

        {/* ── MEDIA: photos + video ── */}
        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>фото · видео</span>
            <h2 className={styles.sectionTitle}>
              Капелла в кадре —<br />
              сцена, конкурсы, лагерь
            </h2>
            <div className={styles.sectionLinks}>
              <a href="https://www.youtube.com/@orlyata" target="_blank" rel="noopener noreferrer" className={styles.sectionLink}>YouTube ↗</a>
              <a href="https://rutube.ru/channel/24042860/" target="_blank" rel="noopener noreferrer" className={styles.sectionLink}>RuTube ↗</a>
              <a href="/photos" className={styles.sectionLink}>Все фото →</a>
            </div>
          </header>

          <div className={styles.mediaGrid}>
            {/* Featured video */}
            <a href={VIDEO.href} target="_blank" rel="noopener noreferrer" className={styles.mediaVideo}>
              <img src={VIDEO.thumb} alt="" className={styles.mediaVideoImg} />
              <div className={styles.mediaVideoOverlay}>
                <div className={styles.mediaPlay}>
                  <span>▶</span>
                </div>
                <div className={styles.mediaVideoMeta}>
                  <span className={styles.mediaVideoBadge}>{VIDEO.dur}</span>
                  <h3 className={styles.mediaVideoTitle}>{VIDEO.title}</h3>
                  <span className={styles.mediaVideoDate}>{VIDEO.date}</span>
                </div>
              </div>
            </a>

            {/* Photos asymmetric */}
            {PHOTOS.map((p, i) => (
              <figure key={i} className={`${styles.mediaPhoto} ${styles[`mediaPhoto_${p.size}`]}`}>
                <img src={p.src} alt={p.cap} className={styles.mediaPhotoImg} />
                <figcaption className={styles.mediaPhotoCap}>
                  <span>{p.cap}</span>
                  <span className={styles.mediaPhotoDate}>{p.date}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── NOTES LIBRARY ── */}
        <section className={styles.section}>
          <header className={styles.sectionHead}>
            <span className={styles.sectionLabel}>240+ / партитур</span>
            <h2 className={styles.sectionTitle}>
              Нотная библиотека —<br />
              открытый репертуар
            </h2>
            <p className={styles.sectionSub}>
              Все партитуры, которые мы используем, доступны для скачивания.
              Для педагогов и хоровых коллективов.
            </p>
            <a href="/notes" className={styles.sectionLink}>Вся библиотека →</a>
          </header>

          <div className={styles.notesList}>
            {NOTES.map((n) => (
              <a key={n.num} href="#" className={styles.noteRow}>
                <span className={styles.noteNum}>{n.num}</span>
                <span className={styles.noteTitle}>{n.title}</span>
                <span className={styles.noteComposer}>{n.composer}</span>
                <span className={styles.noteVoice}>{n.voice}</span>
                <span className={styles.noteDl}>PDF ↓</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── BIG CTA ── */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Запись на сезон<br />
            <span className={styles.ctaAccent}>2026–27 открыта</span>
          </h2>
          <p className={styles.ctaText}>
            Прослушивания мальчиков 5–10 лет — каждую субботу мая в 11:00.
            Записаться можно по телефону или через форму на странице контактов.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contacts" className={styles.ctaBtn}>Записаться на прослушивание ↗</a>
            <a href="tel:+79254345198" className={styles.ctaPhone}>+7 (925) 434-51-98</a>
          </div>
        </section>

        {/* ── FOOTER (Pragmatica-style) ── */}
        <footer className={styles.footer}>
          <div className={styles.footTop}>
            <div className={styles.footMark}>
              <span className={styles.footMarkBig}>орлята</span>
              <span className={styles.footMarkSub}>хоровая капелла мальчиков · Зеленоград · с 2005</span>
            </div>
            <a href="/contacts" className={styles.footCta}>обсудить запись →</a>
          </div>

          <div className={styles.footGrid}>
            <div className={styles.footCol}>
              <p className={styles.footHead}>Адрес</p>
              <p>Зеленоград</p>
              <p>Центральная пл., 1</p>
              <p>КЦ «Зеленоград»</p>
              <p className={styles.footMuted}>проезд от ст. Крюково</p>
            </div>
            <div className={styles.footCol}>
              <p className={styles.footHead}>Контакты</p>
              <p><a className={styles.footLink} href="mailto:info@zelorlyata.ru">info@zelorlyata.ru</a></p>
              <p><a className={styles.footLink} href="tel:+79254345198">+7 (925) 434-51-98</a></p>
              <p><a className={styles.footLink} href="tel:+79162584912">+7 (916) 258-49-12</a></p>
            </div>
            <div className={styles.footCol}>
              <p className={styles.footHead}>Сайт</p>
              <p><a className={styles.footLink} href="/about">О капелле</a></p>
              <p><a className={styles.footLink} href="/news">Новости</a></p>
              <p><a className={styles.footLink} href="/photos">Фото и видео</a></p>
              <p><a className={styles.footLink} href="/notes">Ноты</a></p>
            </div>
            <div className={styles.footCol}>
              <p className={styles.footHead}>Сцена</p>
              <p><a className={styles.footLink} href="https://www.youtube.com/@orlyata" target="_blank" rel="noopener noreferrer">YouTube ↗</a></p>
              <p><a className={styles.footLink} href="https://rutube.ru/channel/24042860/" target="_blank" rel="noopener noreferrer">RuTube ↗</a></p>
              <p><a className={styles.footLink} href="/oferta">Пользовательская оферта</a></p>
            </div>
          </div>

          <div className={styles.footFoot}>
            <span>© 2005—2026 Хоровая капелла мальчиков «Орлята»</span>
            <span className={styles.footMuted}>дизайн · Орлята × Pragmatica</span>
          </div>
        </footer>

      </main>
    </div>
  );
}
