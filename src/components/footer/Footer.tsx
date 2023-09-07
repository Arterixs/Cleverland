import { SvgSprite } from 'components/svg-sprite/Svg';
import { icons } from 'data/icons-footer';
import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.wrapper}>
      <h2 className={styles.title}>© 2020-2023 Cleverland. Все права защищены.</h2>
      <div className={styles.icons}>
        {icons.map((icon) => (
          <div className={styles.block_icon} key={icon.id}>
            <SvgSprite svgId={icon.id} style={icon.styles} />
          </div>
        ))}
      </div>
    </section>
  </footer>
);
