import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getCompositionSentences } from 'shared/lib/aside/composition';
import { RULES_LINK, CONTRACT_OFFERTA, TITLE_MENU_CAT } from 'shared/contants/naming';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { categoryInfo } from './config';
import styles from './aside.module.css';
import { SvgSprite } from '../../shared/ui/svg-sprite/Svg';
import { renderNavHardList } from './render-props/hard-link/render-hard';
import { renderNavSimpleList } from './render-props/simple-link/render-text';

const info = [
  {
    id: 1,
    title: 'Витрина книг',
    path: '/books/all',
    renderProp: renderNavHardList,
  },
  {
    id: 2,
    title: 'Правила пользования',
    path: '/books/contract',
    renderProp: renderNavSimpleList,
  },
  {
    id: 3,
    title: 'Договор оферты',
    path: '/books/oferta',
    renderProp: renderNavSimpleList,
  },
];

export const Aside = () => (
  <aside className={styles.aside}>
    <nav className={styles['nav-main']}>
      <ul className={styles['nav-main__list']}>
        {info.map(({ renderProp, path, title, id }) => (
          <li className={styles['nav-main__list-item']} key={id}>
            {renderProp({ title, path })}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
