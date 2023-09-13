/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, useCallback, useState } from 'react';
import { DropDownContext } from './context';

export const DropDownMenu = ({ children }: { children: ReactNode }) => {
  const [isOn, setStateMenu] = useState(true);
  const changeStateMenu = useCallback(() => setStateMenu((v) => !v), []);

  return <DropDownContext.Provider value={{ isOn, changeStateMenu }}>{children}</DropDownContext.Provider>;
};
