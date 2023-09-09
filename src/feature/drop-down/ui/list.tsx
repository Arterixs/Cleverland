import { ReactNode, useContext } from 'react';
import clsx from 'clsx';
import { ListClasses } from 'types/enums/dropdown/ul';
import { DropDownContext } from '../model/context';
import styles from './list.module.css';

export const MenuList = ({ children, style }: { children: ReactNode; style: ListClasses }) => {
  const { isOn } = useContext(DropDownContext);
  const classes = clsx(styles[`${style}`], isOn && styles.menu__list_active);
  return <ul className={classes}>{children}</ul>;
};
