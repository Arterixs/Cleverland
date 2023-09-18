import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.module.css';

interface NavigateLinkProps {
  path: string;
  combinationWords: JSX.Element | string;
}

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
