import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import styles from './Layout.module.css';

export const Layout = () => (
  <div className={styles.containter}>
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);
