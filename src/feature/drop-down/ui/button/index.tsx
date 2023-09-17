import { useNavigationContext } from 'shared/lib/context';
import { Button } from 'shared/ui/button';
import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { BtnClasses } from 'types/enums/button';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';

export const ButtonArrow = () => {
  const { isOn, changeStateMenu } = useNavigationContext();
  const classesIsRotateBtn = isOn
    ? [BtnClasses.NAV_DROP_DOWN, BtnClasses.UNROTATE]
    : [BtnClasses.NAV_DROP_DOWN, BtnClasses.ROTATE];
  return (
    <Button styleBtn={classesIsRotateBtn} onClick={changeStateMenu}>
      <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
    </Button>
  );
};
