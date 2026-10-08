import React from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames';

import phones from '../../assets/images/slider/phones.png';
import ok from '../../assets/icons/ok.svg';

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <button
        type="button"
        className={classNames(styles.navButton, styles.navButtonLeft)}
      ></button>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerInfo}>
            <h2>
              Now available
              <br />
              in our store! <img src={ok} alt="👌" />
            </h2>
            <p>Be the first!</p>
          </div>
          <button>ORDER NOW</button>
        </div>

        <div className={styles.bannerProduct}>
          <div className={styles.productInfo}>
            <h3>iPhone 14 Pro</h3>
            <p>Pro. Beyond.</p>
          </div>
          <img src={phones} alt="iPhone" />
        </div>
      </div>
      <button
        type="button"
        className={classNames(styles.navButton, styles.navButtonRight)}
      ></button>
    </div>
  );
};
