import { FormEvent } from 'react';
import styles from './EnrollCTA.module.css';
import Button from '../../atoms/Button';
import InputField from '../../atoms/InputField';
import bg from '../../../assets/bg3.png';

export default function EnrollCTA() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Хотите вырастить творческую личность —{' '}
        запишите мальчика в&nbsp;капеллу
      </h2>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <InputField label="ФИО родителя" name="parent" placeholder="Семёнова Мария Павловна" />
            <InputField label="ФИО ребёнка"   name="child"  placeholder="Семёнов Эдуард Алексеевич" />
            <InputField label="Дата рождения" name="birth"  placeholder="16.02.2021" />
            <InputField label="Телефон"       name="phone"  placeholder="+7 (926) 232-11-27" type="tel" />
          </div>
          <Button variant="primary">
            отправить заявку <span aria-hidden="true">↗</span>
          </Button>
        </form>
      </div>
    </section>
  );
}
