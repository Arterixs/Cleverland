import { getCompositionSentences } from 'shared/lib/aside/composition';
import { RULES_LINK, CONTRACT_OFFERTA } from 'shared/contants/naming';
import { DropDownMenu } from 'feature/drop-down/model';
import { MenuList } from 'feature/drop-down/ui/list';
import { ListClasses } from 'types/enums/dropdown/ul';
import { MenuTitle } from 'feature/drop-down/ui/title';
import { TitleClasses } from 'types/enums/dropdown/title';
import { categoryInfo } from './config';
import styles from './aside.module.css';

export const Aside = () => (
  <article className={styles.article}>
    <DropDownMenu>
      <section className={styles.menu}>
        {/* <div className={styles.menu__container}> */}
        <MenuTitle style={TitleClasses.ASIDE} />
        {/* <div className={styles.menu__container_wrapper}>
            <h2 className={styles.menu__container_title}>{TITLE_MENU_CAT}</h2>
            <SvgSprite style={SvgClasses.ARROW_MENU} svgId={SvgId.ARROW_MENU} />
          </div> */}
        {/* </div> */}
        <MenuList style={ListClasses.ASIDE}>
          {categoryInfo.map((category) => {
            const combinationWords = getCompositionSentences(category.name, category.amount);
            return (
              <li className={styles.menu__list_item} key={category.name}>
                {combinationWords}
              </li>
            );
          })}
        </MenuList>
      </section>
    </DropDownMenu>
    <p className={styles.link}>{RULES_LINK}</p>
    <p className={styles.link}>{CONTRACT_OFFERTA}</p>
  </article>
);
