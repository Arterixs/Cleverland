import styles from './compose.module.css';

export const getSingleRenderWord = (content: string, num: string) => (
  <>
    <p>{content}</p>
    <span className={styles.item__block_amount}>{num}</span>
  </>
);
