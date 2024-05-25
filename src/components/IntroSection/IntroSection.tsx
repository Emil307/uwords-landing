import React from 'react';
import styles from './styles.module.css';

export const IntroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <h1>The first <span>vocabulary-based</span> English learning platform</h1>
      </div>
    </div>
  )
}
