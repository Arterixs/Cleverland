import { DEFAULT_HELLO } from 'shared/contants/naming';
import avatar from 'assets/images/webp/avatar.webp';
import styles from './styles.module.css';

export const Profile = () => (
  <section className={styles.person}>
    <h2 className={styles.subtitle}>{DEFAULT_HELLO}</h2>
    <img className={styles.img} width='58' height='58' src={avatar} alt='avatar' />
  </section>
);
