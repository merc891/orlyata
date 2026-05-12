import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  href: string;
  children: ReactNode;
  end?: boolean;
}

export default function NavItem({ href, children, end }: NavItemProps) {
  return (
    <NavLink
      to={href}
      end={end}
      className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
    >
      {children}
    </NavLink>
  );
}
