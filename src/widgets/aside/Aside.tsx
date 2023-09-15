import { renderNavHardList } from './lib/hard-link';
import { renderNavSimpleList } from './lib/simple-link';
import styles from './aside.module.css';

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
