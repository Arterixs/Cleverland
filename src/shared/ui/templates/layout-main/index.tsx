import { Outlet } from 'react-router-dom';
import { Aside } from 'widgets/aside';
import { UseMediaScreenMedium } from 'shared/lib/math-media/media-screens';
import styles from './styles.module.css';

export const LayoutMainPage = () => {
  const isLargeScreen = UseMediaScreenMedium();
  return (
    <div className={styles.wrapper}>
      {!isLargeScreen && <Aside />}
      <Outlet />
    </div>
  );
};
