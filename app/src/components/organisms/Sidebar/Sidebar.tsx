import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from '../../molecules/NavItem';
import Button from '../../atoms/Button';
import styles from './Sidebar.module.css';
import logo from '../../../assets/logo.svg';

const NAV_LINKS = [
  { href: '/',              label: 'Главная',    end: true },
  { href: '/about',         label: 'О капелле'   },
  { href: '/announcements', label: 'Объявления'  },
  { href: '/notes',         label: 'Ноты'        },
  { href: '/photos',        label: 'Фотогалерея' },
  { href: '/video',         label: 'Видео'       },
  { href: '/contacts',      label: 'Контакты'    },
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
          <img src={logo} alt="" className={styles.mobileLogo} />
          <span className={styles.mobileLogoName}>Орлята</span>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
          aria-expanded={open}
        >
          <span /><span /><span />
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
            <img src={logo} alt="" className={styles.logo} />
            <span className={styles.logoName}>Орлята</span>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              ✕
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
            Записаться к нам ↗
          </Button>
        </div>
      </aside>
    </>
  );
}
