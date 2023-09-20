import { useBurgerContext } from 'shared/lib/context';
import { Button } from 'shared/ui/button';

export const Burger = () => {
  const { changeStateBurger } = useBurgerContext();
  return (
    <Button onClick={changeStateBurger}>
      <span />
      <span />
      <span />
    </Button>
  );
};
