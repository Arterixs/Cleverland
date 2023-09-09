import { getCompositionSentences } from 'shared/lib/aside/composition';
import { RULES_LINK, CONTRACT_OFFERTA, TITLE_MENU_CAT } from 'shared/contants/naming';
import { SvgClasses } from 'types/enums/svg/classes-svg';
import { SvgId } from 'types/enums/svg/id-svg';
import { categoryInfo } from './config';
import { SvgSprite } from '../svg-sprite/Svg';
import styles from './aside.module.css';

export const Aside = () => (
  <article className={styles.article}>
    <section className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__container_wrapper}>
          <h2 className={styles.menu__container_title}>{TITLE_MENU_CAT}</h2>
          <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
        </div>
      </div>
      <ul className={styles.menu__list}>
        {categoryInfo.map((category) => {
          const combinationWords = getCompositionSentences(category.name, category.amount);
          return (
            <li className={styles.menu__list_item} key={category.name}>
              {combinationWords}
            </li>
          );
        })}
      </ul>
    </section>
    <p className={styles.link}>{RULES_LINK}</p>
    <p className={styles.link}>{CONTRACT_OFFERTA}</p>
  </article>
);
