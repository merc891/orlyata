import { type ReactNode } from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function PageHero({ label, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className={`${styles.hero}${image ? ` ${styles.hasImage}` : ''}`}>
      {image && (
        <img className={styles.image} src={image} alt={imageAlt ?? ''} />
      )}
      <div className={styles.body}>
        {label && <p className={styles.label}>{label}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {children && <div className={styles.aside}>{children}</div>}
    </section>
  );
}
