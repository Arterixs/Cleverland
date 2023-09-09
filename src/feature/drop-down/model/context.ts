import { createContext } from 'react';

export const DropDownContext = createContext({
  isOn: true,
  changeStateMenu: () => {},
});
