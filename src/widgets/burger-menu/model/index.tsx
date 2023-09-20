import { ReactNode, useCallback, useState } from 'react';
import { BurgerContext } from './context';

export const BurgerWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpen, setStateOpen] = useState(true);
  const changeStateBurger = useCallback(() => setStateOpen((v) => !v), []);

  return <BurgerContext.Provider value={{ isOpen, changeStateBurger }}>{children}</BurgerContext.Provider>;
};
