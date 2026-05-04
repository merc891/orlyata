import styles from './TeacherCard.module.css';

interface TeacherCardProps {
  name: string;
  role: string;
  photo?: string;
  /** Сдвиг фото внутри круга по вертикали в пикселях. Положительное значение — фото уезжает ниже. */
  photoOffsetY?: number;
}

function getInitials(fullName: string): string {
  const parts = fullName.split(' ').filter(Boolean);
  return parts.slice(0, 2).map(p => p[0]).join('');
}

export default function TeacherCard({ name, role, photo, photoOffsetY }: TeacherCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        {photo
          ? <img
              src={photo}
              alt={name}
              className={styles.photoImg}
              style={photoOffsetY ? { objectPosition: `center calc(50% + ${photoOffsetY}px)` } : undefined}
            />
          : <span className={styles.initials}>{getInitials(name)}</span>}
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </article>
  );
}
