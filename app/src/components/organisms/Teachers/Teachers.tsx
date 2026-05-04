import { useRef } from 'react';
import styles from './Teachers.module.css';
import TeacherCard from '../../molecules/TeacherCard';
import photoChernetsovAndrey from '../../../assets/chernetsov-andrey-viktorovich_w546.png';
import photoKarpman from '../../../assets/karpman-irina-rafailovna_w546.png';
import photoChernetsovaElena from '../../../assets/chernetsova-elena-ivanovna_w546.png';
import photoKlimova from '../../../assets/klimova-maryana-leonidovna_w546.png';
import photoUgolnikova from '../../../assets/ou2.png';
import photoMoiseeva from '../../../assets/noname-3.png';

const TEACHERS = [
  { name: 'Чернецов Андрей Викторович', role: 'Художественный руководитель. Заслуженный работник культуры РФ. Руководитель младшего, старшего хора и юношеской группы, педагог по вокалу.', photo: photoChernetsovAndrey },
  { name: 'Карпман Ирина Рафаиловна',   role: 'Создатель капеллы и хормейстер младшего, старшего хора и юношеской группы. Педагог по вокалу, теории музыки и сольфеджио.', photo: photoKarpman, photoOffsetY: 25 },
  { name: 'Чернецова Елена Ивановна',   role: 'Хормейстер хора подготовительного отделения, педагог по вокалу, теории музыки и сольфеджио.', photo: photoChernetsovaElena },
  { name: 'Климова Марьяна Геннадиевна', role: 'Концертмейстер капеллы.', photo: photoKlimova },
  { name: 'Угольникова Ольга Александровна', role: 'Хормейстер младшего и старшего хора.', photo: photoUgolnikova },
  { name: 'Моисеева Мария Андреевна',   role: 'Хормейстер младшего и старшего хора.', photo: photoMoiseeva },
];

export default function Teachers() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(slider).columnGap || '0');
    slider.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.label}>Команда</p>
          <h2 className={styles.heading}>педагоги капеллы</h2>
        </div>
        <div className={styles.controls}>
          <button type="button" className={styles.nav} aria-label="Назад" onClick={() => scrollByCard(-1)}>←</button>
          <button type="button" className={styles.nav} aria-label="Вперёд" onClick={() => scrollByCard(1)}>→</button>
        </div>
      </header>
      <div className={styles.grid} ref={sliderRef}>
        {TEACHERS.map(teacher => (
          <TeacherCard key={teacher.name} {...teacher} />
        ))}
      </div>
    </section>
  );
}
