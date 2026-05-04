import styles from './Geography.module.css';

const COUNTRIES = ['Швеция', 'Финляндия', 'Венгрия', 'Болгария', 'Сербия', 'Польша', 'Македония', 'Украина'];

export default function Geography() {
  return (
    <section className={styles.section}>
      <p className={styles.heading}>конкурсы</p>
      <div className={styles.description}>
        <p>Старший хор активно выступает и принимает участие во многих московских, российских фестивалях и конкурсах. В разные годы хор становился лауреатом и дипломантом таких фестивалей и конкурсов, как «Чиста небесная лазурь», «Золотой Витязь», «Музыкальный Олимп», «Приношение Петру Чайковскому».</p>
        <p>«Орлята» успешно принимали участие в международных хоровых конкурсах, где становились лауреатами I и II степени.</p>
      </div>
      <div className={styles.countries}>
        {COUNTRIES.map(country => (
          <span key={country} className={styles.country}>{country}</span>
        ))}
      </div>
    </section>
  );
}
