import React from 'react';
import styles from './styles.module.css';

export const FormSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <h3>Submit your email address to be one of the first to gain access...</h3>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder='example@mail.com'
        />
        <button className={styles.button}>Be the first!</button>
      </form>
    </section>
  )
}
