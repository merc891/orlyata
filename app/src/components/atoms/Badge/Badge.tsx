import { type ReactNode } from 'react';
import styles from './Badge.module.css';

type Tone = 'default' | 'inverse' | 'overlay';

interface BadgeProps {
  tone?: Tone;
  children: ReactNode;
}

export default function Badge({ tone = 'default', children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
