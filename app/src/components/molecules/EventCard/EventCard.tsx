import { ReactNode } from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
  date: string;
  title: string;
  icon?: ReactNode;
  href?: string;
}

export default function EventCard({ date, title, icon, href }: EventCardProps) {
  const inner = (
    <>
      <div className={styles.head}>
        <span className={styles.date}>{date}</span>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
    </>
  );
  if (href) return <a href={href} className={styles.card}>{inner}</a>;
  return <div className={styles.card}>{inner}</div>;
}
