import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Navigation } from './Navigation';
import { HeaderActions } from './HeaderActions';

import styles from './Header.module.scss';

import menuOpenIcon from '../../assets/icons/menu-open.svg';
import menuCloseIcon from '../../assets/icons/menu-close.svg';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>

          <div className={styles.desktopNavigation}>
            <Navigation />
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.desktopActions}>
            <HeaderActions />
          </div>

          <button
            type="button"
            onClick={handleMenuToggle}
            className={classNames(styles.actionButton, styles.menuButton)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <img src={isMenuOpen ? menuCloseIcon : menuOpenIcon} alt="" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavigation}>
            <Navigation />
          </div>

          <div className={styles.mobileActions}>
            <HeaderActions />
          </div>
        </div>
      )}
    </>
  );
};
