import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { NavigateCategory } from 'widgets/aside/ui/nav-category';
import styles from '../../aside.module.css';

export const renderNavHardList = ({ title, path }: { title: string; path: string }) => {
  const classesActiveLink = clsx(styles.active, styles.link, styles['link-underline']);
  return (
    <>
      <div className={clsx(styles['menu__list-conteiner'], styles['nav-main__link-wrap'])}>
        <NavLink to={path} className={({ isActive }) => (isActive ? classesActiveLink : styles.link)}>
          <p>{title}</p>
        </NavLink>
        <button type='button' className={styles.button}>
          <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
        </button>
      </div>
      <NavigateCategory />
    </>
  );
};
