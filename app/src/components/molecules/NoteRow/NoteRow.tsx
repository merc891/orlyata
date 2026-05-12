import { type ReactNode } from 'react';
import styles from './NoteRow.module.css';

interface NoteRowProps {
  index: number | string;
  title: string;
  author: string;
  category: string;
  icon?: ReactNode;
  action?: ReactNode;
  href?: string;
}

function pad(value: number | string) {
  if (typeof value === 'string') return value;
  return value.toString().padStart(2, '0');
}

export default function NoteRow({ index, title, author, category, icon, action, href }: NoteRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <span className={styles.index}>{pad(index)}</span>
        <span className={styles.title}>
          {icon && <span className={styles.titleIcon} aria-hidden="true">{icon}</span>}
          <span className={styles.titleText}>{title}</span>
        </span>
      </div>
      <span className={styles.author}>{author}</span>
      <span className={styles.category}>{category}</span>
      {href ? (
        <a href={href} className={styles.action} aria-label="Скачать">{action}</a>
      ) : (
        <span className={styles.action} aria-hidden="true">{action}</span>
      )}
    </div>
  );
}
