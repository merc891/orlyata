import { type ReactNode } from 'react';
import styles from './Tag.module.css';

type Size = 'sm' | 'md';

interface TagProps {
  size?: Size;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Tag({ size = 'md', children, href, onClick }: TagProps) {
  const cls = `${styles.tag} ${styles[size]}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  if (onClick) return <button type="button" className={cls} onClick={onClick}>{children}</button>;
  return <span className={cls}>{children}</span>;
}
