import React from 'react';
import styles from './style.module.css';

export const HowItWorks: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Test our method for yourself</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.first}>1</div>
          <h3>Typical conversation</h3>
          <p>Formulate a sentence in your native language</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.second}>2</div>
          <h3>We bet?</h3>
          <p>To construct a sentence you will use words from your vocabulary</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.third}>3</div>
          <h3>Go ahead and learn!!!</h3>
          <p>learn your favorite words, simplify the formulation of thoughts in English</p>
        </div>
      </div>
    </section>
  )
}
