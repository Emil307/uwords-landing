import React from 'react';
import styles from './styles.module.css';

export interface IButtonProps extends Omit<React.ComponentProps<'button'>, 'ref'> {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>{children}</button>
  )
}
