import { ReactNode } from 'react';
import clsx from 'clsx';
import { BtnClasses } from 'types/enums/button';
import styles from './style.module.css';

export const Button = ({ children, styleBtn }: { children: ReactNode; styleBtn: BtnClasses }) => {
  const classes = clsx(styles.btn, styleBtn && styles[styleBtn]);
  return (
    <button type='button' className={classes}>
      {children}
    </button>
  );
};
