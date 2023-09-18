import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { categoryInfo } from 'widgets/aside/config/category-info';
import { useNavigationContext } from 'shared/lib/context';
import styles from './style.module.css';

export const NavigateCategory = () => {
  const { isOn } = useNavigationContext();
  const classesActiveSubLink = clsx(styles.active, styles.link);
  return (
    <div className={clsx(!isOn && styles['wrapper-nav_hidden'], styles['wrapper-nav'])} id='navigation_category'>
      <nav className={styles.nav}>
        <ul className={styles.nav__category}>
          {categoryInfo.map((category) => {
            const combinationWords = getCompositionSentences(category.name, category.amount);
            return (
              <li className={styles.category__link} key={category.id}>
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
    </div>
  );
};
