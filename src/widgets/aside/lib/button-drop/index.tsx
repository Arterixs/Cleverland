import { Button } from 'shared/ui/button';
import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { BtnClasses } from 'types/enums/button';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';

export const renderBtnDropDown = () => (
  <Button styleBtn={BtnClasses.NAV_DROP_DOWN}>
    <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
  </Button>
);
