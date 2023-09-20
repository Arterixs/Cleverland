import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { NavigateLinkProps } from './interface';
import styles from './styles.module.css';

export const NavigateLink = ({ path, combinationWords }: NavigateLinkProps) => {
  const classesActiveSubLink = clsx(styles.active, styles.link);
  return (
    <li className={styles.category__link}>
      <NavLink to={`books${path}`} className={({ isActive }) => (isActive ? classesActiveSubLink : styles.link)}>
        {combinationWords}
      </NavLink>
    </li>
  );
};
