import { ReactNode } from 'react';
import { BtnClasses } from 'types/enums/button';

export interface BtnProps {
  children: ReactNode;
  styleBtn?: BtnClasses;
}
