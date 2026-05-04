import styles from './AgeGroupCard.module.css';
import Badge from '../../atoms/Badge';

interface AgeGroupCardProps {
  name: string;
  ageRange: string;
  description: string;
}

export default function AgeGroupCard({ name, ageRange, description }: AgeGroupCardProps) {
  return (
    <article className={styles.card}>
      <Badge tone="default">{ageRange}</Badge>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
