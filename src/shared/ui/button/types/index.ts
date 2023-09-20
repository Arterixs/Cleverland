import { ButtonHTMLAttributes, ReactNode } from 'react';
import { BtnClasses } from 'types/enums/button';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNameBtn?: BtnClasses[];
}
