import { BOOKS_PATH, CONTRACT_PATH, TERMS_PATH } from 'shared/contants/router';
import { renderNavHardList } from '../lib/hard-link';
import { renderNavSimpleList } from '../lib/simple-link';
import { BOOKS_SHOWCASE, OFERTA, RULES } from './constants';

export const itemsMenu = [
  {
    id: 1,
    title: BOOKS_SHOWCASE,
    path: `/${BOOKS_PATH}`,
    renderProp: renderNavHardList,
  },
  {
    id: 2,
    title: RULES,
    path: `/${CONTRACT_PATH}`,
    renderProp: renderNavSimpleList,
  },
  {
    id: 3,
    title: OFERTA,
    path: `/${TERMS_PATH}`,
    renderProp: renderNavSimpleList,
  },
];
