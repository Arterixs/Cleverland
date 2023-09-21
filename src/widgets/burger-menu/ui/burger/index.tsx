import clsx from 'clsx';
import { useBurgerContext } from 'widgets/burger-menu/lib/context';
import { Button } from 'shared/ui/button';
import { BtnClasses } from 'types/enums/button';
import styles from './style.module.css';

export const Burger = () => {
  const { isOpen, changeStateBurger } = useBurgerContext();
  const classes = clsx({
    [styles['burger-menu__middle']]: true,
    [styles['burger-menu__middle_active']]: isOpen,
  });
  return (
    <Button classNameBtn={[BtnClasses.BURGER]} onClick={changeStateBurger}>
      <span className={classes} />
    </Button>
  );
};
