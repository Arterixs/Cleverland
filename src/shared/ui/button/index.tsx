import clsx from 'clsx';
import styles from './style.module.css';
import { BtnProps } from './types';

export const Button = ({ children, styleBtn, ...props }: BtnProps) => {
  const classes = styleBtn ? clsx(styleBtn.map((_style, indx, arr) => styles[arr[indx]])) : '';

  return (
    <button type='button' className={classes} {...props}>
      {children}
    </button>
  );
};
