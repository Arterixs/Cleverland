import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { RULES_LINK, CONTRACT_OFFERTA, TITLE_MENU_CAT } from 'shared/contants/naming';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { categoryInfo } from './config';
import styles from './aside.module.css';
import { SvgSprite } from '../svg-sprite/Svg';

export const Aside = () => {
  const classesActiveLink = clsx(styles.active, styles.link, styles['link-underline']);
  const classesActiveSubLink = clsx(styles.active, styles['active-sublink'], styles.sublink);
  return (
    <aside className={styles.aside}>
      <nav className={styles['nav-main']}>
        <ul className={styles['nav-main__list']}>
          <li className={styles['nav-main__list-item']}>
            <div className={clsx(styles['menu__list-conteiner'], styles['nav-main__link-wrap'])}>
              <NavLink to='/books/all' className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
                <p>{TITLE_MENU_CAT}</p>
              </NavLink>
              <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
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
          </li>
          <li className={styles['nav-main__list-item']}>
            <div className={styles['nav-main__link-wrap']}>
              <NavLink to='/books/contract' className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
                <p>{RULES_LINK}</p>
              </NavLink>
            </div>
          </li>
          <li className={styles['nav-main__list-item']}>
            <div className={styles['nav-main__link-wrap']}>
              <NavLink to='/books/oferta' className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
                <p>{CONTRACT_OFFERTA}</p>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
