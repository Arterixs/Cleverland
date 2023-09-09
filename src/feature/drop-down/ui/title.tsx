import { useContext } from 'react';
import { TitleClasses } from 'types/enums/dropdown/title';
import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { TITLE_MENU_CAT } from 'shared/contants/naming';
import { SvgId } from 'types/enums/svg/id-svg';
import { DropDownContext } from '../model/context';
import styles from './title.module.css';

export const MenuTitle = ({ style }: { style: TitleClasses }) => {
  const { changeStateMenu, isOn } = useContext(DropDownContext);
  const classes = isOn ? SvgClasses.ARROW_MENU_ACTIVE : SvgClasses.ARROW_MENU;
  return (
    <div className={styles[`${style}`]} onClick={changeStateMenu} onKeyUp={() => {}} role='button' tabIndex={0}>
      <div className={styles.menu__container_wrapper}>
        <h2 className={styles.menu__container_title}>{TITLE_MENU_CAT}</h2>
        <SvgSprite style={classes} svgId={SvgId.ARROW_MENU} />
      </div>
    </div>
  );
};
