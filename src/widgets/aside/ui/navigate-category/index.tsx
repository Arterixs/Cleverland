import clsx from 'clsx';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { categoryInfo } from 'widgets/aside/config/category-info';
import { ALL_BOOKS } from 'widgets/aside/config/constants';
import { useNavigationContext } from 'feature/drop-down/lib/context';
import styles from './style.module.css';
import { NavigateLink } from '../navigate-link';

export const NavigateCategory = () => {
  const { isOn } = useNavigationContext();
  return (
    <div className={clsx(!isOn && styles['wrapper-nav_hidden'], styles['wrapper-nav'])} id='navigation_category'>
      <nav className={styles.nav}>
        <ul className={styles.nav__category}>
          <NavigateLink path='/all' combinationWords={ALL_BOOKS} />
          {categoryInfo.map((category) => {
            const combinationWords = getCompositionSentences(category.name, category.amount);
            return <NavigateLink path={category.path} combinationWords={combinationWords} key={category.id} />;
          })}
        </ul>
      </nav>
    </div>
  );
};
