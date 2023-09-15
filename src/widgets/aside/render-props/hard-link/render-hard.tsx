import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { categoryInfo } from 'widgets/aside/config';
import styles from '../../aside.module.css';

export const renderNavHardList = ({ title, path }: { title: string; path: string }) => {
  const classesActiveLink = clsx(styles.active, styles.link, styles['link-underline']);
  const classesActiveSubLink = clsx(styles.active, styles['active-sublink'], styles.sublink);
  return (
    <>
      <div className={clsx(styles['menu__list-conteiner'], styles['nav-main__link-wrap'])}>
        <NavLink to={path} className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
          <p>{title}</p>
        </NavLink>
        <button type='button' className={styles.button}>
          <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
        </button>
      </div>
      <nav className={styles['nav-books']}>
        <ul className={styles['nav-category']}>
          {categoryInfo.map((category) => {
            const combinationWords = getCompositionSentences(category.name, category.amount);
            return (
              <li className={styles.menu__list_item} key={category.name}>
                <NavLink
                  to={`books${category.path}`}
                  className={({ isActive }) => (isActive ? classesActiveSubLink : styles.sublink)}
                >
                  {combinationWords}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
