import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './render.module.css';

export const renderNavSimpleList = ({ title, path }: { title: string; path: string }) => {
  const classesActiveLink = clsx(styles.active, styles.link, styles['link-underline']);
  return (
    <div className={styles['nav-main__link-wrap']}>
      <NavLink to={path} className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
        {title}
      </NavLink>
    </div>
  );
};
