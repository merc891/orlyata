import { type ReactNode } from 'react';
import styles from './SectionTitleCard.module.css';

interface SectionTitleCardProps {
  label: string;
  title: ReactNode;
  linkLabel?: string;
  linkHref?: string;
  variant?: 'light' | 'dark';
}

export default function SectionTitleCard({
  label,
  title,
  linkLabel,
  linkHref,
  variant = 'light',
}: SectionTitleCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <p className={styles.label}>{label}</p>
      <div className={styles.bottom}>
        <p className={styles.title}>{title}</p>
        {linkLabel && linkHref && (
          <a href={linkHref} className={styles.link}>{linkLabel}</a>
        )}
      </div>
    </div>
  );
}
