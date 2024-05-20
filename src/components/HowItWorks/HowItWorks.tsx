import React from 'react';
import styles from './style.module.css';

export const HowItWorks: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Test our method for yourself</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.first}>1</div>
          <h4>Typical conversation</h4>
          <p>Formulate a sentence in your native language</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.second}>2</div>
          <h4>We bet?</h4>
          <p>To construct a sentence you will use words from your vocabulary</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.step}>
          <div className={styles.number + ' ' + styles.third}>3</div>
          <h4>Go ahead and learn!!!</h4>
          <p>learn your favorite words, simplify the formulation of thoughts in English</p>
        </div>
      </div>
    </section>
  )
}
