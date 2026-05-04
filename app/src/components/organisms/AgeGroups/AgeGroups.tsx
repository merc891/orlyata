import { useState } from 'react';
import styles from './AgeGroups.module.css';

const GROUPS = [
  {
    name: 'Подготовительная',
    ageRange: '5–7 лет',
    description: 'Основы музыкальной грамоты, постановка дыхания, простые произведения и игра на блок-флейтах и шумовых инструментах.',
  },
  {
    name: 'Младший хор',
    ageRange: '7–8 лет',
    description: 'Двухголосные классические произведения, народные песни в обработке для хора, основы вокала и сольфеджио.',
  },
  {
    name: 'Старший хор',
    ageRange: '8–12 лет',
    description: 'Русская и зарубежная классика, народные песни, духовная музыка и произведения современных композиторов.',
  },
  {
    name: 'Юношеская группа',
    ageRange: '13–17 лет',
    description: 'Мужской ансамбль баритонов: классика, духовная музыка, песни из кинофильмов. Концерты совместно со старшим хором.',
  },
];

export default function AgeGroups() {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.heading}>возрастные группы</h2>
      </header>
      <div className={styles.table}>
        {GROUPS.map(group => {
          const isOpen = openName === group.name;
          return (
            <div
              key={group.name}
              className={`${styles.row}${isOpen ? ` ${styles.rowOpen}` : ''}`}
            >
              <button
                type="button"
                className={styles.summary}
                onClick={() => setOpenName(isOpen ? null : group.name)}
                aria-expanded={isOpen}
              >
                <span className={styles.age}>{group.ageRange}</span>
                <span className={styles.name}>{group.name}</span>
                <span className={styles.chevron} aria-hidden="true">↓</span>
              </button>
              <div className={styles.descriptionWrap}>
                <div className={styles.descriptionInner}>
                  <p className={styles.description}>{group.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
