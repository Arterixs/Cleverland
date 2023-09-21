import { TITLE_PROJECT } from 'shared/contants/naming';
import { UseMediaScreenMedium } from 'shared/lib/math-media/media-screens';
import { BurgerMenu } from 'widgets/burger-menu';
import { LOGO } from './ui/logo';
import { Profile } from './ui/profile';
import styles from './styles.module.css';

export const Header = () => {
  const isLargeScreen = UseMediaScreenMedium();
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <section className={styles.wrapper}>
          {isLargeScreen && <BurgerMenu />}
          {!isLargeScreen && <LOGO />}
          <h1 className={styles.title}>{TITLE_PROJECT}</h1>
        </section>
        {!isLargeScreen && <Profile />}
      </div>
    </header>
  );
};
