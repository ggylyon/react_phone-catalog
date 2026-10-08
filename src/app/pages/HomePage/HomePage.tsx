import React from 'react';
import styles from './HomePage.module.scss';
import { Slider } from '../../../components/Slider';

export const HomePage = () => {
  return (
    <section className={styles.container}>
      <h2>Welcome to Nice Gadgets store!</h2>

      <Slider />
    </section>
  );
};
