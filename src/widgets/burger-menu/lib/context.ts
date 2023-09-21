import { useContext } from 'react';
import { BurgerContext } from '../model/context';

export const useBurgerContext = () => useContext(BurgerContext);
