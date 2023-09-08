import styles from './compose.module.css';

export const getRenderComposeWord = (firstWord: string, lastWord: string, num: string) => (
  <>
    <span>{firstWord}</span>
    <div className={styles.item__block}>
      <span>{lastWord}</span>
      <span className={styles.item__block_amount}>{num}</span>
    </div>
  </>
);
