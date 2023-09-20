import { createContext } from 'react';

export const BurgerContext = createContext({
  isOpen: true,
  changeStateBurger: () => {},
});
