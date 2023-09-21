import { Outlet } from 'react-router-dom';
import { Aside } from 'widgets/aside';
import { UseMediaScreenLarge } from 'shared/lib/math-media/media-screens';
import styles from './styles.module.css';

export const LayoutMainPage = () => {
  const isLargeScreen = UseMediaScreenLarge();
  return (
    <div className={styles.wrapper}>
      {!isLargeScreen && <Aside />}
      <Outlet />
    </div>
  );
};
