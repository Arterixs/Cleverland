import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { PropsLink, PropsWrapperLink } from 'types/interfaces/link-props';
import styles from './styles.module.css';

export const WrapperLink = ({ path, title, renderProp }: PropsWrapperLink) => {
  const classesActiveLink = clsx(styles.active, styles.link);
  return (
    <div className={styles['nav-main__link-wrap']}>
      <NavLink to={path} className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
        {title}
      </NavLink>
      {renderProp && renderProp()}
    </div>
  );
};
