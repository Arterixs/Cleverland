import { Route, Navigate, Routes } from 'react-router-dom';
import { LayoutMainPage } from 'widgets/layout-main/Layout-main';
import { Layout } from 'shared/ui/templates/layout/Layout';

export const AuthRouters = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route index element={<Navigate to='books/all' />} />
      </Route>
    </Route>
  </Routes>
);
