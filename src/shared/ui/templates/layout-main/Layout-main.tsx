import { Outlet } from 'react-router-dom';
import { Aside } from 'widgets/aside/Aside';
import styles from './layout-main.module.css';

export const LayoutMainPage = () => (
  <div className={styles.wrapper}>
    <Aside />
    <Outlet />
  </div>
);
