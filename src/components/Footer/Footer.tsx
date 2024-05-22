import React from 'react';
import styles from './styles.module.css';

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.credits}>© {date} Uwords</p>
      </div>
    </section>
  )
}
