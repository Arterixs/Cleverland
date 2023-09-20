import { renderNavHardList } from '../lib/hard-link';
import { renderNavSimpleList } from '../lib/simple-link';

export const itemsMenu = [
  {
    id: 1,
    title: 'Витрина книг',
    path: '/books',
    renderProp: renderNavHardList,
  },
  {
    id: 2,
    title: 'Правила пользования',
    path: '/contract',
    renderProp: renderNavSimpleList,
  },
  {
    id: 3,
    title: 'Договор оферты',
    path: '/terms',
    renderProp: renderNavSimpleList,
  },
];
