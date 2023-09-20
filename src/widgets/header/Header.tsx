import { SvgSprite } from 'shared/ui/svg-sprite/Svg';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { DEFAULT_HELLO, TITLE_PROJECT } from 'shared/contants/naming';
import { BurgerMenu } from 'widgets/burger-menu';
import avatar from '../../assets/images/webp/avatar.webp';
import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <BurgerMenu />
      <section className={styles.block_title}>
        <section className={styles.block_logo}>
          <SvgSprite svgId={SvgId.LOGO} style={SvgClasses.LOGO} />
          <SvgSprite svgId={SvgId.TITLE} style={SvgClasses.TITLE} />
        </section>
        <h1 className={styles.title}>{TITLE_PROJECT}</h1>
      </section>
      <section className={styles.person}>
        <h2 className={styles.subtitle}>{DEFAULT_HELLO}</h2>
        <img className={styles.img} width='58' height='58' src={avatar} alt='avatar' />
      </section>
    </div>
  </header>
);
