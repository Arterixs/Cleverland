import clsx from 'clsx';
import styles from './style.module.css';
import { BtnProps } from './types';

export const Button = ({ children, classNameBtn, ...props }: BtnProps) => {
  const classes = classNameBtn ? clsx(classNameBtn.map((_style, indx, arr) => styles[arr[indx]])) : '';

  return (
    <button type='button' className={classes} {...props}>
      {children}
    </button>
  );
};
