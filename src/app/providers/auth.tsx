import { Route, Navigate, Routes } from 'react-router-dom';
import { MainPage } from 'pages/main/Main';
import { LayoutMainPage } from 'shared/ui/templates/layout-main/Layout-main';
import { Layout } from 'shared/ui/templates/layout/Layout';

export const AuthRouters = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route index element={<Navigate to='books/all' />} />
        <Route path='/books/:category' element={<MainPage />} />
      </Route>
    </Route>
  </Routes>
);
