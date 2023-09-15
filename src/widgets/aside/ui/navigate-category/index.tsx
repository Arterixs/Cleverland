import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { categoryInfo } from 'widgets/aside/config/category-info';
import styles from './style.module.css';

export const NavigateCategory = () => {
  const classesActiveSubLink = clsx(styles.active, styles.link);
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__category}>
        {categoryInfo.map((category) => {
          const combinationWords = getCompositionSentences(category.name, category.amount);
          return (
            <li className={styles.category__link} key={category.name}>
              <NavLink
                to={`books${category.path}`}
                className={({ isActive }) => (isActive ? classesActiveSubLink : styles.link)}
              >
                {combinationWords}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
