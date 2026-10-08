import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { navigationItems } from './header.constants';

import styles from './Header.module.scss';
import React from 'react';

type Props = {
  className?: string;
};

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={classNames(styles.navigation, className)}>
      <ul>
        {navigationItems.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                classNames(styles.navigationLink, {
                  [styles.navigationLinkActive]: isActive,
                })
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
