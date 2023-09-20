import { useContext } from 'react';
import { DropDownContext } from 'feature/drop-down/model/context';
import { BurgerContext } from 'widgets/burger-menu/model/context';

export const useNavigationContext = () => useContext(DropDownContext);
export const useBurgerContext = () => useContext(BurgerContext);
