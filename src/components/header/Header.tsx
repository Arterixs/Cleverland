import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <section className={styles.block_title}>
        <section className={styles.block_logo}>
          <h2>Cleverland</h2>
        </section>
        <h1 className={styles.title}>Библиотека</h1>
      </section>
      <section className={styles.person}>
        <h2 className={styles.subtitle}>Привет, Иван!</h2>
      </section>
    </div>
  </header>
);
