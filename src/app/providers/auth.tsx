import { Route, Navigate, Routes } from 'react-router-dom';
import { LayoutMainPage } from 'pages/layout-main/Layout-main';
import { Layout } from 'pages/layout/Layout';

export const AuthRouters = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route index element={<Navigate to='books/all' />} />
      </Route>
    </Route>
  </Routes>
);
