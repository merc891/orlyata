import { type InputHTMLAttributes, useId } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <input id={inputId} className={styles.input} {...rest} />
    </div>
  );
}
