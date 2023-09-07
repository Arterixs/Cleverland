import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import { Sprite } from 'shared/sprite/Sprite';
import styles from './layout.module.css';

export const Layout = () => (
  <div className={styles.containter}>
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
    <Sprite />
  </div>
);
