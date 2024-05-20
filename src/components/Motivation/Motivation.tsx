import React from 'react';
import iphone from '../../assets/images/iphone.png';
import styles from './styles.module.css';

export const Motivation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>Learn English faster by learn individual list of words</h3>
        <p className={styles.text}>Record your random conversations and the app will choose the words for you</p>
      </div>
      <img className={styles.image} src={iphone.src} alt="record your voice for learn English" />
    </div>
  )
}
