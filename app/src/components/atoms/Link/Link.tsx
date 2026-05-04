import { ReactNode } from 'react';
import styles from './Link.module.css';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  return <a href={href} className={styles.link}>{children}</a>;
}
