import { useContext } from 'react';
import { DropDownContext } from 'feature/drop-down/model/context';

export const useNavigationContext = () => useContext(DropDownContext);
