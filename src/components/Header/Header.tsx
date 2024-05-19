import React from 'react';
import styles from './styles.module.css';
import { Button } from '../../UI';

export const Header: React.FC = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div>
          Uwords
        </div>
        <div className={styles.right}>
          <Button
            style={{
              height: "38px"
            }}
          >
            Start learning
          </Button>
        </div>
      </div>
    </div>
  )
}
