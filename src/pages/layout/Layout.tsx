import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Sprite } from 'components/sprite/Sprite';
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
