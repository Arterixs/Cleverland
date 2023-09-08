import styles from './aside.module.css';
import { categoryInfo } from './config';

export const Aside = () => (
  <article className={styles.article}>
    <section className={styles.books}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Витрина книг</h2>
        </div>
      </div>
      <ul className={styles.list}>
        {categoryInfo.map((category) => (
          <li className={styles.list__item} key={category.name}>
            <p>{category.name}</p>
            <span className={styles.amount}>{category.amount}</span>
          </li>
        ))}
      </ul>
    </section>
    <p className={styles.link}>Правила пользования</p>
    <p className={styles.link}>Договор оферты</p>
  </article>
);
