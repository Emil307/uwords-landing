import React from 'react';
import styles from './styles.module.css';

export const IntroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <h1 className={styles.title}>The first based on <span>your vocabulary</span> English learning platform</h1>
      </div>
    </div>
  )
}
