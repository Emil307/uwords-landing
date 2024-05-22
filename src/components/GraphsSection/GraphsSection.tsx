import React from 'react';
import styles from './styles.module.css';
import brainGraph from '../../assets/images/brain-graph.jpg';
import barrierGraph from '../../assets/images/barrier-graph.jpg';

export const GraphsSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Increase your learning efficiency with vocabulary-based learning system</h2>
      <div className={styles.wrapper}>
        <div className={styles.graph}>
          <h4>3x more words are remembered</h4>
          <img className={styles.img} src={brainGraph.src} alt="English word forgetting chart" />
        </div>
        <div className={styles.graph}>
          <h4>2x faster break down the language barrier</h4>
          <img className={styles.img} src={barrierGraph.src} alt="English barrier breaking chart" />
        </div>
      </div>
    </section>
  )
}
