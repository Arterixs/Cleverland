import clsx from 'clsx';
import styles from './style.module.css';
import { BtnProps } from './types';

export const Button = ({ children, styleBtn }: BtnProps) => {
  const classes = clsx(styles.btn, styleBtn && styles[styleBtn]);
  return (
    <button type='button' className={classes}>
      {children}
    </button>
  );
};
