import { SvgProp } from 'types/interfaces/svg';
import styles from './svg.module.css';

export const SvgSprite = ({ svgId, style }: SvgProp) => (
  <svg className={styles[`${style}`]}>
    <use href={`#${svgId}`} />
  </svg>
);
