import { ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export default function Button({ variant = 'primary', children, onClick, href }: ButtonProps) {
  const cls = `${styles.button} ${styles[variant]}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
