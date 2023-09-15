import styles from './aside.module.css';
import { itemsMenu } from './config/items-menu';

export const Aside = () => (
  <aside className={styles.aside}>
    <nav className={styles['nav-main']}>
      <ul className={styles['nav-main__list']}>
        {itemsMenu.map(({ renderProp, path, title, id }) => (
          <li className={styles['nav-main__list-item']} key={id}>
            {renderProp({ title, path })}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
