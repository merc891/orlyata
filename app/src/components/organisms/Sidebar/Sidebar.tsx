import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from '../../molecules/NavItem';
import Button from '../../atoms/Button';
import styles from './Sidebar.module.css';
import logo from '../../../assets/logo1.png';

const NAV_LINKS: { href: string; label: string; end?: boolean }[] = [
  { href: '/about',    label: 'о капелле' },
  { href: '/events',   label: 'события'   },
  { href: '/notes',    label: 'ноты'      },
  { href: '/media',    label: 'медиа'     },
  { href: '/contacts', label: 'контакты'  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Mobile top bar (hidden on desktop) ── */}
      <header className={styles.mobileBar}>
        <div className={styles.mobileBrand}>
          <img src={logo} alt="Орлята" className={styles.mobileLogo} />
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </header>

      {/* ── Backdrop ── */}
      {open && (
        <div
          className={styles.backdrop}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar ── */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
        <div>
          <div className={styles.header}>
            <img src={logo} alt="Орлята" className={styles.logo} />
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <nav className={styles.nav}>
            {NAV_LINKS.map(link => (
              <NavItem key={link.href} href={link.href} end={link.end}>
                {link.label}
              </NavItem>
            ))}
          </nav>
        </div>
        <div className={styles.footer}>
          <Button variant="primary" href="/apply">
            записаться к нам <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
