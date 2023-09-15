import { ReactNode } from 'react';

export interface PropsLink {
  title: string;
  path: string;
}

export interface PropsWrapperLink {
  title: string;
  path: string;
  renderProp?: () => ReactNode;
}
