import React from 'react';
import { ButtonStyles } from './styles';

export interface IButtonProps extends Omit<React.ComponentProps<'button'>, 'ref'> {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonStyles {...props}>{children}</ButtonStyles>
  )
}
