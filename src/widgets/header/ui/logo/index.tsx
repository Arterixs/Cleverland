import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import styles from './styles.module.css';

export const LOGO = () => (
  <section className={styles.wrapper}>
    <SvgSprite svgId={SvgId.LOGO} style={SvgClasses.LOGO} />
    <SvgSprite svgId={SvgId.TITLE} style={SvgClasses.TITLE} />
  </section>
);
