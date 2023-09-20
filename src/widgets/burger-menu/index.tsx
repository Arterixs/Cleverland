import { BurgerWrapper } from './model';
import { Burger } from './ui/burger';
import { BurgerContent } from './ui/burger-content';

export const BurgerMenu = () => (
  <BurgerWrapper>
    <Burger />
    <BurgerContent />
  </BurgerWrapper>
);
