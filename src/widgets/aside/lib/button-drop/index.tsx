import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';

export const renderBtnDropDown = () => (
  <button type='button'>
    <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
  </button>
);
