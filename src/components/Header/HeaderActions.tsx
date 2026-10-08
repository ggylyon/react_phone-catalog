import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { headerActionsItems } from './header.constants';

import styles from './Header.module.scss';
import React from 'react';

export const HeaderActions = () => {
  return (
    <>
      {headerActionsItems.map(({ to, icon, alt }) => (
        <NavLink
          to={to}
          key={to}
          aria-label={alt}
          className={({ isActive }) =>
            classNames(styles.actionButton, {
              [styles.actionButtonActive]: isActive,
            })
          }
        >
          <img src={icon} alt="" aria-hidden="true" />
        </NavLink>
      ))}
    </>
  );
};
