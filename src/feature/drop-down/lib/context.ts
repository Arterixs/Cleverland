import { useContext } from 'react';
import { DropDownContext } from '../model/context';

export const useNavigationContext = () => useContext(DropDownContext);
