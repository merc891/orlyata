import { type ReactNode } from 'react';
import styles from './MediaCard.module.css';

interface MediaCardProps {
  chips: ReactNode;
  title: string;
}

export default function MediaCard({ chips, title }: MediaCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.chips}>{chips}</div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
